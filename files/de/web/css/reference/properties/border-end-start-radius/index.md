---
title: border-end-start-radius
slug: Web/CSS/Reference/Properties/border-end-start-radius
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-end-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements einem physischen Rahmenradius zugeordnet wird. Dies ist nützlich beim Erstellen von Stilen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/Reference/Properties/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) funktionieren.

Diese Eigenschaft betrifft die Ecke zwischen dem block-end und den inline-start Seiten des Elements. Zum Beispiel entspricht sie im Schreibmodus `horizontal-tb` mit `ltr` Richtung der Eigenschaft {{CSSxRef("border-bottom-left-radius")}}.

{{InteractiveExample("CSS Demo: border-end-start-radius")}}

```css interactive-example-choice
border-end-start-radius: 80px 80px;
```

```css interactive-example-choice
border-end-start-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a bottom left rounded corner.
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

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-end-start-radius: 10px;
border-end-start-radius: 1em;

/* With two values the corner will be an ellipse */
border-end-start-radius: 1em 2em;

/* Global values */
border-end-start-radius: inherit;
border-end-start-radius: initial;
border-end-start-radius: revert;
border-end-start-radius: revert-layer;
border-end-start-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder die Halbachsen der Ellipse. Als absolute Länge kann es in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datenart erlaubten Einheit ausgedrückt werden. Prozentangaben für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentangaben für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Rahmenradius mit vertikalem Text

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
  border-end-start-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: white;
  border-end-start-radius: 10px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
