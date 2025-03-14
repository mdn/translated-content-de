---
title: Beherrschung des Zusammenfallens von Außenabständen
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Außenabstände von Blockelementen werden manchmal zu einem einzigen Abstand zusammengefasst (zusammengefallen), dessen Größe die größte der einzelnen Abstände ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Zusammenfallen von Außenabständen** bekannt ist. Beachten Sie, dass die Abstände von [floatenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammenfallen.

Das Zusammenfallen von Außenabständen tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Abstände benachbarter Geschwister fallen zusammen (außer wenn das nachfolgende Geschwister über Floats [geklärt](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Wenn es keine Umrandung, Füllung, Inline-Element, [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) gibt oder keine _[Klärung](/de/docs/Web/CSS/clear)_, die den {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommen trennt; oder keine Umrandung, Füllung, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}}, die den {{cssxref("margin-bottom")}} eines Blocks vom {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommen trennt, dann fallen diese Abstände zusammen. Der zusammengefallene Abstand befindet sich außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keine Umrandung, Füllung, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, die den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} trennt, dann fallen die oberen und unteren Abstände zusammen.

Einige Dinge zu beachten:

- Ein komplexeres Zusammenfallen von Abständen (von mehr als zwei Abständen) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten sogar für Abstände, die null sind, sodass der Abstand eines Nachkommens außerhalb seines Elternteils endet (entsprechend den obigen Regeln), unabhängig davon, ob der Abstand des Elternteils null ist oder nicht.
- Wenn negative Abstände beteiligt sind, ist die Größe des zusammengefallenen Abstands die Summe des größten positiven Abstands und des kleinsten (negativsten) negativen Abstands.
- Wenn alle Abstände negativ sind, ist die Größe des zusammengefallenen Abstands der kleinste (negativste) Abstand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Das Zusammenfallen von Abständen ist nur in der vertikalen Richtung relevant.
- Abstände fallen nicht in einem Container mit `display` auf `flex` oder `grid` zusammen.

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
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
