pipeline {
    agent any

    tools {
        jdk 'jdk17'
        maven 'maven3'
    }

    environment {
        IMAGE_NAME = "bike-game-image"
        CONTAINER_NAME = "bike-game-container"
    }

    stages {

        stage('Clone Code') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        credentialsId: 'udaycreed',
                        url: 'https://github.com/Uday-63/Bike-gaming-app.git'
                    ]]
                )
            }
        }

        stage('Build with Maven') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('JENKINS TO NEXUS') {
            steps {
                withMaven(
                    maven: 'maven3',
                    jdk: 'jdk17',
                    mavenSettingsConfig: 'settings.xml'
                ) {
                    sh 'mvn deploy'
                }
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
