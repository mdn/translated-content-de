---
title: current
slug: Web/XML/XPath/Reference/Functions/current
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `current`-Funktion kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der Kern-XPath-Funktionsbibliothek.

Für einen äußersten Ausdruck (einen Ausdruck, der nicht innerhalb eines anderen Ausdrucks vorkommt), ist der aktuelle Knoten immer derselbe wie der Kontextknoten (welcher durch die `.`- oder `self`-Syntax zurückgegeben wird). Die folgenden zwei sind semantisch gleichwertig.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (zum Beispiel in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er es in einem äußersten Ausdruck wäre. Somit gibt innerhalb aller der folgenden drei Ausdrücke die `current`-Funktion (nicht die gesamten Ausdrücke) denselben Knoten zurück. Außerdem sind die letzten beiden semantisch gleichwertig.

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

Und der nächste Code ist auch semantisch gleichwertig mit den letzten beiden, da das `.` in einem äußersten Ausdruck vorkommt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber das `.` bezieht sich immer auf den engsten Kontext. Somit in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

gibt das `.` den `bar`-Knoten zurück, der vom aktuellen Knoten abweichen kann.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-current)

## Gecko-Unterstützung

Unterstützt.
