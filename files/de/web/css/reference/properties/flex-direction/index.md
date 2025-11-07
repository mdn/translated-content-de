---
title: flex-direction
slug: Web/CSS/Reference/Properties/flex-direction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`flex-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Flex-Elemente im Flex-Container platziert werden und definiert dabei die Hauptachse sowie die Richtung (normal oder umgekehrt).

{{InteractiveExample("CSS Demo: flex-direction")}}

```css interactive-example-choice
flex-direction: row;
```

```css interactive-example-choice
flex-direction: row-reverse;
```

```css interactive-example-choice
flex-direction: column;
```

```css interactive-example-choice
flex-direction: column-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

Beachten Sie, dass die Werte `row` und `row-reverse` von der Richtung des Flex-Containers beeinflusst werden. Wenn sein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut auf `ltr` steht, repräsentiert `row` die horizontale Achse von links nach rechts, und `row-reverse` von rechts nach links; wenn das `dir` Attribut `rtl` ist, repräsentiert `row` die Achse von rechts nach links, und `row-reverse` von links nach rechts.

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

Folgende Werte werden akzeptiert:

- `row`
  - : Die Hauptachse des Flex-Containers wird als dieselbe wie die Textrichtung definiert. Die **main-start** und **main-end** Punkte entsprechen der Inhaltsrichtung.
- `row-reverse`
  - : Verhält sich wie `row`, aber die **main-start** und **main-end** Punkte sind entgegengesetzt zur Inhaltsrichtung.
- `column`
  - : Die Hauptachse des Flex-Containers ist die gleiche wie die Block-Achse. Die **main-start** und **main-end** Punkte entsprechen den **before** und **after** Punkten des Schreibmodus.
- `column-reverse`
  - : Verhält sich wie `column`, aber die **main-start** und **main-end** sind entgegengesetzt zur Inhaltsrichtung.

## Barrierefreiheit

Die Verwendung der `flex-direction` Eigenschaft mit den Werten `row-reverse` oder `column-reverse` wird eine Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge erzeugen. Dies wird sich nachteilig auf Benutzer mit Seheinschränkungen auswirken, die mit Hilfstechnologien wie einem Screenreader navigieren. Wenn die visuelle (CSS) Reihenfolge wichtig ist, haben Screenreader-Benutzer keinen Zugriff auf die korrekte Leserichtung.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
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

- CSS {{CSSXRef("flex-flow")}} Kurzschreibweise für die CSS `flex-direction` und {{CSSXRef("flex-wrap")}} Eigenschaften.
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
