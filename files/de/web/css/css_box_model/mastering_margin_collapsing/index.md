---
title: Beherrschung des Zusammenfallens von Rändern
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die [oberen](/de/docs/Web/CSS/Reference/Properties/margin-top) und [unteren](/de/docs/Web/CSS/Reference/Properties/margin-bottom) Ränder von Blockelementen werden manchmal zu einem einzigen Rand zusammengeführt (kollabiert), dessen Größe der größte der einzelnen Ränder ist (oder einer von ihnen, wenn sie gleich sind). Dieses Verhalten wird als **Margin Collapse** bezeichnet. Beachten Sie, dass die Ränder von [fließenden](/de/docs/Web/CSS/Reference/Properties/float) und [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elementen niemals kollabieren.

Das Zusammenfallen der Ränder tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwister
  - : Die Ränder angrenzender Geschwister kollabieren (außer wenn das nachfolgende Geschwister [bereinigt](/de/docs/Web/CSS/Reference/Properties/clear) werden muss, um Fließendes zu umgehen).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Die vertikalen Ränder zwischen einem Eltern-Block und seinen Nachkommen können kollabieren. Dies geschieht, wenn es keinen trennenden Inhalt zwischen ihnen gibt. Insbesondere tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils kollabiert mit dem {{cssxref("margin-top")}} seines ersten im Dokumentfluss befindlichen Nachkommens, es sei denn, der Elternteil hat einen {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält beliebigen Inline-Inhalt (wie Text) oder es wird _[clearance](/de/docs/Web/CSS/Reference/Properties/clear)_ angewendet.
    - Der {{cssxref("margin-bottom")}} eines Elternteils kollabiert mit dem {{cssxref("margin-bottom")}} seines letzten im Dokumentfluss befindlichen Nachkommens, es sei denn, der Elternteil hat eine definierte {{cssxref("height")}} oder {{cssxref("min-height")}}, einen {{cssxref("border-bottom")}} oder {{cssxref("padding-bottom")}}.

    In beiden Fällen verhindert das Erstellen eines neuen [Block-Formatierungskontextes](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) beim Elternteil ebenfalls, dass seine Ränder mit denen seiner Kinder kollabieren.

- Leere Blöcke
  - : Wenn es keinen Rand, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, kollabieren seine oberen und unteren Ränder.

Einige Anmerkungen:

- Ein komplizierteres Zusammenfallen der Ränder (von mehr als zwei Rändern) tritt auf, wenn die obigen Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die null sind, sodass der Rand eines Nachkommen außerhalb seines Elternteils endet (entsprechend den obigen Regeln), unabhängig davon, ob der Rand des Elternteils null ist.
- Wenn negative Ränder einbezogen werden, ist die Größe des kollabierten Randes die Summe des größten positiven Randes und des kleinsten (negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des kollabierten Randes der kleinste (negativste) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Das Zusammenfallen der Ränder ist nur in vertikaler Richtung relevant.
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

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layoutmodi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Rechenwerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Wertesyntaxdefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
