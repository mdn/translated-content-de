---
title: CSS flexible box layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: dbb206b01855808bffd7756bbc20100fefe4fbdb
---

{{CSSRef}}

Das **CSS flexible box layout** Modul definiert ein CSS-Boxmodell, das für Benutzeroberflächendesigns und das Layout von Elementen in einer Dimension optimiert ist. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder indem sie wachsen, um ungenutzten Raum zu füllen, oder schrumpfen, um ein Überlaufen des Elternteils zu vermeiden. Sowohl die horizontale als auch vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexible Box Layout im Einsatz

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, wodurch die drei Kinderelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Ein gleicher Abstand wird zwischen jedem Element platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente sich auf der Querachse strecken, aufgrund des Standardwertes von `align-items`, der `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers, wodurch sie jeweils so groß wie das höchste Element erscheinen.

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

### Glossareinträge

- {{Glossary("Flexbox", "Flexbox")}}
- {{Glossary("Flex_container", "Flex container")}}
- {{Glossary("Flex_item", "Flex item")}}
- {{Glossary("Main_axis", "Main axis")}}
- {{Glossary("Cross_axis", "Cross axis")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

  - : Ein Überblick über die Funktionen von Flexbox.

- [Verhältnis von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)

  - : Wie sich Flexbox auf andere Layoutmethoden und andere CSS-Spezifikationen bezieht.

- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

  - : Wie die Box-Ausrichtungs-Eigenschaften mit Flexbox funktionieren.

- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)

  - : Erklärung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern und mögliche Probleme dabei zu behandeln.

- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.

- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Anzeige der Elemente in diesen Zeilen steuert.

- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

  - : Häufige Designmuster, die typische Anwendungsfälle von Flexbox sind.

- [CSS-Layout: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)

  - : Lernen Sie, wie Sie das Flexbox-Layout verwenden, um Weblayouts zu erstellen.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Details zu den Eigenschaften der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS-Anzeigemodul](/de/docs/Web/CSS/CSS_display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS-Box-Sizing-Modul](/de/docs/Web/CSS/CSS_box_sizing)

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwendung der Mehrfach-Schlüsselschreibung mit CSS-Anzeige](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
