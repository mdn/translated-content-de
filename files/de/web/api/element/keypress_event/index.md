---
title: "Element: keypress-Ereignis"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}} {{deprecated_header}}

Das **`keypress`**-Ereignis wird ausgelöst, wenn eine Taste, die einen Zeichenwert erzeugt, gedrückt wird.

Beispiele für Tasten, die einen Zeichenwert erzeugen, sind alphabetische, numerische und Satzzeichen-Tasten. Beispiele für Tasten, die keinen Zeichenwert erzeugen, sind Modifikator-Tasten wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Strg</kbd> oder <kbd>Meta</kbd>.

> [!WARNING]
> Da dieses Ereignis veraltet ist, sollten Sie stattdessen [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) oder [`keydown`](/de/docs/Web/API/Element/keydown_event) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keypress", (event) => {});

onkeypress = (event) => {};
```

## Ereignistyp

Ein {{domxref("KeyboardEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer übergeordneten Schnittstellen, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die das Ereignis repräsentiert.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Strg</kbd> Taste aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der Taste repräsentiert, die das Ereignis repräsentiert.
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, finden Sie unter [Tastaturpositionen](/de/docs/Web/API/KeyboardEvent#keyboard_locations).
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd> Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis erzeugt wurde.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so lange gedrückt gehalten wird, dass sie automatisch wiederholt wird.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd> Taste aktiv war, als das Tastenereignis erzeugt wurde.

## Beispiele

### addEventListener keypress Beispiel

Dieses Beispiel protokolliert den {{domxref("KeyboardEvent.code")}} Wert, immer wenn Sie nach dem Fokussieren des {{htmlelement("input")}}-Elements eine Taste drücken.

```html
<div>
  <label for="sample">Fokussieren Sie das Eingabefeld und tippen Sie etwas:</label>
  <input type="text" name="text" id="sample" />
</div>
<p id="log"></p>
```

```js
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_example")}}

### onkeypress Äquivalent

```js
input.onkeypress = logKey;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Document")}}-Schnittstelle, die das Ereignis auch anvisiert.
- Verwandte Ereignisse:

  - [`input`](/de/docs/Web/API/Element/input_event)
  - [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - [`keyup`](/de/docs/Web/API/Element/keyup_event)
