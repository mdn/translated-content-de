---
title: contains
slug: Web/XPath/Functions/contains
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `contains` ermittelt, ob der erste Argumentstring den zweiten Argumentstring enthält, und gibt boolean true oder false zurück.

## Syntax

```plain
contains(haystack, needle)
```

### Parameter

- `haystack`
  - : Der String, der durchsucht werden soll
- `needle`
  - : Der String, der als Teilstring von `haystack` gesucht wird

### Rückgabewert

`true`, wenn `haystack` `needle` enthält. Andernfalls `false`.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-contains)

## Gecko-Unterstützung

Unterstützt.
