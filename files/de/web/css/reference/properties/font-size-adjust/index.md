---
title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`font-size-adjust`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen es zu Schriftart-Ersatz kommen kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{Cssxref("font-family")}} nicht verfügbar ist und die Ersatzzufallsschrift eine erheblich unterschiedliche Aspekt-Wert (Höhe der Kleinbuchstaben geteilt durch Schriftgröße) hat. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust`-Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen, um den Aspektwert über verschiedene Schriftarten konsistent zu halten, wodurch sichergestellt wird, dass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

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
  - : Es wird keine Anpassung des `font-size`-Werts für die Ersatzschrift vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Gibt das Messsystem der bevorzugten Schrift an, das zur Anpassung der Schriftgröße der Ersatzschrift verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgelisteten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schrift) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Großbuchstabenhöhe zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorabreit (horizontaler Platzbedarf eines Zeichens in einer Schrift) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um den horizontalen engen Strich von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorabreit des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um den horizontalen weiten Strich von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinese, Japanese, Korean) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorabhöhe (vertikaler Platzbedarf eines Zeichens in einer Schrift) des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um den vertikalen weiten Strich von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße entsprechend dem angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben wird (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße der Ersatzschrift so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Dies bedeutet, dass die bevorzugte Schrift, wenn verfügbar, konsistent über verschiedene Browser angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für den angegebenen Schriftmaßstab über verschiedene Schriftarten hinweg aufrechtzuerhalten.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit null Höhe (d.h. der Text ist versteckt). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für den angegebenen `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn der angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) überschrieben wurde, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust)-Deskriptors, wird dann der überschriebenene Maßstab bei der Berechnung von `font-size-adjust` verwendet. Dies bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height` zur Schriftgröße Verhältnis in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift so berechnet, dass sie `16px` beträgt (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der bevorzugten Schrift beim Anzeigen ähnelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgröße durch Klein- und Großbuchstaben normalisieren

Dieses Beispiel zeigt, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten beizubehalten. Die Verdana-Schrift hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Verhältnis zu den Großbuchstaben relativ hoch sind. Dadurch erscheint der Text in kleinen Schriftgrößen lesbar. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschriftart, kann die Angabe der `font-size-adjust`-Eigenschaft dazu beitragen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schrift also auf Times zurückfällt, behält der Text ein ähnliches Maß an Lesbarkeit bei, wie es mit Verdana der Fall wäre.

Ähnlich ist das Verhältnis von Großbuchstabenhöhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift in einer angepassten Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

{{EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift aufgrund ihres niedrigeren Aspektwerts zu einem spürbaren Rückgang der Lesbarkeit führen.
In `C` fällt auf, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben ist, sodass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn die Höhe der Großbuchstaben angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine bestimmte Schrift können die gleichen Inhalte in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Aspektwert der Schrift zu bestimmen. Wenn dieselbe Schriftgröße für Inhalte in beiden Spannen verwendet wird, passen die Spannen zueinander, wenn der `font-size-adjust`-Wert in einer Spanne für die gegebene Schrift korrekt ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinander liegenden `<span>`-Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel besteht darin, die `font-size-adjust`-Eigenschaft für den rechten `<span>` in jedem Paar so anzupassen, bis die Ränder um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust`-Wert kann als Aspektwert der Schrift betrachtet werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, setzen wir die Anpassung des `font-size-adjust`-Eigenschaftswerts fort, bis die Ränder um die "b"-Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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

{{EmbedLiveSample('Determining the aspect value of a font', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG-Attribut {{SVGAttr("font-size-adjust")}}
- [Erlernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
