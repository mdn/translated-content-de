---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Die **`flex-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Flex-Elemente im Flex-Container platziert werden, indem sie die Hauptachse und die Richtung (normal oder umgekehrt) definiert.

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Beachten Sie, dass die Werte `row` und `row-reverse` von der Richtung des Flex-Containers beeinflusst werden. Wenn das [`dir`](/de/docs/Web/HTML/Global_attributes/dir) Attribut `ltr` ist, stellt `row` die horizontale Achse dar, die von links nach rechts orientiert ist, und `row-reverse` von rechts nach links; wenn das `dir` Attribut `rtl` ist, stellt `row` die Achse dar, die von rechts nach links orientiert ist, und `row-reverse` von links nach rechts.

## Syntax

```css
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Werte

Die folgenden Werte werden akzeptiert:

- `row`
  - : Die Hauptachse des Flex-Containers entspricht der Textflussrichtung. Die Punkte **main-start** und **main-end** sind gleich der Inhaltsrichtung.
- `row-reverse`
  - : Verhält sich wie `row`, aber die Punkte **main-start** und **main-end** sind gegenüber der Inhaltsrichtung entgegengesetzt.
- `column`
  - : Die Hauptachse des Flex-Containers entspricht der Blockachse. Die Punkte **main-start** und **main-end** entsprechen den Punkten **before** und **after** des Schreibmodus.
- `column-reverse`
  - : Verhält sich wie `column`, aber die Punkte **main-start** und **main-end** sind gegenüber der Inhaltsrichtung entgegengesetzt.

## Barrierefreiheit

Die Verwendung der Eigenschaft `flex-direction` mit den Werten `row-reverse` oder `column-reverse` führt zu einer Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge. Dies wirkt sich negativ auf Benutzer mit Sehbehinderungen aus, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren. Wenn die visuelle (CSS) Reihenfolge wichtig ist, haben Screenreader-Benutzer keinen Zugang zur korrekten Lesereihenfolge.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehren von Flex-Container-Spalten und -Zeilen

#### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample('Reversing_flex_container_columns_and_rows', '', '550')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{CSSXRef("flex-flow")}} Kurzschreibweise für die CSS-Eigenschaften `flex-direction` und {{CSSXRef("flex-wrap")}}.
- [Grundkonzepte des Flexboxmodells](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
