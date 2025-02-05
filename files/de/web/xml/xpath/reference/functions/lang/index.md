---
title: lang
slug: Web/XML/XPath/Reference/Functions/lang
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `lang` bestimmt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt, und gibt einen booleschen Wert `true` oder `false` zurück.

## Syntax

```plain
lang(string )
```

### Parameter

- `string`
  - : Der Sprachcode oder Lokalisierungscode (Sprache und Land), der abgeglichen werden soll.

### Rückgabewert

`true`, wenn der Kontextknoten mit den angegebenen Sprachen übereinstimmt. Andernfalls `false`.

## Beschreibung

- Die Sprache eines Knotens wird durch sein Attribut `xml:lang` bestimmt. Wenn der aktuelle Knoten kein `xml:lang`-Attribut hat, wird der Wert des `xml:lang`-Attributs des nächsten Vorfahren mit einem `xml:lang`-Attribut die Sprache des aktuellen Knotens bestimmen. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahre hat ein `xml:lang`-Attribut), gibt diese Funktion `false` zurück.

- Wenn der angegebene `string` keinen Ländercode angibt, wird diese Funktion Knoten mit dieser Sprache unabhängig vom Ländercode abgleichen. Das Gegenteilige gilt jedoch nicht.

Angenommen, dieser Auszug aus XML:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

Und dieser Teil einer XSL-Vorlage:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

Die Ausgabe könnte sein:

```plain
3
1
1
0
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-lang)

## Gecko-Unterstützung

Unterstützt.
