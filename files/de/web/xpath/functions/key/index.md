---
title: key
slug: Web/XPath/Functions/key
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
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
  - : Die zurückgegebene Knotenmenge wird jeden Knoten enthalten, der diesen Wert für den angegebenen Schlüssel hat.

### Rückgabewert

Eine Knotenmenge.

## Beschreibung

- Das [`xsl:key`](/de/docs/Web/XSLT/Reference/Element/key)-Element definiert, welches Attribut auf welchen gegebenen Elementen verwendet wird, um den Schlüssel abzugleichen.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Bestandteil der Kern-XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko-Unterstützung

Unterstützt.
