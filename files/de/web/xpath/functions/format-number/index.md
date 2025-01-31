---
title: format-number
slug: Web/XPath/Functions/format-number
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `format-number` Funktion wertet eine Zahl aus und gibt eine Zeichenfolge zurück, die die Zahl in einem bestimmten Format darstellt.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameter

- `number`
  - : Die zu formatierende Zahl
- `pattern`
  - : Eine Zeichenfolge im Format der Java [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) Klasse.
- `decimalFormat` (optional)
  - : Der Name eines [`xsl:decimal-format`](/de/docs/Web/XSLT/Reference/Element/decimal-format) Elements, das das zu verwendende Zahlenformat definiert. Wenn weggelassen, wird das Standarddezimalformat verwendet.

### Rückgabewert

Eine Zeichenfolge, die die Zahl im neuen Format darstellt.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Bestandteil der Kernfunktionen-Bibliothek von XPath.

## Spezifikationen

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

## Gecko-Unterstützung

Unterstützt.
