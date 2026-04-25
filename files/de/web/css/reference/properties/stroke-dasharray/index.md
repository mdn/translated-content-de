---
title: "`stroke-dasharray` CSS property"
short-title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`stroke-dasharray`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert ein Muster aus Strichen und Lücken, das beim Zeichnen des Strichs der [SVG](/de/docs/Web/SVG)-Form verwendet wird. Falls vorhanden, überschreibt es das {{SVGAttr("stroke-dasharray")}}-Attribut des Elements.

Diese Eigenschaft gilt für jedes SVG-Form- oder Textinhaltselement (siehe {{SVGAttr("stroke-dasharray")}} für eine vollständige Liste), aber als eine vererbte Eigenschaft kann sie auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den beabsichtigten Effekt auf die Striche der Nachkommenelemente.

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

Der Wert ist eine Liste von Komma- und/oder Leerzeichentrennten `<number>`, `<length>` und/oder `<percentage>`-Werten, die die Längen der abwechselnden Striche und Lücken angeben, oder das Schlüsselwort `none`. Wenn eine ungerade Anzahl von Werten angegeben wird, wird der gesamte Wert so wiederholt, dass eine gerade Anzahl von Werten entsteht.

- `none`
  - : Der Strich wird ohne irgendwelche Striche gezeichnet. Der Standardwert.

- {{cssxref("&lt;number&gt;")}}
  - : Eine Anzahl von SVG-Einheiten, deren Größe durch den aktuellen Einheitenraum definiert ist. Negative Werte sind ungültig.

- {{cssxref("&lt;length&gt;")}}
  - : Pixeleinheiten werden wie SVG-Einheiten behandelt (siehe `<number>` oben) und schriftbasierte Längen wie `em` werden in Bezug auf den SVG-Wert der Textgröße des Elements berechnet; die Auswirkungen anderer Längeneinheiten können vom Browser abhängen. Negative Werte sind ungültig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Strichmuster

Dieses Beispiel zeigt die grundlegende Verwendung der `stroke-dasharray`-Eigenschaft mit Leerzeichentrennten `<number>`-Werten.

#### HTML

Zuerst erstellen wir eine einfache SVG-Rechteckform. Zu diesem Rechteck wird ein roter Strich mit einer Breite von `2` angewendet.

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

Wir definieren ein Strichmuster für den Strich: zehn Einheiten Strich, gefolgt von fünf Einheiten Lücke. Das bedeutet, dass die Lücken zwischen den Strichen halb so lang sind wie die Striche selbst.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Wo der Strich eine Ecke macht, wird das Muster quasi fortgesetzt. An der oberen linken Ecke, wo Anfang und Ende des Strichs aufeinandertreffen, scheint der zehn Einheiten lange Startstrich sich mit dem am Ende des Pfades sichtbaren Teil des Strichmusters zu verbinden, was wie eine länger als zehn Einheiten lange Linie aussieht, die sich um die Ecke biegt.

### Wiederholung des Strichmusters

Dieses Beispiel enthält eine ungerade Anzahl komma-getrennter `<number>`-Werte und zeigt, wie der Wert wiederholt wird, wenn eine ungerade Anzahl von Werten angegeben wird, um eine gerade Anzahl von Werten zu erzeugen.

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

Für das erste Rechteck definieren wir ein Strichmuster von `5, 5, 1`, das fünf Einheiten Strich, fünf Einheiten Lücke und eine Einheit Strich vorsieht. Da dies jedoch eine ungerade Anzahl von Zahlen ist, wird das gesamte Zahlen-Set wiederholt und somit ein Wert geschaffen, der dem des zweiten Rechtecks entspricht.

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

Der Grund, warum eine gerade Anzahl von Zahlen erforderlich ist, liegt darin, dass jedes Strichmuster mit einem Strich beginnt und mit einer Lücke endet. So entsteht ein Muster, das einen Fünfeinheiten-Strich, eine Fünfeinheiten-Lücke, einen Einheitsstrich, eine Fünfeinheiten-Lücke, einen Fünfeinheiten-Strich und eine Einheitslücke definiert. Im resultierenden Strich kennzeichnet jede Instanz einer Einheitenlücke zwischen zwei Fünfeinheiten-Strichen eine Stelle, an der das Strichmuster neu beginnt.

### Prozent- und Pixelwerte

Dieses Beispiel zeigt die Verwendung von `<percentage>`- und `<length>`-Werten innerhalb des `stroke-dasharray`-Eigenschaftswertes.

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

Diesmal verwenden wir anstelle von Sammlungen nackter Zahlen Pixeleinheiten und Prozentsätze.

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
- SVG {{SVGAttr("stroke-dasharray")}}-Attribut
