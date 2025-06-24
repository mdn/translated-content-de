---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die bei den Ecken der Pfade eines [SVG](/de/docs/Web/SVG) Elements verwendet wird. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Ecken-erzeugende Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf nachfolgende Elemente haben.

## Syntax

```css
/* keyword values */
stroke-linejoin: bevel;
stroke-linejoin: miter;
stroke-linejoin: round;

/* Global values */
stroke-linejoin: inherit;
stroke-linejoin: initial;
stroke-linejoin: revert;
stroke-linejoin: revert-layer;
stroke-linejoin: unset;
```

### Werte

- `bevel`

  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Abschrägung entsteht durch das Abschneiden der Ecke mit einer Linie, die senkrecht zu einer Linie ist, die den Unterschied der Teilpfadwinkel in dem Punkt halbiert, an dem sie aufeinandertreffen.

- `miter`

  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird gebildet, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass eine abgerundete Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem die Verbindung gemäß `bevel` beschnitten und dann ein gefüllter Bogen hinzugefügt wird, um die Ecke abzurunden.

Die folgenden Werte sind definiert, aber in keinem Browser unterstützt:

- `arcs`

  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Bogen-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form des Bogens entsteht durch das Verlängern der äußeren Kanten des Strichs am Verknüpfungspunkt mit Bögen, die die gleiche Krümmung wie die äußeren Kanten an diesem Punkt haben.

- `crop`

  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Verknüpfungspunkt hinaus verlängert werden soll, um die minimale Menge, die notwendig ist, um eine konvexe Ecke zu bilden. Dies entspricht funktional `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}} Wert von `1`.

- `fallback`
  - : _(Nicht unterstützt; gefährdet.)_ Verhält sich identisch zu `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}} Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel zeigt die drei derzeit unterstützten Schlüsselwortwerte für `stroke-linejoin`.

#### HTML

Wir richten vier identische Pfade ein, die alle eine schwarze Linie mit einer Breite von eins haben und keine Füllung.

```html
<svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path d="M2,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M2,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
  </g>
</svg>
```

#### CSS

Auf jeden der vier Pfade wird ein unterstützter Linienverbindungswert angewendet. Der erste ist abgeschrägt, der zweite abgerundet, der dritte abgeschrägt und der vierte ebenfalls abgeschrägt, jedoch mit einem {{CSSxref('stroke-miterlimit')}} von `2`, der die Ecke stattdessen abgeschrägt macht.

```css
path:nth-child(1) {
  stroke-linejoin: bevel;
}
path:nth-child(2) {
  stroke-linejoin: round;
}
path:nth-child(3) {
  stroke-linejoin: miter;
}
path:nth-child(4) {
  stroke-linejoin: miter;
  stroke-miterlimit: 2;
}
```

#### Ergebnisse

{{EmbedLiveSample("Linienverbindungsstile", "500", "600")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-linejoin")}} Attribut
