import { Employee, Alert, ActivityLog } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'EMP001', name: 'John Doe', email: 'john.doe@company.com', department: 'Engineering', riskScore: 15, status: 'Active', role: 'Senior Developer', lastActive: '2024-03-03 09:00' },
  { id: 'EMP002', name: 'Jane Smith', email: 'jane.smith@company.com', department: 'Finance', riskScore: 78, status: 'Under Review', role: 'Accountant', lastActive: '2024-03-03 08:45' },
  { id: 'EMP003', name: 'Robert Brown', email: 'robert.b@company.com', department: 'HR', riskScore: 12, status: 'Active', role: 'HR Manager', lastActive: '2024-03-02 17:30' },
  { id: 'EMP004', name: 'Alice Wilson', email: 'alice.w@company.com', department: 'Sales', riskScore: 45, status: 'Active', role: 'Sales Lead', lastActive: '2024-03-03 10:15' },
  { id: 'EMP005', name: 'Michael Chen', email: 'm.chen@company.com', department: 'Engineering', riskScore: 92, status: 'Suspended', role: 'DevOps Engineer', lastActive: '2024-03-01 14:20' },
];

export const MOCK_ALERTS: Alert[] = [
  { id: 'ALT001', userId: 'EMP005', userName: 'Michael Chen', type: 'Mass Data Download', severity: 'Critical', timestamp: '2024-03-03 10:30', status: 'Open', description: 'User downloaded 5GB of sensitive source code repository outside normal working hours.' },
  { id: 'ALT002', userId: 'EMP002', userName: 'Jane Smith', type: 'Unauthorized Access', severity: 'High', timestamp: '2024-03-03 09:15', status: 'Investigating', description: 'Attempted to access payroll database without proper authorization.' },
  { id: 'ALT003', userId: 'EMP004', userName: 'Alice Wilson', type: 'USB Device Connected', severity: 'Medium', timestamp: '2024-03-02 16:45', status: 'Resolved', description: 'Unrecognized USB storage device connected to workstation.' },
];

export const MOCK_LOGS: ActivityLog[] = [
  { id: 'LOG001', userId: 'EMP001', userName: 'John Doe', action: 'Login Success', ipAddress: '192.168.1.45', device: 'MacBook Pro', timestamp: '2024-03-03 09:00' },
  { id: 'LOG002', userId: 'EMP005', userName: 'Michael Chen', action: 'File Export', ipAddress: '10.0.0.12', device: 'Desktop-PC', timestamp: '2024-03-03 10:30' },
  { id: 'LOG003', userId: 'EMP002', userName: 'Jane Smith', action: 'Database Query', ipAddress: '192.168.1.12', device: 'ThinkPad X1', timestamp: '2024-03-03 09:15' },
];
