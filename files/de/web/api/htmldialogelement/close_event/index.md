---
title: "HTMLDialogElement: close Event"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

Das `close`-Ereignis wird auf einem `HTMLDialogElement`-Objekt ausgelöst, wenn das von ihm repräsentierte {{htmlelement("dialog")}} geschlossen wurde.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Behandlung von `close`-Ereignissen

Dieses Beispiel zeigt, wie `close`-Ereignisse, die durch mehrere verschiedene Methoden zum Schließen eines Dialogs ausgelöst werden, erfasst werden können:

- Aufruf der [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode
- Ein Formular mit `method="dialog"`. Das Absenden des Formulars schließt den `dialog` und löst ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis aus, ohne Daten zu übermitteln oder das Formular zu löschen
- Die <kbd>Esc</kbd>-Taste.
  Siehe [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis

#### HTML

```html
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close via method="dialog"</button>
  </form>
  <p><button id="close">Close via .close() method</button></p>
  <p>Or hit the <kbd>Esc</kbd> key</p>
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
function log(text, clear = false) {
  if (clear) {
    logElement.innerText = "";
  }
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  log("open button click event fired", true);
  log("dialog showModal() called");
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  log("close button click event fired");
  log("dialog close() called");
  dialog.close();
});

dialog.addEventListener("close", (event) => {
  log("dialog close event fired");
});
```

#### Ergebnis

{{EmbedLiveSample('Handling `close` events', '100%', '250px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}}-Element
