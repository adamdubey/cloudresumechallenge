import os
import re
import json
from unittest import mock

from api import app

with open('../template.yaml', 'r') as f:
    TABLENAME = re.search(r'TableName: (.*)?', f.read()).group(1)

@mock.patch.dict(os.environ, {"TABLENAME": TABLENAME})
def test_lambda_handler():
    assert "AWS_ACCESS_KEY_ID" in os.environ
    assert "AWS_SECRET_ACCESS_KEY" in os.environ
    assert "AWS_DEFAULT_REGION" in os.environ

    returnedLambdaValue = app.lambda_handler("", "")

    assert "statusCode" in returnedLambdaValue
    assert "headers" in returnedLambdaValue
    assert "body" in returnedLambdaValue

    # Check for CORS in Headers
    assert "Access-Control-Allow-Origin"  in returnedLambdaValue["headers"]
    assert "Access-Control-Allow-Methods" in returnedLambdaValue["headers"]
    assert "Access-Control-Allow-Headers" in returnedLambdaValue["headers"]

    # Check status code
    if returnedLambdaValue["statusCode"] == 200:
        assert "visit_count" in returnedLambdaValue["body"]
        assert json.loads(returnedLambdaValue["body"])["visit_count"].isnumeric()
    else:
        assert json.loads(returnedLambdaValue["body"])["visit_count"] == -1

    return