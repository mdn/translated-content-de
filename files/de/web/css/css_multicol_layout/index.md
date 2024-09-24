---
title: CSS Mehrspalten-Layout
slug: Web/CSS/CSS_multicol_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}
Das **CSS Mehrspalten-Layout** Modul ermöglicht es Ihnen, Inhalte über mehrere Spalten zu verteilen. Durch die Verwendung der Eigenschaften in diesem Modul können Sie die bevorzugte Anzahl und Breite der Spalten, die Größe des Abstands zwischen den Spalten und das visuelle Erscheinungsbild der optionalen Spaltentrennlinien (bekannt als Spaltenregeln) definieren. Sie können auch festlegen, wie Inhalte von Spalte zu Spalte fließen sollen und wie Inhalte zwischen Spalten unterbrochen werden.

## Mehrspalten-Layout in Aktion

In diesem Beispiel wird die Rede von 1967 zum 100-jährigen Jubiläum Kanadas, _A Lament for Confederation_, von Chief Dan George, über mehrere Spalten verteilt angezeigt, ähnlich wie Artikel in gedruckten Zeitungen. Wenn Sie JavaScript aktiviert haben, ermöglichen Steuerungen das Ändern der bevorzugten Spaltenanzahl und -breite, der Breite des Abstands zwischen den Spalten, ob der Titel und ein Beispiel-Blockzitat in einer einzigen Spalte enthalten sein oder über alle Spalten hinwegzugehen sollen, und ob das Brechen innerhalb der Absätze vermieden werden soll.

{{EmbedGHLiveSample("css-examples/modules/multicol.html", '100%', 650)}}

Um den Code für dieses Spaltenlayout zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/multicol.html) an.

> [!NOTE]
> Das Mehrspalten-Layout steht in enger Beziehung zu [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media). Jede Spaltenbox ist ein Fragment, ähnlich wie jede gedruckte Seite ein Fragment eines Dokuments ist. Mit den im [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul definierten Eigenschaften können Sie steuern, wie Inhalte zwischen Spalten und Seiten unterbrochen werden.

## Referenz

### Eigenschaften

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} Kurzschrift
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} Kurzschrift
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> Beachten Sie, dass das Festlegen der Containerhöhe und Linienlänge Herausforderungen für Menschen mit visuellen oder kognitiven Beeinträchtigungen darstellen kann. [WCAG Erfolgskriterium 1.4.8](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) besagt, dass selbst wenn die Textgröße verdoppelt wird, der Inhalt nicht gescrollt werden muss.

## Leitfäden

- [Grundkonzepte des Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die Multiple-column Layout-Spezifikation
- [Styling von Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Wie man Spaltenregeln verwendet und den Abstand zwischen den Spalten verwaltet.
- [Spannen und Ausbalancieren](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Wie man Elemente über alle Spalten erstreckt und kontrolliert, wie die Spalten gefüllt werden.
- [Überlauf im Mehrspalten-Layout handhaben](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn ein Element die Spalte überläuft, in der es sich befindet, und was passiert, wenn es zu viel Spalteninhalt gibt, um einen Container zu füllen.
- [Umbruch von Inhalten im Mehrspalten-Layout handhaben](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Einführung in die Fragmentierungsspezifikation und wie man kontrolliert, wo Spalteninhalte unterbrochen werden.

## Verwandte Konzepte

- {{cssxref("orphans")}} CSS-Eigenschaft
- {{cssxref("widows")}} CSS-Eigenschaft
- {{cssxref("overflow")}} CSS-Eigenschaft
- {{cssxref("gap")}} CSS-Eigenschaft
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- {{cssxref("line-style")}} aufgezählter Datentyp
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
