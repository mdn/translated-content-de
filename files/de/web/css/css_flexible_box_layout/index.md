---
title: CSS-Flexbox-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

Das **CSS flexible box layout**-Modul definiert ein CSS-Boxmodell, das für die Gestaltung von Benutzeroberflächen und das Layout von Elementen in einer Dimension optimiert ist. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um zu schrumpfen, um ein Überlaufen des Elternteils zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann einfach manipuliert werden.

## Flexibles Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kind-Elemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Eine gleiche Menge an Raum befindet sich zwischen jedem Element, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente auf der Querachse gestreckt werden, da der Standardwert von `align-items` `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers und erscheinen dadurch jeweils so hoch wie das höchste Element.

```html live-sample___simple-example
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___simple-example
body {
  font-family: sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: space-between;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
}
```

{{EmbedLiveSample("simple-example")}}

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

- {{Glossary("Flexbox", "Flexbox")}}
- {{Glossary("Flex_container", "Flex-Container")}}
- {{Glossary("Flex_item", "Flex-Element")}}
- {{Glossary("Main_axis", "Hauptachse")}}
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox im Verhältnis zu anderen Layout-Methoden und CSS-Spezifikationen steht.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Sortieren von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärt die verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und behandelt mögliche Probleme dabei.
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärt die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Beherrschen der Umbruch-Möglichkeiten von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flex-Container mit mehreren Linien erstellt und die Darstellung der Elemente in diesen Linien kontrolliert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Gängige Designmuster, die typische Flexbox-Anwendungsfälle sind.
- [CSS-Layout: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
  - : Lernen Sie, wie man das Flexbox-Layout zur Erstellung von Web-Layouts verwendet.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Detailliert die Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die spezifisch für Flexbox sind.

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

[CSS-Box-Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS-Anzeige](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
