---
title: "HTMLDialogElement: cancel Ereignis"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

Das **`cancel`**-Ereignis wird auf einem {{HTMLElement("dialog")}}-Element ausgelöst, wenn der Benutzer eine Schließen-Anforderung auslöst.

Der `cancel`-Ereignishandler kann verwendet werden, um das Standardverhalten beim Empfang einer Schließen-Anforderung zu überschreiben und zu verhindern, dass der Dialog geschlossen wird. Wenn das Standardverhalten nicht verhindert wird, wird der Dialog geschlossen und ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst.

Schließen-Anforderungen können durch folgende Aktionen ausgelöst werden:

- Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen
- Aufrufen der Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
- Die Zurück-Taste auf mobilen Plattformen

Dieses Ereignis ist abbruchfähig und wird nicht hochgebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Einen Dialog abbrechen

Das folgende Beispiel zeigt einen Button, der bei Klick einen {{htmlelement("dialog")}} mittels der Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet.

Sie können das `cancel`-Ereignis auslösen, indem Sie entweder den _Request Close_-Button anklicken, um den Dialog zu schließen (über die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)), oder indem Sie die <kbd>Esc</kbd>-Taste drücken.

Beachten Sie, dass der `cancel`-Ereignishandler das Ereignis protokolliert und dann zurückgibt, wodurch der Dialog geschlossen wird (was wiederum das `close`-Ereignis auslöst).
Sie können die Zeile, die `event.preventDefault()` enthält, auskommentieren, um das Ereignis abzubrechen.

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="request-close">Request Close</button>
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
function log(text, clear = false) {
  if (clear) {
    logElement.innerText = "";
  }
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const requestCloseButton = document.getElementById("request-close");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  log("open button click event fired", true);
  log("dialog showModal() called");
  dialog.showModal();
});

// Request close
requestCloseButton.addEventListener("click", () => {
  log("request close button click event fired");
  log("dialog requestClose() called");
  // Triggers the cancel event
  dialog.requestClose();
});

// Fired when requestClose() is called
// Prevent the dialog from closing by calling event.preventDefault()
dialog.addEventListener("cancel", (event) => {
  log("dialog cancel event fired");
  // Uncomment the next two lines to prevent the dialog from closing
  // log("dialog close cancelled");
  // event.preventDefault();
});

dialog.addEventListener("close", (event) => {
  log("dialog close event fired");
});
```

#### Ergebnis

{{ EmbedLiveSample('Canceling a dialog', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
