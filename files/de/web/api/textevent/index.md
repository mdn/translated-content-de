---
title: TextEvent
slug: Web/API/TextEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`TextEvent`**-Schnittstelle ist eine veraltete UI-Ereignisschnittstelle zur Meldung von Änderungen an Text-UI-Elementen.

> [!NOTE] > `TextEvent`-Ereignisse wurden durch Ereignisse wie `input`, `beforeinput`, `keypress`, `keyup` und `keydown` ersetzt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`TextEvent.data`](/de/docs/Web/API/TextEvent/data) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die mit dem Ereignis verbundenen Daten an.

## Instanz-Methoden

- [`TextEvent.initTextEvent()`](/de/docs/Web/API/TextEvent/initTextEvent) {{deprecated_inline}}
  - : Füllt die Werte dieses (neuen) `TextEvent` mit den gegebenen Parametern.

## Ereignisliste

Die folgende Liste enthält alle `TextEvent`-Ereignisse:

- `textinput`

## Beispiele

### Lauschen auf Texteingabe-Ereignisse

Sie können einen Listener für Texteingabe-Ereignisse mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wie folgt registrieren:

```js
element.addEventListener(
  "textInput",
  (event) => {
    // …
  },
  false,
);
```

### Einfacher Logger, der Eingabeereignisse anzeigt

Dieses Beispiel lauscht auf eine Anzahl von Ereignissen, die auf einer Eingabe ausgelöst werden, einschließlich `textInput`.
Der Ereignistyp und die Ereignisdaten werden protokolliert, sodass Sie sehen können, wo `textInput` im Vergleich zu anderen Ereignissen wie denen, die durch Tastendrücke generiert werden, ausgegeben wird.

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
