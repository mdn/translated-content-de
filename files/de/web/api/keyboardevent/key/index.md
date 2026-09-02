---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Wert der vom Benutzer gedrückten Taste zurück, unter Berücksichtigung des Zustands von Modifikatortasten wie <kbd>Shift</kbd> sowie der Tastatursprache und des -layouts.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine gedruckte Darstellung hat, ist der zurückgegebene Wert ein nicht leerer Unicode-Zeichenstring, der die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn es die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wenn jedoch die <kbd>Shift</kbd>-Taste gleichzeitig gedrückt wird (also [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), ist der zurückgegebene Wert der String `"B"`.
- Wenn die gedrückte Taste ein Steuer- oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` die Betätigung einer [dead key](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Schlüsselwert `"Dead"` sein.
- Einige spezielle Tastaturtasten (wie die erweiterten Tasten zur Mediensteuerung auf Multimediatastaturen) erzeugen unter Windows keine Keycodes; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden auf DOM-Tastaturevents abgebildet und sind unter den "Virtual key codes" für Windows aufgeführt, obwohl sie keine tatsächlichen Keycodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Vollständige Liste der Schlüsselwerte ansehen](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## KeyboardEvent Sequenz

Jedes `KeyboardEvent` wird in einer vorbestimmten Reihenfolge ausgelöst. Für eine bestimmte Tastendruck erfolgt die Folge von `KeyboardEvent`s wie folgt, vorausgesetzt, dass [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wird zuerst ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und die Taste ein Zeichen erzeugt, wird das Ereignis in einem plattformabhängigen Intervall weiter ausgelöst, und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen erzeugt, das möglicherweise in ein {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) auf true eingestellt eingefügt werden würde, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen können, wenn es unterstützt wird. Die Ereignisse werden wiederholt ausgelöst, während die Taste gedrückt bleibt.
3. Ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies vervollständigt den Prozess.

In den Sequenzen 1 & 3 ist das `KeyboardEvent.key` Attribut definiert und wird gemäß den zuvor definierten Regeln auf einen entsprechenden Wert gesetzt.

## KeyboardEvent Sequenzbeispiel

Betrachten Sie die Ereignisfolge, die generiert wird, wenn wir die <kbd>Shift</kbd> und die <kbd>2</kbd> Taste mit einem amerikanischen Tastaturlayout im Vergleich zu einem britischen Tastaturlayout verwenden.

Versuchen Sie, mit den folgenden zwei Testfällen zu experimentieren:

1. Drücken und halten Sie die <kbd>Shift</kbd>-Taste, dann drücken Sie die <kbd>2</kbd>-Taste und lassen sie los. Lassen Sie dann die <kbd>Shift</kbd>-Taste los.
2. Drücken und halten Sie die <kbd>Shift</kbd>-Taste, dann drücken und halten Sie die <kbd>2</kbd>-Taste. Lassen Sie die <kbd>Shift</kbd>-Taste los. Lassen Sie schließlich die <kbd>2</kbd>-Taste los.

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
> In Browsern, die das [`InputEvent`](/de/docs/Web/API/InputEvent)-Interface, das für die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verwendet wird, nicht vollständig implementieren, kann es sein, dass Sie auf diesen Zeilen der Protokollausgabe fehlerhafte Ausgaben erhalten.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Da diese Taste weiterhin gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenwert erzeugt.

Wenn `key 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für dieses neue Drücken ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird aufgrund der aktiven Modifikatortaste `shift` auf den String `@` für das amerikanische Tastaturlayout und `"` für das britische Tastaturlayout gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse werden anschließend ausgelöst, weil ein Zeichenschlüssel erzeugt wurde.

Während wir `key 2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst und der `key`-Eigenschaftswert bleibt für die unterschiedlichen Tastaturlayouts bei den Stringwerten `@` und `"`.

Wenn wir schließlich die `shift`-Taste loslassen, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst, und der Tasteneigenschaftswert bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Da diese Taste weiterhin gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenwert erzeugt.

Wenn `key 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für dieses neue Drücken ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird aufgrund der aktiven Modifikatortaste `shift` auf den String `@` für das amerikanische Tastaturlayout und `"` für das britische Tastaturlayout gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse werden anschließend ausgelöst, weil ein Zeichenschlüssel erzeugt wurde. Während die Taste gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wiederholt ausgelöst und die [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) Eigenschaft wird auf `true` gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse werden ebenfalls wiederholt ausgelöst.

Während wir die `shift`-Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst, und der Tasteneigenschaftswert bleibt `Shift`. An diesem Punkt beachten Sie, dass der `key`-Eigenschaftswert für das wiederholte Keydown-Ereignis des `key 2` Tastendrucks jetzt "2" ist, weil die Modifikatortaste `shift` nicht mehr aktiv ist. Dasselbe gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse.

Während wir schließlich `key 2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird auf den Stringwert `2` für beide Tastaturlayouts gesetzt, da die Modifikatortaste `shift` nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu hören. Wenn sie auftreten, wird der Wert der Taste überprüft, um zu sehen, ob es sich um eine der Tasten handelt, für die der Code relevant ist. Falls ja, wird sie in irgendeiner Weise verarbeitet (möglicherweise durch die Steuerung eines Raumfahrzeugs, vielleicht durch das Ändern der ausgewählten Zelle in einer Tabellenkalkulation).

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
