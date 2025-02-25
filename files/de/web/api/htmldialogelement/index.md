---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: cfa2f08a7aa36e561711ac3b458f6b46dee18db2
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zum Manipulieren von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und angibt, ob das Dialogfeld zur Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert des Dialogs setzt oder zurückgibt.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt das Dialogfeld. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) {{experimental_inline}}
  - : Fordert das Schließen des Dialogs an. Ein optionaler String kann als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt das Dialogfeld modeless an, d. h. erlaubt weiterhin die Interaktion mit Inhalten außerhalb des Dialogs.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt das Dialogfeld als Modal an, über anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert), wobei Interaktionen außerhalb des Dialogs blockiert sind.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Dialogfeld geschlossen werden soll, sei es mit der Escape-Taste oder über die `HTMLDialogElement.requestClose()`-Methode.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn das Dialogfeld geschlossen wird, sei es mit der Escape-Taste, der `HTMLDialogElement.close()`-Methode oder durch Absenden eines Formulars im Dialog mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt eine Schaltfläche, die beim Anklicken die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Funktion verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während es geöffnet ist, ist alles außer den Inhalten des modalen Dialogs inert. Sie können die _Abbrechen_-Schaltfläche anklicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Funktion), oder das Formular über die _Bestätigen_-Schaltfläche absenden.

Das Beispiel zeigt, wie Sie alle "Zustandsänderungs"-Ereignisse nutzen können, die auf dem Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

Der Code erhält zuerst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element. Dann wird ein Listener hinzugefügt, um die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Funktion aufzurufen, wenn die _Aktualisieren_-Schaltfläche angeklickt wird.

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

Als nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Schaltflächen hinzu. Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und ohne Wert auf, was wiederum den Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert bzw. `null` setzt.

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

Der Aufruf von `close()` löst auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, das wir unten implementieren, indem wir den Rückgabewert des Dialogs protokollieren. Wenn die _Bestätigen_-Schaltfläche angeklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbrechen-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um das Dialogfeld zu schließen, wie die <kbd>Esc</kbd>-Taste. Es wird auch ausgelöst, wenn die `HTMLDialogElement.requestClose()`-Methode aufgerufen wird. Das Ereignis ist "abbrechbar", was bedeutet, dass wir es verwenden könnten, um das Schließen des Dialogs zu verhindern. Hier behandeln wir den Abbruch einfach als "Schließen"-Vorgang und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um jeden möglicherweise gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Toggle-Ereignis

Das [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event) (von `HTMLElement` geerbt) wird unmittelbar nach dem Öffnen oder Schließen eines Dialogs (aber vor dem `closed`-Ereignis) ausgelöst.

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle`- und `beforetoggle`-Ereignisse werden möglicherweise nicht in allen Browsern auf Dialogelementen ausgelöst. In diesen Browserversionen können Sie stattdessen die [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft nach dem Versuch, den Dialog zu öffnen/schließen, überprüfen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle-Ereignis

Das [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event) (von `HTMLElement` geerbt) ist ein abbrechbares Ereignis, das unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird. Falls nötig, kann dies verwendet werden, um das Anzeigen eines Dialogs zu verhindern oder um Aktionen bei anderen Elementen auszuführen, die vom Dialog-Öffnen/Schließen-Zustand betroffen sind, z. B. um Klassen hinzuzufügen, um Animationen auszulösen.

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

Probieren Sie das Beispiel unten aus. Beachten Sie, dass sowohl die `Bestätigen`- als auch die `Abbrechen`-Schaltflächen das `close`-Ereignis auslösen und dass das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
