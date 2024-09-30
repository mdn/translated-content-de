---
title: "CharacterData: remove() Methode"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData) entfernt den im Knoten enthaltenen Text.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

## Beispiel

### Verwendung von `remove()`

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.remove(); // Removes the text
```

{{EmbedLiveSample("Beispiel", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
- [`DocumentType.remove()`](/de/docs/Web/API/DocumentType/remove)
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
