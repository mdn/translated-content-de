---
title: "Element: keypress-Ereignis"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: b3c6c88f84d9ab8f3a244584a5409f60f4a47fc9
---

{{APIRef}} {{deprecated_header}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine [Buchstaben-, Zahlen-, Satzzeichen- oder Symboltaste](https://w3c.github.io/uievents/#unicode-character-categories) gedrückt wird oder wenn die <kbd>Enter</kbd>-Taste gedrückt wird — einschließlich, wenn die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>-Taste oder der <kbd>Ctrl</kbd>-Taste gedrückt wird. Ansonsten, wenn eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd> oder <kbd>Option</kbd> isoliert gedrückt wird, wird das `keypress`-Ereignis _nicht_ ausgelöst.

> [!WARNING]
> Da dieses Ereignis als veraltet markiert wurde, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("keypress", (event) => {});

onkeypress = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und bevor `compositionend` ausgelöst wird.

- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den Tastenwert der Taste repräsentiert, die durch das Ereignis dargestellt wird.

- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die den Standort der Taste auf der Tastatur oder einem anderen Eingabegerät repräsentiert. Eine Liste der Konstanten, die die Standorte identifizieren, wird in [Keyboard locations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.

- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt wird, dass sie automatisch wiederholt wird.

- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

## Beispiele

### Beispiel für addEventListener keypress

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie nach Fokussierung des {{htmlelement("input")}}-Elements eine Taste drücken.

Um zu sehen, welche Tasten ein `keypress`-Ereignis auslösen und welche nicht, versuchen Sie, folgende Tasten zu drücken:

- Buchstabentasten, Zahlentasten und Satzzeichentasten
- Symboltasten wie die <kbd>$</kbd>, <kbd>+</kbd>, <kbd>=</kbd>, <kbd>%</kbd> und <kbd>+</kbd>-Tasten
- Modifikatortasten wie die <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd>, <kbd>Option</kbd> oder <kbd>⌘</kbd>-Tasten
- die <kbd>Enter</kbd>-Taste
- die <kbd>Enter</kbd>-Taste in Kombination mit den <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Tasten
- die <kbd>Enter</kbd>-Taste in Kombination mit anderen Modifikatortasten als <kbd>Shift</kbd> oder <kbd>Ctrl</kbd>

```html
<div>
  <label for="sample">Focus the input and type something:</label>
  <input type="text" name="text" id="sample" />
</div>
<p id="log"></p>
```

```js
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_example")}}

### Äquivalent zu onkeypress

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Document`](/de/docs/Web/API/Document)-Interface, das das Ereignis ebenfalls anspricht.
- Verwandte Ereignisse:

  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
