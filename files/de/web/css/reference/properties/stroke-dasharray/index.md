---
title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`stroke-dasharray`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Muster von Strichen und Lücken, das beim Malen des Strichs einer [SVG](/de/docs/Web/SVG) Form verwendet wird. Falls vorhanden, überschreibt sie das {{SVGAttr("stroke-dasharray")}} Attribut des Elements.

Diese Eigenschaft trifft auf jede SVG-Form oder jedem textinhaltlichen Element zu (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), aber als vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und wirkt sich dennoch auf die Striche der Nachkommenelemente aus.

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

Der Wert ist eine Liste von durch Kommas und/oder Leerzeichen getrennten `<number>`, `<length>` und/oder `<percentage>` Werten, die die Längen abwechselnder Striche und Lücken oder das Schlüsselwort `none` spezifizieren. Wenn eine ungerade Anzahl von Werten angegeben wird, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten festzulegen.

- `none`
  - : Der Strich wird ohne Striche gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden genauso gehandhabt wie SVG-Einheiten (siehe `<number>`, oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Anzeigeports, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Strichmuster

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-dasharray` Eigenschaft mit Leerzeichen getrennten `<number>` Werten.

#### HTML

Zuerst richten wir eine grundlegende SVG-Rechteckform ein. Für dieses Rechteck wird ein roter Strich mit einer Breite von `2` angewendet.

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

Wir definieren ein Strichmuster für den Strich: zehn Einheiten des Strichs, gefolgt von fünf Einheiten des Raums. Das bedeutet, dass die Lücken zwischen den Strichen halb so lang sind wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Wo der Strich eine Ecke dreht, wird das Muster sozusagen mitgeführt. An der oberen linken Ecke, wo der Anfang und das Ende des Strichs aufeinandertreffen, scheint der zehn Einheiten lange Anfangsstrich mit dem Teil des am Ende des Pfades sichtbaren Strichmusters zu verschmelzen und erzeugt somit eine Linie, die länger als zehn Einheiten erscheint und um die Ecke biegt.

### Wiederholung des Strichmusters

Dieses Beispiel umfasst eine ungerade Anzahl durch Kommas getrennte `<number>` Werte, um zu demonstrieren, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten gegeben ist, um eine gerade Anzahl von Werten festzulegen.

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

Für das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, das fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich erfordert. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird die gesamte Zahlenmenge wiederholt, wodurch ein Wert entsteht, der dem im zweiten Rechteck angewendeten entspricht.

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

Der Grund, warum eine gerade Anzahl von Zahlen erforderlich ist, liegt darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Somit ist das definierte Muster ein fünf Einheiten langer Strich, eine fünf Einheiten lange Lücke, ein ein Einheiten langer Strich, eine fünf Einheiten lange Lücke, ein fünf Einheiten langer Strich und eine ein Einheiten lange Lücke. Dabei zeigt jede ein Einheiten lange Lücke zwischen zwei fünf Einheiten langen Strichen an, wo das Strichmuster von vorn beginnt.

### Prozent- und Pixelwerte

Dieses Beispiel demonstriert die Verwendung von `<percentage>` und `<length>` Werten innerhalb des `stroke-dasharray` Eigenschaftswertes.

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

In diesem Fall verwenden wir anstelle von bloßen Zahlen Pixel- und Prozentwerte.

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

Die Ergebnisse sind im Wesentlichen nicht zu unterscheiden von den Ergebnissen im vorherigen Beispiel.

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
