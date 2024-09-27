---
title: CSS Multi-Column-Layout
slug: Web/CSS/CSS_multicol_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}
Das **CSS Multi-Column-Layout**-Modul ermöglicht es Ihnen, Inhalte über mehrere Spalten zu verteilen. Mit den Eigenschaften dieses Moduls können Sie die bevorzugte Anzahl und Breite der Spalten, die Größe des Abstands zwischen den Spalten und das visuelle Erscheinungsbild der optionalen Spaltentrennungslinien (bekannt als Spaltenregeln) definieren. Sie können auch festlegen, wie der Inhalt von Spalte zu Spalte fließen soll und wie der Inhalt zwischen den Spalten aufgeteilt werden soll.

## Multi-Column-Layout in Aktion

In diesem Beispiel wird die Rede von 1967 zum 100-jährigen Bestehen Kanadas, _A Lament for Confederation_, von Chief Dan George, über mehrere Spalten hinweg dargestellt, ähnlich wie Artikel in gedruckten Zeitungen angezeigt werden. Wenn Sie JavaScript aktiviert haben, ermöglichen Steuerelemente das Ändern der bevorzugten Spaltenanzahl und -breite, die Breite des Abstands zwischen den Spalten, ob der Titel und ein Beispiel-Blockzitat in einer einzigen Spalte enthalten sein oder über alle Spalten erstreckt werden sollen und ob das Brechen innerhalb der Absätze vermieden werden soll.

{{EmbedGHLiveSample("css-examples/modules/multicol.html", '100%', 650)}}

Um den Code für dieses Spaltenlayout zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/multicol.html).

> [!NOTE]
> Mehrspalten-Layout steht in engem Zusammenhang mit [paged media](/de/docs/Web/CSS/CSS_paged_media). Jedes Spaltenfeld ist ein Fragment, ähnlich wie jede gedruckte Seite ein Fragment eines Dokuments ist. Mit den im Modul [CSS fragmentation](/de/docs/Web/CSS/CSS_fragmentation) definierten Eigenschaften können Sie steuern, wie Inhalt zwischen Spalten und Seiten unterbrochen wird.

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
> Beachten Sie, dass das Festlegen der Containerhöhe und der Zeilenlänge Herausforderungen für Menschen mit Seh- oder kognitiven Behinderungen darstellen kann. [WCAG-Erfolgskriterium 1.4.8](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) besagt, dass selbst wenn die Textgröße verdoppelt wird, der Inhalt nicht gescrollt werden muss.

## Leitfäden

- [Grundkonzepte des Multi-Column-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die Spezifikation des Mehrspalten-Layouts
- [Spalten stylen](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Wie man Spaltenregeln verwendet und den Abstand zwischen Spalten verwaltet.
- [Spanning und Balancing](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Wie Elemente über alle Spalten erstreckt werden und wie die Spalten gefüllt werden.
- [Überlauf im Multi-Column-Layout verwalten](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn ein Element die Spalte überläuft, in der es sich befindet, und was passiert, wenn zu viel Spalteninhalt vorhanden ist, um in einen Container zu passen.
- [Umgang mit Inhaltsunterbrechungen im Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Einführung in die Spezifikation der Fragmentierung und wie gesteuert wird, wo Spalteninhalte unterbrochen werden.

## Verwandte Konzepte

- {{cssxref("orphans")}} CSS-Eigenschaft
- {{cssxref("widows")}} CSS-Eigenschaft
- {{cssxref("overflow")}} CSS-Eigenschaft
- {{cssxref("gap")}} CSS-Eigenschaft
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- {{cssxref("line-style")}} aufgelisteter Datentyp
- [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- Modul [CSS fragmentation](/de/docs/Web/CSS/CSS_fragmentation)
- Modul [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- Modul [CSS paged media](/de/docs/Web/CSS/CSS_paged_media)
