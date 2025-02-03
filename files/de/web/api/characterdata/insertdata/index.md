---
title: "CharacterData: insertData()-Methode"
short-title: insertData()
slug: Web/API/CharacterData/insertData
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`insertData()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle fügt die bereitgestellten Daten in die aktuellen Daten dieses `CharacterData`-Knotens ein, und zwar am angegebenen Versatz ab dem Beginn der bestehenden Daten. Die bereitgestellten Daten werden in die bestehenden Daten eingefügt.

## Syntax

```js-nolint
insertData(offset, data)
```

### Parameter

- `offset`
  - : Die Versatzanzahl der Zeichen, an der die bereitgestellten Daten eingefügt werden sollen. `0` ist das erste Zeichen der Zeichenkette.
- `data`
  - : Die Daten, die eingefügt werden sollen.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Versatz negativ oder größer als die Länge der enthaltenen Daten ist.

## Beispiel

```html
<span>Result: </span>A string.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.insertData(2, "long ");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData), [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
