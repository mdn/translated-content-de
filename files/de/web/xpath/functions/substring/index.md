---
title: Teilzeichenfolge
slug: Web/XPath/Functions/substring
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `substring` gibt einen Teil eines gegebenen Strings zurück.

## Syntax

```plain
substring(string, start)
substring(string, start, length)
```

### Parameter

- `string`
  - : Der zu evaluierende String.
- `start`
  - : Die Position innerhalb des `string`, an der die Teilzeichenfolge beginnt.
- `length` {{optional_inline}}
  - : Die Länge der Teilzeichenfolge.
    Wenn weggelassen, enthält der zurückgegebene String alle Zeichen von der Position `start` bis zum Ende des `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen beginnt die Position nicht bei null. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko-Unterstützung

Unterstützt.
