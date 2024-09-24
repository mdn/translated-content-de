---
title: current
slug: Web/XPath/Functions/current
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `current` kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung von XPath. Sie ist nicht Teil der Kernbibliothek von XPath-Funktionen.

Für einen äußersten Ausdruck (einen Ausdruck, der nicht innerhalb eines anderen Ausdrucks vorkommt) ist der aktuelle Knoten immer derselbe wie der Kontextknoten (der durch die `.`- oder `self`-Syntax zurückgegeben wird). Die folgenden zwei sind semantisch äquivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z.B. in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er in einem äußersten Ausdruck wäre. Innerhalb aller folgenden drei Ausdrücke gibt die Funktion `current` (nicht die gesamten Ausdrücke) denselben Knoten zurück. Darüber hinaus sind die letzten beiden semantisch äquivalent.

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

Und der folgende Code ist ebenfalls semantisch äquivalent zu den letzten beiden, da die `.` in einem äußersten Ausdruck vorkommt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber die `.` bezieht sich immer auf den engsten Kontext. Somit gilt in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

dass `.` den `bar`-Knoten zurückgibt, der möglicherweise von dem aktuellen Knoten abweicht.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko-Unterstützung

Unterstützt.
