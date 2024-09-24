---
title: "CharacterData: appendData()-Methode"
short-title: appendData()
slug: Web/API/CharacterData/appendData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die **`appendData()`**-Methode der {{domxref("CharacterData")}}-Schnittstelle
fügt die bereitgestellten Daten am Ende der aktuellen Daten des Knotens hinzu.

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
const textnode = span.nextSibling;

textnode.appendData(" - appended text.");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
