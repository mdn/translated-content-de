---
title: "CaretPosition: offset-Eigenschaft"
short-title: offset
slug: Web/API/CaretPosition/offset
l10n:
  sourceCommit: ce31fcc3aced95a022db44b8b83f96221a10a5fd
---

{{APIRef("CSSOM")}}

Die **`offset`**-Eigenschaft des [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Interfaces gibt eine ganze Zahl zurück, die den Versatz der Auswahl im Caret-Position-Knoten darstellt.

Dies wird der Zeichenversatz in einem Textknoten oder der Index des ausgewählten Kindknotens in einem Elementknoten sein.

## Wert

Eine ganze Zahl.

## Beispiele

Dieses Beispiel protokolliert das `offsetNode` und den `offset` der Caret-Position, wenn innerhalb des Eingabefelds geklickt wird.

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

  const node = caret.offsetNode;
  const offset = caret.offset;

  log(`offsetNode: ${node}`);
  log(`offset: ${offset}`);
});
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

{{EmbedLiveSample("Examples", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node`](/de/docs/Web/API/Node)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
