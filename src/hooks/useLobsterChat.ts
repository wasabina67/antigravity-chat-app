import { useState, useEffect, useRef } from 'react';

export type Message = {
    id: string;
    text: string;
    sender: 'user' | 'lobster';
    timestamp: Date;
};

const LOBSTER_PHRASES = [
    "チョキチョキ！🦞",
    "今日の海は広大ですね。",
    "シーフードは好きですか？そうでないことを祈ります！",
    "カチカチ！これは私のハサミの音です。",
    "私はデジタル世界のただのロブスターです。",
    "この辺りでエビを見かけませんでしたか？",
    "今日の私の殻は輝いているでしょう？",
    "ブクブク...",
];

export const useLobsterChat = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "こんにちは！私はAIロブスターです。チョキチョキ！🦞",
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
