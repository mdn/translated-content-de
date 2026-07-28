---
title: "Element: keypress-Ereignis"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}{{deprecated_header}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine [Buchstabe, Zahl, Interpunktionszeichen oder Symbol](https://w3c.github.io/uievents/#unicode-character-categories)-Taste gedrückt wird, oder wenn die <kbd>Enter</kbd>-Taste gedrückt wird – einschließlich wenn die <kbd>Enter</kbd>-Taste in Kombination mit der <kbd>Shift</kbd>- oder <kbd>Ctrl</kbd>-Taste gedrückt wird. Ansonsten wird das `keypress`-Ereignis _nicht_ ausgelöst, wenn eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd> oder <kbd>Option</kbd> isoliert gedrückt wird.

> [!WARNING]
> Da dieses Ereignis als veraltet gilt, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Events#event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### addEventListener keypress-Beispiel

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wenn Sie nach dem Fokussieren des {{htmlelement("input")}}-Elements eine Taste drücken.

Um zu sehen, welche Tasten ein `keypress`-Ereignis auslösen und welche nicht, versuchen Sie, die folgenden Tasten zu drücken:

- Buchstabentasten, Zahlentasten und Interpunktionstasten
- Symboltasten wie <kbd>$</kbd>, <kbd>+</kbd>, <kbd>=</kbd>, <kbd>%</kbd> und <kbd>+</kbd>
- Modifikatortasten wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd>, <kbd>Option</kbd> oder <kbd>⌘</kbd>
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

### onkeypress-Äquivalent

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Document`](/de/docs/Web/API/Document)-Interface, das ebenfalls Ziel des Ereignisses ist.
- Verwandte Ereignisse:
  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
