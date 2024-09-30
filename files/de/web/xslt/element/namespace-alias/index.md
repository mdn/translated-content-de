---
title: <xsl:namespace-alias>
slug: Web/XSLT/Element/namespace-alias
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:namespace-alias>`-Element ist ein selten genutztes Mittel, das einen Namensraum im Stylesheet einem anderen Namensraum im Ausgabe-Baum zuordnet. Die häufigste Verwendung dieses Elements liegt in der Erzeugung eines Stylesheets aus einem anderen Stylesheet. Um zu verhindern, dass ein normalerweise mit `xsl:`-Präfix versehenes wörtliches Ergebniselement (welches unverändert in den Ergebnisbaum kopiert werden soll) vom Prozessor missverstanden wird, wird ihm ein temporärer Namensraum zugewiesen, der im Ausgabe-Baum entsprechend wieder in den XSLT-Namensraum zurückverwandelt wird.

## Syntax

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### Erforderliche Attribute

- `stylesheet-prefix`
  - : Gibt den temporären Namensraum an.
- `result-prefix`
  - : Gibt den gewünschten Namensraum für den Ausgabe-Baum an.

### Optionale Attribute

Keine.

### Typ

Top-level, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.1

## Browser-Kompatibilität

Derzeit nicht unterstützt.
