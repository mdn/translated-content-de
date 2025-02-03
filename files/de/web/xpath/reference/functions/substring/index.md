---
title: substring
slug: Web/XPath/Reference/Functions/substring
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
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
  - : Die Position innerhalb des `string`, an der der Teilstring beginnt
- `length` {{optional_inline}}
  - : Die Länge des Teilstrings.
    Wenn weggelassen, enthält der zurückgegebene String jeden Charakter von der `start`-Position bis zum Ende des `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen ist die Position nicht nullbasiert. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring)

## Gecko-Unterstützung

Unterstützt.
