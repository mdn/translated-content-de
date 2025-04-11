---
title: "Element: keydown Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen.

Die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" sowohl durch `keydown` als auch `keyup` als 65 gemeldet, aber als 97 durch `keypress`. Ein großes "A" wird durch alle Ereignisse als 65 gemeldet.

Das Ereignisziel eines Tastenereignisses ist das gerade fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, mit dem man über die Tastatur interagieren kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, wird das Ereignisziel der {{HTMLElement("body")}} oder das Root-Element sein. Das Ereignis [bläst sich auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastenereignissen ändern. Zum Beispiel wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, weil sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

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

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette mit dem Codewert der physikalischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, so dass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, auch wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird in [Keyboard locations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt wird, dass sie sich automatisch wiederholt.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

## Beispiele

### addEventListener keydown Beispiel

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

### keydown Ereignisse mit IME

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse während der {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}}-Zusammensetzung ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil der Komposition sind, können Sie etwas in der Art tun (229 ist ein spezieller Wert, der für einen `keyCode` festgelegt wird, der sich auf ein Ereignis bezieht, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> **Hinweis:** `compositionstart` kann _nach_ `keydown` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das das IME öffnet, und `compositionend` kann _vor_ `keydown` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das das IME schließt. In diesen Fällen ist `isComposing` falsch, auch wenn das Ereignis Teil der Komposition ist. Dennoch bleibt [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) in diesen Fällen `229`, also ist es weiterhin ratsam, `keyCode` ebenfalls zu überprüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
