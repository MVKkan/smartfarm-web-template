"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// MODULE 2 — LCD Message Card
//
// This card should:
//   - Let the user type a message in the text field
//   - Send that message to Supabase when the button is clicked
//   - The Smart Farm Kit should read the latest message and display it on the LCD screen
// =============================================================================

export default function LcdMessageCard() {
    return (
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            <div>
                <p className="text-sm text-zinc-400 mb-1">LCD Display</p>
                <p className="text-xs text-zinc-500">Send a message to the physical LCD screen</p>
            </div>

            <textarea
                placeholder="Type your message here..."
                maxLength={32}
                rows={2}
                className="bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 w-full
                           focus:outline-none focus:border-blue-500 resize-none text-sm"
            />

            <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">0/32 characters</span>
                <button
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 disabled:cursor-not-allowed
                               text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                    Send to LCD
                </button>
            </div>
        </div>
    );
}
