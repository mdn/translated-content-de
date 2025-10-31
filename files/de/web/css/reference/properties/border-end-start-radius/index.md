---
title: border-end-start-radius
slug: Web/CSS/Reference/Properties/border-end-start-radius
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-end-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der abhängig vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements auf einen physischen Rahmenradius abgebildet wird. Dies ist nützlich, wenn Sie Stile erstellen, die unabhängig von der [Textorientierung](/de/docs/Web/CSS/Reference/Properties/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

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

Diese Eigenschaft betrifft die Ecke zwischen den Block-Ende- und Inline-Startseiten des Elements. Zum Beispiel entspricht es im Modus `horizontal-tb` mit der Richtung `ltr` der Eigenschaft {{CSSxRef("border-bottom-left-radius")}}.

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
  - : Bezeichnet die Größe des Kreisbogenradius oder die semi-großen und semi-kleinen Achsen der Ellipse. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentangaben für die horizontale Achse beziehen sich auf die Breite der Box, Prozentangaben für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
