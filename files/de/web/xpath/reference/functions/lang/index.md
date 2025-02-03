---
title: lang
slug: Web/XPath/Reference/Functions/lang
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `lang` bestimmt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt, und gibt boolean true oder false zurück.

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

- Die Sprache eines Knotens wird durch sein `xml:lang`-Attribut bestimmt. Wenn der aktuelle Knoten kein `xml:lang`-Attribut hat, dann bestimmt der Wert des `xml:lang`-Attributs des nächsten Vorfahren, der ein solches Attribut hat, die Sprache des aktuellen Knotens. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahre hat ein `xml:lang`-Attribut), gibt diese Funktion false zurück.

- Wenn der angegebene `string` keinen Ländercode spezifiziert, wird diese Funktion Knoten dieser Sprache mit beliebigem Ländercode abgleichen. Das Gegenteil ist nicht der Fall.

Gegebenes XML-Fragment:

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
