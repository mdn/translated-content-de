---
title: CSS Flexibler Box-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: dbb206b01855808bffd7756bbc20100fefe4fbdb
---

{{CSSRef}}

Das **CSS Flexibler Box-Layout**-Modul definiert ein optimiertes CSS-Box-Modell für das Design von Benutzeroberflächen und die Anordnung von Elementen in einer Dimension. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in beliebiger Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Platz auszufüllen oder um zu vermeiden, dass sie den übergeordneten Container überlaufen. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexibler Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kindelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Zwischen jedem Element wird ein gleicher Abstand platziert, während die linken und rechten Elemente an den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass sich die Elemente auf der Querachse strecken, da der Standardwert von `align-items` `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers und erscheinen so groß wie das höchste Element.

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

- {{Glossary("Flexbox")}}
- {{Glossary("Flex container")}}
- {{Glossary("Flex item")}}
- {{Glossary("Main axis")}}
- {{Glossary("Cross axis")}}
- {{Glossary("Flex")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

  - : Ein Überblick über die Funktionen von Flexbox.

- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)

  - : Wie Flexbox sich auf andere Layoutmethoden und andere CSS-Spezifikationen bezieht.

- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox arbeiten.

- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)

  - : Die verschiedenen Möglichkeiten zur Änderung der Reihenfolge und Richtung der Elemente und die möglichen Probleme dabei.

- [Verhältnis von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärung der Eigenschaften flex-grow, flex-shrink und flex-basis.

- [Meistern der Zeilenumbrüche von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente in diesen Zeilen kontrolliert.

- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

  - : Häufige Designmuster, die typische Flexbox-Anwendungsfälle sind.

- [CSS-Layout: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)

  - : Lernen Sie, wie man mit dem Flexbox-Layout Weblayouts erstellt.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Detailspezifische Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS-Anzeigemodul](/de/docs/Web/CSS/CSS_display)

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

[CSS-Box-Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{glossary("intrinsic size")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwendung der Mehrwort-Syntax mit CSS-Anzeige](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
