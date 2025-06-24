---
title: flood-opacity
slug: Web/CSS/flood-opacity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`flood-opacity`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Deckkraft der aktuellen Filter-Primärregion in {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}}-Elementen innerhalb eines {{SVGElement("filter")}}. Wenn vorhanden, überschreibt sie das {{SVGAttr("flood-opacity")}}-Attribut des Elements.

Der Eigenschaftswert beeinflusst den Alpha-Kanal des {{cssxref("flood-color")}}; es kann die Transparenz einer `flood-color` erhöhen, aber nicht die durch die `flood-color`-Eigenschaft definierte Farbe undurchsichtiger machen.

> [!NOTE]
> Die `flood-opacity`-Eigenschaft gilt nur für {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* numeric and percentage values */
flood-opacity: 0.2;
flood-opacity: 20%;

/* Global values */
flood-opacity: inherit;
flood-opacity: initial;
flood-opacity: revert;
flood-opacity: revert-layer;
flood-opacity: unset;
```

### Werte

Das `<opacity-value>` ist eine {{cssxref("number")}} oder {{cssxref("percentage")}}, die die Deckkraft des SVG-Verlaufs-`<flood>`-Elements angibt.

- {{cssxref("number")}}

  - : Ein numerischer Wert zwischen `0` und `1`, einschließlich.

- {{cssxref("percentage")}}
  - : Ein Prozentwert zwischen `0%` und `100%`, einschließlich.

Mit `0` oder `0%` eingestellt, ist die Flut vollständig transparent. Mit `1` oder `100%` eingestellt, hat das Element die volle Deckkraft des `flood-color`-Werts, der möglicherweise teilweise undurchsichtig ist oder nicht.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Flutdeckkraft eines Filters

Dieses Beispiel demonstriert die grundlegende Verwendung von `flood-opacity` und wie die CSS-`flood-opacity`-Eigenschaft Vorrang vor dem `flood-opacity`-Attribut hat.

#### HTML

Wir haben ein SVG mit einigen {{SVGElement("filter")}}-Elementen, jedes mit einem {{SVGElement("feFlood")}}-Kind. Die `<feFlood>` definieren die Filter als `seagreen`, wobei das erste durch sein `flood-opacity`-Attribut als vollständig undurchsichtig deklariert ist und das zweite vollständig transparent ist. Wir haben zwei {{SVGElement("rect")}}-Elemente eingefügt, jedes mit einem Filter-Attribut.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" flood-opacity="1" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" flood-opacity="0" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Wir definieren die {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("x")}}, und {{cssxref("y")}}, Positionierung unserer Rechtecke mit CSS und fügen einen sich wiederholenden linearen Verlauf als {{cssxref("background-image")}} auf das SVG, damit die Deckkraft der flood-color deutlicher wird:

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #ccc 0px 10px
  );
}
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

Dann wenden wir unterschiedliche Flutdeckkraftwerte auf die `<feFlood>`-Elemente mit der CSS-`flood-opacity`: Eigenschaft an:

```css
#flood1 feFlood {
  flood-opacity: 0.5;
}
#flood2 feFlood {
  flood-opacity: 90%;
}
```

#### Ergebnisse

{{EmbedLiveSample(" Defining the flood opacity of a filter", "300", "220")}}

Die Attribute definierten das erste Quadrat als vollständig undurchsichtig und das zweite als vollständig transparent, aber diese Werte wurden durch die CSS-`flood-opacity`-Werte überschrieben. Die seagreen-Filter sind jeweils 50% und 90% undurchsichtig.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flood-color")}}
- {{cssxref("fill")}}
- {{cssxref("stop-opacity")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("opacity")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function")}}, einschließlich {{cssxref("filter-function/opacity", "opacity()")}}
- SVG {{SVGAttr("flood-opacity")}}-Attribut
