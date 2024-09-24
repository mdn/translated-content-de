---
title: "Element: compositionend Ereignis"
short-title: compositionend
slug: Web/API/Element/compositionend_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef}}

Das **`compositionend`** Ereignis wird ausgelöst, wenn ein Textzusammensetzungssystem wie ein {{glossary("input method editor")}} die aktuelle Zusammensetzungssitzung abschließt oder abbricht.

Beispielsweise könnte dieses Ereignis ausgelöst werden, nachdem ein Benutzer das Eingeben eines chinesischen Zeichens mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) {{glossary("IME")}} abgeschlossen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("compositionend", (event) => {});

oncompositionend = (event) => {};
```

## Ereignistyp

Ein {{domxref("CompositionEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("CompositionEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("UIEvent")}}, und ihrem Vorfahren — {{domxref("Event")}}._

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die durch die Eingabemethode generiert wurden, die das Ereignis ausgelöst hat; sie variieren je nach Typ des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Locale der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Locale, wenn die Zusammensetzung mit einem {{glossary("IME")}} verbunden ist).

## Beispiele

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionend", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Live-Beispiel

#### HTML

```html
<div class="control">
  <label for="example">
    Zuerst Textfeld auswählen, dann um IME zu öffnen:
    <ul>
      <li>auf macOS tippen Sie <kbd>option</kbd> + <kbd>`</kbd></li>
      <li>auf Windows tippen Sie <kbd>windows</kbd> + <kbd>.</kbd></li>
    </ul>
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

- Verwandte Ereignisse: {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.
