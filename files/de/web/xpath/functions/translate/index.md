---
title: translate
slug: Web/XPath/Functions/translate
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `translate`-Funktion wertet einen String und eine Menge von Zeichen aus, die übersetzt werden sollen, und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu evaluierende String.
- `abc`
  - : Der String aus Zeichen, die ersetzt werden sollen.
- `XYZ`
  - : Der String von Zeichen, die zum Ersetzen verwendet werden. Das erste Zeichen in `XYZ` ersetzt jedes Vorkommen des ersten Zeichens in `abc`, das in `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

XPath weist darauf hin, dass die translate-Funktion keine ausreichende Lösung für die Groß- und Kleinschreibungskonvertierung in allen Sprachen ist. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß- und Kleinschreibungskonvertierung bereitstellen.

Dies ist jedoch gegenwärtig die nächstgelegene Funktion, die einen String in Groß- oder Kleinbuchstaben umwandeln kann.

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

- Wenn `XYZ` mehr Zeichen als `abc` enthält, werden die überzähligen Zeichen ignoriert.

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-translate)

## Gecko-Unterstützung

Unterstützt.
