"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 3 — Humidity Card
//
// This card should display the current humidity reading from Supabase.
// Follow the same pattern used in SoilHumidityCard (module1) as a reference.
// =============================================================================

import { useEffect } from "react";

export default function HumidityCard() {
    useEffect(() => {
        async function fetchData() {
            try {
                // TODO: Fetch the latest humidity reading from your Supabase table.
            } catch (error) {
                console.error("Failed to fetch humidity:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
            <p className="text-sm text-zinc-400 mb-1">Humidity</p>
            <p className="text-3xl font-bold">
                —
                <span className="text-lg text-zinc-400 ml-2">%</span>
            </p>
        </div>
    );
}
