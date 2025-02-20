---
title: Beherrschung des Margin-Zusammenführens
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die [Top-](/de/docs/Web/CSS/margin-top) und [Bottom-Margen](/de/docs/Web/CSS/margin-bottom) von Block-Elementen werden manchmal zu einem einzigen Margin kombiniert (zusammengeführt), dessen Größe der größte der einzelnen Margen ist (oder einer von ihnen, wenn sie gleich sind). Dieses Verhalten ist als **Margin-Zusammenführen** bekannt. Beachten Sie, dass die Margen von [floatenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammengeführt werden.

Das Margin-Zusammenführen tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Margen von benachbarten Geschwistern werden zusammengeführt (außer wenn das nachfolgende Geschwister [geklärt](/de/docs/Web/CSS/clear) werden muss, um an Floats vorbeizukommen).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Wenn es weder eine Begrenzung, ein Auffüllen, einen Inline-Teil, einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) noch eine _[Klärung](/de/docs/Web/CSS/clear)_ gibt, um das {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommen zu trennen; oder wenn es weder eine Begrenzung, ein Auffüllen, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um das {{cssxref("margin-bottom")}} eines Blocks vom {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommen zu trennen, dann werden diese Margen zusammengeführt. Die zusammengeführte Margin befindet sich außerhalb des Elternelements.
- Leere Blöcke
  - : Wenn es weder eine Begrenzung, ein Auffüllen, Inline-Inhalt, {{cssxref("height")}} noch {{cssxref("min-height")}} gibt, um das {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann werden seine oberen und unteren Margen zusammengeführt.

Einige Punkte zur Beachtung:

- Ein komplexeres Margin-Zusammenführen (von mehr als zwei Margen) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Margen, die Null sind, sodass die Margin eines Nachkommen außerhalb seines Elternteils endet (gemäß den oben genannten Regeln), unabhängig davon, ob die Margin des Elternteils Null ist oder nicht.
- Wenn negative Margen involviert sind, ist die Größe der zusammengeführten Margin die Summe der größten positiven Margin und der kleinsten (stärksten negativen) negativen Margin.
- Wenn alle Margen negativ sind, entspricht die Größe der zusammengeführten Margin der kleinsten (stärksten negativen) Margin. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Margin-Zusammenführen ist nur in vertikaler Richtung relevant.
- Margen werden in einem Container mit `display` auf `flex` oder `grid` gesetzt nicht zusammengeführt.

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

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
