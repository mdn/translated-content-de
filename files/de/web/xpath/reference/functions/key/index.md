---
title: key
slug: Web/XPath/Reference/Functions/key
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `key`-Funktion gibt eine Knotenmenge von Knoten zurück, die den angegebenen Wert für den angegebenen Schlüssel haben.

## Syntax

```plain
key( keyname, value )
```

### Parameter

- `keyname`
  - : Ein String, der den Namen des [`xsl:key`](/de/docs/Web/XSLT/Reference/Element/key)-Elements enthält, das verwendet werden soll.
- `value`
  - : Die zurückgegebene Knotenmenge enthält jeden Knoten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XSLT/Reference/Element/key)-Element definiert, welches Attribut auf welchen gegebenen Elementen verwendet wird, um den Schlüssel zuzuordnen.

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist kein Teil der zentralen XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko-Unterstützung

Unterstützt.
