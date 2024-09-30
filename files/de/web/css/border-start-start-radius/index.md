---
title: border-start-start-radius
slug: Web/CSS/border-start-start-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-start-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der auf einen physischen Rahmenradius abgebildet wird, welcher von dem {{cssxref("writing-mode")}}, der {{cssxref("direction")}} und der {{cssxref("text-orientation")}} des Elements abhängt. Dies ist nützlich beim Erstellen von Stilvorlagen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren sollen.

{{EmbedInteractiveExample("pages/css/border-start-start-radius.html")}}

Diese Eigenschaft beeinflusst die Ecke zwischen den block-start und inline-start Seiten des Elements. Zum Beispiel entspricht es im Schreibmodus `horizontal-tb` mit `ltr` Richtung der {{CSSxRef("border-top-left-radius")}} Eigenschaft.

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
  - : Bezeichnet die Größe des Kreisradius oder die semi-major und semi-minor Achsen der Ellipse. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
- Die abgebildete physische Eigenschaft: {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
