//import React from "react";
import { Avatar, AvatarImage } from "@/components/chatwebsite-components/chat-components/ui/avatar";
import { UserData } from "@/data";
import { Info, Phone, Video } from "lucide-react";
import {Link} from "react-router-dom"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/chatwebsite-components/chat-components/ui/button.tsx";
import { ExpandableChatHeader } from "@/components/chatwebsite-components/chat-components/expandable-chat";

interface ChatTopbarProps {
    selectedUser: UserData;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
    return (
        <ExpandableChatHeader>
            <div className="flex items-center gap-2">
                <Avatar className="flex justify-center items-center">
                    <AvatarImage
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                    />
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-medium">{selectedUser.name}</span>
                    <span className="text-xs">Active 2 mins ago</span>
                </div>
            </div>

            <div className="flex gap-1">
                {TopbarIcons.map((icon, index) => (
                    <Link
                        key={index}
                        to={"#"}
                        className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "h-9 w-9",
                        )}
                    >
                        <icon.icon size={20} className="text-muted-foreground" />
                    </Link>
                ))}
            </div>
        </ExpandableChatHeader>
    );
}