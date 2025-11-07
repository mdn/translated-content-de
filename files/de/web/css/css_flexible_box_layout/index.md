---
title: CSS Flexibler Box-Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS Flexibler Box-Layout**-Modul definiert ein CSS-Boxmodell, das für das Design von Benutzeroberflächen optimiert ist und das Layout von Elementen in einer Dimension. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen können sich "flexen", entweder um ungenutzten Platz zu füllen oder um zu verhindern, dass der Inhalt aus dem übergeordneten Element herausfließt. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann einfach manipuliert werden.

## Flexibler Box-Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kindelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` gesetzt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Ein gleicher Abstand wird zwischen jedem Element platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flex-Containers abschließen. Sie können auch sehen, dass die Elemente auf der Querachse gestreckt werden, aufgrund des Standardwerts von `align-items`, der `stretch` ist. Die Elemente dehnen sich auf die Höhe des Flex-Containers aus und erscheinen daher alle gleich hoch wie das höchste Element.

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
  - : Ein Überblick über die Eigenschaften von Flexbox.
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Wie Flexbox im Verhältnis zu anderen Layout-Methoden und CSS-Spezifikationen steht.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Erklärung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und Behandlung der potenziellen Probleme dabei.
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erklärung der Eigenschaften flex-grow, flex-shrink und flex-basis.
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente in diesen Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Häufige Designmuster, die typische Anwendungsfälle für Flexbox darstellen.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Lernen Sie, wie man mit Flexbox-Layout Weblayouts erstellt.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Details zu den Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment), die spezifisch für Flexbox sind.

## Verwandte Konzepte

[CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS-Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} Wert
- {{cssxref("min-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Schreibrichtungen](/de/docs/Web/CSS/Guides/Writing_modes) Modul
- [Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
