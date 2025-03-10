---
title: font-size
slug: Web/CSS/font-size
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`font-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Schriftart fest. Durch Ändern der Schriftgröße werden auch die Größen der schriftgrößenabhängigen {{cssxref("&lt;length&gt;")}}-Einheiten, wie `em`, `ex` usw., aktualisiert.

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

  - : [Absolutgrößen-](/de/docs/Web/CSS/absolute-size) Schlüsselwörter, basierend auf der Standardschriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`

  - : [Relativgrößen-](/de/docs/Web/CSS/relative-size) Schlüsselwörter. Die Schrift wird im Vergleich zur Schriftgröße des Elternelements größer oder kleiner, ungefähr um das Verhältnis, das verwendet wird, um die oben genannten Absolutgröße-Schlüsselwörter zu trennen.

- {{cssxref("&lt;length&gt;")}}

  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Für die meisten schriftbezogenen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Bei schriftbezogenen Einheiten, die auf dem Wurzelelement basieren (wie `rem`), ist die Schriftgröße relativ zur Größe der Schriftart, die vom {{HTMLElement("html")}} (Wurzel-)Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}

  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Barrierefreiheit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size`-Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird.
    Siehe die [math-depth](/de/docs/Web/CSS/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt verschiedene Möglichkeiten, die Schriftgröße anzugeben, einschließlich Schlüsselwörtern oder Zahlenwerten für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der speziellen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Schriftgröße im Web festzulegen. Indem Sie eine Schlüsselwort-Schriftgröße auf das {{HTMLElement("body")}}-Element festlegen, können Sie überall auf der Seite relativ zur Schriftgröße skalieren, was Ihnen die Möglichkeit gibt, die Schrift leicht auf der gesamten Seite nach oben oder unten zu skalieren.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Pixelgenauigkeit erforderlich ist. Ein px-Wert ist statisch. Dies ist eine betriebssystemunabhängige und browserübergreifende Methode, die Browser buchstäblich dazu auffordert, die Buchstaben genau mit der in Pixeln angegebenen Höhe darzustellen. Die Ergebnisse können je nach Browser leicht variieren, da diese möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Zum Beispiel, wenn ein Elternelement auf `16px` gesetzt ist und sein Kindelement auf `larger`, wird das Kindelement größer als das Elternelement auf der Seite angezeigt.

> [!NOTE]
> Schriftgrößen in `px` zu definieren ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer in einigen Browsern die Schriftgröße nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränktem Sehvermögen die Schriftgröße möglicherweise viel größer einstellen als die vom Webdesigner gewählte Größe. Vermeiden Sie es, sie für Schriftgrößen zu verwenden, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch leitet sich die `em`-Einheit von der Breite eines großen "M" in einem bestimmten Schriftbild ab.). Der numerische Wert fungiert als Multiplikator der `font-size`-Eigenschaft des Elements, auf das es angewendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall wird die Schriftgröße der `<p>`-Elemente doppelt so groß sein wie die berechnete `font-size`, die von `<p>`-Elementen geerbt wird. Ebenso entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf das sie angewendet wird.

Wenn auf keinen der Vorfahren der `<p>`-Elemente eine `font-size` gesetzt wurde, entspricht `1em` der Standardschriftgröße des Browsers, die normalerweise `16px` beträgt. Standardmäßig entspricht daher `1em` `16px` und `2em` `32px`. Wenn Sie beispielsweise eine `font-size` von `20px` auf das `<body>`-Element setzen, entspricht `1em` auf den `<p>`-Elementen stattdessen `20px`, und `2em` entspricht `40px`.

Um das `em`-Äquivalent für einen benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>` der Seite ist auf `16px` eingestellt. Wenn die gewünschte Schriftgröße `12px` beträgt, sollten Sie `0.75em` angeben (da 12/16 = 0.75). Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, geben Sie `0.625em` an (10/16 = 0.625); für `22px` geben Sie `1.375em` an (22/16).

Die `em`-Einheit ist eine sehr nützliche Einheit in CSS, da sie ihre Länge automatisch an die Schriftart anpasst, die der Leser verwenden möchte.

Ein wichtiger Punkt: em-Werte kumulieren sich. Betrachten Sie das folgende HTML und CSS:

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

Angenommen, die Standardschriftgröße des Browsers beträgt 16px, würden die Wörter "outer" mit 25.6px gerendert, aber das Wort "inner" würde bei 40.96px gerendert. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` des darüber liegenden Elements ist, welches wiederum relativ zur `font-size` seines Elternteils ist. Dies wird oft als **Kumulierung** bezeichnet.

### Rems

`rem`-Werte wurden erfunden, um das Problem der Kumulierung zu umgehen. `rem`-Werte sind relativ zum Root-`html`-Element, nicht zum Elternelement. Mit anderen Worten, sie lassen Sie eine Schriftgröße auf relative Weise ohne Beeinträchtigung durch die Größe des Elternelements angeben, wodurch die Kumulierung beseitigt wird.

Der CSS-Code unten ist nahezu identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Dann wenden wir dieses CSS auf dasselbe HTML an, das wie folgt aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25.6px angezeigt (vorausgesetzt, dass die Schriftgröße des Browsers auf dem Standardwert von 16px belassen wurde).

### Ex

Wie die `em`-Einheit wird die `font-size` eines Elements, das mithilfe der `ex`-Einheit festgelegt wird, berechnet oder ist dynamisch. Es verhält sich genau auf dieselbe Weise, außer dass beim Festlegen der `font-size`-Eigenschaft unter Verwendung von `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://www.w3.org/TR/css-fonts-3/#first-available-font) entspricht, die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements, und die `font-size` kumuliert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung von [schriftbezogenen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen setzen

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
- [Lernen: Grundlegendes zu Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
