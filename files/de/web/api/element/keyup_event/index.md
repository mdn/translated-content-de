---
title: "Element: keyup Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`keyup`** Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingetippt wurde. Zum Beispiel wird ein kleines "a" in `keydown` und `keyup` als 65 gemeldet, aber als 97 in `keypress`. Ein großes "A" wird in allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastaturereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagierbar ist, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, wird das Ereignisziel das {{HTMLElement("body")}} oder der Root. Wenn es nicht abgefangen wird, [blubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) das Ereignis den [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) hinauf bis es [`Document`](/de/docs/Web/API/Document) erreicht.

Das Ereignisziel kann zwischen verschiedenen Tastaturereignissen wechseln. Zum Beispiel wäre das `keydown` Ziel beim Drücken der <kbd>Tab</kbd>-Taste ein anderes als das `keyup` Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, so dass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Basisreihe), dies immer "KeyY" zurückgibt, auch wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet, und alle anderen Eigenschaften würden ein "Z" anzeigen) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Orte identifizieren, finden Sie unter [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations).
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

## Beispiele

### addEventListener keyup Beispiel

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) Wert, wenn Sie eine Taste innerhalb des {{HtmlElement("input")}} Elements loslassen.

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

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse nun während der {{Glossary("IME", "IME")}} Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keyup` Ereignisse, die Teil der Komposition sind, zu ignorieren, tun Sie etwas wie folgt:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup` Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) Werte für IME-Ereignisse. Allerdings kann, wie bei `keydown`, `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen, das den IME öffnet, eingetippt wird, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen, das den IME schließt, eingetippt wird. In diesen Fällen ist `isComposing` falsch, auch wenn das Ereignis Teil der Komposition ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
