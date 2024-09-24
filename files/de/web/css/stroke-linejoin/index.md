---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die an den Ecken eines gestrichelten Pfads eines [SVG](/de/docs/Web/SVG) Elements verwendet wird. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Eckenerzeugungsform oder Textinhaltelement (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), aber als vererbbare Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf Nachkommenelemente haben.

## Syntax

```css
/* Schlüsselwortwerte */
stroke-linejoin: bevel;
stroke-linejoin: miter;
stroke-linejoin: round;

/* Globale Werte */
stroke-linejoin: inherit;
stroke-linejoin: initial;
stroke-linejoin: revert;
stroke-linejoin: revert-layer;
stroke-linejoin: unset;
```

### Werte

- `bevel`

  - : Gibt an, dass eine Abgeschrägte Ecke verwendet werden soll, um die Pfadsegmente zu verbinden. Die Abschrägung wird gebildet, indem die Ecke durch eine Linie abgeschnitten wird, die senkrecht zu einer Linie steht, die die Differenz der Unterpfadwinkel halbiert, wo sie den Verbindungspunkt treffen.

- `miter`

  - : Gibt an, dass eine spitze Ecke verwendet werden soll, um die Pfadsegmente zu verbinden. Die Ecke wird gebildet, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass eine runde Ecke verwendet werden soll, um die Pfadsegmente zu verbinden. Dies wird erreicht, indem der Anschluss gemäß `bevel` zugeschnitten wird und dann ein ausgefüllter Bogen tangential hinzugefügt wird, um die Ecke abzurunden.

Die folgenden Werte sind definiert, aber in keinem Browser unterstützt:

- `arcs`

  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Bogen-Ecke_ verwendet werden soll, um die Pfadsegmente zu verbinden. Die Form des Bogens wird gebildet, indem die äußeren Kanten des Strichs am Verbindungspunkt mit Bögen verlängert werden, die dieselbe Krümmung wie die äußeren Kanten am Verbindungspunkt haben.

- `crop`

  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Verbindungspunkt hinaus verlängert werden soll, um eine konvexe Ecke zu bilden. Dies ist funktionell äquivalent zu `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}} Wert von `1`.

- `fallback`

  - : _(Nicht unterstützt; gefährdet.)_ Verhält sich identisch zu `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}} Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel demonstriert die drei aktuell unterstützten Schlüsselwortwerte für `stroke-linejoin`.

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

Für jeden der vier Pfade wird ein unterstützter Linienverbindungswert angewendet. Der erste ist abgeschrägt, der zweite gerundet, der dritte gespitzt, und der vierte ist ebenfalls gespitzt, aber mit einem {{CSSxref('stroke-miterlimit')}} von `2`, was die Ecke zwingt, abgeschrägt statt gespitzt zu sein.

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
