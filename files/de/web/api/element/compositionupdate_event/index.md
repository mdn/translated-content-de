---
title: "Element: compositionupdate Ereignis"
short-title: compositionupdate
slug: Web/API/Element/compositionupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef}}

Das **`compositionupdate`** Ereignis wird ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung empfangen wird, die von einem Textkompositionssystem wie einem [Input Method Editor](/de/docs/Glossary/input_method_editor) gesteuert wird.

Dieses Ereignis könnte zum Beispiel ausgelöst werden, während ein Benutzer ein chinesisches Zeichen mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) [IME](/de/docs/Glossary/IME) eingibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("compositionupdate", (event) => {});

oncompositionupdate = (event) => {};
```

## Ereignistyp

Ein [`CompositionEvent`](/de/docs/Web/API/CompositionEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CompositionEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihres Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.data`](/de/docs/Web/API/CompositionEvent/data) {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die von der Eingabemethode erzeugt wurden, die das Ereignis ausgelöst hat; dies variiert je nach Art des Ereignisses, das das `CompositionEvent` Objekt generiert hat.
- [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem IME verbunden ist).

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
