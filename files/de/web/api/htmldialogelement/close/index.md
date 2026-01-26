---
title: "HTMLDialogElement: close() Methode"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`close()`** Methode des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interfaces schließt das {{htmlelement("dialog")}}.
Ein optionaler String kann als Argument übergeben werden, um den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs zu aktualisieren.

Das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis wird ausgelöst, nachdem der Dialog geschlossen wurde.
Im Gegensatz zu einem Aufruf von [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) kann der Schließvorgang nicht abgebrochen werden.

## Syntax

```js-nolint
close()
close(returnValue)
```

### Parameter

- `returnValue` {{optional_inline}}
  - : Ein String, der den bestehenden Wert von [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) ersetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein {{htmlelement("dialog")}} über die [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode öffnet.
Von dort können Sie auf einen der _Close_ Buttons klicken, um den Dialog zu schließen (über die `close()` Methode).

Der _Close_ Button schließt den Dialog ohne [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue), während der _Close w/ return value_ Button den Dialog mit einem [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) schließt.

#### HTML

```html
<dialog id="dialog">
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

#### JavaScript

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

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  // Reset the return value
  dialog.returnValue = "";
  // Show the dialog
  dialog.showModal();
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close button closes the dialog box with a return value
closeWithValueButton.addEventListener("click", () => {
  dialog.close(`Closed at ${new Date().toLocaleTimeString()}`);
});

// Form close button closes the dialog box
dialog.addEventListener("close", () => {
  log(`Dialog closed. Return value: "${dialog.returnValue}"`);
});
```

> [!NOTE]
>
> Wissen Sie, dass Sie einen `<dialog>` auch automatisch schließen können, indem Sie ein {{htmlelement("form")}} Element mit einem [`method="dialog"`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut übermitteln.

### Ergebnis

{{ EmbedLiveSample('Closing a dialog', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}} Element
- Das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
