import { Box, VStack, Textarea, Button, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ChatWindow = () => {
    const [messages, setMessages] = useState<{ content: string; sender: string }[]>([]);
    const [input, setInput] = useState('');

    const fetchMessages = async () => {
        const response = await fetch('https://popify-backend-production.up.railway.app/messages/');
        const data = await response.json();
        const mappedMessages = data.map((msg: { content: string; sender: string }) => ({
            content: msg.content,
            sender: msg.sender,
        }));
        setMessages(mappedMessages);
    };

    useEffect(() => {
        fetchMessages();
    }, []);
    const handleSend = async () => {
        if (input.trim()) {
            const newMessageToSend = { message: input, sender: 'user' };
            const newMessage = { content: input, sender: 'user' };
            await fetch('https://popify-backend-production.up.railway.app/messages/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessageToSend),
            });
            setMessages([...messages, newMessage]);
            setInput('');
            fetchMessages();
        }
    };

    return (
        <VStack spacing={4} align="stretch" p={4} bg="brand.primary" flex="1">
            <Box bg="white" color="black" borderRadius="md" p={4} flex="1" overflowY="auto">
                {messages.map((msg, index) => (
                    <Flex key={index} justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
                        <Box
                            mb={2}
                            p={2}
                            bg={msg.sender === 'user' ? 'gray.100' : 'green.100'}
                            borderRadius="md"
                            borderTopRightRadius={msg.sender === 'user' ? 0 : 'md'}
                            borderTopLeftRadius={msg.sender === 'user' ? 'md' : 0}
                            maxWidth="70%"
                        >
                            {msg.content}
                        </Box>
                    </Flex>
                ))}
            </Box>
            <Box display="flex">
                <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem aqui..."
                    bg="white"
                    color="black"
                />
                <Button onClick={handleSend} ml={2} bg="brand.secondary" color="white">
                    Enviar
                </Button>
            </Box>
        </VStack>
    );
};


export default ChatWindow;
