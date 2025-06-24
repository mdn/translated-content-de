---
title: "Element: keyup-Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die Ereignisse [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" von `keydown` und `keyup` als 65 gemeldet, aber von `keypress` als 97. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastaturereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dies umfasst: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagieren kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, wird das Ereignisziel der {{HTMLElement("body")}} oder die Wurzel sein. Das Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) nach oben. Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann zwischen verschiedenen Tastenereignissen wechseln. Zum Beispiel ist das `keydown`-Ziel für das Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, da sich der Fokus geändert hat.

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

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen Zeichenfolgenwert mit dem Code der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers. Wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe oberhalb der Grundreihe), wird dies immer "KeyY" zurückgeben, auch wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd> Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Wert der Taste darstellt, die durch das Ereignis repräsentiert wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird unter [Keyboard locations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) dargestellt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd> Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd> Taste aktiv war, als das Tastaturereignis generiert wurde.

## Beispiele

### addEventListener keyup-Beispiel

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie eine Taste innerhalb des {{HtmlElement("input")}}-Elements loslassen.

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

### keyup-Ereignisse mit IME

Seit Firefox 65 werden die Ereignisse [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` nun während der {{Glossary("Input_method_editor", "Input method editor")}}-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse zu ignorieren, die Teil der Komposition sind, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown`-Ereignissen haben `keyup`-Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Werte für IME-Ereignisse. Jedoch kann, wie bei `keydown`, das `compositionstart`-Ereignis _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen eingetippt wird, das den IME öffnet, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen eingetippt wird, das den IME schließt. In diesen Fällen ist `isComposing` falsch, selbst wenn das Ereignis Teil der Komposition ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
