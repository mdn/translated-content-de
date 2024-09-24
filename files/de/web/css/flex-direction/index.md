---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`flex-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Flex-Elemente im Flex-Container angeordnet sind und definiert die Hauptachse und die Richtung (normal oder umgekehrt).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Bitte beachten Sie, dass die Werte `row` und `row-reverse` von der Richtung des Flex-Containers beeinflusst werden. Wenn das [`dir`](/de/docs/Web/HTML/Global_attributes#dir) Attribut `ltr` ist, repräsentiert `row` die horizontale Achse von links nach rechts, und `row-reverse` von rechts nach links; wenn das `dir` Attribut `rtl` ist, repräsentiert `row` die Achse von rechts nach links, und `row-reverse` von links nach rechts.

## Syntax

```css
/* Die Richtung, in der Text in einer Zeile angeordnet wird */
flex-direction: row;

/* Wie <row>, aber umgekehrt */
flex-direction: row-reverse;

/* Die Richtung, in der Textzeilen gestapelt werden */
flex-direction: column;

/* Wie <column>, aber umgekehrt */
flex-direction: column-reverse;

/* Globale Werte */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Werte

Folgende Werte werden akzeptiert:

- `row`
  - : Die Hauptachse des Flex-Containers entspricht der Textausrichtung. Die Punkte **main-start** und **main-end** sind identisch zur Inhaltsrichtung.
- `row-reverse`
  - : Verhält sich wie `row`, aber die Punkte **main-start** und **main-end** sind entgegengesetzt zur Inhaltsrichtung.
- `column`
  - : Die Hauptachse des Flex-Containers ist die gleiche wie die Blockachse. Die Punkte **main-start** und **main-end** sind identisch zu den Punkten **before** und **after** der Schreibweise.
- `column-reverse`
  - : Verhält sich wie `column`, aber die Punkte **main-start** und **main-end** sind entgegengesetzt zur Inhaltsrichtung.

## Barrierefreiheit

Die Verwendung der `flex-direction` Eigenschaft mit den Werten `row-reverse` oder `column-reverse` schafft eine Diskrepanz zwischen der visuellen Darstellung und der Reihenfolge im DOM. Dies wirkt sich nachteilig auf Nutzer mit Sehbehinderungen aus, die mit unterstützender Technologie wie einem Bildschirmlesegerät navigieren. Wenn die visuelle (CSS) Reihenfolge wichtig ist, haben Bildschirmleser-Nutzer keinen Zugriff auf die korrekte Lesereihenfolge.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Verständnis von WCAG, Leitlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehren von Flex-Container-Spalten und -Zeilen

#### HTML

```html
<h4>Dies ist eine Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>Dies ist eine Row-Reverse</h4>
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
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
