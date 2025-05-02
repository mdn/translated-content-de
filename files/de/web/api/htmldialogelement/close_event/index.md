---
title: "HTMLDialogElement: close Ereignis"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `close` Ereignis wird auf einem `HTMLDialogElement` Objekt ausgelöst, wenn das damit verknüpfte {{htmlelement("dialog")}} geschlossen wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Live-Beispiel

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
    <button>Close via method="dialog"</button>
  </form>
  <button class="close">Close via .close() method</button>
  <p>Or hit the <kbd>Esc</kbd> key</p>
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
dialog.addEventListener("close", (event) => {
  result.textContent = "dialog was closed";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
  result.textContent = "";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog) Element
- Die [`Event`](/de/docs/Web/API/Event) Schnittstelle
