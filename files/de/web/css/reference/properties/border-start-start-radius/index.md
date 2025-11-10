---
title: border-start-start-radius
slug: Web/CSS/Reference/Properties/border-start-start-radius
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-start-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Randradius eines Elements, der zu einem physischen Randradius wird, abhängig vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements. Dies ist nützlich, wenn Stile erstellt werden, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/Reference/Properties/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) funktionieren sollen.

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

Diese Eigenschaft betrifft die Ecke zwischen der Block-Startseite und der Inline-Startseite des Elements. Zum Beispiel entspricht sie im `horizontal-tb` Schreibmodus mit `ltr` Richtung der Eigenschaft {{CSSxRef("border-top-left-radius")}}.

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
  - : Bezeichnet die Größe des Kreisradius oder der Halb-Haupt- und Halb-Nebenachsen der Ellipse. Als absolute Länge kann es in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
  background-color: white;
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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
