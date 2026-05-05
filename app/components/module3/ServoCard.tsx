"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 3 — Servo (Door) Card
//
// This card should:
//   - Display whether the door is currently open or closed
//   - Let the user open or close the door by clicking a button
//   - Send the command to Supabase so the Smart Farm Kit can move the servo motor
// =============================================================================

import { useEffect } from "react";

export default function ServoCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the current door state from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch door state:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            {/* Door status */}
            <div>
                <p className="text-sm text-zinc-400 mb-2">Door (Servo)</p>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium w-fit">
                    🔓 Door Open
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-2">
                <button
                    className="w-full py-2 rounded-lg font-medium transition-colors
                               bg-green-600 hover:bg-green-700 disabled:bg-zinc-600
                               disabled:cursor-not-allowed text-white"
                >
                    Open Door
                </button>
                <button
                    className="w-full py-2 rounded-lg font-medium transition-colors
                               bg-red-600 hover:bg-red-700 disabled:bg-zinc-600
                               disabled:cursor-not-allowed text-white"
                >
                    Close Door
                </button>
            </div>
        </div>
    );
}
