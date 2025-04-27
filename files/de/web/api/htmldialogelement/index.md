---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)
  - : Eine Zeichenkette, die den [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attributwert des `<dialog>`-Elements festlegt oder zurückgibt, der die Arten von Benutzeraktionen angibt, die zum Schließen des Dialogs verwendet werden können.
- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open)-HTML-Attribut widerspiegelt und angibt, ob der Dialog für die Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Eine Zeichenkette, die den Rückgabewert des Dialogs festlegt oder zurückgibt.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Eine optionale Zeichenkette kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Eine optionale Zeichenkette kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog modellfrei an, d.h. es ist weiterhin eine Interaktion mit dem Inhalt außerhalb des Dialogs möglich.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal über anderen eventuell vorhandenen Dialogen an. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert), und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces überwacht werden.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Schließen des Dialogs angefordert wird, entweder mit der Esc-Taste oder über die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, entweder mit der Esc-Taste, der Methode `HTMLDialogElement.close()` oder durch Absenden eines Formulars im Dialog mit [`method="dialog"`](/de/docs/Web/HTML/Reference/Elements/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die beim Klicken die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während der offenen Zeit ist alles außer dem Inhalt des modalen Dialogs inert.
Sie können auf die _Abbrechen_-Schaltfläche klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über die _Bestätigen_-Schaltfläche absenden.

Das Beispiel zeigt, wie Sie alle „statusändernden“ Ereignisse verwenden können, die im Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

#### HTML

```html
<!-- pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button id="submit" type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

##### Anzeigen des Dialogs

Der Code erhält zuerst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Dann fügt er einen Listener hinzu, um die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufzurufen, wenn die _Aktualisieren_-Schaltfläche geklickt wird.

```js
const updateButton = document.getElementById("updateDetails");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const selectElement = document.getElementById("favAnimal");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
});
```

##### Abbrechen- und Bestätigungs-Schaltflächen

Als nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Schaltflächen hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und keinem Wert auf, wodurch der Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert bzw. `null` gesetzt wird.

```js
// Confirm button closes dialog if there is a selection.
confirmButton.addEventListener("click", () => {
  if (selectElement.value) {
    // Set dialog.returnValue to selected value
    dialog.close(selectElement.value);
  }
});

// Cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close(); // Set dialog.returnValue to null
});
```

Das Aufrufen von `close()` löst auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, das wir im Folgenden implementieren, indem wir den Rückgabewert des Dialogs protokollieren.
Wenn die _Bestätigen_-Schaltfläche geklickt wurde, sollte dies der im Dialog ausgewählte Wert sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbrechen-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattformsspezifische Methoden" verwendet werden, um den Dialog zu schließen, wie z.B. die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die Methode `HTMLDialogElement.requestClose()` aufgerufen wird.
Das Ereignis ist „abbrechbar“, was bedeutet, dass wir es nutzen könnten, um zu verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir das Abbrechen einfach als „Schließ“-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um einen möglicherweise gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### Umschalt-Ereignis

Das [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event) (vom `HTMLElement` geerbt) wird direkt nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem `closed`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wenn der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle`- und `beforetoggle`-Ereignisse werden möglicherweise nicht in allen Browsern bei Dialogelementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen die [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft überprüfen, nachdem Sie versucht haben, den Dialog zu öffnen/zu schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Bevor Umschalten-Ereignis

Das [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event) (vom `HTMLElement` geerbt) ist ein abbrechbares Ereignis, das direkt vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Bei Bedarf kann dieses verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen an anderen Elementen durchzuführen, die vom Öffnen/Schließen-Status des Dialogs betroffen sind, wie z.B. das Hinzufügen von Klassen zu ihnen, um Animationen auszulösen.

In diesem Fall protokollieren wir einfach den alten und neuen Status.

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `beforetoggle event: oldstate: ${event.oldState}, newState: ${event.newState}`,
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

Probieren Sie das folgende Beispiel aus.
Beachten Sie, dass sowohl die `Bestätigen`- als auch die `Abbrechen`-Schaltflächen dazu führen, dass das `close`-Ereignis ausgelöst wird und das Ergebnis die im Dialog gewählte Option widerspiegeln sollte.

{{EmbedLiveSample("Öffnen eines modalen Dialogs", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
