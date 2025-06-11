---
title: string
slug: Web/XML/XPath/Reference/Functions/string
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `string` Funktion konvertiert das gegebene Argument in einen String.

## Syntax

```plain
string( [object] )
```

### Parameter

- `object` (optional)
  - : Das Objekt, das in einen String konvertiert werden soll. Wenn es weggelassen wird, wird der Kontextknoten verwendet.

### Rückgabewert

Ein String

## Beschreibung

- Wenn das Objekt eine Knotenmenge ist, wird der String-Wert des ersten Knotens in der Menge zurückgegeben.
- Eine Zahl wird wie folgt konvertiert:

  - NaN wird in den String NaN konvertiert.
  - Positive Null wird in den String 0 konvertiert.
  - Negative Null wird in den String 0 konvertiert.
  - Positive Unendlichkeit wird in den String Infinity konvertiert.
  - Negative Unendlichkeit wird in den String -Infinity konvertiert.
  - Dezimalzahlen zwischen -1 und 1 werden in einen String mit einer einzigen führenden 0 vor dem Dezimalpunkt konvertiert.
  - Boolean true wird in den String true konvertiert.
  - Boolean false wird in den String false konvertiert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-string)

## Gecko-Unterstützung

Unterstützt.
