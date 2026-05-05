"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 3 — Fan Card
//
// This card should:
//   - Display the current fan status (on/off) and mode (auto/manual)
//   - Let the user set a temperature threshold for automatic fan control
//   - Send that threshold to Supabase so the Smart Farm Kit can auto-activate the fan
//   - Let the user manually turn the fan on or off from the dashboard
// =============================================================================

import { useEffect } from "react";

export default function FanCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the current fan status and mode from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch fan status:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            {/* Fan status */}
            <div>
                <p className="text-sm text-zinc-400 mb-2">Fan</p>
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-400">
                        💨 Fan Off
                    </div>
                </div>
            </div>

            {/* Manual toggle */}
            <button
                className="w-full py-2 rounded-lg font-medium transition-colors bg-green-600 hover:bg-green-700 text-white"
            >
                Turn Fan On
            </button>

            {/* Temperature threshold */}
            <div>
                <label className="text-sm text-zinc-400 block mb-2">Auto Threshold (°C)</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="e.g. 28"
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
