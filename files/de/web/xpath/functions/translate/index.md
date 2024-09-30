---
title: translate
slug: Web/XPath/Functions/translate
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `translate` wertet einen String und eine Menge von zu übersetzenden Zeichen aus und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `abc`
  - : Der Zeichenstring, dessen Zeichen ersetzt werden sollen.
- `XYZ`
  - : Der Zeichenstring, der zur Ersetzung verwendet wird. Das erste Zeichen in `XYZ` ersetzt jedes Vorkommen des ersten Zeichens in `abc`, das im `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

XPath weist darauf hin, dass die translate-Funktion keine ausreichende Lösung für die Groß-/Kleinschreibungsumwandlung in allen Sprachen darstellt. Eine zukünftige Version von XPath könnte zusätzliche Funktionen zur Groß-/Kleinschreibungsumwandlung bereitstellen.

Dies ist jedoch das, was wir derzeit am ehesten als Funktion zur Umwandlung eines Strings in Groß- oder Kleinschreibung haben.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Ausgabe

```plain
THE QUICK BROWN FOX.
```

- Wenn `abc` länger als `XYZ` ist, dann werden alle Vorkommen von Zeichen in `abc`, die kein entsprechendes Zeichen in `XYZ` haben, entfernt.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />
```

Ausgabe

```plain
The quick red fdx.
```

- Wenn `XYZ` mehr Zeichen als `abc` enthält, werden die zusätzlichen Zeichen ignoriert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-translate)

## Browser-Kompatibilität in Gecko

Unterstützt.
