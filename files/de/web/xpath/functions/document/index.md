---
title: document
slug: Web/XPath/Functions/document
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `document`-Funktion sucht eine Knotenmenge in einem externen Dokument oder in mehreren externen Dokumenten und gibt die resultierende Knotenmenge zurück.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameter

- `URI`
  - : Eine absolute oder relative URI des abzurufenden Dokuments. Die URI kann auch einen Fragmentbezeichner enthalten.
- `node-set` (optional)
  - : Ein Ausdruck, der auf eine Knotenmenge im externen Dokument verweist, die zurückgegeben werden soll.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Wenn die URI einen Fragmentbezeichner enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird dieses Fragment als Wurzel im Ausdruck des `node-set`-Arguments behandelt. Wenn das `node-set`-Argument weggelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das `URI`-Argument eine Knotenmenge ist und das zweite Argument vorhanden ist, wird jeder Knoten in der Knotenmenge als separate URI ausgewertet, und die zurückgegebene Knotenmenge wird so sein, als ob die `document`-Funktion mehrfach aufgerufen wurde (jedes Mal mit demselben zweiten Argument, wie es im Funktionsaufruf gegeben ist) und die resultierenden Knotenmengen in einer einzigen Knotenmenge zusammengefasst wurden.
- Es gibt andere spezifische Bedingungen mit festgelegtem Verhalten. Einzelheiten finden Sie in der XSLT 1.0-Dokumentation.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist nicht Teil der Kernbibliothek der XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Browser-Kompatibilität in Gecko

Unterstützt.
