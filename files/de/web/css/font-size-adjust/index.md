---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu ändern, welche die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftarten-Fallback auftreten kann.

Lesbarkeit kann ein Problem werden, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatz-Schriftart einen signifikant unterschiedlichen Aspect-Wert hat (Höhe der Kleinbuchstaben geteilt durch Schriftgröße). Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr von der Größe der Kleinbuchstaben als von der Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriftarten anzupassen, damit der Aspect-Wert über die Schriften hinweg konsistent bleibt und der Text unabhängig von der verwendeten Schrift ähnlich erscheint.

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

Die `font-size-adjust` Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte.

- `none`
  - : Keine Anpassung wird auf den `font-size` Wert für die Ersatz-Schriftart angewendet.
- `<font-metric>` {{optional_inline}}

  - : Gibt das bevorzugte Schriftmetrik an, das zur Anpassung der Schriftgröße der Ersatz-Schriftart verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspect-Wert), um die Ersatz-Schriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Kapitälchen-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatz-Schriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorlaufbreite (horizontaler Platz, der von einem Zeichen in einer Schrift eingenommen wird) des Zeichens "0" (ZERO, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale enge Breite von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorlaufbreite des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale große Breite von Schriften zu normalisieren, insbesondere solche, die CJK (Chinesische, Japanische, Koreanische) Zeichen enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorlaufhöhe (vertikaler Platz, der von einem Zeichen in einer Schrift eingenommen wird) des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale große Breite von Schriften zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße abhängig von dem angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatz-Schriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspect-Wert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Dies bedeutet, dass die bevorzugte Schrift, wenn verfügbar, konsistent über Browser hinweg angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße entsprechend dem gewählten `<font-metric>` an, um ein einheitliches Erscheinungsbild für das angegebene Schriftmetrik über verschiedene Schriften hinweg zu wahren.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text von null Höhe (das heißt, der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für den angegebenen `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspect-Wert der bevorzugten Schrift entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z.B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, dann wird das überschriebenes Metrik in der `font-size-adjust` Berechnung verwendet. Dies bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur ersten Wahl der Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatz-Schriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatz-Schriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis der `cap-height` zur Schriftgröße beträgt `0.20` (`m`). Das Verhältnis der `cap-height` zur Schriftgröße in der Ersatz-Schrift beträgt `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatz-Schrift auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatz-Schrift der der bevorzugten Schrift ähnelt, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße anhand von Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspect-Wert über Schriften hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspect-Wert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text bei kleinen Schriftgrößen leserlich. Die Schrift Times hingegen hat einen niedrigeren Aspect-Wert von `0.447`, wodurch der Text bei kleinen Größen weniger leserlich ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatz-Schriftart, kann die Angabe der `font-size-adjust` Eigenschaft helfen, den gleichen Aspect-Wert in Times beizubehalten. Wenn auf Times zurückgegriffen wird, bleibt die Lesbarkeit ähnlich der von Verdana erhalten.

Ähnlich ist das Verhältnis der Kapitälchen-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um seine Großbuchstaben so anzupassen, dass sie dem Verhältnis in Verdana entsprechen, wird die Times-Schrift in angepasster Schriftgröße angezeigt ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße anhand von Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von Verdana-Schrift zu Times-Schrift zu einem spürbaren Rückgang der Lesbarkeit aufgrund ihres niedrigeren Aspect-Werts führen. In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standard-`<font-metric>` Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabengröße angepasst wird.

### Bestimmen des Aspect-Werts einer Schrift

Für eine gegebene Schrift können die gleichen Inhalte in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspect-Wert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für Inhalte in beiden Spans verwendet wird, passen die Spans zusammen, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schrift genau ist.

Im folgenden Beispiel gibt es drei Paare nebeneinander liegende `<span>` Elemente, die jeweils den Buchstaben "b" enthalten. Ziel ist es, die `font-size-adjust` Eigenschaft für den rechten `<span>` in jedem Paar so einzustellen, dass die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als Aspect-Wert für die Schrift angesehen werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, setzen wir die Anpassung des `font-size-adjust` Eigenschaftswerts fort, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspect-Wert auf `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmen des Aspect-Werts einer Schrift', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Descriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlagen der Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
