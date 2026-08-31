---
title: "DataTransferItem: getAsFile()-Methode"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`getAsFile()`**-Methode der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstelle gibt das [`File`](/de/docs/Web/API/File)-Objekt des Drag-Datenobjekts zurück, wenn das Element eine Datei ist. Wenn das Element keine Datei ist, gibt diese Methode `null` zurück.

Während eines Drag-Vorgangs kann diese Methode die Daten nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)- und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse lesen, da dies die einzigen Zeiten sind, in denen der Drag-Datenspeicher lesbar ist. Ein Aufruf von einem anderen Drag-Ereignis gibt `null` zurück. Weitere Informationen finden Sie unter [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Syntax

```js-nolint
getAsFile()
```

### Parameter

Keine.

### Rückgabewert

Wenn das Drag-Datenobjekt eine Datei ist, wird ein [`File`](/de/docs/Web/API/File)-Objekt zurückgegeben; andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsFile()`-Methode in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignishandler.

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

- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)
