---
title: "HTMLDialogElement: cancel-Ereignis"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: a27b7a5b10bd06be4de7569228d7f2c11fc94b79
---

{{APIRef("HTML DOM")}}

Das **`cancel`**-Ereignis wird auf einem {{HTMLElement("dialog")}}-Element ausgelöst, wenn der Benutzer eine Schließanfrage auslöst.

Mit dem Event-Handler für `cancel` können Sie das Standardverhalten bei einer Schließanfrage überschreiben und verhindern, dass der Dialog geschlossen wird.
Wird das Standardverhalten nicht verhindert, schließt sich der Dialog und löst ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus.

Schließanfragen können ausgelöst werden durch:

- Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen
- Aufrufen der Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
- Betätigen der Zurück-Taste auf mobilen Plattformen

Das Ereignis wird nicht weitergegeben (Bubbling). Ob es abgebrochen werden kann, hängt davon ab, wie die Schließanfrage ausgelöst wurde.
Aufrufe von [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) lösen ein abbrechbares Ereignis aus.
Schließanfragen der Plattform, etwa durch Drücken von <kbd>Esc</kbd>, können nur dann abgebrochen werden, wenn dies durch eine Benutzeraktivierung erlaubt ist.
Wenn eine Schließanfrage der Plattform abgebrochen wird, kann eine nachfolgende Schließanfrage ohne zwischenzeitliche Benutzeraktivierung ein nicht abbrechbares `cancel`-Ereignis auslösen und den Dialog schließen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cancel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncancel = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Schließen eines Dialogs abbrechen

Das folgende Beispiel zeigt eine Schaltfläche, die beim Anklicken einen {{htmlelement("dialog")}} mithilfe der Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet.

Sie können das `cancel`-Ereignis auslösen, indem Sie entweder auf die Schaltfläche _Schließen anfordern_ klicken, um den Dialog über die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) zu schließen, oder die <kbd>Esc</kbd>-Taste drücken.

Beachten Sie, dass der Event-Handler für `cancel` das Ereignis protokolliert und dann zurückkehrt, sodass sich der Dialog schließen kann (wodurch wiederum das `close`-Ereignis ausgelöst wird).
Wenn das Ereignis abgebrochen werden kann, können Sie die Zeile mit `event.preventDefault()` einkommentieren, um es abzubrechen.
Das Beispiel protokolliert außerdem den Wert von `event.cancelable`, sodass Sie erkennen können, wann eine Schließanfrage der Plattform nicht abgebrochen werden kann.

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

// Fired when a close request is received
dialog.addEventListener("cancel", (event) => {
  log(`dialog cancel event fired (cancelable: ${event.cancelable})`);
  if (event.cancelable) {
    // Uncomment the next two lines to prevent the dialog from closing
    // log("dialog close canceled");
    // event.preventDefault();
  }
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

- HTML-Element {{HTMLElement("dialog")}}
