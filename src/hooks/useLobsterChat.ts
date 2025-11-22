import { useState, useEffect, useRef } from 'react';

export type Message = {
    id: string;
    text: string;
    sender: 'user' | 'lobster';
    timestamp: Date;
};

const LOBSTER_PHRASES = [
    "Pinch pinch! 🦞",
    "The ocean is vast today.",
    "Do you like seafood? I hope not!",
    "Click clack! That's my claw sound.",
    "I'm just a lobster in a digital world.",
    "Have you seen any shrimp around here?",
    "My shell is shiny today, isn't it?",
    "Bubble bubble...",
];

export const useLobsterChat = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I am the AI Lobster. Pinch pinch! 🦞",
            sender: 'lobster',
            timestamp: new Date(),
        },
    ]);
    const [isLobsterTyping, setIsLobsterTyping] = useState(false);

    const sendMessage = async (text: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setIsLobsterTyping(true);

        // Simulate network delay and "thinking"
        setTimeout(() => {
            const randomPhrase = LOBSTER_PHRASES[Math.floor(Math.random() * LOBSTER_PHRASES.length)];
            const lobsterMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: randomPhrase,
                sender: 'lobster',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, lobsterMsg]);
            setIsLobsterTyping(false);
        }, 1500 + Math.random() * 1000);
    };

    return {
        messages,
        sendMessage,
        isLobsterTyping,
    };
};
