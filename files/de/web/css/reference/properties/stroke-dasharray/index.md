---
title: "`stroke-dasharray` CSS property"
short-title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
l10n:
  sourceCommit: cdbd60eab97b1958837806b059a920f6da2f4e78
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`stroke-dasharray`** definiert ein Muster aus Strichen und Lücken, das beim Zeichnen der Kontur einer [SVG](/de/docs/Web/SVG)-Form verwendet wird. Ist die Eigenschaft vorhanden, überschreibt sie das Attribut {{SVGAttr("stroke-dasharray")}} des Elements.

Diese Eigenschaft gilt für alle SVG-Formen und Textinhaltselemente (eine vollständige Liste finden Sie unter {{SVGAttr("stroke-dasharray")}}). Da sie vererbt wird, kann sie auch auf Elemente wie {{SVGElement("g")}} angewendet werden und wirkt sich dann wie vorgesehen auf die Konturen der untergeordneten Elemente aus.

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

Der Wert ist entweder das Schlüsselwort `none` oder eine durch Kommas und/oder Leerraum getrennte Liste von `<number>`-, `<length>`- und/oder `<percentage>`-Werten, die die Längen abwechselnder Striche und Lücken festlegen. Wenn eine ungerade Anzahl von Werten angegeben wird, wird die gesamte Werteliste wiederholt, sodass eine gerade Anzahl von Werten entsteht.

- `none`
  - : Die Kontur wird ohne Striche gezeichnet. Dies ist der Standardwert.

- {{cssxref("&lt;number&gt;")}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum bestimmt wird. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden wie SVG-Einheiten behandelt (siehe [`<number>`](#number)). Schriftbasierte Längen wie `em` werden anhand des SVG-Werts des Elements für die Textgröße berechnet. Die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentwerte beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports. Sie wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Strichmuster

Dieses Beispiel zeigt die grundlegende Verwendung der Eigenschaft `stroke-dasharray` mit durch Leerzeichen getrennten `<number>`-Werten.

#### HTML

Zunächst erstellen wir ein einfaches SVG-Rechteck. Das Rechteck erhält eine rote Kontur mit der Breite `2`.

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

Wir definieren ein Strichmuster für die Kontur: auf zehn Einheiten Strich folgen fünf Einheiten Lücke. Die Lücken zwischen den Strichen sind damit halb so lang wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic dash array", "500", "250")}}

An den Ecken setzt sich das Muster entlang der Kontur fort. An der oberen linken Ecke, wo Anfang und Ende der Kontur aufeinandertreffen, scheint der zehn Einheiten lange erste Strich mit dem letzten Teil des Musters verbunden zu sein. Dadurch entsteht der Eindruck einer Linie, die länger als zehn Einheiten ist und um die Ecke verläuft.

### Wiederholung des Strichmusters

Dieses Beispiel verwendet eine ungerade Anzahl kommagetrennter `<number>`-Werte. Es zeigt, wie die Werteliste wiederholt wird, um eine gerade Anzahl von Werten zu erhalten.

#### HTML

Hier definieren wir zwei Rechtecke.

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

Für das erste Rechteck definieren wir ein Strichmuster mit `5, 5, 1`: fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich. Da die Liste eine ungerade Anzahl von Werten enthält, wird sie vollständig wiederholt. So entsteht derselbe Wert, der auf das zweite Rechteck angewendet wird.

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

Eine gerade Anzahl von Werten ist erforderlich, damit jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Das definierte Muster besteht somit aus einem Strich von fünf Einheiten, einer Lücke von fünf Einheiten, einem Strich von einer Einheit, einer Lücke von fünf Einheiten, einem Strich von fünf Einheiten und einer Lücke von einer Einheit. In der gezeichneten Kontur kennzeichnet jede Lücke von einer Einheit zwischen zwei Strichen von fünf Einheiten die Stelle, an der das Strichmuster von vorn beginnt.

### Prozent- und Pixelwerte

Dieses Beispiel zeigt die Verwendung von `<percentage>`- und `<length>`-Werten für die Eigenschaft `stroke-dasharray`.

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

Diesmal verwenden wir statt reiner Zahlenwerte Pixeleinheiten und Prozentwerte.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

#### Ergebnis

{{EmbedLiveSample("Percentage and pixel values", "500", "500")}}

Die Ergebnisse sind von denen des vorherigen Beispiels praktisch nicht zu unterscheiden.

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
