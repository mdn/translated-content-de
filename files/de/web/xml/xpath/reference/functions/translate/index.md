---
title: übersetzen
slug: Web/XML/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 9cf4a4a7b55770b266b9f2b72283eab1a5e42de5
---

Die Funktion `translate` bewertet einen String und eine Menge von Zeichen, die übersetzt werden sollen, und gibt den übersetzten String zurück.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameter

- `string`
  - : Der zu bewertende String.
- `abc`
  - : Die Menge von Zeichen, die ersetzt werden sollen.
- `XYZ`
  - : Die Zeichenfolge, die für die Ersetzung verwendet wird. Das erste Zeichen in `XYZ` ersetzt jedes Vorkommen des ersten Zeichens in `abc`, das im `string` erscheint.

### Rückgabewert

Der übersetzte String.

## Beschreibung

Für jedes Zeichen in `string`, wenn `abc` dieses Zeichen enthält, wird es durch das Zeichen an der gleichen Position in `XYZ` ersetzt. Wenn `abc` dieses Zeichen nicht enthält, bleibt es unverändert.

- Wenn `abc` länger als `XYZ` ist, werden die zusätzlichen Zeichen am Ende von `abc` der leeren Zeichenfolge zugeordnet (d.h. sie werden aus dem Quellstring entfernt).
- Wenn `XYZ` mehr Zeichen als `abc` enthält, werden die zusätzlichen Zeichen ignoriert.
- Wenn ein Zeichen mehrfach in `abc` vorkommt, bestimmt das erste Auftreten das Ersetzungszeichen.

`translate()` ist eine Funktion für Ersetzungen auf Zeichenebene, keine reguläre Ausdrucks- oder Zeichenkettenersetzungsfunktion. Die Strings `abc` und `XYZ` stellen _Zeichenchiffren_ dar, keine Teilstrings. Das bedeutet, dass Sie die Methode möglicherweise falsch verwenden, wenn Sie auf einen der oben genannten Fälle stoßen (außer vielleicht, wenn `abc` länger ist, um bestimmte Zeichen zu entfernen).

Eine solche Ersetzung wird nicht `The quick red fox` ausgeben, wie Sie vielleicht erwarten; stattdessen ist das Ergebnis `The quick red fdx`.

```xml example-bad
<xsl:value-of select="translate('The quick brown fox', 'brown', 'red')" />
```

## Beispiele

### Verwendung von `translate()` zur Groß-/Kleinschreibungskonvertierung

XPath weist darauf hin, dass die `translate`-Funktion keine ausreichende Lösung für die Groß-/Kleinschreibungskonvertierung in allen Sprachen ist. Eine zukünftige Version von XPath könnte zusätzliche Funktionen für die Groß-/Kleinschreibungskonvertierung anbieten.

Dies ist jedoch aktuell die uns am nächsten kommende Funktion, die einen String in Großbuchstaben oder Kleinbuchstaben umwandeln kann.

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Ausgabe

```plain
THE QUICK BROWN FOX.
```

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-translate)

## Gecko-Unterstützung

Unterstützt.
