---
title: "Element: remove() Methode"
short-title: remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: 04abc9f51d485a5ad2c4c59bdd1511464d14e78f
---

{{APIRef("DOM")}}

Die **`Element.remove()`** Methode entfernt das Element von seinem übergeordneten Knoten.
Wenn es keinen übergeordneten Knoten hat, bewirkt der Aufruf von `remove()` nichts.

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

Die `remove()` Methode wird nicht in die `with` Anweisung einbezogen.
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
