---
title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`font-size-adjust`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die allgemeine {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftartenersatz auftreten kann.

Die Lesbarkeit kann ein Problem darstellen, wenn die bevorzugte {{Cssxref("font-family")}} nicht verfügbar ist und die Ersatzschriftart einen erheblich anderen Verhältniswert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) hat. Die Lesbarkeit von Schriften, insbesondere bei kleinen Schriftgrößen, wird mehr durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust`-Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriften anzupassen und den Verhältniswert zwischen den Schriften konsistent zu halten, was sicherstellt, dass der Text unabhängig von der verwendeten Schriftart ähnlich aussieht.

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

Die `font-size-adjust`-Eigenschaft nimmt als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte.

- `none`
  - : Es wird keine Anpassung auf den `font-size`-Wert für die Ersatzschrift angewendet.
- `<font-metric>` {{optional_inline}}
  - : Gibt die bevorzugte Schriftartmetrik an, die zur Anpassung der Schriftgröße der Ersatzschrift verwendet wird. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben wird.
    - `ex-height`
      - : Verwendet das Verhältnis von x-Höhe (Höhe des kleinen "x" in einer Schriftart) zur Schriftgröße (Verhältnisausdruck), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriften zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis von Cap-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriften zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorlaufbreite (horizontaler Platz, der von einem Zeichen in einer Schriftart eingenommen wird) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale enge Tonhöhe von Schriften zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorlaufbreite des Zeichens "水" (CJK-Wasserideograph, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die horizontale weite Tonhöhe von Schriften, insbesondere denen mit CJK-Zeichen (Chinesisch, Japanisch, Koreanisch), zu normalisieren.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorlaufhöhe (vertikaler Platz, der von einem Zeichen in einer Schriftart eingenommen wird) des Zeichens "水" (CJK-Wasserideograph, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um die vertikale weite Tonhöhe von Schriften, insbesondere denen mit CJK-Zeichen, zu normalisieren.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße abhängig von der angegebenen `<font-metric>` an. Wenn keine `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße der Ersatzschrift so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Dieser Wert sollte im Allgemeinen dem Verhältniswert (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten Schriftart entsprechen. Das bedeutet, dass die bevorzugte Schriftart, wenn sie verfügbar ist, über Browser hinweg konsistent angezeigt wird, unabhängig von ihrer Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die angegebene Schriftmetrik über verschiedene Schriften hinweg beizubehalten.

    Der `<number>`-Wert akzeptiert jede Nummer von `0` bis unendlich. `0` ergibt Text von null Höhe (das heißt, der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Verhältniswert der bevorzugten Schriftart entsprechen.

> [!NOTE]
> Wenn die angegebene `<font-metric>` in {{cssxref("@font-face")}}, z.B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust)-Descriptors überschrieben wurde, wird die überschreibende Metrik in der `font-size-adjust`-Berechnung verwendet. Das bedeutet, dass `size-adjust` keine Wirkung hat, wenn `font-size-adjust` und `size-adjust` gemeinsam angewendet werden.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur Größe der bevorzugten Schriftart ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Größe der Ersatzschrift über die Schriftarten hinweg ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße beträgt `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Ersatzschrift beträgt `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift als `16px` berechnet (`(0.20 / 0.15) * 12`). Dies stellt sicher, dass die `cap-height` der Ersatzschrift der der ersten Wahl entspricht, wenn sie dargestellt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisieren der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel demonstriert, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um den gleichen Verhältniswert über Schriften hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Verhältniswert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dadurch erscheint der Text in kleinen Schriftgrößen leserlich. Allerdings hat die Times-Schriftart einen niedrigeren Verhältniswert von `0.447`, wodurch der Text bei kleinen Schriftgrößen weniger leserlich ist. Wenn Verdana die bevorzugte Schriftart und Times die Ersatzschrift ist, kann die Angabe der `font-size-adjust`-Eigenschaft helfen, den gleichen Verhältniswert in Times beizubehalten. Wenn die Schrift dann zu Times wechselt, wird der Text eine ähnliche Lesbarkeit wie bei Verdana beibehalten.

Ähnlich ist das Verhältnis von Cap-Höhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben anzupassen, um das Verhältnis in Verdana zu erreichen, wird die Times-Schriftart in angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana- zur Times-Schrift in einer spürbaren Verringerung der Lesbarkeit aufgrund des niedrigeren Verhältniswertes resultieren.
In `C` beachten Sie, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben wird, sodass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Bestimmen des Verhältniswertes einer Schrift

Für eine gegebene Schrift kann derselbe Inhalt in zwei nebeneinander liegenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Verhältniswert der Schrift zu bestimmen. Wenn die gleiche Schriftgröße für den Inhalt in beiden Spans verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust`-Wert in einem Span für die gegebene Schrift genau ist.

Im folgenden Beispiel gibt es drei Paare nebeneinander liegender `<span>`-Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust`-Eigenschaft für das rechte `<span>` in jedem Paar so anzupassen, bis die Rahmen um die beiden Buchstaben übereinstimmen. Der resultierende `font-size-adjust`-Wert kann als Verhältniswert für die Schrift angesehen werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir weiterhin den `font-size-adjust`-Eigenschaftswert an, bis die Rahmen um die "b"-Buchstaben im dritten Paar perfekt übereinstimmen. In diesem Beispiel wird der Verhältniswert auf `0.482` bestimmt.

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

{{ EmbedLiveSample('Bestimmen des Verhältniswertes einer Schrift', 500, 120) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftformatierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
