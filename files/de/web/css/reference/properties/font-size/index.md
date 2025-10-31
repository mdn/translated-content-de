---
title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenabhängigen {{cssxref("&lt;length&gt;")}} Einheiten wie `em`, `ex` und so weiter.

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
  - : [Schlüsselwörter für absolute Größen](/de/docs/Web/CSS/absolute-size), basierend auf der Standardschriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`
  - : [Relative Größen](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird größer oder kleiner im Verhältnis zur Schriftgröße des übergeordneten Elements, ungefähr im Verhältnis, das zur Trennung der absoluten Größen-Schlüsselwörter oben verwendet wird.

- {{cssxref("&lt;length&gt;")}}
  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des übergeordneten Elements.

    Bei schriftgrößenbezogenen Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schrift, die vom {{HTMLElement("html")}} (Wurzel-)Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des übergeordneten Elements.
    > [!NOTE]
    > Um die Zugänglichkeit zu maximieren, ist es generell am besten, Werte zu verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße festzulegen, darunter Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Durch das Festlegen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}} Element können Sie relative Schriftgrößen überall auf der Seite festlegen, wodurch Sie die Möglichkeit haben, die Schrift auf der gesamten Seite entsprechend zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Genauigkeit in Pixeln benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Möglichkeit, Browsern buchstäblich mitzuteilen, dass die Buchstaben genau in der von Ihnen angegebenen Pixelhöhe gerendert werden sollen. Die Ergebnisse können leicht von Browser zu Browser variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Einstellungen der Schriftgrößen können auch in Kombination verwendet werden. Wenn zum Beispiel ein Elternelement auf `16px` gesetzt ist und sein Kindelement auf `larger` gesetzt ist, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, weil der Benutzer in einigen Browsern die Schriftgröße nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränkter Sicht möglicherweise die Schriftgröße viel größer einstellen als die vom Webdesigner gewählte Größe. Vermeiden Sie deren Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit aus der Breite eines Großbuchstabens "M" in einem gegebenen Schriftbild abgeleitet). Der numerische Wert fungiert als Multiplikator der `font-size` Eigenschaft des Elements, auf dem er verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>`-Elemente das Doppelte der berechneten `font-size` sein, die von `<p>`-Elementen geerbt wird. Im weiteren Sinne entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn auf keinem der Vorfahren des `<p>` eine `font-size` festgelegt wurde, entspricht `1em` der Standardschriftgröße des Browsers, die normalerweise `16px` beträgt. Somit entspricht standardmäßig `1em` 16px und `2em` 32px. Wenn Sie zum Beispiel eine `font-size` von 20px für das `<body>`-Element festlegen, würde `1em` auf den `<p>`-Elementen stattdessen 20px entsprechen und `2em` würde 40px entsprechen.

Um das `em`-Äquivalent für einen beliebigen benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` gesetzt. Wenn die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (weil 12/16 = 0.75). Ebenso, wenn Sie eine Schriftgröße von `10px` möchten, geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Der `em` ist eine sehr nützliche Einheit in CSS, da er automatisch seine Länge relativ zur Schrift anpasst, die der Leser zu verwenden wählt.

Ein wichtiger Punkt, den Sie beachten sollten: em-Werte kumulieren sich. Betrachten Sie folgenden HTML- und CSS-Code:

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

Angenommen, die Standardschriftgröße des Browsers beträgt 16px, würden die Worte "outer" mit 25.6px gerendert, aber das Wort "inner" würde mit 40.96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt und relativ zur `font-size` seines Elternteils ist, die wiederum relativ zur `font-size` ihres Elternteils ist. Dies wird oft als **Kumulierung** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Problem der Kumulierung zu umgehen. `rem`-Werte beziehen sich auf das Wurzelelement `html`, nicht auf das Elternelement. Mit anderen Worten, es ermöglicht Ihnen, eine Schriftgröße in relativer Weise festzulegen, ohne von der Größe des Elternteils beeinflusst zu werden, was die Kumulierung beseitigt.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit auf `rem` geändert wurde.

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

In diesem Beispiel werden die Wörter "outer inner outer" alle mit 25.6px angezeigt (angenommen, die `font-size` des Browsers wurde auf den Standardwert von 16px belassen).

### Ex

Wie die `em`-Einheit wird die `font-size` eines Elements, das mit der `ex`-Einheit eingestellt wurde, berechnet oder ist dynamisch. Sie verhält sich genau gleich, außer dass, wenn die `font-size` Eigenschaft mit `ex`-Einheiten festgelegt wird, die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die `font-size` des geerbten Elements und die `font-size` kumuliert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung von [Schriftrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- [Lernen: Grundlegende Text- und Schriftstilgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
