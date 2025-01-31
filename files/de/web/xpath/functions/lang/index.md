---
title: lang
slug: Web/XPath/Functions/lang
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `lang`-Funktion bestimmt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt und gibt einen booleschen Wert `true` oder `false` zurück.

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

- Die Sprache eines Knotens wird durch das Attribut `xml:lang` bestimmt. Wenn der aktuelle Knoten kein `xml:lang`-Attribut hat, bestimmt der Wert des `xml:lang`-Attributs des nächsten Vorfahren, der ein `xml:lang`-Attribut besitzt, die Sprache des aktuellen Knotens. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahre hat ein `xml:lang`-Attribut), gibt diese Funktion `false` zurück.

- Wenn der angegebene `string` keinen Ländercode spezifiziert, wird diese Funktion Knoten dieser Sprache mit beliebigem Ländercode abgleichen. Das Umgekehrte ist nicht der Fall.

Angenommen, dieser XML-Fragment:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

Und diesen Teil einer XSL-Vorlage:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

Der Ausgabewert könnte sein:

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
