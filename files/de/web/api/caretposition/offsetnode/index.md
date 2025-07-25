---
title: "CaretPosition: offsetNode-Eigenschaft"
short-title: offsetNode
slug: Web/API/CaretPosition/offsetNode
l10n:
  sourceCommit: 1dd95ade52a35667c940948e5e69eae2bf42cdab
---

Die **`offsetNode`**-Eigenschaft der [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle gibt ein [`Node`](/de/docs/Web/API/Node) zurück, das das gefundene Element an der Position des Cursors enthält.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

## Beispiele

Dieses Beispiel protokolliert das `offsetNode` und den `offset` der Cursorposition, wenn innerhalb des Eingabefelds geklickt wird.

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
