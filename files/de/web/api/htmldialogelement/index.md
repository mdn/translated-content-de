---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 10313e7be178b2af803c902d4f91e4ccc31b09e7
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`** Interface stellt Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen bereit. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und anzeigt, ob der Dialog für Interaktionen verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert des Dialogs festlegt oder zurückgibt.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog nicht-modular an, d.h. es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal an, über jeglichen anderen eventuell vorhandenen Dialogen. Alles außerhalb des Dialogs wird [inert](/de/docs/Web/API/HTMLElement/inert), und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgefangen werden oder indem ein Event-Listener der `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Schließen des Dialogs angefordert wird, sei es durch die Escape-Taste oder durch die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, sei es durch die Escape-Taste, die Methode `HTMLDialogElement.close()`, oder durch das Absenden eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der bei einem Klick die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um einen modalen {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während der Dialog geöffnet ist, ist alles andere als der Inhalt des modalen Dialogs inert.
Sie können den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über den _Bestätigen_-Button absenden.

Das Beispiel zeigt, wie Sie alle "Zustandsänderungs"-Ereignisse, die beim Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), verwenden könnten.

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

Der Code holt sich zuerst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Dann wird ein Listener hinzugefügt, um die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufzurufen, wenn der _Aktualisieren_-Button angeklickt wird.

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

##### Abbrechen- und Bestätigungs-Buttons

Als nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Buttons hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und keinem Wert auf, was wiederum den Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert und `null` setzt.

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

Der Aufruf von `close()` löst ebenfalls das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, welches wir im Folgenden implementieren, indem der Rückgabewert des Dialogs protokolliert wird.
Wenn der _Bestätigen_-Button geklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbrechen-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um den Dialog zu schließen, wie die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die `HTMLDialogElement.requestClose()`-Methode aufgerufen wird.
Das Ereignis ist "abbrechbar", was bedeutet, dass wir es verwenden könnten, um zu verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir das Abbrechen einfach als eine "Schließen"-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um jeglichen gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Toggle-Ereignis

Das [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird direkt nach dem Öffnen oder Schließen eines Dialogs (aber vor dem `closed`-Ereignis) ausgelöst.

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle`- und `beforetoggle`-Ereignisse werden möglicherweise nicht in allen Browsern für Dialogelemente ausgelöst.
> In diesen Browserversionen können Sie stattdessen die Eigenschaft [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) überprüfen, nachdem Sie versucht haben, den Dialog zu öffnen/schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle-Ereignis

Das [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein abbrechbares Ereignis, das unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Bei Bedarf kann dies verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen an anderen Elementen auszuführen, die vom Öffnen/Schließen-Status des Dialogs betroffen sind, wie z. B. das Hinzufügen von Klassen, um Animationen auszulösen.

In diesem Fall protokollieren wir einfach den alten und neuen Zustand.

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
Beachten Sie, dass sowohl der `Bestätigen`- als auch der `Abbrechen`-Button das `close`-Ereignis auslösen, und dass das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
