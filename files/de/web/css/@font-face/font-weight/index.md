---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel angegebene Schriftart zu spezifizieren. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight) festlegt.

Typischerweise möchte ein Entwickler Schriften einer einzigen Schriftfamilie in unterschiedlichen Gewichtungen verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem spezifischen Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichter, regulärer, fetter oder extra-fetter Schrift zu ermöglichen, wenn die `font-weight` Eigenschaft ein spezifisches Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten anzugeben, deklarieren Sie ein paar durch Leerzeichen getrennte Werte für `font-weight` als Wert für den `font-weight` Deskriptor. Wenn CSS-Regeln ein Schriftgewicht durch Festlegen der {{cssxref("font-weight")}} Eigenschaft oder der {{cssxref("font")}} Kurzform-Eigenschaft festlegen, wird die passende Schrift dann verwendet.

Wenn zum Beispiel der Deskriptor `font-weight: 400 600;` ist, wird bei der Eigenschaft `font-weight: 450` oder `font-weight: 550` diese Schriftart für die Schriftfamilie verwendet. Ob die Schrift eine statische oder eine [variable Schrift](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die zum Bereich passende Schrift wird verwendet. Ist die Schrift eine statische Schrift, erscheinen `450` und `550` gleich. Ist die Schrift eine variable Schrift, wird letztere fetter.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schrift festlegen, ist normalerweise größer, möglicherweise sogar `1 1000`, um dieselbe Schrift für alle Schriftgewicht-Eigenschaftswerte zu verwenden.

## Syntax

```css
/* Single values */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Defining a range */
font-weight: normal bold;
font-weight: 300 500;
```

### Werte

Der `font-weight` Deskriptor nimmt eine der folgenden Formen an:

- Das Schlüsselwort `auto`.
- Ein einzelner `<font-weight-absolute>` Wert.
- Ein Paar von `<font-weight-absolute>` Werten, durch ein Leerzeichen getrennt.

Jeder `<font-weight-absolute>` kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettgedrucktes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusive. Höhere Zahlen repräsentieren fettere Gewichte als (oder gleich fette wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen häufig verwendeten Gewichtsnamen, wie im Abschnitt [Mapping der häufigen Gewichtsnamen](#mapping_der_häufigen_gewichtsnamen) beschrieben.

### Mapping der häufigen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden häufigen Gewichtsnamen:

| Wert | Häufiger Gewichtname        |
| ---- | --------------------------- |
| 100  | Dünn (Haarlinie)            |
| 200  | Extra Leicht (Ultra Leicht) |
| 300  | Leicht                      |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Halbfett (Demi Fett)        |
| 700  | Fett                        |
| 800  | Extra Fett (Ultra Fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen im [Mapping der häufigen Gewichtsnamen](#mapping_der_häufigen_gewichtsnamen) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Gewichtsbereich mit mehr oder weniger feiner Granularität unterstützen, und dies kann dem Designer eine viel engere Kontrolle über das gewählte Gewicht verleihen.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit Sehbehinderungen können Schwierigkeiten haben, mit `font-weight` auf `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzte Texte zu lesen, insbesondere wenn die Schrift ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl von normalen und fetten Schriften

In diesem Beispiel beinhalten wir zwei Schriften, eine mit normalem Gewicht, eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, indem wir zwei `@font-face` At-Regeln verwenden. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften zuzuordnen.

Danach können CSS-Regeln die normale oder fette Schrift für die "Fira Sans" Familie einfach auswählen, indem sie die {{cssxref("font-weight")}} Eigenschaft setzen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element auch die fette Schrift auswählt, da `<strong>` Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

#### HTML

```html
<p class="one">Fira Sans, `normal` weight paragraph</p>
<p class="two">Fira Sans, `bold` weight paragraph</p>
<p><strong>Fira Sans, &lt;strong&gt; element (`bold`)</strong></p>
```

#### CSS

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: bold;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: normal;
}

p.two {
  font-weight: bold;
}
```

#### Ergebnis

{{embedlivesample("Auswahl von normalen und fetten Schriften", "", 300)}}

### Festlegen von Schriftgewicht-Bereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert einfügen. Indem Sie die `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 festlegen, können Sie in den restlichen Stylesheets ein `font-weight` (oder `font-style`) deklarieren und sicherstellen, dass die passende Schrift verwendet wird.

#### HTML

```html
<p class="one">This has a font weight of 100</p>
<p class="three">This has a font weight of 300</p>
<p class="four">This has a font weight of 400</p>
<p class="five">This has a font weight of 500</p>
<p class="seven">This has a font weight of 700</p>
<p class="nine">This has a font weight of 900</p>
```

#### CSS

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie hinzu, wie im vorherigen Beispiel gezeigt. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtswerten eingestellt, verwendet jedoch alle denselben Schriftname.

Die erste Deklaration verwendet `FiraSans-Regular`, und ihr zugeordneter `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift, und ihre zugeordneten `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS [Kaskadenprinzip](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Deklaration festgelegt wurden.

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: 1 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 1 300;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Light.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 500 700;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 700 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-ExtraBold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: 100;
}

p.three {
  font-weight: 300;
}

p.four {
  font-weight: 400;
}

p.five {
  font-weight: 500;
}

p.seven {
  font-weight: 700;
}

p.nine {
  font-weight: 900;
}
```

#### Ergebnis

{{embedlivesample("Festlegen von Schriftgewicht-Bereichen", "", 500)}}

Der `seven` Absatz verwendet die extra-fette Schrift. Während `font-weight: 700` sowohl auf die `FiraSans-Bold` als auch auf die `FiraSans-ExtraBold` Deklarationen zutrifft, überschreibt die spät erklärte `FiraSans-ExtraBold` die `FiraSans-Bold` für diesen Wert.

Ebenso verwenden die `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen umfassen, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, aber wir müssten den Bereich des `font-weight` Deskriptors ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei Verwendung einer variablen Schrift festgelegt werden können.

Wir beinhalten eine variable Schrift, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzigen `@font-face` At-Regel. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet, wird, falls ein Gewicht außerhalb dieses Bereichs spezifiziert wird, das Gewicht auf den Bereich begrenzt.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für nicht gestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie die gerenderten gegenüber den deklarierten Schriftgewichtwerten vergleichen können.

Wir fügen einen {{htmlelement("input/range")}} vom Typ `range` ein, der in einem {{htmlelement("label")}} verschachtelt ist und den `step` auf `50` setzt.

```html
<p>LeagueMono, font-weight: 300 (comparison)</p>
<p id="example">LeagueMono, font-weight: <output>400</output> (example)</p>
<p>LeagueMono, font-weight: 700 (comparison)</p>
<label
  >Change the font weight:
  <input type="range" min="50" max="1000" step="50" value="400" />
</label>
```

#### CSS

Wir setzen den Bereich des `font-weight` Deskriptors auf `300 700`, um die variable Schrift in diesem Bereich zu fixieren.

```css
@font-face {
  font-family: "LeagueMono";
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: "LeagueMono", serif;
  font-size: 1.5rem;
}

p:first-of-type {
  font-weight: 300;
}

p:last-of-type {
  font-weight: 700;
}
```

#### JavaScript

Wir fügen einen Ereignis-Handler hinzu, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text zur Reflexion der Änderung aktualisiert:

```js
const text = document.querySelector("#example");
const log = document.querySelector("output");
const range = document.querySelector("input");

range.addEventListener("change", () => {
  text.style.fontWeight = range.value;
  log.innerText = range.value;
});
```

#### Ergebnis

{{embedlivesample("Festlegen eines Bereichs für eine variable Schrift", "", "400")}}

Ändern Sie das Schriftgewicht des Absatzes über den Bereich.
Beachten Sie, dass der Beispielabsatz nicht leichter wird als der `300` Absatz darüber oder fetter als der `700` Absatz darunter; das Schriftgewicht wird auf den durch den `font-weight` Deskriptor definierten Bereich begrenzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
