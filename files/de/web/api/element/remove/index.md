---
title: "Element: Methode remove()"
short-title: remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`remove()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) entfernt das Element aus seinem übergeordneten Knoten. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von `remove()`

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id
```

### `Element.remove()` ist unscopable

Die Methode `remove()` wird nicht in den Gültigkeitsbereich einer `with`-Anweisung aufgenommen.
Weitere Informationen finden Sie unter {{jsxref("Symbol.unscopables")}}.

```js
with (node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.remove()`](/de/docs/Web/API/CharacterData/remove)
- [`DocumentType.remove()`](/de/docs/Web/API/DocumentType/remove)
