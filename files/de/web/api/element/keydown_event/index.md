---
title: "Element: keydown-Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichencode produzieren.

Die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse liefern einen Code, der anzeigt, welche Taste gedrückt wird, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" von `keydown` und `keyup` als 65 gemeldet, aber von `keypress` als 97. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastenevents ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, ist das Ereignisziel das {{HTMLElement("body")}} oder die Wurzel. Wird es nicht abgefangen, wird das Ereignis durch [Blubbern](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) den [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) bis zum [`Document`](/de/docs/Web/API/Document) weitergeleitet.

Das Ereignisziel kann sich zwischen verschiedenen Tastenereignissen ändern. Zum Beispiel unterscheidet sich das `keydown`-Ziel für das Drücken der <kbd>Tab</kbd>-Taste vom `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Oberklassen, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis ausgelöst wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen Zeichenfolgenwert mit dem Code des physischen Schlüssels zurück, der durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Basisreihe), immer "KeyY" zurückgegeben wird, selbst wenn der Benutzer ein QWERTZ-Tastaturlayout hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die richtigen Tastenanschläge dem Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis ausgelöst wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und vor `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Schlüsselnamen des Schlüssels darstellt, der durch das Ereignis repräsentiert wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Orte identifizieren, wird in [Keyboard locations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis ausgelöst wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis ausgelöst wurde.

## Beispiele

### addEventListener keydown Beispiel

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie eine Taste im {{HtmlElement("input")}}-Element drücken.

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

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse während der [IME](/de/docs/Glossary/IME)-Zusammensetzung ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil der Komposition sind, tun Sie etwas wie dies (229 ist ein spezieller Wert für ein `keyCode`, der ein Ereignis kennzeichnet, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Hinweis:** `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn Sie das erste Zeichen eingeben, das das IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn Sie das letzte Zeichen eingeben, das das IME schließt. In diesen Fällen ist `isComposing` false, auch wenn das Ereignis Teil der Komposition ist. Allerdings ist [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) in diesen Fällen weiterhin `229`, daher ist es weiterhin ratsam, `keyCode` ebenfalls zu überprüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
