---
title: translate
slug: Web/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `translate` Funktion bewertet einen String und eine Menge von Zeichen, die übersetzt werden sollen, und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `abc`
  - : Der String von Zeichen, der ersetzt wird.
- `XYZ`
  - : Der String von Zeichen, der zum Ersetzen verwendet wird. Das erste Zeichen in `XYZ` wird jedes Vorkommen des ersten Zeichens in `abc` ersetzen, das im `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

XPath weist darauf hin, dass die Translate-Funktion keine ausreichende Lösung für die Groß- und Kleinschreibung in allen Sprachen bietet. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß-/Kleinschreibung anbieten.

Dies ist jedoch derzeit das Näheste, was wir an einer Funktion haben, die einen String in Groß- oder Kleinbuchstaben umwandeln kann.

Beispiel

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Ausgabe

```plain
THE QUICK BROWN FOX.
```

- Wenn `abc` länger ist als `XYZ`, dann wird jedes Vorkommen von Zeichen in `abc`, die kein entsprechendes Zeichen in `XYZ` haben, entfernt.

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
