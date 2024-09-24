---
title: Schlüssel
slug: Web/XPath/Functions/key
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `key`-Funktion gibt eine Knotenmenge von Knoten zurück, die den angegebenen Wert für den angegebenen Schlüssel haben.

## Syntax

```plain
key( keyname, value )
```

### Parameter

- `keyname`
  - : Ein String, der den Namen des [`xsl:key`](/de/docs/Web/XSLT/Element/key)-Elements enthält, das verwendet werden soll.
- `value`
  - : Die zurückgegebene Knotenmenge wird jeden Knoten enthalten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XSLT/Element/key)-Element definiert, welches Attribut auf welchen gegebenen Elementen zur Übereinstimmung mit dem Schlüssel verwendet wird.

Diese Funktion ist eine XSLT-spezifische Erweiterung zu XPath. Sie ist nicht Teil der Kernbibliothek der XPath-Funktionen.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko-Unterstützung

Unterstützt.
