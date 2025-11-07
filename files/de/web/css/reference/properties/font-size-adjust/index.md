---
title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu ändern, was die Gesamtgröße {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen es zu einem Schriftarten-Fallback kommen kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatzschriftart einen deutlich anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr von der Größe der Kleinbuchstaben als von der Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften so anzupassen, dass der Aspektwert über die Schriften hinweg konsistent bleibt, wodurch sichergestellt wird, dass der Text unabhängig von der verwendeten Schriftart ähnlich aussieht.

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

Die `font-size-adjust` Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei Werte (`<font-metric>` und entweder `<number>` oder `from-font`) an.

- `none`
  - : Keine Anpassung wird am `font-size` Wert für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Gibt die bevorzugte Schriftartenmetrik an, die zur Anpassung der Schriftgröße der Ersatzschriftart verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn keine `<font-metric>` spezifiziert ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe eines kleinen "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Kappenhöhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorausbreite (horizontaler Raum, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine horizontale enge Teilung von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorausbreite des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine horizontale breite Teilung von Schriftarten zu normalisieren, insbesondere für Schriftarten, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorausehöhe (vertikaler Raum, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine vertikale breite Teilung von Schriftarten zu normalisieren, insbesondere für Schriftarten, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße in Abhängigkeit von der angegebenen `<font-metric>` an. Wenn keine `<font-metric>` spezifiziert ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatzschriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Dies bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, konsistent über Browser hinweg angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriften hinweg beizubehalten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (d.h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für die angegebene `<font-metric>` aus der zuerst verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft spezifiziert. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn die angegebene `<font-metric>` im [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) überschrieben wurde, z.B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust) Deskriptors, wird die überschriebenen Metrik in der `font-size-adjust` Berechnung verwendet. Dies bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keinen Effekt hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis der `cap-height` zur Schriftgröße beträgt `0.20` (`m`). In der Ersatzschrift beträgt das Verhältnis der `cap-height` zur Schriftgröße `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` spezifiziert. Wenn die primäre Schrift unzugänglich ist, wird die angepasste Schriftgröße der Ersatzschrift berechnet, um `16px` zu sein (`(0.20 / 0.15) * 12`). Dies wird sicherstellen, dass die `cap-height` der Ersatzschrift ähnlich wie die der bevorzugten Schrift aussieht, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben relativ hoch im Vergleich zu Großbuchstaben sind. Dadurch erscheint der Text in kleinen Schriftgrößen lesbar. Die Times-Schrift hingegen hat einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift ist und Times die Ersatzschrift, kann die `font-size-adjust` Eigenschaft helfen, denselben Aspektwert in Times beizubehalten. Wenn die Schrift auf Times zurückfällt, behält der Text ein ähnliches Maß an Lesbarkeit bei, wie es mit Verdana der Fall wäre.

Ähnlich ist das Verhältnis der Kappenhöhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben anzupassen, um das Verhältnis in Verdana anzupassen, zeigt die Times-Schrift in angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift zu einem merklichen Rückgang der Lesbarkeit aufgrund ihres niedrigeren Aspektwertes führen. In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, sodass der Standardwert `<font-metric>` `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn die Höhe der Großbuchstaben angepasst wird.

### Bestimmung des Aspektwertes einer Schrift

Für eine gegebene Schriftart kann derselbe Inhalt in zwei nebeneinanderliegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Spans verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust` Wert in einem Span genau für die gegebene Schrift ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinanderliegenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so anzupassen, bis die Umrandungen um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als der Aspektwert für die Schrift betrachtet werden.

Beginnend bei `0.6` im ersten Paar und anpassend auf `0.5` im zweiten, passen wir die `font-size-adjust` Eigenschaft weiter an, bis die Umrandungen um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmung des Aspektwertes einer Schrift', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlagen der Text- und Schriftartgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
