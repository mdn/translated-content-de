---
title: current
slug: Web/XML/XPath/Reference/Functions/current
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die `current`-Funktion kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist kein Bestandteil der Kernbibliothek der XPath-Funktionen.

Für einen äußersten Ausdruck (ein Ausdruck, der nicht innerhalb eines anderen Ausdrucks vorkommt) ist der aktuelle Knoten immer derselbe wie der Kontextknoten (der durch die `.` oder `self`-Syntax zurückgegeben wird). Die folgenden zwei sind semantisch äquivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z.B. in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er es auch in einem äußersten Ausdruck gewesen wäre. Daher gibt innerhalb aller folgenden drei Ausdrücke die `current`-Funktion (nicht die gesamten Ausdrücke) denselben Knoten zurück. Außerdem sind die letzteren beiden semantisch äquivalent.

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

Der nächste Code ist auch semantisch äquivalent zu den letzteren beiden, da `.` in einem äußersten Ausdruck auftritt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber `.` bezieht sich immer auf den engsten Kontext. So gibt in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

das `.` den `bar`-Knoten zurück, der möglicherweise ein anderer ist als der aktuelle Knoten.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko-Unterstützung

Unterstützt.
