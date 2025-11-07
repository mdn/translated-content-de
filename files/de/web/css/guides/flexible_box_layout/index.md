---
title: CSS flexibles Box-Layout
short-title: Flexibles Box-Layout
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS flexibles Box-Layout** Modul definiert ein CSS-Boxmodell, das für Benutzeroberflächen-Design und das Layout von Elementen in einer Dimension optimiert ist. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jeder Richtung angeordnet werden und ihre Größen "flexibilisieren", entweder durch Wachsen, um ungenutzten Raum zu füllen, oder Schrumpfen, um ein Überlaufen des übergeordneten Elements zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexibles Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kinderelemente Flex-Elemente werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente auf der Hauptachse gleichmäßig zu verteilen. Ein gleicher Abstand wird zwischen jedem Element platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente auf der Querachse gestreckt werden, aufgrund des Standardwerts von `align-items`, der `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers und erscheinen dadurch jeweils so hoch wie das höchste Element.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Verhältnis von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Wie sich Flexbox zu anderen Layout-Methoden und CSS-Spezifikationen verhält.
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Wie die Box-Ausrichtungs-Eigenschaften mit Flexbox funktionieren.
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Erläuterung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung der Elemente zu ändern, und die möglichen Probleme dabei.
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erklärung der Eigenschaften flex-grow, flex-shrink und flex-basis.
- [Beherrschung der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente in diesen Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Häufige Designmuster, die typische Flexbox-Anwendungsfälle sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Erlernen, wie man das Flexbox-Layout zur Erstellung von Web-Layouts verwendet.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Detaillierte Merkmale der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS Display Modul](/de/docs/Web/CSS/Guides/Display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS Box-Größe](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- [Verwendung der Mehr-Schlüsselwort-Syntax mit CSS Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
