---
title: "DataTransferItem: kind-Eigenschaft"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.kind`**-Eigenschaft gibt die Art – ein String oder eine Datei – des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekts zurück, das das _Zugdaten-Element_ darstellt.

## Wert

Ein String, der die Art des Zugdaten-Elements darstellt.
Es muss einer der folgenden Werte sein:

- `'file'`
  - : Wenn das Zugdaten-Element eine Datei ist.
- `'string'`
  - : Wenn die Art des Zugdaten-Elements ein _einfacher Unicode-String_ ist.

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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Zugdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
