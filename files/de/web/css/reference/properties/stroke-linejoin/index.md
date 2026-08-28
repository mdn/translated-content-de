---
title: "`stroke-linejoin` CSS property"
short-title: stroke-linejoin
slug: Web/CSS/Reference/Properties/stroke-linejoin
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die an den Ecken der gestrichelten Pfade eines [SVG](/de/docs/Web/SVG)-Elements verwendet wird. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Ecke erzeugende Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), kann aber als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat immer noch die beabsichtigte Wirkung auf abgeleitete Elemente.

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
  - : Gibt an, dass eine abgeflachte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Das Abflachen wird durch das Abschneiden der Ecke durch eine Linie erreicht, die senkrecht zu einer Linie steht, die den Unterschied in den Unterpfadwinkeln in der Verbindungsstelle halbiert.

- `miter`
  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird durch das Verlängern der äußeren Kanten des Strichs an den Tangenten der Pfadsegmente gebildet, bis sie sich schneiden. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass eine abgerundete Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem die Verbindungsstelle gemäß `bevel` abgeschnitten und dann ein gefüllter Bogen angefügt wird, um die Ecke zu runden.

Die folgenden Werte sind definiert, aber in keinem Browser unterstützt:

- `arcs`
  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Bogen-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form des Bogens wird durch das Verlängern der äußeren Kanten des Strichs an der Verbindungsstelle mit Bögen gebildet, die die gleiche Krümmung wie die äußeren Kanten an der Verbindungsstelle haben.

- `crop`
  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über die Verbindungsstelle hinaus verlängert werden sollte, um die minimale Menge zu bilden, die notwendig ist, um eine konvexe Ecke zu bilden. Dies ist funktional identisch mit `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}} Wert von `1`.

- `fallback`
  - : _(Nicht unterstützt; Gefahr.)_ Verhält sich identisch zu `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}} Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel demonstriert die drei derzeit unterstützten Schlüsselwortwerte für `stroke-linejoin`.

#### HTML

Wir richten vier identische Pfade ein, die alle einen schwarzen Strich mit einer Breite von eins und keine Füllung haben.

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

Zu jedem der vier Pfade wird ein unterstützter Linienverbindungswert angewendet. Der erste ist abgeflacht, der zweite abgerundet, der dritte gegehrtet und der vierte ebenfalls gegehrtet, jedoch mit einem {{CSSxref('stroke-miterlimit')}} von `2`, was die Ecke dazu zwingt, abgeflacht statt gegehrtet zu werden.

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

{{EmbedLiveSample("Line-joining styles", "500", "600")}}

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
