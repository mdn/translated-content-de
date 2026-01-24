---
title: "AbstractRange: startOffset-Eigenschaft"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die schreibgeschützte **`startOffset`**-Eigenschaft des [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Interfaces gibt den Versatz in den Startknoten der Startposition der Range zurück.

Um die Startposition zu ändern, verwenden Sie die Methode [`Range.setStart()`](/de/docs/Web/API/Range/setStart) oder eine ähnliche Methode.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen im [`Node`](/de/docs/Web/API/Node) angibt, die durch [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) angezeigt wird, an der sich das erste Zeichen der Range befindet.

Wenn der `startContainer` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist der Versatz die Anzahl der Zeichen vom Anfang des `startContainer` bis zum Grenzpunkt der Range. Für andere [`Node`](/de/docs/Web/API/Node)-Typen ist der `startOffset` die Anzahl der Kindknoten zwischen dem Anfang des `startContainer` und dem Grenzpunkt der Range.

## Beispiel

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeOffset = range.startOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
