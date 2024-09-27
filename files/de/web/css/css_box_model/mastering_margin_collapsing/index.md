---
title: Beherrschen des Margin-Collapsing
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Die [oben](/de/docs/Web/CSS/margin-top) und [unten](/de/docs/Web/CSS/margin-bottom) liegenden Ränder von Blöcken werden manchmal zu einem einzigen Rand kombiniert (kollabiert), dessen Größe die größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Margin-Collapsing** bekannt ist. Beachten Sie, dass die Ränder von [floating](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals kollabieren.

Margin-Collapsing tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister werden kollabiert (außer wenn das nachfolgende Geschwister an Floats [vorbeigeführt](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt trennt Eltern und Nachkommen
  - : Wenn es keine Begrenzung, Auffüllung, Inline-Teil, [Block-Formatting-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) oder _[Freiraum](/de/docs/Web/CSS/clear)_ gibt, um den {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommen-Blöcke zu trennen; oder keine Begrenzung, Auffüllung, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}}, um den {{cssxref("margin-bottom")}} eines Blocks vom {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommen-Blöcke zu trennen, dann kollabieren diese Ränder. Der kollabierte Rand endet außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keine Begrenzung, Auffüllung, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann kollabieren die oberen und unteren Ränder.

Einige Punkte zu beachten:

- Komplexeres Margin-Collapsing (von mehr als zwei Rändern) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten selbst für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternteils endet (nach den oben genannten Regeln), unabhängig davon, ob der Rand des Elternteils null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des kollabierten Randes die Summe aus dem größten positiven Rand und dem kleinsten (most negative) negativen Rand.
- Wenn alle Ränder negativ sind, ist die Größe des kollabierten Randes der kleinste (most negative) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Kollabierende Ränder sind nur in vertikaler Richtung relevant.
- Ränder kollabieren nicht in einem Container mit `display`, der auf `flex` oder `grid` gesetzt ist.

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

- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschlüsseigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
