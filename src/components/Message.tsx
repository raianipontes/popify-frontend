import { Box, Flex, Text } from '@chakra-ui/react';

interface MessageProps {
    content: string;
    sender: 'user' | 'bot';
}

const Message = ({ content, sender }: MessageProps) => {
    const isUser = sender === 'user';

    return (
        <Flex justifyContent={isUser ? 'flex-end' : 'flex-start'} mb={2}>
            <Box
                p={3}
                bg={isUser ? 'blue.100' : 'green.100'}
                borderRadius="md"
                maxWidth="70%"
                borderTopRightRadius={isUser ? 0 : 'md'}
                borderTopLeftRadius={isUser ? 'md' : 0}
            >
                <Text>{content}</Text>
            </Box>
        </Flex>
    );
};

export default Message;
