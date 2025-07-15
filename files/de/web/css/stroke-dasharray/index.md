---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`stroke-dasharray`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Muster aus Strichen und Lücken, das beim Zeichnen des Stils eines [SVG](/de/docs/Web/SVG) Elements verwendet wird. Ist sie vorhanden, überschreibt sie das {{SVGAttr("stroke-dasharray")}} Attribut des Elements.

Diese Eigenschaft gilt für jedes SVG-Form- oder Textelement (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und hat immer noch die beabsichtigte Wirkung auf die Striche der nachfolgenden Elemente.

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

Der Wert ist eine Liste von Komma- und/oder Leerzeichen getrennten `<number>`, `<length>` und / oder `<percentage>` Werten, die die Längen der abwechselnden Striche und Lücken spezifizieren, oder das Schlüsselwort `none`. Wenn eine ungerade Anzahl von Werten angegeben wird, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten einzustellen.

- `none`
  - : Der Strich wird ohne Unterbrechungen gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert wird. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>`, oben), und schriftbasierte Längen wie `em` werden relativ zum SVG-Wert des Elements für die Schriftgröße berechnet; die Effekte anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Ansichtsfensters, die berechnet wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Strichmuster

Dieses Beispiel zeigt die grundlegende Nutzung der `stroke-dasharray` Eigenschaft mit durch Leerzeichen getrennten `<number>` Werten.

#### HTML

Zuerst definieren wir eine einfache SVG-Rechteckform. Auf dieses Rechteck wird ein roter Strich mit einer Breite von `2` angewendet.

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

Wir definieren ein Strichmuster für den Strich: zehn Einheiten Strich, gefolgt von fünf Einheiten Raum. Dies bedeutet, dass die Lücken zwischen den Strichen halb so lang sind wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Wo der Strich eine Ecke macht, wird das Muster fortgesetzt. An der oberen linken Ecke, wo Anfang und Ende des Strichs aufeinandertreffen, scheint der zehn Einheiten lange Anfangsstrich mit dem Teil des Strichmusters am Ende des Pfades zu verschmelzen und eine Linie zu bilden, die länger als zehn Einheiten um die Ecke gebogen scheint.

### Wiederholung des Strichmusters

Dieses Beispiel beinhaltet eine ungerade Anzahl komma-getrennter `<number>` Werte, um zu demonstrieren, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten angegeben ist, um eine gerade Anzahl von Werten einzustellen.

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

Für das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, was fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich bedeutet. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird der gesamte Satz von Zahlen wiederholt, wodurch ein dem zweiten Rechteck identischer Wert entsteht.

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

Der Grund, warum eine gerade Anzahl an Zahlen erforderlich ist, besteht darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. So besteht das definierte Muster aus einem fünf Einheiten langen Strich, einer fünf Einheiten breiten Lücke, einem eine Einheit langen Strich, einer fünf Einheiten breiten Lücke, einem fünf Einheiten langen Strich und einer eine Einheit breiten Lücke. Im resultierenden Strich zeigt jede Instanz einer einheitlich breiten Lücke zwischen zwei fünf Einheiten langen Strichen einen Punkt an, an dem das Strichmuster neu beginnt.

### Prozent- und Pixelwerte

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

Dieses Mal verwenden wir statt bloßer Zahlen Pixel- und Prozentwerte.

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
