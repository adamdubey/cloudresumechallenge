variable "domain_name" {
  type = string
  description = "Name of the domain"
}

variable "bucket_name" {
  type = string
  description = "Name of the S3 bucket"
}
variable "region" {
    type = string
    default = "us-east-1"
}
variable "access_key" {
    type = string
}
variable "secret_key" {
    type = string
}