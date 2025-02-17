---
title: "HTMLDialogElement: showModal()-Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 694a813ca116ab209166ac162fe2fa59a9d20e55
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode der
[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle zeigt das Dialogfeld als Modalfenster an, überlagert andere möglicherweise vorhandene Dialogfelder. Es wird in der {{Glossary("top_layer", "Top-Schicht")}} angezeigt, zusammen mit einem {{cssxref('::backdrop')}}-Pseudo-Element. Elemente im gleichen Dokument wie das Dialogfeld, mit Ausnahme des Dialogs und seiner Nachkommen, werden _inert_ (als ob das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut angegeben wäre). Nur das enthaltene Dokument wird blockiert; wenn das Dialogfeld in einem iframe gerendert wird, bleibt der Rest der Seite interaktiv.

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
  - : Wird ausgelöst, wenn das Dialogfeld bereits geöffnet ist (d. h. wenn das `open`-Attribut bereits auf dem {{htmlelement("dialog")}}-Element gesetzt ist), oder wenn das Dialogfeld auch ein [Popover](/de/docs/Web/API/Popover_API) ist, das bereits angezeigt wird.

## Beispiele

### Öffnen eines modalen Dialogfelds

Das folgende Beispiel zeigt eine Schaltfläche, die beim Anklicken ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()`-Funktion öffnet. Während es geöffnet ist, wird alles außer dem Inhalt des modalen Dialogfelds inert. Von dort können Sie die Schaltfläche _Abbrechen_ verwenden, um das Dialogfeld zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion), oder das Formular über die Senden-Schaltfläche übermitteln. Wenn Sie die Abbrechen-Schaltfläche auswählen, wird das Dialogfeld geschlossen, wodurch ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst wird, kein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis.

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
