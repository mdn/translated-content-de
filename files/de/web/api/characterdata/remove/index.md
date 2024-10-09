---
title: "CharacterData: remove()-Methode"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode von [`CharacterData`](/de/docs/Web/API/CharacterData) entfernt den Text, der im Knoten enthalten ist.

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
