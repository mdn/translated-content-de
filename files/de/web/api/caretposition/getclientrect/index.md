---
title: "CaretPosition: getClientRect() Methode"
short-title: getClientRect()
slug: Web/API/CaretPosition/getClientRect
l10n:
  sourceCommit: ce31fcc3aced95a022db44b8b83f96221a10a5fd
---

{{APIRef("CSSOM")}}

Die `getClientRect()` Methode der [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle gibt das Client-Rechteck für den Caret-Bereich zurück.

## Syntax

```js-nolint
getClientRect()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt.

## Beispiele

### Die Bildschirmposition des Carets bestimmen

```html
<input aria-label="text field" value="Click inside this input field" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}

#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
document.querySelector("input").addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const caret = document.caretPositionFromPoint?.(x, y);
  if (!caret) {
    log("Not supported");
    return;
  }

  const rect = caret.getClientRect();

  log(`Caret bounding rect: ${JSON.stringify(rect)}`);
  log(`Caret is at (${rect.x.toFixed(2)}, ${rect.y.toFixed(2)})`);
});
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

{{EmbedLiveSample("Die Bildschirmposition des Carets bestimmen", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
