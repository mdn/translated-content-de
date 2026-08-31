---
title: "DataTransferItem: type-Eigenschaft"
short-title: type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`type`** schreibgeschützte Eigenschaft des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interfaces gibt den Typ (das Format) des Objekts zurück, das das Ziehdaten-Element darstellt. Der `type` ist eine Unicode-Zeichenfolge, die im Allgemeinen durch einen MIME-Typ angegeben wird, obwohl ein MIME-Typ nicht erforderlich ist.

Einige Beispieltypen sind: `text/plain` und `text/html`.

Während eines Ziehvorgangs kann diese Eigenschaft in jedem Ziehereignishandler gelesen werden, selbst wenn der Ziehdaten-Speicher im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) ist. Der Typ des Elements bleibt zugänglich, aber seine Daten können nur in den Handlern für die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) gelesen werden. Siehe [Lesen des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

## Wert

Ein String, der den Typ des Ziehdaten-Elements repräsentiert.

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
- [Liste der gebräuchlichen MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types)
