---
title: "HTMLDialogElement: showModal() Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`** Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle zeigt den Dialog als Modal über allen anderen möglicherweise vorhandenen Dialogen an. Es wird in der {{Glossary("top_layer", "oberen Ebene")}} zusammen mit einem {{cssxref('::backdrop')}} Pseudo-Element angezeigt. Elemente innerhalb desselben Dokuments wie der Dialog, außer dem Dialog selbst und seinen Nachkommen, werden _inert_ (als ob das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut festgelegt wäre). Nur das enthaltende Dokument wird blockiert; wenn der Dialog in einem iframe gerendert wird, bleibt der Rest der Seite interaktiv.

## Syntax

```js-nolint
showModal()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet und nicht modal ist (d.h. wenn der Dialog bereits mit [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) geöffnet wurde).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()` Funktion öffnet. Während es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inert. Von dort aus können Sie auf den _Abbrechen_-Button klicken, um den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Funktion zu schließen, oder das Formular über den Abschicken-Button einreichen. Durch Drücken des Abbrechen-Buttons wird der Dialog geschlossen, wodurch ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis und kein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis erzeugt wird.

#### HTML

```html
<!-- pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### Ergebnis

{{EmbedLiveSample("Opening a modal dialog")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
