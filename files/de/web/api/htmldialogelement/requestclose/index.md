---
title: "HTMLDialogElement: requestClose() Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 4da185c20a05e7ed4ea0f18c03714ea5fc038818
---

{{ APIRef("HTML DOM") }}

Die **`requestClose()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle fordert an, das {{htmlelement("dialog")}} zu schließen. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

Diese Methode unterscheidet sich von der `HTMLDialogElement.close()`-Methode, indem sie ein `cancel`-Ereignis auslöst, bevor das `close`-Ereignis eintritt. Dies erlaubt es Autoren, das Schließen des Dialogs zu verhindern. Diese Methode weist das gleiche Verhalten wie der interne Schließungswächter des Dialogs auf.

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

Das folgende Beispiel zeigt einen einfachen Button, der bei einem Klick ein {{htmlelement("dialog")}} mit einem Formular öffnet, über die `showModal()`-Methode.
Von dort aus können Sie auf die _X_-Schaltfläche klicken, um das Schließen des Dialogs anzufordern (über die `HTMLDialogElement.requestClose()`-Methode) oder das Formular über die Absenden-Schaltfläche abschicken.

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <button id="close" aria-label="close" formnovalidate>X</button>
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

<script>
  (() => {
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
      // Add logic to decide whether to prevent the dialog from closing
    }

    dialog.addEventListener("cancel", (event) => {
      if (!event.cancelable) return;
      if (dialogShouldNotClose()) event.preventDefault();
    });
  })();
</script>
```

Wenn die "X"-Schaltfläche den `type="submit"` hätte, würde der Dialog ohne JavaScript schließen.
Eine Formularübermittlung schließt das `<dialog>`, in dem es eingebettet ist, wenn die [Methode des Formulars `dialog`](/de/docs/Web/HTML/Element/form#method) ist, sodass keine "Schließen"-Schaltfläche erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
