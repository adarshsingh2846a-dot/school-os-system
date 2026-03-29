const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    personalInfo: {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true },
        address: String,
        contactNumber: String,
    },
    marks: {
        subject: { type: String, required: true },
        score: { type: Number, required: true },
    },
    attendance: {
        totalClasses: { type: Number, required: true },
        attendedClasses: { type: Number, required: true },
    },
    fees: {
        totalAmount: { type: Number, required: true },
        paidAmount: { type: Number, required: true },
        dueAmount: { type: Number, required: true },
    }
});

module.exports = mongoose.model('Student', studentSchema);