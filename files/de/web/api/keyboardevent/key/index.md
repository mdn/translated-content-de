---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Wert der vom Benutzer gedrückten Taste zurück, wobei der Status der Modifikator-Tasten wie <kbd>Shift</kbd> sowie das Tastaturlayout und die -sprache berücksichtigt werden.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine gedruckte Darstellung hat, ist der zurückgegebene Wert ein nicht-leerer Unicode-Zeichenketten-String, der die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Leertaste</kbd> ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wenn jedoch gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt wird (also [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), ist der zurückgegebene Wert der String `"B"`.
- Bei Steuerungs- oder Sonderzeichen ist der zurückgegebene Wert einer der [vordefinierten Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Dead Key](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Schlüsselwert `"Dead"` sein.
- Einige Spezialtasten auf Tastaturen (wie die erweiterten Tasten zur Mediensteuerung auf Multimedia-Tastaturen) erzeugen keine Tastencodes unter Windows; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden auf DOM-Tastaturereignisse abgebildet und sind unter den "Virtuellen Tastencodes" für Windows aufgeführt, obwohl sie tatsächlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Sehen Sie eine vollständige Liste der Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## Tastaturereignisse-Sequenz

Jedes `KeyboardEvent` wird in einer vorbestimmten Reihenfolge ausgelöst. Für ein gegebenes Tastendruck wird die Reihenfolge der ausgelösten `KeyboardEvent`s wie folgt festgelegt, vorausgesetzt, dass [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wird zuerst ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und die Taste ein Zeichen erzeugt, wird das Ereignis in einem vom Plattform-Implementierung abhängigen Intervall weiter ausgelöst und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen erzeugt, das möglicherweise in ein {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) auf true, eingefügt würde, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen können, wenn es unterstützt wird. Die Ereignisse werden wiederholt ausgelöst, während die Taste gedrückt gehalten wird.
3. Ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies schließt den Vorgang ab.

In den Sequenzen 1 & 3 ist das Attribut `KeyboardEvent.key` definiert und wird gemäß den zuvor definierten Regeln entsprechend auf einen Wert gesetzt.

## Beispiel einer Tastaturereignisse-Sequenz

Betrachten Sie die Ereignisse-Reihenfolge, die erzeugt wird, wenn wir mit der <kbd>Shift</kbd>- und der <kbd>2</kbd>-Taste interagieren, und zwar sowohl mit einem US-amerikanischen Tastaturlayout als auch mit einem UK-Tastaturlayout.

Versuchen Sie, mit den folgenden zwei Testfällen zu experimentieren:

1. Drücken und halten Sie die <kbd>Shift</kbd>-Taste, dann drücken Sie <kbd>2</kbd> und lassen sie sie los. Lassen Sie dann die <kbd>Shift</kbd>-Taste los.
2. Drücken und halten Sie die <kbd>Shift</kbd>-Taste, dann drücken und halten Sie <kbd>2</kbd>. Lassen Sie die <kbd>Shift</kbd>-Taste los. Schließlich lassen Sie <kbd>2</kbd> los.

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
> In Browsern, die das [`InputEvent`](/de/docs/Web/API/InputEvent)-Interface, das für die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verwendet wird, nicht vollständig implementieren, können auf diesen Zeilen der Protokollausgabe falsche Ergebnisse auftreten.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. So lange wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenwert erzeugt.

Wenn die Taste `2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für dieses neue Drücken ausgelöst und der `key`-Eigenschaftswert des Ereignisses wird auf den String `@` für die US-amerikanische Tastaturart und `"` für die UK-Tastaturart gesetzt, aufgrund der aktiven Modifikator-Taste `shift`. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden als nächstes ausgelöst, weil ein Zeichenwert erzeugt wurde.

Sobald wir die Taste `2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst und die `key`-Eigenschaft behält den String-Wert `@` und `"` für die unterschiedlichen Tastaturlayouts.

Wenn wir schließlich die `shift`-Taste loslassen, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis für sie ausgelöst, und der Schlüsselattributwert bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. So lange wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenwert erzeugt.

Wenn die Taste `2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für dieses neue Drücken ausgelöst und der `key`-Eigenschaftswert des Ereignisses wird auf den String `@` für die US-amerikanische Tastaturart und `"` für die UK-Tastaturart gesetzt, aufgrund der aktiven Modifikator-Taste `shift`. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden als nächstes ausgelöst, weil ein Zeichenwert erzeugt wurde. So lange wir die Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis weiterhin wiederholt ausgelöst und die [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat)-Eigenschaft wird auf `true` gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden ebenfalls wiederholt ausgelöst.

Sobald wir die `shift`-Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis für sie ausgelöst und der Schlüsselattributwert bleibt `Shift`. An diesem Punkt wird der `key`-Eigenschaftswert für das wiederholte Keydown-Ereignis des `key 2`-Tastendrucks jetzt "2" sein, da die Modifikatortaste `shift` nicht mehr aktiv ist. Gleiches gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse.

Sobald wir die Taste `2` schließlich loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird auf den String-Wert `2` für beide Tastaturlayouts gesetzt, da die Modifikatortaste `shift` nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu horchen. Wenn sie auftreten, wird der Wert der Taste überprüft, um festzustellen, ob es sich um eine der Tasten handelt, an der der Code interessiert ist. Wenn ja, wird sie in irgendeiner Weise verarbeitet (möglicherweise durch Steuern eines Raumfahrzeugs oder durch Ändern der ausgewählten Zelle in einer Tabellenkalkulation).

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
