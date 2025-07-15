---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form, die an den Ecken von mit Linien versehenen Pfaden eines [SVG](/de/docs/Web/SVG)-Elements verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Eckenerzeugungsform oder für textinhaltliche Elemente (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und immer noch die beabsichtigte Wirkung auf Nachfolgeelemente haben.

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
  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Abschrägung wird gebildet, indem die Ecke mit einer Linie abgeschnitten wird, die senkrecht zu einer Linie steht, die den Unterschied in den Unterpfadwinkeln an der Verbindungsstelle halbiert.

- `miter`
  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird durch das Verlängern der äußeren Kanten des Strichs an den Tangenten der Pfadsegmente gebildet, bis sie sich schneiden. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass eine abgerundete Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem die Verbindung gemäß `bevel` abgeschnitten wird und dann ein gefüllter Kreisbogen hinzugefügt wird, um die Ecke abzurunden.

Die folgenden Werte sind definiert, werden jedoch in keinem Browser unterstützt:

- `arcs`
  - : _(Nicht unterstützt.)_ Gibt an, dass eine _arc-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form des Bogens wird durch das Verlängern der äußeren Kanten des Strichs an der Verbindungsstelle mit Bögen, die die gleiche Krümmung wie die äußeren Kanten an der Verbindungsstelle haben, gebildet.

- `crop`
  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über die Verbindungsstelle hinaus um den minimalen Betrag verlängert werden sollte, der erforderlich ist, um eine konvexe Ecke zu bilden. Dies ist funktional äquivalent zu `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}}-Wert von `1`.

- `fallback`
  - : _(Nicht unterstützt; gefährdet.)_ verhält sich identisch zu `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}}-Wert überschritten wird.

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

Für jeden der vier Pfade wird ein unterstützter Linienverbindungswert angewendet. Der erste ist abgeschrägt, der zweite abgerundet, der dritte geschnitten und der vierte ebenfalls geschnitten, jedoch mit einem {{CSSxref('stroke-miterlimit')}} von `2`, der die Ecke zwingt, abgeschrägt statt geschnitten zu sein.

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
- SVG {{SVGAttr("stroke-linejoin")}}-Attribut
