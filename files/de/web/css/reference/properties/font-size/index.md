---
title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schrift fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößenrelativen {{cssxref("&lt;length&gt;")}} Einheiten, wie zum Beispiel `em` und `ex` und weitere.

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
  - : [Absolute-Size](/de/docs/Web/CSS/Reference/Values/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Benutzers (welche `medium` ist).

- `larger`, `smaller`
  - : [Relative-Size](/de/docs/Web/CSS/Reference/Values/relative-size) Schlüsselwörter. Die Schrift wird größer oder kleiner relativ zur Schriftgröße des Elternelements, ungefähr im Verhältnis der oben genannten absoluten Größen.

- {{cssxref("&lt;length&gt;")}}
  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftrelativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Bei schriftrelativen Einheiten, die auf der Wurzel basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schrift, die vom {{HTMLElement("html")}} (Root) Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird.
    Weitere Informationen finden Sie in der [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) Eigenschaft.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörtern oder Zahlenwerten für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Durch das Setzen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}} Element können Sie eine relative Schriftgrößenfestlegung überall auf der Seite einrichten, sodass Sie die Schriftgröße auf der gesamten Seite leicht skalieren können.

### Pixel

Die Festlegung der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Methode, um den Browsern buchstäblich mitzuteilen, dass sie die Buchstaben genau in der angegebenen Anzahl von Pixeln in der Höhe wiedergeben sollen. Die Ergebnisse können leicht variieren, da die Browser möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Zum Beispiel, wenn ein Elternelement auf `16px` festgelegt ist und sein Kindelement auf `larger`, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer in einigen Browsern die Schriftgröße nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränktem Sehvermögen die Schriftgröße möglicherweise viel größer einstellen als die von einem Webdesigner gewählte Größe. Vermeiden Sie sie für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em` Wertes erstellt eine dynamische oder berechnete Schriftgröße (historisch wurde die Einheit `em` von der Breite eines Großbuchstabens "M" in einem bestimmten Schriftschnitt abgeleitet). Der numerische Wert fungiert als Multiplikator der `font-size` Eigenschaft des Elements, auf dem es verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>` Elemente doppelt so groß sein wie die berechnete `font-size`, die von `<p>` Elementen geerbt wird. In der Erweiterung entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem es verwendet wird.

Wenn auf keinen der Vorfahren der `<p>`-Elemente eine `font-size` festgelegt wurde, dann entspricht `1em` der Standard-Browser-`font-size`, die normalerweise `16px` beträgt. Standardmäßig ist also `1em` gleich `16px`, und `2em` ist gleich `32px`. Wenn Sie beispielsweise eine `font-size` von 20px auf dem `<body>`-Element festlegen, würde `1em` auf den `<p>`-Elementen stattdessen `20px` entsprechen, und `2em` wäre `40px` gleich.

Um das `em`-Äquivalent für einen beliebigen erforderlichen Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` ist, sollten Sie `0.75em` angeben (weil 12/16 = 0.75). Ebenso sollten Sie, wenn Sie eine Schriftgröße von `10px` wünschen, `0.625em` angeben (10/16 = 0.625); für `22px` geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zur Schrift anpasst, die der Leser zu verwenden beschließt.

Ein wichtiger Aspekt, den Sie beachten sollten: em-Werte kumulieren sich. Nehmen Sie folgendes HTML und CSS:

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

Unter der Annahme, dass die Standard-`font-size` des Browsers 16px beträgt, würden die Wörter "outer" bei 25.6px gerendert werden, aber das Wort "inner" würde bei 40.96px gerendert werden. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, welches wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Verkettung** bezeichnet.

### Rems

`rem` Werte wurden erfunden, um das Problem der Verkettung zu umgehen. `rem` Werte sind relativ zum Wurzel-`html`-Element, nicht zum Elternelement. Mit anderen Worten, sie ermöglichen es Ihnen, eine Schriftgröße relativ anzugeben, ohne von der Größe des Elternteils beeinflusst zu werden, was die Verkettung beseitigt.

Das folgende CSS ist nahezu identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit auf `rem` geändert wurde.

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

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25.6px angezeigt (vorausgesetzt, dass die `font-size` des Browsers auf dem Standardwert von 16px belassen wurde).

### Ex

Wie die Einheit `em` wird eine `font-size`, die mit der Einheit `ex` festgelegt wird, berechnet oder dynamisch bestimmt. Sie verhält sich auf genau dieselbe Weise, außer dass die `font-size` bei Verwendung von `ex`-Einheiten der x-Höhe der [ersten verfügbaren Schrift](https://drafts.csswg.org/css-fonts/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements und die `font-size` kumuliert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftgrößenrelativen Maßeinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- [Lernen: Grundlegende Text- und Schrift-Stilisierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
