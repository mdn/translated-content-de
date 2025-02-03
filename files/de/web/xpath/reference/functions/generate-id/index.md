---
title: generate-id
slug: Web/XPath/Reference/Functions/generate-id
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `generate-id` Funktion erzeugt eine eindeutige ID für den ersten Knoten in einer gegebenen Knotenmenge und gibt einen String zurück, der diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in dieser Knotenmenge erzeugt. Wenn weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der die erzeugte ID enthält.

## Beschreibung

- Dieselbe ID muss jedes Mal für denselben Knoten im aktuellen Dokument in der aktuellen Transformation erzeugt werden.
- Die erzeugte ID ist möglicherweise nicht dieselbe in nachfolgenden Transformationen.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko-Unterstützung

Unterstützt.
