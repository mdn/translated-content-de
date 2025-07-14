---
title: "DataTransferItem: kind-Eigenschaft"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.kind`**-Eigenschaft gibt die Art – ein String oder eine Datei – des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekts zurück, das das _Drag-Daten-Element_ repräsentiert.

## Wert

Ein String, der die Art des Drag-Daten-Elements darstellt.
Es muss einer der folgenden Werte sein:

- `'file'`
  - : Wenn das Drag-Daten-Element eine Datei ist.
- `'string'`
  - : Wenn die Art des Drag-Daten-Elements ein _einfacher Unicode-String_ ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `kind`-Eigenschaft.

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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
