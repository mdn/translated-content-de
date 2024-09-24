---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{CSSRef}}

Die **`stroke-dasharray`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert ein Muster von Strichen und Lücken, das beim Zeichnen der Kontur einer [SVG](/de/docs/Web/SVG)-Form verwendet wird. Wenn vorhanden, überschreibt es das {{SVGAttr("stroke-dasharray")}}-Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhaltselement (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), aber als geerbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Konturen der Nachkommenelemente haben.

## Syntax

```css
/* Schlüsselwörter */
stroke-dasharray: none;

/* Numerische Werte, Längen- und Prozentangaben */
stroke-dasharray: 2px, 5px;
stroke-dasharray: 20%, 50%;
stroke-dasharray: 2, 5;

/* Die folgenden beiden Regeln sind gleichwertig */
stroke-dasharray: 2, 5, 3;
stroke-dasharray: 2, 5, 3, 2, 5, 3;

/* Globale Werte */
stroke-dasharray: inherit;
stroke-dasharray: initial;
stroke-dasharray: revert;
stroke-dasharray: revert-layer;
stroke-dasharray: unset;
```

### Werte

Der Wert ist eine Liste von Komma und/oder Leerzeichen getrennten `<number>`, `<length>` und/oder `<percentage>` Werten, die die Längen der abwechselnden Striche und Lücken angeben, oder das Schlüsselwort `none`. Werden eine ungerade Anzahl von Werten angegeben, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten festzulegen.

- `none`

  - : Der Strich wird ohne Striche gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden genauso behandelt wie SVG-Einheiten (siehe `<number>`, oben) und Schriftgrößenbasierte Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Textgröße berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Anzeigebereichs, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative Werte sind ungültig.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Strichmuster

Dieses Beispiel zeigt die grundlegende Verwendung der `stroke-dasharray`-Eigenschaft mit Leerzeichen getrennten `<number>` Werten.

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

Wir definieren ein Strichmuster für den Strich: zehn Einheiten Strich, gefolgt von fünf Einheiten Lücke. Dies bedeutet, dass die Lücken zwischen den Strichen halb so lang wie die Striche selbst sind.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Wo der Strich eine Ecke macht, wird das Muster mitgeführt, sozusagen. In der oberen linken Ecke, wo Anfang und Ende des Strichs aufeinander treffen, scheint der zehn Einheiten lange Startstrich mit dem Teil des Strichmusters zu verschmelzen, der am Ende des Pfades zu sehen ist, und schafft eine Linie, die länger als zehn Einheiten scheint und um die Ecke biegt.

### Wiederholung des Strichmusters

Dieses Beispiel enthält eine ungerade Anzahl von durch Komma getrennten `<number>` Werten, um zu zeigen, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten angegeben wird, um eine gerade Anzahl von Werten festzulegen.

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

Für das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, welches fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich vorschreibt. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird der gesamte Satz von Zahlen wiederholt und somit ein Wert identisch mit dem zweiten Rechteck erstellt.

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

Der Grund, warum eine gerade Anzahl von Zahlen erforderlich ist, liegt darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Das definierte Muster ist somit ein fünf Einheiten Strich, eine fünf Einheiten Lücke, ein ein Einheiten Strich, eine fünf Einheiten Lücke, ein fünf Einheiten Strich und eine ein Einheiten Lücke. Im resultierenden Strich zeigt jedes Auftreten einer ein Einheiten Lücke zwischen zwei fünf Einheiten Strichen eine Stelle an, an der das Strichmuster von vorne beginnt.

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

Dieses Mal verwenden wir anstelle von reinen Zahlen Pixel- und Prozentangaben.

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
