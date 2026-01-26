---
title: "HTMLDialogElement: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`returnValue`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein String, der den Rückgabewert für ein {{htmlelement("dialog")}}-Element repräsentiert, wenn es geschlossen wird. Sie können den Wert direkt setzen (`dialog.returnValue = "result"`) oder den Wert als String-Argument an [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) übergeben.

## Wert

Ein String, der den `returnValue` des Dialogs repräsentiert.
Standardmäßig ist dies ein leerer String (`""`).

## Beispiele

### Überprüfen des Rückgabewerts

Das folgende Beispiel zeigt eine Schaltfläche, um einen Dialog zu öffnen. Der Dialog fragt den Benutzer, ob er einer Aufforderung zu den Nutzungsbedingungen zustimmen möchte.

Der Dialog enthält die Schaltflächen "Akzeptieren" oder "Ablehnen": Wenn der Benutzer auf eine der Schaltflächen klickt, schließt der Klick-Handler der Schaltfläche den Dialog und übergibt seine Wahl an die [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion. Dies weist die Wahl der `returnValue`-Eigenschaft des Dialogs zu.

Im [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignishandler des Dialogs wird der Status-Text der Hauptseite aktualisiert, um den `returnValue` zu protokollieren.

Wenn der Benutzer den Dialog ohne Klicken auf eine Schaltfläche schließt (z. B. durch Drücken der <kbd>Esc</kbd>-Taste), wird kein Rückgabewert gesetzt.

#### HTML

```html
<dialog id="dialog">
  <p>Do you agree to the Terms of Service (link)?</p>
  <button id="decline" value="declined">Decline</button>
  <button id="accept" value="accepted">Accept</button>
</dialog>
<button id="open">Open dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");

openButton.addEventListener("click", () => {
  // Reset the return value on each open
  dialog.returnValue = "";
  updateReturnValue();
  // Show the dialog
  dialog.showModal();
});

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

function updateReturnValue() {
  log(`Return value: "${dialog.returnValue}"`);
}

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

dialog.addEventListener("close", updateReturnValue);
```

#### Ergebnis

Klicken Sie auf "Dialog öffnen", wählen Sie dann die Schaltflächen "Akzeptieren" oder "Ablehnen" im Dialog oder schließen Sie den Dialog, indem Sie die <kbd>Esc</kbd>-Taste drücken. Beobachten Sie die verschiedenen Statusaktualisierungen.

{{ EmbedLiveSample('Checking the return value', '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}}-Element
