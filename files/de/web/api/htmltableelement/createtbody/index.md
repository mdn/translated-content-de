---
title: "HTMLTableElement: Methode createTBody()"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTBody()`** Methode von
{{domxref("HTMLTableElement")}} Objekten erstellt und gibt ein neues
{{HTMLElement("tbody")}} Element zurück, das mit einem gegebenen {{HtmlElement("table")}} verknüpft ist.

> [!NOTE]
> Im Gegensatz zu {{domxref("HTMLTableElement.createTHead()")}} und
> {{domxref("HTMLTableElement.createTFoot()")}} erstellt `createTBody()`
> systematisch ein neues `<tbody>` Element, auch wenn die Tabelle bereits einen oder mehrere Körper enthält. Falls dies der Fall ist, wird das neue nach den bereits vorhandenen eingefügt.

## Syntax

```js-nolint
createTBody()
```

### Parameter

Keine.

### Rückgabewert

{{domxref("HTMLTableSectionElement")}}

## Beispiele

```js
let mybody = mytable.createTBody();
// Jetzt sollte dies wahr sein: mybody === mytable.tBodies.item(mytable.tBodies.length - 1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
