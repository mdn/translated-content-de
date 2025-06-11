---
title: format-number
slug: Web/XML/XPath/Reference/Functions/format-number
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `format-number` bewertet eine Zahl und gibt eine Zeichenfolge zurück, die die Zahl in einem gegebenen Format darstellt.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameter

- `number`
  - : Die zu formatierende Zahl
- `pattern`
  - : Eine Zeichenfolge im Format der Java-Klasse [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).
- `decimalFormat` (optional)
  - : Der Name eines [`xsl:decimal-format`](/de/docs/Web/XML/XSLT/Reference/Element/decimal-format)-Elements, das das zu verwendende Zahlenformat definiert. Wenn es weggelassen wird, wird das Standarddezimalformat verwendet.

### Rückgabewert

Eine Zeichenfolge, die die Zahl im neuen Format darstellt.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.3](https://www.w3.org/TR/xslt-10/#function-format-number)

## Gecko-Unterstützung

Unterstützt.
