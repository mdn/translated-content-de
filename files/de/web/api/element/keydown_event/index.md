---
title: "Element: keydown-Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Im Gegensatz zum veralteten {{domxref("Element/keypress_event", "keypress")}}-Ereignis wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie einen Zeichenwert erzeugen.

Die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse liefern einen Code, der anzeigt, welche Taste gedrückt wurde, während `keypress` anzeigt, welches Zeichen eingegeben wurde. Ein kleines "a" wird zum Beispiel als 65 durch `keydown` und `keyup` gemeldet, aber als 97 durch `keypress`. Ein großes "A" wird bei allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastenereignisses ist das aktuell fokussierte Element, das die Tastaturaktivität verarbeitet. Dies umfasst: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und alles andere, mit dem über die Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element im Fokus ist, ist das Ereignisziel der {{HTMLElement("body")}} oder das Root. Wenn das Ereignis nicht abgefangen wird, [blubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) es die [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) hinauf, bis es {{domxref("Document")}} erreicht.

Das Ereignisziel kann zwischen verschiedenen Tastenereignissen ändern. Zum Beispiel wäre das `keydown`-Ziel beim Drücken der <kbd>Tab</kbd>-Taste anders als das `keyup`-Ziel, da sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
```

## Ereignistyp

Ein {{domxref("KeyboardEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physikalischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (in der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" angeben würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge dem Benutzer anzeigen möchten, können Sie {{domxref("Keyboard.getLayoutMap()")}} verwenden.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und vor `compositionend` ausgelöst wird.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten zur Identifizierung der Orte ist unter [Tastaturorte](/de/docs/Web/API/KeyboardEvent#keyboard_locations) angezeigt.
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt gehalten wird, dass sie automatisch wiederholt wird.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis erzeugt wurde.

## Beispiele

### addEventListener keydown Beispiel

Dieses Beispiel protokolliert den {{domxref("KeyboardEvent.code")}}-Wert, wenn Sie eine Taste innerhalb des {{HtmlElement("input")}}-Elements drücken.

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

Seit Firefox 65 werden die `keydown`- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignisse nun während der {{glossary("IME")}}-Zusammensetzung ausgelöst, um die Kompatibilität zwischen verschiedenen Browsern für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse, die Teil der Zusammensetzung sind, zu ignorieren, tun Sie Folgendes (229 ist ein spezieller Wert, der für einen `keyCode` gesetzt wird, der sich auf ein Ereignis bezieht, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // tun Sie etwas
});
```

> **Note:** `compositionstart` kann _nach_ dem `keydown` ausgelöst werden, wenn der erste Charakter eingetippt wird, der das IME öffnet, und `compositionend` kann _vor_ dem `keydown` ausgelöst werden, wenn der letzte Charakter eingetippt wird, der das IME schließt. In diesen Fällen ist `isComposing` falsch, auch wenn das Ereignis Teil der Zusammensetzung ist. Dennoch ist {{domxref("KeyboardEvent.keyCode")}} in diesen Fällen weiterhin `229`, daher ist es ratsam, auch `keyCode` zu prüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
