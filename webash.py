# Basic endpoint for testing
from flask import Flask
from flask import request
import subprocess
import shlex
import urllib.parse
app = Flask(__name__)

@app.route("/run/",methods = ['POST', 'GET'])
def execute():
    command = 'no command'
    print("============")
    command = (request.data).decode("utf-8")
    print(command)
    if request.method == 'POST':
        print('Started executing command')
        command = shlex.split(command)
        process = subprocess.Popen(command, stdout = subprocess.PIPE)
        print("Run successfully")
        output, err = process.communicate()
        return output
    return "not executed"

if __name__ == "__main__":
    app.run()