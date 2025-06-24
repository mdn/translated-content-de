---
title: CSS-Tabelle
slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Tabelle** Modul hilft Ihnen dabei, die Anordnung von Tabellendaten zu definieren.

Dieses CSS-Modul definiert Stile, die auf das HTML-{{htmlelement("table")}}-Element anwendbar sind, welches verwendet wird, um tabellarische Daten darzustellen. Standardmäßig werden Tabellen als ein zweidimensionales Raster mit Zellen in einer Reihe aufeinanderfolgender Zeilen und Spalten dargestellt. Diese Anordnung wird aus der Tabellenstruktur generiert und entsprechend dem Inhalt der Zellen dimensioniert. Dieses Modul ermöglicht auch die Definition der Position der {{htmlelement("caption")}} der Tabelle, falls vorhanden.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf die `<table>`-Elemente beschränkt; sie können auf jedes Element mit einem tabellenbezogenen CSS-{{cssxref("display")}}-Wert angewandt werden.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Leitfäden

- [Lernen: Stilierung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)

  - : Ein Leitfaden zur Verbesserung des Erscheinungsbildes von HTML-Tabellen, der Techniken zur Tabellengestaltung abdeckt.

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

  - : Eine Einführung in HTML-Tabellen, einschließlich des HTMLs zum Erstellen von Zeilen und Zellen, Überschriften und dem Erstellen von Zellen, die sich über mehrere Spalten und Zeilen erstrecken.

- [Lernen: Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : Ein Blick auf erweiterte HTML-Tabellenfunktionen, einschließlich Beschriftungen und die Gruppierung von Tabellenzeilen in Kopf-, Körper- und Fußzeilenabschnitte — sowie ein Blick auf die Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

## Verwandte Konzepte

- {{cssxref("display")}}-Eigenschaft
- {{cssxref("vertical-align")}}-Eigenschaft
- {{cssxref("text-align")}}-Eigenschaft

- [CSS-Box-Size](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}}-Schlüsselwort

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

  - {{cssxref("border")}}-Shorthand
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- HTML-table-bezogene Elemente:
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
> Die CSS 2.2-Spezifikation definiert stabile Standards für die Web-Stilierung, einschließlich detaillierter Spezifikationen für die Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/)-Spezifikation bemüht sich, diese Möglichkeiten mit erweiterten Funktionen für Tabellenlayout und -darstellung zu erweitern. Das Tabellenmodul befindet sich jedoch noch in der Entwicklung und ist noch nicht zur Implementierung bereit.

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
