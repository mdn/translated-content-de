---
title: document
slug: Web/XML/XPath/Reference/Functions/document
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `document` findet ein Knoten-Set in einem externen Dokument oder in mehreren externen Dokumenten und gibt das resultierende Knoten-Set zurück.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameter

- `URI`
  - : Eine absolute oder relative URI des abzurufenden Dokuments. Die URI kann auch einen Fragmentbezeichner enthalten.
- `node-set` (optional)
  - : Ein Ausdruck, der auf ein Knoten-Set im externen Dokument verweist, das zurückgegeben werden soll.

### Rückgabewert

Ein Knoten-Set.

## Beschreibung

- Wenn die URI einen Fragmentbezeichner enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird dieses Fragment als Wurzel im Ausdruck des Arguments `node-set` behandelt. Wenn das Argument `node-set` ausgelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das `URI`-Argument ein Knoten-Set ist und das zweite Argument vorhanden ist, wird jeder Knoten im Knoten-Set als separate URI ausgewertet. Das zurückgegebene Knoten-Set wird so behandelt, als wäre die Funktion `document` mehrfach aufgerufen worden (jedes Mal mit demselben zweiten Argument, wie in dem Funktionsaufruf angegeben), und die resultierenden Knoten-Sets wären zu einem einzigen Knoten-Set zusammengefügt worden.
- Es existieren weitere spezifische Bedingungen mit definierten Verhaltensweisen. Siehe die XSLT 1.0 Dokumentation für Details.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist nicht Teil der Kernfunktionalität der XPath-Bibliothek.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Gecko-Unterstützung

Unterstützt.
