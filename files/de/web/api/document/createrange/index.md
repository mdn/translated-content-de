---
title: "Document: createRange()-Methode"
short-title: createRange()
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 73016bea54a98f70dc2aaad0724d0d421ef9839c
---

{{APIRef("DOM")}}

Die **`Document.createRange()`**-Methode gibt ein neues
[`Range`](/de/docs/Web/API/Range)-Objekt zurück.

## Syntax

```js-nolint
createRange()
```

### Parameter

Keine.

### Rückgabewert

Das erstellte [`Range`](/de/docs/Web/API/Range)-Objekt.

## Beispiele

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Hinweise

Sobald ein `Range` erstellt ist, müssen Sie seine Begrenzungspunkte festlegen, bevor Sie die meisten seiner Methoden nutzen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
