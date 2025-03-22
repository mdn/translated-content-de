---
title: Beherrschung der Margenzusammenführung
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand zusammengefasst (zusammengeführt), dessen Größe die größte der individuellen Ränder ist (oder einfach einer von ihnen, wenn sie gleich sind). Dieses Verhalten wird als **Margenzusammenführung** bezeichnet. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammengeführt werden.

Die Margenzusammenführung tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder von angrenzenden Geschwisterelementen werden zusammengeführt (außer wenn das nachfolgende Geschwisterelement an Fließobjekten [vorbeigeklärt](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Wenn es keine Grenze, keinen Abstand, keinen Inline-Anteil, keinen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) oder _[Klärung](/de/docs/Web/CSS/clear)_ gibt, um den {{cssxref("margin-top")}} eines Blocks von dem {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommen-Blöcke zu trennen; oder keine Grenze, kein Abstand, kein Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-bottom")}} eines Blocks von dem {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommen-Blöcke zu trennen, dann werden diese Ränder zusammengeführt. Der zusammengeführte Rand befindet sich außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keine Grenze, keinen Abstand, keinen Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann werden die oberen und unteren Ränder desselben Blocks zusammengeführt.

Einige Dinge, die zu beachten sind:

- Eine komplexere Margenzusammenführung (von mehr als zwei Rändern) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternteils endet (gemäß den obigen Regeln), unabhängig davon, ob der Rand des Elternteils null ist.
- Wenn negative Ränder im Spiel sind, ist die Größe des zusammengeführten Randes die Summe des größten positiven und des kleinsten (am meisten negativen) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengeführten Randes der kleinste (am meisten negative) Rand. Dies gilt sowohl für angrenzende als auch für geschachtelte Elemente.
- Die Margenzusammenführung ist nur in vertikaler Richtung relevant.
- Ränder werden in einem Container mit `display` auf `flex` oder `grid` nicht zusammengeführt.

## Beispiele

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>
  … with the top margin of this paragraph, yielding a margin of
  <code>1.2rem</code> in between.
</p>

<div>
  This parent element contains two paragraphs!
  <p>
    This paragraph has a <code>.4rem</code> margin between it and the text
    above.
  </p>
  <p>
    My bottom margin collapses with my parent, yielding a bottom margin of
    <code>2rem</code>.
  </p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 'auto', 350)}}

## Siehe auch

- Wichtige Konzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Genutzte Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
