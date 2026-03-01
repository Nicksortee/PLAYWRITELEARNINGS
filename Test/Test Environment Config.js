//Test Environment Config
//In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

//Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

// Environment input
let env = "staging"; // dev, staging, qa, production/prod

// Config object to store environment details
let config = {};

// Switch statement for environment
switch (env) {
    case "dev":
        const DEV_URL = "https://dev.example.com";
        const DEV_API_KEY = "DEV-XXXX-XXXX";
        const DEV_TIMEOUT = 3000; // milliseconds
        config = {
            baseUrl: DEV_URL,
            apiKeyPattern: DEV_API_KEY,
            timeout: DEV_TIMEOUT,
            description: "Development environment"
        };
        break;
        
    case "staging":
        const STAGING_URL = "https://staging.example.com";
        const STAGING_API_KEY = "STG-XXXX-XXXX";
        const STAGING_TIMEOUT = 5000;
        config = {
            baseUrl: STAGING_URL,
            apiKeyPattern: STAGING_API_KEY,
            timeout: STAGING_TIMEOUT,
            description: "Staging environment"
        };
        break;
        
    case "qa":
        const QA_URL = "https://qa.example.com";
        const QA_API_KEY = "QA-XXXX-XXXX";
        const QA_TIMEOUT = 4000;
        config = {
            baseUrl: QA_URL,
            apiKeyPattern: QA_API_KEY,
            timeout: QA_TIMEOUT,
            description: "QA testing environment"
        };
        break;
        
    case "production":
    case "prod":
        const PROD_URL = "https://example.com";
        const PROD_API_KEY = "PROD-XXXX-XXXX";
        const PROD_TIMEOUT = 8000;
        config = {
            baseUrl: PROD_URL,
            apiKeyPattern: PROD_API_KEY,
            timeout: PROD_TIMEOUT,
            description: "Production environment"
        };
        break;
        
    default:
        config = {
            baseUrl: "Unknown",
            apiKeyPattern: "Unknown",
            timeout: 0,
            description: "Unknown environment"
        };
}

// Print configuration
console.log("Environment Config:");
console.log(config);