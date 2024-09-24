---
title: name
slug: Web/XPath/Functions/name
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `name` gibt einen String zurück, der den QName des ersten Knotens in einer angegebenen Knotenmenge darstellt.

## Syntax

```plain
name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der QName des ersten Knotens in dieser Knotenmenge wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den QName eines Knotens darstellt.

## Beschreibung

- Der [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) ist der qualifizierte Name des Knotens, einschließlich seines Namensraum-Präfixes und seines lokalen Namens.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
