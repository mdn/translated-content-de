---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `substring-before` gibt eine Zeichenkette zurück, die der Teil einer gegebenen Zeichenkette vor einer angegebenen Teilzeichenkette ist.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Die zu evaluierende Zeichenkette. Ein Teil dieser Zeichenkette wird zurückgegeben.
- `needle`
  - : Die zu suchende Teilzeichenkette. Alles vor dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Eine Zeichenkette.

### Beispiele

| XPath-Beispiel                  | Ausgabe                |
| ------------------------------- | ---------------------- |
| `substring-before('aa-bb','-')` | `aa`                   |
| `substring-before('aa-bb','a')` | `(leere Zeichenkette)` |
| `substring-before('aa-bb','b')` | `aa-`                  |
| `substring-before('aa-bb','q')` | (leere Zeichenkette)   |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-before)

## Gecko-Unterstützung

Unterstützt.
