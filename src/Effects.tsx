import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

function SourceInfo({ sourceId }: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);

    useEffect(() => {
        const handleMessage = (payload: number) => {
            setLastMessage(payload);
        };

        subscribe(sourceId, handleMessage);

        return () => {
            unsubscribe(sourceId, handleMessage);
        };
    }, [sourceId]);

    return (
        <div>
            {sourceId}: {lastMessage}
        </div>
    );
}

export function Effects(props: { sourceId: string }) {
    return <SourceInfo key={props.sourceId} sourceId={props.sourceId} />;
}
