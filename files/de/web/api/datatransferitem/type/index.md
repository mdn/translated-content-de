---
title: "DataTransferItem: type-Eigenschaft"
short-title: type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: 2a4ce8db664c71d41fa179be43f3336ad384ab65
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interfaces gibt den Typ (das Format) des Objekts zurück, das das Drag-Datenelement repräsentiert. Der `type` ist eine Unicode-Zeichenkette, die im Allgemeinen durch einen MIME-Typ angegeben wird, obwohl ein MIME-Typ nicht erforderlich ist.

Der Typ ist ein _Protokoll_, das sowohl vom Ursprung des Drag-Vorgangs als auch vom Ziel des Drag-Vorgangs verstanden werden soll. Dabei kann es sich um das Betriebssystem, externe Anwendungen, andere Webseiten oder eine Webseite unter Ihrer Kontrolle handeln. Einige häufig verwendete Typen und ihre Semantik werden unter [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#common_drag_data_types) vorgestellt. Beim Ziehen von Dateien aus dem Betriebssystem wird der MIME-Typ normalerweise anhand der Dateierweiterung bestimmt, ohne den Inhalt der Datei zu untersuchen. Alle Browser geben eine leere Zeichenkette zurück, wenn der MIME-Typ nicht ermittelt werden kann, obwohl die Spezifikation `application/octet-stream` vorschreibt.

Während eines Drag-Vorgangs kann diese Eigenschaft in jedem Drag-Event-Handler gelesen werden, selbst wenn sich der Drag-Datenspeicher im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) befindet. Der Typ des Elements bleibt zugänglich, seine Daten können jedoch nur in den Handlern für die Events [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) gelesen werden. Einzelheiten finden Sie unter [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Wert

Eine Zeichenkette, die den Typ des Drag-Datenelements darstellt.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `type`-Eigenschaft.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type === "text/plain") {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type === "text/html") {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "string" && item.type === "text/uri-list") {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (item.kind === "file" && item.type.startsWith("image/")) {
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
- [Liste gängiger MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types)
