"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 2 — LED Threshold Card
//
// This card should:
//   - Show whether the LED is currently on or off
//   - Let the user set a light level threshold
//   - Send that threshold to Supabase so the Smart Farm Kit can read it
//   - The Smart Farm Kit should turn the LED on when light drops below the threshold
// =============================================================================

import { useEffect } from "react";

export default function LedThresholdCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the current LED status from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch LED status:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            {/* LED status */}
            <div>
                <p className="text-sm text-zinc-400 mb-2">LED Status</p>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium w-fit bg-zinc-700 text-zinc-400">
                    💡 LED off
                </div>
            </div>

            {/* Threshold control */}
            <div>
                <label className="text-sm text-zinc-400 block mb-2">Light Threshold (lx)</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="e.g. 200"
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
