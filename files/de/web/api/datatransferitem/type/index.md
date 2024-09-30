---
title: "DataTransferItem: type Eigenschaft"
short-title: type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: b5583a21df2aeaebddd7e0eeb58ff690b013546b
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.type`**-Eigenschaft gibt den Typ (Format) des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekts zurück, das das Drag-Daten-Element darstellt. Der `type` ist eine Unicode-Zeichenkette, die normalerweise durch einen MIME-Typ angegeben wird, obwohl ein MIME-Typ nicht erforderlich ist.

Einige Beispieltypen sind: `text/plain` und `text/html`.

## Wert

Eine Zeichenkette, die den Typ des Drag-Daten-Elements repräsentiert.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `type`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag data item is an image file
      const f = data[i].getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataTransfer.types()`](/de/docs/Web/API/DataTransfer/types)
- [Liste der gängigen MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
