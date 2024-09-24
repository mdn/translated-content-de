---
title: <xsl:namespace-alias>
slug: Web/XSLT/Element/namespace-alias
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:namespace-alias>`-Element ist ein selten genutztes Instrument, das einen Namensraum im Stylesheet einem anderen Namensraum im Ausgabebaum zuordnet. Der häufigste Anwendungsfall für dieses Element ist die Erzeugung eines Stylesheets aus einem anderen Stylesheet. Um zu verhindern, dass ein normalerweise mit `xsl:`-Präfix versehenes, wörtliches Ergebniselement (das unverändert in den Ergebnisknoten kopiert werden soll) vom Prozessor missverstanden wird, wird ihm ein temporärer Namensraum zugewiesen, der im Ausgabebaum entsprechend in den XSLT-Namensraum zurückkonvertiert wird.

## Syntax

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### Erforderliche Attribute

- `stylesheet-prefix`
  - : Gibt den temporären Namensraum an.
- `result-prefix`
  - : Gibt den gewünschten Namensraum für den Ausgabebaum an.

### Optionale Attribute

Keine.

### Typ

Oberste Ebene, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.1

## Gecko-Unterstützung

Derzeit nicht unterstützt.
