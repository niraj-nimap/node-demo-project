pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage("Deploy"){
            steps{
            sh 'npm start > output.log 2>&1 &'
            }
        }
    }
}