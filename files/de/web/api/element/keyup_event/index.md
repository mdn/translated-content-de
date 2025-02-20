---
title: "Element: keyup-Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: 69a705c07d1cd6b8f3e5d711421a23a09f471958
---

{{APIRef}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse geben einen Code an, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welcher Buchstabe eingegeben wurde. Zum Beispiel wird ein kleines "a" als 65 von `keydown` und `keyup`, aber als 97 von `keypress` gemeldet. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Zielobjekt eines Tastenereignisses ist das aktuell fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, mit dem über die Tastatur interagiert werden kann, wie z. B. {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Falls kein geeignetes Element fokussiert ist, wird das Ereignisziel das {{HTMLElement("body")}} oder die Wurzel sein. Das Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Zielobjekt des Ereignisses kann sich zwischen verschiedenen Tastaturereignissen ändern. Zum Beispiel wird das `keydown`-Ziel beim Drücken der Taste <kbd>Tab</kbd> unterschiedlich sein im Vergleich zum `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position auf einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe oberhalb der Hauptreihe), immer "KeyY" zurückgegeben wird, selbst wenn der Benutzer eine QWERTZ-Tastatur verwendet (was bedeutet, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout, bei dem der Benutzer ein "F" erwartet. Wenn Sie die korrekten Tastenanschläge für den Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Wert der Taste repräsentiert, die durch das Ereignis dargestellt wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird unter [Keyboard locations](/de/docs/Web/API/KeyboardEvent#keyboard_locations) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird und dadurch automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

## Beispiele

### Beispiel für addEventListener mit keyup

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wenn Sie eine Taste innerhalb des {{HtmlElement("input")}}-Elements loslassen.

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

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event)- und `keyup`-Ereignisse nun während der {{Glossary("Input_method_editor", "Input Method Editor")}}-Zusammensetzung ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse zu ignorieren, die Teil der Zusammensetzung sind, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup`-Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Werte für IME-Ereignisse. Wie bei `keydown` kann jedoch `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen getippt wird, das den IME öffnet, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen getippt wird, das den IME schließt. In diesen Fällen ist `isComposing` false, auch wenn das Ereignis Teil der Zusammensetzung ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
