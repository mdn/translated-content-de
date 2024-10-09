---
title: "CharacterData: appendData() Methode"
short-title: appendData()
slug: Web/API/CharacterData/appendData
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`appendData()`** Methode des [`CharacterData`](/de/docs/Web/API/CharacterData) Interfaces fügt die angegebenen Daten am Ende der aktuellen Daten des Knotens hinzu.

## Syntax

```js-nolint
appendData(data)
```

### Parameter

- `data`
  - : Die Daten, die dem aktuellen Knoten hinzugefügt werden sollen.

### Rückgabewert

Keiner.

## Beispiel

```html
<span>Result: </span>A text
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.appendData(" - appended text.");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData), [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
