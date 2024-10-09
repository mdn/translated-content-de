---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe der Kleinbuchstaben relativ zur Größe der Großbuchstaben zu ändern, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Rückfall auf andere Schriftarten erfolgen kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch Schriftgröße) hat. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird eher durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist nützlich, um die Schriftgröße von Ersatzschriftarten anzupassen, um den Aspektwert über Schriftarten hinweg konsistent zu halten und sicherzustellen, dass der Text unabhängig von der verwendeten Schriftart ähnlich aussieht.

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

Die Eigenschaft `font-size-adjust` akzeptiert als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei Werte (`<font-metric>` und entweder `<number>` oder `from-font`).

- `none`
  - : Es wird keine Anpassung des `font-size`-Werts für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}

  - : Gibt das erste zu verwendende Schriftmetriken an, um die Schriftgröße der Ersatzschriftart anzupassen. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der cap-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorabreite (horizontaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale enge Teilung von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorabreite des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale weite Teilung von Schriftarten zu normalisieren, insbesondere solche mit CJK (Chinesisch, Japanisch, Koreanisch) Zeichen.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorurteil (vertikaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale weite Teilung von Schriftarten zu normalisieren, insbesondere solche mit CJK-Zeichen.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße entsprechend dem angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße der Ersatzschriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte in der Regel dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Dies bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, konsistent in allen Browsern angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße entsprechend dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriftarten hinweg zu erhalten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (das heißt, der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für das angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte in der Regel dem Aspektwert der ersten wahl Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z.B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, dann wird die überschriebene Metrik in der Berechnung von `font-size-adjust` verwendet. Dies bedeutet, dass, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur ersten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis der `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height` zur Schriftgröße Verhältnis bei der Ersatzschrift ist `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift mit `16px` (`(0.20 / 0.15) * 12`) berechnet. Dies stellt sicher, dass die `cap-height` der Ersatzschrift ähnlich der der ersten Schriftart erscheint.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Verhältnis zu den Großbuchstaben relativ groß sind. Dadurch erscheint der Text bei kleinen Schriftgrößen lesbar. Die Times-Schrift hingegen hat einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift ist und Times die Ersatzschrift, kann die Angabe der `font-size-adjust` Eigenschaft dazu beitragen, den gleichen Aspektwert bei Times beizubehalten. Wenn also auf Times zurückgegriffen wird, behält der Text ein ähnliches Maß an Lesbarkeit bei, wie er es bei Verdana hätte.

Ähnlich ist das Verhältnis von `cap-height` zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift mit angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift zu einem merklichen Rückgang der Lesbarkeit führen, da ihr Aspektwert niedriger ist.
In `C`, beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standardwert `<font-metric>` `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Bestimmung des Aspektwerts einer Schriftart

Für eine gegebene Schriftart können zwei nebeneinanderstehende [`<span>`](/de/docs/Web/HTML/Element/span) Elemente verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn für den Inhalt in beiden Spans die gleiche Schriftgröße verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schriftart korrekt ist.

Im untenstehenden Beispiel gibt es drei Paare von nebeneinanderstehenden `<span>`-Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar anzupassen, bis der Rahmen um die beiden Buchstaben übereinstimmt. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schriftart betrachtet werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir den Wert der `font-size-adjust` Eigenschaft weiter an, bis die Rahmen um die "b" Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmung des Aspektwerts einer Schriftart', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
