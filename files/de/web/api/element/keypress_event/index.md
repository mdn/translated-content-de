---
title: "Element: keypress-Ereignis"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: 47def3151aadab22b9438c2eedba276d51f65f25
---

{{APIRef("UI Events")}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine Taste für einen [Buchstaben, eine Zahl, ein Satzzeichen oder ein Symbol](https://w3c.github.io/uievents/#unicode-character-categories) gedrückt wird oder wenn die Taste <kbd>Enter</kbd> gedrückt wird – auch in Kombination mit <kbd>Shift</kbd> oder <kbd>Ctrl</kbd>. Wird dagegen eine Modifizierertaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd> oder <kbd>Option</kbd> allein gedrückt, wird das `keypress`-Ereignis _nicht_ ausgelöst.

> [!WARNING]
> Da dieses Ereignis veraltet ist, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

Das Ereignis [steigt im DOM-Baum auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("keypress", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Property](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onkeypress = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Es erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### Beispiel für keypress mit addEventListener

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wenn Sie nach dem Fokussieren des {{htmlelement("input")}}-Elements eine Taste drücken.

Um zu sehen, welche Tasten ein `keypress`-Ereignis auslösen und welche nicht, drücken Sie beispielsweise:

- Buchstaben-, Zahlen- und Satzzeichentasten
- Symboltasten wie <kbd>$</kbd>, <kbd>+</kbd>, <kbd>=</kbd>, <kbd>%</kbd> und <kbd>+</kbd>
- Modifizierertasten wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Esc</kbd>, <kbd>Option</kbd> oder <kbd>⌘</kbd>
- die Taste <kbd>Enter</kbd>
- die Taste <kbd>Enter</kbd> in Kombination mit <kbd>Shift</kbd> oder <kbd>Ctrl</kbd>
- die Taste <kbd>Enter</kbd> in Kombination mit anderen Modifizierertasten als <kbd>Shift</kbd> oder <kbd>Ctrl</kbd>

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

### Verwendung der Event-Handler-Property `onkeypress`

Sie können auch die Event-Handler-Property `onkeypress` verwenden. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onkeypress` hinzugefügte Event-Listener ersetzt werden:

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`Document`](/de/docs/Web/API/Document), die ebenfalls Ziel des Ereignisses sein kann.
- Verwandte Ereignisse:
  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
