---
title: CSS flexibler Box-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: dbb206b01855808bffd7756bbc20100fefe4fbdb
---

{{CSSRef}}

Das **CSS flexible Box-Layout**-Modul definiert ein CSS-Box-Modell, das für die Gestaltung von Benutzeroberflächen und das Layout von Elementen in einer Dimension optimiert ist. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um sich zu verkleinern, um ein Überlaufen des Elternteils zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann einfach manipuliert werden.

## Flexibler Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kinderelemente Flex-Elemente werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Ein gleichmäßiger Abstand wird zwischen jedem Element platziert, wobei die linken und rechten Elemente mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente sich entlang der Querachse strecken, da der Standardwert von `align-items` `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers, was sie jeweils so hoch wie das höchste Element erscheinen lässt.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## Referenz

### Eigenschaften

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Glossarbegriffe

- [Flexbox](/de/docs/Glossary/Flexbox)
- [Flex container](/de/docs/Glossary/Flex_container)
- [Flex item](/de/docs/Glossary/Flex_item)
- [Hauptachse](/de/docs/Glossary/Main_axis)
- [Querachse](/de/docs/Glossary/Cross_axis)
- [Flex](/de/docs/Glossary/Flex)

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

  - : Ein Überblick über die Funktionen von Flexbox.

- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)

  - : Wie Flexbox sich auf andere Layoutmethoden und andere CSS-Spezifikationen bezieht.

- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

  - : Wie die Box-Ausrichtungs-Eigenschaften mit Flexbox funktionieren.

- [Anordnung von Flexelementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)

  - : Erklärt die verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und behandelt potenzielle Probleme dabei.

- [Verhältnisse von Flexelementen entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt die Eigenschaften flex-grow, flex-shrink und flex-basis.

- [Beherrschung des Wickelns von Flexelementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente in diesen Zeilen steuert.

- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

  - : Häufige Designmuster, die typische Flexbox-Anwendungsfälle sind.

- [CSS-Layout: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)

  - : Lernen Sie, wie Sie das Flexbox-Layout zur Erstellung von Weblayouts verwenden.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Details zu Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS-Display-Modul](/de/docs/Web/CSS/CSS_display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- [intrinsische Größe](/de/docs/Glossary/intrinsic_size) Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
