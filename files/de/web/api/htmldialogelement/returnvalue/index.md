---
title: "HTMLDialogElement: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces erhält oder setzt den Rückgabewert für das {{htmlelement("dialog")}}, üblicherweise um anzugeben, welche Schaltfläche der Benutzer gedrückt hat, um es zu schließen.

## Wert

Ein String, der den `returnValue` des Dialogs darstellt.

## Beispiele

Das folgende Beispiel zeigt eine Schaltfläche zum Öffnen eines {{htmlelement("dialog")}} mit einem Formular über die Methode `showModal()`.
Das Skript weist der `returnValue` initial den Wert `initialValue` zu.
Die Bestätigungsschaltfläche (`confirmBtn`) sendet das Formular mit Validierung, und die "X"-Schaltfläche sendet das Formular ohne Validierung. Das Senden eines Formulars mit `method="dialog"` schließt den Dialog und setzt den Rückgabewert auf den `value`, falls vorhanden, der `button`- oder `input`-Elemente vom Typ `submit`.
Die Zurücksetzen-Schaltfläche hat einen Ereignis-Handler, der den Dialog schließt; sie hat keinen Einfluss auf den `returnValue`. Auch das Schließen des Dialogs mit der <kbd>Esc</kbd>-Taste hat keinen Einfluss.

```html
<!-- Simple pop-up dialog box containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <input
      type="submit"
      aria-label="close"
      value="X"
      name="x-button"
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
