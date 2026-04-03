import { PageHeader } from "@diligentcorp/atlas-react-bundle";
import { Container, Stack } from "@mui/material";

export default function IndexPage() {
  return (
    <Container sx={{ py: 2 }}>
      <Stack gap={3}>
        <PageHeader
          pageTitle="Community V2 - Meetings Page v2"
          pageSubtitle="Prototype deployed via VibeSharing"
        />
      </Stack>
    </Container>
  );
}
