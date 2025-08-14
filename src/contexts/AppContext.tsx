
import { createContext, useContext, useState, ReactNode } from 'react';
import { AppConfig, defaultConfig } from '../types/app.ts';

interface AppContextType {
  config: AppConfig;
  setConfig: (config: AppConfig) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<AppConfig>(defaultConfig);

  return (
    <AppContext.Provider value={{ config, setConfig }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
