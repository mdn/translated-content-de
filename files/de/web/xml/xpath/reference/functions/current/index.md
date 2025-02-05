---
title: current
slug: Web/XML/XPath/Reference/Functions/current
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `current` kann verwendet werden, um den Kontextknoten in einer XSLT-Anweisung abzurufen.

## Syntax

```plain
current()
```

### Rückgabewert

Eine Knotenmenge, die nur den aktuellen Knoten enthält.

## Beschreibung

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der Kernbibliothek von XPath-Funktionen.

Für einen äußersten Ausdruck (einen Ausdruck, der nicht innerhalb eines anderen Ausdrucks vorkommt) ist der aktuelle Knoten immer derselbe wie der Kontextknoten (der durch die Syntax `.` oder `self` zurückgegeben wird). Die folgenden beiden sind semantisch äquivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In einem inneren Ausdruck (z. B. in eckigen Klammern) bleibt der aktuelle Knoten derselbe, wie er in einem äußersten Ausdruck wäre. Daher gibt innerhalb aller der folgenden drei Ausdrücke die Funktion `current` (nicht die gesamten Ausdrücke) denselben Knoten zurück. Außerdem sind die letzten beiden semantisch äquivalent.

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

Und der nächste Code ist ebenfalls semantisch identisch mit den letzten beiden, da das `.` in einem äußersten Ausdruck auftritt.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Aber das `.` bezieht sich immer auf den engsten Kontext. Deshalb gibt in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

das `.` den `bar`-Knoten zurück, der sich vom aktuellen Knoten unterscheiden kann.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko-Unterstützung

Unterstützt.
