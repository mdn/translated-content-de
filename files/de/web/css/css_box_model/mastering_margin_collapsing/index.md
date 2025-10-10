---
title: Beherrschung des Zusammenfallens von Rändern
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die [obersten](/de/docs/Web/CSS/margin-top) und [untersten](/de/docs/Web/CSS/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand kombiniert (zusammengefallen), dessen Größe die größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Zusammenfallen von Rändern** bekannt ist. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen nie zusammenfallen.

Das Zusammenfallen von Rändern tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder angrenzender Geschwister fallen zusammen (außer wenn das letzte Geschwister um [Floats zu klären](/de/docs/Web/CSS/clear) muss).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Die vertikalen Ränder zwischen einem Elternblock und seinen Nachkommen können zusammenfallen. Dies geschieht, wenn es keinen separierenden Inhalt zwischen ihnen gibt. Insbesondere tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils fällt mit dem {{cssxref("margin-top")}} seines ersten im Fluss befindlichen Nachkommens zusammen, es sei denn, das Elternteil hat eine {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält jeglichen Inline-Inhalt (wie Text) oder hat _[Klärung](/de/docs/Web/CSS/clear)_ angewendet.
    - Der {{cssxref("margin-bottom")}} eines Elternteils fällt mit dem {{cssxref("margin-bottom")}} seines letzten im Fluss befindlichen Nachkommens zusammen, es sei denn, das Elternteil hat eine definierte {{cssxref("height")}}, {{cssxref("min-height")}}, eine {{cssxref("border-bottom")}} oder {{cssxref("padding-bottom")}}.

    In beiden Fällen verhindert das Erstellen eines neuen [Blockformatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context) auf dem Elternteil auch, dass seine Ränder mit denen seiner Kinder zusammenfallen.

- Leere Blöcke
  - : Wenn kein Rand, Abstand, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} vorhanden ist, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann fallen seine oberen und unteren Ränder zusammen.

Einige Dinge, die zu beachten sind:

- Komplexeres Zusammenfallen von Rändern (von mehr als zwei Rändern) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die Null sind, sodass der Rand eines Nachkommens außerhalb seines Elternteils endet (gemäß den obigen Regeln), unabhängig davon, ob der Rand des Elternteils Null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengefallenen Randes die Summe des größten positiven Randes und des kleinsten (negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengefallenen Randes der kleinste (negativste) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Das Zusammenfallen von Rändern ist nur in vertikaler Richtung relevant.
- In einem Container mit `display` auf `flex` oder `grid` werden Ränder nicht zusammenfallen.

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
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Definition der Wertsyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
