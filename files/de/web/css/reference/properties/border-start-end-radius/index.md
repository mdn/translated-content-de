---
title: border-start-end-radius
slug: Web/CSS/Reference/Properties/border-start-end-radius
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-start-end-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Eckradius eines Elements, der in Abhängigkeit vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements auf einen physischen Eckradius abgebildet wird. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textorientierung](/de/docs/Web/CSS/Reference/Properties/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) funktionieren.

{{InteractiveExample("CSS Demo: border-start-end-radius")}}

```css interactive-example-choice
border-start-end-radius: 80px 80px;
```

```css interactive-example-choice
border-start-end-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top right rounded corner.
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

Diese Eigenschaft beeinflusst die Ecke zwischen den block-start und inline-end Seiten des Elements. Beispielsweise entspricht sie in einem `horizontal-tb` Schreibmodus mit `ltr` Richtung der {{CSSxRef("border-top-right-radius")}} Eigenschaft.

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-start-end-radius: 10px;
border-start-end-radius: 1em;

/* With two values the corner will be an ellipse */
border-start-end-radius: 1em 2em;

/* Global values */
border-start-end-radius: inherit;
border-start-end-radius: initial;
border-start-end-radius: revert;
border-start-end-radius: revert-layer;
border-start-end-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreises oder die Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann er in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eckradius bei vertikalem Text

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
  border-start-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: white;
  border-start-end-radius: 10px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logische CSS-Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
