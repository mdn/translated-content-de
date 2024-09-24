---
title: "CharacterData: Methode deleteData()"
short-title: deleteData()
slug: Web/API/CharacterData/deleteData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`deleteData()`** Methode des {{domxref("CharacterData")}}-Interfaces entfernt alle oder einen Teil der Daten von diesem `CharacterData`-Knoten.

## Syntax

```js-nolint
characterData.deleteData(offset, count)
```

### Parameter

- `offset`
  - : Die Anzahl der Bytes vom Anfang der Daten, ab denen entfernt werden soll.
    `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der zu entfernenden Bytes.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `offset` größer als die Länge der enthaltenen Daten ist.

## Beispiel

```html
<span>Ergebnis: </span>A long string.
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

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
