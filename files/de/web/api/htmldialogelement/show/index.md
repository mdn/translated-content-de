---
title: "HTMLDialogElement: show()-Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`show()`**-Methode des {{domxref("HTMLDialogElement")}}-Interfaces zeigt das Dialogfeld modellfrei an, d.h. es erlaubt weiterhin die Interaktion mit dem Inhalt außerhalb des Dialogs.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `show()`-Methode öffnet. Von dort aus können Sie den _Cancel_-Button anklicken, um das Dialogfeld zu schließen (über die {{domxref("HTMLDialogElement.close()")}}-Methode), oder das Formular über den Senden-Button absenden.

```html
<!-- Einfache Pop-up-Dialogbox, die ein Formular enthält -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Lieblingstier:</label>
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
  <button id="updateDetails">Details aktualisieren</button>
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

    // Update-Button öffnet ein modellfreies Dialogfeld
    updateButton.addEventListener("click", () => {
      dialog.show();
      openCheck(dialog);
    });

    // Formular-Abbrechen-Button schließt das Dialogfeld
    cancelButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
