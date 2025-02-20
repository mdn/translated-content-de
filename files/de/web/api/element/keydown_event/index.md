---
title: "Element: keydown-Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: 69a705c07d1cd6b8f3e5d711421a23a09f471958
---

{{APIRef}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis, wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen.

Die Ereignisse `keydown` und [`keyup`](/de/docs/Web/API/Element/keyup_event) liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" durch `keydown` und `keyup` als 65 gemeldet, jedoch durch `keypress` als 97. Ein Großbuchstabe "A" wird von allen Ereignissen als 65 gemeldet.

Das Zielelement eines Tastaturereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dies schließt ein: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, jede Entität, die [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, sowie alles andere, das durch die Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, ist das Zielelement das {{HTMLElement("body")}}-Element oder die Root-Ebene. Das Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) nach oben. Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Zielelement kann sich zwischen verschiedenen Tastaturereignissen ändern. Zum Beispiel wäre das `keydown`-Zielelement für das Drücken der Taste <kbd>Tab</kbd> ein anderes als das `keyup`-Zielelement, weil sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) beim Generieren des Tastaturereignisses aktiv war.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Zeile oberhalb der Grundlinie), dies immer "KeyY" zurückgibt, auch wenn der Benutzer eine QWERTZ-Tastatur verwendet (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (bei dem der Benutzer ein "F" erwartet). Wenn Sie die korrekten Tastenanschläge für den Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste <kbd>Ctrl</kbd> beim Generieren des Tastaturereignisses aktiv war.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastaturwert der durch das Ereignis repräsentierten Taste angibt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einer anderen Eingabevorrichtung repräsentiert. Eine Liste der Konstanten, die die Positionen identifizieren, wird in [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) beim Generieren des Tastaturereignisses aktiv war.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste <kbd>Shift</kbd> beim Generieren des Tastaturereignisses aktiv war.

## Beispiele

### Beispiel mit addEventListener für keydown

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wann immer Sie eine Taste im Inneren eines {{HtmlElement("input")}}-Elements drücken.

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

### keydown-Ereignisse mit IME

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse nun während der {{Glossary("Input_method_editor", "Eingabe mit Eingabemethode")}} ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil einer Komposition sind, können Sie etwa Folgendes tun (229 ist ein spezieller Wert, der für ein `keyCode` gesetzt wird, das mit einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Hinweis:** `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn das erste Zeichen eingetippt wird, das die IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn das letzte Zeichen eingetippt wird, das die IME schließt. In diesen Fällen ist `isComposing` zwar falsch, obwohl das Ereignis Teil der Komposition ist. Dennoch bleibt [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) in diesen Fällen auf `229`, daher ist es weiterhin ratsam, auch `keyCode` zu überprüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
