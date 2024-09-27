---
title: "Element: compositionstart Ereignis"
short-title: compositionstart
slug: Web/API/Element/compositionstart_event
l10n:
  sourceCommit: 1a5d2a35f05d968f673a450240a1edc5d289e6b8
---

{{APIRef}}

Das **`compositionstart`** Ereignis wird ausgelöst, wenn ein Textkompositionssystem, wie ein [Eingabemethoden-Editor](/de/docs/Glossary/input_method_editor), eine neue Kompositionssitzung startet.

Beispielsweise könnte dieses Ereignis ausgelöst werden, nachdem ein Benutzer beginnt, ein chinesisches Zeichen mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) [IME](/de/docs/Glossary/IME) einzugeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("compositionstart", (event) => {});

oncompositionstart = (event) => {};
```

## Ereignistyp

Ein [`CompositionEvent`](/de/docs/Web/API/CompositionEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CompositionEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihrem Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.data`](/de/docs/Web/API/CompositionEvent/data) {{ReadOnlyInline}}
  - : Gibt die von der Eingabemethode generierten Zeichen zurück, die das Ereignis ausgelöst haben; sie variiert je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Layout-Gebietsschema der Tastatur, wenn die Komposition mit IME verbunden ist).

## Beispiele

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Lebendiges Beispiel

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
