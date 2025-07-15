---
title: Beherrschung des Margin-Collapsing
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: c9fc9aa7a65c5109e64c0f7b6d9e732dd812973f
---

Die [oberen](/de/docs/Web/CSS/margin-top) und [unteren](/de/docs/Web/CSS/margin-bottom) Ränder von Blockelementen werden manchmal zu einem einzigen Rand kombiniert (kollabiert), dessen Größe der größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Margin-Collapsing** bekannt ist. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals kollabieren.

Margin-Collapsing tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister werden kollabiert (außer wenn das spätere Geschwisterelement über [cleared](/de/docs/Web/CSS/clear) Floats hinwegbewegt werden muss).
- Kein Inhalt, der Elternteil und Nachkomme trennt
  - : Die vertikalen Ränder zwischen einem Eltern-Block und seinen Nachkommen können kollabieren. Dies geschieht, wenn kein trennender Inhalt zwischen ihnen vorhanden ist. Konkret tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils kollabiert mit dem {{cssxref("margin-top")}} seines ersten Nachkommens, es sei denn, der Elternteil hat eine {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält allgemeinen Inline-Inhalt (wie Text) oder es wird _[clearance](/de/docs/Web/CSS/clear)_ angewendet.
    - Der {{cssxref("margin-bottom")}} eines Elternteils kollabiert mit dem {{cssxref("margin-bottom")}} seines letzten Nachkommens, es sei denn, der Elternteil hat eine definierte {{cssxref("height")}} oder {{cssxref("min-height")}}, eine {{cssxref("border-bottom")}} oder {{cssxref("padding-bottom")}}.

    In beiden Fällen wird das Erstellen eines neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) am Elternteil verhindern, dass seine Ränder mit denen seiner Kinder kollabieren.

- Leere Blöcke
  - : Wenn kein Rand, kein Padding, kein Inline-Inhalt, keine {{cssxref("height")}} oder {{cssxref("min-height")}} vorhanden ist, die den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} trennt, dann kollabieren seine oberen und unteren Ränder.

Einige Anmerkungen:

- Komplexeres Margin-Collapsing (mit mehr als zwei Rändern) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder mit null, sodass der Rand eines Nachkommen nach außen seinen Elternteil verlässt (gemäß den obigen Regeln), unabhängig davon, ob der Rand des Elternteils null ist.
- Wenn negative Ränder involviert sind, ist die Größe des kollabierten Randes die Summe des größten positiven Randes und des kleinsten (am negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des kollabierten Randes der kleinste (am negativsten) Rand. Dies gilt sowohl für benachbarte als auch für geschachtelte Elemente.
- Margin-Collapsing ist nur relevant in vertikaler Richtung.
- Ränder kollabieren nicht in einem Container mit `display` auf `flex` oder `grid`.

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

- Grundlegende CSS-Konzepte:
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
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
