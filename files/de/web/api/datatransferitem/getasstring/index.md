---
title: "DataTransferItem: Methode getAsString()"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`getAsString()`**-Methode des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interfaces ruft den angegebenen Rückruf mit den String-Daten des Drag-Daten-Elements als Argument auf, wenn das [`kind`](/de/docs/Web/API/DataTransferItem/kind) des Elements ein _Plain unicode string_ ist (d.h. `kind` ist `string`).

Während einer Drag-Operation kann diese Methode nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Events Daten lesen, da dies die einzigen Zeitpunkte sind, zu denen der Drag-Datenspeicher lesbar ist. Der Aufruf dieser Methode aus einem anderen Drag-Event löst den Rückruf nicht aus. Die Methode muss synchron innerhalb des Ereignis-Handlers aufgerufen werden, obwohl der Rückruf asynchron ausgeführt wird. Siehe [Lesen des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

## Syntax

```js-nolint
getAsString(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Rückruffunktion, die die folgenden Argumente erhält:
    - `data`
      - : Die String-Daten des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsString()`-Methode als _Inline-Funktion_ in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Event-Handler.

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

- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
