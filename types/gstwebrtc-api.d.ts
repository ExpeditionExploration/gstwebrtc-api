export default GstWebRTCAPI;
declare class GstWebRTCAPI {
    constructor(userConfig?: import("./config.js").GstWebRTCConfig);
    registerConnectionListener(listener: ConnectionListener): boolean;
    unregisterConnectionListener(listener: ConnectionListener): boolean;
    unregisterAllConnectionListeners(): void;
    createProducerSession(stream: MediaStream): ProducerSession;
    getAvailableProducers(): Producer[];
    registerProducersListener(listener: ProducersListener): boolean;
    unregisterProducersListener(listener: ProducersListener): boolean;
    unregisterAllProducersListeners(): void;
    createConsumerSession(producerId: string): ConsumerSession;
    createConsumerSessionWithOfferOptions(producerId: string, offerOptions: RTCOfferOptions): ConsumerSession;
}
declare namespace GstWebRTCAPI {
    export { SessionState };
}
import type ProducerSession from "./producer-session.js";
import type ConsumerSession from "./consumer-session.js";
import SessionState from "./session-state.js";
export interface ConnectionListener {
    connected(clientId: string): void;
    disconnected(): void;
}
export interface ProducersListener {
    producerAdded(producer: Producer): void;
    producerRemoved(producer: Producer): void;
}
export type Producer = {
    readonly id: string;
    readonly meta: Record<string, unknown>;
};
