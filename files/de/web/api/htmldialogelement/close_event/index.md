---
title: "HTMLDialogElement: close-Ereignis"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("HTML DOM")}}

Das `close`-Ereignis wird für ein `HTMLDialogElement`-Objekt ausgelöst, wenn das von ihm repräsentierte {{htmlelement("dialog")}} geschlossen wurde.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("close", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### `close`-Ereignisse behandeln

Dieses Beispiel zeigt, wie Sie auf `close`-Ereignisse reagieren, die durch verschiedene Methoden zum Schließen eines Dialogs ausgelöst werden:

- Aufrufen der Methode [`close()`](/de/docs/Web/API/HTMLDialogElement/close)
- Ein Formular mit `method="dialog"`. Das Absenden des Formulars schließt den `dialog` und löst ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis aus, ohne Daten zu übermitteln oder das Formular zurückzusetzen
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

{{ EmbedLiveSample('Handling `close` events', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{htmlelement("dialog")}}
