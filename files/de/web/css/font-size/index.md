---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schriftart fest. Eine Änderung der Schriftgröße aktualisiert auch die Größen der schriftgrößen-relativen {{cssxref("&lt;length&gt;")}} Einheiten, wie `em`, `ex` und so weiter.

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

  - : [Absolute size](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Benutzers (was `medium` ist).

- `larger`, `smaller`

  - : [Relative size](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des Eltern-Elements größer oder kleiner, ungefähr im Verhältnis der oben angegebenen Absolutgrößen-Schlüsselwörter.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Bei den meisten schriftgrößen-relativen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Eltern-Elements.

    Bei schriftgrößen-relativen Einheiten, die auf dem Stamm basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schriftart, die vom {{HTMLElement("html")}} (Stamm-)Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Eltern-Elements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt mehrere Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörter oder numerischer Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriftarten im Web festzulegen. Durch das Setzen einer Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}} Element können Sie überall sonst auf der Seite relative Schriftgrößen festlegen und die Schrift einfach entsprechend skalieren.

### Pixel

Die Angabe der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn pixelgenaue Genauigkeit erforderlich ist. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und plattformübergreifende Möglichkeit, die Browser buchstäblich anzuweisen, die Buchstaben exakt mit der von Ihnen angegebenen Anzahl an Pixeln in der Höhe darzustellen. Die Ergebnisse können sich geringfügig zwischen Browsern unterscheiden, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Zum Beispiel, wenn ein Eltern-Element auf `16px` eingestellt ist und sein Kindelement auf `larger`, wird das Kindelement größer als das Eltern-Element auf der Seite angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht zugänglich](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränktem Sehvermögen möglicherweise die Schriftgröße viel größer einstellen als die von einem Webdesigner gewählte Größe. Vermeiden Sie deren Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em` Wertes erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em` Einheit aus der Breite eines großen "M" in einer bestimmten Schriftart abgeleitet.). Der Zahlenwert wirkt als Multiplikator der `font-size` Eigenschaft des Elements, auf dem er verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>` Elemente das Doppelte der berechneten `font-size` sein, die von `<p>` Elementen geerbt wird. Im erweiterten Sinne entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem es verwendet wird.

Wenn eine `font-size` auf keinem der Vorfahren der `<p>` Elemente festgelegt wurde, entspricht `1em` der standardmäßigen Browser `font-size`, die normalerweise `16px` beträgt. Also, standardmäßig entspricht `1em` 16px und `2em` entspricht 32px. Wenn Sie beispielsweise eine `font-size` von 20px auf dem `<body>` Element festlegen, dann würde `1em` auf den `<p>` Elementen stattdessen 20px entsprechen, und `2em` würde 40px entsprechen.

Um das `em` Äquivalent für jeden benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Beispielsweise, wenn die `font-size` des `<body>` der Seite auf `16px` eingestellt ist und Sie eine Schriftgröße von `12px` wünschen, sollten Sie `0.75em` angeben (weil 12/16 = 0.75). Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da es seine Länge automatisch relativ zu der Schriftart anpasst, die der Leser verwenden möchte.

Ein wichtiger Aspekt, den Sie beachten sollten: em-Werte addieren sich. Betrachten Sie das folgende HTML und CSS:

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

Das Resultat ist:

{{EmbedLiveSample("Ems", 400, 100)}}

Angenommen, die Standard-`font-size` des Browsers beträgt 16px, würden die Wörter "outer" bei 25.6px angezeigt werden, aber das Wort "inner" würde bei 40.96px angezeigt werden. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` seines Elternteils ist, die wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Verkettung** bezeichnet.

### Rems

`rem` Werte wurden entwickelt, um das Verkettungsproblem zu umgehen. `rem` Werte sind relativ zum Stamm`html` Element, nicht zum Elternelement. Mit anderen Worten, es ermöglicht Ihnen, eine Schriftgröße auf relative Weise anzugeben, ohne von der Größe des Elternteils beeinflusst zu werden, und so Verkettung zu vermeiden.

Das folgende CSS ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

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

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25.6px angezeigt (angenommen, die `font-size` des Browsers wurde auf den Standardwert von 16px belassen).

### Ex

Wie die `em` Einheit wird die `font-size` eines Elements, das mit der `ex` Einheit festgelegt wird, berechnet oder dynamisch. Sie verhält sich genau gleich, mit der Ausnahme, dass beim Festlegen der `font-size` Eigenschaft mit `ex` Einheiten, die `font-size` der x-Höhe der [erstverfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements und die `font-size` fügt sich relativ zusammen.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung von [schriftrelative Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
