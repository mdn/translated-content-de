---
title: <xsl:namespace-alias>
slug: Web/XML/XSLT/Reference/Element/namespace-alias
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:namespace-alias>`-Element ist ein selten verwendetes Mittel, das einen Namespace im Stylesheet mit einem anderen Namespace im Ausgabebaum verknüpft. Der häufigste Anwendungsfall dieses Elements ist das Erstellen eines Stylesheets aus einem anderen Stylesheet. Um zu verhindern, dass ein normalerweise mit `xsl:`-Präfix versehenes wortwörtliches Ergebniselement (das unverändert in den Ergebnisbaum kopiert werden soll) vom Prozessor falsch interpretiert wird, wird ihm ein temporärer Namespace zugewiesen, der im Ausgabebaum entsprechend zurück in den XSLT-Namespace konvertiert wird.

## Syntax

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### Erforderliche Attribute

- `stylesheet-prefix`
  - : Gibt den temporären Namespace an.
- `result-prefix`
  - : Gibt den gewünschten Namespace für den Ausgabebaum an.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.1

## Gecko-Unterstützung

Derzeit nicht unterstützt.
