---
title: border-start-start-radius
slug: Web/CSS/border-start-start-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-start-start-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der einem physischen Rahmenradius zugeordnet wird, der von den {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements abhängt. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textorientierung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{EmbedInteractiveExample("pages/css/border-start-start-radius.html")}}

Diese Eigenschaft betrifft die Ecke zwischen den Block-Start- und Inline-Start-Seiten des Elements. Zum Beispiel entspricht sie in einem `horizontal-tb` Schreibmodus mit `ltr` Richtung der {{CSSxRef("border-top-left-radius")}} Eigenschaft.

## Syntax

```css
/* <length> Werte */
/* Mit einem Wert ist die Ecke ein Kreis */
border-start-start-radius: 10px;
border-start-start-radius: 1em;

/* Mit zwei Werten ist die Ecke eine Ellipse */
border-start-start-radius: 1em 2em;

/* Globale Werte */
border-start-start-radius: inherit;
border-start-start-radius: initial;
border-start-start-radius: revert;
border-start-start-radius: revert-layer;
border-start-start-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse an. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
