---
title: "HTMLDialogElement: requestClose() Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{ APIRef("HTML DOM") }}

Die Methode **`requestClose()`** des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interfaces fordert das Schließen des {{htmlelement("dialog")}} an. Es kann optional ein String als Argument übergeben werden, welcher den `returnValue` des Dialogs aktualisiert.

Diese Methode unterscheidet sich von der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode darin, dass sie ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis auslöst, bevor das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis ausgelöst wird. Autoren können [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) im Handler für das `cancel` Ereignis aufrufen, um zu verhindern, dass der Dialog geschlossen wird.

Diese Methode bietet das gleiche Verhalten wie der interne "close watcher" des Dialogs.

## Syntax

```js-nolint
requestClose()
requestClose(returnValue)
```

### Parameter

- `returnValue` {{optional_inline}}
  - : Ein String, der einen aktualisierten Wert für den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von requestClose()

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er geklickt wird, ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()` Methode öffnet. Ist es offen, können Sie den **X**-Button klicken, um das Schließen des Dialogs anzufordern (über die `HTMLDialogElement.requestClose()` Methode), oder das Formular über den **Bestätigen**-Button absenden.

#### HTML

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="close" aria-label="close">X</button>
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
const closeButton = document.getElementById("close");
const dialog = document.getElementById("favDialog");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
});

// Form close button requests to close the dialog box
closeButton.addEventListener("click", () => {
  dialog.requestClose("animalNotChosen");
});

function dialogShouldNotClose() {
  // Add logic to decide whether to allow the dialog to close.
  // Closing prevented by default
  return true;
}

dialog.addEventListener("cancel", (event) => {
  if (!event.cancelable) return;
  if (dialogShouldNotClose()) {
    console.log("Closing prevented");
    event.preventDefault();
  }
});
```

Wäre der "X"-Button vom `type="submit"`, hätte sich der Dialog ohne JavaScript geschlossen. Eine Formularübermittlung schließt das `<dialog>`, in dem es verschachtelt ist, wenn die [Methode des Formulars `dialog` ist](/de/docs/Web/HTML/Reference/Elements/form#method), sodass kein "close"-Button erforderlich ist.

#### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
