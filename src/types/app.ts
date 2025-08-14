
export interface AppConfig {
  theme: string;
  relayUrl: string;
}

export const defaultConfig: AppConfig = {
  theme: "light",
  relayUrl: "wss://relay.nostr.band",
};
