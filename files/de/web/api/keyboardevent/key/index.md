---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Wert der vom Benutzer gedrückten Taste zurück. Dabei wird der Zustand der Modifikatortasten wie <kbd>Shift</kbd> sowie die Tastaturlokalisierung und -layout berücksichtigt.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Hat die gedrückte Taste eine druckbare Darstellung, ist der zurückgegebene Wert ein nicht-leerer Unicode-Zeichenstring, der die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wird jedoch gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt (sodass [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), ist der zurückgegebene Wert der String `"B"`.
- Wenn die gedrückte Taste ein Steuer- oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Dead-Key](https://en.wikipedia.org/wiki/Dead_key) repräsentiert, muss der Tastenwert `"Dead"` sein.
- Einige spezielle Tastaturtasten (wie die erweiterten Tasten zur Steuerung der Medienwiedergabe auf Multimedia-Tastaturen) erzeugen keine Tastencodes unter Windows; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden in DOM-Tastaturevents abgebildet und sind unter den "Virtuellen Tastencodes" für Windows aufgeführt, obwohl sie eigentlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Sehen Sie sich eine vollständige Liste der Tastenwerte an](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## Sequenz der KeyboardEvent

Jedes `KeyboardEvent` wird in einer vorbestimmten Sequenz ausgelöst. Für einen bestimmten Tastendruck wird die Sequenz der ausgelösten `KeyboardEvent`s wie folgt angenommen, dass [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Zunächst wird ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und die Taste ein Zeichen erzeugt, wird das Ereignis weiterhin in einem plattformabhängigen Intervall emittiert, und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen erzeugt, das in ein möglicherweise {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) auf true eingefügt werden würde, werden die Ereigntypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen ein [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen können, falls unterstützt. Die Ereignisse werden wiederholt, solange die Taste gedrückt gehalten wird.
3. Sobald die Taste losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst. Dies schließt den Vorgang ab.

In den Sequenzen 1 & 3 ist das `KeyboardEvent.key`-Attribut definiert und wird gemäß den zuvor definierten Regeln entsprechend auf einen Wert gesetzt.

## Beispiel zur KeyboardEvent-Sequenz

Betrachten Sie die Ereignissequenz, die erzeugt wird, wenn wir mit der <kbd>Shift</kbd> und der <kbd>2</kbd>-Taste auf einer US-Tastatur im Vergleich zu einer UK-Tastatur arbeiten.

Versuchen Sie, mit den folgenden zwei Testfällen zu experimentieren:

1. Drücken und halten Sie die

   <kbd>Shift</kbd>

   -Taste, dann drücken Sie

   <kbd>2</kbd>

   und lassen Sie sie los. Lassen Sie anschließend die

   <kbd>Shift</kbd>

   -Taste los.

2. Drücken und halten Sie die

   <kbd>Shift</kbd>

   -Taste, dann drücken und halten Sie

   <kbd>2</kbd>

   . Lassen Sie die

   <kbd>Shift</kbd>

   -Taste los. Schließlich lassen Sie

   <kbd>2</kbd>

   los.

### HTML

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

### CSS

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

### JavaScript

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

### Ergebnis

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> [!NOTE]
> In Browsern, die das [`InputEvent`](/de/docs/Web/API/InputEvent)-Interface, das für die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) verwendet wird, nicht vollständig implementieren, kann die Ausgabe dieser Log-Ausgaben fehlerhaft sein.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst und der `key`-Eigenschaftswert auf den String `Shift` gesetzt. Wenn diese Taste gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es kein Zeichen erzeugt.

Wenn die `Taste 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird auf den String `@` für den US-Tastaturtyp und auf `"` für den UK-Tastaturtyp gesetzt, aufgrund der aktiven Modifikator-`shift`-Taste. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden als nächstes ausgelöst, da ein Zeichen erzeugt wurde.

Wenn die `Taste 2` losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, und die `key`-Eigenschaft behält die Stringwerte `@` und `"` für die verschiedenen Tastaturlayouts bei.

Wenn schließlich die `shift`-Taste losgelassen wird, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis für sie ausgelöst, und der Wert der `key`-Eigenschaft bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert auf den String `Shift` gesetzt. Wenn diese Taste gehalten wird, wird das keydown-Ereignis nicht wiederholt ausgelöst, da es kein Zeichen erzeugt hat.

Wenn die `Taste 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird auf den String `@` für den US-Tastaturtyp und auf `"` für den UK-Tastaturtyp gesetzt, aufgrund der aktiven Modifikator-`shift`-Taste. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden als nächstes ausgelöst, da ein Zeichen erzeugt wurde. Wenn die Taste gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis weiter wiederholt ausgelöst und die [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat)-Eigenschaft wird auf `true` gesetzt. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden ebenfalls wiederholt ausgelöst.

Wenn die `shift`-Taste losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis für sie ausgelöst, und der Wert der `key`-Eigenschaft bleibt `Shift`. Zu diesem Zeitpunkt ist zu beachten, dass der `key`-Eigenschaftswert für das wiederholte keydown-Ereignis des `Taste 2`-Tastendrucks jetzt "2" ist, da die Modifikator-`shift`-Taste nicht mehr aktiv ist. Gleiches gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event).

Wenn schließlich die `Taste 2` losgelassen wird, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird auf den Stringwert `2` für beide Tastaturlayouts gesetzt, da die Modifikator-`shift`-Taste nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu lauschen. Wenn sie auftreten, wird der Tastenwert überprüft, um festzustellen, ob es sich um eine der interessanten Tasten handelt, und falls ja, wird sie auf irgendeine Weise verarbeitet (möglicherweise durch das Steuern eines Raumschiffs oder durch Ändern der ausgewählten Zelle in einer Tabelle).

```js
window.addEventListener(
  "keydown",
  (event) => {
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
  },
  true,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
