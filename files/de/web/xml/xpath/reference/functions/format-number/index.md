---
title: format-number
slug: Web/XML/XPath/Reference/Functions/format-number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `format-number` bewertet eine Zahl und gibt eine Zeichenkette zurück, die die Zahl in einem bestimmten Format darstellt.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameter

- `number`
  - : Die zu formatierende Zahl.
- `pattern`
  - : Eine Zeichenkette im Format der Java-[DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)-Klasse.
- `decimalFormat` (optional)
  - : Der Name eines [`xsl:decimal-format`](/de/docs/Web/XML/XSLT/Reference/Element/decimal-format)-Elements, das das zu verwendende Zahlenformat definiert. Wenn nichts angegeben wird, wird das Standard-Decimal-Format verwendet.

### Rückgabewert

Eine Zeichenkette, die die Zahl im neuen Format darstellt.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist kein Bestandteil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

## Gecko-Unterstützung

Unterstützt.
