---
title: Beherrschung der Rand-Zusammenführung
short-title: Margin Collapsing
slug: Web/CSS/Guides/Box_model/Margin_collapsing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die [oberen](/de/docs/Web/CSS/Reference/Properties/margin-top) und [unteren](/de/docs/Web/CSS/Reference/Properties/margin-bottom) Ränder von Blöcken werden manchmal in einen einzigen Rand zusammengefasst, dessen Größe die größte der einzelnen Ränder ist (oder nur einer von ihnen, wenn sie gleich sind), ein Verhalten, das als **Ränder-Zusammenführung** bekannt ist. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/Reference/Properties/float) und [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elementen niemals zusammenfallen.

Ränder-Zusammenführung tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister werden zusammengeführt (außer wenn für das letzte Geschwister [clear](/de/docs/Web/CSS/Reference/Properties/clear) gesetzt werden muss, um an Floats vorbeizukommen).
- Kein Inhalt zwischen Eltern und Nachkommen
  - : Die vertikalen Ränder zwischen einem Elternblock und seinen Nachkommen können zusammenfallen. Dies geschieht, wenn es keinen trennenden Inhalt zwischen ihnen gibt. Insbesondere tritt dies in zwei Hauptfällen auf:
    - Der {{cssxref("margin-top")}} eines Elternteils fällt mit dem {{cssxref("margin-top")}} seines ersten Nachkommens im Fluss zusammen, es sei denn, der Elternteil hat einen {{cssxref("border-top")}}, {{cssxref("padding-top")}}, enthält Inline-Inhalt (wie Text) oder hat _[Abstand](/de/docs/Web/CSS/Reference/Properties/clear)_ angewendet.
    - Der {{cssxref("margin-bottom")}} eines Elternteils fällt mit dem {{cssxref("margin-bottom")}} seines letzten Nachkommens im Fluss zusammen, es sei denn, der Elternteil hat eine definierte {{cssxref("height")}} oder {{cssxref("min-height")}}, einen {{cssxref("border-bottom")}}, oder {{cssxref("padding-bottom")}}.

    In beiden Fällen verhindert das Erstellen eines neuen [Blockformatierungs-Kontextes](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) auf dem Elternteil auch, dass seine Ränder mit seinen Kindern zusammenfallen.

- Leere Blöcke
  - : Wenn es keine Grenze, kein Padding, keinen Inline-Inhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, fallen seine oberen und unteren Ränder zusammen.

Einige Anmerkungen:

- Eine komplexere Ränder-Zusammenführung (von mehr als zwei Rändern) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten selbst für Ränder, die null sind, sodass der Rand eines Nachkommens außerhalb seines Elternteils landet (gemäß den oben genannten Regeln), unabhängig davon, ob der Rand des Elternteils null ist oder nicht.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengeführten Randes die Summe aus dem größten positiven Rand und dem kleinsten (negativsten) negativen Rand.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengeführten Randes der kleinste (negativste) Rand. Dies gilt sowohl für benachbarte Elemente als auch für verschachtelte Elemente.
- Das Zusammenfallen von Rändern ist nur in der vertikalen Richtung relevant.
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

- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layoutmodi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Wertdefinierungssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
