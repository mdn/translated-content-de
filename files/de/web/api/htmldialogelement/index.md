---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt, das anzeigt, ob der Dialog verfügbar für Interaktionen ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, welcher den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog nicht-modal an, d.h. es erlaubt weiterhin Interaktionen mit Inhalten außerhalb des Dialogs.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal über allen anderen möglicherweise vorhandenen Dialogen an. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert), wobei Interaktionen außerhalb des Dialogs blockiert werden.

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Sie können diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder einem Event-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, egal ob mit der Escape-Taste, der Methode `HTMLDialogElement.close()` oder durch das Einreichen eines Formulars im Dialog mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der bei einem Klick einen modalen {{htmlelement("dialog")}} mit einem Formular über die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Während dessen Inhalt offen ist, ist alles andere inert. Von dort aus können Sie auf den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über den Absende-Button einreichen. Die Auswahl des Abbrechen-Buttons schließt den Dialog und erzeugt ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis, kein [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)-Ereignis.

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

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("dialog")}}.
