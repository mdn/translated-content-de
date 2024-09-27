---
title: lang
slug: Web/XPath/Functions/lang
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `lang` bestimmt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt, und gibt booleanisch wahr oder falsch zurück.

## Syntax

```plain
lang(string )
```

### Parameter

- `string`
  - : Der Sprachcode oder Lokalisierungscode (Sprache und Land), der abgeglichen werden soll.

### Rückgabewert

`true`, wenn der Kontextknoten die angegebenen Sprachen erfüllt. Andernfalls `false`.

## Beschreibung

- Die Sprache eines Knotens wird durch sein `xml:lang`-Attribut bestimmt. Wenn der aktuelle Knoten kein `xml:lang`-Attribut hat, bestimmt der Wert des `xml:lang`-Attributs des nächstgelegenen Vorfahrenknotens, der ein solches Attribut hat, die Sprache des aktuellen Knotens. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahr hat ein `xml:lang`-Attribut), gibt diese Funktion falsch zurück.

- Wenn der angegebene `string` keinen Ländercode spezifiziert, wird diese Funktion Knoten mit dieser Sprache unabhängig vom Ländercode abgleichen. Umgekehrt gilt dies nicht.

Angenommen, dieses Fragment von XML:

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
