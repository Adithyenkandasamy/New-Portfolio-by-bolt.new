import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioContext = useRef<AudioContext | null>(null);

  const createOscillator = useCallback((frequency: number, duration: number) => {
    if (!audioContext.current) {
      audioContext.current = new AudioContext();
    }

    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.current.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.current.currentTime + duration);

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + duration);
  }, []);

  const playHover = useCallback(() => {
    createOscillator(2000, 0.1);
  }, [createOscillator]);

  const playClick = useCallback(() => {
    createOscillator(1500, 0.15);
  }, [createOscillator]);

  return { playHover, playClick };
};