---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`**-Schnittstelle bietet Methoden zum Manipulieren von {{HTMLElement("dialog")}}-Elementen. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und anzeigt, ob das Dialogfeld für die Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für das Dialogfeld festlegt oder zurückgibt.

## Instanz-Methoden

_Erbt Methoden von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt das Dialogfeld. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogfelds zu aktualisieren.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt das Dialogfeld modellfrei an, d.h. erlaubt weiterhin die Interaktion mit Inhalten außerhalb des Dialogfelds.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt das Dialogfeld als modales Fenster an, überlagert über anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des Dialogfelds ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogfelds werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn das Dialogfeld geschlossen wird, sei es durch die Escape-Taste, die `HTMLDialogElement.close()`-Methode oder durch das Absenden eines Formulars innerhalb des Dialogfelds mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein modales {{htmlelement("dialog")}} mit einem Formular über die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Während es geöffnet ist, ist alles andere als der Inhalt des modalen Dialogs inert. Von dort aus können Sie den _Abbrechen_-Button klicken, um das Dialogfeld zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über den Submit-Button absenden. Das Auswählen des Abbrechen-Buttons schließt das Dialogfeld und erzeugt ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis, kein [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)-Ereignis.

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
