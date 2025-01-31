---
title: current
slug: Web/XPath/Functions/current
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Funktion `current` kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung zu erhalten.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Bestandteil der Kernbibliothek für XPath-Funktionen.

Für einen äußersten Ausdruck (einen Ausdruck, der nicht innerhalb eines anderen Ausdrucks vorkommt) ist der aktuelle Knoten immer derselbe wie der Kontextknoten (welcher durch die `.` oder `self`-Syntax zurückgegeben wird). Die folgenden beiden sind semantisch äquivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z.B. in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er es in einem äußersten Ausdruck gewesen wäre. Somit gibt innerhalb all der folgenden drei Ausdrücke die `current`-Funktion (nicht die gesamten Ausdrücke) denselben Knoten zurück. Zudem sind die letzten beiden semantisch äquivalent.

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

Und der nächste Code ist ebenfalls semantisch äquivalent zu den letzten beiden, da die `.` in einem äußersten Ausdruck auftritt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber die `.` beziehen sich immer auf den engsten Kontext. Somit gibt in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

die `.` den `bar`-Knoten zurück, der vom aktuellen Knoten abweichen kann.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko-Unterstützung

Unterstützt.
