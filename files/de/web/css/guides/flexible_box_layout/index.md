---
title: CSS flexibles Box-Layout
short-title: Flexibles Box-Layout
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Das **CSS Flexibles Box-Layout**-Modul definiert ein CSS-Boxmodell, das für das Design von Benutzeroberflächen optimiert ist und das Layout von Elementen in einer Dimension. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und können ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um zu vermeiden, dass sie über das Elternteil hinausgehen. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann leicht manipuliert werden.

## Flexibles Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kind-Elemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Zwischen jedem Element wird ein gleicher Abstand platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers sind. Außerdem können Sie sehen, dass sich die Elemente auf der Kreuzachse strecken, da der Standardwert von `align-items` `stretch` ist. Die Elemente strecken sich auf die Höhe des Flex-Containers, wodurch sie alle so hoch erscheinen wie das höchste Element.

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
- {{cssxref("flex-line-count")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Glossarbegriffe

- {{Glossary("Flexbox", "Flexbox")}}
- {{Glossary("Flex_container", "Flex container")}}
- {{Glossary("Flex_item", "Flex item")}}
- {{Glossary("Main_axis", "Main axis")}}
- {{Glossary("Cross_axis", "Cross axis")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundlagen von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Verhältnis von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Wie Flexbox im Verhältnis zu anderen Layoutmethoden und anderen CSS-Spezifikationen steht.
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Wie die Box-Ausrichtungs-Eigenschaften mit Flexbox funktionieren.
- [Reihenfolge von Flex-Elementen ändern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Erläuterung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung der Elemente zu ändern, sowie potenzielle Probleme dabei.
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erklärung der Eigenschaften flex-grow, flex-shrink und flex-basis.
- [Meistern des Zeilenumbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Anzeige der Elemente in diesen Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Gängige Designmuster, die typische Anwendungsfälle für Flexbox sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Lernen Sie, wie Sie das Flexbox-Layout verwenden, um Weblayouts zu erstellen.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Details zu Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment), die spezifisch für Flexbox sind.

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

[CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

[CSS-Box-Größenanpassung](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- [Verwendung der Multi-Keyword-Syntax mit CSS-Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
