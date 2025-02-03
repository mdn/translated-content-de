---
title: "CharacterData: Methode deleteData()"
short-title: deleteData()
slug: Web/API/CharacterData/deleteData
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`deleteData()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle
entfernt alle oder einen Teil der Daten aus diesem `CharacterData`-Knoten.

## Syntax

```js-nolint
deleteData(offset, count)
```

### Parameter

- `offset`
  - : Die Anzahl der Bytes, die vom Beginn der Daten entfernt werden sollen.
    `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der Bytes, die entfernt werden sollen.

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
