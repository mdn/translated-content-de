---
title: "`border-end-end-radius` CSS property"
short-title: border-end-end-radius
slug: Web/CSS/Reference/Properties/border-end-end-radius
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-end-end-radius`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert einen logischen Rahmenradius auf einem Element, der einem physischen Rahmenradius zugeordnet wird. Dieser hängt von dem {{cssxref("writing-mode")}}, der {{cssxref("direction")}} und der {{cssxref("text-orientation")}} des Elements ab. Dies ist nützlich, um Stile zu erstellen, die unabhängig von der [Textorientierung](/de/docs/Web/CSS/Reference/Properties/text-orientation) und dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) funktionieren.

Diese Eigenschaft beeinflusst die Ecke zwischen den Block-End- und Inline-End-Seiten des Elements. Zum Beispiel entspricht sie im Schreibmodus `horizontal-tb` mit `ltr`-Richtung der Eigenschaft {{CSSxRef("border-bottom-right-radius")}}.

{{InteractiveExample("CSS Demo: border-end-end-radius")}}

```css interactive-example-choice
border-end-end-radius: 80px 80px;
```

```css interactive-example-choice
border-end-end-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-end-end-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-end-end-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a bottom right rounded corner.
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
  - : Bezeichnet die Größe des Kreisradiuses oder der Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}}-Datentyp erlaubten Einheit ausgedrückt werden. Prozentwerte für die horizontale Achse beziehen sich auf die Breite der Box, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
  border-end-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: white;
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

- [CSS-Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordnete physische Eigenschaft: {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
