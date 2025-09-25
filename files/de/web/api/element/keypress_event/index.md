---
title: "Element: keypress event"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}{{deprecated_header}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine [Buchstaben-, Zahlen-, Satzzeichen- oder Symbol](https://w3c.github.io/uievents/#unicode-character-categories)-Taste gedrückt wird, oder wenn die <kbd>Enter</kbd>-Taste gedrückt wird — einschließlich, wenn die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>-Taste oder der <kbd>Ctrl</kbd>-Taste gedrückt wird. Ansonsten, wenn eine Modifikatortaste wie die <kbd>Alt</kbd>-, <kbd>Shift</kbd>-, <kbd>Ctrl</kbd>-, <kbd>Meta</kbd>-, <kbd>Esc</kbd>- oder <kbd>Option</kbd>-Taste alleine gedrückt wird, wird das `keypress`-Ereignis _nicht_ ausgelöst.

> [!WARNING]
> Da dieses Ereignis veraltet ist, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

Das Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastwert der durch das Ereignis repräsentierten Taste angibt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Speicherort der Taste auf der Tastatur oder einem anderen Eingabegerät angibt. Eine Liste der Konstanten, die die Speicherorte identifizieren, ist unter [Tastatur-Speicherorte](/de/docs/Web/API/KeyboardEvent#keyboard_locations) zu sehen.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gedrückt gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

## Beispiele

### addEventListener keypress Beispiel

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wenn immer Sie eine Taste nach dem Fokussieren des {{htmlelement("input")}}-Elements drücken.

Um zu sehen, welche Tasten ein `keypress`-Ereignis auslösen und welche nicht, versuchen Sie, die folgenden Tasten zu drücken:

- Buchstabentasten, Zahlentasten und Satzzeichentasten
- Symboltasten wie die <kbd>$</kbd>-, <kbd>+</kbd>-, <kbd>=</kbd>-, <kbd>%</kbd>- und <kbd>+</kbd>-Tasten
- Modifikatortasten wie die <kbd>Alt</kbd>-, <kbd>Shift</kbd>-, <kbd>Ctrl</kbd>-, <kbd>Meta</kbd>-, <kbd>Esc</kbd>-, <kbd>Option</kbd>- oder <kbd>⌘</kbd>-Tasten
- die <kbd>Enter</kbd>-Taste
- die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste
- die <kbd>Enter</kbd>-Taste in Kombination mit anderen Modifikatortasten außer der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste

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

### Gleichwertiges onkeypress

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Document`](/de/docs/Web/API/Document)-Schnittstelle, die das Ereignis ebenfalls anvisiert.
- Verwandte Ereignisse:
  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
