---
title: "`stroke-linejoin` CSS property"
short-title: stroke-linejoin
slug: Web/CSS/Reference/Properties/stroke-linejoin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke-linejoin`**-Eigenschaft des [CSS](/de/docs/Web/CSS) definiert die Form, die an den Ecken der mit Strichen versehenen Pfade eines [SVG](/de/docs/Web/SVG)-Elements verwendet werden soll. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Ecken-formende Form oder Text-Inhaltselement (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die gewünschte Wirkung auf Nachfahren-Elemente haben.

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
  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Abschrägung entsteht, indem die Ecke von einer Linie abgeschnitten wird, die senkrecht zu einer Linie steht, die den Unterschied der Subpfad-Winkel an der Verbindungsstelle halbiert.

- `miter`
  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird durch das Verlängern der äußeren Kanten des Strichs entlang der Tangenten der Pfadsegmente bis zu deren Schnittpunkt gebildet. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass eine runde Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem die Verbindung wie bei `bevel` zugeschnitten wird und dann ein gefüllter Bogen angefügt wird, um die Ecke abzurunden.

Die folgenden Werte sind definiert, werden jedoch in keinem Browser unterstützt:

- `arcs`
  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Bogen-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Bogenform entsteht durch das Verlängern der äußeren Kanten des Strichs an der Verbindungsstelle mit Bögen, die dieselbe Krümmung wie die äußeren Kanten an der Verbindungsstelle haben.

- `crop`
  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Verbindungs-Punkt hinaus um das notwendige Minimum verlängert werden soll, um eine konvexe Ecke zu bilden. Dies entspricht funktional `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}}-Wert von `1`.

- `fallback`
  - : _(Nicht unterstützt; gefährdet.)_ verhält sich identisch wie `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}}-Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel zeigt die drei derzeit unterstützten Schlüsselwortwerte für `stroke-linejoin`.

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

Jedem der vier Pfade wird ein unterstützter Linienverbindungswert zugewiesen. Der erste ist abgeschrägt, der zweite gerundet, der dritte abgeschrägt, und der vierte ebenfalls abgeschrägt, aber mit einem {{CSSxref('stroke-miterlimit')}} von `2`, wodurch die Ecke gezwungen wird, abgeschrägt statt abgeschrägt zu sein.

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
