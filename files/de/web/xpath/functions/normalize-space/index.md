---
title: normalize-space
slug: Web/XPath/Functions/normalize-space
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `normalize-space` entfernt führende und nachgestellte Leerzeichen aus einem String, ersetzt Sequenzen von Leerzeichenzwischenräumen durch ein einzelnes Leerzeichen und gibt den resultierenden String zurück.

## Syntax

```plain
normalize-space( [string] )
```

### Parameter

- `string` (optional)
  - : Der String, der normalisiert werden soll. Wenn dieser weggelassen wird, wird der String verwendet, der dem Kontextknoten entspricht, konvertiert in einen String.

### Rückgabewert

Der normalisierte String.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-normalize-space)

## Gecko-Unterstützung

Unterstützt.
