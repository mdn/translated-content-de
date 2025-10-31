---
title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftartenersatz auftreten kann.

Lesbarkeit kann ein Problem werden, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert hat (Höhe der Kleinbuchstaben dividiert durch die Schriftgröße). Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriftarten anzupassen, um den Aspektwert über Schriftarten hinweg konsistent zu halten, sodass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

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

Die `font-size-adjust` Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte.

- `none`
  - : Keine Anpassung wird auf den `font-size` Wert für die Ersatzschriftart angewendet.
- `<font-metric>` {{optional_inline}}
  - : Gibt das bevorzugte Schriftartenmaß an, das zur Anpassung der Schriftgröße der Ersatzschriftart verwendet werden soll. Dieser Parameter nimmt eines der unten aufgeführten Schlüsselwörter an. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des kleinen "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Cap-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Laufweite (horizontaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale enge Schriftbreiten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Laufweite des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale breite Schriftbreiten zu normalisieren, insbesondere bei Schriftarten, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Laufhöhe (vertikaler Platz, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um vertikale breite Schriftbreiten zu normalisieren, insbesondere bei Schriftarten, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße je nach dem angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatzschriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen mit dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schriftart übereinstimmen. Das bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, konsistent über Browser hinweg angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für das angegebene Schriftartenmaß über verschiedene Schriftarten hinweg zu gewährleisten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` führt zu Text mit Nullhöhe (das heißt, der Text wird versteckt). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für den angegebenen `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen mit dem Aspektwert der bevorzugten Schriftart übereinstimmen.

> [!NOTE]
> Wenn der angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, wird die überschreibene Maßeinheit in der `font-size-adjust` Berechnung verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Auswirkungen hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height` Verhältnis zur Schriftgröße in der Ersatzschriftart ist `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die Hauptschriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschriftart auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschriftart der der bevorzugten Schriftart ähnlich ist, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Kleinbuchstaben und Großbuchstaben

Dieses Beispiel demonstriert, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um denselben Aspektwert über Schriftarten hinweg zu erhalten. Die Schrift Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text bei kleinen Schriftgrößen lesbar. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschriftart ist, kann das Festlegen der `font-size-adjust` Eigenschaft helfen, denselben Aspektwert in Times beizubehalten. Wenn die Schrift also auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es bei Verdana der Fall wäre.

Ähnlicherweise ist das Verhältnis von Cap-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben so anzupassen, dass sie dem Verhältnis in Verdana entsprechen, wird die Times-Schrift in einer angepassten Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße durch Kleinbuchstaben und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift zu einer bemerkbaren Abnahme der Lesbarkeit aufgrund ihres niedrigeren Aspektwerts führen.
In `C`, beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, daher wird der Standard `<font-metric>` Wert `ex-height` verwendet. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabengröße angepasst wird.

### Bestimmung des Aspektwertes einer Schriftart

Für eine gegebene Schriftart können der gleiche Inhalt in zwei nebeneinanderliegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn die gleiche Schriftgröße für den Inhalt in beiden Spans verwendet wird, werden die Spans übereinstimmen, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schriftart genau ist.

Im unteren Beispiel gibt es drei Paare von nebeneinanderliegenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust` Eigenschaft für den rechten `<span>` in jedem Paar so lange anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als der Aspektwert für die Schriftart betrachtet werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir den `font-size-adjust` Eigenschaftswert weiter an, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmung des Aspektwertes einer Schriftart', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
