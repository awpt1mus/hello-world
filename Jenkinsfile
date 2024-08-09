pipeline {
    agent any

    environment {
        NODE_VERSION = '14.x'
        NODE_PATH = '/usr/bin/node'
    }

    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Check if Node.js is already installed
                    def nodeInstalled = sh(script: 'which node', returnStatus: true) == 0
                    if (!nodeInstalled) {
                        echo 'Node.js is not installed. Installing Node.js...'
                        sh 'curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | sudo -E bash -'
                        sh 'sudo apt-get install -y nodejs'
                    } else {
                        echo 'Node.js is already installed.'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

       stage('Run server') {
            steps {
                script {
                    // Install project dependencies
                    sh 'npm start'
                }
            }
        }
    }
}
