---
title: "HTMLDialogElement: cancel Ereignis"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{APIRef}}

Das **`cancel`** Ereignis tritt auf einem {{HTMLElement("dialog")}}-Element auf, wenn der Benutzer den Browser anweist, das aktuell offene Dialogfeld zu schließen. Der Browser löst dieses Ereignis aus, wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt.

Dieses Ereignis kann abgebrochen werden, kann jedoch nicht blubbern.

Wenn ein `<dialog>` mit der <kbd>Esc</kbd>-Taste geschlossen wird, werden sowohl das `cancel`-Ereignis als auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen eines Dialogs

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Close</button>
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
