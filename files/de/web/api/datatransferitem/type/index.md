---
title: "DataTransferItem: type-Eigenschaft"
short-title: type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.type`**-Eigenschaft gibt den Typ (Format) des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekts zurück, das das Drag-Datenobjekt darstellt. Der `type` ist eine Unicode-Zeichenfolge, die im Allgemeinen durch einen MIME-Typ angegeben wird, obwohl ein MIME-Typ nicht erforderlich ist.

Einige Beispieltypen sind: `text/plain` und `text/html`.

## Wert

Eine Zeichenfolge, die den Typ des Drag-Datenobjekts darstellt.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `type`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // Drag data item is an image file
      const f = item.getAsFile();
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
- [Liste gemeinsamer MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types)
