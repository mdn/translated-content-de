---
title: <xsl:namespace-alias>
slug: Web/XSLT/Reference/Element/namespace-alias
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:namespace-alias>`-Element ist ein selten genutztes Mittel, das einen Namensraum im Stylesheet auf einen anderen Namensraum im Ausgabebaum abbildet. Die häufigste Verwendung dieses Elements besteht darin, ein Stylesheet aus einem anderen Stylesheet zu erzeugen. Um zu verhindern, dass ein normalerweise mit `xsl:`-Präfix versehenes, als Literal-Ergebnis-Element (das so, wie es ist, in den Ergebnisbaum kopiert werden soll) vom Prozessor missverstanden wird, wird ihm ein temporärer Namensraum zugewiesen, der im Ausgabebaum wieder angemessen in den XSLT-Namensraum umgewandelt wird.

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

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.1

## Gecko-Unterstützung

Zurzeit nicht unterstützt.
