---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößen-relativen {{cssxref("\<length>")}} Einheiten, wie `em`, `ex` und so weiter.

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
  - : [Absolutgröße](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`
  - : [Relativgröße](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des Elternelements größer oder kleiner sein, ungefähr im Verhältnis der oben genannten Absolutgrößen-Schlüsselwörter.

- {{cssxref("\<length>")}}
  - : Ein positiver {{cssxref("\<length>")}} Wert. Für die meisten schriftgrößen-relativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für schriftgrößen-relative Einheiten, die wurzelbasiert sind (wie `rem`), ist die Schriftgröße relativ zur Größe der Schrift, die vom {{HTMLElement("html")}} (Root-) Element verwendet wird.

- {{cssxref("\<percentage>")}}
  - : Ein positiver {{cssxref("\<percentage>")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Schriftgröße im Web festzulegen. Indem Sie eine Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}} Element festlegen, können Sie überall sonst auf der Seite eine relative Schriftgröße festlegen, wodurch Sie die Möglichkeit haben, die Schrift der gesamten Seite entsprechend einfach zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und plattformübergreifende Methode, um den Browsern buchstäblich zu sagen, die Buchstaben genau in der Höhe der angegebenen Pixelanzahl zu rendern. Die Ergebnisse können leicht zwischen Browsern variieren, da diese möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Zum Beispiel, wenn ein Elternelement auf `16px` und sein Kindelement auf `larger` gesetzt ist, wird das Kindelement größer als das Elternelement auf der Seite angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Zum Beispiel möchten Benutzer mit eingeschränktem Sehvermögen die Schriftgröße möglicherweise viel größer einstellen als die von einem Webdesigner gewählte Größe. Vermeiden Sie es, sie für Schriftgrößen zu verwenden, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em` Wertes erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit aus der Breite eines Großbuchstabens "M" in einem bestimmten Schriftbild abgeleitet). Der numerische Wert wirkt als Multiplikator der `font-size` Eigenschaft des Elements, auf dem es verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall ist die Schriftgröße der `<p>` Elemente doppelt so groß wie die berechnete `font-size`, die von `<p>` Elementen geerbt wird. Ein `font-size` von `1em` entspricht der berechneten `font-size` des Elements, auf dem es verwendet wird.

Wurde bei keinem der Vorfahren der `<p>` Elemente eine `font-size` eingestellt, entspricht `1em` der standardmäßigen Browser `font-size`, die normalerweise `16px` ist. Standardmäßig entspricht `1em` also `16px`, und `2em` entspricht `32px`. Wenn Sie zum Beispiel eine `font-size` von 20px auf dem `<body>` Element setzen, würde `1em` auf den `<p>` Elementen stattdessen `20px` entsprechen, und `2em` würde `40px` entsprechen.

Um das `em`-Äquivalent für einen bestimmten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (da 12/16 = 0.75). Ähnlich, wenn Sie eine Schriftgröße von `10px` möchten, dann geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zur Schrift anpasst, die der Leser wählt.

Ein wichtiger Punkt, den Sie beachten sollten: em-Werte werden kumulativ. Betrachten Sie das folgende HTML und CSS:

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

Angenommen, die Standard-`font-size` des Browsers ist 16px, würden die Wörter "outer" bei 25.6px, aber das Wort "inner" bei 40.96px dargestellt. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, welches wiederum relativ zur `font-size` seines Elternteils ist. Dies wird häufig als **Kumulierung** bezeichnet.

### Rems

`rem` Werte wurden erfunden, um das Problem der Kumulierung zu umgehen. `rem`-Werte sind relativ zum `html` Root-Element, nicht zum Elternelement. Mit anderen Worten, Sie können so eine Schriftgröße relativ angeben, ohne von der Größe des Elternteils beeinflusst zu werden, wodurch die Kumulierung eliminiert wird.

Der folgende CSS-Code ist fast identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf dasselbe HTML an, das so aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25.6px angezeigt (vorausgesetzt, die `font-size` des Browsers wurde auf den Standardwert von 16px belassen).

### Ex

Wie die `em`-Einheit wird die `font-size` eines Elements, das mit der `ex`-Einheit eingestellt ist, berechnet oder dynamisch. Sie verhält sich genau gleich, außer dass bei der Einstellung der `font-size`-Eigenschaft mittels `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) auf der Seite entspricht. Der Zahlenwert multipliziert die geerbte `font-size` des Elements und die `font-size` kumuliert relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftgrößenbezogene Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen einstellen

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
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
