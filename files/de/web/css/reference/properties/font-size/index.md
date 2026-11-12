---
title: "`font-size` CSS property"
short-title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-size`** legt die Schriftgröße fest. Wenn sich die Schriftgröße ändert, ändern sich auch die Größen der schriftgrößenabhängigen {{cssxref("&lt;length&gt;")}}-Einheiten wie `em` und `ex`.

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

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : Schlüsselwörter für [absolute Größen](/de/docs/Web/CSS/Reference/Values/absolute-size), basierend auf der Standardschriftgröße des Benutzers (`medium`).

- `larger`, `smaller`
  - : Schlüsselwörter für [relative Größen](/de/docs/Web/CSS/Reference/Values/relative-size). Die Schrift wird relativ zur Schriftgröße des Elternelements größer oder kleiner dargestellt, ungefähr im gleichen Verhältnis wie die oben genannten Schlüsselwörter für absolute Größen.

- {{cssxref("&lt;length&gt;")}}
  - : Ein positiver {{cssxref("&lt;length&gt;")}}-Wert. Bei den meisten schriftbezogenen Einheiten (etwa `em` und `ex`) ist die Schriftgröße relativ zur Schriftgröße des Elternelements.

    Bei schriftbezogenen Einheiten, die sich auf das Wurzelelement beziehen (etwa `rem`), ist die Schriftgröße relativ zur Schriftgröße des {{HTMLElement("html")}}-Elements (des Wurzelelements).

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein positiver {{cssxref("&lt;percentage&gt;")}}-Wert, relativ zur Schriftgröße des Elternelements.
    > [!NOTE]
    > Für eine möglichst gute Barrierefreiheit sollten Sie im Allgemeinen Werte verwenden, die relativ zur Standardschriftgröße des Benutzers sind.

- `math`
  - : Bei der Bestimmung des berechneten Werts der Eigenschaft `font-size` für mathematische Elemente werden [Skalierungsregeln](https://w3c.github.io/mathml-core/#the-math-script-level-property) angewendet. Maßgeblich ist dabei die `font-size` des umschließenden Elternelements.
    Weitere Informationen finden Sie bei der Eigenschaft [math-depth](/de/docs/Web/CSS/Reference/Properties/math-depth).

## Beschreibung

Die Schriftgröße lässt sich auf verschiedene Arten angeben, unter anderem mit Schlüsselwörtern oder numerischen Werten in Pixeln oder em. Wählen Sie die Methode entsprechend den Anforderungen der jeweiligen Webseite.

### Schlüsselwörter

Schlüsselwörter eignen sich gut, um Schriftgrößen im Web festzulegen. Wenn Sie für das {{HTMLElement("body")}}-Element eine Schriftgröße per Schlüsselwort festlegen, können Sie die Schriftgrößen auf der übrigen Seite relativ dazu festlegen. So lässt sich die Schrift auf der gesamten Seite einfach vergrößern oder verkleinern.

### Pixel

Eine Schriftgröße in Pixelwerten (`px`) ist eine gute Wahl, wenn Sie Pixelgenauigkeit benötigen. Ein px-Wert ist statisch. Damit weisen Sie Browser unabhängig vom Betriebssystem an, Buchstaben mit genau der angegebenen Höhe in Pixeln darzustellen. Die Ergebnisse können sich zwischen Browsern geringfügig unterscheiden, da sie unterschiedliche Algorithmen verwenden können, um eine ähnliche Darstellung zu erzielen.

Angaben zur Schriftgröße lassen sich auch kombinieren. Wenn beispielsweise für ein Elternelement `16px` und für sein Kindelement `larger` festgelegt ist, wird das Kindelement auf der Seite größer als das Elternelement dargestellt.

> [!NOTE]
> Schriftgrößen in `px` festzulegen, ist _[nicht barrierefrei](https://en.wikipedia.org/wiki/Web_accessibility)_, da Benutzer die Schriftgröße in manchen Browsern nicht ändern können. Menschen mit eingeschränktem Sehvermögen möchten die Schrift möglicherweise deutlich größer einstellen, als es im Webdesign vorgesehen ist. Vermeiden Sie Pixelwerte für Schriftgrößen, wenn Sie ein inklusives Design erstellen möchten.

### Ems

Mit einem `em`-Wert legen Sie eine dynamische beziehungsweise berechnete Schriftgröße fest (historisch wurde die Einheit `em` von der Breite eines großen „M“ in einer bestimmten Schriftart abgeleitet). Der Zahlenwert dient als Multiplikator für die Eigenschaft `font-size` des Elements, auf dem er verwendet wird. Betrachten Sie dieses Beispiel:

```css
p {
  font-size: 2em;
}
```

In diesem Fall ist die Schriftgröße der `<p>`-Elemente doppelt so groß wie die berechnete `font-size`, die die `<p>`-Elemente erben. Entsprechend entspricht eine `font-size` von `1em` der berechneten `font-size` des Elements, auf dem sie verwendet wird.

Wenn für keines der Vorfahrenelemente eines `<p>`-Elements eine `font-size` festgelegt wurde, entspricht `1em` der standardmäßigen `font-size` des Browsers, üblicherweise `16px`. Standardmäßig entspricht `1em` also `16px` und `2em` entspricht `32px`. Wenn Sie beispielsweise für das `<body>`-Element eine `font-size` von 20px festlegen, entspricht `1em` für die `<p>`-Elemente stattdessen `20px` und `2em` entspricht `40px`.

Um den entsprechenden `em`-Wert für einen benötigten Pixelwert zu berechnen, können Sie diese Formel verwenden:

```plain
em = desired element pixel value / parent element font-size in pixels
```

Angenommen, die `font-size` des `<body>`-Elements einer Seite beträgt `16px`. Wenn Sie eine Schriftgröße von `12px` möchten, geben Sie `0.75em` an (denn 12/16 = 0,75). Für eine Schriftgröße von `10px` geben Sie entsprechend `0.625em` an (10/16 = 0,625); für `22px` geben Sie `1.375em` an (22/16).

`em` ist eine nützliche Einheit in CSS, da sich die Größe automatisch an die vom Leser gewählte Schrift anpasst.

Ein wichtiger Punkt: `em`-Werte können sich vervielfachen. Betrachten Sie das folgende HTML und CSS:

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

Angenommen, die standardmäßige `font-size` des Browsers beträgt 16px: Dann wird das Wort „outer“ mit 25,6px dargestellt, das Wort „inner“ jedoch mit 40,96px. Das liegt daran, dass die `font-size` des inneren {{HTMLElement("span")}}-Elements 1.6em beträgt und sich auf die `font-size` seines Elternelements bezieht, die wiederum relativ zur `font-size` ihres Elternelements ist. Dies wird häufig als **Vervielfachung** bezeichnet.

### Rems

`rem`-Werte wurden eingeführt, um das Problem der Vervielfachung zu umgehen. Sie beziehen sich auf das Wurzelelement `html` und nicht auf das Elternelement. Dadurch können Sie eine relative Schriftgröße angeben, ohne dass sie von der Größe des Elternelements beeinflusst wird.

Das folgende CSS ist nahezu identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass die Einheit in `rem` geändert wurde.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Nun wenden wir dieses CSS auf dasselbe HTML an:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In diesem Beispiel werden die Wörter „outer inner outer“ alle mit 25,6px dargestellt (vorausgesetzt, die `font-size` des Browsers wurde auf dem Standardwert von 16px belassen).

### Ex

Wie bei der Einheit `em` ist eine mit `ex` festgelegte `font-size` eines Elements berechnet beziehungsweise dynamisch. Sie verhält sich genauso, mit einem Unterschied: Wenn die Eigenschaft `font-size` mit der Einheit `ex` festgelegt wird, entspricht die `font-size` der x-Höhe der [ersten verfügbaren Schriftart](https://drafts.csswg.org/css-fonts/#first-available-font), die auf der Seite verwendet wird. Der Zahlenwert multipliziert die geerbte `font-size` des Elements; dabei können sich relative `font-size`-Werte vervielfachen.

Eine ausführlichere Beschreibung [schriftbezogener Längeneinheiten](https://drafts.csswg.org/css-values-4/#font-relative-length) wie `ex` finden Sie im Editor's Draft des W3C.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgrößen festlegen

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

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
- SVG-Attribut {{SVGAttr("font-size")}}
- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
