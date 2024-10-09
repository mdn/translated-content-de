---
title: "CharacterData: Methode replaceData()"
short-title: replaceData()
slug: Web/API/CharacterData/replaceData
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`replaceData()`** Methode des [`CharacterData`](/de/docs/Web/API/CharacterData) Interfaces entfernt eine bestimmte Anzahl von Zeichen des vorhandenen Textes in einem gegebenen `CharacterData`-Knoten und ersetzt diese Zeichen durch den bereitgestellten Text.

## Syntax

```js-nolint
characterData.replaceData(offset, count, data)
```

### Parameter

- `offset`
  - : Die Anzahl der Zeichen vom Beginn der Daten, bei denen eingesetzt wird.
    `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der Zeichen, die mit den bereitgestellten Daten ersetzt werden sollen.
- `data`
  - : Die einzufügenden Daten.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` oder `count` negativ ist oder `offset` größer als die Länge der enthaltenen Daten ist.

## Beispiel

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.replaceData(2, 4, "replaced");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
- [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
