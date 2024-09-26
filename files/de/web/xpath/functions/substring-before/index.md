---
title: substring-before
slug: Web/XPath/Functions/substring-before
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `substring-before` gibt eine Zeichenkette zurück, die der Teil einer gegebenen Zeichenkette vor einem gegebenen Teilstring ist.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Die Zeichenkette, die ausgewertet werden soll. Ein Teil dieser Zeichenkette wird zurückgegeben.
- `needle`
  - : Der zu suchende Teilstring. Alles vor dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Eine Zeichenkette.

### Beispiele

| XPath-Beispiel                  | Ausgabe          |
| ------------------------------- | ---------------- |
| `substring-before('aa-bb','-')` | `aa`             |
| `substring-before('aa-bb','a')` | `(leere Zeichenkette)` |
| `substring-before('aa-bb','b')` | `aa-`            |
| `substring-before('aa-bb','q')` | (leere Zeichenkette)   |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-before)

## Gecko-Unterstützung

Unterstützt.