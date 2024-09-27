---
title: "AbstractRange: startOffset-Eigenschaft"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

Die schreibgeschützte **`startOffset`**-Eigenschaft der [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Schnittstelle gibt den Versatz in den Startknoten der Startposition der Range zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen in dem von [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) angegebenen [`Node`](/de/docs/Web/API/Node) angibt, an der sich das erste Zeichen des Bereichs befindet.

## Beispiel

```js
let startOffset = range.startOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
