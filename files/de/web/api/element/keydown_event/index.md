---
title: "Element: keydown Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`keydown`** Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignis wird das `keydown` Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen oder nicht.

Die `keydown` und [`keyup`](/de/docs/Web/API/Element/keyup_event) Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" mit 65 durch `keydown` und `keyup` berichtet, aber mit 97 durch `keypress`. Ein großes "A" wird durch alle Ereignisse mit 65 gemeldet.

Das Ziel eines Tastaturereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur angesprochen werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, ist das Ereignisziel das {{HTMLElement("body")}} oder die Wurzel. Das Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) nach oben. Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastaturereignissen ändern. Beispielsweise wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste ein anderes als das `keyup`-Ziel, weil der Fokus sich geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("keydown", (event) => { })

onkeydown = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, weshalb, wenn der Benutzer die Taste an der "Y"-Position eines QWERTY-Tastaturlayouts drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die richtigen Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der Taste darstellt, die durch das Ereignis repräsentiert wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird in [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

## Beispiele

### addEventListener keydown Beispiel

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wann immer Sie eine Taste innerhalb des {{HtmlElement("input")}} Elements drücken.

```html
<input placeholder="Click here, then press down a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_example")}}

### keydown Ereignisse mit IME

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event) Ereignisse während der {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil der Komposition sind, tun Sie etwas wie dies (229 ist ein spezieller Wert, der für einen `keyCode` festgelegt ist, der sich auf ein Ereignis bezieht, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Hinweis:** `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das den IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das den IME schließt. In diesen Fällen ist `isComposing` zwar false, auch wenn das Ereignis Teil der Komposition ist. Allerdings ist [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) in diesen Fällen immer noch `229`, daher ist es dennoch ratsam, auch `keyCode` zu prüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
