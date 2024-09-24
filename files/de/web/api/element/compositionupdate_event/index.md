---
title: "Element: compositionupdate-Ereignis"
short-title: compositionupdate
slug: Web/API/Element/compositionupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef}}

Das **`compositionupdate`**-Ereignis wird ausgelöst, wenn ein neues Zeichen im Kontext einer Textzusammensetzungssitzung empfangen wird, die von einem Textzusammensetzungssystem wie einem {{glossary("input method editor", "Eingabemethoden-Editor")}} gesteuert wird.

Zum Beispiel könnte dieses Ereignis ausgelöst werden, während ein Benutzer ein chinesisches Zeichen mit einem [Pinyin](https://en.wikipedia.org/wiki/Pinyin) {{glossary("IME")}} eingibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("compositionupdate", (event) => {});

oncompositionupdate = (event) => {};
```

## Ereignistyp

Ein {{domxref("CompositionEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("CompositionEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("UIEvent")}}, und ihrem Vorfahren — {{domxref("Event")}}._

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die von der Eingabemethode generiert wurden, die das Ereignis ausgelöst hat; sie variieren je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit IME verbunden ist).

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
    Zuerst Textfeld auswählen, dann um IME zu öffnen:
    <ul>
      <li>auf macOS <kbd>option</kbd> + <kbd>`</kbd> eingeben</li>
      <li>auf Windows <kbd>windows</kbd> + <kbd>.</kbd> eingeben</li>
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionend_event", "compositionend")}}.
