---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenrelativen {{cssxref("&lt;length&gt;")}} Einheiten wie `em`, `ex` usw.

{{InteractiveExample("CSS Demo: font-size")}}

```css interactive-example-choice
font-size: 1.2rem;
```

```css interactive-example-choice
font-size: x-small;
```

```css interactive-example-choice
font-size: smaller;
```

```css interactive-example-choice
font-size: 12px;
```

```css interactive-example-choice
font-size: 80%;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

## Syntax

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8em;

/* <percentage> values */
font-size: 80%;

/* math value */
font-size: math;

/* Global values */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Werte

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

  - : [Absolute Größen](/de/docs/Web/CSS/absolute-size)-Schlüsselwörter, basierend auf der Standard-Schriftgröße des Nutzers (welche `medium` ist).

- `larger`, `smaller`

  - : [Relative Größen](/de/docs/Web/CSS/relative-size)-Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des übergeordneten Elements größer oder kleiner sein, ungefähr im Verhältnis zu den oben genannten absoluten Größen.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftgrößenrelativen Einheiten (wie z. B. `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des übergeordneten Elements.

    Für root-basierte, schriftgrößenrelative Einheiten (wie `rem`) ist die Schriftgröße relativ zur Größe der Schrift, die das {{HTMLElement("html")}} (root) Element verwendet.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des übergeordneten Elements.
    > [!NOTE]
    > Um die Zugänglichkeit zu maximieren, ist es generell am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Nutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size`-Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen übergeordneten Elements ermittelt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth)-Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt verschiedene Möglichkeiten, die Schriftgröße festzulegen, darunter Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Schriftgröße im Web festzulegen. Durch das Setzen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}}-Element können Sie relative Schriftgrößen überall sonst auf der Seite festlegen, was Ihnen die Möglichkeit gibt, die Schriftgröße auf der gesamten Seite einfach zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Methode, den Browsern buchstäblich zu sagen, die Buchstaben mit genau der angegebenen Anzahl von Pixeln in der Höhe darzustellen. Die Ergebnisse können zwischen den Browsern leicht variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schrifteinstellungskonfigurationen können auch in Kombination verwendet werden. Wenn beispielsweise das übergeordnete Element auf `16px` eingestellt ist und das Kind-Element auf `larger`, wird das Kind-Element auf der Seite größer als das übergeordnete Element angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer in einigen Browsern die Schriftgröße nicht ändern kann. Zum Beispiel möchten Benutzer mit eingeschränkter Sehkraft die Schriftgröße möglicherweise viel größer einstellen, als sie der Webdesigner gewählt hat. Vermeiden Sie deren Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Wertes erstellt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit aus der Breite eines Großbuchstabens "M" in einer bestimmten Schriftart abgeleitet). Der numerische Wert fungiert als Multiplikator für die `font-size`-Eigenschaft des Elements, auf dem sie verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>`-Elemente das Doppelte der berechneten `font-size` sein, die von den `<p>`-Elementen geerbt wird. Damit entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wurde auf keinem der Vorfahren der `<p>`-Elemente eine `font-size` festgelegt, entspricht `1em` der Standard-Schriftgröße des Browsers, die normalerweise `16px` beträgt. Somit entspricht `1em` standardmäßig `16px` und `2em` entspricht `32px`. Wenn Sie zum Beispiel eine `font-size` von 20px auf dem `<body>`-Element festlegen, würde `1em` auf den `<p>`-Elementen stattdessen `20px` entsprechen und `2em` `40px`.

Um das `em` Äquivalent für jeden erforderlichen Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` beträgt, dann sollten Sie `0.75em` angeben (da 12/16 = 0.75). Ähnlich, wenn Sie eine Schriftgröße von `10px` wünschen, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit im CSS, da sie ihre Länge automatisch relativ zu der Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Punkt, den man beachten sollte: em-Werte addieren sich. Betrachten Sie das folgende HTML und CSS:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

Das Ergebnis ist:

{{EmbedLiveSample("Ems", 400, 100)}}

Unter der Annahme, dass die Standard-`font-size` des Browsers `16px` ist, würden die Wörter "outer" bei `25.6px` gerendert, aber das Wort "inner" würde bei `40.96px` gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em ist, die relativ zur `font-size` seines Elternteils ist, das wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Kompostierung** bezeichnet.

### Rems

`rem` Werte wurden erfunden, um das Kompostierungsproblem zu umgehen. `rem` Werte sind relativ zu dem `html`-Element, nicht dem übergeordneten Element. Mit anderen Worten, damit können Sie eine Schriftgröße auf relative Weise festlegen, ohne von der Größe des übergeordneten Elements beeinflusst zu werden, wodurch die Kompostierung eliminiert wird.

Das unten stehende CSS ist fast identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf das gleiche HTML an, das so aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle bei `25.6px` angezeigt (vorausgesetzt, dass die `font-size` des Browsers auf dem Standardwert von `16px` belassen wurde).

### Ex

Wie die `em`-Einheit wird auch die `font-size` eines Elements, das mit der `ex`-Einheit festgelegt wird, berechnet oder ist dynamisch. Sie verhält sich genau auf die gleiche Weise, außer dass beim Festlegen der `font-size`-Eigenschaft unter Verwendung von `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements und die `font-size` wird relativ addiert.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftgrößenrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen festlegen

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### Ergebnis

{{EmbedLiveSample('Setting_font_sizes', 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- SVG {{SVGAttr("font-size")}} Attribut
- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
