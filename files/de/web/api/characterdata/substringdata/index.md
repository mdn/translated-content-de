---
title: "CharacterData: substringData()-Methode"
short-title: substringData()
slug: Web/API/CharacterData/substringData
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`substringData()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle gibt einen Abschnitt der bestehenden Daten zurück, beginnend bei dem angegebenen Index und sich für eine bestimmte Anzahl von Zeichen danach erstreckend.

## Syntax

```js-nolint
substringData(offset, count)
```

### Parameter

- `offset`
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring enthalten sein soll. `0` ist das erste Zeichen des Strings.
- `count`
  - : Die Anzahl der Zeichen, die zurückgegeben werden sollen.

### Rückgabewert

Ein String mit dem Teilstring.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` + `count` größer ist als die Länge der enthaltenen Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
