---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: d18d0fc9f8ef963da1184d45b3e397e419cad2c8
---

{{APIRef("UI Events")}}

Die **`key`**-Eigenschaft der [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle gibt den Wert der vom Benutzer gedrückten Taste zurück, wobei der Zustand von Modifikatortasten wie <kbd>Shift</kbd> sowie die Tastaturlokalisierung und das Layout berücksichtigt werden.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine gedruckte Darstellung hat, ist der zurückgegebene Wert eine nicht leere Unicode-Zeichenfolge, die die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wenn jedoch die <kbd>Shift</kbd>-Taste gleichzeitig gedrückt wird (sodass [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), ist der zurückgegebene Wert der String `"B"`.
- Wenn die gedrückte Taste ein Steuer- oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Tottaste](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Tastenwert `"Dead"` sein.
- Einige spezielle Tastaturtasten (wie die erweiterten Tasten zur Steuerung von Medien auf Multimediatastaturen) erzeugen unter Windows keine Tastencodes; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden auf DOM-Tastaturevents abgebildet und gehören zu den "Virtuellen Tastencodes" für Windows, obwohl sie eigentlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Eine vollständige Liste der Tastenwerte anzeigen](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## KeyboardEvent-Sequenz

Jedes `KeyboardEvent` wird in einer vorbestimmten Sequenz ausgelöst. Für einen gegebenen Tastendruck wird die Sequenz der ausgelösten `KeyboardEvent`s wie folgt angenommen, dass [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wird zuerst ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und die Taste ein Zeichen erzeugt, wird das Ereignis in einem von der Plattformimplementierung abhängigen Intervall weiter ausgesendet und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen ergibt, das möglicherweise in ein {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) eingefügt wird, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen das Ereignis [`keypress`](/de/docs/Web/API/Element/keypress_event) auslösen könnten, wenn dies unterstützt wird. Die Ereignisse werden wiederholt ausgelöst, solange die Taste gedrückt gehalten wird.
3. Ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies beendet den Prozess.

In den Sequenzen 1 & 3 ist das Attribut `KeyboardEvent.key` definiert und wird gemäß den zuvor definierten Regeln auf einen entsprechenden Wert gesetzt.

## Beispielsequenz für KeyboardEvent

Betrachten Sie die Ereignissequenz, die generiert wird, wenn wir mit der <kbd>Shift</kbd>- und der <kbd>2</kbd>-Taste auf einem US-Tastaturlayout im Vergleich zu einem UK-Tastaturlayout interagieren.

Versuchen Sie, mit den folgenden zwei Testfällen zu experimentieren:

1. Drücken und halten Sie die

   <kbd>Shift</kbd>

   -Taste, dann drücken Sie

   <kbd>2</kbd>

   und lassen sie los. Lassen Sie dann die

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
> In Browsern, die die [`InputEvent`](/de/docs/Web/API/InputEvent)-Schnittstelle nicht vollständig implementieren, welche für die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) verwendet wird, könnten Sie auf diesen Zeilen der Protokollausgabe falsche Ergebnisse erhalten.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Während wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, weil es keinen Zeichenwert produziert.

Wenn die `Taste 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird auf den String `@` für das US-Tastaturlayout und `"` für das UK-Tastaturlayout gesetzt, weil der aktive Modifikator `shift`-Taste ist. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden als nächstes ausgelöst, weil eine Zeichen-Taste erzeugt wurde.

Wenn wir die `Taste 2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst und die `key`-Eigenschaft wird die String-Werte `@` und `"` für die verschiedenen Tastaturlayouts beibehalten.

Wenn wir schließlich die `Shift`-Taste loslassen, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst, und der Tastenattributwert bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Während wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, weil es keinen Zeichenwert produziert.

Wenn die `Taste 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Eigenschaftswert für das Ereignis wird auf den String `@` für das US-Tastaturlayout und `"` für das UK-Tastaturlayout gesetzt, weil der aktive Modifikator `shift`-Taste ist. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden als nächstes ausgelöst, weil eine Zeichen-Taste erzeugt wurde. Während wir die Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis weiterhin wiederholt ausgelöst und die Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt. Die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) werden ebenfalls wiederholt ausgelöst.

Wenn wir die `Shift`-Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst, und der Tastenattributwert bleibt `Shift`. An diesem Punkt merkt man, dass der `key`-Eigenschaftswert für das wiederholte `keydown`-Ereignis des `Taste 2`-Tastendrucks nun `"2"` ist, weil der Modifikator `shift`-Taste nicht mehr aktiv ist. Gleiches gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse.

Wenn wir schließlich die `Taste 2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird für beide Tastaturlayouts auf den String-Wert `"2"` gesetzt, weil der Modifikator `shift`-Taste nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu hören. Wenn sie auftreten, wird der Tastenwert überprüft, um herauszufinden, ob er eine der Tasten ist, an denen der Code interessiert ist. Falls ja, wird er auf irgendeine Weise verarbeitet (möglicherweise durch das Steuern eines Raumfahrzeugs oder das Ändern der ausgewählten Zelle in einer Tabelle).

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
