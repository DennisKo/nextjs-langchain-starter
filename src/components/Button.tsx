"use client";

export default function Button({
  handlePrompt,
}: {
  handlePrompt: () => Promise<void>;
}) {
  return (
    <button
      onClick={async () => {
        await handlePrompt();
      }}
    >
      Prompt!
    </button>
  );
}
