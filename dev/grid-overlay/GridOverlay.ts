// enable root imports in tsconfig.json
import { layoutGrid } from "@layout";

export function createGridOverlay(): HTMLElement {
  const { columns, gutter, margin, maxWidth, overlayColor } = layoutGrid;

  const overlay = document.createElement("div");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.inset = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";

  overlay.style.pointerEvents = "none";
  overlay.style.zIndex = "9999";

  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.height = "100%";

  if (maxWidth) {
    container.style.maxWidth = `${maxWidth}px`;
    container.style.width = "100%";
  } else {
    container.style.width = "100%";
  }

  container.style.paddingLeft = `${margin}px`;
  container.style.paddingRight = `${margin}px`;
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.columnGap = `${gutter}px`;

  for (let i = 0; i < columns; i++) {
    const col = document.createElement("div");
    col.style.backgroundColor = overlayColor;
    col.style.height = "100%";
    container.appendChild(col);
  }

  overlay.appendChild(container);

  return overlay;
}
