---
title: Beherrschung des Kollabierens von Rändern
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand kombiniert (kollabiert), dessen Größe der größte der individuellen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Kollabieren von Rändern** bekannt ist. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals kollabieren.

Das Kollabieren von Rändern tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister werden kollabiert (außer wenn das spätere Geschwisterelement an Schwebeflächen vorbei [gelöscht](/de/docs/Web/CSS/clear) werden muss).
- Kein Inhalt zwischen Elternteil und Nachkommen
  - : Wenn es keine Umrandung, kein Padding, keinen Inline-Teil, keinen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) gibt, der erstellt wird, oder kein _[Abstand](/de/docs/Web/CSS/clear)_, um das {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen; oder keine Umrandung, kein Padding, kein Inline-Inhalt, keine {{cssxref("height")}}, oder {{cssxref("min-height")}}, um das {{cssxref("margin-bottom")}} eines Blocks vom {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommenblöcke zu trennen, dann kollabieren diese Ränder. Der kollabierte Rand landet außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keine Umrandung, kein Padding, keinen Inline-Inhalt, keine {{cssxref("height")}}, oder {{cssxref("min-height")}} gibt, um das {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann kollabieren seine oberen und unteren Ränder.

Einige Dinge, die zu beachten sind:

- Komplexeres Kollabieren von Rändern (mehr als zwei Ränder) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten sogar für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternteils (gemäß den obigen Regeln) endet, unabhängig davon, ob der Rand des Elternteils null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des kollabierten Randes die Summe des größten positiven Randes und des kleinsten (negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des kollabierten Randes der kleinste (negativste) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Das Kollabieren von Rändern ist nur in der vertikalen Richtung relevant.
- Ränder kollabieren nicht in einem Container mit `display` auf `flex` oder `grid` gesetzt.

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
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
