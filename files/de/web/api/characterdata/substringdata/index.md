---
title: "CharacterData: Methode substringData()"
short-title: substringData()
slug: Web/API/CharacterData/substringData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`substringData()`** Methode des {{domxref("CharacterData")}} Interface
gibt einen Teil der vorhandenen Daten zurück,
beginnend bei der angegebenen Indexposition
und erstreckt sich über eine bestimmte Anzahl von Zeichen danach.

## Syntax

```js-nolint
  domString = characterData.substringData(offset, count)
```

### Parameter

- `offset`
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring enthalten sein soll.
    `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der zurückzugebenden Zeichen.

### Rückgabewert

Ein String mit dem Teilstring.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `offset` + `count` größer ist als die Länge der enthaltenen Daten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
