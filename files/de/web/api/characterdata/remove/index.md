---
title: "CharacterData: remove() Methode"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: 04abc9f51d485a5ad2c4c59bdd1511464d14e78f
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode von [`CharacterData`](/de/docs/Web/API/CharacterData) entfernt das Element von seinem Elternknoten. Wenn es keinen Elternknoten hat, bewirkt ein Aufruf von `remove()` nichts.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiel

### Verwendung von `remove()`

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.remove(); // Removes the text
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
- [`DocumentType.remove()`](/de/docs/Web/API/DocumentType/remove)
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
