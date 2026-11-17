---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

Die Funktion `substring-before` gibt den Teil einer Zeichenfolge zurück, der vor einer angegebenen Teilzeichenfolge steht.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Die zu untersuchende Zeichenfolge. Ein Teil dieser Zeichenfolge wird zurückgegeben.
- `needle`
  - : Die gesuchte Teilzeichenfolge. Zurückgegeben wird alles vor dem ersten Vorkommen von `needle` in `haystack`.

### Rückgabewert

Eine Zeichenfolge.

## Beispiele

| XPath-Beispiel                  | Ausgabe              |
| ------------------------------- | -------------------- |
| `substring-before('aa-bb','-')` | `aa`                 |
| `substring-before('aa-bb','a')` | `(empty string)`     |
| `substring-before('aa-bb','b')` | `aa-`                |
| `substring-before('aa-bb','q')` | (leere Zeichenfolge) |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-before)

## Gecko-Unterstützung

Unterstützt.
