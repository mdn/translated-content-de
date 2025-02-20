---
title: "HTMLDialogElement: showModal() Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: d4ef52651257b64f9298fb34db82071f605a3fae
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode des
[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces zeigt den Dialog als Modal an, überlagert alle anderen möglicherweise vorhandenen Dialoge. Er wird in der {{Glossary("top_layer", "obersten Ebene")}} angezeigt, zusammen mit einem {{cssxref('::backdrop')}}-Pseudo-Element. Elemente, die sich im selben Dokument wie der Dialog befinden, mit Ausnahme des Dialogs und seiner Nachkommen, werden _unwirksam_ (als ob das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut angegeben wäre). Nur das umgebende Dokument wird blockiert; wenn der Dialog innerhalb eines `iframe` angezeigt wird, bleibt der Rest der Seite interaktiv.

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
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet und nicht modal ist (d. h. wenn der Dialog bereits mit [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) geöffnet wurde).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die beim Anklicken einen modalen {{htmlelement("dialog")}} mit einem Formular über die Funktion `HTMLDialogElement.showModal()` öffnet. Während der Dialog geöffnet ist, wird alles außer dem Inhalt des modalen Dialogs unwirksam. Von dort aus können Sie entweder auf die _Abbrechen_-Schaltfläche klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über die Absenden-Schaltfläche einreichen. Das Auswählen der Abbrechen-Schaltfläche schließt den Dialog und löst ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, jedoch kein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis.

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
