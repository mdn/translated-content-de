---
title: "HTMLDialogElement: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 892f5d7d285d5ed9d79012b5e19c459392a7669e
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein String, der den Rückgabewert für ein {{htmlelement("dialog")}}-Element repräsentiert, wenn es geschlossen wird.
Sie können den Wert direkt festlegen (`dialog.returnValue = "result"`) oder den Wert als String-Argument an [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) übergeben.

## Wert

Ein String, der den `returnValue` des Dialogs repräsentiert.
Standardmäßig ein leerer String (`""`).

## Beispiele

### Überprüfung des Rückgabewerts

Das folgende Beispiel zeigt eine Schaltfläche, um einen Dialog zu öffnen. Der Dialog fragt den Benutzer, ob er einen Nutzungsbedingungen-Prompt akzeptieren möchte.

Der Dialog enthält die Schaltflächen "Akzeptieren" oder "Ablehnen": Wenn der Benutzer auf eine der Schaltflächen klickt, schließt der Klick-Handler der Schaltfläche den Dialog und übergibt seine Wahl an die [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion. Dies weist der Wahl die `returnValue`-Eigenschaft des Dialogs zu.

Im [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignishandler des Dialogs aktualisiert das Beispiel den Status-Text der Hauptseite, um den `returnValue` aufzuzeichnen.

Wenn der Benutzer den Dialog schließt, ohne auf eine Schaltfläche zu klicken (z. B. durch Drücken der <kbd>Esc</kbd>-Taste), wird der Rückgabewert nicht gesetzt.

#### HTML

```html
<dialog id="termsDialog">
  <p>Do you agree to the Terms of Service (link)?</p>
  <button id="declineButton" value="declined">Decline</button>
  <button id="acceptButton" value="accepted">Accept</button>
</dialog>
<p>
  <button id="openDialogButton">Review ToS</button>
</p>
<p id="statusText"></p>
```

#### JavaScript

```js
const dialog = document.getElementById("termsDialog");
const statusText = document.getElementById("statusText");

const openDialogButton = document.getElementById("openDialogButton");
const declineButton = document.getElementById("declineButton");
const acceptButton = document.getElementById("acceptButton");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

dialog.addEventListener("close", () => {
  statusText.innerText = dialog.returnValue
    ? `Return value: ${dialog.returnValue}`
    : "There was no return value";
});
```

#### Ergebnis

Probieren Sie aus, "Nutzungsbedingungen überprüfen" zu klicken, dann die Schaltflächen "Akzeptieren" oder "Ablehnen" im Dialog auszuwählen oder den Dialog durch Drücken der <kbd>Esc</kbd>-Taste zu schließen und beobachten Sie die unterschiedlichen Statusaktualisierungen.

{{ EmbedLiveSample('Checking the return value', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
