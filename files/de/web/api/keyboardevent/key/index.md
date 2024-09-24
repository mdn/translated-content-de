---
title: "KeyboardEvent: key-Eigenschaft"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`key`**-Eigenschaft der {{domxref("KeyboardEvent")}}-Schnittstelle gibt den Wert der vom Benutzer gedrückten Taste zurück, wobei der Zustand der Modifikator-Tasten wie <kbd>Shift</kbd> sowie das Tastaturlayout und die -sprache berücksichtigt werden.

## Wert

Ein String.

Der Wert wird wie folgt bestimmt:

- Wenn die gedrückte Taste eine gedruckte Darstellung hat, ist der zurückgegebene Wert eine nicht-leere Unicode-Zeichenkette, die die druckbare Darstellung der Taste enthält. Zum Beispiel: Wenn die gedrückte Taste die <kbd>Space</kbd>-Taste ist, ist der zurückgegebene Wert ein einzelnes Leerzeichen (`" "`). Wenn die gedrückte Taste die <kbd>B</kbd>-Taste ist, ist der zurückgegebene Wert der String `"b"`. Wenn jedoch gleichzeitig die <kbd>Shift</kbd>-Taste gedrückt wird (also ist {{domxref("KeyboardEvent/shiftKey", "shiftKey")}} `true`), ist der zurückgegebene Wert der String `"B"`.
- Wenn die gedrückte Taste ein Steuerzeichen oder Sonderzeichen ist, ist der zurückgegebene Wert einer der [vordefinierten Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Wenn das `KeyboardEvent` das Drücken einer [Tottaste](https://de.wikipedia.org/wiki/Tottaste) darstellt, muss der Schlüsselwert „`Dead`“ sein.
- Einige spezielle Tastaturtasten (wie die erweiterten Tasten zur Steuerung von Medien auf Multimedia-Tastaturen) erzeugen unter Windows keine Tastencodes; stattdessen lösen sie `WM_APPCOMMAND`-Ereignisse aus. Diese Ereignisse werden auf DOM-Tastaturereignisse abgebildet und sind unter den "virtuellen Tastencodes" für Windows aufgelistet, obwohl sie eigentlich keine Tastencodes sind.
- Wenn die Taste nicht identifiziert werden kann, ist der zurückgegebene Wert `Unidentified`.

> [!CALLOUT]
>
> [Sehen Sie sich eine vollständige Liste der Schlüsselwerte an](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).

## Tastaturereignis-Sequenz

Jedes `KeyboardEvent` wird in einer vorbestimmten Reihenfolge ausgelöst. Für einen bestimmten Tastendruck wird die Sequenz der ausgelösten `KeyboardEvent`s wie folgt abgewickelt, sofern {{domxref("Event.preventDefault")}} nicht aufgerufen wird:

1. Ein {{domxref("Element/keydown_event", "keydown")}}-Ereignis wird zuerst ausgelöst. Wenn die Taste weiter gedrückt gehalten wird und die Taste ein Zeichen erzeugt, wird das Ereignis in einem von der Plattform-Implementierung abhängigen Intervall weiterhin ausgegeben und die schreibgeschützte {{domxref("KeyboardEvent.repeat")}}-Eigenschaft wird auf `true` gesetzt.
2. Wenn die Taste ein Zeichen erzeugt, das in einem {{HTMLElement("input")}}, {{HTMLElement("textarea")}} oder einem Element mit {{domxref("HTMLElement.contentEditable")}} true eingefügt werden könnte, werden die Ereignistypen {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}} in dieser Reihenfolge ausgelöst. Beachten Sie, dass einige andere Implementierungen ein {{domxref("Element/keypress_event", "keypress")}}-Ereignis auslösen können, wenn es unterstützt wird. Während die Taste gedrückt gehalten wird, werden die Ereignisse wiederholt ausgelöst.
3. Ein {{domxref("Element/keyup_event", "keyup")}}-Ereignis wird ausgelöst, sobald die Taste losgelassen wird. Dies vervollständigt den Vorgang.

In den Sequenzen 1 und 3 ist das Attribut `KeyboardEvent.key` definiert und wird gemäß den zuvor definierten Regeln auf einen Wert gesetzt.

## Beispiel für eine Tastaturereignis-Sequenz

Betrachten Sie die Ereignissequenz, die erzeugt wird, wenn wir mit der <kbd>Shift</kbd> und der <kbd>2</kbd>-Taste mit einem US-amerikanischen Tastaturlayout im Vergleich zu einem britischen Tastaturlayout interagieren.

Versuchen Sie, mit den folgenden beiden Testfällen zu experimentieren:

1. Drücken und halten Sie die

   <kbd>Shift</kbd>

   -Taste, dann drücken und lassen Sie die

   <kbd>2</kbd>

   -Taste los. Lassen Sie schließlich die

   <kbd>Shift</kbd>

   -Taste los.

2. Drücken und halten Sie die

   <kbd>Shift</kbd>

   -Taste, dann drücken und halten Sie die

   <kbd>2</kbd>

   -Taste. Lassen Sie die

   <kbd>Shift</kbd>

   -Taste los. Schließlich lassen Sie die

   <kbd>2</kbd>

   -Taste los.

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
> In Browsern, die die {{domxref("InputEvent")}}-Schnittstelle, die für die {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}}-Ereignisse verwendet wird, nicht vollständig implementieren, können Sie auf diesen Zeilen der Protokollausgabe falsche Ausgaben erhalten.

### Fall 1

Wenn die Umschalttaste gedrückt wird, wird zuerst ein {{domxref("Element/keydown_event", "keydown")}}-Ereignis ausgelöst, und der `key` Eigenschaftswert wird auf den String `Shift` gesetzt. Solange wir diese Taste gedrückt halten, wird das {{domxref("Element/keydown_event", "keydown")}}-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenschlüssel erzeugt.

Wenn die Taste `2` gedrückt wird, wird ein weiteres {{domxref("Element/keydown_event", "keydown")}}-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key` Eigenschaftswert für das Ereignis wird aufgrund der aktiven Modifikatortaste `Shift` für den US-amerikanischen Tastaturtyp auf den String `@` und für den britischen Tastaturtyp auf `"`, gesetzt. Die {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}}-Ereignisse werden ausgelöst, da ein Zeichenschlüssel erzeugt wurde.

Beim Loslassen der Taste `2` wird ein {{domxref("Element/keyup_event", "keyup")}}-Ereignis ausgelöst und die `key` Eigenschaft behält die Stringwerte `@` und `"` für die verschiedenen Tastaturlayouts.

Wenn die `Shift`-Taste schließlich losgelassen wird, wird ein weiteres {{domxref("Element/keyup_event", "keyup")}}-Ereignis für sie ausgelöst, und der Schlüsselattributwert bleibt `Shift`.

### Fall 2

Wenn die Umschalttaste gedrückt wird, wird zuerst ein {{domxref("Element/keydown_event", "keydown")}}-Ereignis ausgelöst, und der `key` Eigenschaftswert wird auf den String `Shift` gesetzt. Solange wir diese Taste gedrückt halten, wird das keydown-Ereignis nicht wiederholt ausgelöst, da es keinen Zeichenschlüssel erzeugt hat.

Wenn die Taste `2` gedrückt wird, wird ein weiteres {{domxref("Element/keydown_event", "keydown")}}-Ereignis für diesen neuen Tastendruck ausgelöst, und der `key` Eigenschaftswert für das Ereignis wird auf den String `@` für den US-amerikanischen Tastaturtyp und `"` für den britischen Tastaturtyp gesetzt, da die aktive Modifikatortaste `Shift` ist. Die {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}}-Ereignisse werden ausgelöst, da ein Zeichenschlüssel erzeugt wurde. Solange wir die Taste gedrückt halten, wird das {{domxref("Element/keydown_event", "keydown")}}-Ereignis weiterhin wiederholt ausgelöst und die {{domxref("KeyboardEvent.repeat")}} Eigenschaft ist auf `true` gesetzt. Auch die {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}}-Ereignisse werden wiederholt ausgelöst.

Beim Loslassen der Umschalttaste wird ein {{domxref("Element/keyup_event", "keyup")}}-Ereignis für sie ausgelöst, und der Schlüsselattributwert bleibt `Shift`. An diesem Punkt beachten Sie, dass der `key` Eigenschaftswert für das wiederholt ausgelöste keydown-Ereignis des `2` Tastendrucks jetzt "2" ist, da die Modifikatortaste `Shift` nicht mehr aktiv ist. Dasselbe gilt für die {{domxref("InputEvent.data")}}-Eigenschaft der {{domxref("Element/beforeinput_event", "beforeinput")}} und {{domxref("Element/input_event", "input")}}-Ereignisse.

Beim endgültigen Loslassen der Taste `2` wird ein {{domxref("Element/keyup_event", "keyup")}}-Ereignis ausgelöst und die `key` Eigenschaft wird auf den Stringwert `2` für beide Tastaturlayouts gesetzt, da die Modifikatortaste `Shift` nicht mehr aktiv ist.

## Beispiele

Dieses Beispiel verwendet {{domxref("EventTarget.addEventListener()")}}, um auf {{domxref("Element/keydown_event", "keydown")}}-Ereignisse zu hören. Wenn sie auftreten, wird der Wert der Taste überprüft, um festzustellen, ob er zu den Tasten gehört, an denen der Code interessiert ist, und wenn dies der Fall ist, wird sie in irgendeiner Weise verarbeitet (möglicherweise durch Steuern eines Raumfahrzeugs, vielleicht durch Ändern der ausgewählten Zelle in einer Tabellenkalkulation).

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Nichts tun, wenn das Ereignis bereits bearbeitet wurde
    }

    switch (event.key) {
      case "ArrowDown":
        // Tun Sie etwas für die "Pfeil nach unten" Taste.
        break;
      case "ArrowUp":
        // Tun Sie etwas für die "Pfeil nach oben" Taste.
        break;
      case "ArrowLeft":
        // Tun Sie etwas für die "Pfeil nach links" Taste.
        break;
      case "ArrowRight":
        // Tun Sie etwas für die "Pfeil nach rechts" Taste.
        break;
      case "Enter":
        // Tun Sie etwas für "Enter" oder "Return" Taste.
        break;
      case " ":
        // Tun Sie etwas für die "Leertaste".
        break;
      case "Escape":
        // Tun Sie etwas für die "Esc"-Taste.
        break;
      default:
        return; // Beenden, wenn dies das Tastenereignis nicht behandelt.
    }

    // Die Standardaktion abbrechen, um eine doppelte Behandlung zu vermeiden
    event.preventDefault();
  },
  true,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
