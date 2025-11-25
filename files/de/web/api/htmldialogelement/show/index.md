---
title: "HTMLDialogElement: show() Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: e1a895da256b94f28be74b6f92ed18b5c2bec366
---

{{ APIRef("HTML DOM") }}

Die **`show()`** Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle zeigt das Dialogfeld modelless an, d.h. sie ermöglicht weiterhin die Interaktion mit Inhalten außerhalb des Dialogs.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dialogfeld bereits geöffnet und modal ist (d.h. wenn das Dialogfeld bereits mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde).

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `show()` Methode öffnet.
Von dort aus können Sie auf die _Abbrechen_-Schaltfläche ("X") klicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode), oder das Formular über die Absenden-Schaltfläche einreichen.

#### HTML

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="cancel">X</button>
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <li>
        <button type="reset">Reset</button>
      </li>
      <li>
        <button type="submit">Confirm</button>
      </li>
    </menu>
  </form>
</dialog>

<button id="updateDetails">Update details</button>
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
    console.log("Dialog cancelled");
  }
}

// Update button opens a modeless dialog
updateButton.addEventListener("click", () => {
  dialog.show();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### Ergebnisse

{{EmbedLiveSample("Basic usage",100, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
