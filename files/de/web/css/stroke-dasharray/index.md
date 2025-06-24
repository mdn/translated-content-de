---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`stroke-dasharray`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Muster aus Strichen und Lücken, das beim Zeichnen der Linien eines [SVG](/de/docs/Web/SVG) Shapes verwendet wird. Falls vorhanden, überschreibt es das {{SVGAttr("stroke-dasharray")}} Attribut des Elements.

Diese Eigenschaft kann auf jede SVG-Form oder Textinhaltselement angewendet werden (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), aber als eine vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und trotzdem die beabsichtigte Wirkung auf die Linien von Nachfahrelementen haben.

## Syntax

```css
/* Keywords */
stroke-dasharray: none;

/* Numeric, length, and percentage values */
stroke-dasharray: 2px, 5px;
stroke-dasharray: 20%, 50%;
stroke-dasharray: 2, 5;

/* The following two rules are equivalent */
stroke-dasharray: 2, 5, 3;
stroke-dasharray: 2, 5, 3, 2, 5, 3;

/* Global values */
stroke-dasharray: inherit;
stroke-dasharray: initial;
stroke-dasharray: revert;
stroke-dasharray: revert-layer;
stroke-dasharray: unset;
```

### Werte

Der Wert ist eine Liste von durch Kommas und/oder Leerzeichen getrennten `<number>`, `<length>` und/oder `<percentage>` Werten, die die Längen von abwechselnden Strichen und Lücken angeben, oder das Schlüsselwort `none`. Wenn eine ungerade Anzahl von Werten angegeben wird, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten festzulegen.

- `none`

  - : Der Strich wird ohne gestricheltes Muster gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>` oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Streifenmuster

Dieses Beispiel zeigt die grundlegende Nutzung der `stroke-dasharray` Eigenschaft mit durch Leerzeichen getrennten `<number>` Werten.

#### HTML

Zuerst richten wir eine grundlegende SVG-Rechteckform ein. Auf dieses Rechteck wird ein roter Strich mit einer Breite von `2` angewendet.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Wir definieren ein Strichmuster für die Linie: zehn Einheiten Strich, gefolgt von fünf Einheiten Zwischenraum. Das bedeutet, die Lücken zwischen den Strichen sind halb so lang wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Wo der Strich eine Ecke bildet, setzt sich das Muster fort. In der oberen linken Ecke, wo Anfang und Ende des Strichs aufeinandertreffen, scheint der zehn Einheiten lange Anfangstrich mit dem am Ende des Pfades sichtbaren Teil des Strichmusters verbunden zu sein, wodurch es erscheint, als wäre eine längere als zehn Einheiten lange Linie um die Ecke gebogen.

### Wiederholung des Streifenmusters

Dieses Beispiel enthält eine ungerade Anzahl von durch Kommas getrennten `<number>` Werten, um zu zeigen, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten angegeben wird, um eine gerade Anzahl von Werten festzulegen.

#### HTML

In diesem Fall definieren wir zwei Rechtecke.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Für das erste Rechteck definieren wir ein Dasharray von `5, 5, 1`, was fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich erfordert. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird der gesamte Satz von Zahlen wiederholt, wodurch ein Wert entsteht, der mit dem beim zweiten Rechteck angewendeten identisch ist.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5, 5, 1;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5, 5, 1, 5, 5, 1;
}
```

#### Ergebnis

{{EmbedLiveSample("Dash array repetition", "500", "500")}}

Der Grund, warum eine gerade Anzahl von Zahlen erforderlich ist, liegt darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Somit wird das definierte Muster zu einem fünf Einheiten langen Strich, einer fünf Einheiten langen Lücke, einem ein Einheiten langen Strich, einer fünf Einheiten langen Lücke, einem fünf Einheiten langen Strich und einer ein Einheiten langen Lücke. Im resultierenden Strich zeigt jede Instanz einer ein Einheiten langen Lücke zwischen zwei fünf Einheiten langen Strichen an, wo das Strichmuster erneut beginnt.

### Prozentuale und Pixelwerte

Dieses Beispiel zeigt die Verwendung von `<percentage>` und `<length>` Werten innerhalb des `stroke-dasharray` Eigenschaftswerts.

#### HTML

Wie im vorherigen Beispiel definieren wir zwei Rechtecke.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Diesmal verwenden wir anstelle von alleinstehenden Zahlen Pixel-Einheiten und Prozentsätze.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

#### Ergebnisse

{{EmbedLiveSample("Percentage and pixel values", "500", "500")}}

Die Ergebnisse sind im Wesentlichen nicht von den Ergebnissen im vorherigen Beispiel zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-dasharray")}} Attribut
