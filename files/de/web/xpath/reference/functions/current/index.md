---
title: current
slug: Web/XPath/Reference/Functions/current
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `current`-Funktion kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Erweiterung zu XPath. Sie ist kein Bestandteil der Kern-XPath-Funktionsbibliothek.

Für einen äußersten Ausdruck (ein Ausdruck, der nicht innerhalb eines anderen Ausdrucks auftritt), ist der aktuelle Knoten immer derselbe wie der Kontextknoten (der durch die `.` oder `self`-Syntax zurückgegeben wird). Die folgenden beiden sind semantisch gleichwertig.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z.B. in eckigen Klammern) ist der aktuelle Knoten immer noch derselbe, wie er in einem äußersten Ausdruck gewesen wäre. Somit gibt die `current`-Funktion innerhalb aller folgenden drei Ausdrücke denselben Knoten zurück (nicht der gesamte Ausdruck). Zudem sind die letzteren beiden semantisch gleichwertig.

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

Und der nächste Code ist auch semantisch gleichwertig mit den letztgenannten zwei, da das `.` in einem äußersten Ausdruck auftritt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber das `.` bezieht sich immer auf den engsten Kontext. Somit wird in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

das `.` den `bar`-Knoten zurückgeben, der möglicherweise vom aktuellen Knoten abweicht.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko-Unterstützung

Unterstützt.
