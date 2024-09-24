---
title: TextEvent
slug: Web/API/TextEvent
l10n:
  sourceCommit: b695ba7dbc0a4fc581e20daf358ac068133c664a
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`TextEvent`**-Schnittstelle ist eine veraltete UI-Ereignisschnittstelle zur Übermittlung von Änderungen an Text-UI-Elementen.

> **Note:** Die `TextEvent`-Ereignisse wurden durch Ereignisse wie `input`, `beforeinput`, `keypress`, `keyup` und `keydown` ersetzt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten {{domxref("UIEvent")}} und indirekt von {{domxref("Event")}}._

- {{domxref("TextEvent.data")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die mit dem Ereignis verknüpften Daten an.

## Instanz-Methoden

- {{domxref("TextEvent.initTextEvent()")}} {{deprecated_inline}}
  - : Befüllt die Werte dieses (neuen) `TextEvent` mit den angegebenen Parametern.

## Ereignisliste

Die folgende Liste zeigt alle `TextEvent`-Ereignisse:

- `textinput`

## Beispiele

### Lauschen auf Texteingabe-Ereignisse

Sie können einen Listener für Texteingabe-Ereignisse mit {{DOMxRef("EventTarget.addEventListener()")}} wie folgt registrieren:

```js
element.addEventListener(
  "textInput",
  (event) => {
    // …
  },
  false,
);
```

### Einfacher Logger, der Eingabeereignisse zeigt

Dieses Beispiel lauscht auf eine Reihe von Ereignissen, die bei einer Eingabe ausgelöst werden, einschließlich `textInput`.
Der Ereignistyp und die Ereignisdaten werden protokolliert, sodass Sie sehen können, wo `textInput` im Verhältnis zu anderen Ereignissen auftritt, die durch Tastendrücke generiert werden.

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
