---
title: CSS Flexibler Box-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS Flexible Box-Layout**-Modul definiert ein CSS-Box-Modell, das für die Gestaltung von Benutzeroberflächen optimiert ist und die Anordnung von Elementen in einer Dimension ermöglicht. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jeder Richtung angeordnet werden und ihre Größen "flexen", entweder indem sie wachsen, um ungenutzten Raum zu füllen, oder schrumpfen, um ein Überlaufen des Elternteils zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexibler Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kinderelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig entlang der Hauptachse zu verteilen. Ein gleicher Abstand wird zwischen den einzelnen Elementen platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass sich die Elemente auf der Querachse strecken, aufgrund des Standardwertes von `align-items`, der `stretch` ist. Die Elemente strecken sich bis zur Höhe des Flex-Containers, wodurch sie jeweils so hoch erscheinen wie das größte Element.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Eigenschaften von Flexbox.
- [Verhältnis von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox in Beziehung zu anderen Layoutmethoden und anderen CSS-Spezifikationen steht.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Bestellung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erläutert die verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, sowie die potenziellen Probleme dabei.
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erläuterung der Eigenschaften flex-grow, flex-shrink und flex-basis.
- [Beherrschung der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : So erstellen Sie Flex-Container mit mehreren Linien und steuern die Darstellung der Elemente in diesen Linien.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Häufige Designmuster, die typische Flexbox-Anwendungsfälle sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Erfahren Sie, wie Sie Flexbox verwenden, um Web-Layouts zu erstellen.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Behandelt Eigenschaften der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die speziell für Flexbox gelten.

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
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwendung der Mehrfach-Schlüsselwortsyntax mit CSS display](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
