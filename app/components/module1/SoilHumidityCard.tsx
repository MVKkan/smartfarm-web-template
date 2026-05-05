"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 1 — Soil Humidity Card
//
// This card should display the current soil humidity reading from Supabase.
// =============================================================================

import { useState, useEffect } from "react";

export default function SoilHumidityCard() {
    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
        async function fetchData() {
            // TODO: Fetch the latest soil humidity reading from your Supabase table.
        }

        fetchData();
        const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval);          // Cleanup on unmount
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
            <p className="text-sm text-zinc-400 mb-1">Soil Humidity</p>
            <p className="text-3xl font-bold">
                —
                <span className="text-lg text-zinc-400 ml-2">%</span>
            </p>
        </div>
    );
}
