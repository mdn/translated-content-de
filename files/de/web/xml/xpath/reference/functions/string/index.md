---
title: string
slug: Web/XML/XPath/Reference/Functions/string
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die `string`-Funktion konvertiert das angegebene Argument in einen String.

## Syntax

```plain
string( [object] )
```

### Parameter

- `object` (optional)
  - : Das Objekt, das in einen String konvertiert werden soll. Wenn weggelassen, wird der Kontextknoten verwendet.

### Rückgabewert

Ein String

## Beschreibung

- Wenn das Objekt eine Node-Set ist, wird der Stringwert des ersten Knotens im Set zurückgegeben.
- Eine Zahl wird wie folgt konvertiert:

  - NaN wird in den String NaN konvertiert.
  - Positive Null wird in den String 0 konvertiert.
  - Negative Null wird in den String 0 konvertiert.
  - Positive Unendlichkeit wird in den String Infinity konvertiert.
  - Negative Unendlichkeit wird in den String -Infinity konvertiert.
  - Dezimalzahlen zwischen -1 und 1 werden in einen String mit einer führenden 0 vor dem Dezimalpunkt konvertiert.
  - Boolean true wird in den String true konvertiert.
  - Boolean false wird in den String false konvertiert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-string)

## Gecko-Unterstützung

Unterstützt.
