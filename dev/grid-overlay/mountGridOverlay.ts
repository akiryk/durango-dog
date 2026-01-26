// dev/grid-overlay/mountGridOverlay.ts
import { createGridOverlay } from "./GridOverlay";

let overlayEl: HTMLElement | null = null;

function mount() {
  if (overlayEl) return;
  overlayEl = createGridOverlay();
  document.body.appendChild(overlayEl);
}

function unmount() {
  if (!overlayEl) return;
  overlayEl.remove();
  overlayEl = null;
}

export function mountGridOverlay() {
  window.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    const modifier = isMac ? e.metaKey : e.ctrlKey;

    if (modifier && e.key.toLowerCase() === "g") {
      e.preventDefault();
      overlayEl ? unmount() : mount();
    }
  });
}
