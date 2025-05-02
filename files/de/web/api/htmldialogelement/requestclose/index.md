---
title: "HTMLDialogElement: requestClose() Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 8e757e03faacaf3ad764c2defb9dc203b3e3e687
---

{{ APIRef("HTML DOM") }}

Die **`requestClose()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle fordert die Schließung des {{htmlelement("dialog")}} an. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

Diese Methode unterscheidet sich von der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode, da sie ein `cancel`-Ereignis auslöst, bevor das `close`-Ereignis ausgelöst wird. Autoren können [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) im Handler für das `cancel`-Ereignis aufrufen, um zu verhindern, dass der Dialog geschlossen wird.

Diese Methode zeigt dasselbe Verhalten wie der interne Schließ-Wächter des Dialogs.

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

Das folgende Beispiel zeigt einen einfachen Knopf, der beim Anklicken ein {{htmlelement("dialog")}} mit einem Formular öffnet, über die `showModal()`-Methode. Einmal geöffnet, können Sie auf die **X**-Schaltfläche klicken, um die Schließung des Dialogs anzufordern (über die `HTMLDialogElement.requestClose()`-Methode), oder das Formular über die **Bestätigen**-Schaltfläche absenden.

#### HTML

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="close" aria-label="close" formnovalidate>
      X
    </button>
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
      <button type="reset">Reset</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>
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

Wenn die "X"-Schaltfläche `type="submit"` wäre, würde der Dialog geschlossen, ohne dass JavaScript erforderlich wäre. Eine Formularübertragung schließt das `<dialog>`, in dem es eingebettet ist, wenn die [Methode des Formulars `dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) ist, sodass keine "Schließen"-Schaltfläche erforderlich ist.

#### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
