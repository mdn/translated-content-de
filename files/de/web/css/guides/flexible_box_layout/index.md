---
title: CSS Flexible Box Layout
short-title: Flexibles Box Layout
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Das **CSS Flexible Box Layout** Modul definiert ein CSS-Box-Modell, das für die Gestaltung von Benutzeroberflächen optimiert ist und das Layout von Elementen in einer Dimension ermöglicht. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen können sich "flexibel" anpassen, indem sie entweder wachsen, um ungenutzten Raum zu füllen, oder schrumpfen, um ein Überlaufen des Elternteils zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder können einfach manipuliert werden.

## Flexibles Box Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kindelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Ein gleicher Abstand wird zwischen jedem Element platziert, wobei das linke und das rechte Element bündig mit den Rändern des Flex-Containers sind. Sie können auch sehen, dass die Elemente auf der Querachse gestreckt werden, aufgrund des Standardwerts von `align-items`, der `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers, sodass sie jeweils so hoch wie das höchste Element erscheinen.

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
- {{Glossary("Flex_container", "Flex container")}}
- {{Glossary("Flex_item", "Flex item")}}
- {{Glossary("Main_axis", "Hauptachse")}}
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Wie sich Flexbox zu anderen Layoutmethoden und CSS-Spezifikationen verhält.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Reihenfolge der Flex-Elemente ändern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Erklärung der verschiedenen Möglichkeiten zur Änderung der Reihenfolge und Richtung von Elementen sowie potenziellen Problemen dabei.
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erläutert die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Wie Sie Flex-Container mit mehreren Zeilen erstellen und die Anzeige der Elemente in diesen Zeilen steuern.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Häufige Designmuster, die typische Verwendungszwecke von Flexbox sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Erlernen Sie die Verwendung des Flexbox-Layouts zur Erstellung von Web-Layouts.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Details zu den Eigenschaften der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}

[CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

[CSS-Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "Intrinsic Size")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- [Verwendung der Multi-Keyword-Syntax mit CSS-Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
