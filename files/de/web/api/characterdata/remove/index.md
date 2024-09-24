---
title: "CharacterData: remove()-Methode"
short-title: remove()
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`remove()`**-Methode von {{domxref("CharacterData")}} entfernt den im Knoten enthaltenen Text.

## Syntax

```js-nolint
remove()
```

### Parameter

Keine.

## Beispiel

### Verwendung von `remove()`

```html
<span>Resultat: </span>Ein langer Text.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.remove(); // Entfernt den Text
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.deleteData()")}}
- {{domxref("DocumentType.remove()")}}
- {{domxref("Element.remove()")}}
