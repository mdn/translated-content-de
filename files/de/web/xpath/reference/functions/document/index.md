---
title: document
slug: Web/XPath/Reference/Functions/document
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Das `document` findet eine Knotenmenge in einem externen Dokument oder in mehreren externen Dokumenten und gibt die resultierende Knotenmenge zurück.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameter

- `URI`
  - : Eine absolute oder relative URI des Dokuments, das abgerufen werden soll. Die URI kann auch einen Fragmentbezeichner enthalten.
- `node-set` (optional)
  - : Ein Ausdruck, der auf eine Knotenmenge im externen Dokument zeigt, die zurückgegeben werden soll.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Wenn die URI einen Fragmentbezeichner enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird dieses Fragment als Wurzel im Ausdruck des `node-set`-Arguments behandelt. Falls das `node-set`-Argument weggelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das `URI`-Argument eine Knotenmenge ist und das zweite Argument vorhanden ist, wird jeder Knoten in der Knotenmenge als separate URI ausgewertet, und die zurückgegebene Knotenmenge wird so behandelt, als ob die `document`-Funktion mehrfach aufgerufen wurde (jedes Mal mit dem gleichen zweiten Argument wie im Funktionsaufruf angegeben) und die resultierenden Knotenmengen zu einer einzigen Knotenmenge zusammengefasst wurden.
- Es existieren weitere spezifische Bedingungen mit definiertem Verhalten. Details finden Sie in der XSLT 1.0-Dokumentation.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Gecko-Unterstützung

Unterstützt.
