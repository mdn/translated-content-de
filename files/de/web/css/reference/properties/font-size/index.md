---
title: "`font-size` CSS property"
short-title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, wie `em`, `ex` und so weiter.

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
  - : [Absolute Size](/de/docs/Web/CSS/Reference/Values/absolute-size) Schlüsselwörter, basierend auf der Standardschriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`
  - : [Relative Size](/de/docs/Web/CSS/Reference/Values/relative-size) Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des übergeordneten Elements größer oder kleiner sein, ungefähr im Verhältnis, das verwendet wird, um die oben genannten absoluten Größen-Schlüsselwörter zu trennen.

- {{cssxref("&lt;length&gt;")}}
  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des übergeordneten Elements.

    Für schriftgrößenrelative Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Schriftgröße des im {{HTMLElement("html")}} (Wurzel) Element verwendeten Schrifttyps.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des übergeordneten Elements.
    > [!NOTE]
    > Um maximale Zugänglichkeit zu gewährleisten, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenden Elternteils bestimmt wird.
    Weitere Informationen finden Sie in der [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) Eigenschaft.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Indem Sie eine Schlüsselwort-Schriftgröße im {{HTMLElement("body")}} Element festlegen, können Sie eine relative Schriftgrößenänderung überall auf der Seite einstellen, was Ihnen die Möglichkeit gibt, die Schrift auf der gesamten Seite leicht nach oben oder unten zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Art, den Browsern buchstäblich mitzuteilen, die Buchstaben genau in der von Ihnen angegebenen Pixelhöhe darzustellen. Die Ergebnisse können geringfügig zwischen Browsern variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Wenn zum Beispiel ein übergeordnetes Element auf `16px` und sein Kindelement auf `larger` eingestellt ist, wird das Kindelement auf der Seite größer als das übergeordnete Element dargestellt.

> [!NOTE]
> Die Definition von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Benutzer mit eingeschränktem Sehvermögen möchten die Schriftgröße möglicherweise viel größer einstellen als die vom Webdesigner gewählte Größe. Vermeiden Sie die Verwendung davon für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit aus der Breite eines großen "M" in einem bestimmten Schriftbild abgeleitet). Der numerische Wert fungiert als Multiplikator der `font-size` Eigenschaft des Elements, auf dem sie verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>`-Elemente doppelt so groß sein wie die berechnete `font-size`, die von `<p>`-Elementen geerbt wird. Um im Weiteren eine `font-size` von `1em` festzulegen, entspricht diese der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn auf keinen der Vorfahren des `<p>` eine `font-size` festgelegt wurde, entspricht `1em` der Standardschriftgröße des Browsers, die normalerweise `16px` beträgt. Standardmäßig ist `1em` also gleichbedeutend mit `16px`, und `2em` ist gleichbedeutend mit `32px`. Wenn Sie beispielsweise eine `font-size` von 20px im `<body>`-Element festlegen würden, dann wäre `1em` auf den `<p>`-Elementen stattdessen gleichbedeutend mit `20px`, und `2em` wäre gleichbedeutend mit `40px`.

Um das äquivalente `em` für jeden erforderlichen Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` beträgt, dann sollten Sie `0.75em` angeben (weil 12/16 = 0,75). Wenn Sie eine Schriftgröße von `10px` wünschen, geben Sie `0.625em` an (10/16 = 0,625); für `22px` geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da sie automatisch ihre Länge relativ zur Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Punkt, den Sie im Auge behalten sollten: em-Werte kumulieren sich. Betrachten Sie das folgende HTML und CSS:

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

Unter der Annahme, dass die Standardschriftgröße des Browsers 16px beträgt, würden die Wörter "outer" mit 25.6px, aber das Wort "inner" mit 40.96px dargestellt. Das liegt daran, dass der `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, die wiederum relativ zur `font-size` ihres Elternteils ist. Dies wird oft als **Kumulierung** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Kumulierungsproblem zu umgehen. `rem`-Werte sind relativ zum `html`-Root-Element, nicht zum Eltern-Element. Mit anderen Worten, sie ermöglichen es Ihnen, eine Schriftgröße auf relative Weise anzugeben, ohne von der Größe des Eltern-Elements beeinflusst zu werden, wodurch die Kumulierung entfällt.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf das gleiche HTML an, das folgendermaßen aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle mit 25.6px angezeigt (unter der Annahme, dass die `font-size` des Browsers auf den Standardwert von 16px belassen wurde).

### Ex

Wie die `em`-Einheit wird ein Element mit `font-size`, wenn es die `ex`-Einheit verwendet, berechnet oder dynamisch eingestellt. Sie verhält sich genauso, außer dass bei der Festlegung der `font-size`-Eigenschaft mithilfe von `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) auf der Seite entspricht. Der Zahlenwert multipliziert die vom Element geerbte `font-size` und die `font-size` kumuliert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung von [schriftgrößenbezogenen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
