db.createUser({
    user: "mongouser",
    pwd: "mongopass",
    roles: [{
        role: "readWrite",
        db: "smart-home-db"
    }]
});

db = db.getSiblingDB('smart-home-db');

db.createCollection("telemetry_devices");
db.createCollection("telemetry");
db.createCollection("devices");