"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 1 — Water Level Card
//
// This card should:
//   - Display the current water level reading from Supabase
//   - Show whether the buzzer is currently active
//   - Let the user set a water level threshold
//   - Send that threshold to Supabase so the Smart Farm Kit can read it
// =============================================================================

import { useEffect } from "react";

export default function WaterLevelCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the latest water level reading from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch water level:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            {/* Sensor reading */}
            <div>
                <p className="text-sm text-zinc-400 mb-1">Water Level</p>
                <p className="text-3xl font-bold">
                    —
                    <span className="text-lg text-zinc-400 ml-2">%</span>
                </p>
            </div>

            {/* Buzzer status */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium w-fit bg-zinc-700 text-zinc-400">
                🔊 Buzzer Inactive
            </div>

            {/* Threshold control */}
            <div>
                <label className="text-sm text-zinc-400 block mb-2">Water Level Threshold (%)</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="e.g. 30"
                        className="bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 w-full
                                   focus:outline-none focus:border-blue-500"
                    />
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg
                                   font-medium transition-colors whitespace-nowrap"
                    >
                        Set
                    </button>
                </div>
            </div>
        </div>
    );
}
