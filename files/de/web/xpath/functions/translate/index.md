---
title: übersetzen
slug: Web/XPath/Functions/translate
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `translate`-Funktion wertet einen String und eine Menge von Zeichen aus, die übersetzt werden sollen, und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `abc`
  - : Der Zeichenstring, der ersetzt wird.
- `XYZ`
  - : Der Zeichenstring, der für die Ersetzung verwendet wird. Das erste Zeichen in `XYZ` ersetzt jedes Vorkommen des ersten Zeichens in `abc`, das in `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

XPath stellt fest, dass die translate-Funktion keine ausreichende Lösung für die Groß-/Kleinschreibung in allen Sprachen ist. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß-/Kleinschreibung bieten.

Dies ist jedoch derzeit die einzige Funktion, die einen String in Groß- oder Kleinbuchstaben umwandeln kann.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Ausgabe

```plain
THE QUICK BROWN FOX.
```

- Wenn `abc` länger ist als `XYZ`, werden alle Vorkommen von Zeichen in `abc`, die kein entsprechendes Zeichen in `XYZ` haben, entfernt.

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
