---
title: "DataTransferItem: kind-Eigenschaft"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 73744acdfd7546fcadca21e2188de03deb787151
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.kind`**-Eigenschaft gibt den Typ–ein `string` oder eine Datei–des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekts zurück, das das _Drag-Daten-Element_ darstellt.

## Wert

Ein `string`, der den Typ des Drag-Daten-Elements darstellt.
Es muss einer der folgenden Werte sein:

- `'file'`
  - : Wenn das Drag-Daten-Element eine Datei ist.
- `'string'`
  - : Wenn der Typ des Drag-Daten-Elements ein _einfacher Unicode-String_ ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `kind`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
