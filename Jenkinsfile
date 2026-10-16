
pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        DOCKERHUB_USER = 'abishek1445'
        BACKEND_IMAGE = 'abishek1445/flask-backend'
        FRONTEND_IMAGE = 'abishek1445/express-frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    docker build -t ${BACKEND_IMAGE}:${BUILD_NUMBER} ./backend
                    docker build -t ${FRONTEND_IMAGE}:${BUILD_NUMBER} ./frontend

                    docker tag ${BACKEND_IMAGE}:${BUILD_NUMBER} ${BACKEND_IMAGE}:latest
                    docker tag ${FRONTEND_IMAGE}:${BUILD_NUMBER} ${FRONTEND_IMAGE}:latest
                '''
            }
        }
    }
}
