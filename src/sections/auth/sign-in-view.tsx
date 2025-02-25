import { useAuth } from "@workos-inc/authkit-react";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInView() {
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    await signIn();
  };

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign in</Typography>
        <Typography variant="body2" color="text.secondary">
          Don’t have an account?
          <Link onClick={handleSignIn} variant="subtitle2" sx={{ ml: 0.5, cursor: 'pointer' }}>Get started</Link>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <IconButton color="inherit" onClick={handleSignIn}>
          <Iconify icon="logos:google-icon" />
        </IconButton>
      </Box>

      <Divider sx={{ my: 3, "&::before, &::after": { borderTopStyle: "dashed" } }}>
        <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: "fontWeightMedium" }}>
          OR
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit" onClick={handleSignIn}>
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit" onClick={handleSignIn}>
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </>
  );
}
