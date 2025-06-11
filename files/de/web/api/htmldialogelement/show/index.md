---
title: "HTMLDialogElement: show() Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

Die **`show()`** Methode des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
Interface zeigt den Dialog modelless an, d.h. es ist weiterhin möglich, mit Inhalten
außerhalb des Dialogs zu interagieren.

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
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet und modal ist (d.h. wenn der Dialog bereits mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde).

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er angeklickt wird, einen
{{htmlelement("dialog")}} mit einem Formular über die `show()` Methode öffnet. Von
dort aus können Sie auf die _Abbrechen_-Schaltfläche klicken, um den Dialog zu schließen (über die
[`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode), oder das Formular über die Senden-Schaltfläche absenden.

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
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
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>
```

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
