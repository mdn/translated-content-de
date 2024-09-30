---
title: generate-id
slug: Web/XPath/Functions/generate-id
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `generate-id` erzeugt eine eindeutige ID für den ersten Knoten in einer angegebenen Knotenmenge und gibt einen String zurück, der diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in dieser Knotenmenge erzeugt. Wenn der Parameter weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der die generierte ID enthält.

## Beschreibung

- Für denselben Knoten im aktuellen Dokument während der aktuellen Transformation muss jedes Mal dieselbe ID generiert werden.
- Die generierte ID ist in nachfolgenden Transformationen möglicherweise nicht dieselbe.

Diese Funktion ist eine spezifische Ergänzung zu XPath in XSLT. Sie ist nicht Teil der grundlegenden XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Browser-Kompatibilität

Unterstützt.
