import { createContext, useContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { Track } from "@/lib/tracks"

type SlopifyAppContextValue = {
  currentTrack: Track | null
  currentTime: number
  isPlaying: boolean
  queue: Track[]
  search: string
  setCurrentTime: Dispatch<SetStateAction<number>>
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  setQueue: Dispatch<SetStateAction<Track[]>>
}

export const SlopifyAppContext = createContext<SlopifyAppContextValue | null>(
  null
)

export function useSlopifyAppContext() {
  const context = useContext(SlopifyAppContext)

  if (context === null) {
    throw new Error("useSlopifyAppContext must be used within SlopifyShell")
  }

  return context
}
