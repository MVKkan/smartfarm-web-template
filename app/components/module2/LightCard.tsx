"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 2 — Light Card
//
// This card should display the current light level reading from Supabase.
// Follow the same pattern used in SoilHumidityCard (module1) as a reference.
// =============================================================================

import { useEffect } from "react";

export default function LightCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the latest light level reading from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch light level:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
            <p className="text-sm text-zinc-400 mb-1">Light Level</p>
            <p className="text-3xl font-bold">
                —
                <span className="text-lg text-zinc-400 ml-2">lx</span>
            </p>
        </div>
    );
}
