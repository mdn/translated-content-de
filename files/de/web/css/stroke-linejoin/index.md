---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die an den Ecken der gestrichelten Pfade eines [SVG](/de/docs/Web/SVG)-Elements verwendet wird. Wenn vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form, die Ecken erzeugt, oder für Textinhaltselemente (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), jedoch als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf nachfolgende Elemente haben.

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

  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Abschrägung entsteht, indem die Ecke durch eine Linie abgeschnitten wird, die senkrecht zu einer Linie steht, die den Unterschied in den Winkeln des Unterpfades bei ihrem Treffpunkt halbiert.

- `miter`

  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird gebildet, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente so lange verlängert werden, bis sie sich schneiden. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass eine runde Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht, indem der Verbund wie bei `bevel` abgeschnitten wird, und dann ein gefüllter Kreisbogen angehängt wird, um die Ecke zu runden.

Die folgenden Werte sind definiert, aber in keinem Browser unterstützt:

- `arcs`

  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Arc-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form des Bogens wird durch das Erweitern der äußeren Kanten des Strichs am Treffpunkt mit Bögen gebildet, die die gleiche Krümmung wie die äußeren Kanten am Treffpunkt haben.

- `crop`

  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Treffpunkt hinaus um den minimal notwendigen Betrag verlängert werden soll, um eine konvexe Ecke zu bilden. Dies ist funktionell äquivalent zu `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}} Wert von `1`.

- `fallback`

  - : _(Nicht unterstützt; gefährdet.)_ Verhält sich identisch mit `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}} Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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

Für jeden der vier Pfade wird ein unterstützter Linienverbindungswert angewendet. Der erste wird abgeschrägt, der zweite abgerundet, der dritte gespitzt und der vierte ebenfalls gespitzt, aber mit einem {{CSSxref('stroke-miterlimit')}} von `2`, was die Ecke zwingt, statt gespitzt abgerundet zu werden.

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
