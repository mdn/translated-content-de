---
title: substring
slug: Web/XPath/Functions/substring
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

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
  - : Die Position innerhalb des `string`, an der der Substring beginnt.
- `length` {{optional_inline}}
  - : Die Länge des Substrings. Wenn weggelassen, enthält der zurückgegebene String alle Zeichen von der `start`-Position bis zum Ende des `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen basiert die Position nicht auf null. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko-Unterstützung

Unterstützt.
