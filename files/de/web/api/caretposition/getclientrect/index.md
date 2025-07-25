---
title: "CaretPosition: Methode getClientRect()"
short-title: getClientRect()
slug: Web/API/CaretPosition/getClientRect
l10n:
  sourceCommit: 1dd95ade52a35667c940948e5e69eae2bf42cdab
---

Die Methode `getClientRect()` der Schnittstelle [`CaretPosition`](/de/docs/Web/API/CaretPosition) gibt das Client-Rechteck für den Bereich des Cursors zurück.

## Syntax

```js-nolint
getClientRect()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt.

## Beispiele

### Die Bildschirmposition des Cursors ermitteln

```html
<input
  aria-label="text field"
  value="Click inside this input field"
  style="width: 100%; padding: 10px; font-size: 16px; box-sizing: border-box" />
```

```js
document.querySelector("input").addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const caret = document.caretPositionFromPoint?.(x, y);
  if (!caret) return;

  const rect = caret.getClientRect();

  console.dir("Caret bounding rect:", rect);
  console.log(`Caret is at (${rect.x.toFixed(2)}, ${rect.y.toFixed(2)})`);
});
```

{{EmbedLiveSample("get_client_rect", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
