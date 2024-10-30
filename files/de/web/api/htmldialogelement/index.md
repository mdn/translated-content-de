---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und angibt, ob das Dialogfenster zur Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für das Dialogfenster festlegt oder zurückgibt.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt das Dialogfenster. Es kann optional ein String als Argument übergeben werden, das den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt das Dialogfenster modellfrei an, d.h. ermöglicht weiterhin die Interaktion mit Inhalten außerhalb des Dialogs.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt das Dialogfenster als Modal an, das über alle anderen möglicherweise vorhandenen Dialoge gelegt wird. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert), und Interaktionen außerhalb des Dialogs sind blockiert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn der Benutzer den aktuellen offenen Dialog mit der Escape-Taste abbricht.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn das Dialogfenster geschlossen wird, sei es mit der Escape-Taste, der `HTMLDialogElement.close()`-Methode oder durch das Absenden eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der, wenn er angeklickt wird, ein modales {{htmlelement("dialog")}} öffnet, das ein Formular über die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) enthält. Während es geöffnet ist, ist alles außer den Inhalten des modalen Dialogs inaktiv. Sie können dann auf die _Abbrechen_-Schaltfläche klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über die Absenden-Schaltfläche abschicken. Die Auswahl der Abbrechen-Schaltfläche schließt den Dialog und erzeugt ein [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis, nicht ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis.

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
