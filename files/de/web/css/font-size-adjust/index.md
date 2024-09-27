---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zu der von Großbuchstaben anzupassen, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Font-Fallback auftreten kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{Cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert hat (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird eher durch die Größe der Kleinbuchstaben als durch die der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen, um den Aspektwert über verschiedene Schriften hinweg konsistent zu halten, und sicherzustellen, dass der Text unabhängig von der verwendeten Schrift ähnlich erscheint.

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

Die `font-size-adjust` Eigenschaft nimmt entweder den Schlüsselwortwert `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung an den `font-size` Wert für die Ersatztchrift angewendet.
- `<font-metric>` {{optional_inline}}

  - : Gibt das Schriftmaß der bevorzugten Schriftart an, das zur Anpassung der Schriftgröße der Ersatzschrift verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des kleinbuchstabigen "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Kapitälchen-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Breite (der horizontale Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale schmale Pitch von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Breite des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale breite Pitch von Schriften zu normalisieren, besonders solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Höhe (der vertikale Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale breite Pitch von Schriften zu normalisieren, besonders solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die Schriftgröße je nach angegebenem `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatzschrift so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Das bedeutet, dass die bevorzugte Schrift, wenn verfügbar, unabhängig von der Unterstützung der `font-size-adjust` Eigenschaft in Browsern konsistent angezeigt wird.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße entsprechend dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für das spezifizierte Schriftmaß über verschiedene Schriften hinweg zu gewährleisten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` führt zu einer Schrift von null Höhe (das heißt, der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für das spezifizierte `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft spezifiziert. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das spezifizierte `<font-metric>` im [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z.B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, wird das überschreibende Maß im `font-size-adjust` Berechnung verwendet. Das bedeutet, dass, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird durch die Formel `u = ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des spezifizierten `<font-metric>` zur Schriftgröße der bevorzugten Schrift ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Schriftgröße der Ersatzschrift ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height` zur Schriftgröße Verhältnis in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Ist die primäre Schriftart nicht verfügbar, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` (`(0.20 / 0.15) * 12`) berechnet. Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der bevorzugten Schrift beim Anzeigen ähnlich ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße mit Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text bei kleinen Schriftgrößen leserlich. Die Schriftart Times hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger leserlich ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschriftart ist, kann die Angabe der `font-size-adjust` Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn also auf Times zurückgefallen wird, behält der Text ein ähnliches Maß an Lesbarkeit, wie es bei Verdana der Fall gewesen wäre.

Ebenso beträgt das Verhältnis von Kapitälchen-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um die Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift in angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

```html
<p class="verdana">
  A: This text uses the Verdana font (14px), which has relatively large
  lowercase letters.
</p>
<p class="times">
  B: This text uses the Times font (14px), which is hard to read in small sizes.
</p>
<p class="times adjtimesexheight">
  C: This text in 14px Times font is adjusted to the same aspect value as the
  Verdana font, so lowercase letters are normalized across the two fonts.
</p>
<p class="times adjtimescapheight">
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

.adjtimesexheight {
  font-size-adjust: 0.545;
}

.adjtimescapheight {
  font-size-adjust: cap-height 0.73;
}
```

{{ EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana- zu der Times-Schrift zu einem spürbaren Rückgang der Lesbarkeit aufgrund des niedrigeren Aspektwerts führen.
In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standardwert `<font-metric>` `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn die Höhe der Großbuchstaben angepasst wird.

### Bestimmung des Aspektwertes einer Schriftart

Für eine gegebene Schriftart kann derselbe Inhalt in zwei nebeneinander stehenden [`<span>`](/de/docs/Web/HTML/Element/span) Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Spans verwendet wird, passen die Spans zueinander, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schriftart korrekt ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinander stehenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so lange anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als Aspektwert für die Schriftart betrachtet werden.

Angefangen bei `0.6` im ersten Paar und angepasst auf `0.5` im zweiten, passen wir die `font-size-adjust` Eigenschaft weiter an, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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

{{ EmbedLiveSample('Determining the aspect value of a font', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- [Lernen: Grundlegendes Text- und Schriftart-Styling](/de/docs/Learn/CSS/Styling_text/Fundamentals)
