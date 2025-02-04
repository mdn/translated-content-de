---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben im Verhältnis zur Größe von Großbuchstaben zu modifizieren, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Ersatzschrifttyp auftreten kann.

Lesbarkeit kann ein Problem werden, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen signifikant anderen Aspektwert (Höhe der Kleinbuchstaben durch Schriftgröße geteilt) hat. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr von der Größe der Kleinbuchstaben als von der Größe der Großbuchstaben bestimmt. Die Eigenschaft `font-size-adjust` ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen, um den Aspektwert über verschiedene Schriften hinweg konsistent zu halten und sicherzustellen, dass der Text unabhängig von der verwendeten Schrift ähnlich erscheint.

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

Die Eigenschaft `font-size-adjust` nimmt den Schlüsselwortwert `none`, einen (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung an den `font-size`-Wert für die Ersatzschrift vorgenommen.
- `<font-metric>` {{optional_inline}}

  - : Gibt die bevorzugte Schriftmetrik an, die zur Anpassung der Schriftgröße der Ersatzschrift verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Er ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn keine `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Kapitälchenhöhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Voranschrittsbreite (horizontaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale enge Teilung von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Voranschrittsbreite des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale weite Teilung von Schriften zu normalisieren, insbesondere bei Schriften, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Voranschritthöhe (vertikaler Raum, den ein Zeichen in einer Schrift einnimmt) des Zeichens "水" (CJK-Wasserideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale weite Teilung von Schriften zu normalisieren, insbesondere bei Schriften, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße abhängig vom angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße der Ersatzschrift an, damit ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Das bedeutet, dass die bevorzugte Schrift, wenn verfügbar, über Browser hinweg konsistent angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße entsprechend dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild der angegebenen Schriftmetrik über verschiedene Schriften hinweg zu gewährleisten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (das heißt, der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für den angegebenen `<font-metric>` aus der zuerst verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust)-Deskriptors, dann wird die überschreibene Metrik in der `font-size-adjust`-Berechnung verwendet. Dies bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird anhand der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`) und das Verhältnis von `cap-height` zu Schriftgröße beträgt `0.20` (`m`). Das Verhältnis von `cap-height` zu Schriftgröße in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Falls die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift ähnlich der der bevorzugten Schrift ist, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um denselben Aspektwert über Schriftarten hinweg beizubehalten. Die Verdana-Schriftart hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dies macht den Text in kleinen Schriftgrößen lesbar. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schrift und Times die Ersatzschrift ist, kann durch Angabe der `font-size-adjust`-Eigenschaft der gleiche Aspektwert in Times beibehalten werden. Fällt die Schrift auf Times zurück, behält der Text eine ähnliche Lesbarkeit bei, wie er mit Verdana hätte.

Ebenso beträgt das Verhältnis von Kapitälchenhöhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, zeigt die Times-Schriftart in angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` an.

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

{{ EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift eine bemerkbare Abnahme der Lesbarkeit aufgrund ihres niedrigeren Aspektwerts verursachen.
In `C`, beachten Sie, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben ist, sodass der Standardwert `<font-metric>` `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstaben-Höhe angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine bestimmte Schriftart kann derselbe Inhalt in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Element/span)-Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für Inhalte in beiden Spans verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schrift korrekt ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinander liegenden `<span>`-Elementen, die jeweils den Buchstaben „b“ enthalten. Das Ziel ist es, die `font-size-adjust`-Eigenschaft für das rechte `<span>` in jedem Paar anzupassen, bis die Ränder um die beiden Buchstaben herum ausgerichtet sind. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schrift angesehen werden.

Ausgehend von `0.6` im ersten Paar und einer Anpassung auf `0.5` im zweiten, passen wir den Wert der `font-size-adjust`-Eigenschaft an, bis die Ränder um die „b“-Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert als `0.482` bestimmt.

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
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
