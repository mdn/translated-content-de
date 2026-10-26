---
title: "Element: compositionstart-Ereignis"
short-title: compositionstart
slug: Web/API/Element/compositionstart_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`compositionstart`**-Ereignis wird ausgelöst, wenn ein Texteingabesystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung beginnt.

Dieses Ereignis kann beispielsweise ausgelöst werden, wenn eine Person beginnt, ein chinesisches Schriftzeichen mithilfe eines [Pinyin](https://en.wikipedia.org/wiki/Pinyin)-{{Glossary("Input_method_editor", "Eingabemethoden-Editors")}} einzugeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("compositionstart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncompositionstart = (event) => { }
```

## Ereignistyp

Ein [`CompositionEvent`](/de/docs/Web/API/CompositionEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CompositionEvent")}}

## Beispiele

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Interaktives Beispiel

#### HTML

```html
<div class="control">
  <label for="example">
    Focus the text-input control, then open your IME and begin typing.
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

- Verwandte Ereignisse: [`compositionend`](/de/docs/Web/API/Element/compositionend_event), [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event).
