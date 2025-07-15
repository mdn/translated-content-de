---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`flex-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Flex-Elemente im Flex-Container platziert werden, indem sie die Hauptachse und die Richtung (normal oder umgekehrt) definiert.

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

Beachten Sie, dass die Werte `row` und `row-reverse` von der Richtung des Flex-Containers beeinflusst werden. Wenn das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut `ltr` ist, stellt `row` die horizontale Achse dar, die von links nach rechts orientiert ist, und `row-reverse` von rechts nach links; wenn das `dir` Attribut `rtl` ist, stellt `row` die Achse dar, die von rechts nach links orientiert ist, und `row-reverse` von links nach rechts.

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
  - : Die Hauptachse des Flex-Containers wird als dieselbe wie die Textausrichtung definiert. Die Punkte **main-start** und **main-end** sind dieselben wie die Inhaltsrichtung.
- `row-reverse`
  - : Verhält sich gleich wie `row`, aber die Punkte **main-start** und **main-end** sind entgegengesetzt zur Inhaltsrichtung.
- `column`
  - : Die Hauptachse des Flex-Containers ist dieselbe wie die Block-Achse. Die Punkte **main-start** und **main-end** sind dieselben wie die Punkte **before** und **after** der Schreibrichtung.
- `column-reverse`
  - : Verhält sich gleich wie `column`, aber die Punkte **main-start** und **main-end** sind entgegengesetzt zur Inhaltsrichtung.

## Barrierefreiheit

Die Verwendung der `flex-direction` Eigenschaft mit den Werten `row-reverse` oder `column-reverse` wird eine Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge erzeugen. Dies wird sich nachteilig auf Benutzer mit Sehbehinderungen auswirken, die mit Hilfe von unterstützenden Technologien wie einem Bildschirmleser navigieren. Wenn die visuelle (CSS) Reihenfolge wichtig ist, haben Bildschirmleser-Benutzer keinen Zugriff auf die korrekte Lesereihenfolge.

- [Flexbox & die Trennung der Tastaturnavigation — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Verstehen von WCAG, Leitfaden 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.2 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

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

- Die CSS {{CSSXRef("flex-flow")}} Kurzschreibweise für die CSS `flex-direction` und {{CSSXRef("flex-wrap")}} Eigenschaften.
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
