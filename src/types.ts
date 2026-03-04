export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  riskScore: number;
  status: 'Active' | 'Suspended' | 'Under Review';
  role: string;
  lastActive: string;
}

export interface Alert {
  id: string;
  userId: string;
  userName: string;
  type: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  timestamp: string;
  status: 'Open' | 'Investigating' | 'Resolved';
  description: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  ipAddress: string;
  device: string;
  timestamp: string;
}
