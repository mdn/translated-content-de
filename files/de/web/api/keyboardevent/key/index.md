---
title: "KeyboardEvent: Eigenschaft key"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`key`** der Schnittstelle [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) gibt den Wert der vom Benutzer gedrückten Taste zurück. Dabei werden der Zustand von Modifikatortasten wie <kbd>Shift</kbd> sowie die Tastatursprache und das Tastaturlayout berücksichtigt.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine druckbare Darstellung hat, ist der zurückgegebene Wert eine nicht leere Unicode-Zeichenfolge mit der druckbaren Darstellung der Taste. Wird beispielsweise die <kbd>Space</kbd>-Taste gedrückt, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wird die <kbd>B</kbd>-Taste gedrückt, ist der zurückgegebene Wert der String `"b"`. Ist gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt (sodass [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), wird stattdessen der String `"B"` zurückgegeben.
- Wenn die gedrückte Taste eine Steuer- oder Sondertaste ist, ist der zurückgegebene Wert einer der [vordefinierten Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Tottaste](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Tastenwert `"Dead"` sein.
- Einige spezielle Tastaturtasten (etwa zusätzliche Tasten zur Mediensteuerung auf Multimedia-Tastaturen) erzeugen unter Windows keine Tastencodes. Stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden DOM-Tastaturereignissen zugeordnet und unter den „virtuellen Tastencodes“ für Windows aufgeführt, obwohl es sich nicht tatsächlich um Tastencodes handelt.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Vollständige Liste der Tastenwerte ansehen](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## KeyboardEvent-Abfolge

Jedes `KeyboardEvent` wird in einer festgelegten Abfolge ausgelöst. Für einen Tastendruck werden die `KeyboardEvent`s in der folgenden Reihenfolge ausgelöst, sofern [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Zuerst wird ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und ein Zeichen erzeugt, wird das Ereignis anschließend in einem von der Plattformimplementierung abhängigen Intervall wiederholt ausgelöst. Dabei wird die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) auf `true` gesetzt.
2. Wenn die Taste ein Zeichen erzeugt, das beispielsweise in ein {{HTMLElement("input")}}-, ein {{HTMLElement("textarea")}}- oder ein Element eingefügt würde, dessen [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) auf true gesetzt ist, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen auch ein [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen können, sofern es unterstützt wird. Solange die Taste gedrückt gehalten wird, werden die Ereignisse wiederholt ausgelöst.
3. Sobald die Taste losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Damit ist der Vorgang abgeschlossen.

Bei den Schritten 1 und 3 ist das Attribut `KeyboardEvent.key` definiert und wird gemäß den zuvor beschriebenen Regeln auf den entsprechenden Wert gesetzt.

## Beispiele

### Beispiel für die KeyboardEvent-Abfolge

Betrachten wir die Ereignisabfolge, die entsteht, wenn wir die Tasten <kbd>Shift</kbd> und <kbd>2</kbd> auf einer US-amerikanischen Tastatur verwenden, und vergleichen sie mit der Abfolge auf einer britischen Tastatur.

Probieren Sie die folgenden beiden Testfälle aus:

1. Halten Sie die <kbd>Shift</kbd>-Taste gedrückt, drücken Sie dann <kbd>2</kbd> und lassen Sie diese Taste wieder los. Lassen Sie anschließend die <kbd>Shift</kbd>-Taste los.
2. Halten Sie die <kbd>Shift</kbd>-Taste gedrückt und halten Sie dann auch <kbd>2</kbd> gedrückt. Lassen Sie die <kbd>Shift</kbd>-Taste los. Lassen Sie schließlich <kbd>2</kbd> los.

#### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-reset" id="btn-reset">Reset</button>
  </div>
  <div class="flex">
    <pre id="console-log"></pre>
  </div>
</div>
```

#### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

#### JavaScript

```js
const textarea = document.getElementById("test-target");
const consoleLog = document.getElementById("console-log");
const btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerText += `${message}\n`;
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    logMessage(`Key "${e.key}" repeating [event: keydown]`);
  }
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
});

btnReset.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
  textarea.value = "";
});
```

#### Ergebnis

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> [!NOTE]
> In Browsern, die die für die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) verwendete Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent) nicht vollständig implementieren, können die entsprechenden Zeilen der Protokollausgabe fehlerhaft sein.

#### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zunächst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst und die Eigenschaft `key` auf den String `Shift` gesetzt. Während die Taste gedrückt gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da die Taste kein Zeichen erzeugt.

Wenn `key 2` gedrückt wird, wird für diesen Tastendruck ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst. Wegen der aktiven Modifikatortaste `shift` wird die Eigenschaft `key` für das Ereignis bei einer US-amerikanischen Tastatur auf den String `@` und bei einer britischen Tastatur auf `"` gesetzt. Anschließend werden die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) ausgelöst, da ein Zeichen erzeugt wurde.

Wenn `key 2` losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Die Eigenschaft `key` behält dabei für die beiden Tastaturlayouts den jeweiligen Stringwert `@` beziehungsweise `"` bei.

Wenn schließlich die `shift`-Taste losgelassen wird, wird für sie ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Der Wert des Attributs `key` bleibt `Shift`.

#### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zunächst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst und die Eigenschaft `key` auf den String `Shift` gesetzt. Während die Taste gedrückt gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da die Taste kein Zeichen erzeugt.

Wenn `key 2` gedrückt wird, wird für diesen Tastendruck ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst. Wegen der aktiven Modifikatortaste `shift` wird die Eigenschaft `key` für das Ereignis bei einer US-amerikanischen Tastatur auf den String `@` und bei einer britischen Tastatur auf `"` gesetzt. Anschließend werden die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) ausgelöst, da ein Zeichen erzeugt wurde. Während die Taste gedrückt gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wiederholt ausgelöst und die Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) auf `true` gesetzt. Auch die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden wiederholt ausgelöst.

Wenn die `shift`-Taste losgelassen wird, wird für sie ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Der Wert des Attributs `key` bleibt `Shift`. Beachten Sie, dass die Eigenschaft `key` des wiederholt ausgelösten `keydown`-Ereignisses für `key 2` nun den Wert „2“ hat, da die Modifikatortaste `shift` nicht mehr aktiv ist. Das gilt auch für die Eigenschaft [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) der Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event).

Wenn schließlich `key 2` losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Die Eigenschaft `key` hat bei beiden Tastaturlayouts den Stringwert `2`, da die Modifikatortaste `shift` nicht mehr aktiv ist.

### Unterschiedliche Aktionen je nach Tastentyp

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu reagieren. Wenn ein solches Ereignis auftritt, wird geprüft, ob der Tastenwert zu den Tasten gehört, die für den Code relevant sind. Ist dies der Fall, wird er entsprechend verarbeitet – etwa um ein Raumschiff zu steuern oder die ausgewählte Zelle in einer Tabellenkalkulation zu ändern.

```js
window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
      // Do something for "down arrow" key press.
      break;
    case "ArrowUp":
      // Do something for "up arrow" key press.
      break;
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      break;
    case "ArrowRight":
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case " ":
      // Do something for "space" key press.
      break;
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
