---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`stroke-dasharray`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Muster von Strichen und Lücken, das beim Malen des Streichens der [SVG](/de/docs/Web/SVG)-Form verwendet wird. Falls vorhanden, überschreibt es das {{SVGAttr("stroke-dasharray")}} Attribut des Elements.

Diese Eigenschaft gilt für jede SVG-Form oder Textinhalt-Element (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch die beabsichtigte Wirkung auf die Striche der Nachkommenelemente.

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

Der Wert ist eine Liste von Komma- und/oder Leerzeichen-getrennten `<number>`, `<length>` und/oder `<percentage>` Werten, die die Längen von abwechselnden Strichen und Lücken spezifizieren, oder das Schlüsselwort `none`. Sind eine ungerade Anzahl von Werten angegeben, wird der gesamte Wert wiederholt, um eine gerade Anzahl von Werten festzulegen.

- `none`

  - : Der Strich wird ohne Striche gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}

  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}

  - : Pixeleinheiten werden wie SVG-Einheiten behandelt (siehe `<number>`, oben) und auf Schrift basierende Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}

  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Ansichtsfensters, welche berechnet wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Strichmuster

Dieses Beispiel demonstriert die grundlegende Verwendung der `stroke-dasharray` Eigenschaft mit platzgetrennten `<number>` Werten.

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

Wir definieren ein Strichmuster für den Strich: zehn Einheiten Strich, gefolgt von fünf Einheiten Lücke. Dies bedeutet, dass die Lücken zwischen den Strichen halb so lang sind wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Dort, wo der Strich eine Ecke bildet, wird das Muster fortgeführt. In der oberen linken Ecke, wo Anfang und Ende des Strichs aufeinandertreffen, scheint der zehn Einheiten lange Anfangsstrich sich mit dem Teil des Strichmusters am Ende des Pfades zu verbinden, wodurch ein länger erscheinender Strich um die Ecke entsteht.

### Wiederholung des Strichmusters

Dieses Beispiel enthält eine ungerade Anzahl von komma-getrennten `<number>` Werten, um zu demonstrieren, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten vorliegt, um eine gerade Anzahl von Werten festzulegen.

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

Auf das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, was fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich bedeutet. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird der gesamte Satz von Zahlen wiederholt, wodurch ein Wert entsteht, der identisch zu dem des zweiten Rechtecks ist.

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

Der Grund, warum eine gerade Anzahl von Zahlen erforderlich ist, besteht darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. Somit ist das definierte Muster ein fünf Einheiten langer Strich, eine fünf Einheiten lange Lücke, ein ein Einheiten langer Strich, eine fünf Einheiten lange Lücke, ein fünf Einheiten langer Strich und eine ein Einheiten lange Lücke. Im resultierenden Strich zeigt jede Instanz einer ein Einheiten langen Lücke zwischen zwei fünf Einheiten langen Strichen eine Stelle, an der das Strichmuster neu beginnt.

### Prozent- und Pixelwerte

Dieses Beispiel zeigt die Verwendung von `<percentage>` und `<length>` Werten innerhalb des `stroke-dasharray` Eigenschaftswertes.

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

Diesmal verwenden wir anstelle von Sammlungen von Zahlen Pixeleinheiten und Prozentsätze.

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

Die Ergebnisse unterscheiden sich im Wesentlichen nicht von den Ergebnissen im vorherigen Beispiel.

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
