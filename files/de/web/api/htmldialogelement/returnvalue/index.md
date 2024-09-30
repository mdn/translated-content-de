---
title: "HTMLDialogElement: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 5ce6d5b38ec46374bbbf50b84b6105b5d1750911
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ruft den Rückgabewert für das {{htmlelement("dialog")}}-Element ab oder legt ihn fest, normalerweise um anzugeben, welcher Button vom Benutzer zum Schließen gedrückt wurde.

## Wert

Ein String, der den `returnValue` des Dialogs darstellt.

## Beispiele

Das folgende Beispiel zeigt einen Button, um ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode zu öffnen. Das Skript weist dem `returnValue` einen anfänglichen Wert von `initialValue` zu. Der Bestätigungsbutton (`confirmBtn`) sendet das Formular mit Validierung ab und der "X"-Button sendet das Formular ohne Validierung ab. Das Absenden eines Formulars mit `method="dialog"` schließt den Dialog und setzt den Rückgabewert auf den `value`, falls vorhanden, der `button`- oder `input`-Elemente vom Typ `submit`. Der Reset-Button hat einen Ereignishandler, der den Dialog schließt; er hat keinen Einfluss auf den `returnValue`. Ebenso wenig hat das Schließen des Dialogs mit der <kbd>Esc</kbd>-Taste eine Auswirkung.

```html
<!-- Simple pop-up dialog box containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <input
      type="submit"
      aria-label="close"
      value="X"
      name="Xbutton"
      formnovalidate />
    <p>
      <label
        >Favorite animal:
        <select name="favAnimal" required>
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <menu>
      <button type="reset" value="resetBtn">Reset</button>
      <button type="submit" value="confirmBtn">Confirm</button>
    </menu>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="text"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("favDialog");
    const text = document.getElementById("text");
    const reset = document.querySelector("[type='reset']");
    dialog.returnValue = "initialValue";

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    function handleUserInput(returnValue) {
      if (!returnValue) {
        text.innerText += ". There was no return value";
      } else {
        text.innerText += ". Return value: " + returnValue;
      }
    }

    // "Open Dialog" button opens the <dialog> modally
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });

    reset.addEventListener("click", () => {
      dialog.close();
    });

    // when the dialog is closed, no matter how it is closed
    dialog.addEventListener("close", () => {
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });
  })();
</script>
<style>
  [aria-label="close"] {
    appearance: none;
    border-radius: 50%;
    border: 1px solid;
    float: right;
  }
</style>
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
