---
title: Beherrschen von Margin-Zusammenfall
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die [oberen](/de/docs/Web/CSS/Reference/Properties/margin-top) und [unteren](/de/docs/Web/CSS/Reference/Properties/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzigen Rand zusammengefasst (zusammengefallen), dessen Größe der größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Margin-Zusammenfall** bekannt ist. Beachten Sie, dass die Ränder von [floatenden](/de/docs/Web/CSS/Reference/Properties/float) und [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elementen niemals zusammenfallen.

Margin-Zusammenfall tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder von angrenzenden Geschwistern fallen zusammen (außer wenn das nachfolgende Geschwister über Floats [gelöscht](/de/docs/Web/CSS/Reference/Properties/clear) werden muss).
- Kein Inhalt trennt Eltern und Nachkommen
  - : Die vertikalen Ränder zwischen einem Elternblock und seinen Nachkommen können zusammenfallen. Dies geschieht, wenn es keinen trennenden Inhalt zwischen ihnen gibt. Insbesondere tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils fällt mit dem {{cssxref("margin-top")}} seines ersten im Fluss befindlichen Nachkommen zusammen, es sei denn, der Elternteil hat einen {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält irgendwelche Inline-Inhalte (wie Text) oder hat _[Löschung](/de/docs/Web/CSS/Reference/Properties/clear)_ angewendet.
    - Der {{cssxref("margin-bottom")}} eines Elternteils fällt mit dem {{cssxref("margin-bottom")}} seines letzten im Fluss befindlichen Nachkommen zusammen, es sei denn, der Elternteil hat eine definierte {{cssxref("height")}} oder {{cssxref("min-height")}}, einen {{cssxref("border-bottom")}}, oder {{cssxref("padding-bottom")}}.

    In beiden Fällen wird durch das Erstellen eines neuen [Block-Formatierungs-Kontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context) im Elternteil auch verhindert, dass seine Ränder mit denen der Kinder zusammenfallen.

- Leere Blöcke
  - : Wenn es keinen Rand, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann fallen seine oberen und unteren Ränder zusammen.

Einige Punkte zu beachten:

- Komplexeres Margin-Zusammenfallen (von mehr als zwei Rändern) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternteils endet (gemäß den obigen Regeln), unabhängig davon, ob der Rand des Elternteils null ist.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengefallenen Randes die Summe aus dem größten positiven Rand und dem kleinsten (negativsten) negativen Rand.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengefallenen Randes der kleinste (negativste) Rand. Dies gilt sowohl für angrenzende als auch für verschachtelte Elemente.
- Das Zusammenfallen von Rändern ist nur in vertikaler Richtung relevant.
- Ränder fallen in einem Container mit `display` auf `flex` oder `grid` nicht zusammen.

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
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Werte
    - [Standardwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Syntax zur Wertedefinition](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
