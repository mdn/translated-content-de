---
title: flood-color
slug: Web/CSS/flood-color
l10n:
  sourceCommit: 969c3ca835e0a43a403ed61a3ea8245539fcc4dd
---

{{CSSRef}}

Die **`flood-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der aktuellen Filterprimitive-Unterregion in {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}} Elementen innerhalb eines {{SVGElement("filter")}}. Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("flood-color")}} des Elements.

> [!NOTE]
> Die Eigenschaft `flood-color` gilt nur für die Elemente {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}} innerhalb eines {{SVGElement("svg")}}. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* <color> values */
flood-color: red;
flood-color: hsl(120deg 75% 25% / 60%);
flood-color: currentcolor;

/* Global values */
flood-color: inherit;
flood-color: initial;
flood-color: revert;
flood-color: revert-layer;
flood-color: unset;
```

### Werte

- {{cssxref("color_value", "&lt;color>")}}

  - : Die Farbe des Floods. Dies kann ein beliebiger gültiger CSS {{cssxref("color_value", "&lt;color>")}} Wert sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Farbe eines Filters Flood definieren

Dieses Beispiel demonstriert die grundlegende Verwendung von `flood-color` und wie die CSS-Eigenschaft `flood-color` Vorrang vor dem Attribut `flood-color` hat.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("filter")}} Elementen, die jeweils ein {{SVGElement("feFlood")}} Kind enthalten. Jedes `<feFlood>` Element beinhaltet das SVG-Attribut `flood-color`, das die Flood-Farbe als `seagreen` festlegt. Wir haben zwei {{SVGElement("rect")}} Elemente mit einem Filterattribut eingefügt; hier werden die Filter angezeigt.

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

Dann wenden wir verschiedene Flood-Farbwerte auf die `<feFlood>` Elemente mit der CSS-Eigenschaft `flood-color` an. Wir verwenden eine benannte Farbe und eine 3-stellige hexadezimale Farbe, aber wir können jede gültige CSS-Farbsyntax verwenden:

```css
#flood1 feFlood {
  flood-color: rebeccapurple;
}
#flood2 feFlood {
  flood-color: #f36;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the color of a filters flood", "300", "220")}}

Die Attribute haben die Quadrate als seagreen definiert, aber diese Werte wurden durch die CSS `flood-color` Werte überschrieben.

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
