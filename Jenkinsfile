pipeline {
    agent any

    environment {
        APP_LOGIN = credentials('healthcare-login')
        APP_USERNAME = "${APP_LOGIN_USR}"
        APP_PASSWORD = "${APP_LOGIN_PSW}"
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['Smoke', 'Regression', 'All'],
            description: 'Select Test Suite'
        )
    }

    stages {

        stage('Check Node') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Cross Browser Execution') {

            parallel {

                stage('Chromium') {
                    steps {
                        script {
                            if (params.TEST_SUITE == 'Smoke') {
                                bat 'npx playwright test --project=chromium --grep "@Smoke"'
                            } else if (params.TEST_SUITE == 'Regression') {
                                bat 'npx playwright test --project=chromium --grep "@Regression"'
                            } else {
                                bat 'npx playwright test --project=chromium'
                            }
                        }
                    }
                }

                stage('Firefox') {
                    steps {
                        script {
                            if (params.TEST_SUITE == 'Smoke') {
                                bat 'npx playwright test --project=firefox --grep "@Smoke"'
                            } else if (params.TEST_SUITE == 'Regression') {
                                bat 'npx playwright test --project=firefox --grep "@Regression"'
                            } else {
                                bat 'npx playwright test --project=firefox'
                            }
                        }
                    }
                }

                stage('WebKit') {
                    steps {
                        script {
                            if (params.TEST_SUITE == 'Smoke') {
                                bat 'npx playwright test --project=webkit --grep "@Smoke"'
                            } else if (params.TEST_SUITE == 'Regression') {
                                bat 'npx playwright test --project=webkit --grep "@Regression"'
                            } else {
                                bat 'npx playwright test --project=webkit'
                            }
                        }
                    }
                }

            }
        }

    }

    post {

        always {

            echo 'Publishing Reports...'

            // Publish Playwright HTML Report
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            // Publish Allure Report
            allure([
                includeProperties: false,
                jdk: '',
                commandline: 'Allure',
                results: [[path: 'allure-results']]
            ])

            // Archive Reports
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

            // Archive Screenshots, Videos & Traces
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }

        success {
            echo '✅ Playwright Tests Executed Successfully'
        }

        failure {
            echo '❌ Playwright Test Execution Failed'
        }
    }
}