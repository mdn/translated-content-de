---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die Gesamt-{{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftartwechsel notwendig werden kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{Cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen deutlich unterschiedlichen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist hilfreich, um die Schriftgröße von Ersatzschriften so anzupassen, dass der Aspektwert über verschiedene Schriften hinweg konsistent bleibt und der Text unabhängig von der verwendeten Schriftart ähnlich aussieht.

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
  - : Es erfolgt keine Anpassung des `font-size`-Werts für die Ersatzschriftart.
- `<font-metric>` {{optional_inline}}

  - : Gibt das bevorzugte Schriftmaß an, das zur Anpassung der Schriftgröße der Ersatzschriftart verwendet wird. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über verschiedene Schriften zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Großbuchstabenhöhe zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über verschiedene Schriften zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorbreite (horizontaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (ZERO, U+0030) zur Schriftgröße. Dieser Schlüsselwert wird verwendet, um die horizontale Enge von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorbreite des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwert wird verwendet, um die horizontale Weite von Schriften zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorhöhe (vertikaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwert wird verwendet, um die vertikale Weite von Schriften zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße je nach angegebenem `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in welchem Fall der Standardwert `ex-height` verwendet wird), passt der `<number>`-Wert die Schriftgröße der Ersatzschriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße beträgt. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Dies bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, unabhängig von der Unterstützung durch den Browser für `font-size-adjust` einheitlich angezeigt wird.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein einheitliches Erscheinungsbild für das spezifizierte Schriftmaß über verschiedene Schriften hinweg beizubehalten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (das heißt, der Text ist unsichtbar). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für das angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` im [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust)-Deskriptors, wird bei der Berechnung von `font-size-adjust` das überschriebenen Maß verwendet. Das bedeutet, dass bei gleichzeitiger Anwendung von `font-size-adjust` und `size-adjust` `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0,20` (`m`). Das Verhältnis der `cap-height` zur Schriftgröße bei der Ersatzschriftart beträgt `0,15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschriftart auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschriftart ähnlich der der bevorzugten Schriftart angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße nach Klein- und Großbuchstaben

Dieses Beispiel demonstriert, wie die Eigenschaft `font-size-adjust` verwendet werden kann, um denselben Aspektwert über verschiedene Schriften hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text in kleinen Schriftgrößen lesbar. Die Schriftart Times hat jedoch einen niedrigeren Aspektwert von `0.447`, weshalb der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschriftart, kann durch die Angabe der Eigenschaft `font-size-adjust` der gleiche Aspektwert in Times beibehalten werden. Wenn die Schrift auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es bei Verdana der Fall gewesen wäre.

Ebenso ist das Verhältnis der Großbuchstabenhöhe zur Schriftgröße bei Verdana `0,73` und bei Times `0,66`. Wenn die Eigenschaft `font-size-adjust` auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schriftart in einer angepassten Schriftgröße angezeigt ((0.73 / 0.66) \* 14) `15.48px`.

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

{{ EmbedLiveSample('Normalisieren der Schriftgröße nach Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schriftart zu Times zu einer spürbaren Verringerung der Lesbarkeit führen, aufgrund des niedrigeren Aspektwerts.
In `C` ist zu beachten, dass nur ein Wert für die Eigenschaft `font-size-adjust` angegeben ist, sodass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Bestimmung des Aspektwerts einer Schriftart

Für eine gegebene Schriftart kann der gleiche Inhalt in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn für den Inhalt in beiden Spans die gleiche Schriftgröße verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schriftart stimmt.

Im untenstehenden Beispiel gibt es drei Paare nebeneinander liegender `<span>`-Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die Eigenschaft `font-size-adjust` für den rechten `<span>` in jedem Paar anzupassen, bis die Ränder um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust`-Wert kann als der Aspektwert für die Schriftart betrachtet werden.

Ausgehend von `0,6` im ersten Paar und Anpassung auf `0,5` im zweiten, passen wir den `font-size-adjust`-Eigenschaftswert so lange an, bis die Ränder um die "b"-Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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
- [Lernen: Grundlegende Text- und Schriftstilgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
