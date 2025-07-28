---
title: "CaretPosition: offset-Eigenschaft"
short-title: offset
slug: Web/API/CaretPosition/offset
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("CSSOM")}}

Die **`offset`**-Eigenschaft der [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle gibt eine ganze Zahl zurück, die den Offset der Auswahl im Knoten der Einfügemarke darstellt.

Dies ist der Zeichenoffset in einem Textknoten oder der Index des ausgewählten Kindknotens in einem Elementknoten.

## Wert

Eine ganze Zahl.

## Beispiele

Dieses Beispiel protokolliert den `offsetNode` und `offset` der Einfügemarke, wenn Sie in das Eingabefeld klicken.

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

{{EmbedLiveSample("offset", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node`](/de/docs/Web/API/Node)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
