---
title: generate-id
slug: Web/XPath/Functions/generate-id
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `generate-id` erzeugt eine eindeutige ID für den ersten Knoten in einer angegebenen Knotenmenge und gibt eine Zeichenkette zurück, die diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in dieser Knotenmenge generiert. Wird dieser Parameter weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette, die die generierte ID enthält.

## Beschreibung

- Für denselben Knoten im aktuellen Dokument und in der aktuellen Transformation muss jedes Mal dieselbe ID generiert werden.
- Die generierte ID kann bei nachfolgenden Transformationen unterschiedlich sein.

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko-Unterstützung

Unterstützt.
