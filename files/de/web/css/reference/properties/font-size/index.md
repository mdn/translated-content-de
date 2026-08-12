---
title: "`font-size` CSS property"
short-title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`font-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe der Schrift fest. Das Ändern der Schriftgröße aktualisiert auch die Größen der schriftgrößenabhängigen {{cssxref("&lt;length&gt;")}} Einheiten wie `em`, `ex` und so weiter.

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : [Absolute-Größen](/de/docs/Web/CSS/Reference/Values/absolute-size) Schlüsselwörter, basierend auf der Standard-Schriftgröße des Benutzers (die `medium` ist).

- `larger`, `smaller`
  - : [Relative-Größen](/de/docs/Web/CSS/Reference/Values/relative-size) Schlüsselwörter. Die Schrift wird relativ zur Schriftgröße des Elternelements größer oder kleiner, ungefähr im Verhältnis der Trennung der oben genannten Absolute-Größen Schlüsselwörter.

- {{cssxref("&lt;length&gt;")}}
  - : Ein positiver {{cssxref("&lt;length&gt;")}} Wert. Für die meisten schriftgrößenabhängigen Einheiten (wie `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Für root-basierte schriftgrößenabhängige Einheiten (wie `rem`) ist die Schriftgröße relativ zur Größe der Schrift, die vom {{HTMLElement("html")}} (Root)-Element verwendet wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}} Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Um die Zugänglichkeit zu maximieren, ist es im Allgemeinen am besten, Werte zu verwenden, die relativ zur Standard-Schriftgröße des Benutzers sind.

- `math`
  - : [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) werden angewendet, wenn der berechnete Wert der `font-size` Eigenschaft für mathematische Elemente relativ zur `font-size` des enthaltenen Elternteils bestimmt wird. Siehe die [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth) Eigenschaft für weitere Informationen.

## Beschreibung

Es gibt verschiedene Möglichkeiten, die Schriftgröße festzulegen, darunter Schlüsselwörter oder numerische Werte für Pixel oder Ems. Wählen Sie die geeignete Methode basierend auf den Anforderungen der spezifischen Webseite.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit, die Größe von Schriften im Web festzulegen. Indem Sie eine Schlüsselwort-Schriftgröße auf dem {{HTMLElement("body")}}-Element festlegen, können Sie die relative Schriftgrößenanpassung überall sonst auf der Seite festlegen, sodass Sie die Schriftgröße auf der gesamten Seite problemlos skalieren können.

### Pixel

Das Festlegen der Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Dies ist eine unabhängige und plattformübergreifende Methode, um den Browsern buchstäblich mitzuteilen, dass die Buchstaben genau in der von Ihnen angegebenen Anzahl von Pixeln in der Höhe gerendert werden sollen. Die Ergebnisse können zwischen den Browsern leicht variieren, da sie möglicherweise unterschiedliche Algorithmen verwenden, um einen ähnlichen Effekt zu erzielen.

Schriftgrößeneinstellungen können auch in Kombination verwendet werden. Beispielsweise, wenn ein Elternelement auf `16px` und sein Kindelement auf `larger` gesetzt wird, wird das Kindelement auf der Seite größer als das Elternelement angezeigt.

> [!NOTE]
> Das Definieren von Schriftgrößen in `px` ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da der Benutzer die Schriftgröße in einigen Browsern nicht ändern kann. Beispielsweise möchten Benutzer mit eingeschränktem Sehvermögen möglicherweise die Schriftgröße viel größer einstellen als die vom Webdesigner gewählte Größe. Vermeiden Sie die Verwendung für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Die Verwendung eines `em`-Werts erzeugt eine dynamische oder berechnete Schriftgröße (historisch wurde die `em`-Einheit von der Breite eines großen „M“ in einem bestimmten Schriftbild abgeleitet). Der Zahlenwert wirkt als Multiplikator der `font-size`-Eigenschaft des Elements, auf das sie angewendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall ist die Schriftgröße der `<p>`-Elemente doppelt so groß wie die berechnete `font-size`, die von `<p>`-Elementen geerbt wird. In Erweiterung entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf das sie angewendet wird.

Wenn auf keinem der Vorfahren des `<p>` eine `font-size` festgelegt wurde, entspricht `1em` der Standard-Browser-`font-size`, die normalerweise `16px` beträgt. Somit entspricht `1em` standardmäßig `16px` und `2em` entspricht `32px`. Wenn Sie beispielsweise eine `font-size` von 20px auf das `<body>`-Element setzen, würde `1em` auf den `<p>`-Elementen stattdessen `20px` und `2em` `40px` entsprechen.

Um das `em`-Äquivalent für jeden benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Beispielsweise, wenn die `font-size` des `<body>` der Seite auf `16px` gesetzt ist und Sie eine Schriftgröße von `12px` wünschen, sollten Sie `0.75em` angeben (weil 12/16 = 0,75). Ebenso, wenn Sie eine Schriftgröße von `10px` wünschen, geben Sie `0.625em` an (10/16 = 0.625); für `22px`, geben Sie `1.375em` an (22/16).

Das `em` ist eine sehr nützliche Einheit in CSS, da sie sich automatisch relativ zur Schrift, die der Leser verwendet, anpasst.

Ein wichtiger Punkt, den Sie beachten sollten: em-Werte addieren sich. Nehmen Sie folgendes HTML und CSS:

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

Unter der Annahme, dass die Standard-`font-size` des Browsers 16px beträgt, würden die Wörter "outer" mit 25,6px und das Wort "inner" mit 40,96px dargestellt werden. Dies liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}} 1.6em beträgt, was relativ zur `font-size` des Elternteils ist, die wiederum relativ zur `font-size` ihres Elternteils ist. Dies wird oft **Komposition** genannt.

### Rems

`rem`-Werte wurden erfunden, um das Kompositionsproblem zu umgehen. `rem`-Werte sind relativ zum Root-`html`-Element und nicht zum Elternelement. Mit anderen Worten, sie ermöglichen es Ihnen, eine Schriftgröße auf relative Weise festzulegen, ohne von der Größe des Elternteils beeinflusst zu werden, und eliminieren dadurch die Komposition.

Das folgende CSS ist nahezu identisch mit dem vorherigen Beispiel. Der einzige Unterschied ist, dass die Einheit in `rem` geändert wurde.

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

In diesem Beispiel werden die Wörter "outer inner outer" alle bei 25,6px angezeigt (unter der Annahme, dass die `font-size` des Browsers auf dem Standardwert von 16px verbleibt).

### Ex

Wie die `em`-Einheit wird eine Schriftgröße eines Elements, das mit der `ex`-Einheit gesetzt wird, berechnet oder dynamisch. Sie verhält sich genau gleich, außer dass beim Festlegen der `font-size`-Eigenschaft mit `ex`-Einheiten die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font) auf der Seite entspricht. Der Zahlenwert multipliziert die geerbte `font-size` des Elements und die `font-size` komponiert sich relativ.

Siehe den W3C Editor's Draft für eine detailliertere Beschreibung der [schriftgrößenrelativen Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex`.

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
- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
