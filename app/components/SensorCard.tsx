"use client";

interface SensorCardProps {
    label: string;
    value: number | null;
    unit: string;
}

export default function SensorCard({ label, value, unit }: SensorCardProps) {
    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
            <p className="text-sm text-zinc-400 mb-1">{label}</p>
            <p className="text-3xl font-bold">
                {value !== null ? value : "—"}
                <span className="text-lg text-zinc-400 ml-2">{unit}</span>
            </p>
        </div>
    );
}
