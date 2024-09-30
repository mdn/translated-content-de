---
title: document
slug: Web/XPath/Functions/document
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `document` sucht eine Knotenmenge in einem externen Dokument oder mehreren externen Dokumenten und gibt die resultierende Knotenmenge zurück.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameter

- `URI`
  - : Eine absolute oder relative URI des abzurufenden Dokuments. Die URI kann auch einen Fragmentbezeichner enthalten.
- `node-set` (optional)
  - : Ein Ausdruck, der auf eine Knotenmenge im externen Dokument zeigt, die zurückgegeben werden soll.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Wenn die URI einen Fragmentbezeichner enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird dieses Fragment als Wurzel im Ausdruck des `node-set`-Arguments behandelt. Wenn das `node-set`-Argument weggelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das `URI`-Argument eine Knotenmenge ist und das zweite Argument vorhanden ist, wird jeder Knoten in der Knotenmenge als separate URI ausgewertet, und die zurückgegebene Knotenmenge wird so sein, als ob die `document`-Funktion mehrfach aufgerufen worden wäre (jeder Aufruf mit demselben zweiten Argument, wie es im Funktionsaufruf angegeben ist) und die resultierenden Knotenmengen zu einer einzigen Knotenmenge zusammengeführt worden wären.
- Es gibt weitere spezifische Bedingungen mit festgelegtem Verhalten. Siehe die XSLT 1.0 Dokumentation für Details.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist nicht Teil der Kernbibliothek der XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Gecko-Unterstützung

Unterstützt.
