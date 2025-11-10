---
title: "Dokument: createRange()-Methode"
short-title: createRange()
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 1abe075be40cd938aa9131a42b4e03b21b78627c
---

{{APIRef("DOM")}}

Die **`Document.createRange()`**-Methode gibt ein neues [`Range`](/de/docs/Web/API/Range)-Objekt zurück, dessen Start und Ende Versatz 0 des [`Document`](/de/docs/Web/API/Document)-Objekts sind, auf dem sie aufgerufen wurde.

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

## Anmerkungen

Sobald ein `Range` erstellt wurde, müssen Sie dessen Begrenzungspunkte festlegen, bevor Sie die meisten seiner Methoden nutzen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
