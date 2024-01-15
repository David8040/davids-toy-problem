const prompt = require("prompt-sync")({ sigint: true });

const basicSalary = parseFloat(prompt("Enter your basicSalary:"));
const bonus = 0;
const allowances = 0;
const relief = 5000 + 9000 + 2400;

const calculatePaye = () => {
    if (basicSalary <= 24000) {
        return basicSalary * 0.1;
    } else if (basicSalary > 24000 && basicSalary <= 32333) {
        return basicSalary * 0.25;
    } else if (basicSalary >= 32334 && basicSalary <= 500000) {
        return basicSalary * 0.3;
    } else if (basicSalary >= 500001 && basicSalary <= 800000) {
        return basicSalary * 0.325;
    } else if (basicSalary > 800000) {
        return basicSalary * 0.35;
    }
};

const payeResult = calculatePaye();

const calculateNhifDeduction = () => {
    const salaryRanges = [25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000];
    const deductions = [850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

    return deductions[salaryRanges.findIndex((range) => basicSalary <= range)] || 1700;
};

const nhifDeductionsResult = calculateNhifDeduction();

const calculateNssfDeductions = () => basicSalary * 0.06;

const nssfDeductionsResult = calculateNssfDeductions();

const grossSalary = basicSalary + bonus + allowances;

const netSalary = grossSalary - relief - payeResult - nhifDeductionsResult - nssfDeductionsResult;

console.log(`Gross Salary: ${grossSalary}`);
console.log(`Tax (Payee): ${payeResult}`);
console.log(`NHIF Deductions: ${nhifDeductionsResult}`);
console.log(`NSSF Deductions: ${nssfDeductionsResult}`);
console.log(`Net Salary: ${netSalary}`);
