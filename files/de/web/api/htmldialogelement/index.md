---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)
  - : Ein String, der das [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-HTML-Attribut setzt oder zurückgibt, welches die Typen von Benutzeraktionen angibt, die zum Schließen des Dialogs verwendet werden können.
- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open)-HTML-Attribut widerspiegelt und angibt, ob der Dialog für Interaktionen verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog setzt oder zurückgibt.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, der den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs aktualisiert.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Ein optionaler String kann als Argument übergeben werden, der den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog nicht-modal an, d.h. Interaktionen mit Inhalten außerhalb des Dialogs sind weiterhin möglich.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal an, das über allen anderen möglicherweise vorhandenen Dialogen schwebt. Alles außerhalb des Dialogs ist [`inert`](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Events

_Erbt auch Events von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Events mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Event-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn der Dialog angefordert wird zu schließen, sei es über die Escape-Taste oder über die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode. Wenn das Event abgebrochen wird (über [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), bleibt der Dialog geöffnet. Wird es nicht abgebrochen, schließt der Dialog und das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Event wird ausgelöst.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird.

## Beispiele

### Öffnen/Schließen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die, wenn sie angeklickt wird, die [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Funktion verwendet, um einen modalen Dialog mit einem Formular zu öffnen.

Während der Öffnung ist alles außer dem Inhalt des modalen Dialogs inert.
Sie können auf den _Close_-Button klicken, um den Dialog zu schließen (über die [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion), oder das Formular über den _Confirm_-Button absenden.

Das Beispiel demonstriert:

1. Ein Formular mit der [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion schließen
2. Ein Formular bei Formularabsendung schließen und den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs setzen
3. Ein Formular mit der <kbd>Esc</kbd>-Taste schließen
4. "Statusänderungs"-Ereignisse, die auf dem Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

#### HTML

```html
<dialog id="dialog">
  <button id="close" type="button">Close</button>
  <form method="dialog" id="form">
    <p>
      <label for="fav-animal">Favorite animal:</label>
      <select id="fav-animal" name="favAnimal" required>
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="submit" type="submit">Confirm</button>
    </div>
  </form>
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

##### Dialog öffnen

Der Code holt zuerst Objekte für das {{htmlelement("dialog")}}-Element, die {{htmlelement("button")}}-Elemente und das {{htmlelement("select")}}-Element.
Dann wird ein Listener hinzugefügt, um die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Funktion aufzurufen, wenn der _Open Dialog_-Button angeklickt wird.

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  log(`dialog: showModal()`);
  dialog.showModal();
});
```

##### Dialog schließen, wenn der _Close_-Button angeklickt wird

Als nächstes fügen wir einen Listener für das _Close_-Button-`click`-Event hinzu. Der Handler setzt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) und ruft die [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion auf, um den Dialog zu schließen.

```js
// Close button closes the dialog box
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", () => {
  dialog.returnValue = ""; // Reset return value
  log(`dialog: close()`);
  dialog.close();
  // Alternatively, we could use dialog.requestClose(""); with an empty return value.
});
```

##### Dialog schließen, wenn der _Confirm_-Button durch Formulareinreichung geklickt wird

Als nächstes fügen wir einen Listener für das {{htmlelement("form")}}-`submit`-Event hinzu.
Das Formular wird eingereicht, wenn das erforderliche {{htmlelement("select")}}-Element einen Wert hat und der _Confirm_-Button angeklickt wird. Wenn das {{htmlelement("select")}}-Element keinen Wert hat, wird das Formular nicht eingereicht und der Dialog bleibt geöffnet.

```js
// Confirm button closes dialog if there is a selection.
const form = document.getElementById("form");
const selectElement = document.getElementById("fav-animal");
form.addEventListener("submit", () => {
  log(`form: submit`);
  // Set the return value to the selected option value
  dialog.returnValue = selectElement.value;
  // We don't need to close the dialog here
  // submitting the form with method="dialog" will do that automatically.
  // dialog.close();
});
```

##### Den `returnValue` bei `close` abrufen

Das Aufrufen von [`close()`](/de/docs/Web/API/HTMLDialogElement/close) (oder das erfolgreiche Einreichen eines Formulars mit `method="dialog"`") löst das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Event aus, was wir unten implementieren, indem wir den Rückgabewert des Dialogs protokollieren.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### `cancel`-Event

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Event wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um den Dialog zu schließen, wie die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode aufgerufen wird.
Das Event ist "abbrechbar", was bedeutet, dass wir es verwenden könnten, um den Dialog daran zu hindern, sich zu schließen.
Hier behandeln wir das Abbrechen einfach als "Schließen"-Aktion und setzen den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""` zurück, um einen ggf. gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### `toggle`-Event

Das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event (geerbt von [`HTMLElement`](/de/docs/Web/API/HTMLElement)) wird unmittelbar nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Event).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) und [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignisse werden möglicherweise nicht bei Dialogelementen in allen Browsern ausgelöst.
> Bei diesen Browserversionen können Sie stattdessen die [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft überprüfen, nachdem Sie versucht haben, den Dialog zu öffnen oder zu schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle event: newState: ${event.newState}`);
});
```

##### `beforetoggle`-Event

Das [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event (geerbt von [`HTMLElement`](/de/docs/Web/API/HTMLElement)) ist ein abbrechbares Event, das unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Falls erforderlich, kann dies verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen auf anderen Elementen durchzuführen, die vom Öffnen/Schließen-Zustand des Dialogs betroffen sind, etwa durch das Hinzufügen von Klassen, um Animationen auszulösen.

In diesem Fall protokollieren wir einfach den alten und den neuen Zustand.

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `beforetoggle event: oldState: ${event.oldState}, newState: ${event.newState}`,
  );

  // Call event.preventDefault() to prevent a dialog opening
  /*
    if (shouldCancel()) {
        event.preventDefault();
    }
  */
});
```

#### Ergebnis

Probieren Sie das unten stehende Beispiel aus.
Beachten Sie, dass sowohl die `Confirm`- als auch die `Close`-Schaltflächen dazu führen, dass das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Event ausgelöst wird und dass das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Open / close a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}} Element
