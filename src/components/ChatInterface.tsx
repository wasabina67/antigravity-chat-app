'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LobsterAvatar } from './LobsterAvatar';
import { useLobsterChat } from '../hooks/useLobsterChat';

export const ChatInterface = () => {
    const { messages, sendMessage, isLobsterTyping } = useLobsterChat();
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLobsterTyping]);

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue('');
    };

    return (
        <div className="flex flex-col h-screen max-w-2xl mx-auto bg-background shadow-2xl border-x border-ocean-dark/30">
            {/* Header */}
            <header className="flex items-center p-4 bg-ocean-dark text-foreground shadow-md z-10">
                <LobsterAvatar isTyping={isLobsterTyping} />
                <div className="ml-4">
                    <h1 className="text-xl font-bold text-sand">AIロブスター</h1>
                    <p className="text-xs text-ocean-blue-200 opacity-80">
                        {isLobsterTyping ? '泳いでいます...' : '深海でオンライン'}
                    </p>
                </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-ocean-dark/20">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${msg.sender === 'user'
                                ? 'bg-ocean-blue text-white rounded-br-none'
                                : 'bg-sand text-ocean-dark rounded-bl-none border border-ocean-light/20'
                                }`}
                        >
                            <p className="text-sm md:text-base">{msg.text}</p>
                            <span className="text-[10px] opacity-50 block text-right mt-1">
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))}
                {isLobsterTyping && (
                    <div className="flex justify-start">
                        <div className="bg-sand text-ocean-dark p-3 rounded-2xl rounded-bl-none border border-ocean-light/20 flex items-center space-x-1">
                            <div className="w-2 h-2 bg-ocean-blue rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-ocean-blue rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-ocean-blue rounded-full animate-bounce delay-150"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-ocean-dark/10 border-t border-ocean-light/20">
                <div className="flex items-center space-x-2 bg-white/5 rounded-full p-1 border border-ocean-light/30 focus-within:border-lobster-red transition-colors">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="ロブスターに話しかける..."
                        className="flex-1 bg-transparent px-4 py-2 text-foreground placeholder-ocean-light/50 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || isLobsterTyping}
                        className="p-2 bg-lobster-red hover:bg-lobster-dark text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};
