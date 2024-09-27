---
title: "HTMLDialogElement: showModal()-Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode des Interfaces [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) zeigt den Dialog als Modal an, über alle anderen eventuell vorhandenen Dialoge. Sie wird in der [obersten Schicht](/de/docs/Glossary/top_layer) zusammen mit einem {{cssxref('::backdrop')}} Pseudo-Element angezeigt. Interaktion außerhalb des Dialogs wird blockiert und der Inhalt außerhalb wird unempfindlich.

## Syntax

```js-nolint
showModal()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet ist (d. h. wenn das `open`-Attribut bereits auf dem {{htmlelement("dialog")}}-Element gesetzt ist) oder wenn der Dialog auch ein [Popover](/de/docs/Web/API/Popover_API) ist, das bereits angezeigt wird.

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die bei einem Klick ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()`-Funktion öffnet. Solange es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs unempfindlich. Von dort aus können Sie auf die Schaltfläche _Abbrechen_ klicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion) oder das Formular über die Senden-Schaltfläche abschicken. Das Auswählen der Abbrechen-Schaltfläche schließt den Dialog und erzeugt ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis, kein [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)-Ereignis.

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

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
