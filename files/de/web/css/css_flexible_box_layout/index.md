---
title: CSS Flexible Box Layout
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Das **CSS flexible box layout**-Modul definiert ein CSS-Boxmodell, das für das Design von Benutzeroberflächen und das Layout von Elementen in einer Dimension optimiert ist. Im Flexlayout-Modell können die Kinder eines Flexcontainers in jede Richtung angeordnet werden und ihre Größen „flexibilisieren“, indem sie entweder wachsen, um ungenutzten Platz zu füllen, oder schrumpfen, um ein Überlaufen des übergeordneten Elements zu vermeiden. Sowohl die horizontale als auch die vertikale Ausrichtung der Kinder kann einfach manipuliert werden.

## Flexible Box Layout in Aktion

Im folgenden Beispiel wurde ein Container auf `display: flex` gesetzt, was bedeutet, dass die drei Kindelemente zu Flex-Elementen werden. Der Wert von `justify-content` wurde auf `space-between` festgelegt, um die Elemente gleichmäßig auf der Hauptachse zu verteilen. Zwischen jedem Element wird ein gleichmäßiger Abstand platziert, wobei die linken und rechten Elemente bündig mit den Rändern des Flexcontainers abschließen. Sie können auch sehen, dass die Elemente auf der Querachse gestreckt werden, da der Standardwert von `align-items` auf `stretch` gesetzt ist. Die Elemente strecken sich auf die Höhe des Flexcontainers, sodass sie alle so hoch wie das höchste Element erscheinen.

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
- {{Glossary("Main_axis", "Main axis")}}
- {{Glossary("Cross_axis", "Cross axis")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehungen von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox mit anderen Layoutmethoden und CSS-Spezifikationen zusammenhängt.
- [Ausrichten von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Reihenfolge von Flex-Elementen festlegen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, einschließlich der potenziellen Probleme.
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärung der Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Meisterung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Anzeige der Elemente in diesen Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Häufige Designmuster, die typische Anwendungsfälle für Flexbox sind.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Lernen Sie, wie man mit dem Flexbox-Layout Webseiten gestaltet.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Details zu den Funktionen der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die speziell für Flexbox gelten.

## Verwandte Konzepte

[CSS Display-Modul](/de/docs/Web/CSS/CSS_display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}}-Wert
- {{cssxref("min-content")}}-Wert
- {{cssxref("fit-content")}}-Wert
- {{Glossary("intrinsic_size", "intrinsische Größe")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes)-Modul
- [Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS Display](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)
