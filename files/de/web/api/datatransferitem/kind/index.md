---
title: "DataTransferItem: kind-Eigenschaft"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 73744acdfd7546fcadca21e2188de03deb787151
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.kind`**-Eigenschaft gibt die Art–entweder ein string oder eine Datei–des {{domxref("DataTransferItem")}}-Objekts zurück, das das _Ziehen-Daten-Element_ repräsentiert.

## Wert

Ein String, der die Art des Ziehen-Daten-Elements darstellt. Es muss einer der folgenden Werte sein:

- `'file'`
  - : Wenn das Ziehen-Daten-Element eine Datei ist.
- `'string'`
  - : Wenn die Art des Ziehen-Daten-Elements ein _einfacher Unicode-String_ ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `kind`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // Dieses Element ist der Zielknoten
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Ziehen-Daten-Element ist HTML
      console.log("… Drop: HTML");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Ziehen-Daten-Element ist eine Bilddatei
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
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
