---
title: "HTMLDialogElement: close Ereignis"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: 981ab25c61986b40213d0c84131432438d5a7903
---

{{APIRef}}

Das `close` Ereignis wird auf einem `HTMLDialogElement` Objekt ausgelöst, wenn das {{htmlelement("dialog")}}, das es repräsentiert, geschlossen wurde.

Dieses Ereignis ist nicht abbruchfähig und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Live-Beispiel

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
    <button>Schließen über method="dialog"</button>
  </form>
  <button class="close">Schließen über .close() Methode</button>
  <p>Oder drücken Sie die <kbd>Esc</kbd>-Taste</p>
</dialog>

<button class="open-dialog">Dialog öffnen</button>

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

- HTML [`<dialog>`](/de/docs/Web/HTML/Element/dialog) Element
- Die [`Event`](/de/docs/Web/API/Event) Schnittstelle
