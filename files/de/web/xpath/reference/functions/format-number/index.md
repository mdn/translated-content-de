---
title: format-number
slug: Web/XPath/Reference/Functions/format-number
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `format-number` wertet eine Zahl aus und gibt einen String zurück, der die Zahl in einem bestimmten Format darstellt.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameter

- `number`
  - : Die Zahl, die formatiert werden soll
- `pattern`
  - : Ein String im Format der Java-Klasse [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).
- `decimalFormat` (optional)
  - : Der Name eines [`xsl:decimal-format`](/de/docs/Web/XSLT/Reference/Element/decimal-format) Elements, das das zu verwendende Zahlenformat definiert. Wenn nicht angegeben, wird das Standard-Decimal-Format verwendet.

### Rückgabewert

Ein String, der die Zahl im neuen Format darstellt.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung für XPath. Sie ist kein Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

## Gecko-Unterstützung

Unterstützt.
