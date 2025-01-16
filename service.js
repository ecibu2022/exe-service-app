import { Service } from 'node-windows';

// Define the service
const svc = new Service({
    name: 'exe-service-app',
    description: 'My exe-service-app as a Windows Service',
    script: 'D:\\Training\\APIs\\Executables EXE Files\\exe-service-app\\app.js'
});

// Listen for the "install" event, which indicates the service is installed
svc.on('install', () => {
    svc.start();
    console.log('Service installed and started');
});

// Install the service
svc.install();