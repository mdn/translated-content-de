---
title: "HTMLDialogElement: requestClose() Methode"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 48274b4743f52657c1c352fa0274bda928eb4c9d
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

Die **`requestClose()`**-Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle fordert das Schließen des {{htmlelement("dialog")}} an. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

Diese Methode unterscheidet sich von der `HTMLDialogElement.close()`-Methode dadurch, dass ein `cancel`-Ereignis ausgelöst wird, bevor das `close`-Ereignis ausgelöst wird. Dies ermöglicht es den Autoren, das Schließen des Dialogs zu verhindern. Diese Methode zeigt dasselbe Verhalten wie der interne Schließ-Überwacher des Dialogs.

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

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort aus können Sie auf den _X_-Button klicken, um das Schließen des Dialogs anzufordern (über die `HTMLDialogElement.requestClose()`-Methode) oder das Formular über den Absenden-Button einreichen.

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

Wenn der "X"-Button den `type="submit"` hätte, wäre der Dialog ohne JavaScript geschlossen worden. Ein Formulareinsendung schließt das `<dialog>`, in dem es verschachtelt ist, wenn [die Methode des Formulars `dialog`](/de/docs/Web/HTML/Element/form#method) ist, sodass kein "Schließen"-Button erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
