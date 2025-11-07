---
title: CSS-Tabelle
short-title: Table
slug: Web/CSS/Guides/Table
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Tabelle**-Modul hilft Ihnen, die Anordnung von Tabellendaten festzulegen.

Dieses CSS-Modul definiert Stile, die auf das HTML-{{htmlelement("table")}}-Element anwendbar sind, das zur Darstellung von tabellarischen Daten verwendet wird. Standardmäßig werden Tabellen als zweidimensionales Raster gerendert, wobei sich die Zellen in einer Reihe aufeinanderfolgender Zeilen und Spalten anordnen. Diese Anordnung wird aus der Tabellenstruktur generiert und entsprechend dem Inhalt der Zellen dimensioniert. Dieses Modul ermöglicht es auch, die Position der {{htmlelement("caption")}} einer Tabelle zu definieren, falls vorhanden.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf die `<table>`-Elemente beschränkt; sie können auf jedes Element mit einem tabellenbezogenen CSS-{{cssxref("display")}}-Wert angewendet werden.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Leitfäden

- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Ein Leitfaden zur Verbesserung des Aussehens von HTML-Tabellen, einschließlich Techniken zum Tabellendesign.

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Eine Einführung in HTML-Tabellen, einschließlich des HTMLs zur Erstellung von Zeilen und Zellen, Überschriften und zum Verbinden von Zellen über mehrere Spalten und Zeilen.

- [Lernen: HTML-Tabellen-Barrierefreiheit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : Ein Blick auf erweiterte HTML-Tabellenfunktionen, einschließlich Überschriften und das Gruppieren von Tabellenzeilen in Kopf-, Körper- und Fußbereiche – sowie auf die Barrierefreiheit von Tabellen für sehbehinderte Benutzer.

## Verwandte Konzepte

- {{cssxref("display")}}-Eigenschaft
- {{cssxref("vertical-align")}}-Eigenschaft
- {{cssxref("text-align")}}-Eigenschaft

- [CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_sizing) Modul
  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}}-Schlüsselwort

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border")}}-Kurzform
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- HTML tabellenbezogene Elemente:
  - {{htmlelement("table")}}
  - {{htmlelement("caption")}}
  - {{htmlelement("colgroup")}}
  - {{htmlelement("col")}}
  - {{htmlelement("thead")}}
  - {{htmlelement("tbody")}}
  - {{htmlelement("tfoot")}}
  - {{htmlelement("tr")}}
  - {{htmlelement("th")}}
  - {{htmlelement("td")}}

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Die CSS 2.2-Spezifikation definiert stabile Standards für das Webdesign, einschließlich detaillierter Spezifikationen für die Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) Spezifikation versucht, diese Funktionen mit erweiterten Funktionen für die Tabellenlayout und -darstellung zu erweitern. Die Modulspezifikation für Tabellen wird jedoch noch entwickelt und ist noch nicht bereit für die Implementierung.

## Siehe auch

- [CSS display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS grid layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS fragmentation](/de/docs/Web/CSS/Guides/Fragmentation) Modul
