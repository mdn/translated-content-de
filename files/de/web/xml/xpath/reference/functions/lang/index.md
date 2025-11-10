---
title: lang
slug: Web/XML/XPath/Reference/Functions/lang
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `lang`-Funktion bestimmt, ob der Kontextknoten mit der angegebenen Sprache übereinstimmt, und gibt boolean true oder false zurück.

## Syntax

```plain
lang(string )
```

### Parameter

- `string`
  - : Der Sprachcode oder Lokalisierungscode (Sprache und Land), der abzugleichen ist.

### Rückgabewert

`true`, wenn der Kontextknoten mit den angegebenen Sprachen übereinstimmt. Andernfalls `false`.

## Beschreibung

- Die Sprache eines Knotens wird durch sein `xml:lang`-Attribut bestimmt. Wenn der aktuelle Knoten kein `xml:lang`-Attribut hat, bestimmt der Wert des `xml:lang`-Attributs des nächstgelegenen Vorfahren, der ein `xml:lang`-Attribut hat, die Sprache des aktuellen Knotens. Wenn die Sprache nicht bestimmt werden kann (kein Vorfahre hat ein `xml:lang`-Attribut), wird diese Funktion `false` zurückgeben.

- Wenn der angegebene `string` keinen Ländercode enthält, wird diese Funktion Knoten, die zu dieser Sprache gehören, unabhängig von einem Ländercode abgleichen. Das Gegenteil ist nicht der Fall.

Gegeben diesem Fragment von XML:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

Und diesem Teil einer XSL-Vorlage:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

Könnte die Ausgabe wie folgt aussehen:

```plain
3
1
1
0
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-lang)

## Gecko-Unterstützung

Unterstützt.
