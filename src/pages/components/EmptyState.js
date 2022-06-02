import { Box } from "@awsui/components-react";

const EmptyState = ({ title, subtitle, action }) => (
    <Box textAlign="center" color="inherit">
        <b>{title}</b>
        <Box padding={{ bottom: "s" }} variant="p" color="inherit">
            {subtitle}
        </Box>
        {action ? action : null}
    </Box>
);

export default EmptyState;
