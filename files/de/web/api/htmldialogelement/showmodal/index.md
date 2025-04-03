---
title: "HTMLDialogElement: showModal() Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`** Methode der
[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle zeigt den Dialog als modales Fenster über alle anderen möglicherweise vorhandenen Dialoge an. Es wird in der {{Glossary("top_layer", "obersten Schicht")}} angezeigt, zusammen mit einem {{cssxref('::backdrop')}} Pseudo-Element. Elemente im selben Dokument wie der Dialog werden, außer der Dialog selbst und seine Nachkommen, _inert_ (als ob das [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut angegeben ist). Nur das umgebende Dokument wird blockiert; wenn der Dialog innerhalb eines iframes gerendert wird, bleibt der Rest der Seite interaktiv.

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
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet und nicht modal ist (d.h. wenn der Dialog bereits mit [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) geöffnet wurde).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der bei einem Klick ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()` Funktion öffnet. Während der Dialog geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inert. Von dort aus können Sie den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Funktion) oder das Formular über den Abschick-Button absenden. Die Auswahl des Abbrechen-Buttons schließt den Dialog und erzeugt ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis, nicht ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis.

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
