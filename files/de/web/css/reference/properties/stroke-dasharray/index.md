---
title: "`stroke-dasharray` CSS property"
short-title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-dasharray`** definiert ein Muster aus Strichen und Lücken, das beim Zeichnen der Kontur einer [SVG](/de/docs/Web/SVG)-Form verwendet wird. Falls vorhanden, überschreibt sie das Attribut {{SVGAttr("stroke-dasharray")}} des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder jedes Element mit Textinhalt (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-dasharray")}}), kann aber als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und dennoch die beabsichtigte Wirkung auf die Konturen von Nachkommenelementen haben.

## Syntax

```css
/* Keyword value */
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

Der Wert ist eine durch Kommas und/oder Leerzeichen getrennte Liste von `<number>`-, `<length>`- und/oder `<percentage>`-Werten, die die Längen abwechselnder Striche und Lücken angeben, oder das Schlüsselwort `none`. Wenn eine ungerade Anzahl von Werten angegeben wird, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten festzulegen.

- `none`
  - : Die Kontur wird ohne Striche gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso wie SVG-Einheiten behandelt (siehe `<number>` oben), und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert des Elements für die Textgröße berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Strichmuster

Dieses Beispiel demonstriert die grundlegende Verwendung der Eigenschaft `stroke-dasharray` mit durch Leerzeichen getrennten `<number>`-Werten.

#### HTML

Zunächst richten wir eine einfache SVG-Rechteckform ein. Auf dieses Rechteck wird eine rote Kontur mit einer Breite von `2` angewendet.

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

Wir definieren ein Strichmuster für die Kontur: zehn Einheiten Strich, gefolgt von fünf Einheiten Abstand. Das bedeutet, dass die Lücken zwischen den Strichen halb so lang sind wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

An Stellen, an denen die Kontur um eine Ecke verläuft, wird das Muster gewissermaßen weitergeführt. An der oberen linken Ecke, an der Anfang und Ende der Kontur zusammentreffen, scheint der zehn Einheiten lange Anfangsstrich mit dem am Ende des Pfads sichtbaren Teil des Strichmusters verbunden zu sein. Dadurch entsteht der Eindruck einer mehr als zehn Einheiten langen Linie, die um die Ecke verläuft.

### Wiederholung des Strichmusters

Dieses Beispiel enthält eine ungerade Anzahl kommagetrennter `<number>`-Werte und demonstriert, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten angegeben ist, um eine gerade Anzahl von Werten festzulegen.

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

Für das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, das fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich vorsieht. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird die gesamte Zahlenfolge wiederholt, wodurch ein Wert entsteht, der mit dem auf das zweite Rechteck angewendeten Wert identisch ist.

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

Eine gerade Anzahl von Zahlen ist erforderlich, damit jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Das definierte Muster besteht daher aus einem fünf Einheiten langen Strich, einer fünf Einheiten langen Lücke, einem ein Einheiten langen Strich, einer fünf Einheiten langen Lücke, einem fünf Einheiten langen Strich und einer ein Einheiten langen Lücke. In der resultierenden Kontur zeigt jedes Auftreten einer ein Einheiten langen Lücke zwischen zwei fünf Einheiten langen Strichen eine Stelle an, an der das Strichmuster von vorn beginnt.

### Prozent- und Pixelwerte

Dieses Beispiel demonstriert die Verwendung von `<percentage>`- und `<length>`-Werten im Wert der Eigenschaft `stroke-dasharray`.

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

Dieses Mal verwenden wir statt Sammlungen einfacher Zahlen Pixeleinheiten und Prozentwerte.

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

Die Ergebnisse sind im Wesentlichen nicht von den Ergebnissen des vorherigen Beispiels zu unterscheiden.

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
- SVG-Attribut {{SVGAttr("stroke-dasharray")}}
