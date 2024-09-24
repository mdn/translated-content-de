---
title: generieren-id
slug: Web/XPath/Functions/generate-id
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `generate-id` erzeugt eine eindeutige ID für den ersten Knoten in einem gegebenen Knoten-Set und gibt eine Zeichenkette zurück, die diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in diesem Knoten-Set erzeugt. Wenn dieser weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette, die die generierte ID enthält.

## Beschreibung

- Für denselben Knoten im aktuellen Dokument während der aktuellen Transformation muss immer dieselbe ID erzeugt werden.
- Die generierte ID kann in nachfolgenden Transformationen unterschiedlich sein.

Diese Funktion ist eine XSLT-spezifische Erweiterung zu XPath. Sie ist kein Teil der Kern-XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko-Unterstützung

Unterstützt.
