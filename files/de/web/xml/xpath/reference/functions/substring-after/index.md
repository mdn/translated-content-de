---
title: substring-after
slug: Web/XML/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

Die Funktion `substring-after` gibt den Teil einer Zeichenfolge zurück, der auf eine angegebene Teilzeichenfolge folgt.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Die auszuwertende Zeichenfolge. Ein Teil davon wird zurückgegeben.
- `needle`
  - : Die Teilzeichenfolge, nach der gesucht wird. Zurückgegeben wird alles, was in `haystack` auf das erste Vorkommen von `needle` folgt.

### Rückgabewert

Eine Zeichenfolge.

## Beispiele

| XPath-Beispiel                 | Ausgabe              |
| ------------------------------ | -------------------- |
| `substring-after('aa-bb','-')` | `bb`                 |
| `substring-after('aa-bb','a')` | `a-bb`               |
| `substring-after('aa-bb','b')` | `b`                  |
| `substring-after('aa-bb','q')` | (leere Zeichenfolge) |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-after)

## Gecko-Unterstützung

Unterstützt.
