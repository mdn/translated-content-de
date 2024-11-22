---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: e2ac6a94e71034b56a74142619e75e44140918e9
---

{{APIRef("HTML DOM")}}

Das **`HTMLDialogElement`**-Interface bietet Methoden zur Manipulation von {{HTMLElement("dialog")}}-Elementen. Es erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/dialog#open) widerspiegelt und angibt, ob das Dialogfeld zur Interaktion verfügbar ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert für den Dialog festlegt oder zurückgibt.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Es kann ein optionaler String als Argument übergeben werden, um den `returnValue` des Dialogs zu aktualisieren.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog modelless, d. h. ohne die Interaktion mit Inhalten außerhalb des Dialogs zu blockieren.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog als Modal über allen anderen Dialogen an, die möglicherweise vorhanden sind. Alles außerhalb des Dialogs ist [inert](/de/docs/Web/API/HTMLElement/inert) und Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Event-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn der Benutzer das aktuell offene Dialogfeld mit der Escape-Taste schließt.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird, sei es mit der Escape-Taste, der Methode `HTMLDialogElement.close()` oder durch das Absenden eines Formulars im Dialog mit [`method="dialog"`](/de/docs/Web/HTML/Element/form#method).

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Anklicken die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet, um ein modales {{htmlelement("dialog")}} mit einem Formular zu öffnen.

Während des Öffnens ist alles außer dem Inhalt des modalen Dialogs inaktiv.
Sie können auf den _Cancel_-Button klicken, um den Dialog zu schließen (über die Funktion [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)), oder das Formular über den _Confirm_-Button absenden.

Das Beispiel demonstriert, wie Sie alle "Zustandsänderungs"-Ereignisse nutzen können, die im Dialog ausgeführt werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event), sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

##### Dialog anzeigen

Der Code holt sich zunächst Objekte für die {{htmlelement("button")}}-Elemente, das {{htmlelement("dialog")}}-Element und das {{htmlelement("select")}}-Element.
Dann wird ein Listener hinzugefügt, um die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufzurufen, wenn der _Update_-Button geklickt wird.

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

Als Nächstes fügen wir Listener für die `click`-Ereignisse der _Confirm_- und _Cancel_-Buttons hinzu.
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
Wenn der _Confirm_-Button geklickt wurde, sollte dies der ausgewählte Wert im Dialog sein, andernfalls sollte er `null` sein.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Cancel-Ereignis

Das [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis wird ausgelöst, wenn "plattform-spezifische Methoden" verwendet werden, um den Dialog zu schließen, etwa die <kbd>Esc</kbd>-Taste.
Das Ereignis ist "abbrechbar", was bedeutet, dass wir es verwenden könnten, um zu verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir das Abbrechen einfach als eine "Schließen"-Operation und setzen den [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""`, um einen möglicherweise gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; //Reset value
});
```

##### Toggle-Ereignis

Das [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event) (geerbt von `HTMLElement`) wird kurz nach dem Öffnen oder Schließen eines Dialogs ausgelöst (jedoch vor dem `closed`-Ereignis).

Hier fügen wir einen Listener hinzu, um zu protokollieren, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die Ereignisse `toggle` und `beforetoggle` werden möglicherweise nicht in allen Browsern bei Dialogelementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen die Eigenschaft [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open) überprüfen, nachdem Sie versucht haben, den Dialog zu öffnen/schließen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle-Ereignis

Das [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event) (geerbt von `HTMLElement`) ist ein abbrechbares Ereignis, das kurz vor dem Öffnen oder Schließen eines Dialogs ausgelöst wird.
Bei Bedarf kann dies genutzt werden, um zu verhindern, dass ein Dialog angezeigt wird, oder um Aktionen bei anderen Elementen auszuführen, die vom Dialog-Öffnungs-/Schließzustand betroffen sind, wie etwa das Hinzufügen von Klassen, um Animationen auszulösen.

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
Beachten Sie, dass sowohl die Buttons `Confirm` als auch `Cancel` dazu führen, dass das `close`-Ereignis ausgelöst wird, und dass das Ergebnis die ausgewählte Dialogoption widerspiegeln sollte.

{{EmbedLiveSample("Öffnen eines modalen Dialogs", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
