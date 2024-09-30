---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die CSS-Eigenschaft **`font-size-adjust`** bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Font-Fallback auftreten kann.

Die Lesbarkeit kann beeinträchtigt werden, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und der Ersetzungsfont einen deutlich anderen Aspektwert hat (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist nützlich, um die Schriftgröße von Reservefonts anzupassen, um den Aspektwert über Schriften hinweg konsistent zu halten und sicherzustellen, dass der Text unabhängig von der verwendeten Schrift ähnlich aussieht.

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
  - : Es wird keine Anpassung auf den `font-size`-Wert für den Reservefont angewendet.
- `<font-metric>` {{optional_inline}}

  - : Gibt das zu verwendende erste Wahl Schriftmaß an, um die Schriftgröße des Reservefonts anzupassen. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es handelt sich um einen optionalen Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben wird.

    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe eines Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Reservefontgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Großbuchstabenhöhe zur Schriftgröße, um die Reservefontgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorabreite (horizontaler Platzbedarf eines Zeichens in einer Schrift) des Zeichens "0" (ZERO, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale schmale Tonhöhen der Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorabreite des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale breite Tonhöhen der Schriften zu normalisieren, insbesondere bei solchen, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorabhöhe (vertikaler Platzbedarf eines Zeichens in einer Schrift) des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um vertikale breite Tonhöhen der Schriften zu normalisieren, insbesondere bei solchen, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße in Abhängigkeit vom angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße des Reservefonts so an, dass seine x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Das bedeutet, dass die bevorzugte Schrift, wenn sie verfügbar ist, über alle Browser hinweg konsistent angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße entsprechend dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild des angegebenen Schriftmaßes über verschiedene Schriftarten hinweg beizubehalten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (d. h. der Text ist unsichtbar). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für das angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z.B. durch Verwendung des Deskriptors [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust), wird das überschriebenen Maß für die Berechnung von `font-size-adjust` verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Reservefontgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Reserve-Schriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Reservefont beträgt `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Reservefont zu `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Reservefont ähnlich der der bevorzugten Schrift ist, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die Eigenschaft `font-size-adjust` verwendet werden kann, um über Schriften hinweg denselben Aspektwert beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dadurch erscheint der Text bei kleinen Schriftgrößen leserlich. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger leserlich ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Reservefont, kann die Angabe der Eigenschaft `font-size-adjust` helfen, denselben Aspektwert in Times beizubehalten. So behält der Text bei einem Fallback auf Times ein ähnliches Maß an Lesbarkeit, wie er es mit Verdana hätte.

Ähnlich verhält es sich beim Verhältnis von Großbuchstabhöhe zur Schriftgröße, das in Verdana `0.73` und in Times `0.66` ist. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift in angepasster Schriftgröße angezeigt ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisieren der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift aufgrund des niedrigeren Aspektwerts zu einer spürbaren Abnahme der Lesbarkeit führen. In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben ist, sodass der Standardwert `<font-metric>` `ex-height` verwendet wird. `D` zeigt, wie die Schrift verglichen mit `A` aussehen würde, wenn die Höhen der Großbuchstaben angepasst werden.

### Bestimmung des Aspektwerts einer Schriftart

Für eine gegebene Schriftart kann dasselbe Inhaltsstück in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Element/span)-Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Spans verwendet wird, passen die Spans zueinander, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schrift genau ist.

Im untenstehenden Beispiel gibt es drei Paare von nebeneinander angeordneten `<span>`-Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust`-Eigenschaft für das rechte `<span>` in jedem Paar so lange anzupassen, bis die Rahmen um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schrift betrachtet werden.

Beginnend mit `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir den `font-size-adjust`-Eigenschaftswert weiter an, bis die Rahmen um die "b"-Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` descriptor
- [Lernen: Grundlegendes zum Styling von Text und Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals)
