---
title: CSS-Tabelle
slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Tabelle** Modul hilft Ihnen, die Anordnung von Tabellendaten zu definieren.

Dieses CSS-Modul definiert Stile, die für das HTML-Element {{htmlelement("table")}} anwendbar sind, welches zur Darstellung tabellarischer Daten verwendet wird. Standardmäßig werden Tabellen als zweidimensionales Raster mit Zellen dargestellt, die in einer Reihe aufeinanderfolgender Zeilen und Spalten angeordnet sind. Dieses Layout wird aus der Tabellenstruktur generiert und anhand des Inhalts der Zellen dimensioniert. Dieses Modul ermöglicht es auch, die Position der {{htmlelement("caption")}} der Tabelle, sofern vorhanden, zu definieren.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf `<table>`-Elemente beschränkt; sie können auf jedes Element angewendet werden, das einen tabellenbezogenen CSS-{{cssxref("display")}}-Wert besitzt.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Leitfäden

- [Lernen: CSS-Tabellenlayout](/de/docs/Learn/CSS/CSS_layout/Introduction#table_layout)

  - : Ein Überblick über CSS-Layouts, einschließlich der Festlegung tabellenbezogener `display`-Werte, um CSS-Tabelleneigenschaften auf jedes Element anzuwenden.

- [Lernen: Tabellenstil](/de/docs/Learn/CSS/Building_blocks/Styling_tables)

  - : Ein Leitfaden zur Verbesserung des Erscheinungsbildes von HTML-Tabellen, der Techniken zum Table-Styling behandelt.

- [Lernen: HTML-Tabellengrundlagen](/de/docs/Learn/HTML/Tables/Basics)

  - : Eine Einführung in HTML-Tabellen, einschließlich des HTML zum Erstellen von Zeilen und Zellen, Überschriften, dem Zusammenführen von Zellen über mehrere Spalten und Zeilen hinweg und dem Gruppieren von Zellen in einer Spalte zu Styling-Zwecken.

- [Lernen: Erweiterte HTML-Tabellenfunktionen und Barrierefreiheit](/de/docs/Learn/HTML/Tables/Advanced)

  - : Ein Blick auf erweiterte HTML-Tabellenfunktionen, einschließlich Beschriftungen und das Gruppieren von Tabellenzeilen in Kopf-, Körper- und Fußabschnitte – sowie die Betrachtung der Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

## Verwandte Konzepte

- {{cssxref("display")}} Eigenschaft
- {{cssxref("vertical-align")}} Eigenschaft
- {{cssxref("text-align")}} Eigenschaft

- [CSS Box-Größe](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}} Schlüsselwort

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

  - {{cssxref("border")}} Kurzform
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- HTML-tabellenbezogene Elemente:

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
> Die CSS 2.2 Spezifikation definiert stabile Standards für Web-Styling, einschließlich detaillierter Spezifikationen für die Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) Spezifikation strebt an, diese Fähigkeiten durch erweiterte Funktionen für Tabellenlayout und -darstellung auszubauen. Das Tabellenspezifikationsmodul befindet sich jedoch noch in der Entwicklung und ist noch nicht zur Implementierung bereit.

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Boxlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
