---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
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
  - : Die Position innerhalb von `string`, an der der Teilstring beginnt.
- `length` {{optional_inline}}
  - : Die Länge des Teilstrings. Wenn dieser weggelassen wird, enthält der zurückgegebene String jedes Zeichen von der `start`-Position bis zum Ende von `string`.

### Rückgabewert

Ein String.

## Beschreibung

Wie bei anderen XPath-Funktionen beginnt die Position nicht bei null. Das erste Zeichen im String hat die Position 1, nicht 0.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring)

## Gecko-Unterstützung

Unterstützt.
