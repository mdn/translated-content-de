---
title: lighting-color
slug: Web/CSS/Reference/Properties/lighting-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`lighting-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Lichtquelle für die {{SVGElement("feDiffuseLighting")}} und {{SVGElement("feSpecularLighting")}} SVG-Lichtfilter-Primitiven in einem SVG-{{SVGElement("filter")}} fest. Wenn vorhanden, überschreibt sie das {{SVGAttr("lighting-color")}} Attribut des Elements.

> [!NOTE]
> Die `lighting-color` Eigenschaft gilt nur für die {{SVGElement("feDiffuseLighting")}} und {{SVGElement("feSpecularLighting")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-, HTML- oder Pseudo-Elemente.

## Syntax

```css
/* <color> values */
lighting-color: red;
lighting-color: hsl(120deg 75% 25% / 60%);
lighting-color: currentColor;

/* Global values */
lighting-color: inherit;
lighting-color: initial;
lighting-color: revert;
lighting-color: revert-layer;
lighting-color: unset;
```

### Werte

- {{cssxref("color_value", "&lt;color>")}}
  - : Die Farbe des Lichts. Dies kann jeder gültige CSS {{cssxref("color_value", "&lt;color>")}} Wert sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Farbe von Filterlicht

Dieses Beispiel demonstriert die grundlegende Verwendung von `lighting-color` und wie die CSS `lighting-color` Eigenschaft das `lighting-color` Attribut überschreibt.

#### HTML

Wir haben ein SVG mit zwei {{SVGElement("filter")}}-Elementen, eines mit einem `<feDiffuseLighting>` und eines mit einem `<feSpecularLighting>` Kind. Jedes enthält das SVG `lighting-color` Attribut, das die Beleuchtungsfarbe als `red` definiert. Beide dieser Kinder haben ein {{SVGElement("fePointLight")}}, das erforderliche Kind, das die Lichtquelle festlegt. Wir haben zwei {{SVGElement("rect")}}-Elemente mit einem Filterattribut hinzugefügt; hier werden die Filter angezeigt.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feDiffuseLighting lighting-color="red">
      <fePointLight x="75" y="30" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="flood2">
    <feSpecularLighting specularExponent="5" lighting-color="red">
      <fePointLight x="225" y="75" z="5" />
    </feSpecularLighting>
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Wir definieren die Größe und Position unseres `<rect>` mit den CSS {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("x")}} und {{cssxref("y")}} Eigenschaften. Wir fügen dem SVG auch ein Hintergrundbild hinzu, um jegliche Farb-Alphatransparenz deutlicher zu machen:

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #cccccc 0px 10px
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

Dann wenden wir unterschiedliche Beleuchtungsfarbenwerte auf die Kinderelemente des Filters mit der CSS `lighting-color` Eigenschaft an. Wir verwenden eine benannte Farbe und eine 3-stellige hexadezimale Farbe, aber wir können jede gültige CSS-Farbsyntax verwenden:

```css
feDiffuseLighting {
  lighting-color: blue;
}

feSpecularLighting {
  lighting-color: #ff0099;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the color of filter lighting", "300", "220")}}

Die Attribute definierten die Farbe beider Lichtfilter als `red`, aber diese Werte wurden durch die CSS `lighting-color` Werte überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("flood-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("flood-opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG {{SVGAttr("lighting-color")}} Attribut
