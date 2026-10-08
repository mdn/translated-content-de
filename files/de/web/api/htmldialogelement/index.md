---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

{{APIRef("HTML DOM")}}

Die **`HTMLDialogElement`**-Schnittstelle stellt Methoden zur Bearbeitung von {{HTMLElement("dialog")}}-Elementen bereit. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)
  - : Ein String, der das HTML-Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) setzt oder zurückgibt. Dieses gibt an, durch welche Benutzeraktionen der Dialog geschlossen werden kann.
- [`HTMLDialogElement.open`](/de/docs/Web/API/HTMLDialogElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open) widerspiegelt und angibt, ob eine Interaktion mit dem Dialog möglich ist.
- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
  - : Ein String, der den Rückgabewert des Dialogs setzt oder zurückgibt.

## Instanzmethoden

_Erbt außerdem Methoden von ihrer übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)
  - : Schließt den Dialog. Optional kann ein String als Argument übergeben werden, der den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs aktualisiert.
- [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)
  - : Fordert das Schließen des Dialogs an. Optional kann ein String als Argument übergeben werden, der den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Dialogs aktualisiert.
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
  - : Zeigt den Dialog nichtmodal an. Eine Interaktion mit Inhalten außerhalb des Dialogs bleibt dabei möglich.
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
  - : Zeigt den Dialog modal über allen anderen möglicherweise vorhandenen Dialogen an. Alles außerhalb des Dialogs ist [`inert`](/de/docs/Web/API/HTMLElement/inert); Interaktionen außerhalb des Dialogs werden blockiert.

## Ereignisse

_Erbt außerdem Ereignisse von ihrer übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Wird ausgelöst, wenn das Schließen des Dialogs angefordert wird, sei es mit der Escape-Taste oder über die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose). Wird das Ereignis abgebrochen (mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)), bleibt der Dialog geöffnet. Andernfalls wird der Dialog geschlossen und das Ereignis [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) ausgelöst.
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
  - : Wird ausgelöst, wenn der Dialog geschlossen wird.

## Beispiele

### Einen modalen Dialog öffnen und schließen

Das folgende Beispiel zeigt eine Schaltfläche, die beim Anklicken mit der Funktion [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) einen modalen Dialog mit einem Formular öffnet.

Solange der Dialog geöffnet ist, ist alles außerhalb seines Inhalts inaktiv.
Sie können auf die Schaltfläche _Close_ klicken, um den Dialog mit der Funktion [`close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen, oder das Formular über die Schaltfläche _Confirm_ absenden.

Das Beispiel zeigt:

1. Das Schließen eines Formulars mit der Funktion [`close()`](/de/docs/Web/API/HTMLDialogElement/close)
2. Das Schließen eines Formulars beim Absenden und das Setzen des Dialog-`returnValue` über [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)
3. Das Schließen eines Formulars mit der Taste <kbd>Esc</kbd>
4. Ereignisse bei Zustandsänderungen, die am Dialog ausgelöst werden können: [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) und [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) sowie die geerbten Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event).

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

##### Den Dialog öffnen

Der Code ruft zunächst Objekte für das {{htmlelement("dialog")}}-Element, die {{htmlelement("button")}}-Elemente und das {{htmlelement("select")}}-Element ab.
Anschließend fügt er einen Event-Listener hinzu, der beim Anklicken der Schaltfläche _Open Dialog_ die Funktion [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft.

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  log(`dialog: showModal()`);
  dialog.showModal();
});
```

##### Den Dialog beim Anklicken der Schaltfläche _Close_ schließen

Als Nächstes fügen wir einen Event-Listener für das Ereignis [`click`](/de/docs/Web/API/Element/click_event) der Schaltfläche _Close_ hinzu. Der Handler setzt [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) und ruft die Funktion [`close()`](/de/docs/Web/API/HTMLDialogElement/close) auf, um den Dialog zu schließen.

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

##### Den Dialog beim Anklicken der Schaltfläche _Confirm_ durch Absenden des Formulars schließen

Als Nächstes fügen wir einen Event-Listener für das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) des {{htmlelement("form")}}-Elements hinzu.
Das Formular wird abgesendet, wenn das erforderliche {{htmlelement("select")}}-Element einen Wert hat und die Schaltfläche _Confirm_ angeklickt wird. Hat das {{htmlelement("select")}}-Element keinen Wert, wird das Formular nicht abgesendet und der Dialog bleibt geöffnet.

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

##### `returnValue` bei `close` abrufen

Der Aufruf von [`close()`](/de/docs/Web/API/HTMLDialogElement/close) (oder das erfolgreiche Absenden eines Formulars mit `method="dialog"`) löst das Ereignis [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) aus. Im folgenden Beispiel protokollieren wir dabei den Rückgabewert des Dialogs.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Ereignis `cancel`

Das Ereignis [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) wird ausgelöst, wenn zum Schließen des Dialogs „plattformspezifische Methoden“ wie die Taste <kbd>Esc</kbd> verwendet werden.
Es wird auch ausgelöst, wenn die Methode [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) aufgerufen wird.
Das Ereignis kann abgebrochen werden. Damit ließe sich verhindern, dass der Dialog geschlossen wird.
Hier behandeln wir das Ereignis lediglich als Schließvorgang und setzen [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) auf `""` zurück, um einen möglicherweise gesetzten Wert zu löschen.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### Ereignis `toggle`

Das von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbte Ereignis [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) wird unmittelbar nach dem Öffnen oder Schließen eines Dialogs ausgelöst, jedoch vor dem Ereignis [`close`](/de/docs/Web/API/HTMLDialogElement/close_event).

Hier fügen wir einen Event-Listener hinzu, der protokolliert, wann der Dialog geöffnet und geschlossen wird.

> [!NOTE]
> Die Ereignisse [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) und [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) werden möglicherweise nicht in allen Browsern an Dialogelementen ausgelöst.
> In diesen Browserversionen können Sie stattdessen nach dem Versuch, den Dialog zu öffnen oder zu schließen, die Eigenschaft [`open`](/de/docs/Web/API/HTMLDialogElement/open) überprüfen.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle event: newState: ${event.newState}`);
});
```

##### Ereignis `beforetoggle`

Das von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbte Ereignis [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) kann abgebrochen werden und wird unmittelbar vor dem Öffnen oder Schließen eines Dialogs ausgelöst.
Bei Bedarf lässt sich damit verhindern, dass ein Dialog angezeigt wird. Sie können damit auch Aktionen an anderen Elementen ausführen, die vom geöffneten oder geschlossenen Zustand des Dialogs betroffen sind, etwa Klassen hinzufügen, um Animationen auszulösen.

In diesem Fall protokollieren wir lediglich den alten und den neuen Zustand.

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

Probieren Sie das folgende Beispiel aus.
Beachten Sie, dass sowohl die Schaltfläche `Confirm` als auch die Schaltfläche `Close` das Ereignis [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) auslösen und das Ergebnis die im Dialog ausgewählte Option widerspiegeln sollte.

{{EmbedLiveSample("Open / close a modal dialog", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{htmlelement("dialog")}}
