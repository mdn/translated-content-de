---
title: "HTMLDialogElement: showModal()-Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle zeigt den Dialog als Modal an, über allen anderen möglicherweise vorhandenen Dialogen. Es wird in der {{Glossary("top_layer", "Top-Schicht")}} dargestellt, zusammen mit einem {{cssxref('::backdrop')}} Pseudo-Element. Die Interaktion außerhalb des Dialogs wird blockiert und der Inhalt außerhalb wird inaktiv gemacht.

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
  - : Wird geworfen, wenn der Dialog bereits geöffnet ist (d. h. wenn das `open`-Attribut bereits auf dem {{htmlelement("dialog")}}-Element gesetzt ist), oder wenn der Dialog auch ein [Popover](/de/docs/Web/API/Popover_API) ist, das bereits angezeigt wird.

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()`-Funktion öffnet. Solange es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inaktiv. Von dort aus können Sie auf den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion), oder das Formular über den Absenden-Button einreichen. Die Auswahl des Abbrechen-Buttons schließt den Dialog, wodurch ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis entsteht, kein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis.

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
