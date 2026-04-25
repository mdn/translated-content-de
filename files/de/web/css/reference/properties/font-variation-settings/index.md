---
title: "`font-variation-settings` CSS property"
short-title: font-variation-settings
slug: Web/CSS/Reference/Properties/font-variation-settings
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine niedrigstufige Kontrolle über [Variable Fonts](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts), indem Sie die vier Buchstaben der Achsennamen der Merkmale, die Sie variieren möchten, zusammen mit ihren Werten angeben.

{{InteractiveExample("CSS Demo: font-variation-settings")}}

```css interactive-example-choice
font-variation-settings: "wght" 50;
```

```css interactive-example-choice
font-variation-settings: "wght" 850;
```

```css interactive-example-choice
font-variation-settings: "wdth" 25;
```

```css interactive-example-choice
font-variation-settings: "wdth" 75;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 1.5rem;
  font-family: "Amstelvar", serif;
}
```

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for variable font axis names */
font-variation-settings: "xhgt" 0.7;

/* Global values */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### Werte

Der Wert dieser Eigenschaft kann eine von zwei Formen annehmen:

- `normal`
  - : Text wird mit den Standardeinstellungen formatiert.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der Variablenbasisschriftachsen an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem oder mehreren Paaren aus einem {{cssxref("&lt;string&gt;")}} von 4 ASCII-Zeichen, gefolgt von einer {{cssxref("number")}}, die den zu setzenden Achsenwert angibt. Hat das `<string>` mehr oder weniger Zeichen oder enthält Zeichen außerhalb des U+20 - U+7E Codepoint-Bereichs, ist die gesamte Eigenschaft ungültig. Der `<number>` kann je nach verfügbarem Wertebereich in Ihrer Schriftart, wie vom Schriftartendesigner definiert, gebrochen oder negativ sein.

## Beschreibung

Diese Eigenschaft ist ein niedrigstufiger Mechanismus, der entwickelt wurde, um Variablenbasisschriftmerkmale einzustellen, wenn keine andere Möglichkeit zur Verfügung steht, um diese Merkmale zu aktivieren oder darauf zuzugreifen. Sie sollten sie nur verwenden, wenn keine grundlegenden Eigenschaften existieren, um diese Merkmale festzulegen (z. B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Die mit `font-variation-settings` festgelegten Schriftmerkmale überschreiben immer diejenigen, die mit den entsprechenden grundlegenden Schrifteigenschaften festgelegt wurden, z. B. `font-weight`, unabhängig davon, wo sie in der Kaskade erscheinen. In einigen Browsern ist dies derzeit nur zutreffend, wenn die {{cssxref("@font-face")}}-Deklaration einen {{cssxref("@font-face/font-weight", "font-weight")}}-Bereich enthält.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftachsen gibt es in zwei Arten: **registriert** und **benutzerdefiniert**.

Registrierte Achsen sind die am häufigsten angetroffenen - so häufig, dass die Autoren der Spezifikation entschieden haben, sie zu standardisieren. Beachten Sie, dass dies nicht bedeutet, dass der Autor alle diese in ihrer Schriftart enthalten muss.

Hier sind die registrierten Achsen zusammen mit ihren entsprechenden CSS-Eigenschaften:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Achsentag</th>
      <th scope="col">CSS-Eigenschaft</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (Schräge)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + Winkel</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

Benutzerdefinierte Achsen können alles sein, was der Schriftartendesigner in ihrer Schriftart variieren möchte, beispielsweise Auf- oder Abstiegshöhen, die Größe der Serifen oder alles, was sie sich vorstellen können. Jede Achse kann verwendet werden, solange sie eine einzigartige vierstellige Achse zugewiesen bekommt. Einige werden schließlich häufiger werden und können sogar im Laufe der Zeit registriert werden.

> [!NOTE]
> Registrierte Achsentags werden mit Kleinbuchstaben identifiziert, während benutzerdefinierte Achsen Großbuchstabentags zugewiesen bekommen sollten. Beachten Sie, dass Schriftartendesigner nicht gezwungen sind, diese Praxis einzuhalten, und einige werden es nicht tun. Das Wichtigste hier ist, dass Achsentags zwischen Groß- und Kleinschreibung unterscheiden.

Um Variable Fonts unter Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor Version 10.13 unterstützt keine Variblenbasisschriftsätze. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie keine Variable Fonts auf Webseiten oder in den Firefox Developer Tools verwenden.

## Formal Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden eine Reihe weiterer Beispiele für Variable Fonts in unserem [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts).

### Kontrolle über das Gewicht variabler Schriftarten (wght)

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie das CSS, um mit verschiedenen Schriftgewichtswerten zu experimentieren. Beobachten Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Weight</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="adjustable">
  <p class="p3">Weight</p>
  (font-variation-settings: "wght" <span id="angle-text">625</span>)<br />
  <label for="text-axis">Adjust Weight: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* weight range is 300 to 900 */
.p1 {
  font-weight: 625;
}

/* weight range is 300 to 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wght" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", "450px")}}

### Kontrolle über die Schräge variabler Schriftarten (slnt)

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie das CSS, um mit verschiedenen Schrägwerten der Schriftsätze zu experimentieren.

```html hidden live-sample___variable-fonts-slant-example
<div>
  <p class="p1">Slant</p>
  <span>(font-style: oblique 14deg)</span>
</div>
<div>
  <p class="p2">Slant</p>
  <span>(font-variation-settings: 'slnt' 12)</span>
</div>
<div class="adjustable">
  <p class="p3">Slant</p>
  (font-variation-settings: 'slnt' <span id="angle-text">5</span>)<br />
  <label for="text-axis">Adjust Weight: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="0"
    max="12"
    value="5" />
</div>
```

```css hidden live-sample___variable-fonts-slant-example
@font-face {
  font-family: "Roboto VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/Roboto-VF.woff2")
    format("woff2-variations");
  font-weight: 100 900;
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-display: swap;
}

p {
  font:
    1.2em "Roboto VF",
    "Helvetica",
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 5;
}
```

```css live-sample___variable-fonts-slant-example
/* slant range is from 0deg to 12deg */
.p1 {
  font-style: oblique 14deg;
}

/* slant range is from 0 to 12 */
.p2 {
  font-variation-settings: "slnt" 12;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "slnt" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-slant-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-slant-example", "", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Übersicht zu OpenType-Schriftvariationen](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType Design-Variations-Achsentag-Register](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType Variable Fonts](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Fonts](https://v-fonts.com/) auf v-fonts.com
