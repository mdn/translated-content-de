---
title: translate
slug: Web/XML/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `translate`-Funktion wertet eine Zeichenkette und eine Menge von Zeichen, die übersetzt werden sollen, aus und gibt die übersetzte Zeichenkette zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Die Zeichenkette, die ausgewertet wird.
- `abc`
  - : Die Zeichenkette aus Zeichen, die ersetzt werden soll.
- `XYZ`
  - : Die Zeichenkette der Zeichen, die zum Ersetzen verwendet werden. Das erste Zeichen in `XYZ` ersetzt jedes Auftreten des ersten Zeichens in `abc`, das in `string` erscheint.

### Rückgabewert

Die übersetzte Zeichenkette.

## Beschreibung

XPath weist darauf hin, dass die translate-Funktion keine ausreichende Lösung für die Groß-/Kleinschreibungsumwandlung in allen Sprachen ist. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß-/Kleinschreibungsumwandlung bereitstellen.

Jedoch ist dies derzeit das Nächste, was wir an einer Funktion haben, die eine Zeichenkette in Groß- oder Kleinbuchstaben umwandeln kann.

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

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-translate)

## Gecko-Unterstützung

Unterstützt.
