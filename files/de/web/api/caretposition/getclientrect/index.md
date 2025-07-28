---
title: "CaretPosition: getClientRect()-Methode"
short-title: getClientRect()
slug: Web/API/CaretPosition/getClientRect
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("CSSOM")}}

Die `getClientRect()`-Methode der [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle gibt das Client-Rechteck für den Caret-Bereich zurück.

## Syntax

```js-nolint
getClientRect()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt.

## Beispiele

### Bildschirmposition des Carets erhalten

```html
<input aria-label="text field" value="Click inside this input field" />
```

```css
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}
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
