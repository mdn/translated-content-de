---
title: "Element: keyup-Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" von `keydown` und `keyup` als 65 gemeldet, aber als 97 von `keypress`. Ein großes "A" wird in allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastenereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dies umfasst: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, das über die Tastatur interagiert werden kann, wie z.B. {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus steht, wird das Ereignisziel der {{HTMLElement("body")}} oder die Wurzel sein. Das Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) hoch. Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastenereignissen ändern. Beispielsweise wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("keyup", (event) => { })

onkeyup = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dieses ignoriert das Keyboard-Layout des Benutzers, sodass wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Keyboard-Layout drückt (nahe der Mitte der Reihe über der Home-Reihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer ein QWERTZ-Keyboard hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Keyboard-Layout (bei dem der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge an den Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der Taste darstellt, die durch das Ereignis dargestellt wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird in [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird, sodass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

## Beispiele

### Beispiel für addEventListener mit keyup

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie eine Taste im {{HtmlElement("input")}}-Element loslassen.

```html
<input placeholder="Click here, then press and release a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### Keyup-Ereignisse mit IME

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse nun während der Komposition im {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} ausgelöst, um die plattformübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse, die Teil der Komposition sind, zu ignorieren, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup`-Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Werte für IME-Ereignisse. Allerdings kann wie bei `keydown` das `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen, das den IME öffnet, eingegeben wird, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen, das den IME schließt, eingegeben wird. In diesen Fällen ist `isComposing` falsch, selbst wenn das Ereignis Teil der Komposition ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
