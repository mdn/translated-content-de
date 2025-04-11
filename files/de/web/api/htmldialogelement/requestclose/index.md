---
title: "HTMLDialogElement: requestClose()-Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`requestClose()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle fordert das Schließen des {{htmlelement("dialog")}} an. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

Diese Methode unterscheidet sich von der `HTMLDialogElement.close()`-Methode, indem sie vor dem Auslösen des `close`-Ereignisses ein `cancel`-Ereignis auslöst. Dies ermöglicht es Autoren, das Schließen des Dialogs zu verhindern. Diese Methode bietet dasselbe Verhalten wie der interne Schließwächter des Dialogs.

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

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er geklickt wird, einen {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort aus können Sie auf den _X_-Button klicken, um zu versuchen, den Dialog zu schließen (über die `HTMLDialogElement.requestClose()`-Methode) oder das Formular über den Absenden-Button zu senden.

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

Wäre der "X"-Button vom `type="submit"`, hätte sich der Dialog geschlossen, ohne dass JavaScript erforderlich wäre. Eine Formularübermittlung schließt das `<dialog>`, in dem es verschachtelt ist, wenn [die Methode des Formulars `dialog` ist](/de/docs/Web/HTML/Reference/Elements/form#method), sodass kein "close"-Button erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
