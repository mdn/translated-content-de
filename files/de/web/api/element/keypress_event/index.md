---
title: "Element: keypress event"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine [Buchstaben-, Zahlen-, Satzzeichen- oder Symboltaste](https://w3c.github.io/uievents/#unicode-character-categories) gedrückt wird, oder wenn die <kbd>Enter</kbd>-Taste gedrückt wird – einschließlich, wenn die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste gedrückt wird. Wenn hingegen eine Modifikatortaste wie die <kbd>Alt</kbd>-, <kbd>Shift</kbd>-, <kbd>Ctrl</kbd>-, <kbd>Meta</kbd>-, <kbd>Esc</kbd>- oder <kbd>Option</kbd>-Taste alleine gedrückt wird, wird das `keypress`-Ereignis _nicht_ ausgelöst.

> [!WARNING]
> Da dieses Ereignis veraltet ist, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### Beispiel mit addEventListener keypress

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wann immer Sie nach dem Fokussieren des {{htmlelement("input")}}-Elements eine Taste drücken.

Um zu sehen, welche Tasten ein `keypress`-Ereignis auslösen und welche nicht, versuchen Sie, die folgenden Tasten zu drücken:

- Buchstabentasten, Zahlentasten und Satzzeichentasten
- Symboltasten wie die <kbd>$</kbd>-, <kbd>+</kbd>-, <kbd>=</kbd>-, <kbd>%</kbd>- und <kbd>+</kbd>-Tasten
- Modifikatortasten wie die <kbd>Alt</kbd>-, <kbd>Shift</kbd>-, <kbd>Ctrl</kbd>-, <kbd>Meta</kbd>-, <kbd>Esc</kbd>-, <kbd>Option</kbd>- oder <kbd>⌘</kbd>-Tasten
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

- Die [`Document`](/de/docs/Web/API/Document)-Schnittstelle, auf die das Ereignis ebenfalls abzielt.
- Verwandte Ereignisse:
  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
