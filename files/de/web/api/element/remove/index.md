---
title: "Element: remove()-Methode"
short-title: remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.remove()`**-Methode entfernt das Element aus dem DOM.

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
<div id="div-01">Hier ist div-01</div>
<div id="div-02">Hier ist div-02</div>
<div id="div-03">Hier ist div-03</div>
```

```js
const element = document.getElementById("div-02");
element.remove(); // Entfernt das div mit der ID 'div-02'
```

### `Element.remove()` ist nicht umschließbar

Die `remove()`-Methode ist nicht in der `with`-Anweisung eingeschlossen.
Siehe {{jsxref("Symbol.unscopables")}} für weitere Informationen.

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

- {{domxref("CharacterData.remove()")}}
- {{domxref("DocumentType.remove()")}}
