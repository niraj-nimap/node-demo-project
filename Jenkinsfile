pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
                sh 'echo $USER'
            }
        }
        stage("Deploy"){
            steps{
            sh 'nohup npm start > output.log 2>&1 &'
            }
        }
    }
}