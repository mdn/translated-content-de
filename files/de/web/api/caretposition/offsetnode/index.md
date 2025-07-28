---
title: "CaretPosition: offsetNode-Eigenschaft"
short-title: offsetNode
slug: Web/API/CaretPosition/offsetNode
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("CSSOM")}}

Die **`offsetNode`**-Eigenschaft der [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle gibt ein [`Node`](/de/docs/Web/API/Node)-Objekt zurück, das den an der Position des Cursors gefundenen Knoten enthält.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

## Beispiele

Dieses Beispiel protokolliert das `offsetNode` und das `offset` der Cursorposition beim Klicken in das Eingabefeld

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

  const node = caret.offsetNode;
  const offset = caret.offset;

  console.log("offsetNode:", node);
  console.log("offset:", offset);
});
```

{{EmbedLiveSample("offsetnode", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node`](/de/docs/Web/API/Node)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
