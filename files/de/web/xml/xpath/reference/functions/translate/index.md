---
title: translate
slug: Web/XML/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `translate` wertet einen String und eine Menge von Zeichen zur Übersetzung aus und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `abc`
  - : Die Zeichenkette, deren Zeichen ersetzt werden sollen.
- `XYZ`
  - : Die Zeichenkette, die zur Ersetzung verwendet wird. Das erste Zeichen in `XYZ` ersetzt jedes Vorkommen des ersten Zeichens von `abc`, das im `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

XPath weist darauf hin, dass die Funktion `translate` keine ausreichende Lösung für die Groß- und Kleinschreibung in allen Sprachen darstellt. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß- und Kleinschreibungsumwandlung bereitstellen.

Dies ist jedoch derzeit die beste Annäherung an eine Funktion, die einen String in Groß- oder Kleinbuchstaben umwandeln kann.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Ausgabe

```plain
THE QUICK BROWN FOX.
```

- Wenn `abc` länger ist als `XYZ`, werden alle Zeichen in `abc`, die keine entsprechenden Zeichen in `XYZ` haben, entfernt.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />
```

Ausgabe

```plain
The quick red fdx.
```

- Wenn `XYZ` mehr Zeichen enthält als `abc`, werden die zusätzlichen Zeichen ignoriert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-translate)

## Gecko-Unterstützung

Unterstützt.
