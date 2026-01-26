---
title: "HTMLDialogElement: requestClose() Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`requestClose()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle fordert das Schließen des {{htmlelement("dialog")}}-Elements an. Ein optionaler String kann als Argument übergeben werden, das den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs aktualisiert.

Diese Methode unterscheidet sich von [`close()`](/de/docs/Web/API/HTMLDialogElement/close), da sie ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auslöst, bevor das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst wird. Autoren können [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) im Handler für das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis aufrufen, um zu verhindern, dass der Dialog geschlossen wird.

Diese Methode bietet das gleiche Verhalten wie der interne Schließen-Beobachter des Dialogs.

## Syntax

```js-nolint
requestClose()
requestClose(returnValue)
```

### Parameter

- `returnValue` {{optional_inline}}
  - : Ein String, der einen aktualisierten Wert für den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von `requestClose()`

Das folgende Beispiel zeigt eine Schaltfläche, die beim Klicken einen {{htmlelement("dialog")}} mit der [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode öffnet. Von dort aus können Sie entweder auf die _Schließen_-Schaltfläche klicken, um die `requestClose()`-Methode aufzurufen und den Dialog zu schließen.

Die _Schließen_-Schaltfläche schließt den Dialog ohne einen [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue), während die _Schließen mit Rückgabewert_-Schaltfläche den Dialog mit einem [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) schließt.

Das Verhindern des Schließens des Dialogs wird mit einem Kontrollkästchen demonstriert.

#### HTML

```html
<dialog id="dialog">
  <div>
    <label><input type="checkbox" id="prevent-close" /> Cancel close</label>
  </div>
  <button type="button" id="close">Close</button>
  <button type="button" id="close-w-value">Close w/ return value</button>
</dialog>

<button id="open">Open dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const closeWithValueButton = document.getElementById("close-w-value");
const preventCloseInput = document.getElementById("prevent-close");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  // Reset the return value
  dialog.returnValue = "";
  // Show the dialog
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.requestClose();
});

// Close button closes the dialog box with a return value
closeWithValueButton.addEventListener("click", () => {
  dialog.requestClose("some value");
});

// Fired when requestClose() is called
// Prevent the dialog from closing by calling event.preventDefault()
dialog.addEventListener("cancel", (event) => {
  if (preventCloseInput.checked) {
    log("Dialog close cancelled");
    event.preventDefault();
  }
});

// cancel event is not prevented, dialog will close
dialog.addEventListener("close", () => {
  log(`Dialog closed. Return value: "${dialog.returnValue}"`);
});
```

#### Ergebnis

{{ EmbedLiveSample('Using `requestClose()`', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}} Element
- Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis
