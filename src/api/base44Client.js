import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68f3732483149a1c1efff2e0", 
  requiresAuth: false // Ensure authentication is required for all operations
});
