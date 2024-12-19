---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe der Kleinbuchstaben relativ zur Größe der Großbuchstaben zu ändern, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Font-Fallback auftreten kann.

Die Lesbarkeit kann ein Problem sein, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen signifikant anderen Aspektwert hat (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen und den Aspektwert über Schriften hinweg konsistent zu halten, sodass der Text unabhängig von der verwendeten Schrift ähnlich erscheint.

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
  - : Es wird keine Anpassung an den `font-size` Wert der Ersatzschrift vorgenommen.
- `<font-metric>` {{optional_inline}}

  - : Gibt die bevorzugte Schriftmetrik an, die zur Anpassung der Schriftgröße der Ersatzschrift verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn keine `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zu Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Cap-Höhe (Höhe der Großbuchstaben) zu Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Laufweite (horizontaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale schmale Dickte von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Laufweite des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale breite Dickte von Schriften, insbesondere solcher, die CJK (Chinesisch, Japanisch, Koreanisch) Zeichen enthalten, zu normalisieren.
    - `ic-height`
      - : Verwendet das Verhältnis der Schreibhöhe (vertikaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale breite Dickte von Schriften, insbesondere solcher, die CJK Zeichen enthalten, zu normalisieren.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße je nach angegebener `<font-metric>` an. Wenn keine `<font-metric>` angegeben ist (wobei der Standardwert `ex-height` verwendet wird), passt der `<number>` Wert die Schriftgröße der Ersatzschrift so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zu Schriftgröße) der bevorzugten Schrift entsprechen. Dies bedeutet, dass die bevorzugte Schrift, wenn sie verfügbar ist, unabhängig von der Unterstützung der Browser für `font-size-adjust` konsistent angezeigt wird.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriften hinweg zu gewährleisten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text von null Höhe (das heißt, der Text ist versteckt). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schrift.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schrift entsprechen.

> [!NOTE]
> Wenn die angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z.B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Descriptors, wird die überschriebenen Metrik in der `font-size-adjust` Berechnung verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` (`(0.20 / 0.15) * 12`) berechnet. Dies stellt sicher, dass die `cap-height` der Ersatzschrift derjenigen der bevorzugten Schrift ähnelt, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Kleinbuchstaben und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriften hinweg beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben relativ hoch im Vergleich zu den Großbuchstaben sind. Dadurch erscheint der Text in kleinen Schriftgrößen lesbar. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift ist und Times die Ersatzschrift, kann das Angeben der `font-size-adjust` Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schrift auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es mit Verdana der Fall wäre.

In ähnlicher Weise ist das Verhältnis von Cap-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, zeigt die Times-Schrift eine angepasste Schriftgröße von ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße durch Kleinbuchstaben und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von Verdana Schrift zu Times Schrift zu einem merklichen Rückgang der Lesbarkeit aufgrund des niedrigeren Aspektwerts führen. In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben wird, sodass der Standard `<font-metric>` Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstaben-Höhe angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine gegebene Schrift kann derselbe Inhalt in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Element/span) Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn für den Inhalt in beiden Spans dieselbe Schriftgröße verwendet wird, passen die Spans zueinander, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schrift genau ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinander liegenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist, die `font-size-adjust` Eigenschaft für den rechten `<span>` in jedem Paar so anzupassen, bis die Rahmen um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust` Wert kann als Aspektwert für die Schrift angesehen werden.

Ausgehend von `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir den `font-size-adjust` Eigenschaftswert weiter an, bis die Rahmen um die "b" Buchstaben im dritten Paar perfekt übereinanderliegen. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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
  font-family: Futura;
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
- [Learn: Grundlegendes zu Text- und Schriftstilen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
