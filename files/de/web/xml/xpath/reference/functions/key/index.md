---
title: key
slug: Web/XML/XPath/Reference/Functions/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `key` gibt eine Node-Set-Menge von Knoten zurück, die den angegebenen Wert für den angegebenen Schlüssel haben.

## Syntax

```plain
key( keyname, value )
```

### Parameter

- `keyname`
  - : Ein String, der den Namen des [`xsl:key`](/de/docs/Web/XML/XSLT/Reference/Element/key)-Elements enthält, das verwendet werden soll.
- `value`
  - : Das zurückgegebene Node-Set enthält jeden Knoten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Ein Node-Set.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XML/XSLT/Reference/Element/key)-Element definiert, welches Attribut auf welchen Elementen verwendet wird, um den Schlüssel zuzuordnen.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko-Unterstützung

Unterstützt.
