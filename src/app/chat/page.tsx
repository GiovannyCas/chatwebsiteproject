
import { ChatLayout } from "@/components/chatwebsite-components/chat-components/chat-layout";

export default function ChatPage() {
    //const layout = cookies().get("react-resizable-panels:layout");
    const defaultLayout = undefined;

    return (
        <div className="w-full">
            <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
    );
}