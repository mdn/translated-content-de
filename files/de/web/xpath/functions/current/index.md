---
title: current
slug: Web/XPath/Functions/current
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `current` Funktion kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung für XPath. Sie ist nicht Teil der Kernfunktionalität der XPath-Bibliothek.

Für einen äußersten Ausdruck (ein Ausdruck, der nicht innerhalb eines anderen Ausdrucks auftritt) ist der aktuelle Knoten immer derselbe wie der Kontextknoten (der durch die `.` oder `self`-Syntax zurückgegeben wird). Die folgenden zwei sind semantisch gleichwertig.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z.B. in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er es in einem äußersten Ausdruck wäre. Daher gibt innerhalb all der folgenden drei Ausdrücke die `current` Funktion (nicht die gesamten Ausdrücke) denselben Knoten zurück. Außerdem sind die beiden letzteren semantisch gleichwertig.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="foo/bar[current() = X]"/>
```

```xml
<xsl:variable name="current" select="current()"/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Und der nächste Code ist auch semantisch gleichwertig mit den beiden letzteren, da die `.` in einem äußersten Ausdruck vorkommt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber die `.` bezieht sich immer auf den engsten Kontext. So wird in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

die `.` den `bar` Knoten zurückgeben, der sich möglicherweise vom aktuellen Knoten unterscheidet.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Browser-Kompatibilität

Unterstützt.
