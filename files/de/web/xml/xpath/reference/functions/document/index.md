---
title: document
slug: Web/XML/XPath/Reference/Functions/document
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Das `document` findet eine Menge von Knoten in einem externen Dokument oder mehreren externen Dokumenten und gibt die resultierende Knotenmenge zurück.

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

- Wenn die URI einen Fragmentbezeichner enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird das Fragment als Wurzel im Ausdruck des Arguments `node-set` behandelt. Wenn das Argument `node-set` weggelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das Argument `URI` eine Knotenmenge ist und das zweite Argument vorhanden ist, wird jeder Knoten in der Knotenmenge als separate URI ausgewertet, und die zurückgegebene Knotenmenge wird so sein, als ob die `document`-Funktion mehrmals aufgerufen worden wäre (jedes Mal mit demselben zweiten Argument wie in der Funktion angegeben) und die resultierenden Knotenmengen zu einer einzigen Knotenmenge zusammengefasst worden wären.
- Es existieren weitere spezifische Bedingungen mit festgelegten Verhaltensweisen. Für Details siehe die XSLT 1.0-Dokumentation.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/xslt-10/#function-document)

## Gecko-Unterstützung

Unterstützt.
