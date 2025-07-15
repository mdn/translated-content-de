---
title: border-start-start-radius
slug: Web/CSS/border-start-start-radius
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-start-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Randradius auf einem Element, der einem physikalischen Randradius entspricht, abhängig von der {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements. Dies ist nützlich, um Designs zu erstellen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{InteractiveExample("CSS Demo: border-start-start-radius")}}

```css interactive-example-choice
border-start-start-radius: 80px 80px;
```

```css interactive-example-choice
border-start-start-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-start-start-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-start-start-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top left rounded corner.
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

Diese Eigenschaft beeinflusst die Ecke zwischen den Block-Anfang und den Inline-Anfang Seiten des Elements. Zum Beispiel entspricht es in einem `horizontal-tb` Schreibmodus mit `ltr` Richtung der {{CSSxRef("border-top-left-radius")}} Eigenschaft.

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-start-start-radius: 10px;
border-start-start-radius: 1em;

/* With two values the corner will be an ellipse */
border-start-start-radius: 1em 2em;

/* Global values */
border-start-start-radius: inherit;
border-start-start-radius: initial;
border-start-start-radius: revert;
border-start-start-radius: revert-layer;
border-start-start-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder die Halbachsen der Ellipse. Als absolute Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentwerte für die horizontale Achse beziehen sich auf die Breite des Rahmens, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe des Rahmens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Randradius mit vertikalem Text

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
  border-start-start-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-start-start-radius: 10px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordnete physikalische Eigenschaft: {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
