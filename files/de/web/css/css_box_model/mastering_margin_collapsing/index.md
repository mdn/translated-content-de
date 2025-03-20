---
title: Beherrschen des Margen-Zusammenfallens
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand kombiniert (zusammengefallen), dessen Größe die größte der einzelnen Ränder ist (oder nur einer davon, wenn sie gleich sind), ein Verhalten, das als **Margen-Zusammenfallen** bekannt ist. Beachten Sie, dass die Ränder von [floated](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammenfallen.

Das Margen-Zusammenfallen tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder angrenzender Geschwister fallen zusammen (außer wenn das spätere Geschwisterelement an Floats [vorbei geräumt](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt trennt Eltern- und Kindelemente
  - : Wenn es keine Grenze, kein Padding, keinen Inline-Teil, keinen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) gibt, der erstellt wird, oder keine _[Freigabe](/de/docs/Web/CSS/clear)_ vorhanden ist, um das {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} von einem oder mehreren seiner Nachkommenblöcke zu trennen; oder keine Grenze, kein Padding, kein Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}}, um das {{cssxref("margin-bottom")}} eines Blocks vom {{cssxref("margin-bottom")}} von einem oder mehreren seiner Nachkommenblöcke zu trennen, dann falten diese Ränder zusammen. Der zusammengefallene Rand befindet sich außerhalb des Elternblocks.
- Leere Blöcke
  - : Wenn es keine Grenze, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}} gibt, um das {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann fallen seine oberen und unteren Ränder zusammen.

Einige Anmerkungen:

- Komplexeres Margen-Zusammenfallen (von mehr als zwei Rändern) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten sogar auch für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternblocks endet (entsprechend den obigen Regeln), unabhängig davon, ob der Rand des Elternblocks null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengefallenen Randes die Summe des größten positiven Randes und des kleinsten (negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengefallenen Randes der kleinste (negativste) Rand. Dies gilt sowohl für angrenzende Elemente als auch für verschachtelte Elemente.
- Das Zusammenfallen von Rändern ist nur in vertikaler Richtung relevant.
- Ränder fallen in einem Container nicht zusammen, wenn `display` auf `flex` oder `grid` gesetzt ist.

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

- Wesentliche CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibeneigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
