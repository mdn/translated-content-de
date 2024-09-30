---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`flex-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie Flex-Elemente im Flex-Container platziert werden und bestimmt die Hauptachse sowie die Richtung (normal oder umgekehrt).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Beachten Sie, dass die Werte `row` und `row-reverse` von der Richtung des Flex-Containers beeinflusst werden. Wenn das [`dir`](/de/docs/Web/HTML/Global_attributes#dir) Attribut `ltr` ist, repräsentiert `row` die horizontale Achse orientiert von links nach rechts und `row-reverse` von rechts nach links; wenn das `dir` Attribut `rtl` ist, repräsentiert `row` die Achse orientiert von rechts nach links und `row-reverse` von links nach rechts.

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
  - : Die Hauptachse des Flex-Containers ist dieselbe wie die Textrichtung. Die Punkte **main-start** und **main-end** sind dieselben wie die Inhaltsrichtung.
- `row-reverse`
  - : Verhält sich wie `row`, jedoch sind die Punkte **main-start** und **main-end** entgegengesetzt zur Inhaltsrichtung.
- `column`
  - : Die Hauptachse des Flex-Containers ist dieselbe wie die Block-Achse. Die Punkte **main-start** und **main-end** sind dieselben wie die Punkte **before** und **after** des Schreibmodus.
- `column-reverse`
  - : Verhält sich wie `column`, jedoch sind die Punkte **main-start** und **main-end** entgegengesetzt zur Inhaltsrichtung.

## Barrierefreiheit

Die Verwendung der `flex-direction` Eigenschaft mit den Werten `row-reverse` oder `column-reverse` bewirkt eine Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge. Dies wirkt sich negativ auf Benutzer mit Sehbehinderungen aus, die sich mit Hilfe von unterstützender Technologie wie einem Bildschirmleser zurechtfinden. Wenn die visuelle (CSS) Reihenfolge wichtig ist, haben Benutzer von Bildschirmlesern keinen Zugriff auf die korrekte Lesereihenfolge.

- [Flexbox & der Navigationsunterschied bei der Tastatur — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Quellreihenfolge ist wichtig | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Verständnis für WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis von Erfolgskriterium 1.3.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Container-Spalten und -Zeilen umkehren

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

- CSS {{CSSXRef("flex-flow")}} Kurzschrift-Eigenschaft für die CSS-Eigenschaften `flex-direction` und {{CSSXRef("flex-wrap")}}.
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
