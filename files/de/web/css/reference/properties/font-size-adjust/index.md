---
title: "`font-size-adjust` CSS property"
short-title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 032208d4eb693c082d62e570f80ed5542325bbb6
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft passt die Größe einer Schriftart an, um sie an eine gewählte Schriftmetrik, wie die Höhe der Kleinbuchstaben, in einem spezifizierten Verhältnis zur {{cssxref("font-size")}} anzupassen. Diese Eigenschaft ist dazu gedacht, Fallback-Schriftarten so anzupassen, dass sie ähnliche Metriken wie die bevorzugte Schriftart aufweisen.

Die Lesbarkeit kann ein Problem werden, wenn die bevorzugte {{Cssxref("font-family")}} nicht verfügbar ist und die Fallback-Schriftart einen erheblich anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Fallback-Schriften anzupassen, um den Aspektwert über Schriften hinweg konsistent zu halten und sicherzustellen, dass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

## Syntax

```css
/* Keyword */
font-size-adjust: none;

/* One value: <number> or from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* Two values */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;

/* Global values */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

### Werte

Diese Eigenschaft kann als Schlüsselwort `none` angegeben werden oder als ein (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte.

- `none`
  - : Es wird keine Anpassung der Schriftgröße vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Definiert die Schriftmetrik, die zur Anpassung der Schriftgröße verwendet werden soll. Standardmäßig wird `ex-height` verwendet. Diese Metrik wird als eines der folgenden Schlüsselwörter angegeben:
    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Schriftgröße anzupassen. Dieses Schlüsselwort normalisiert Kleinbuchstaben über Schriften hinweg.
    - `cap-height`
      - : Verwendet das Verhältnis von Kapitälchen-Höhe (Höhe von Großbuchstaben) zur Schriftgröße, um die Schriftgröße anzupassen. Dieses Schlüsselwort normalisiert Großbuchstaben über Schriften hinweg.
    - `ch-width`
      - : Verwendet das Verhältnis der Zeichenbreite (horizontaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (Null, U+0030) zur Schriftgröße. Dieses Schlüsselwort normalisiert den horizontal schmalen Schritt von Schriften.
    - `ic-width`
      - : Verwendet das Verhältnis der Zeichenbreite des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieses Schlüsselwort normalisiert den horizontal weiten Schritt von Schriften, insbesondere solchen, die CJK (Chinesische, Japanische, Koreanische) Zeichen enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Zeichenhöhe (vertikaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieses Schlüsselwort normalisiert den vertikalen weiten Schritt von Schriften, insbesondere solchen, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Das Verhältnis zur Anpassung der verwendeten Schriftgröße, abhängig von der angegebenen `<font-metric>`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um eine konsistente Erscheinung für die angegebene Schriftmetrik über verschiedene Schriften hinweg zu gewährleisten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` liefert Text von null Höhe (d.h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schrift.

## Beschreibung

Die `font-size-adjust` Eigenschaft passt die Größe einer Schrift an, um sie an eine gewählte Schriftmetrik, wie die Höhe der Kleinbuchstaben, in einem spezifizierten Verhältnis zur {{cssxref("font-size")}} anzupassen. Die Anpassung wird auf jede Schrift angewendet, die zum Rendern von Text verwendet wird, nicht nur auf Fallback-Schriften.

Das Setzen eines `<number>` passt die Schriftgröße basierend auf der Standard- oder angegebenen `<font-metric>` an. Wenn zum Beispiel `ex-height` gesetzt ist, passt der `<number>`-Wert die ausgewählte Schriftgröße so an, dass die Höhe ihres `x`-Glyphen das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Das bedeutet, dass die bevorzugte Schrift, wenn verfügbar, über Browser hinweg konsistent angezeigt wird. Das Auswählen eines anderen Wertes skaliert auch die bevorzugte Schrift, aber in diesem Fall sollten Sie es bevorzugen, die {{cssxref("font-size")}} zu ändern.

> [!NOTE]
> Wenn die angegebene `<font-metric>` in {{cssxref("@font-face")}} überschrieben wurde, zum Beispiel durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust)-Descriptors, wird die überschreibende Metrik in die `font-size-adjust` Berechnung einbezogen. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

> [!NOTE]
> Schriftmetriken wie x-Höhe und Kapitälchen-Höhe können zwischen Schriftschnitten (wie fett oder kursiv) innerhalb derselben {{cssxref("font-family")}} variieren. Wenn `font-size-adjust` `from-font` oder einen festen Wert verwendet, werden die Metriken jedes Schriftschnitts unabhängig angepasst, unabhängig von den relativen Unterschieden zwischen den Schriftschnitten in derselben Schriftfamilie.

Die angepasste Schriftgröße wird nach der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das gewünschte Verhältnis ist, das durch `<number>` angegeben oder durch `from-font` erhalten wird.
- `m′` das Verhältnis der gewählten Metrik zur Schriftgröße in der anzupassenden Schriftart ist.
- `s` der Wert der `font-size` Eigenschaft ist.
- `u` die neue, angepasste Schriftgröße ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis der `cap-height` zur Schriftgröße beträgt `0,20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Ersatz-Schrift ist `0,15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatz-Schrift auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies gewährleistet, dass die `cap-height` der Ersatz-Schrift der der bevorzugten Schrift ähnlich ist, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße nach Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um denselben Aspektwert über Schriften hinweg beizubehalten. Die Schrift Verdana hat einen relativ hohen Aspektwert von `0,545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text in kleinen Schriftgrößen lesbar. Die Schrift Times hingegen hat einen niedrigeren Aspektwert von `0,447`, wodurch der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift und Times die Ersatzschrift ist, kann durch Angeben der `font-size-adjust` Eigenschaft der gleiche Aspektwert in Times beibehalten werden. Wenn die Schrift also auf Times zurückfällt, bleibt der Text auf einem ähnlichen Lesbarkeitsniveau, wie es bei Verdana der Fall wäre.

Ähnlich ist das Verhältnis der Kapitälchen-Höhe zur Schriftgröße in Verdana `0,73` und in Times `0,66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um deren Großbuchstaben an das Verhältnis in Verdana anzupassen, zeigt die Times-Schrift bei angepasster Schriftgröße (`(0.73 / 0.66) * 14`) `15,48px`.

```html
<p class="verdana">
  A: This text uses the Verdana font (14px), which has relatively large
  lowercase letters.
</p>
<p class="times">
  B: This text uses the Times font (14px), which is hard to read in small sizes.
</p>
<p class="times adj-times-ex-height">
  C: This text in 14px Times font is adjusted to the same aspect value as the
  Verdana font, so lowercase letters are normalized across the two fonts.
</p>
<p class="times adj-times-cap-height">
  D: This text in 14px Times font is adjusted to the same cap-height to font
  size ratio as the Verdana font, so uppercase letters are normalized across the
  two fonts.
</p>
```

```css
.times {
  font-family: "Times", serif;
  font-size: 14px;
}

.verdana {
  font-family: "Verdana", sans-serif;
  font-size: 14px;
}

.adj-times-ex-height {
  font-size-adjust: 0.545;
}

.adj-times-cap-height {
  font-size-adjust: cap-height 0.73;
}
```

{{ EmbedLiveSample('Normalisierung der Schriftgröße nach Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana Schrift zur Times Schrift zu einem bemerkbaren Rückgang der Lesbarkeit führen, aufgrund ihres niedrigeren Aspektwerts. In `C`, bemerken Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standard `<font-metric>` Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn die Höhe der Großbuchstaben angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine bestimmte Schrift können dieselben Inhalte in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Spannen verwendet wird, stimmen die Spannen überein, wenn der `font-size-adjust` Wert in einer Spanne für die gegebene Schrift korrekt ist.

Im untenstehenden Beispiel befinden sich drei Paare von nebeneinander liegenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als Aspektwert der Schrift angesehen werden.

Beginnend bei `0,6` im ersten Paar und Anpassung auf `0,5` im zweiten, passen wir den Wert der `font-size-adjust` Eigenschaft so lange an, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0,482` bestimmt.

```html
<div>
  <p><span>b</span><span class="adjust1">b</span></p>
  0.6
</div>

<div>
  <p><span>b</span><span class="adjust2">b</span></p>
  0.5
</div>

<div>
  <p><span>b</span><span class="adjust3">b</span></p>
  0.482
</div>
```

```css hidden
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  margin: 0 30px 10px 30px;
}
```

```css
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  font-family: "Futura", sans-serif;
  font-size: 50px;
}

span {
  border: solid 1px red;
}

.adjust1 {
  font-size-adjust: 0.6;
}

.adjust2 {
  font-size-adjust: 0.5;
}

.adjust3 {
  font-size-adjust: 0.482;
}
```

{{ EmbedLiveSample('Bestimmung des Aspektwerts einer Schrift', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlagen der Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
