---
title: "HTMLDialogElement: close() Methode"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("HTML DOM") }}

Die **`close()`**-Methode des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces schließt das {{htmlelement("dialog")}}. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

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

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er angeklickt wird, ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort aus können Sie den _X_-Button anklicken, um den Dialog zu schließen (über die `HTMLDialogElement.close()`-Methode), oder das Formular über den Absenden-Button einreichen.

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

Wenn der "X"-Button den `type="submit"`-Attributwert hätte, würde der Dialog geschlossen, ohne dass JavaScript erforderlich wäre. Eine Formularübermittlung schließt das `<dialog>`, in dem es eingebettet ist, wenn die [Methode des Formulars `dialog`](/de/docs/Web/HTML/Element/form#method) ist, sodass kein "Schließen"-Button erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
