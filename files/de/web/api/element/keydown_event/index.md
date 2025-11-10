---
title: "Element: keydown-Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen.

Die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse geben einen Code an, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" als 65 durch `keydown` und `keyup` gemeldet, aber als 97 durch `keypress`. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastenereignisses ist das aktuell fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, mit dem über die Tastatur interagiert werden kann, wie zum Beispiel {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, wird das Ereignisziel der {{HTMLElement("body")}} oder das Root-Element sein. Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastenereignissen ändern. Zum Beispiel wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste unterschiedlich zum `keyup`-Ziel, da sich der Fokus geändert hat.

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

_Diese Schnittstelle erbt auch Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Code-Wert der physikalischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert die Tastaturbelegung des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einer QWERTY-Tastaturbelegung drückt (in der Nähe der Mitte der Reihe über der Home-Row), dies immer "KeyY" zurückgeben wird, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder eine Dvorak-Tastaturbelegung (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastaturwert der durch das Ereignis repräsentierten Taste darstellt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Orte identifizieren, wird unter [Tastaturorte](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

## Beispiele

### addEventListener keydown-Beispiel

Dieses Beispiel protokolliert den Wert [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wann immer Sie eine Taste im {{HtmlElement("input")}}-Element drücken.

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

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse nun während der {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}}-Kompilation ausgelöst, um die Kompatibilität zwischen verschiedenen Browsern für CJKT-Nutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse, die Teil der Komposition sind, zu ignorieren, können Sie etwas wie folgt tun (229 ist ein spezieller Wert, der für einen `keyCode` gesetzt wird, der sich auf ein von einem IME verarbeitetes Ereignis bezieht):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> [!NOTE]
> `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das das IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das das IME schließt. In diesen Fällen ist `isComposing` falsch, auch wenn das Ereignis Teil der Komposition ist. [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) ist in diesen Fällen jedoch immer noch `229`, daher ist es immer noch ratsam, `keyCode` ebenfalls zu überprüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
