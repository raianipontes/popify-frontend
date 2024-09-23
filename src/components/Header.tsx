import { Box, Text, Flex, Image } from '@chakra-ui/react';

interface HeaderProps {
    onSidebarToggle: () => void;
}

const Header = ({ }: HeaderProps) => {
    return (
        <Box bg="brand.primary" p={4} boxShadow="md">
            <Flex alignItems="center" justifyContent="center">  {/* Adicionado justifyContent="center" */}
                <Image src="/tcc-icon-removebg-preview.png" alt="Logo" boxSize="40px" mr={4} />
                <Text fontSize="xl" color="white">
                    Popify
                </Text>
            </Flex>
        </Box>
    );
};

export default Header;
