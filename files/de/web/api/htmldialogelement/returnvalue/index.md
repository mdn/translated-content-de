---
title: "HTMLDialogElement: Eigenschaft returnValue"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: d60211fec216df4045c6ef3be67c4bb3e1d20fc7
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein String, der den Rückgabewert für ein {{htmlelement("dialog")}}-Element darstellt, wenn es geschlossen wird.
Sie können den Wert direkt festlegen (`dialog.returnValue = "result"`) oder indem Sie den Wert als String-Argument an [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) übergeben.

## Wert

Ein String, der den `returnValue` des Dialogs darstellt.
Der Standardwert ist ein leerer String (`""`).

## Beispiele

Im folgenden Beispiel wird eine Schaltfläche angezeigt, um einen Dialog mit einer Nutzungsbedingungen-Eingabeaufforderung über die Methode `showModal()` zu öffnen.
Das Skript verarbeitet die Benutzereingabe, indem es den `returnValue` zuweist, wenn die Schaltfläche "Akzeptieren" oder "Ablehnen" geklickt wird.
Die Schaltfläche "Ablehnen" setzt den `returnValue` auf "declined", während die Schaltfläche "Akzeptieren" ihn auf "accepted" setzt. Zusätzlich aktualisiert das Schließen des Dialogs (z. B. durch das Schließen-Ereignis) den Status-Text mit dem `returnValue` des Dialogs.
Das Schließen des Dialogs mit der <kbd>Esc</kbd>-Taste setzt den `returnValue` nicht.

```html
<!-- Simple pop-up dialog box -->
<dialog id="termsDialog">
  <p>Do you agree to the Terms of Service(link)?</p>
  <button id="declineButton" value="declined">Decline</button>
  <button id="acceptButton" value="accepted">Accept</button>
</dialog>
<p>
  <button id="openDialog">Review ToS</button>
</p>
<p id="statusText"></p>

<script>
  const dialog = document.getElementById("termsDialog");
  const openDialog = document.getElementById("openDialog");
  const statusText = document.getElementById("statusText");
  const declineButton = document.getElementById("declineButton");
  const acceptButton = document.getElementById("acceptButton");

  function handleUserInput(returnValue) {
    if (returnValue === "") {
      statusText.innerText = "There was no return value";
    } else {
      statusText.innerText = "Return value: " + returnValue;
    }
  }

  openDialog.addEventListener("click", () => {
    dialog.showModal();
    handleUserInput(dialog.returnValue);
  });

  declineButton.addEventListener("click", closeDialog);
  acceptButton.addEventListener("click", closeDialog);

  function closeDialog(event) {
    const button = event.target;
    const returnValue = button.value;
    dialog.close(returnValue);
    handleUserInput(dialog.returnValue);
  }

  dialog.addEventListener("close", () => {
    handleUserInput(dialog.returnValue);
  });
</script>
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
