---
title: "`font-size-adjust` CSS property"
short-title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-size-adjust`** passt die Größe einer Schriftart an, um sie an eine ausgewählte Schriftmetrik anzupassen, beispielsweise die Höhe von Kleinbuchstaben, in einem angegebenen Verhältnis zur {{cssxref("font-size")}}. Diese Eigenschaft dient dazu, Fallback-Schriftarten so anzupassen, dass sie ähnliche Metriken wie die Schriftart erster Wahl aufweisen.

Die Lesbarkeit kann beeinträchtigt werden, wenn die {{ Cssxref("font-family") }} erster Wahl nicht verfügbar ist und ihre ersetzende Fallback-Schriftart einen deutlich anderen Aspektwert aufweist (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird stärker durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist nützlich, um die Schriftgröße von Fallback-Schriftarten anzupassen und den Aspektwert über verschiedene Schriftarten hinweg konsistent zu halten. Dadurch wird sichergestellt, dass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

## Syntax

```css
/* Keyword value */
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

Diese Eigenschaft wird als Schlüsselwort `none` oder mit einem (`<number>` oder `from-font`) bzw. zwei Werten (`<font-metric>` und entweder `<number>` oder `from-font`) angegeben.

- `none`
  - : Es wird keine Anpassung der Schriftgröße vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Definiert die Schriftmetrik, die zur Anpassung der Schriftgröße verwendet wird. Standardmäßig wird `ex-height` verwendet; dieser Parameter wird als eines der folgenden Schlüsselwörter angegeben:
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens „x“ in einer Schriftart) zur Schriftgröße (Aspektwert), um die Schriftgröße anzupassen. Dieser Schlüsselwortwert dient zur Normalisierung von Kleinbuchstaben über verschiedene Schriftarten hinweg.
    - `cap-height`
      - : Verwendet das Verhältnis der Versalhöhe (Höhe von Großbuchstaben) zur Schriftgröße, um die Schriftgröße anzupassen. Dieser Schlüsselwortwert dient zur Normalisierung von Großbuchstaben über verschiedene Schriftarten hinweg.
    - `ch-width`
      - : Verwendet das Verhältnis der Laufweite (horizontaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens „0“ (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert dient zur Normalisierung der horizontalen schmalen Schriftbreite von Schriftarten.
    - `ic-width`
      - : Verwendet das Verhältnis der Laufweite des Zeichens „水“ (CJK-Ideogramm für Wasser, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert dient zur Normalisierung der horizontalen breiten Schriftbreite von Schriftarten, insbesondere von solchen, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Laufhöhe (vertikaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens „水“ (CJK-Ideogramm für Wasser, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert dient zur Normalisierung der vertikalen breiten Schriftbreite von Schriftarten, insbesondere von solchen, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Das Verhältnis, mit dem die verwendete Schriftgröße abhängig von `<font-metric>` angepasst wird.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße entsprechend der ausgewählten `<font-metric>` an, um für die angegebene Schriftmetrik über verschiedene Schriftarten hinweg ein einheitliches Erscheinungsbild beizubehalten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` erzeugt Text mit einer Höhe von null (das heißt, der Text wird ausgeblendet). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Die Eigenschaft `font-size-adjust` passt die Größe einer Schriftart an, um sie an eine ausgewählte Schriftmetrik anzupassen, beispielsweise die Höhe von Kleinbuchstaben, in einem angegebenen Verhältnis zur {{cssxref("font-size")}}. Die Anpassung wird auf jede zum Rendern von Text verwendete Schriftart angewendet, nicht nur auf Fallback-Schriftarten.

Das Festlegen eines `<number>` passt die Schriftgröße anhand der standardmäßigen oder angegebenen `<font-metric>` an. Wenn beispielsweise `ex-height` festgelegt ist, passt der `<number>`-Wert die ausgewählte Schriftgröße so an, dass die Höhe ihres `x`-Glyphen dem angegebenen Vielfachen der Schriftgröße entspricht. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zu Schriftgröße) der Schriftart erster Wahl entsprechen. Das bedeutet, dass die Schriftart erster Wahl, sofern sie verfügbar ist, browserübergreifend konsistent angezeigt wird. Die Auswahl eines anderen Werts skaliert ebenfalls die Schriftart erster Wahl; in diesem Fall sollten Sie jedoch stattdessen bevorzugt die {{cssxref("font-size")}} ändern.

> [!NOTE]
> Wenn die angegebene `<font-metric>` in {{cssxref("@font-face")}} überschrieben wurde, beispielsweise durch Verwendung des Deskriptors [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust), wird die überschriebene Metrik bei der Berechnung von `font-size-adjust` verwendet. Das bedeutet, dass `size-adjust` keine Auswirkung hat, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden.

> [!NOTE]
> Schriftmetriken wie x-Höhe und Versalhöhe können zwischen Schriftschnitten (etwa fetten oder kursiven Varianten) innerhalb derselben {{cssxref("font-family")}} variieren. Wenn `font-size-adjust` `from-font` oder einen festen Wert verwendet, werden die Metriken jedes Schriftschnitts unabhängig angepasst, ungeachtet der relativen Unterschiede zwischen Schriftschnitten derselben Schriftfamilie.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das gewünschte Verhältnis ist, das durch `<number>` angegeben oder mithilfe von `from-font` ermittelt wird.
- `m′` das Verhältnis der ausgewählten Metrik zur Schriftgröße in der anzupassenden Schriftart ist.
- `s` der Wert der Eigenschaft `font-size` ist.
- `u` die neue, angepasste Schriftgröße ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine Schriftart erster Wahl hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Fallback-Schriftart beträgt `0.15` (`m′`). Der Wert für `font-size-adjust` wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Fallback-Schriftart mit `16px` (`(0.20 / 0.15) * 12`) berechnet. Dadurch wird sichergestellt, dass die `cap-height` der Fallback-Schriftart bei der Anzeige derjenigen der Schriftart erster Wahl ähnelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße anhand von Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die Eigenschaft `font-size-adjust` verwendet werden kann, um denselben Aspektwert über verschiedene Schriftarten hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu Großbuchstaben relativ hoch sind. Dadurch erscheint der Text bei kleinen Schriftgrößen gut lesbar. Die Schriftart Times hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger gut lesbar ist. Wenn Verdana die Schriftart erster Wahl und Times die Fallback-Schriftart ist, kann die Angabe der Eigenschaft `font-size-adjust` dazu beitragen, denselben Aspektwert in Times beizubehalten. Wenn auf Times zurückgegriffen wird, behält der Text daher ein ähnliches Maß an Lesbarkeit bei wie mit Verdana.

Ebenso beträgt das Verhältnis von Versalhöhe zu Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die Eigenschaft `font-size-adjust` auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Schriftart Times mit der angepassten Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

{{ EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Schriftart Verdana zur Schriftart Times aufgrund ihres niedrigeren Aspektwerts zu einer merklichen Verringerung der Lesbarkeit führen.
Beachten Sie bei `C`, dass für die Eigenschaft `font-size-adjust` nur ein Wert angegeben ist, sodass der standardmäßige `<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Ermitteln des Aspektwerts einer Schriftart

Für eine bestimmte Schriftart kann derselbe Inhalt in zwei nebeneinanderliegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn für den Inhalt in beiden Spans dieselbe Schriftgröße verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die angegebene Schriftart korrekt ist.

Im folgenden Beispiel gibt es drei Paare nebeneinanderliegender `<span>`-Elemente, die jeweils den Buchstaben „b“ enthalten. Das Ziel besteht darin, die Eigenschaft `font-size-adjust` für das rechte `<span>` in jedem Paar anzupassen, bis die Rahmen um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust`-Wert kann als Aspektwert der Schriftart betrachtet werden.

Wir beginnen beim ersten Paar mit `0.6` und passen den Wert im zweiten Paar auf `0.5` an. Anschließend passen wir den Wert der Eigenschaft `font-size-adjust` weiter an, bis die Rahmen um die Buchstaben „b“ im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert mit `0.482` bestimmt.

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

{{ EmbedLiveSample('Determining the aspect value of a font', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- `@font-face`-Deskriptor {{cssxref("@font-face/size-adjust", "size-adjust")}}
- SVG-Attribut {{SVGAttr("font-size-adjust")}}
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
