---
title: border-end-start-radius
slug: Web/CSS/border-end-start-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-end-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Randradius eines Elements, der je nach dem {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements auf einen physischen Randradius abgebildet wird. Dies ist nützlich beim Erstellen von Stilen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren sollen.

{{EmbedInteractiveExample("pages/css/border-end-start-radius.html")}}

Diese Eigenschaft betrifft die Ecke zwischen den Block-End- und Inline-Start-Seiten des Elements. In einem `horizontal-tb`-Schreibmodus mit `ltr`-Richtung entspricht dies beispielsweise der {{CSSxRef("border-bottom-left-radius")}} Eigenschaft.

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
  - : Gibt die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse an. Als absolute Länge kann sie in jeder von CSS {{cssxref("&lt;length&gt;")}} zugelassenen Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse auf die Höhe des Kastens. Negative Werte sind ungültig.

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
  border-end-start-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildete physische Eigenschaft: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
