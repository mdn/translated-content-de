---
title: "Element: keyup-Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup`-Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" als 65 von `keydown` und `keyup` gemeldet, aber als 97 von `keypress`. Ein großes "A" wird bei allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tasten-Ereignisses ist das aktuell fokussierte Element, das die Tastaturaktivität verarbeitet. Dies umfasst: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, das mit der Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, wird das Ereignisziel der {{HTMLElement("body")}} oder der Wurzelknoten sein. Wenn es nicht abgefangen wird, [blubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) das Ereignis den [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) hinauf, bis es {{domxref("Document")}} erreicht.

Das Ereignisziel kann sich zwischen verschiedenen Tasten-Ereignissen ändern. Zum Beispiel wäre das `keydown`-Ziel für das Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
```

## Ereignistyp

Ein {{domxref("KeyboardEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tasten-Ereignis erzeugt wurde.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, auch wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge dem Benutzer anzeigen möchten, können Sie {{domxref("Keyboard.getLayoutMap()")}} verwenden.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tasten-Ereignis erzeugt wurde.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis repräsentierten Taste darstellt.
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten zur Identifizierung der Orte ist unter [Tastaturorte](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angegeben.
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tasten-Ereignis erzeugt wurde.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt wird, dass sie automatisch wiederholt wird.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tasten-Ereignis erzeugt wurde.

## Beispiele

### addEventListener keyup-Beispiel

Dieses Beispiel protokolliert den {{domxref("KeyboardEvent.code")}}-Wert, wann immer Sie eine Taste im {{HtmlElement("input")}}-Element loslassen.

```html
<input placeholder="Klicken Sie hier, dann drücken und lassen Sie eine Taste los." size="40" />
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

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup`-Ereignisse während der {{glossary("IME")}}-Zusammenstellung ausgelöst, um die Kompatibilität zwischen verschiedenen Browsern für CJKT-Nutzer zu verbessern ([Firefox bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse zu ignorieren, die Teil der Zusammenstellung sind, tun Sie etwas wie das folgende:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // etwas tun
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup`-Ereignisse keine speziellen {{domxref("KeyboardEvent/keyCode", "keyCode")}}-Werte für IME-Ereignisse. Allerdings kann wie bei `keydown` ein `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das das IME öffnet, und `compositionend` _vor_ `keyup`, wenn das letzte Zeichen eingetippt wird, das das IME schließt. In diesen Fällen ist `isComposing` false, auch wenn das Ereignis Teil der Zusammenstellung ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
