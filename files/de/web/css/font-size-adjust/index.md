---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zu der von Großbuchstaben zu ändern, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftarten-Fallback auftreten kann.

Die Lesbarkeit kann zum Problem werden, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird eher durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust`-Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen und den Aspektwert zwischen den Schriften konsistent zu halten, damit der Text unabhängig von der verwendeten Schrift ähnlich aussieht.

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

Die `font-size-adjust`-Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung des `font-size`-Werts für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Gibt das bevorzugte Schriftmetrik an, das zur Anpassung der Schriftgröße der Ersatzschriftart verwendet wird. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es handelt sich um einen optionalen Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert) um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Kappenhöhe (Höhe der Großbuchstaben) zur Schriftgröße zur Anpassung der Ersatzschriftgröße. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorlaufbreite (horizontaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale schmale Tonhöhe von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorlaufbreite des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale breite Tonhöhe von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorlaufhöhe (vertikaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale breite Tonhöhe von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße je nach angegebenem `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (wobei der Standardwert `ex-height` verwendet wird), passt der `<number>`-Wert die Schriftgröße der Ersatzschrift an, sodass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zu Schriftgröße) der bevorzugten Schriftart entsprechen. Das bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, in allen Browsern konsistent angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriften hinweg zu gewährleisten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` führt zu Text mit einer Höhe von Null (d.h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für die angegebene `<font-metric>` von der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust)-Descriptors, wird die überschrieben Metrik in der Berechnung von `font-size-adjust` verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keinen Effekt hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis der `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height`-zu-Schriftgröße-Verhältnis in der Ersatzschrift ist `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die Hauptschrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift `16px` sein (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der bevorzugten Schrift ähnelt, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriften hinweg beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben relativ hoch im Vergleich zu Großbuchstaben sind. Dies lässt den Text in kleinen Schriftgrößen gut lesbar erscheinen. Die Times-Schrift hingegen hat einen niedrigeren Aspektwert von `0.447`, was dazu führt, dass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift ist und Times die Ersatzschrift, kann die Angabe der `font-size-adjust`-Eigenschaft helfen, denselben Aspektwert in Times beizubehalten. So wird der Text, wenn die Schrift zu Times als Fallback fällt, ein ähnliches Lesbarkeitsniveau beibehalten, als wäre es mit Verdana.

Ähnlich ist das Verhältnis der Cap-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um die Großbuchstaben so anzupassen, dass sie das Verhältnis in Verdana erreichen, wird die Times-Schrift in einer angepassten Schriftgröße angezeigt ((0.73 / 0.66) \* 14) `15.48px`.

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

Ohne `font-size-adjust` in `B` könnte der Wechsel von Verdana-Schrift zu Times-Schrift aufgrund des niedrigeren Aspektwertes zu einer merklichen Abnahme der Lesbarkeit führen.
In `C` ist zu beachten, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben ist, sodass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst ist.

### Bestimmen des Aspektwerts einer Schrift

Für eine gegebene Schriftart kann derselbe Inhalt in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Spans verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schrift korrekt ist.

Im folgenden Beispiel gibt es drei Paare nebeneinander liegender `<span>`-Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust`-Eigenschaft für den rechten `<span>` in jedem Paar so anzupassen, dass die Umrandungen um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schrift betrachtet werden.

Beginnend bei `0.6` im ersten Paar und weiter bei `0.5` im zweiten, passen wir den Wert der `font-size-adjust`-Eigenschaft so lange an, bis die Umrandungen um die "b"-Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` descriptor
- SVG {{SVGAttr("font-size-adjust")}} attribute
- [Lernen: Grundlagen der Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
