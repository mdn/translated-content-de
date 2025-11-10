---
title: "Dokument: createTextNode() Methode"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Erstellt einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten. Diese Methode kann verwendet werden, um HTML-Zeichen zu maskieren.

## Syntax

```js-nolint
createTextNode(data)
```

### Parameter

- `data`
  - : Ein String, der die Daten enthält, die in den Textknoten eingefügt werden sollen.

### Rückgabewert

Ein [`Text`](/de/docs/Web/API/Text)-Knoten.

## Beispiele

```html
<button>YES!</button>
<button>NO!</button>
<button>WE CAN!</button>

<hr />

<p id="p1">First line of paragraph.</p>
```

```js
function addTextNode(text) {
  const newText = document.createTextNode(text);
  const p1 = document.getElementById("p1");

  p1.appendChild(newText);
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    addTextNode(`${event.target.textContent} `);
  });
});
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
