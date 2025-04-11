---
title: "Element: keyup Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Das **`keyup`** Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Ein kleines "a" wird beispielsweise als 65 von `keydown` und `keyup` gemeldet, aber als 97 von `keypress`. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastenereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagieren kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Falls kein geeignetes Element im Fokus ist, wird das Ereignisziel der {{HTMLElement("body")}} oder die Wurzel sein. Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastenereignissen ändern. Zum Beispiel wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste in der "Y"-Position auf einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet, und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout hat (wo der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge dem Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis repräsentierten Taste darstellt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird unter [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie sich automatisch wiederholt.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

## Beispiele

### Beispiel für addEventListener und keyup

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) Wert, wann immer Sie eine Taste innerhalb des {{HtmlElement("input")}} Elements loslassen.

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

### keyup Ereignisse mit IME

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse während der {{Glossary("Input_method_editor", "Editor für Eingabemethoden")}} Zusammensetzung ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358)). Um alle `keyup` Ereignisse zu ignorieren, die Teil der Zusammensetzung sind, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup` Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) Werte für IME Ereignisse. Allerdings kann, wie bei `keydown`, `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen, das das IME öffnet, eingetippt wird, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen, das das IME schließt, eingetippt wird. In diesen Fällen ist `isComposing` false, selbst wenn das Ereignis Teil der Zusammensetzung ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
