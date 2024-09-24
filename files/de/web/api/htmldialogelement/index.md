---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`** Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden von der {{domxref("HTMLElement")}} Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.open")}}
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Element/dialog#open) HTML-Attribut widerspiegelt und anzeigt, ob der Dialog zur Interaktion verfügbar ist.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, das den `returnValue` des Dialogs aktualisiert.
- {{domxref("HTMLDialogElement.show()")}}
  - : Zeigt den Dialog nicht modal an, d.h. er ermöglicht weiterhin die Interaktion mit Inhalten außerhalb des Dialogs.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Zeigt den Dialog als modal an, über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, {{DOMxRef("HTMLElement")}}._

Hören Sie diese Ereignisse mit {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ab oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, sei es mit der Escape-Taste, der Methode `HTMLDialogElement.close()`, oder durch das Einreichen eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein modales {{htmlelement("dialog")}} öffnet, das ein Formular über die {{domxref("HTMLDialogElement.showModal()")}} Funktion enthält. Wenn es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inert. Von dort aus können Sie auf die Schaltfläche _Abbrechen_ klicken, um den Dialog zu schließen (über die {{domxref("HTMLDialogElement.close()")}} Funktion), oder das Formular über die Absenden-Schaltfläche einreichen. Die Auswahl der Abbrechen-Schaltfläche schließt den Dialog und erzeugt ein {{domxref("HTMLDialogElement/close_event", "close")}} Ereignis, kein {{domxref("HTMLElement/cancel_event", "cancel")}} Ereignis.

#### HTML

```html
<!-- Pop-up-Dialogbox, die ein Formular enthält -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Lieblingstier:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Salmine</option>
        <option>Roter Panda</option>
        <option>Spinnenaffe</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Abbrechen</button>
      <button type="submit">Bestätigen</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Details aktualisieren</button>
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

// Update-Button öffnet einen modalen Dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Formular-Abbrechen-Schaltfläche schließt die Dialogbox
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
