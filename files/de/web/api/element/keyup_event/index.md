---
title: "Element: keyup-Event"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wird, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" sowohl von `keydown` als auch von `keyup` als 65 gemeldet, aber als 97 von `keypress`. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ziel des Tastaturereignisses ist das aktuell fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles, was über die Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, wird das Ziel des Ereignisses der {{HTMLElement("body")}} oder der Root. Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann zwischen verschiedenen Tastaturereignissen wechseln. Zum Beispiel wird das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste anders sein als das `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

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
  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, so dass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), immer "KeyY" zurückgegeben wird, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und vor `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Standort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Standorte identifizieren, wird in [Tastaturlayouts](/de/docs/Web/API/KeyboardEvent#keyboard_locations) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastaturereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastaturereignis generiert wurde.

## Beispiele

### Beispiel zur Verwendung von addEventListener mit keyup

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

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse nun während der {{Glossary("Input_method_editor", "Eingabemethode-Editor")}}-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Nutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse zu ignorieren, die Teil der Komposition sind, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown`-Ereignissen haben `keyup`-Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Werte für IME-Ereignisse. Wie bei `keydown` kann jedoch `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das den IME öffnet, und `compositionend` kann _vor_ `keyup` auftreten, wenn das letzte Zeichen eingegeben wird, das den IME schließt. In diesen Fällen ist `isComposing` false, auch wenn das Ereignis Teil der Komposition ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
