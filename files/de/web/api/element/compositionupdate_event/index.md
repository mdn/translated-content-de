---
title: "Element: compositionupdate Ereignis"
short-title: compositionupdate
slug: Web/API/Element/compositionupdate_event
l10n:
  sourceCommit: cede06423af0242a18670246e1b25562d21c0004
---

{{APIRef}}

Das **`compositionupdate`** Ereignis wird ausgelöst, wenn im Kontext einer Textzusammensetzungssitzung, die von einem Textzusammensetzungssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird, ein neues Zeichen empfangen wird.

Zum Beispiel könnte dieses Ereignis ausgelöst werden, während ein Benutzer ein chinesisches Zeichen mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} eingibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("compositionupdate", (event) => {});

oncompositionupdate = (event) => {};
```

## Ereignistyp

Ein [`CompositionEvent`](/de/docs/Web/API/CompositionEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CompositionEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihrem Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.data`](/de/docs/Web/API/CompositionEvent/data) {{ReadOnlyInline}}
  - : Gibt die vom Eingabemethoden-Editor generierten Zeichen zurück, die das Ereignis ausgelöst haben; sie variieren je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erstellt hat.
- [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Zusammensetzung mit IME verknüpft ist).

## Beispiele

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionupdate", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Live-Beispiel

#### HTML

```html
<div class="control">
  <label for="example">
    First select textbox, then to open IME:
    <ul>
      <li>on macOS type <kbd>option</kbd> + <kbd>`</kbd></li>
      <li>on Windows type <kbd>windows</kbd> + <kbd>.</kbd></li>
    </ul>
  </label>
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="25"
    id="eventLog"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

input[type="text"] {
  margin: 0.5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JavaScript

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent += `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '180px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event), [`compositionend`](/de/docs/Web/API/Element/compositionend_event).
