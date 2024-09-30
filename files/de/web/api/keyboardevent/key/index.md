---
title: "KeyboardEvent: key Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft des [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Interfaces gibt den Wert der vom Benutzer gedrückten Taste zurück, wobei der Zustand von Modifikatortasten wie <kbd>Shift</kbd> sowie das Tastaturlayout und die Tastaturlokalisierung berücksichtigt werden.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine gedruckte Darstellung hat, ist der zurückgegebene Wert ein nicht leerer Unicode-Zeichenfolgen, der die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wird jedoch gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt (so dass [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) `true` ist), ist der zurückgegebene Wert der String `"B"`.
- Wenn die gedrückte Taste ein Steuer- oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Tottaste](https://en.wikipedia.org/wiki/Dead_key) darstellt, muss der Tastenwert `"Dead"` sein.
- Einige Sondertasten auf Tastaturen (wie die erweiterten Tasten zur Steuerung von Medien auf Multimedia-Tastaturen) erzeugen keine Tasten-Codes auf Windows; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden in DOM-Tastaturevents abgebildet und sind aufgelistet unter den "Virtuellen Tastencodes" für Windows, obwohl sie eigentlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Sehen Sie eine vollständige Liste der Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## `KeyboardEvent`-Sequenz

Jedes `KeyboardEvent` wird in einer vorbestimmten Reihenfolge ausgelöst. Für einen gegebenen Tastendruck wird die Sequenz der ausgelösten `KeyboardEvent`s wie folgt angenommen, wenn [`Event.preventDefault`](/de/docs/Web/API/Event/preventDefault) nicht aufgerufen wird:

1. Ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wird zuerst ausgelöst. Wenn die Taste weiterhin gedrückt gehalten wird und die Taste ein Zeichen produziert, wird das Ereignis in einem von der Plattformimplementierung abhängigen Intervall weiter ausgegeben und die schreibgeschützte Eigenschaft [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen produziert, das dazu führen würde, dass in ein möglicherweise {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder ein Element mit [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable), das auf true gesetzt ist, ein Zeichen eingefügt wird, werden die Ereignistypen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen möglicherweise das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis auslösen, wenn es unterstützt wird. Die Ereignisse werden wiederholt ausgelöst, während die Taste gedrückt gehalten wird.
3. Ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies vervollständigt den Vorgang.

In Sequenz 1 & 3 wird das Attribut `KeyboardEvent.key` definiert und gemäß den zuvor definierten Regeln auf einen entsprechenden Wert gesetzt.

## Beispiel für eine `KeyboardEvent`-Sequenz

Betrachten Sie die Ereignissequenz, die erzeugt wird, wenn wir mit der <kbd>Shift</kbd>- und der <kbd>2</kbd>-Taste auf einem US-Tastaturlayout im Vergleich dazu mit einem UK-Tastaturlayout interagieren.

Versuchen Sie, mit den folgenden zwei Testfällen zu experimentieren:

1. Drücken und halten Sie die

   <kbd>Shift</kbd>

   Taste, dann drücken Sie

   <kbd>2</kbd>

   und lassen Sie es los. Lassen Sie anschließend die

   <kbd>Shift</kbd>

   Taste los.

2. Drücken und halten Sie die

   <kbd>Shift</kbd>

   Taste, dann drücken und halten Sie

   <kbd>2</kbd>

   . Lassen Sie die

   <kbd>Shift</kbd>

   Taste los. Schließlich lassen Sie

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
> In Browsern, die das [`InputEvent`](/de/docs/Web/API/InputEvent)-Interface, das für die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verwendet wird, nicht vollständig implementieren, können Sie auf diesen Zeilen der Protokollausgabe falsche Ergebnisse erhalten.

### Fall 1

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Wenn diese Taste gedrückt gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis nicht wiederholt ausgelöst, da es kein Zeichen produziert.

Wenn `key 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Wert des Ereignisses wird auf den String `@` für den US-Tastaturtyp und `"` für den UK-Tastaturtyp gesetzt, aufgrund der aktiven Modifikator-`shift`-Taste. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden dann ausgelöst, weil eine Zeichentaste erzeugt wurde.

Beim Loslassen der `key 2` Taste wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst und der `key`-Eigenschaftswert bleibt in den String-Werten `@` und `"` entsprechend den verschiedenen Tastaturlayouts.

Wenn wir schließlich die `shift` Taste loslassen, wird ein weiteres [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, und der key-Attributwert bleibt `Shift`.

### Fall 2

Wenn die Shift-Taste gedrückt wird, wird zuerst ein [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, und der `key`-Eigenschaftswert wird auf den String `Shift` gesetzt. Wenn diese Taste gedrückt gehalten wird, wird das keydown-Ereignis nicht wiederholt ausgelöst, da es kein Zeichen produziert hat.

Wenn `key 2` gedrückt wird, wird ein weiteres [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key`-Wert des Ereignisses wird auf den String `@` für den US-Tastaturtyp und `"` für den UK-Tastaturtyp gesetzt, aufgrund der aktiven Modifikator-`shift`-Taste. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden dann ausgelöst, weil eine Zeichentaste erzeugt wurde. Wenn diese Taste gedrückt gehalten wird, wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis wiederholt ausgelöst und die [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat)-Eigenschaft wird auf `true` gesetzt. Die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse werden ebenfalls wiederholt ausgelöst.

Beim Loslassen der `shift` Taste wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis für sie ausgelöst, und der key-Attributwert bleibt `Shift`. An diesem Punkt beachten Sie, dass der `key`-Eigenschaftswert für das wiederholte keydown-Ereignis des `key 2` Tastendrucks nun "2" ist, da die Modifikator-`shift`-Taste nicht mehr aktiv ist. Das gleiche gilt für die [`InputEvent.data`](/de/docs/Web/API/InputEvent/data)-Eigenschaft der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse.

Wenn wir schließlich die `key 2` Taste loslassen, wird ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst, aber die `key`-Eigenschaft wird auf den String-Wert `2` für beide Tastaturlayouts gesetzt, da die Modifikator-`shift`-Taste nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse zu hören. Wenn sie auftreten, wird der Wert der Taste überprüft, um festzustellen, ob es sich um eine der Tasten handelt, an denen der Code interessiert ist, und wenn ja, wird sie auf irgendeine Weise verarbeitet (möglicherweise durch das Steuern eines Raumschiffs oder durch das Ändern der ausgewählten Zelle in einer Tabelle).

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
