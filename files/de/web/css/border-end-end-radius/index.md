---
title: border-end-end-radius
slug: Web/CSS/border-end-end-radius
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-end-end-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen logischen Rahmenradius auf einem Element, der einem physischen Rahmenradius entspricht, der vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements abhängt. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textorientierung](/de/docs/Web/CSS/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) funktionieren.

{{EmbedInteractiveExample("pages/css/border-end-end-radius.html")}}

Diese Eigenschaft betrifft die Ecke zwischen den Block-End- und Inline-End-Seiten des Elements. Beispielsweise entspricht sie im Modus `horizontal-tb` mit `ltr`-Richtung der Eigenschaft {{CSSxRef("border-bottom-right-radius")}}.

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-end-end-radius: 10px;
border-end-end-radius: 1em;

/* With two values the corner will be an ellipse */
border-end-end-radius: 1em 2em;

/* Global values */
border-end-end-radius: inherit;
border-end-end-radius: initial;
border-end-end-radius: revert;
border-end-end-radius: revert-layer;
border-end-end-radius: unset;
```

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Halbachsen der Ellipse an. Als absolute Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
