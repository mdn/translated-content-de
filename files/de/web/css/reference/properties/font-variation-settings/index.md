---
title: font-variation-settings
slug: Web/CSS/Reference/Properties/font-variation-settings
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet eine niedrigstufige Kontrolle über die Merkmale von [variablen Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), indem Sie die vier Buchstaben-Achsen-Namen der Merkmale, die Sie variieren möchten, zusammen mit ihren Werten angeben können.

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
  - : Der Text wird mit Standardeinstellungen gestaltet.
- `<string> <number>`
  - : Beim Rendern des Textes wird die Liste der Achsennamen der variablen Schriftarten an die Textlayout-Engine übergeben, um Schrifteigenschaften zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer eines oder mehrere Paare, bestehend aus einem {{cssxref("&lt;string&gt;")}} aus 4 ASCII-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achsenwert angibt, der festgelegt werden soll. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs der Code-Punkte U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Das `<number>` kann je nach dem im Schriftartdesigner festgelegten Bereich fraktional oder negativ sein.

## Beschreibung

Diese Eigenschaft ist ein niedrigstufiger Mechanismus, um die Funktionen variabler Schriftarten festzulegen, wenn keine andere Möglichkeit besteht, diese Funktionen zu aktivieren oder darauf zuzugreifen. Sie sollten sie nur verwenden, wenn keine grundlegenden Eigenschaften existieren, um diese Funktionen festzulegen (z. B. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Mit `font-variation-settings` eingestellte Schrifteigenschaften überschreiben immer die mit den entsprechenden grundlegenden Schriftart-Eigenschaften eingestellten Werte, z. B. `font-weight`, egal wo sie in der Kaskade erscheinen. In einigen Browsern trifft dies derzeit nur zu, wenn die {{cssxref("@font-face")}}-Deklaration einen {{cssxref("@font-face/font-weight", "font-weight")}}-Bereich enthält.

### Registrierte und benutzerdefinierte Achsen

Variable Schriftartenachsen gibt es in zwei Typen: **registrierte** und **benutzerdefinierte**.

Registrierte Achsen sind die am häufigsten anzutreffenden — so häufig, dass die Autoren der Spezifikation sie für standardisierungswürdig hielten. Dies bedeutet nicht, dass der Autor all diese Achsen in seiner Schriftart enthalten muss.

Hier sind die registrierten Achsen zusammen mit ihren entsprechenden CSS-Eigenschaften:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Achs-Tag</th>
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
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
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

Benutzerdefinierte Achsen können alles sein, was der Schriftartdesigner in seiner Schriftart variieren möchte, z. B. Ascender- oder Descender-Höhen, die Größe von Serifen oder alles andere, was sie sich vorstellen können. Jede Achse kann verwendet werden, solange sie eine eindeutige 4-Zeichen-Achse erhält. Einige werden mit der Zeit häufiger werden und möglicherweise sogar registriert.

> [!NOTE]
> Registrierte Achstags werden unter Verwendung von Kleinbuchstaben-Tags identifiziert, während benutzerdefinierte Achsen Großbuchstaben-Tags erhalten sollten. Beachten Sie, dass Schriftartdesigner nicht gezwungen sind, diese Praxis zu befolgen, und einige werden dies nicht tun. Wichtig ist hier, dass Achstags zwischen Groß- und Kleinschreibung unterscheiden.

Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor 10.13 unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie variable Schriftarten weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele zu variablen Schriftarten finden Sie in unserem [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

### Steuerung des variablen Schriftgewichts (wght)

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie das CSS, um mit verschiedenen Schriftgewichten zu experimentieren. Sehen Sie, was passiert, wenn Sie einen Wert außerhalb des Gewichtsbereichs angeben.

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

### Steuerung der variablen Schriftneigung (slnt)

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie das CSS, um mit verschiedenen Schriftneigungen/Schräglagen-Werten zu experimentieren.

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

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [OpenType Schriftvarianten-Übersicht](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) auf microsoft.com
- [OpenType Design-Variations-Achsen-Tag-Register](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) auf microsoft.com
- [OpenType variable Schriftarten](https://www.axis-praxis.org/) auf axis-praxis.org
- [Variable Schriftarten](https://v-fonts.com/) auf v-fonts.com
