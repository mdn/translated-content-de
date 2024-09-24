---
title: "Element: compositionstart Ereignis"
short-title: compositionstart
slug: Web/API/Element/compositionstart_event
l10n:
  sourceCommit: 1a5d2a35f05d968f673a450240a1edc5d289e6b8
---

{{APIRef}}

Das **`compositionstart`** Ereignis wird ausgelöst, wenn ein Textkompositionssystem wie ein {{glossary("input method editor")}} eine neue Kompositionssitzung startet.

Beispielsweise könnte dieses Ereignis ausgelöst werden, nachdem ein Benutzer beginnt, ein chinesisches Schriftzeichen mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) {{glossary("IME")}} einzugeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("compositionstart", (event) => {});

oncompositionstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("CompositionEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("CompositionEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, {{domxref("UIEvent")}}, und ihres Vorfahren — {{domxref("Event")}}._

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die durch die Eingabemethode erzeugten Zeichen zurück, die das Ereignis ausgelöst haben; variiert je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit IME verbunden ist).

## Beispiele

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Live-Beispiel

#### HTML

```html
<div class="control">
  <label for="example">
    Fokussieren Sie die Texteingabekontrolle, öffnen Sie dann Ihr IME und beginnen Sie mit der Eingabe.
  </label>
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label for="eventLog">Ereignisprotokoll:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="25"
    id="eventLog"></textarea>
  <button class="clear-log">Löschen</button>
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

- Verwandte Ereignisse: {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.
