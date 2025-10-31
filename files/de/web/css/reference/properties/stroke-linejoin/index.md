---
title: stroke-linejoin
slug: Web/CSS/Reference/Properties/stroke-linejoin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Form, die an den Ecken der gestrichelten Pfade eines [SVG](/de/docs/Web/SVG)-Elements verwendet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Eckengenerierungsform oder Textinhaltselement (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), aber als eine geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Nachkommenelemente haben.

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
  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Schräge wird gebildet, indem die Ecke durch eine Linie senkrecht zu einer Linie, die den Unterschied in den Unterpfadwinkeln halbiert, wo sie den Verbindungspunkt treffen, abgeschnitten wird.

- `miter`
  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke entsteht durch das Verlängern der äußeren Kanten des Strichs an den Tangenten der Pfadsegmente, bis sie sich schneiden. Dies ist der Standardwert.

- `round`
  - : Gibt an, dass eine runde Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem der Übergang wie nach `bevel` abgeschnitten und dann eine gefüllte Bogen-Tangente angefügt wird, um die Ecke abzurunden.

Die folgenden Werte sind definiert, werden jedoch in keinem Browser unterstützt:

- `arcs`
  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Arcs-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form der Bögen entsteht, indem die äußeren Kanten des Strichs am Verbindungspunkt mit Bögen verlängert werden, die dieselbe Krümmung haben wie die äußeren Kanten am Verbindungspunkt.

- `crop`
  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Verbindungspunkt hinaus um das Minimum verlängert werden soll, das erforderlich ist, um eine konvexe Ecke zu bilden. Dies ist funktional gleichwertig mit `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}}-Wert von `1`.

- `fallback`
  - : _(Nicht unterstützt; gefährdet.)_ Verhält sich identisch wie `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}}-Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel demonstriert die drei derzeit unterstützten Schlüsselwortwerte für `stroke-linejoin`.

#### HTML

Wir richten vier identische Pfade ein, die alle eine schwarze Strichstärke von eins und keine Füllung haben.

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

Jedem der vier Pfade wird ein unterstützter Linienverbindungswert zugewiesen. Der erste ist abgeschrägt, der zweite gerundet, der dritte geschnitten, und der vierte ebenfalls geschnitten, jedoch mit einem {{CSSxref('stroke-miterlimit')}} von `2`, was die Ecke dazu zwingt, abgeschrägt statt geschnitten zu sein.

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
