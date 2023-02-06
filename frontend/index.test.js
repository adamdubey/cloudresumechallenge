import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders a heading element', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'Adam Dubey')).toBeInTheDocument()
  })

  it('renders a cloud resume challenge link element', () => {
    expect(container.querySelector('#objective>p>a').getAttribute('href')).not.toBeNull()
    expect(container.querySelector('#objective>p>a').getAttribute('href')).toBe("https://cloudresumechallenge.dev/")
    expect(getByText(container, 'The Cloud Resume Challenge')).toBeInTheDocument()
  })

  it('renders an experience element', () => {
    expect(container.querySelector('dt')).not.toBeNull()
    expect(getByText(container, 'Experience')).toBeInTheDocument()
  })

  it('renders a certifications element', () => {
    expect(container.querySelector('dt')).not.toBeNull()
    expect(getByText(container, 'Certifications')).toBeInTheDocument()
  })

  it('renders a project source link element', () => {
    expect(container.querySelector('footer>p>a').getAttribute('href')).not.toBeNull()
    expect(container.querySelector('footer>p>a').getAttribute('href')).toBe("https://github.com/adamdubey/cloudresumechallenge/")
    expect(getByText(container, 'Project Source')).toBeInTheDocument()
  })

  it('renders a visitor counter element', () => {
    expect(container.querySelector('#visits')).not.toBeNull()
    expect(getByText(container, 'Visits:')).toBeInTheDocument()
  })

})