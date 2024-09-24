---
title: "HTMLDialogElement: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 5ce6d5b38ec46374bbbf50b84b6105b5d1750911
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft der {{domxref("HTMLDialogElement")}}-Schnittstelle ruft den Rückgabewert des {{htmlelement("dialog")}}-Elements ab oder legt ihn fest, in der Regel um anzuzeigen, welchen Knopf der Benutzer gedrückt hat, um es zu schließen.

## Wert

Ein String, der den `returnValue` des Dialogs repräsentiert.

## Beispiele

Das folgende Beispiel zeigt einen Button, um ein {{htmlelement("dialog")}}-Element zu öffnen, das ein Formular über die `showModal()`-Methode enthält.
Das Skript weist `returnValue` einen Anfangswert von `initialValue` zu.
Der Bestätigungsbutton (`confirmBtn`) sendet das Formular mit Validierung ab und der "X"-Button sendet das Formular ohne Validierung ab. Das Senden eines Formulars mit einem `method="dialog"` schließt den Dialog und setzt den Rückgabewert auf den `value`, falls vorhanden, der `button`- oder `input`-Elemente des Typs `submit`.
Der Zurücksetzen-Button hat einen Ereignishandler, der den Dialog schließt; er hat keinen Einfluss auf den `returnValue`. Auch das Schließen des Dialogs mit der <kbd>Esc</kbd>-Taste nicht.

```html
<!-- Einfache Pop-up-Dialogbox mit einem Formular -->
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
        >Lieblingstier:
        <select name="favAnimal" required>
          <option></option>
          <option>Salzlake Garnele</option>
          <option>Roter Panda</option>
          <option>Spinnenaffe</option>
        </select>
      </label>
    </p>
    <menu>
      <button type="reset" value="resetBtn">Zurücksetzen</button>
      <button type="submit" value="confirmBtn">Bestätigen</button>
    </menu>
  </form>
</dialog>

<p>
  <button id="openDialog">Dialog öffnen</button>
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
        text.innerText = "Dialog geöffnet";
      } else {
        text.innerText = "Dialog geschlossen";
      }
    }

    function handleUserInput(returnValue) {
      if (!returnValue) {
        text.innerText += ". Kein Rückgabewert vorhanden";
      } else {
        text.innerText += ". Rückgabewert: " + returnValue;
      }
    }

    // "Dialog öffnen"-Button öffnet das <dialog> modal
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
      handleUserInput(dialog.returnValue);
    });

    reset.addEventListener("click", () => {
      dialog.close();
    });

    // wenn der Dialog geschlossen ist, egal wie er geschlossen wird
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

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
