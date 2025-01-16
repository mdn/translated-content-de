---
title: CSS-Flexbox-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Das **CSS-Flexbox-Layout**-Modul definiert ein CSS-Box-Modell, das für das Design von Benutzeroberflächen optimiert ist und die Anordnung von Elementen in einer Dimension ermöglicht. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um zu vermeiden, dass sie den Eltern überschreiten. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexbox-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kindelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Ein gleicher Abstand wird zwischen jedes Element gesetzt, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente sich auf der Querachse strecken, da der Standardwert von `align-items` `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers und erscheinen so jeweils so hoch wie das höchste Element.

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
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox im Verhältnis zu anderen Layout-Methoden und CSS-Spezifikationen steht.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärungen zu den verschiedenen Möglichkeiten, die Reihenfolge und Richtung der Elemente zu ändern, und die potenziellen Probleme dabei.
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärungen zu den Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente in diesen Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Häufige Designmuster, die typische Anwendungsfälle für Flexbox sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Lernen Sie, wie man mit Flexbox-Layout Weblayouts erstellt.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Detailierte Funktionen der [CSS-Box-Ausgleichung](/de/docs/Web/CSS/CSS_box_alignment), spezifisch für Flexbox.

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

[CSS-Box-Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit `CSS display`](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display)
