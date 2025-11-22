import React from 'react';

export const LobsterAvatar = ({ isTyping = false }: { isTyping?: boolean }) => {
    return (
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-ocean-light border-2 border-sand shadow-lg overflow-hidden">
            <div className={`text-4xl transition-transform duration-500 ${isTyping ? 'animate-bounce' : 'hover:scale-110'}`}>
                🦞
            </div>
            {isTyping && (
                <div className="absolute bottom-1 right-1 flex space-x-1">
                    <div className="w-2 h-2 bg-sand rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-sand rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-sand rounded-full animate-pulse delay-300"></div>
                </div>
            )}
        </div>
    );
};
