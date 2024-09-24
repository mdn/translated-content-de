---
title: "CharacterData: Methode insertData()"
short-title: insertData()
slug: Web/API/CharacterData/insertData
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("DOM")}}

Die **`insertData()`**-Methode der {{domxref("CharacterData")}}-Schnittstelle
fügt die bereitgestellten Daten in die aktuellen Daten dieses `CharacterData`-Knotens ein,
an der angegebenen Position vom Beginn der vorhandenen Daten.
Die bereitgestellten Daten werden in die vorhandenen Daten eingefügt.

## Syntax

```js-nolint
characterData.insertData(offset, data)
```

### Parameter

- `offset`
  - : Der Offset, an dem die bereitgestellten Daten eingefügt werden sollen.
    `0` ist das erste Zeichen des Strings.
- `data`
  - : Die einzufügenden Daten.

### Rückgabewert

Keiner.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
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

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
