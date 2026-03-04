import { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Globe, 
  Mail,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Security', icon: Lock },
    { name: 'Notifications', icon: Bell },
    { name: 'System', icon: Shield },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your account and system preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.name 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900'
              }`}
            >
              <tab.icon size={18} />
              {tab.name}
            </button>
          ))}
        </aside>

        <main className="flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {activeTab === 'Profile' && (
            <div className="p-8 space-y-8">
              <div className="flex items-center gap-6">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" 
                  alt="Avatar" 
                  className="w-20 h-20 rounded-2xl border-4 border-slate-50 dark:border-slate-800"
                />
                <div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all">
                    Change Photo
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                  <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input type="email" defaultValue="admin@company.com" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
                  <input type="text" defaultValue="Security Operations" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                  <input type="text" defaultValue="Administrator" disabled className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 outline-none" />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Authenticator App</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Use an app like Google Authenticator to get codes</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'System' && (
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Risk Thresholds</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Critical Risk Score Threshold</span>
                      <span className="text-indigo-600 font-bold">85</span>
                    </div>
                    <input type="range" className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Alert Sensitivity</span>
                      <span className="text-indigo-600 font-bold">High</span>
                    </div>
                    <input type="range" className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Auto-Response Actions</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Suspend user on critical risk', active: true },
                    { label: 'Notify manager on medium risk', active: true },
                    { label: 'Enforce MFA on suspicious login', active: false },
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                      <div className={`w-11 h-6 rounded-full transition-all relative ${item.active ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'left-6' : 'left-1'}`}></div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
