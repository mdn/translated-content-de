---
title: "`font-size-adjust` CSS property"
short-title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu ändern, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen es zu einem Font-Ersatz kommen kann.

Die Lesbarkeit kann zum Problem werden, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatzschriftart einen signifikant unterschiedlichen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) aufweist. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen, um den Aspektwert zwischen den Schriftarten konsistent zu halten und sicherzustellen, dass der Text unabhängig von der verwendeten Schriftart ähnlich aussieht.

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

Die Eigenschaft `font-size-adjust` nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung an den `font-size`-Wert für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Gibt das erste bevorzugte Schriftmetrik an, das verwendet werden soll, um die Schriftgröße der Ersatzschriftart anzupassen. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben zwischen Schriftarten zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Großbuchstabenhöhe zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben zwischen Schriftarten zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Breite (horizontaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale enge Teilung von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Breite des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale weite Teilung von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Höhe (vertikaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale weite Teilung von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße an, abhängig von der angegebenen `<font-metric>`. Wenn kein `<font-metric>` angegeben ist (wobei der Standardwert `ex-height` verwendet wird), passt der `<number>`-Wert die Schriftgröße der Ersatzschrift so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Das bedeutet, dass die bevorzugte Schriftart, wenn sie verfügbar ist, in allen Browsern konsistent angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben wird, passt der `<number>`-Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriftarten hinweg zu bewahren.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt einen Text von null Höhe (d.h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn die angegebene `<font-metric>` in {{cssxref("@font-face")}} überschrieben wurde, z. B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust)-Deskriptors, dann wird die überschreibene Metrik in der `font-size-adjust`-Berechnung verwendet. Dies bedeutet, dass, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird anhand der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust`-Wert wurde mit `cap-height 0.20` angegeben. Wenn die bevorzugte Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der bevorzugten Schrift bei der Darstellung ähnelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße anhand von Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text bei kleinen Schriftgrößen besser lesbar. Die Times-Schrift hingegen hat einen niedrigeren Aspektwert von `0.447`, was den Text bei kleinen Größen weniger lesbar macht. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschriftart, kann die Angabe der `font-size-adjust`-Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schrift auf Times zurückfällt, behält der Text ein ähnliches Niveau an Lesbarkeit wie bei Verdana.

Ähnlich ist das Verhältnis von `cap-height` zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um die Großbuchstaben an das Verhältnis in Verdana anzupassen, zeigt die Times-Schrift eine angepasste Schriftgröße von ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße anhand von Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift zu einer spürbaren Verringerung der Lesbarkeit aufgrund ihres niedrigeren Aspektwerts führen.
In `C` ist zu beachten, dass für die `font-size-adjust`-Eigenschaft nur ein Wert angegeben ist, sodass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst ist.

### Bestimmen des Aspektwerts einer Schrift

Für eine gegebene Schrift können zwei nebeneinanderliegende [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elemente mit demselben Inhalt verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn für den Inhalt in beiden Spans dieselbe Schriftgröße verwendet wird, passen die Spans zusammen, wenn der `font-size-adjust`-Wert in einem Span für die entsprechende Schrift korrekt ist.

Im folgenden Beispiel gibt es drei Paare nebeneinanderliegender `<span>`-Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, den `font-size-adjust`-Wert für den rechten `<span>` in jedem Paar so lange anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schrift angesehen werden.

Ausgehend von `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir den `font-size-adjust`-Eigenschaftswert weiter an, bis die Ränder um die "b"-Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmen des Aspektwerts einer Schrift', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
