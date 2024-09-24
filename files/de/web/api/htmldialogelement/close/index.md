---
title: "HTMLDialogElement: close()-Methode"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("HTML DOM") }}

Die **`close()`**-Methode der {{domxref("HTMLDialogElement")}}-Schnittstelle schließt das {{htmlelement("dialog")}}. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.

## Syntax

```js-nolint
close()
close(returnValue)
```

### Parameter

- `returnValue` {{optional_inline}}
  - : Ein String, der einen aktualisierten Wert für den {{domxref("HTMLDialogElement.returnValue")}} des Dialogs darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken einen {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort aus können Sie den _X_-Button klicken, um den Dialog zu schließen (über die Methode `HTMLDialogElement.close()`), oder das Formular über den Absenden-Button einreichen.

```html
<!-- Einfaches Pop-up-Dialogfeld, das ein Formular enthält -->
<dialog id="favDialog">
  <form method="dialog">
    <button id="close" aria-label="close" formnovalidate>X</button>
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
      <button type="reset">Zurücksetzen</button>
      <button type="submit">Bestätigen</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Details aktualisieren</button>
</menu>

<script>
  (() => {
    const updateButton = document.getElementById("updateDetails");
    const closeButton = document.getElementById("close");
    const dialog = document.getElementById("favDialog");
    dialog.returnValue = "favAnimal";

    function openCheck(dialog) {
      if (dialog.open) {
        console.log("Dialog geöffnet");
      } else {
        console.log("Dialog geschlossen");
      }
    }

    // Der Update-Button öffnet einen modalen Dialog
    updateButton.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
    });

    // Der Schließen-Button des Formulars schließt das Dialogfeld
    closeButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();
</script>
```

Wenn der "X"-Button den `type="submit"` gehabt hätte, wäre der Dialog geschlossen worden, ohne dass JavaScript erforderlich wäre. Eine Formulareinreichung schließt das `<dialog>`, in dem es eingebettet ist, wenn [die Methode des Formulars `dialog` ist](/de/docs/Web/HTML/Element/form#method), sodass kein "Schließen"-Button erforderlich ist.

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
