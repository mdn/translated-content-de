---
title: XPath `lang` Funktion
slug: Web/XPath/Functions/lang
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `lang` Funktion ermittelt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt, und gibt boolean true oder false zurück.

## Syntax

```plain
lang(string )
```

### Parameter

- `string`
  - : Der zu vergleichende Sprachcode oder Lokalisierungscode (Sprache und Land).

### Rückgabewert

`true`, wenn der Kontextknoten mit den angegebenen Sprachen übereinstimmt. Andernfalls `false`.

## Beschreibung

- Die Sprache eines Knotens wird durch sein `xml:lang` Attribut bestimmt. Falls der aktuelle Knoten kein `xml:lang` Attribut hat, bestimmt der Wert des `xml:lang` Attributs des nächstgelegenen Vorfahren mit einem `xml:lang` Attribut die Sprache des aktuellen Knotens. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahre hat ein `xml:lang` Attribut), gibt diese Funktion false zurück.

- Wenn der angegebene `string` keinen Ländercode aufweist, wird diese Funktion Knoten dieser Sprache mit beliebigem Ländercode zuordnen. Das Gegenteil ist nicht der Fall.

Dieses Fragment von XML:

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

## Gecko Unterstützung

Unterstützt.
