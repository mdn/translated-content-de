---
title: Beherrschen des Zusammenfallens von Rändern
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Die [oben](/de/docs/Web/CSS/margin-top) und [unten](/de/docs/Web/CSS/margin-bottom) liegenden Ränder von Blöcken werden manchmal zu einem einzigen Rand kombiniert (zusammengefallen), dessen Größe dem größten der einzelnen Ränder entspricht (oder nur einem von ihnen, wenn sie gleich sind). Dieses Verhalten ist als **Zusammenfallen von Rändern** bekannt. Beachten Sie, dass die Ränder von [schwebenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position#types_of_positioning) Elementen niemals zusammenfallen.

Das Zusammenfallen von Rändern tritt in drei grundlegenden Fällen auf:

- Benachbarte Geschwister
  - : Die Ränder benachbarter Geschwister fallen zusammen (außer wenn das spätere Geschwister [geräumt](/de/docs/Web/CSS/clear) werden muss, um an schwebenden Elementen vorbeizukommen).
- Kein Inhalt, der Eltern und Nachkommen trennt
  - : Wenn es keine Grenze, keinen Abstand, keinen Inline-Teil, keinen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) gibt, der den {{cssxref("margin-top")}} eines Blocks von dem {{cssxref("margin-top")}} eines oder mehrerer seiner Nachkommen-Blöcke trennt; oder keine Grenze, kein Abstand, kein Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}}, um den {{cssxref("margin-bottom")}} eines Blocks von dem {{cssxref("margin-bottom")}} eines oder mehrerer seiner Nachkommen-Blöcke zu trennen, dann fallen diese Ränder zusammen. Der zusammengefallene Rand landet außerhalb des Elternteils.
- Leere Blöcke
  - : Wenn es keine Grenze, keinen Abstand, keinen Inline-Inhalt, {{cssxref("height")}}, oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} eines Blocks von seinem {{cssxref("margin-bottom")}} zu trennen, fallen seine oberen und unteren Ränder zusammen.

Einige wichtige Punkte:

- Ein komplexeres Zusammenfallen von Rändern (von mehr als zwei Rändern) tritt auf, wenn die oben genannten Fälle kombiniert werden.
- Diese Regeln gelten auch für Ränder, die null sind, sodass der Rand eines Nachkommen (nach den obigen Regeln) außerhalb seines Elternteils endet, unabhängig davon, ob der Rand des Elternteils null ist.
- Wenn negative Ränder beteiligt sind, ist die Größe des zusammengefallenen Randes die Summe des größten positiven Randes und des kleinsten (am negativsten) negativen Randes.
- Wenn alle Ränder negativ sind, ist die Größe des zusammengefallenen Randes der kleinste (am negativsten) Rand. Dies gilt sowohl für benachbarte als auch für verschachtelte Elemente.
- Das Zusammenfallen von Rändern ist nur in vertikaler Richtung relevant.
- Ränder fallen nicht in einem Container mit `display` auf `flex` oder `grid` zusammen.

## Beispiele

### HTML

```html
<p>Der untere Rand dieses Absatzes fällt zusammen…</p>
<p>
  …mit dem oberen Rand dieses Absatzes, wodurch ein Rand von
  <code>1.2rem</code> dazwischen entsteht.
</p>

<div>
  Dieses Elternelement enthält zwei Absätze!
  <p>
    Dieser Absatz hat einen <code>.4rem</code> Rand zwischen ihm und dem Text
    darüber.
  </p>
  <p>
    Mein unterer Rand fällt mit meinem Elternteil zusammen und ergibt einen
    unteren Rand von <code>2rem</code>.
  </p>
</div>

<p>Ich bin <code>2rem</code> unterhalb des obigen Elements.</p>
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
  - [CSS Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - Werte
    - [Ursprungswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
