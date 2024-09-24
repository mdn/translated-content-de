---
title: "Dokument: createTextNode()-Methode"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Erstellt einen neuen {{domxref("Text")}}-Knoten. Diese Methode kann verwendet werden, um HTML-Zeichen zu maskieren.

## Syntax

```js-nolint
createTextNode(data)
```

### Parameter

- `data`
  - : Ein String, der die Daten enthält, die in den Textknoten eingefügt werden sollen.

### Rückgabewert

Ein {{domxref("Text")}}-Knoten.

## Beispiele

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Beispiel für createTextNode</title>
    <script>
      function addTextNode(text) {
        const newtext = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">JA!</button>
    <button onclick="addTextNode('NO! ');">NEIN!</button>
    <button onclick="addTextNode('WE CAN! ');">WIR KÖNNEN!</button>

    <hr />

    <p id="p1">Erste Zeile des Absatzes.</p>
  </body>
</html>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
