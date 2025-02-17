---
title: "Element: keypress-Event"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: 69a705c07d1cd6b8f3e5d711421a23a09f471958
---

{{APIRef}} {{deprecated_header}}

Das **`keypress`**-Event wird ausgelöst, wenn eine [Buchstaben-, Zahlen-, Interpunktions- oder Symboltaste](https://w3c.github.io/uievents/#unicode-character-categories) gedrückt wird, oder wenn die <kbd>Enter</kbd>-Taste gedrückt wird – einschließlich der Kombination der <kbd>Enter</kbd>-Taste mit der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste. Wird jedoch eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd> oder <kbd>Option</kbd> isoliert gedrückt, wird das `keypress`-Event _nicht_ ausgelöst.

> [!WARNING]
> Da dieses Event veraltet ist, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

Das Event [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("keypress", (event) => {});

onkeypress = (event) => {};
```

## Eventtyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Event-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Event ausgelöst wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Event dargestellt wird.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Event ausgelöst wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Event zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der Taste darstellt, die durch das Event dargestellt wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Orte identifizieren, ist unter [Tastaturorte](/de/docs/Web/API/KeyboardEvent#keyboard_locations) aufgeführt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Event ausgelöst wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird, sodass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Event ausgelöst wurde.

## Beispiele

### Beispiel für addEventListener mit keypress

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie nach dem Fokussieren des {{htmlelement("input")}}-Elements eine Taste drücken.

Um zu sehen, welche Tasten ein `keypress`-Event auslösen und welche nicht, versuchen Sie, die folgenden Tasten zu drücken:

- Buchstaben-, Zahlen- und Interpunktions-Tasten
- Symboltasten wie die <kbd>$</kbd>-, <kbd>+</kbd>-, <kbd>=</kbd>-, <kbd>%</kbd>- und <kbd>+</kbd>-Tasten
- Modifikatortasten wie die <kbd>Alt</kbd>-, <kbd>Shift</kbd>-, <kbd>Ctrl</kbd>-, <kbd>Meta</kbd>-, <kbd>Esc</kbd>-, <kbd>Option</kbd>- oder <kbd>⌘</kbd>-Tasten
- die <kbd>Enter</kbd>-Taste
- die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste
- die <kbd>Enter</kbd>-Taste in Kombination mit anderen Modifikatortasten als der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste

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

### Entsprechung von onkeypress

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Document`](/de/docs/Web/API/Document)-Schnittstelle, auf die das Event ebenfalls abzielt.
- Verwandte Events:

  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
