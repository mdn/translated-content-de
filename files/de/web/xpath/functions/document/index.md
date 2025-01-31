---
title: document
slug: Web/XPath/Functions/document
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `document` findet eine Knoten-Menge in einem externen Dokument oder in mehreren externen Dokumenten und gibt die resultierende Knoten-Menge zurück.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameter

- `URI`
  - : Eine absolute oder relative URI des abzurufenden Dokuments. Die URI kann auch einen Fragment-Identifikator enthalten.
- `node-set` (optional)
  - : Ein Ausdruck, der auf eine Knoten-Menge im externen Dokument zeigt, die zurückgegeben werden soll.

### Rückgabewert

Eine Knoten-Menge.

## Beschreibung

- Wenn die URI einen Fragment-Identifikator enthält und dieses Fragment im externen Dokument identifiziert werden kann, wird dieses Fragment als Wurzel im Ausdruck des `node-set`-Arguments behandelt. Wenn das `node-set`-Argument weggelassen wird, wird das gesamte Fragment zurückgegeben.
- Wenn das `URI`-Argument eine Knoten-Menge ist und das zweite Argument vorhanden ist, wird jeder Knoten in der Knoten-Menge als separate URI ausgewertet, und die zurückgegebene Knoten-Menge wird so, als ob die `document`-Funktion mehrmals aufgerufen worden wäre (jedes Mal mit dem gleichen zweiten Argument, wie es im Funktionsaufruf angegeben ist) und die resultierenden Knoten-Mengen zu einer einzigen Knoten-Menge zusammengefasst worden wären.
- Es gibt weitere spezifische Bedingungen mit festgelegtem Verhalten. Siehe die XSLT 1.0-Dokumentation für Details.
- Da die URI relativ zum XSL-Dokument ist, würde `document("")` den Wurzelknoten des aktuellen Dokuments zurückgeben.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist nicht Teil der grundlegenden XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Gecko-Unterstützung

Unterstützt.
