---
title: "CharacterData: insertData()-Methode"
short-title: insertData()
slug: Web/API/CharacterData/insertData
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`insertData()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle fügt die bereitgestellten Daten in die aktuellen Daten dieses `CharacterData`-Nodes ein, und zwar an der angegebenen Position ab dem Beginn der vorhandenen Daten. Die bereitgestellten Daten werden in die vorhandenen Daten eingefügt.

## Syntax

```js-nolint
characterData.insertData(offset, data)
```

### Parameter

- `offset`
  - : Die Offset-Anzahl der Zeichen, bei der die bereitgestellten Daten eingefügt werden sollen. `0` ist das erste Zeichen der Zeichenkette.
- `data`
  - : Die einzufügenden Daten.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Offset negativ oder größer ist als die Länge der enthaltenen Daten.

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
