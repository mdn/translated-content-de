---
title: border-end-start-radius
slug: Web/CSS/border-end-start-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-end-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements einem physikalischen Rahmenradius zugeordnet wird. Dies ist nützlich, wenn Sie Stile erstellen, die unabhängig von der [Textausrichtung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{EmbedInteractiveExample("pages/css/border-end-start-radius.html")}}

Diese Eigenschaft beeinflusst die Ecke zwischen den Block-End- und Inline-Start-Seiten des Elements. Zum Beispiel entspricht sie im `horizontal-tb` Schreibmodus mit `ltr` Richtung der {{CSSxRef("border-bottom-left-radius")}} Eigenschaft.

## Syntax

```css
/* <length> Werte */
/* Mit einem Wert wird die Ecke ein Kreis */
border-end-start-radius: 10px;
border-end-start-radius: 1em;

/* Mit zwei Werten wird die Ecke eine Ellipse */
border-end-start-radius: 1em 2em;

/* Globale Werte */
border-end-start-radius: inherit;
border-end-start-radius: initial;
border-end-start-radius: revert;
border-end-start-radius: revert-layer;
border-end-start-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Halbachsen der Ellipse an. Als absolute Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordnete physikalische Eigenschaft: {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
