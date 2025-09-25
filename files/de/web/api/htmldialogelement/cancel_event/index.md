---
title: "HTMLDialogElement: cancel-Ereignis"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`cancel`**-Ereignis wird auf einem {{HTMLElement("dialog")}}-Element ausgelöst, wenn der Benutzer den Browser anweist, das aktuell geöffnete Dialogfeld zu schließen. Der Browser löst dieses Ereignis aus, wenn der Benutzer die Taste <kbd>Esc</kbd> drückt.

Dieses Ereignis ist abbruchbar, kann aber nicht gebubbelt werden.

Wenn ein `<dialog>` mit der <kbd>Esc</kbd>-Taste geschlossen wird, werden sowohl das `cancel`- als auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Ein Dialogfeld abbrechen

#### HTML

```html
<dialog class="example-dialog">
  <button class="close">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");

dialog.addEventListener("cancel", (event) => {
  result.textContent = "dialog was canceled";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent = "The dialog API is not supported by this browser";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{ EmbedLiveSample('Canceling a dialog', '100%', '100px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
