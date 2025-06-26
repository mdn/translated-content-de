---
title: "CharacterData: `remove()`-Methode"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData) entfernt den Text, der im Knoten enthalten ist.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
