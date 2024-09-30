---
title: key
slug: Web/XPath/Functions/key
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `key` gibt eine Knotenmenge zurück, die die Knoten enthält, die den angegebenen Wert für den angegebenen Schlüssel haben.

## Syntax

```plain
key( keyname, value )
```

### Parameter

- `keyname`
  - : Ein String mit dem Namen des [`xsl:key`](/de/docs/Web/XSLT/Element/key) Elements, das verwendet werden soll.
- `value`
  - : Die zurückgegebene Knotenmenge wird jeden Knoten enthalten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XSLT/Element/key) Element definiert, welches Attribut auf welchen angegebenen Elementen verwendet wird, um den Schlüssel zuzuordnen.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Bestandteil der Core-XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko-Unterstützung

Unterstützt.
