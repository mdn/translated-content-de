---
title: "CharacterData: replaceData()-Methode"
short-title: replaceData()
slug: Web/API/CharacterData/replaceData
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`replaceData()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces entfernt eine bestimmte Anzahl von Zeichen des vorhandenen Texts in einem gegebenen `CharacterData`-Knoten und ersetzt diese Zeichen mit dem bereitgestellten Text.

## Syntax

```js-nolint
replaceData(offset, count, data)
```

### Parameter

- `offset`
  - : Die Anzahl der Zeichen ab dem Beginn der Daten, an denen eingefügt werden soll.
    `0` ist das erste Zeichen der Zeichenkette.
- `count`
  - : Die Anzahl der Zeichen, die durch die bereitgestellten Daten ersetzt werden sollen.
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
