---
title: "CharacterData: Methode deleteData()"
short-title: deleteData()
slug: Web/API/CharacterData/deleteData
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`deleteData()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces entfernt alle oder einen Teil der Daten aus diesem `CharacterData`-Knoten.

## Syntax

```js-nolint
characterData.deleteData(offset, count)
```

### Parameter

- `offset`
  - : Die Anzahl der Bytes vom Beginn der Daten, ab denen entfernt werden soll. `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der zu entfernenden Bytes.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` größer ist als die Länge der enthaltenen Daten.

## Beispiel

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.deleteData(1, 5);
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData), [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
