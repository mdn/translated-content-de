---
title: "HTMLDialogElement: show() Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{ APIRef("HTML DOM") }}

Die **`show()`** Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle zeigt das Dialogfeld modelless an, d.h. sie ermöglicht weiterhin die Interaktion mit Inhalten außerhalb des Dialogs.

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

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `show()` Methode öffnet. Von dort aus können Sie den _Cancel_-Button klicken, um das Dialogfeld zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode), oder das Formular über den Absenden-Button einreichen.

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

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
