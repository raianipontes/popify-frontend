import { Flex, useDisclosure } from '@chakra-ui/react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
const App = () => {
    const { onToggle } = useDisclosure();

    return (
        <Flex height="100vh" direction="column">
            <Header onSidebarToggle={onToggle} />
            <Flex direction="column" flex="1" p={4}>
                <ChatWindow />
            </Flex>
        </Flex>
    );
};

export default App;
