---
title: Beherrschung des Margin-Zusammenfalls
short-title: Margin collapsing
slug: Web/CSS/Guides/Box_model/Margin_collapsing
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Die [oberen](/de/docs/Web/CSS/Reference/Properties/margin-top) und [unteren](/de/docs/Web/CSS/Reference/Properties/margin-bottom) Ränder von Blöcken werden manchmal zu einem einzelnen Rand kombiniert (zusammengefallen), dessen Größe die größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind). Dieses Verhalten wird als **Margin-Zusammenfall** bezeichnet. Beachten Sie, dass die Ränder von [floatenden](/de/docs/Web/CSS/Reference/Properties/float) und [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elementen niemals zusammenfallen.

Margin-Zusammenfall tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister fallen zusammen (außer wenn das nachfolgende Geschwister [über Floats gecleared](/de/docs/Web/CSS/Reference/Properties/clear) werden muss).
- Kein Inhalt trennt Eltern- und Nachkommenelemente
  - : Die vertikalen Ränder zwischen einem übergeordneten Block und seinen Nachkommen können zusammenfallen. Dies geschieht, wenn kein trennender Inhalt zwischen ihnen vorhanden ist. Konkret tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils fällt mit dem {{cssxref("margin-top")}} seines ersten in den Fluss eingebundenen Nachkommens zusammen, es sei denn, der Elternteil hat einen {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält jeglichen Inline-Inhalt (wie Text) oder hat eine _[Clearance](/de/docs/Web/CSS/Reference/Properties/clear)_ zugewiesen.
    - Der {{cssxref("margin-bottom")}} eines Elternteils fällt mit dem {{cssxref("margin-bottom")}} seines letzten in den Fluss eingebundenen Nachkommens zusammen, es sei denn, der Elternteil hat eine definierte {{cssxref("height")}} oder {{cssxref("min-height")}}, einen {{cssxref("border-bottom")}} oder {{cssxref("padding-bottom")}}.

    In beiden Fällen wird durch das Erzeugen eines neuen [Block-Formatierungskontexts](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) beim Elternteil auch verhindert, dass seine Ränder mit denen seiner Kinder zusammenfallen.

- Leere Blöcke
  - : Wenn es keinen Rand, Puffer, Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, dann fallen seine oberen und unteren Ränder zusammen.

Einige Dinge, die zu beachten sind:

- Komplexere Margin-Zusammenfälle (von mehr als zwei Rändern) treten auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die null sind, sodass der Rand eines Nachkommen gemäß den oben genannten Regeln außerhalb seines Elternteils endet, unabhängig davon, ob der Rand des Elternteils null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengefallenen Randes die Summe des größten positiven Randes und des kleinsten (am negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengefallenen Randes der kleinste (am negativsten) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Der zusammenfallende Rand ist nur in vertikaler Richtung relevant.
- Ränder fallen in einem Container mit `display`, der auf `flex` oder `grid` gesetzt ist, nicht zusammen.

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

- Modul [CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
- [Einführung in das CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - Werte:
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
