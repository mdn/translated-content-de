---
title: "HTMLDialogElement: show() Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`show()`** Methode des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
Interfaces zeigt das Dialogfeld modelless an, d.h. es erlaubt weiterhin die Interaktion mit Inhalt außerhalb des Dialogs.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er geklickt wird, ein
{{htmlelement("dialog")}} mit einem Formular über die `show()`-Methode öffnet. Von
dort aus können Sie den _Cancel_-Button anklicken, um den Dialog zu schließen (über die
[`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode), oder das Formular über den Submit-Button absenden.

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

<script>
  (() => {
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
  })();
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
