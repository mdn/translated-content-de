---
title: generate-id
slug: Web/XML/XPath/Reference/Functions/generate-id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `generate-id` generiert eine eindeutige ID für den ersten Knoten in einer angegebenen Knotenmenge und gibt eine Zeichenkette zurück, die diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in dieser Knotenmenge generiert. Falls weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette, die die generierte ID enthält.

## Beschreibung

- Für denselben Knoten im aktuellen Dokument und in der aktuellen Transformation muss immer dieselbe ID generiert werden.
- Die generierte ID kann bei folgenden Transformationen unterschiedlich sein.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Bestandteil der Kernfunktionsbibliothek von XPath.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko-Unterstützung

Unterstützt.
