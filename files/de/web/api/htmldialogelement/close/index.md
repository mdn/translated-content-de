---
title: "HTMLDialogElement: close() Methode"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`close()`** Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle schließt das {{htmlelement("dialog")}}. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

## Syntax

```js-nolint
close()
close(returnValue)
```

### Parameter

- `returnValue` {{optional_inline}}
  - : Ein String, der einen aktualisierten Wert für den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der beim Anklicken ein {{htmlelement("dialog")}} öffnet, das ein Formular über die `showModal()` Methode enthält. Danach können Sie auf den _X_ Button klicken, um den Dialog zu schließen (über die `HTMLDialogElement.close()` Methode), oder das Formular über den Senden-Button abschicken.

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

    // Form close button closes the dialog box
    closeButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

Wenn der "X" Button den `type="submit"` hätte, würde der Dialog geschlossen werden, ohne dass JavaScript erforderlich ist. Eine Formularübermittlung schließt das `<dialog>`, in dem es eingebettet ist, wenn [die `method` des Formulars `dialog` ist](/de/docs/Web/HTML/Reference/Elements/form#method), sodass kein "close" Button erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
