---
title: "`font-size-adjust` CSS property"
short-title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 82eeb8918aee4fe017a6ef1cb286bfd0a8a0ff43
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu modifizieren, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen es zu einem Schriftarten-Fallback kommen kann.

Die Lesbarkeit kann beeinträchtigt werden, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen signifikant anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriftarten anzupassen, um den Aspektwert über Schriftarten hinweg konsistent zu halten, sodass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

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

Die `font-size-adjust` Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`) oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte an.

- `none`
  - : Es wird keine Anpassung des `font-size` Wertes für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}
  - : Gibt das erste Wahl-Schriftartmaß an, das zur Anpassung der Schriftgröße der Ersatzschriftart verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der cap-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Breite (horizontaler Platzbedarf eines Zeichens in einer Schriftart) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale Engschrift von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Breite des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um horizontale Weitschrift von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Höhe (vertikaler Platzbedarf eines Zeichens in einer Schriftart) des Zeichens "水" (CJK Wasser-Ideogramm, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um vertikale Weitschrift von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße abhängig von dem angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (dann wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatzschriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der favorisierten Schriftart entsprechen. Das bedeutet, dass die favorisierte Schriftart, wenn sie verfügbar ist, über Browser hinweg konsistent angezeigt wird, unabhängig von ihrer Unterstützung von `font-size-adjust`.

  Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild des angegebenen Schriftartmaßes über verschiedene Schriftarten hinweg zu gewährleisten.

  Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text ohne Höhe (das heißt, der Text ist versteckt). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für das angegebene `<font-metric>` der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in {{cssxref("@font-face")}}, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust) Deskriptors, überschrieben wurde, wird das überschriebenen Maß in der `font-size-adjust` Berechnung verwendet. Dies bedeutet, dass, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keinen Effekt hat.

> [!NOTE]
> Schriftmaße wie x-Höhe und Kappenhöhe können zwischen Schriftvarianten (wie Fett- oder Kursivvarianten) innerhalb derselben {{cssxref("font-family")}} variieren. Wenn `font-size-adjust` `from-font` oder einen festen Wert verwendet, werden die Maße jeder Schriftvariante unabhängig angepasst, ungeachtet der relativen Unterschiede zwischen Schriftvarianten in derselben Schriftfamilie.

Die angepasste Schriftgröße wird mit der Formel `u = (m / m′) s` berechnet, wobei:

- `m` das Verhältnis des angegebenen `<font-metric>` zur favorisierten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine favorisierte Schrift hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0,20` (`m`). Das `cap-height`-zu-Schriftgröße-Verhältnis in der Ersatzschrift ist `0,15` (`m′`). Der `font-size-adjust` Wert wurde auf `cap-height 0,20` festgelegt. Wenn die primäre Schrift nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift auf `16px` ((`0,20 / 0,15) * 12`) berechnet. Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der favorisierten Schrift ähnelt, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0,545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ groß sind. Dies macht den Text in kleinen Schriftgrößen leserlich. Die Schriftart Times hingegen hat einen niedrigeren Aspektwert von `0,447`, wodurch der Text bei kleinen Größen weniger leserlich ist. Wenn Verdana die bevorzugte Schriftart ist und Times die Ersatzschrift, kann die Angabe der `font-size-adjust` Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Fällt die Schrift auf Times zurück, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie er es mit Verdana hätte.

Ebenso ist das cap-height-zu-Schriftgröße-Verhältnis in Verdana `0,73` und in Times `0,66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift in angepasster Schriftgröße angezeigt ((`0,73 / 0,66) * 14) `15,48px`.

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

{{ EmbedLiveSample('Normalisieren der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift zu einer merklichen Verschlechterung der Lesbarkeit führen, bedingt durch den niedrigeren Aspektwert.
In `C` bemerken Sie, dass nur ein Wert für die `font-size-adjust` Eigenschaft angegeben ist, daher wird der Standardwert `<font-metric>` `ex-height` verwendet. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn die Höhe der Großbuchstaben angepasst wird.

### Bestimmen des Aspektwertes einer Schriftart

Für eine gegebene Schriftart kann der gleiche Inhalt in zwei nebeneinanderstehenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden span-Elementen verwendet wird, entsprechen die Spans, wenn der `font-size-adjust` Wert in einem Span korrekt für die gegebene Schriftart ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinanderstehenden `<span>` Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so lange anzupassen, bis die Ränder um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust` Wert kann als Aspektwert für die Schriftart betrachtet werden.

Beginnen Sie bei `0,6` im ersten Paar und passen Sie bis `0,5` im zweiten an, wir passen den `font-size-adjust` Wert weiter an, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Aspektwert mit `0,482` bestimmt.

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

{{ EmbedLiveSample('Bestimmen des Aspektwertes einer Schriftart', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
