---
title: "CharacterData: Methode appendData()"
short-title: appendData()
slug: Web/API/CharacterData/appendData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die **`appendData()`** Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle
fügt die bereitgestellten Daten am Ende der aktuellen Daten des Knotens hinzu.

## Syntax

```js-nolint
appendData(data)
```

### Parameter

- `data`
  - : Die Daten, die an den aktuellen Knoten angehängt werden sollen.

### Rückgabewert

Keiner.

## Beispiel

```html
<span>Result: </span>A text
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.appendData(" - appended text.");
```

{{EmbedLiveSample("Beispiel", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData), [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData), [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
