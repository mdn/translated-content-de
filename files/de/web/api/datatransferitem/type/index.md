---
title: "DataTransferItem: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: b5583a21df2aeaebddd7e0eeb58ff690b013546b
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransferItem.type`**-Eigenschaft gibt den Typ (Format) des {{domxref("DataTransferItem")}}-Objekts zurück, das das Ziehdatenobjekt repräsentiert.
Der `type` ist eine Unicode-Zeichenkette, die in der Regel durch einen MIME-Typ angegeben wird, obwohl ein MIME-Typ nicht erforderlich ist.

Einige Beispieltypen sind: `text/plain` und `text/html`.

## Wert

Ein String, der den Typ des Ziehdatenobjekts darstellt.

## Beispiele

Dieses Beispiel zeigt die Nutzung der `type`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // Dieses Element ist der Zielknoten
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Ziehdatenobjekt ist HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Ziehdatenobjekt ist URI
      console.log("… Drop: URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Ziehdatenobjekt ist eine Bilddatei
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

- {{domxref("DataTransfer.types()")}}
- [Liste von gängigen MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
