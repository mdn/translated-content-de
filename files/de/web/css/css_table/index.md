---
title: CSS-Tabelle
slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Table**-Modul hilft Ihnen, die Anordnung von Tabellendaten zu definieren.

Dieses CSS-Modul definiert Stile, die auf das HTML-{{htmlelement("table")}}-Element anwendbar sind, welches zur Darstellung von tabellarischen Daten verwendet wird. Standardmäßig werden Tabellen als ein zweidimensionales Raster angezeigt, bei dem die Zellen in einer Reihe aufeinanderfolgender Zeilen und Spalten angeordnet sind. Dieses Layout wird aus der Tabellenstruktur generiert und entsprechend dem Inhalt der Zellen dimensioniert. Dieses Modul ermöglicht auch die Definition der Position des {{htmlelement("caption")}} der Tabelle, wenn vorhanden.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf `<table>`-Elemente beschränkt; sie können auf jedes Element mit einem tabellenbezogenen CSS-{{cssxref("display")}}-Wert angewendet werden.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Leitfäden

- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)

  - : Ein Leitfaden zur Verbesserung des Aussehens von HTML-Tabellen, der Techniken zum Tabellenstyling abdeckt.

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

  - : Eine Einführung in HTML-Tabellen, einschließlich des HTMLs zur Erstellung von Zeilen und Zellen, Überschriften und zum Zusammenführen von Zellen über mehrere Spalten und Zeilen.

- [Lernen: Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)

  - : Ein Blick auf fortgeschrittene HTML-Tabellenfunktionen, einschließlich Beschriftungen und das Gruppieren von Tabellenzeilen in Tabellenkopf-, Körper- und Fußteilbereiche – sowie ein Überblick über die Zugänglichkeit von Tabellen für sehbehinderte Nutzer.

## Verwandte Konzepte

- {{cssxref("display")}}-Eigenschaft
- {{cssxref("vertical-align")}}-Eigenschaft
- {{cssxref("text-align")}}-Eigenschaft

- [CSS-Box-sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul

  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}}-Schlüsselwort

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul

  - {{cssxref("border")}}-Kurzform
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- HTML-Tabellenbezogene Elemente:

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
> Die CSS-2.2-Spezifikation definiert stabile Standards für das Web-Styling, einschließlich detaillierter Spezifikationen für die Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/)-Spezifikation versucht, diese Fähigkeiten mit erweiterten Funktionen für die Tabellenorganisation und -darstellung zu erweitern. Allerdings befindet sich die Tabellenmodul-Spezifikation noch in der Entwicklung und ist noch nicht zur Implementierung bereit.

## Siehe auch

- [CSS-Anzeige](/de/docs/Web/CSS/CSS_display)-Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
