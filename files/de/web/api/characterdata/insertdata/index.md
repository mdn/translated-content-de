---
title: "CharacterData: Methode insertData()"
short-title: insertData()
slug: Web/API/CharacterData/insertData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`insertData()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces
fügt die bereitgestellten Daten in die aktuellen Daten dieses `CharacterData`-Knotens ein,
an dem angegebenen Offset ab dem Anfang der vorhandenen Daten.
Die bereitgestellten Daten werden in die vorhandenen Daten eingefügt.

## Syntax

```js-nolint
characterData.insertData(offset, data)
```

### Parameter

- `offset`
  - : Die Anzahl der Zeichen, an denen die bereitgestellten Daten eingesetzt werden sollen.
    `0` ist das erste Zeichen der Zeichenkette.
- `data`
  - : Die einzufügenden Daten.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Offset negativ oder größer als die Länge der enthaltenen Daten ist.

## Beispiel

```html
<span>Result: </span>A string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.insertData(2, "long ");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData), [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
