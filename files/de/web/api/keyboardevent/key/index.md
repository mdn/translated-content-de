---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Wert der vom Benutzer gedrückten Taste zurück, wobei der Zustand der Modifikatortasten wie <kbd>Shift</kbd> sowie das Tastaturlayout und die Sprache berücksichtigt werden.

## Wert

Ein Zeichenfolgenwert.

Der Wert wird folgendermaßen bestimmt:

- Wenn die gedrückte Taste eine druckbare Darstellung hat, ist der zurückgegebene Wert eine nicht-leere Unicode-Zeichenfolge, die die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert die Zeichenfolge `"b"`. Wenn jedoch gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt wird (also ist [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true`), ist der zurückgegebene Wert die Zeichenfolge `"B"`.
- Wenn die gedrückte Taste ein Steuer- oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` die Betätigung einer [dead key](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Tastenwert `"Dead"` sein.
- Einige spezielle Tastaturtasten (zum Beispiel erweiterte Tasten zur Steuerung von Medien auf Multimedia-Tastaturen) erzeugen unter Windows keine Tastencodes. Stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden zu DOM-Tastaturereignissen zugeordnet und sind unter den "Virtuellen Tastencodes" für Windows aufgeführt, obwohl sie tatsächlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Eine vollständige Liste der Tastenwerte anzeigen](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## KeyboardEvent-Sequenz

Jedes `KeyboardEvent` wird in einer vorgegebenen Reihenfolge ausgelöst. Für eine bestimmte Tastenbetätigung ist die Reihenfolge der ausgelösten `KeyboardEvent`s wie folgt, vorausgesetzt, [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) wird nicht aufgerufen:

1. Ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wird zuerst ausgelöst. Wenn die Taste weiterhin gedrückt gehalten wird und die Taste ein Zeichen produziert, wird das Ereignis in einer vom Plattformimplementierung abhängigen Intervall weiter emittiert und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen produziert, das möglicherweise in ein {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) auf true eingefügt werden würde, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen ein [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen, wenn dies unterstützt wird. Die Ereignisse werden weiterhin ausgelöst, während die Taste gedrückt gehalten wird.
3. Ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies vervollständigt den Vorgang.

In den Sequenzen 1 & 3 ist die `KeyboardEvent.key`-Eigenschaft definiert und wird gemäß den vorher festgelegten Regeln entsprechend auf einen Wert gesetzt.

## Beispiel einer KeyboardEvent-Sequenz

Betrachten Sie die Ereignissequenz, die generiert wird, wenn wir mit der <kbd>Shift</kbd>- und der <kbd>2</kbd>-Taste auf einer US-amerikanischen Tastatur im Vergleich zu einer britischen Tastatur interagieren.

Probieren Sie Folgendes mit den beiden Testfällen aus:

1. Drücken und halten Sie die <kbd>Shift</kbd>-Taste, dann drücken und lassen Sie <kbd>2</kbd> los. Lassen Sie anschließend die <kbd>Shift</kbd>-Taste los.
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
> In Browsern, die die [`InputEvent`](/de/docs/Web/API/InputEvent) Schnittstelle, die für die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verwendet wird, nicht vollständig implementieren, können Sie falsche Ausgaben in diesen Zeilen der Protokollausgabe erhalten.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis zuerst ausgelöst und der `key`-Eigenschaftswert wird auf die Zeichenfolge `Shift` gesetzt. Während wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht weiter wiederholt, da es keine Zeichen produziert.

Wenn die Taste `2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst und der `key`-Eigenschaftswert für das Ereignis wird auf die Zeichenfolge `@` für den US-Tastaturtyp und `"` für den UK-Tastaturtyp gesetzt, wegen der aktiven Modifikatortaste `Shift`. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden als nächstes ausgelöst, da ein Zeichen produziert wurde.

Wenn wir die Taste `2` loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst und die `key`-Eigenschaft behält die Zeichenfolgenwerte `@` und `"` für die unterschiedlichen Tastaturlayouts.

Wenn wir schließlich die SHIFT-Taste loslassen, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst und der Schlüsselattributwert bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis zuerst ausgelöst und der `key`-Eigenschaftswert wird auf die Zeichenfolge `Shift` gesetzt. Während wir diese Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht weiter wiederholt, da es keine Zeichen produzierte.

Wenn die Taste `2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst und der `key`-Eigenschaftswert für das Ereignis wird auf die Zeichenfolge `@` für den US-Tastaturtyp und `"` für den UK-Tastaturtyp gesetzt, wegen der aktiven Modifikatortaste `Shift`. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden als nächstes ausgelöst, da ein Zeichen produziert wurde. Während wir die Taste gedrückt halten, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis weiterhin wiederholt und die [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat)-Eigenschaft wird auf `true` gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden ebenfalls wiederholt ausgelöst.

Wenn wir die Shift-Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis dafür ausgelöst und der Schlüsselattributwert bleibt `Shift`. Beachten Sie zu diesem Zeitpunkt, dass der `key`-Eigenschaftswert für das wiederholte Keydown-Ereignis der `key 2`-Taste jetzt "2" ist, da die Modifikatortaste `Shift` nicht mehr aktiv ist. Das Gleiche gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse.

Wenn wir schließlich die `key 2`-Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird auf den Zeichenfolgenwert `2` für beide Tastaturlayouts gesetzt, da die Modifikatortaste `Shift` nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu hören. Wenn sie auftreten, wird der Wert der Taste geprüft, um festzustellen, ob es sich um eine der interessierenden Tasten handelt, und falls ja, wird sie in irgendeiner Weise verarbeitet (möglicherweise, um ein Raumschiff zu steuern, vielleicht um die ausgewählte Zelle in einer Tabelle zu ändern).

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
