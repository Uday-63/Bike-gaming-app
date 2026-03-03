pipeline {
    agent any

    environment {
        IMAGE_NAME = "bike-game-image"
        CONTAINER_NAME = "bike-game-container"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url:'https://github.com/Uday-63/Bike-gaming-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }
}
