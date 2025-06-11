---
title: generate-id
slug: Web/XML/XPath/Reference/Functions/generate-id
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `generate-id` erzeugt eine eindeutige ID für den ersten Knoten in einer gegebenen Knotenmenge und gibt einen String mit dieser ID zurück.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in dieser Knotenmenge generiert. Wird er weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der die generierte ID enthält.

## Beschreibung

- Für denselben Knoten im aktuellen Dokument innerhalb der aktuellen Transformation muss immer dieselbe ID generiert werden.
- Die generierte ID kann in nachfolgenden Transformationen unterschiedlich sein.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-generate-id)

## Unterstützung in Gecko

Unterstützt.
