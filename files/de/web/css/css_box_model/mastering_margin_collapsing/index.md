---
title: Das Beherrschen von Margin-Zusammenstoß
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand zusammengefasst (zusammengeklappt), dessen Größe die größte der einzelnen Ränder ist (oder nur einer davon, wenn sie gleich sind). Dieses Verhalten wird als **Margin-Zusammenstoß** bezeichnet. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals kollabieren.

Margin-Zusammenstoß tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder von angrenzenden Geschwisterelementen werden zusammengeklappt (außer wenn das spätere Geschwisterelement past-Floats [freigeräumt](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Wenn es keinen Rahmen, kein Padding, keinen Inline-Teil, keinen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) oder _[Freiraum](/de/docs/Web/CSS/clear)_ gibt, um den {{cssxref("margin-top")}} eines Blocks von dem {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen; oder keinen Rahmen, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}}, um den {{cssxref("margin-bottom")}} eines Blocks von dem {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen, dann kollabieren diese Ränder. Der zusammengeschlossene Rand endet außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keinen Rahmen, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann kollabieren seine oberen und unteren Ränder.

Einige Dinge, die zu beachten sind:

- Komplexere Margin-Zusammenstöße (von mehr als zwei Rändern) treten auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die Null sind, sodass der Rand eines Nachkommen (entsprechend den obigen Regeln) außerhalb seines Elternteils endet, unabhängig davon, ob der Rand des Elternteils Null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengeschlossenen Randes die Summe des größten positiven Randes und des kleinsten (am meisten negativen) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengeschlossenen Randes der kleinste (am meisten negative) Rand. Dies gilt sowohl für angrenzende als auch für verschachtelte Elemente.
- Das Zusammenstoßen von Rändern ist nur in vertikaler Richtung relevant.
- In einem Container mit `display` auf `flex` oder `grid` gesetzt, kollabieren die Ränder nicht.

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

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
