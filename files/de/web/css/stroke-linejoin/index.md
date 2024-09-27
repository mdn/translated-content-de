---
title: stroke-linejoin
slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-linejoin`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Form, die an den Ecken der Pfade eines [SVG](/de/docs/Web/SVG)-Elements verwendet werden soll. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-linejoin")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Ecken erzeugende Form oder Textinhalts-Element (siehe {{SVGAttr("stroke-linejoin")}} für eine vollständige Liste), kann aber als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die gewünschte Wirkung auf untergeordnete Elemente haben.

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

  - : Gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Abschrägung wird durch das Entfernen der Ecke mit einer Linie senkrecht zu einer Linie gebildet, die den Winkelunterschied in den Unterpfaden halbiert, wo sie den Verbindungspunkt treffen.

- `miter`

  - : Gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird gebildet durch das Verlängern der äußeren Kanten des Strichs entlang der Tangenten der Pfadsegmente, bis sie sich schneiden. Dies ist der Standardwert.

- `round`

  - : Gibt an, dass eine runde Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Dies wird erreicht durch das Abschneiden der Verbindung wie `bevel` und anschließendem Hinzufügen eines ausgefüllten Bogens, um die Ecke abzurunden.

Die folgenden Werte sind definiert, aber in keinem Browser unterstützt:

- `arcs`

  - : _(Nicht unterstützt.)_ Gibt an, dass eine _Arcs-Ecke_ verwendet werden soll, um Pfadsegmente zu verbinden. Die Form des Bogens wird durch das Verlängern der äußeren Kanten des Strichs am Verbindungspunkt mit Bögen gebildet, die dieselbe Krümmung wie die äußeren Kanten am Verbindungspunkt haben.

- `crop`

  - : _(Nicht unterstützt.)_ Gibt an, dass die Ecke über den Verbindungspunkt hinaus um die minimale Menge hinausgehen soll, die erforderlich ist, um eine konvexe Ecke zu bilden. Dies entspricht funktional `miter` (siehe oben) mit einem {{CSSxref('stroke-miterlimit')}} Wert von `1`.

- `fallback`

  - : _(Nicht unterstützt; riskant.)_ Verhält sich identisch wie `crop bevel`, wenn der {{CSSxref('stroke-miterlimit')}} Wert überschritten wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linienverbindungsstile

Dieses Beispiel zeigt die drei derzeit unterstützten Schlüsselwortwerte für `stroke-linejoin`.

#### HTML

Wir richten vier identische Pfade ein, die alle einen schwarzen Strich mit einer Breite von Eins und ohne Füllung haben.

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

Jedem der vier Pfade wird ein unterstützter Linienverbindungswert zugewiesen. Der erste ist abgeschrägt, der zweite abgerundet, der dritte gemittet und der vierte ebenfalls gemittet, aber mit einem {{CSSxref('stroke-miterlimit')}} von `2`, was dazu führt, dass die Ecke stattdessen abgeschrägt wird.

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
