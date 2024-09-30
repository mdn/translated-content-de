---
title: "Element: keydown Event"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`keydown`** Event wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event)-Event, wird das `keydown`-Event für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen.

Die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Events geben einen Code an, welcher Schlüssel gedrückt wird, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" von `keydown` und `keyup` als 65 gemeldet, aber von `keypress` als 97. Ein großes "A" wird von allen Events als 65 gemeldet.

Das Eventziel eines Tasten-Events ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, wird das Eventziel der {{HTMLElement("body")}} oder der Root. Wenn es nicht abgefangen wird, [blubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) das Event den [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) hinauf, bis es [`Document`](/de/docs/Web/API/Document) erreicht.

Das Eventziel kann zwischen verschiedenen Tasten-Events wechseln. Zum Beispiel wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste ein anderes als das `keyup`-Ziel, weil sich der Fokus geändert hat.

## Syntax

Nutzen Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
```

## Eventtyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tasten-Event generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Event repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert die Tastaturbelegung des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeutet, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder eine Dvorak-Tastaturbelegung (wo der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge für den Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd> Taste aktiv war, als das Tasten-Event generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Event zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Event repräsentierten Taste darstellt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird in [Tastaturlocations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen, die <kbd>⌘ Command</kbd> Taste; auf Windows-Tastaturen, die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tasten-Event generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird, sodass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd> Taste aktiv war, als das Tasten-Event generiert wurde.

## Beispiele

### Beispiel für addEventListener keydown

Dieses Beispiel protokolliert den [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)-Wert, wann immer Sie eine Taste innerhalb des {{HtmlElement("input")}}-Elements drücken.

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

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse nun während der [IME](/de/docs/Glossary/IME)-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil der Komposition sind, machen Sie etwas wie dies (229 ist ein spezieller Wert, der für einen `keyCode` gesetzt wird, der sich auf ein Ereignis bezieht, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Hinweis:** `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das das IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das das IME schließt. In diesen Fällen ist `isComposing` auch dann falsch, wenn das Ereignis Teil der Komposition ist. [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) ist jedoch in diesen Fällen immer noch `229`, daher ist es dennoch ratsam, auch `keyCode` zu überprüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
