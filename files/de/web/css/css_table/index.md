---
title: CSS-Tabelle
slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Tabelle** Modul hilft Ihnen, das Layout von Tabellendaten zu definieren.

Dieses CSS-Modul definiert Stile, die auf das HTML-{{htmlelement("table")}}-Element anwendbar sind, das zum Rendern von tabellarischen Daten verwendet wird. Standardmäßig werden Tabellen als zweidimensionales Raster mit Zellen gerendert, die in einer Reihe von aufeinanderfolgenden Zeilen und Spalten angeordnet sind. Dieses Layout wird aus der Tabellenstruktur generiert und gemäß dem Inhalt der Zellen dimensioniert. Dieses Modul ermöglicht auch die Definition der Position der {{htmlelement("caption")}} der Tabelle, falls vorhanden.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf die `<table>`-Elemente beschränkt; sie können auf jedes Element mit einem tabellenbezogenen CSS-{{cssxref("display")}}-Wert angewendet werden.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Anleitungen

- [Lernen: CSS-Tabellenlayout](/de/docs/Learn/CSS/CSS_layout/Introduction#table_layout)

  - : Ein Überblick über CSS-Layouts, einschließlich der Einstellung tabellenbezogener `display`-Werte, um die Verwendung von CSS-Tabelleneigenschaften auf jedem Element zu ermöglichen.

- [Lernen: Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)

  - : Ein Leitfaden zur Verbesserung des Erscheinungsbildes von HTML-Tabellen, der Techniken zur Tabellenformatierung behandelt.

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Basics)

  - : Eine Einführung in HTML-Tabellen, einschließlich des HTMLs für das Erstellen von Zeilen und Zellen, Überschriften, Zellen, die mehrere Spalten und Zeilen überspannen, und das Gruppieren von Zellen in einer Spalte zu Styling-Zwecken.

- [Lernen: Erweiterte Funktionen und Zugänglichkeit von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Advanced)

  - : Ein Blick auf erweiterte Funktionen von HTML-Tabellen, einschließlich der Verwendung von Überschriften und der Gruppierung von Tabellenzeilen in Kopf-, Körper- und Fußbereich — sowie ein Blick auf die Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

## Verwandte Konzepte

- {{cssxref("display")}}-Eigenschaft
- {{cssxref("vertical-align")}}-Eigenschaft
- {{cssxref("text-align")}}-Eigenschaft

- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}} Schlüsselwort

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

  - {{cssxref("border")}} Shorthand
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
> Die CSS 2.2-Spezifikation definiert stabile Standards für Web-Design, einschließlich detaillierter Spezifikationen für Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) Spezifikation versucht, diese Fähigkeiten mit erweiterten Funktionen für Tabellenlayout und -darstellung zu erweitern. Allerdings wird die Tabellenmodul-Spezifikation noch entwickelt und ist noch nicht bereit für die Implementierung.

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Flexibles-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
