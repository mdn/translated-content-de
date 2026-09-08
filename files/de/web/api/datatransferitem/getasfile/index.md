---
title: "DataTransferItem: Methode getAsFile()"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: 2a4ce8db664c71d41fa179be43f3336ad384ab65
---

{{APIRef("HTML Drag and Drop API")}}

Die Methode **`getAsFile()`** der Schnittstelle [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) gibt das [`File`](/de/docs/Web/API/File)-Objekt des Drag-Datenelements zurück, wenn das Element eine Datei ist. Wenn das Element keine Datei ist, gibt diese Methode `null` zurück.

Während eines Drag-Vorgangs kann diese Methode Daten nur in den Handlern für die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) lesen, da dies die einzigen Zeitpunkte sind, zu denen der Drag-Datenspeicher lesbar ist. Der Aufruf bei einem anderen Drag-Ereignis gibt `null` zurück. Weitere Informationen finden Sie unter [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Syntax

```js-nolint
getAsFile()
```

### Parameter

Keine.

### Rückgabewert

Wenn das Drag-Datenelement eine Datei ist, wird ein [`File`](/de/docs/Web/API/File)-Objekt zurückgegeben; andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Methode `getAsFile()` in einem Event-Handler für [`drop`](/de/docs/Web/API/HTMLElement/drop_event).

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

- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)
