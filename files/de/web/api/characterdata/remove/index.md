---
title: "CharacterData: Methode remove()"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`remove()`** der Schnittstelle [`CharacterData`](/de/docs/Web/API/CharacterData) entfernt den `CharacterData`-Knoten aus seinem Elternknoten. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiel

### `remove()` verwenden

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
