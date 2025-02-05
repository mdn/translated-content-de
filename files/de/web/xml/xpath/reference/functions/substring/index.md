---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `substring` gibt einen Teil eines gegebenen Strings zurück.

## Syntax

```plain
substring(string, start)
substring(string, start, length)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `start`
  - : Die Position innerhalb von `string`, an der der Substring beginnt.
- `length` {{optional_inline}}
  - : Die Länge des Substrings.
    Wenn dieser Parameter weggelassen wird, enthält der zurückgegebene String alle Zeichen von der Position `start` bis zum Ende von `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen ist die Position nicht nullbasiert. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko-Unterstützung

Unterstützt.
