---
title: border-end-end-radius
slug: Web/CSS/border-end-end-radius
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-end-end-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Border-Radius auf einem Element, der einem physischen Border-Radius entspricht, abhängig vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements. Dies ist nützlich beim Erstellen von Stilen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{InteractiveExample("CSS Demo: border-end-end-radius")}}

```css interactive-example-choice
border-end-end-radius: 80px 80px;
```

```css interactive-example-choice
border-end-end-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-end-end-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-end-end-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a bottom right rounded corner.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

Diese Eigenschaft betrifft die Ecke zwischen den Block-End- und den Inline-End-Seiten des Elements. Zum Beispiel entspricht sie im `horizontal-tb` Schreibmodus mit `ltr` Richtung der {{CSSxRef("border-bottom-right-radius")}} Eigenschaft.

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-end-end-radius: 10px;
border-end-end-radius: 1em;

/* With two values the corner will be an ellipse */
border-end-end-radius: 1em 2em;

/* Global values */
border-end-end-radius: inherit;
border-end-end-radius: initial;
border-end-end-radius: revert;
border-end-end-radius: revert-layer;
border-end-end-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Border-Radius mit vertikalem Text

#### HTML

```html
<div>
  <p class="exampleText">Example</p>
</div>
```

#### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-end-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-end-end-radius: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildete physische Eigenschaft: {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
