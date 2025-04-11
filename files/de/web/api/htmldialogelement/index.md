---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`**-Schnittstelle stellt Methoden zum Manipulieren von {{HTMLElement("dialog")}}-Elementen bereit. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open) widerspiegelt, welches anzeigt, ob der Dialog zur Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein Zeichenfolgenwert, der den Rückgabewert für das Dialogfeld setzt oder zurückgibt.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Es kann optional eine Zeichenfolge als Argument übergeben werden, die den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Es kann optional eine Zeichenfolge als Argument übergeben werden, die den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog modellfrei an, d.h. es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als modales Fenster an, über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn der Dialog das Schließen angefordert wird, sei es mit der Escape-Taste oder über die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, sei es mit der Escape-Taste, der Methode `HTMLDialogElement.close()` oder durch das Absenden eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Reference/Elements/form#method).

## Beispiele

### Ein modaler Dialog öffnen

Das folgende Beispiel zeigt eine Schaltfläche, die beim Klicken die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während es geöffnet ist, ist alles andere als der Inhalt des modalen Dialogs inert.
Sie können auf die _Abbrechen_-Schaltfläche klicken, um den Dialog über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen, oder das Formular über die _Bestätigen_-Schaltfläche absenden.

Das Beispiel demonstriert, wie Sie alle "Zustandsänderung"-Ereignisse nutzen können, die im Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), und die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

##### Den Dialog anzeigen

Der Code erhält zunächst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Dann wird ein Listener hinzugefügt, der die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn die _Aktualisieren_-Schaltfläche geklickt wird.

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

##### Abbrechen- und Bestätigen-Schaltflächen

Als Nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Schaltflächen hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf, mit dem Auswahlswert (falls vorhanden) und keinem Wert, wodurch der Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlswert bzw. `null` gesetzt wird.

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
Wenn die _Bestätigen_-Schaltfläche geklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Cancel-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um den Dialog zu schließen, wie die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die Methode `HTMLDialogElement.requestClose()` aufgerufen wird.
Das Ereignis ist "cancelable", was bedeutet, dass wir es verwenden könnten, um das Schließen des Dialogs zu verhindern.
Hier behandeln wir den Abbruch einfach als "Schließen"-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um jeden Wert zu löschen, der möglicherweise gesetzt wurde.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Toggle-Ereignis

Das [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird unmittelbar nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem `closed`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die Ereignisse `toggle` und `beforetoggle` werden möglicherweise nicht auf allen Browsern bei Dialogelementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen die Eigenschaft [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) nach dem Versuch, den Dialog zu öffnen/zu schließen, überprüfen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle-Ereignis

Das [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein abbrechbares Ereignis, das unmittelbar bevor ein Dialog geöffnet oder geschlossen wird, ausgelöst wird.
Falls erforderlich, kann dies verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen auf anderen Elementen auszuführen, die vom Dialogzustand zum Öffnen/Schließen betroffen sind, wie z.B. das Hinzufügen von Klassen zu ihnen, um Animationen auszulösen.

In diesem Fall protokollieren wir nur den alten und neuen Zustand.

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
Beachten Sie, dass sowohl die _Bestätigen_- als auch die _Abbrechen_-Schaltflächen das `close`-Ereignis auslösen und dass das Ergebnis die im Dialog ausgewählte Option widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("dialog")}}.
