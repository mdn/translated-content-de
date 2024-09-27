---
title: "CharacterData: deleteData() Methode"
short-title: deleteData()
slug: Web/API/CharacterData/deleteData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`deleteData()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle
entfernt alle oder einen Teil der Daten aus diesem `CharacterData`-Knoten.

## Syntax

```js-nolint
characterData.deleteData(offset, count)
```

### Parameter

- `offset`
  - : Die Anzahl der Bytes, von denen aus die Daten entfernt werden sollen, beginnend bei `0`, was dem ersten Zeichen der Zeichenkette entspricht.
- `count`
  - : Die Anzahl der zu entfernenden Bytes.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` größer als die Länge der enthaltenen Daten ist.

## Beispiel

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.deleteData(1, 5);
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData), [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
