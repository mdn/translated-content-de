---
title: border-end-end-radius
slug: Web/CSS/border-end-end-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-end-end-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der zu einem physischen Rahmenradius abbildet, der von der {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements abhängt. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{EmbedInteractiveExample("pages/css/border-end-end-radius.html")}}

Diese Eigenschaft beeinflusst die Ecke zwischen den block-end und inline-end Seiten des Elements. Beispielsweise entspricht sie im Schreibmodus `horizontal-tb` mit `ltr`-Richtung der {{CSSxRef("border-bottom-right-radius")}}-Eigenschaft.

## Syntax

```css
/* <length> Werte */
/* Bei einem Wert wird die Ecke ein Kreis sein */
border-end-end-radius: 10px;
border-end-end-radius: 1em;

/* Bei zwei Werten wird die Ecke eine Ellipse sein */
border-end-end-radius: 1em 2em;

/* Globale Werte */
border-end-end-radius: inherit;
border-end-end-radius: initial;
border-end-end-radius: revert;
border-end-end-radius: revert-layer;
border-end-end-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Prozentangaben für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
- Die zugeordnete physikalische Eigenschaft: {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
