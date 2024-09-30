---
title: substring
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
  - : Der zu bewertende String.
- `start`
  - : Die Position innerhalb von `string`, an der der Substring beginnt.
- `length` {{optional_inline}}
  - : Die Länge des Substrings. Wenn ausgelassen, enthält der zurückgegebene String jedes Zeichen von der `start`-Position bis zum Ende des `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen ist die Position nicht null-basiert. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko-Kompatibilität

Unterstützt.
