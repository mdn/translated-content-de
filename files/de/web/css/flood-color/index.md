---
title: flood-color
slug: Web/CSS/flood-color
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`flood-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der aktuellen Filter-Primitive-Subregion in {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}} Elementen innerhalb eines {{SVGElement("filter")}}. Falls vorhanden, überschreibt sie das {{SVGAttr("flood-color")}} Attribut des Elements.

> [!NOTE]
> Die Eigenschaft `flood-color` gilt nur für {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG, HTML oder Pseudo-Elemente.

## Syntax

```css
/* <color> values */
flood-color: red;
flood-color: hsl(120deg 75% 25% / 60%);
flood-color: currentColor;

/* Global values */
flood-color: inherit;
flood-color: initial;
flood-color: revert;
flood-color: revert-layer;
flood-color: unset;
```

### Werte

- {{cssxref("color_value", "&lt;color>")}}
  - : Die Farbe der Flut. Dies kann ein beliebiger gültiger CSS {{cssxref("color_value", "&lt;color>")}} Wert sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Farbe einer Filterflut

Dieses Beispiel zeigt die grundlegende Verwendung von `flood-color` und wie die CSS-Eigenschaft `flood-color` Vorrang vor dem `flood-color` Attribut hat.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("filter")}} Elementen, jeweils mit einem {{SVGElement("feFlood")}} Kind. Jedes `<feFlood>` Element enthält das SVG-Attribut `flood-color`, das die Flutfarbe als `seagreen` definiert. Wir haben zwei {{SVGElement("rect")}} Elemente mit einem Filterattribut eingefügt; hier werden die Filter angezeigt.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Wir definieren die Größe und Position unseres `<rect>` mit den CSS-Eigenschaften {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("x")}} und {{cssxref("y")}}:

```css
rect {
  width: 100px;
  height: 100px;
  x: 10px;
  y: 10px;
}
#r2 {
  x: 150px;
}
```

Wir wenden dann unterschiedliche Flutfarbwerte auf die `<feFlood>` Elemente unter Verwendung der CSS-Eigenschaft `flood-color` an. Wir verwenden eine benannte Farbe und eine 3-stellige Hexadezimalfarbe, aber wir können jede gültige CSS-Farbschreibweise verwenden:

```css
#flood1 feFlood {
  flood-color: rebeccapurple;
}
#flood2 feFlood {
  flood-color: #ff3366;
}
```

#### Ergebnisse

{{EmbedLiveSample("Festlegen der Farbe einer Filterflut", "300", "220")}}

Die Attribute definierten die Quadrate als Seagreen, aber diese Werte wurden durch die CSS `flood-color` Werte überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flood-opacity")}}
- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("lighting-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG {{SVGAttr("flood-color")}} Attribut
