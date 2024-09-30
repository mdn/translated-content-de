---
title: CSS multi-column layout
slug: Web/CSS/CSS_multicol_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}
Das Modul **CSS multi-column layout** ermöglicht es Ihnen, Inhalte über mehrere Spalten zu verteilen. Mit den Eigenschaften dieses Moduls können Sie die gewünschte Anzahl und Breite der Spalten, die Größe des Abstands zwischen den Spalten und das visuelle Erscheinungsbild der optionalen Spaltentrennungslinien (bekannt als Spaltenregeln) definieren. Sie können auch festlegen, wie der Inhalt von Spalte zu Spalte fließen soll und wie der Inhalt zwischen den Spalten aufgeteilt werden soll.

## Multi-Column-Layout in Aktion

In diesem Beispiel wird die Rede von 1967 zur hundertjährigen Feier Kanadas, _A Lament for Confederation_ von Chief Dan George, über mehrere Spalten angezeigt, ähnlich wie Zeitungsartikel in gedruckten Zeitungen dargestellt werden. Wenn Sie JavaScript aktiviert haben, ermöglichen Steuerungen, die bevorzugte Spaltenanzahl und -breite zu ändern, die Breite der Zwischenräume zwischen den Spalten, ob der Titel und ein Beispiel-Blockzitat in einer einzelnen Spalte oder über alle Spalten hinweg angezeigt werden soll und ob das Umbrechen innerhalb der Absätze vermieden werden soll.

{{EmbedGHLiveSample("css-examples/modules/multicol.html", '100%', 650)}}

Um den Code für dieses spaltenbasierte Layout zu sehen, [sehen Sie sich den Quelltext auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/multicol.html).

> [!NOTE]
> Mehrspaltige Layouts stehen in engem Zusammenhang mit [paged media](/de/docs/Web/CSS/CSS_paged_media). Jedes Spaltenkästchen ist ein Fragment, ähnlich wie jede gedruckte Seite ein Fragment eines Dokuments ist. Mit den im Modul [CSS fragmentation](/de/docs/Web/CSS/CSS_fragmentation) definierten Eigenschaften können Sie steuern, wie Inhalte zwischen Spalten und Seiten gebrochen werden.

## Referenz

### Eigenschaften

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} Kurzform
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} Kurzform
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> Bedenken Sie, dass das Einstellen der Containerhöhe und der Zeilenlänge Herausforderungen für Menschen mit visuellen oder kognitiven Behinderungen darstellen kann. [WCAG Erfolgs-Kriterium 1.4.8](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) besagt, dass auch wenn die Textgröße verdoppelt wird, der Inhalt nicht scrollbar sein sollte.

## Leitfäden

- [Grundkonzepte des Multi-Column-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die Multiple-Column-Layout-Spezifikation
- [Styling von Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Wie man Spaltenregeln verwendet und den Abstand zwischen Spalten verwaltet.
- [Übergreifen und Ausgleichen](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Wie man Elemente über alle Spalten hinwegspannt und die Art und Weise, wie Spalten gefüllt werden, steuert.
- [Umgang mit Überlauf im Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn ein Element die Spalte, in der es sich befindet, überläuft und was passiert, wenn zu viele Spalteninhalte in einen Container passen sollen.
- [Umgang mit Inhaltsumbrüchen im Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Einführung in die Fragmentierungsspezifikation und wie man steuert, wo Spalteninhalte gebrochen werden.

## Verwandte Konzepte

- {{cssxref("orphans")}} CSS-Eigenschaft
- {{cssxref("widows")}} CSS-Eigenschaft
- {{cssxref("overflow")}} CSS-Eigenschaft
- {{cssxref("gap")}} CSS-Eigenschaft
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- {{cssxref("line-style")}} aufgezählte Datentyp
- [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Multiple-Column-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- Modul [CSS fragmentation](/de/docs/Web/CSS/CSS_fragmentation)
- Modul [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout)
- Modul [CSS paged media](/de/docs/Web/CSS/CSS_paged_media)
