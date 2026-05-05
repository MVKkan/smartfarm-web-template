"use client";

export default function Navbar() {
    return (
        <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg">
                    🌿
                </div>
                <div>
                    <h1 className="text-white font-bold text-lg leading-tight">KangaLife</h1>
                    <p className="text-zinc-400 text-xs">Smart Farm Dashboard</p>
                </div>
            </div>
        </header>
    );
}
