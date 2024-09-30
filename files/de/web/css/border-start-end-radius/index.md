---
title: border-start-end-radius
slug: Web/CSS/border-start-end-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-start-end-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius für ein Element, der je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements einem physikalischen Rahmenradius zugeordnet wird. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{EmbedInteractiveExample("pages/css/border-start-end-radius.html")}}

Diese Eigenschaft betrifft die Ecke zwischen den block-start und inline-end Seiten des Elements. Zum Beispiel entspricht sie im `horizontal-tb` Schreibmodus mit der `ltr` Richtung der {{CSSxRef("border-top-right-radius")}} Eigenschaft.

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
  - : Bezeichnet die Größe des Kreisradius oder der halb-großen und halb-kleinen Achsen der Ellipse. Als absolute Länge kann er in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
  border-start-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordnete physikalische Eigenschaft: {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
