---
title: "CharacterData: replaceData() Methode"
short-title: replaceData()
slug: Web/API/CharacterData/replaceData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`replaceData()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces entfernt eine bestimmte Anzahl von Zeichen des bestehenden Textes in einem gegebenen `CharacterData`-Knoten und ersetzt diese Zeichen durch den angegebenen Text.

## Syntax

```js-nolint
characterData.replaceData(offset, count, data)
```

### Parameter

- `offset`
  - : Die Anzahl der Zeichen vom Anfang der Daten, an denen eingefügt werden soll.
    `0` ist das erste Zeichen der Zeichenkette.
- `count`
  - : Die Anzahl der Zeichen, die durch die bereitgestellten Daten ersetzt werden sollen.
- `data`
  - : Die einzufügenden Daten.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` oder `count` negativ ist oder `offset` größer ist als die Länge der enthaltenen Daten.

## Beispiel

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.replaceData(2, 4, "replaced");
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
