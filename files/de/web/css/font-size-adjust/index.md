---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu ändern, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist in Situationen nützlich, in denen ein Schriftsatz-Wechsel eintreten kann.

Die Lesbarkeit kann ein Problem darstellen, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert hat (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr von der Größe der Kleinbuchstaben als von der der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften so anzupassen, dass der Aspektwert über Schriften hinweg konsistent bleibt, und sicherzustellen, dass der Text unabhängig von der verwendeten Schrift ähnlich erscheint.

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

Die `font-size-adjust` Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung auf den `font-size` Wert der Ersatzschrift angewandt.
- `<font-metric>` {{optional_inline}}
  - : Spezifiziert das Metrikum der bevorzugten Schrift, das zur Anpassung der Schriftgröße der Ersatzschrift verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Großbuchstabenhöhe zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Laufweite (horizontaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale enge Schrittschriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Laufweite des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale weite Schrittschriften zu normalisieren, insbesondere solche, die CJK (Chinesisch, Japanisch, Koreanisch) Zeichen enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Laufhöhe (vertikaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um vertikale weite Schrittschriften zu normalisieren, insbesondere solche, die CJK Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße in Abhängigkeit vom angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (wobei der Standardwert `ex-height` verwendet wird), passt der `<number>` Wert die Schriftgröße der Ersatzschrift so an, dass deren x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Dies bedeutet, dass die bevorzugte Schrift, wenn verfügbar, in allen Browsern konsistent angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für das angegebene Schriftmetrikum über verschiedene Schriften hinweg zu erhalten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt einen Text von null Höhe (der Text ist versteckt). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für das angegebene `<font-metric>` aus der ersten verfügbaren Schrift.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schrift entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, wird das überschreibende Metrikum in der `font-size-adjust` Berechnung verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird durch die Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur Schriftgröße der bevorzugten Schrift ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Schriftgröße der Ersatzschrift ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0,20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße bei der Ersatzschrift beträgt `0,15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der bevorzugten Schrift bei der Anzeige ähnlich ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriften beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dadurch erscheint der Text in kleinen Schriftgrößen leserlich. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger leserlich ist. Wenn Verdana die bevorzugte Schrift ist und Times die Ersatzschrift ist, kann das Festlegen der `font-size-adjust` Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schrift also auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es mit Verdana der Fall wäre.

Ähnlich verhält sich das Verhältnis von Großbuchstabenhöhe zur Schriftgröße bei Verdana `0,73` und bei Times `0,66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um seine Großbuchstaben so anzupassen, dass das Verhältnis in Verdana passt, wird die Times-Schrift in angepasster Schriftgröße ((0,73 / 0,66) \* 14) `15,48px` angezeigt.

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
  font-family: Times, serif;
  font-size: 14px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 14px;
}

.adj-times-ex-height {
  font-size-adjust: 0.545;
}

.adj-times-cap-height {
  font-size-adjust: cap-height 0.73;
}
```

{{ EmbedLiveSample('Normalisieren der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift aufgrund ihres niedrigeren Aspektwerts eine merkliche Abnahme der Lesbarkeit verursachen.
In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standard-`<font-metric>` Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine gegebene Schrift kann derselbe Inhalt in zwei nebeneinander befindlichen [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn in beiden Spans dieselbe Schriftgröße verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schrift korrekt ist.

Im Beispiel unten gibt es drei Paare nebeneinander befindlicher `<span>` Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so anzupassen, dass die Rahmen um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als Aspektwert für die Schrift betrachtet werden.

Beginnend bei `0,6` im ersten Paar und Anpassung auf `0,5` im zweiten, passen wir den `font-size-adjust` Eigenschaftswert weiter an, bis die Rahmen um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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
  font-family: Futura, sans-serif;
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
- [Lernen: Grundlegendes Text- und Schriftstil-Design](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
