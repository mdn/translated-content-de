---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`**-Schnittstelle bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)
  - : Ein String, der den Wert des [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attributs des `<dialog>`-Elements festlegt oder zurückgibt, welches die Arten von Benutzeraktionen angibt, die zum Schließen des Dialogs verwendet werden können.
- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open)-HTML-Attribut widerspiegelt und angibt, ob der Dialog für Interaktionen verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanzmethoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Ein optionaler String kann als Argument übergeben werden, der den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Ein optionaler String kann als Argument übergeben werden, der den `returnValue` des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog modellfrei an, d.h. er erlaubt weiterhin Interaktionen mit dem Inhalt außerhalb des Dialogs.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal an, über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs sind blockiert.

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen werden soll, entweder mit der Escape-Taste oder über die Methode `HTMLDialogElement.requestClose()`.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, entweder mit der Escape-Taste, der Methode `HTMLDialogElement.close()` oder durch das Absenden eines Formulars innerhalb des Dialogs mit [`method="dialog"`](/de/docs/Web/HTML/Reference/Elements/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während der Dialog geöffnet ist, ist alles andere als der Inhalt des modalen Dialogs inert.
Sie können den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über den _Bestätigen_-Button absenden.

Das Beispiel demonstriert, wie Sie alle "Zustandsänderungs"-Ereignisse nutzen können, die im Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

Der Code ruft zuerst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element ab.
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

##### Bestätigen- und Abbrechen-Buttons

Als Nächstes fügen wir Listener für die `click`-Ereignisse der _Bestätigen_- und _Abbrechen_-Buttons hinzu.
Die Handler rufen [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) mit dem Auswahlwert (falls vorhanden) und ohne Wert auf, was den Rückgabewert des Dialogs ([`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)) auf den Auswahlwert und `null` setzt.

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

Der Aufruf von `close()` löst auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis aus, das wir unten implementieren, indem wir den Rückgabewert des Dialogs loggen.
Wenn der _Bestätigen_-Button geklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte es `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Abbrechen-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn „plattform-spezifische Methoden“ verwendet werden, um den Dialog zu schließen, wie z.B. die <kbd>Esc</kbd>-Taste.
Es wird auch ausgelöst, wenn die Methode `HTMLDialogElement.requestClose()` aufgerufen wird.
Das Ereignis ist „abbrechbar“, was bedeutet, dass wir damit verhindern könnten, dass der Dialog geschlossen wird.
Hier behandeln wir das Abbrechen einfach als „Schließen“-Vorgang und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""` zurück, um einen gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### Umschalten-Ereignis

Das [`toggle` event](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird direkt nach dem Öffnen oder Schließen eines Dialogs ausgelöst (aber vor dem `closed`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu loggen, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die `toggle`- und `beforetoggle`-Ereignisse werden möglicherweise nicht bei Dialogelementen in allen Browsern ausgelöst.
> In diesen Browserversionen können Sie stattdessen die Eigenschaft [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) überprüfen, nachdem Sie versucht haben, den Dialog zu öffnen oder zu schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Bevor-Umschalten-Ereignis

Das [`beforetoggle` event](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein abbrechbares Ereignis, das unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Bei Bedarf kann es verwendet werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen an anderen Elementen auszuführen, die vom Öffnungs-/Schließzustand des Dialogs betroffen sind, wie z.B. das Hinzufügen von Klassen zu ihnen, um Animationen auszulösen.

In diesem Fall loggen wir einfach den alten und neuen Zustand.

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

Probieren Sie das Beispiel unten aus.
Beachten Sie, dass sowohl die Buttons `Bestätigen` als auch `Abbrechen` dazu führen, dass das `close`-Ereignis ausgelöst wird und das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
