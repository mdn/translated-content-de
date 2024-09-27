---
title: TextEvent
slug: Web/API/TextEvent
l10n:
  sourceCommit: b695ba7dbc0a4fc581e20daf358ac068133c664a
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die Schnittstelle **`TextEvent`** ist eine veraltete UI-Ereignisschnittstelle zur Meldung von Änderungen an Texteingabeelementen.

> **Note:** `TextEvent`-Ereignisse wurden durch Ereignisse wie `input`, `beforeinput`, `keypress`, `keyup` und `keydown` ersetzt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`TextEvent.data`](/de/docs/Web/API/TextEvent/data) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die mit dem Ereignis verbundenen Daten an.

## Instanz-Methoden

- [`TextEvent.initTextEvent()`](/de/docs/Web/API/TextEvent/initTextEvent) {{deprecated_inline}}
  - : Füllt die Werte dieses (neuen) `TextEvent` mit den angegebenen Parametern.

## Ereignisliste

Die folgende Liste enthält alle `TextEvent`-Ereignisse:

- `textinput`

## Beispiele

### Auf Ereignisse der Texteingabe lauschen

Sie können einen Listener für Texteingabeereignisse wie folgt registrieren, indem Sie [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
element.addEventListener(
  "textInput",
  (event) => {
    // …
  },
  false,
);
```

### Einfache Protokollierung der Eingabeereignisse

Dieses Beispiel lauscht auf eine Reihe von Ereignissen, die bei einer Eingabe ausgelöst werden, einschließlich `textInput`.
Der Ereignistyp und die Ereignisdaten werden protokolliert, sodass Sie sehen können, wo `textInput` im Vergleich zu anderen durch Tastendruck generierten Ereignissen ausgegeben wird.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 140px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const input = document.querySelector("input");

input.addEventListener("keypress", updateValue);
input.addEventListener("keyup", updateValue);
input.addEventListener("keydown", updateValue);
input.addEventListener("input", updateValue);
input.addEventListener("beforeinput", updateValue);
input.addEventListener("textInput", updateValue);

function updateValue(e) {
  log(`${e.type}: ${e.data}`);
}
```

#### Ergebnis

{{EmbedLiveSample("Simple logger showing input events", "100%", "210px" )}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
