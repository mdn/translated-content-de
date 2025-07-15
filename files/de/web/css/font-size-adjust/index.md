---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben zu ändern, was die gesamte {{cssxref("font-size")}} definiert. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftarten-Fallback auftreten kann.

Die Lesbarkeit kann ein Problem werden, wenn die erstgewählte {{ Cssxref("font-family") }} nicht verfügbar ist und die Ersatz-Schriftart einen deutlich unterschiedlichen Aspektwert hat (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße). Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird eher durch die Größe der Kleinbuchstaben als durch die Größe der Großbuchstaben bestimmt. Die `font-size-adjust`-Eigenschaft ist nützlich, um die Schriftgröße von Ersatz-Schriftarten anzupassen, um den Aspektwert über Schriftarten hinweg konsistent zu halten, wodurch der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

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

Die `font-size-adjust`-Eigenschaft kann als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte annehmen.

- `none`
  - : Es wird keine Anpassung auf den `font-size`-Wert für die Ersatz-Schriftart angewendet.
- `<font-metric>` {{optional_inline}}
  - : Gibt das erstgewählte Schriftmaß an, das zur Anpassung der Schriftgröße der Ersatz-Schriftart verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn kein `<font-metric>` angegeben ist.
    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Größe der Ersatz-Schriftart anzupassen. Mit diesem Schlüsselwort wird die Normierung von Kleinbuchstaben über Schriftarten hinweg umgesetzt.
    - `cap-height`
      - : Verwendet das Verhältnis der Großbuchstabenhöhe zur Schriftgröße, um die Ersatz-Schriftgröße anzupassen. Mit diesem Schlüsselwort wird die Normierung von Großbuchstaben über Schriftarten hinweg umgesetzt.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorschubbreite (horizontaler Raum, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "0" (NULL, U+0030) zur Schriftgröße. Mit diesem Schlüsselwort wird die Normierung der horizontalen engen Weite von Schriftarten umgesetzt.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorschubbreite des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Mit diesem Schlüsselwort wird die Normierung der horizontalen breiten Weite von Schriftarten umgesetzt, insbesondere bei solchen, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorschubhöhe (vertikaler Raum, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "水" (CJK-Wasser-Ideogramm, U+6C34) zur Schriftgröße. Mit diesem Schlüsselwort wird die Normierung der vertikalen breiten Weite von Schriftarten umgesetzt, insbesondere bei solchen, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}
  - : Passt die verwendete Schriftgröße abhängig vom angegebenen `<font-metric>` an. Wenn kein `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>`-Wert die Schriftgröße der Ersatz-Schriftart so an, dass ihre x-Höhe das angegebene Vielfache der Schriftgröße ist. Diesen Wert sollte im Allgemeinen dem Aspektwert (Verhältnis von x-Höhe zur Schriftgröße) der erstgewählten Schriftart entsprechen. Das bedeutet, dass die erstgewählte Schriftart, wenn verfügbar, konsistent in verschiedenen Browsern angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>`-Wert angegeben ist, passt der `<number>`-Wert die Schriftgröße gemäß dem gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für das spezifizierte Schriftmaß über verschiedene Schriftarten hinweg zu wahren.

    Der `<number>`-Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text mit einer Höhe von null (d.h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>`-Wert für das spezifizierte `<font-metric>` aus der ersten verfügbaren Schriftart.

## Beschreibung

Um die Kompatibilität mit Browsern zu gewährleisten, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}}-Eigenschaft spezifiziert. Diese Zahl sollte im Allgemeinen dem Aspektwert der erstgewählten Schriftart entsprechen.

> [!NOTE]
> Wenn das angegebene `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust)-Descriptors, wird das überschriebenen Maß im `font-size-adjust`-Berechnung verwendet. Das bedeutet, dass wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden, `size-adjust` keine Wirkung hat.

Die angepasste Schriftgröße wird mit der Formel `u = ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis des spezifizierten `<font-metric>` zur erstgewählten Schriftgröße ist.

- `m′` das Verhältnis des entsprechenden `<font-metric>` zur Ersatz-Schriftgröße ist.

- `s` der Wert der `font-size`-Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatz-Schriftart ist.

Betrachten Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine erstgewählte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das `cap-height` zur Schriftgröße-Verhältnis in der Ersatz-Schriftart ist `0.15` (`m′`). Der `font-size-adjust`-Wert wurde als `cap-height 0.20` angegeben. Wenn die primäre Schriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatz-Schriftart als `16px` (`(0.20 / 0.15) * 12`) berechnet. Dies stellt sicher, dass die `cap-height` der Ersatz-Schriftart der der erstgewählten Schrift entspricht, wenn sie angezeigt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust`-Eigenschaft verwendet werden kann, um denselben Aspektwert über Schriftarten hinweg beizubehalten. Die Schriftart Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu den Großbuchstaben relativ hoch sind. Dadurch erscheint der Text in kleinen Schriftgrößen lesbar. Allerdings hat die Schriftart Times einen niedrigeren Aspektwert von `0.447`, so dass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die erstgewählte Schriftart und Times die Ersatz-Schriftart ist, kann die Spezifikation der `font-size-adjust`-Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schriftart auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es mit Verdana der Fall gewesen wäre.

Ähnlich ist das Verhältnis von Großbuchstabenhöhe zur Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust`-Eigenschaft auf Times angewendet wird, um seine Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schriftart in angepasster Schriftgröße ((0.73 / 0.66) \* 14) `15.48px` angezeigt.

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

{{ EmbedLiveSample('Normalisierung der Schriftgröße durch Klein- und Großbuchstaben', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schriftart zur Times-Schriftart zu einem merklichen Rückgang der Lesbarkeit führen, aufgrund ihres niedrigeren Aspektwerts. In `C` wird bemerkt, dass nur ein Wert für die `font-size-adjust`-Eigenschaft angegeben ist, so dass der Standard-`<font-metric>`-Wert `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst ist.

### Bestimmung des Aspektwerts einer Schriftart

Für eine gegebene Schriftart kann derselbe Inhalt in zwei nebeneinander stehenden [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Elementen verwendet werden, um den Aspektwert der Schriftart zu bestimmen. Wenn dieselbe Schriftgröße für den Inhalt in beiden Bereichen verwendet wird, stimmen die Bereiche überein, wenn der `font-size-adjust`-Wert in einem Bereich für die gegebene Schriftart korrekt ist.

Im folgenden Beispiel gibt es drei Paare von nebeneinander liegenden `<span>`-Elementen, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust`-Eigenschaft für das rechte `<span>` in jedem Paar anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust`-Wert kann als Aspektwert für die Schriftart angesehen werden.

Beginnend bei `0.6` im ersten Paar und Anpassung auf `0.5` im zweiten, passen wir weiterhin den `font-size-adjust`-Eigenschaftswert an, bis die Ränder um die "b" Buchstaben im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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
  font-family: Futura, sans-serif;
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
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` Deskriptor
- SVG {{SVGAttr("font-size-adjust")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
