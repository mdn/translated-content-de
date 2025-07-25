---
title: "CaretPosition: offset-Eigenschaft"
short-title: offset
slug: Web/API/CaretPosition/offset
l10n:
  sourceCommit: 1dd95ade52a35667c940948e5e69eae2bf42cdab
---

Die **`offset`**-Eigenschaft der [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle gibt einen ganzzahligen Wert zurück, der den Offset der Auswahl im Cursorpositionsknoten darstellt.

Dies ist entweder der Zeichenoffset in einem Textknoten oder der Index des ausgewählten Kindknotens in einem Elementknoten.

## Wert

Eine ganze Zahl.

## Beispiele

Dieses Beispiel protokolliert den `offsetNode` und `offset` der Cursorposition, wenn in das Eingabefeld geklickt wird.

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

{{EmbedLiveSample("offset", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node`](/de/docs/Web/API/Node)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
