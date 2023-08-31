interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: [],
  tenantRoles: ['Employee', 'Payroll Officer', 'Team Lead', 'HR Manager', 'System Administrator'],
  tenantName: 'Organization',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage employee data',
    'Invite users to the application',
    'Deactivate or delete user accounts',
    'Assign roles to users',
  ],
};
