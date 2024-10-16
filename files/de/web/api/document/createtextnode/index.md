---
title: "Dokument: createTextNode() Methode"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
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
<!doctype html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        const newText = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newText);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">First line of paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
