---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und angibt, ob der Dialog für Interaktionen verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, wodurch der `returnValue` des Dialogs aktualisiert wird.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Ein optionaler String kann als Argument übergeben werden, wodurch der `returnValue` des Dialogs aktualisiert wird.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog ohne Modus an, d.h. Interaktionen mit Inhalten außerhalb des Dialogs sind weiterhin möglich.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal an, über jedem anderen möglicherweise vorhandenen Dialog. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie dieser Schnittstelle einen Ereignislistener auf die `oneventname`-Eigenschaft zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Schließen des Dialogs angefordert wird, sei es mit der Escape-Taste oder durch die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, sei es mit der Escape-Taste, der Methode `HTMLDialogElement.close()` oder durch die Übermittlung eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die beim Klicken, die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um einen modalen {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während der Dialog geöffnet ist, sind alle anderen Inhalte als der Inhalt des modalen Dialogs inert.
Sie können auf die Schaltfläche _Abbrechen_ klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über die Schaltfläche _Bestätigen_ absenden.

Das Beispiel zeigt, wie Sie alle "Zustandsänderungs"-Ereignisse verwenden könnten, die auf dem Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

Der Code erfasst zuerst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Anschließend wird ein Listener hinzugefügt, um die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufzurufen, wenn die Schaltfläche _Aktualisieren_ angeklickt wird.

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

##### Bestätigungs- und Abbruchs-Buttons

Als nächstes fügen wir Listener für die `click`-Ereignisse der Schaltflächen _Bestätigen_ und _Abbrechen_ hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und ohne Wert auf, was wiederum den Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert und `null` festlegt.

```js
// Confirm button closes dialog if there is a selection.
confirmButton.addEventListener("click", () => {
  if (selectElement.value) {
    //Set dialog.returnValue to selected value
    dialog.close(selectElement.value);
  }
});

// Cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close(); // Set dialog.returnValue to null
});
```

Der Aufruf von `close()` löst auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, das wir unten implementieren, indem wir den Rückgabewert des Dialogs protokollieren.
Wenn die Schaltfläche _Bestätigen_ angeklickt wurde, sollte dies der im Dialog ausgewählte Wert sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbruchereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um den Dialog zu schließen, wie zum Beispiel die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die Methode `HTMLDialogElement.requestClose()` aufgerufen wird.
Das Ereignis ist "stornierbar", was bedeutet, dass wir es verwenden könnten, um zu verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir das Abbrechen einfach als eine "Schließen"-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um alle möglicherweise festgelegten Werte zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Umschalt-Ereignis

Das [`toggle` event](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird direkt nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem `closed`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle`- und `beforetoggle`-Ereignisse werden möglicherweise nicht in allen Browsern auf Dialogelementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen die Eigenschaft [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) prüfen, nachdem versucht wurde, den Dialog zu öffnen/schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle-Ereignis

Das [`beforetoggle` event](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein stornierbares Ereignis, das direkt bevor ein Dialog geöffnet oder geschlossen wird, ausgelöst wird.
Falls erforderlich, kann dies verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen für andere Elemente auszuführen, die vom Öffnungs-/Schließstatus des Dialogs beeinflusst werden, wie das Hinzufügen von Klassen auf ihnen, um Animationen auszulösen.

In diesem Fall protokollieren wir nur den alten und neuen Status.

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

Probieren Sie das Beispiel unten aus.
Beachten Sie, dass sowohl die Schaltflächen `Bestätigen` als auch `Abbrechen` das Auslösen des `close`-Ereignisses zur Folge haben, und dass das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
