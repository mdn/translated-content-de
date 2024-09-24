---
title: format-number
slug: Web/XPath/Functions/format-number
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `format-number` wertet eine Zahl aus und gibt eine Zeichenkette zurück, die die Zahl in einem gegebenen Format darstellt.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameter

- `number`
  - : Die zu formatierende Zahl
- `pattern`
  - : Eine Zeichenkette im Format der Java-Klasse [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).
- `decimalFormat` (optional)
  - : Der Name eines [`xsl:decimal-format`](/de/docs/Web/XSLT/Element/decimal-format)-Elements, das das zu verwendende Zahlenformat definiert. Wenn weggelassen, wird das Standard-Decimal-Format verwendet.

### Rückgabewert

Eine Zeichenkette, die die Zahl im neuen Format darstellt.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie gehört nicht zur Kernbibliothek der XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

## Gecko-Unterstützung

Unterstützt.
