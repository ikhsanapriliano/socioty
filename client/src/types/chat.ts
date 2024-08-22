export interface CreateRoomPayload {
    secondUserId: string;
}

export interface CreateRoomResponse {
    roomId: string;
}

export interface RoomResponse {
    id: string;
    firstUserId: string;
    secondUser: {
        id: string;
        username: string;
        photo: string;
    };
    chats: ChatResponse[];
}

export interface ChatResponse {
    id: string;
    senderId: string;
    message?: string;
    mediaUrl?: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RoomChatPayload {
    message: string;
    roomId: string;
}

export interface UserRoomResponse {
    id: string;
    username: string;
    photo: string;
    message?: string;
}

export interface ChatFormat {
    senderId: string;
    message: string;
}
