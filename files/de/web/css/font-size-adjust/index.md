---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-size-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, die Größe von Kleinbuchstaben relativ zur Größe von Großbuchstaben anzupassen, was die insgesamt definierte {{cssxref("font-size")}} beeinflusst. Diese Eigenschaft ist nützlich in Situationen, in denen ein Schriftartenwechsel stattfinden kann.

Die Lesbarkeit kann problematisch werden, wenn die bevorzugte {{cssxref("font-family")}} nicht verfügbar ist und die alternative Ersatzschriftart einen signifikant anderen Aspektwert (Höhe der Kleinbuchstaben geteilt durch die Schriftgröße) aufweist. Die Lesbarkeit von Schriftarten, insbesondere bei kleinen Schriftgrößen, wird mehr von der Größe der Kleinbuchstaben als von der Größe der Großbuchstaben bestimmt. Die `font-size-adjust` Eigenschaft ist nützlich, um die Schriftgröße von Ersatzschriftarten anzupassen, um den Aspektwert über Schriftarten hinweg konsistent zu halten, um sicherzustellen, dass der Text unabhängig von der verwendeten Schriftart ähnlich erscheint.

## Syntax

```css
/* Schlüsselwort */
font-size-adjust: none;

/* Ein Wert: <number> oder from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* Zwei Werte */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;

/* Globale Werte */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

### Werte

Die `font-size-adjust` Eigenschaft akzeptiert als Wert das Schlüsselwort `none`, einen (`<number>` oder `from-font`), oder zwei (`<font-metric>` und entweder `<number>` oder `from-font`) Werte.

- `none`
  - : Es wird keine Anpassung an den `font-size` Wert für die Ersatzschriftart vorgenommen.
- `<font-metric>` {{optional_inline}}

  - : Gibt die bevorzugte Schriftmetrik an, die zur Anpassung der Schriftgröße der Ersatzschriftart verwendet werden soll. Dieser Parameter akzeptiert eines der unten aufgeführten Schlüsselwörter. Es ist ein optionaler Parameter, und `ex-height` wird verwendet, wenn keine `<font-metric>` angegeben ist.

    - `ex-height`
      - : Verwendet das Verhältnis der x-Höhe (Höhe des Kleinbuchstabens "x" in einer Schriftart) zur Schriftgröße (Aspektwert), um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Kleinbuchstaben über Schriftarten hinweg zu normalisieren.
    - `cap-height`
      - : Verwendet das Verhältnis der Cap-Höhe (Höhe der Großbuchstaben) zur Schriftgröße, um die Ersatzschriftgröße anzupassen. Dieser Schlüsselwortwert wird verwendet, um Großbuchstaben über Schriftarten hinweg zu normalisieren.
    - `ch-width`
      - : Verwendet das Verhältnis der Vorschubreite (horizontaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "0" (ZERO, U+0030) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine schmale horizontale Neigung von Schriftarten zu normalisieren.
    - `ic-width`
      - : Verwendet das Verhältnis der Vorschubreite des Zeichens "水" (CJK-Wasser-Ideograph, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine breite horizontale Neigung von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen (Chinesisch, Japanisch, Koreanisch) enthalten.
    - `ic-height`
      - : Verwendet das Verhältnis der Vorschubhöhe (vertikaler Platz, den ein Zeichen in einer Schriftart einnimmt) des Zeichens "水" (CJK-Wasser-Ideograph, U+6C34) zur Schriftgröße. Dieser Schlüsselwortwert wird verwendet, um eine breite vertikale Neigung von Schriftarten zu normalisieren, insbesondere solche, die CJK-Zeichen enthalten.

- {{cssxref("&lt;number&gt;")}}

  - : Passt die verwendete Schriftgröße entsprechend der angegebenen `<font-metric>` an. Wenn keine `<font-metric>` angegeben ist (in diesem Fall wird der Standardwert `ex-height` verwendet), passt der `<number>` Wert die Schriftgröße der Ersatzschrift so an, dass die x-Höhe das angegebene Vielfache der Schriftgröße beträgt. Dieser Wert sollte im Allgemeinen dem Aspektwert (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten Schrift entsprechen. Das bedeutet, dass die erste Wahl der Schriftart, wenn verfügbar, über verschiedene Browser hinweg konsistent angezeigt wird, unabhängig von deren Unterstützung für `font-size-adjust`.

    Wenn ein `<font-metric>` Wert angegeben ist, passt der `<number>` Wert die Schriftgröße gemäß der gewählten `<font-metric>` an, um ein konsistentes Erscheinungsbild für die spezifizierte Schriftmetrik über verschiedene Schriftarten hinweg zu gewährleisten.

    Der `<number>` Wert akzeptiert jede Zahl von `0` bis unendlich. `0` ergibt Text ohne Höhe (d. h. der Text ist verborgen). Negative Werte sind ungültig.

- `from-font`
  - : Verwendet den `<number>` Wert für die angegebene `<font-metric>` aus der ersten verfügbaren Schrift.

## Beschreibung

Um die Kompatibilität mit Browsern sicherzustellen, die `font-size-adjust` nicht unterstützen, wird diese Eigenschaft als numerischer Multiplikator der {{cssxref("font-size")}} Eigenschaft angegeben. Diese Zahl sollte im Allgemeinen dem Aspektwert der bevorzugten Schrift entsprechen.

> [!NOTE]
> Wenn die spezifizierte `<font-metric>` in [`@font-face`](/de/docs/Web/CSS/@font-face) überschrieben wurde, z. B. durch die Verwendung des [`size-adjust`](/de/docs/Web/CSS/@font-face/size-adjust) Deskriptors, wird die überschriebenen Metik in der `font-size-adjust` Berechnung verwendet. Dies bedeutet, dass `size-adjust` keine Wirkung hat, wenn `font-size-adjust` und `size-adjust` zusammen angewendet werden.

Die angepasste Schriftgröße wird mit der Formel `u  =  ( m / m′ ) s` berechnet, wobei:

- `m` das Verhältnis der angegebenen `<font-metric>` zur bevorzugten Schriftgröße ist.

- `m′` das Verhältnis der entsprechenden `<font-metric>` zur Ersatzschriftgröße ist.

- `s` der Wert der `font-size` Eigenschaft ist.

- `u` die neue, angepasste Schriftgröße für die Ersatzschrift ist.

Nehmen Sie dieses Beispiel, um zu sehen, wie die angepasste Schriftgröße berechnet wird. Eine bevorzugte Schriftart hat eine `font-size` von `12px` (`s`), und das Verhältnis von `cap-height` zur Schriftgröße ist `0.20` (`m`). Das Verhältnis von `cap-height` zur Schriftgröße in der Ersatzschrift ist `0.15` (`m′`). Der `font-size-adjust` Wert wurde als `cap-height 0.20` angegeben. Wenn die Hauptschriftart nicht verfügbar ist, wird die angepasste Schriftgröße der Ersatzschrift zu `16px` berechnet (`(0.20 / 0.15) * 12`). Durch diese Berechnung wird sichergestellt, dass die `cap-height` der Ersatzschrift der bevorzugten Schriftart beim Anzeigen ähnlich ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normalisierung der Schriftgröße durch Klein- und Großbuchstaben

Dieses Beispiel zeigt, wie die `font-size-adjust` Eigenschaft verwendet werden kann, um den gleichen Aspektwert über Schriftarten hinweg beizubehalten. Die Schrift Verdana hat einen relativ hohen Aspektwert von `0.545`, was bedeutet, dass die Kleinbuchstaben im Vergleich zu Großbuchstaben relativ hoch sind. Dadurch wird der Text auch bei kleinen Schriftgrößen gut lesbar. Die Times-Schrift hat jedoch einen niedrigeren Aspektwert von `0.447`, sodass der Text bei kleinen Größen weniger lesbar ist. Wenn Verdana die bevorzugte Schriftart und Times die Ersatzschrift ist, kann die Angabe der `font-size-adjust` Eigenschaft helfen, den gleichen Aspektwert in Times beizubehalten. Wenn die Schrift auf Times zurückfällt, wird der Text ein ähnliches Maß an Lesbarkeit beibehalten, wie es mit Verdana der Fall gewesen wäre.

Ebenso ist das Verhältnis von Cap-Höhe zu Schriftgröße in Verdana `0.73` und in Times `0.66`. Wenn die `font-size-adjust` Eigenschaft auf Times angewendet wird, um ihre Großbuchstaben an das Verhältnis in Verdana anzupassen, wird die Times-Schrift in einer angepassten Schriftgröße angezeigt ((0.73 / 0.66) \* 14) `15.48px`.

```html
<p class="verdana">
  A: Dieser Text verwendet die Verdana-Schrift (14px), die relativ große
  Kleinbuchstaben hat.
</p>
<p class="times">
  B: Dieser Text verwendet die Times-Schrift (14px), die bei kleinen Größen schwer
  lesbar ist.
</p>
<p class="times adjtimesexheight">
  C: Dieser Text in 14px Times-Schrift wird so angepasst, dass er den gleichen
  Aspektwert wie die Verdana-Schrift hat, sodass Kleinbuchstaben bei beiden
  Schriften normalisiert werden.
</p>
<p class="times adjtimescapheight">
  D: Dieser Text in 14px Times-Schrift wird an das gleiche Verhältnis von
  Cap-Höhe zu Schriftgröße wie die Verdana-Schrift angepasst, sodass
  Großbuchstaben bei beiden Schriften normalisiert werden.
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

{{ EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

Ohne `font-size-adjust` in `B` könnte der Wechsel von der Verdana-Schrift zur Times-Schrift aufgrund ihres geringeren Aspektwerts zu einem spürbaren Rückgang der Lesbarkeit führen.
In `C` wird lediglich ein Wert für die `font-size-adjust` Eigenschaft angegeben, sodass der Standardwert `<font-metric>` als `ex-height` verwendet wird. `D` zeigt, wie die Schrift im Vergleich zu `A` aussehen würde, wenn ihre Großbuchstabenhöhe angepasst wird.

### Bestimmung des Aspektwerts einer Schrift

Für eine bestimmte Schriftart kann derselbe Inhalt in zwei nebeneinander angeordneten [`<span>`](/de/docs/Web/HTML/Element/span) Elementen verwendet werden, um den Aspektwert der Schrift festzustellen. Wenn in beiden Spans dieselbe Schriftgröße verwendet wird, stimmen die Spans überein, wenn der `font-size-adjust` Wert in einem Span für die gegebene Schriftart genau ist.

Im folgenden Beispiel gibt es drei Paare nebeneinander angeordneter `<span>` Elemente, die jeweils den Buchstaben "b" enthalten. Das Ziel ist es, die `font-size-adjust` Eigenschaft für das rechte `<span>` in jedem Paar so lange anzupassen, bis die Ränder um die beiden Buchstaben ausgerichtet sind. Der resultierende `font-size-adjust` Wert kann als Aspektwert für die Schrift betrachtet werden.

Beim ersten Paar beginnen wir bei `0.6` und passen beim zweiten Paar auf `0.5` an, bis die Ränder um die Buchstaben "b" im dritten Paar perfekt ausgerichtet sind. In diesem Beispiel wird der Aspektwert auf `0.482` bestimmt.

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
- [Grundlegende Text- und Schriftgestaltungsgrundlagen lernen](/de/docs/Learn/CSS/Styling_text/Fundamentals)
