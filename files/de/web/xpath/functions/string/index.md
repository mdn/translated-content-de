---
title: string
slug: Web/XPath/Functions/string
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `string` konvertiert das angegebene Argument in einen String.

## Syntax

```plain
string( [object] )
```

### Parameter

- `object` (optional)
  - : Das Objekt, das in einen String konvertiert werden soll. Falls nicht angegeben, wird der Kontextknoten verwendet.

### Rückgabewert

Ein String

## Beschreibung

- Wenn das Objekt ein Node-Set ist, wird der String-Wert des ersten Knotens im Set zurückgegeben.
- Eine Zahl wird wie folgt konvertiert:

  - NaN wird in den String NaN konvertiert.
  - Positive Null wird in den String 0 konvertiert.
  - Negative Null wird in den String 0 konvertiert.
  - Positive Unendlichkeit wird in den String Infinity konvertiert.
  - Negative Unendlichkeit wird in den String -Infinity konvertiert.
  - Dezimalzahlen zwischen -1 und 1 werden in einen String mit einer einzelnen führenden 0 vor dem Dezimalpunkt konvertiert.
  - Boolean true wird in den String true konvertiert.
  - Boolean false wird in den String false konvertiert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-string)

## Gecko-Unterstützung

Unterstützt.
