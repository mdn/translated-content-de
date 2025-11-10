---
title: key
slug: Web/XML/XPath/Reference/Functions/key
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `key`-Funktion gibt eine Knotenmenge von Knoten zurück, die den angegebenen Wert für den angegebenen Schlüssel haben.

## Syntax

```plain
key( keyname, value )
```

### Parameter

- `keyname`
  - : Ein String, der den Namen des [`xsl:key`](/de/docs/Web/XML/XSLT/Reference/Element/key)-Elements enthält, das verwendet werden soll.
- `value`
  - : Die zurückgegebene Knotenmenge wird jeden Knoten enthalten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XML/XSLT/Reference/Element/key)-Element definiert, welches Attribut auf welchen gegebenen Elementen verwendet wird, um den Schlüssel zuzuordnen.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der Kernbibliothek von XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/xslt-10/#function-key)

## Gecko-Unterstützung

Unterstützt.
