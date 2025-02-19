---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 4da185c20a05e7ed4ea0f18c03714ea5fc038818
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`** Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und angibt, ob der Dialog für Interaktionen verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Es kann ein optionaler String als Argument übergeben werden, der den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert an, den Dialog zu schließen. Es kann ein optionaler String als Argument übergeben werden, der den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog modellfrei an, d.h. erlaubt immer noch die Interaktion mit Inhalten außerhalb des Dialogs.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal über anderen möglicherweise vorhandenen Dialogen an. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder weisen Sie der `oneventname`-Eigenschaft dieser Schnittstelle einen Ereignis-Listener zu.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Schließen des Dialogs angefordert wird, entweder mit der Esc-Taste oder über die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, entweder mit der Esc-Taste, der Methode `HTMLDialogElement.close()` oder durch das Absenden eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inert.
Sie können auf die _Abbrechen_-Schaltfläche klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über die _Bestätigen_-Schaltfläche absenden.

Das Beispiel zeigt, wie man alle "Statuswechsel"-Ereignisse verwenden könnte, die auf den Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

Der Code erhält zunächst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Dann wird ein Listener hinzugefügt, um die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufzurufen, wenn der _Aktualisieren_-Button geklickt wird.

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

##### Abbrechen- und Bestätigungsschaltflächen

Als nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Schaltflächen hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und keinem Wert auf, was wiederum den Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert bzw. `null` setzt.

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

Das Aufrufen von `close()` löst auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, das wir unten implementieren, indem wir den Rückgabewert des Dialogs protokollieren.
Wenn die _Bestätigen_-Schaltfläche geklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbruchereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattformabhängige Methoden" verwendet werden, um den Dialog zu schließen, wie z.B. die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die Methode `HTMLDialogElement.requestClose()` aufgerufen wird.
Das Ereignis ist "abbrechbar", was bedeutet, dass wir es verwenden könnten, um zu verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir den Abbruch einfach als eine "Schließen"-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um einen möglicherweise gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Umschalt-Ereignis

Das [`toggle` event](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird unmittelbar nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem `close`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle` und `beforetoggle` Ereignisse werden möglicherweise nicht bei allen Browsern auf Dialog-Elementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen die [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft nach dem Versuch, den Dialog zu öffnen/schließen, überprüfen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Vor-Umschalt-Ereignis

Das [`beforetoggle` event](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein abbrechbares Ereignis, das unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Bei Bedarf kann dies verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen an anderen Elementen durchzuführen, die vom Öffnen/Schließen-Zustand des Dialogs betroffen sind, wie das Hinzufügen von Klassen zu ihnen, um Animationen auszulösen.

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

Probieren Sie das folgende Beispiel aus.
Beachten Sie, dass sowohl die `Bestätigen`- als auch die `Abbrechen`-Schaltflächen dazu führen, dass das `close`-Ereignis ausgelöst wird, und dass das Ergebnis die gewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
