---
title: CSS-Flexbox-Layout
short-title: Flexible box layout
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

Das Modul **CSS-Flexbox-Layout** definiert ein CSS-Boxmodell, das für die Gestaltung von Benutzeroberflächen und die eindimensionale Anordnung von Elementen optimiert ist. Im Flex-Layout-Modell können die Kindelemente eines Flex-Containers in beliebiger Richtung angeordnet werden. Ihre Größe kann sich flexibel ändern: Sie können wachsen, um ungenutzten Platz auszufüllen, oder schrumpfen, damit sie nicht über das Elternelement hinausragen. Sowohl die horizontale als auch die vertikale Ausrichtung der Kindelemente lässt sich einfach anpassen.

## Flexbox-Layout in Aktion

Im folgenden Beispiel wurde für einen Container `display: flex` festgelegt. Dadurch werden seine drei Kindelemente zu Flex-Elementen. `justify-content` hat den Wert `space-between`, damit die Elemente entlang der Hauptachse verteilt werden. Zwischen den Elementen befindet sich jeweils gleich viel Platz, während das linke und das rechte Element bündig an den Rändern des Flex-Containers liegen. Sie können außerdem sehen, dass sich die Elemente entlang der Querachse ausdehnen, da `align-items` standardmäßig den Wert `stretch` hat. Die Elemente dehnen sich auf die Höhe des Flex-Containers aus, sodass sie alle so hoch erscheinen wie das höchste Element.

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
- {{Glossary("Flex_container", "Flex-Container")}}
- {{Glossary("Flex_item", "Flex-Element")}}
- {{Glossary("Main_axis", "Hauptachse")}}
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Flex", "Flex")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehung zwischen Flexbox und anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Wie Flexbox mit anderen Layoutmethoden und CSS-Spezifikationen zusammenhängt.
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Wie die Eigenschaften zur Box-Ausrichtung mit Flexbox funktionieren.
- [Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Erläutert die verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, sowie mögliche Probleme dabei.
- [Größenverhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erläutert die Eigenschaften flex-grow, flex-shrink und flex-basis.
- [Den Zeilenumbruch von Flex-Elementen beherrschen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Wie Sie mehrzeilige Flex-Container erstellen und die Darstellung der Elemente in diesen Zeilen steuern.
- [Typische Anwendungsfälle für Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Häufige Gestaltungsmuster, für die Flexbox typischerweise eingesetzt wird.
- [CSS-Layout: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Erfahren Sie, wie Sie mit Flexbox Weblayouts erstellen.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Beschreibt die Besonderheiten der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) bei Flexbox.
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
  - : Wie Sie Abstände in Grid-, Flexbox- und mehrspaltigen Layouts verstehen und definieren, einschließlich der Berechnung von Prozentwerten.

## Verwandte Konzepte

[CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}

[CSS-Abstandsmodul](/de/docs/Web/CSS/Guides/Gaps)

- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("row-rule")}}
- {{cssxref("rule")}}
- {{cssxref("rule-color")}}
- {{cssxref("rule-inset")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-style")}}
- {{cssxref("rule-width")}}

[CSS-Boxgrößenmodul](/de/docs/Web/CSS/Guides/Box_sizing)

- Wert {{cssxref("aspect-ratio")}}
- Wert {{cssxref("max-content")}}
- Wert {{cssxref("min-content")}}
- Wert {{cssxref("fit-content")}}
- Glossarbegriff {{Glossary("intrinsic_size", "intrinsische Größe")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Grid-Layout-Modul](/de/docs/Web/CSS/Guides/Grid_layout)
- [CSS-Schreibrichtungsmodul](/de/docs/Web/CSS/Guides/Writing_modes)
- [Die Mehrfach-Schlüsselwort-Syntax mit CSS display verwenden](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
