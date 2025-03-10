# AI Form Filler

An AI Agent to fill forms with specific content. This Chrome extension helps with automating job application form filling.

## Project Structure

- Chrome extension (manifest.json, popup.html, popup.js)
- Test webapp (Flask-based form for testing)

## Installation

### Extension Setup

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the project root directory

### Test Webapp Setup

1. Navigate to the test-webapp directory
2. Set up the Python virtual environment:
   ```
   cd test-webapp
   python -m venv env
   source env/bin/activate
   pip install flask
   ```
3. Run the webapp:
   ```
   flask run
   ```
4. Visit http://localhost:5000 to test the form

## Usage

1. Navigate to a job application form
2. Click the extension icon in your browser
3. Follow the prompts to fill the form automatically

## Development

See CLAUDE.md for development guidelines and coding standards.