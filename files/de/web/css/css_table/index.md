---
title: CSS table
slug: Web/CSS/CSS_table
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Tabellenmodul** hilft dabei, festzulegen, wie Tabellendaten angeordnet werden sollen.

Dieses CSS-Modul definiert Stile, die auf das HTML-{{htmlelement("table")}}-Element anwendbar sind, das zur Darstellung von Tabellendaten verwendet wird. Standardmäßig werden Tabellen als ein zweidimensionales Raster gerendert, bei dem die Zellen in einer Reihe aufeinanderfolgender Zeilen und Spalten angeordnet sind. Dieses Layout wird aus der Tabellenstruktur erzeugt und entsprechend dem Inhalt der Zellen dimensioniert. Dieses Modul ermöglicht auch die Definition der Position der {{htmlelement("caption")}} der Tabelle, falls vorhanden.

Die in diesem Modul eingeführten Eigenschaften sind nicht auf die `<table>`-Elemente beschränkt; sie können auf jedes Element mit einem Tabellen-bezogenen CSS-{{cssxref("display")}}-Wert angewendet werden.

## Referenz

### Eigenschaften

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Leitfäden

- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Ein Leitfaden zur Verbesserung des Aussehens von HTML-Tabellen, behandelt Techniken zur Tabellenstilierung.

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Eine Einführung in HTML-Tabellen, einschließlich der HTML-Codierung zur Erstellung von Zeilen und Zellen, Überschriften und der Verknüpfung von Zellen über mehrere Spalten und Zeilen.

- [Lernen: Zugänglichkeit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : Ein Blick auf fortgeschrittene Funktionen von HTML-Tabellen, einschließlich Beschriftungen und das Gruppieren von Tabellenzeilen in Kopf-, Körper- und Fußabschnitte der Tabelle — sowie die Betrachtung der Zugänglichkeit von Tabellen für sehbehinderte Benutzer.

## Verwandte Konzepte

- {{cssxref("display")}} Eigenschaft
- {{cssxref("vertical-align")}} Eigenschaft
- {{cssxref("text-align")}} Eigenschaft

- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
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
> Die CSS 2.2-Spezifikation definiert stabile Standards für Web-Styling, einschließlich detaillierter Spezifikationen für die Tabellenformatierung. Die [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) Spezifikation versucht, diese Fähigkeiten mit fortgeschrittenen Funktionen für Tabellenlayout und -darstellung zu erweitern. Allerdings wird die Tabellenspezifikation noch entwickelt und ist noch nicht zur Implementierung bereit.

## Siehe auch

- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
