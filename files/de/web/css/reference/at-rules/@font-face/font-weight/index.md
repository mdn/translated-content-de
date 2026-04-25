---
title: "`font-weight` CSS at-rule descriptor"
short-title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel angegebene Schriftart zu spezifizieren. Dies wird dann vom Browser genutzt, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight) setzt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in einer Reihe von unterschiedlichen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem spezifischen Gewicht und Stil: zum Beispiel "Helvetica bold italic". Um das Anzeigen von leichten, regulären, fetten oder extrafetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein spezifisches Gewicht abruft, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für die gleiche Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die zu verwendende Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein durch Leerzeichen getrenntes Paar von `font-weight` Werten als Wert für den `font-weight` Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht setzen, indem sie die {{cssxref("font-weight")}} Eigenschaft oder die {{cssxref("font")}} Kurzform-Eigenschaft festlegen, wird die passende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` ist, wird, wenn die Eigenschaft `font-weight: 450` oder `font-weight: 550` ist, diese Schriftart für diese Schriftfamilie verwendet.
Ob die Schrift statisch oder eine [variable Font](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts) ist, die dem Bereich entsprechende Schriftart wird verwendet. In diesem Fall erscheinen `450` und `550` bei einer statischen Schrift gleich. Bei einer variablen Schrift ist letztere fetter.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schrift festlegen, wird in der Regel größer sein, möglicherweise sogar `1 1000`, um die gleiche Schrift für alle Werte der Schriftgewicht-Eigenschaft zu verwenden.

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
- Ein Paar von `<font-weight-absolute>` Werten, getrennt durch ein Leerzeichen.

Jeder `<font-weight-absolute>` kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusive. Höhere Zahlen repräsentieren Gewichte, die fetter sind als (oder genauso fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen allgemeinen Gewichtsnamen, wie im Abschnitt [Allgemeine Gewichtsnamenzuordnung](#allgemeine_gewichtsnamenzuordnung) unten beschrieben.

### Allgemeine Gewichtsnamenzuordnung

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden allgemeinen Gewichtsnamen:

| Wert | Allgemeiner Gewichtname     |
| ---- | --------------------------- |
| 100  | Dünn (Haarlinie)            |
| 200  | Extra Leicht (Ultra Leicht) |
| 300  | Leicht                      |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Halb Fett (Demi Fett)       |
| 700  | Fett                        |
| 800  | Extra Fett (Ultra Fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in [Allgemeine Gewichtsnamenzuordnung](#allgemeine_gewichtsnamenzuordnung) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Gewichten unterstützen mit mehr oder weniger feiner Granularität, und dies kann dem Designer eine viel genauere Kontrolle über das gewählte Gewicht geben.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit Sehbeeinträchtigungen könnten Schwierigkeiten haben, Text mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) zu lesen, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswählen von normalen und fetten Schriften

In diesem Beispiel inkludieren wir zwei Schriften, eine mit normalem Gewicht, eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie mithilfe von zwei `@font-face` At-Regeln. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften abzugleichen.

Danach können CSS-Regeln die normale oder die fette Schrift für die "Fira Sans"-Familie auswählen, indem die {{cssxref("font-weight")}} Eigenschaft festgelegt wird. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>` Elemente standardmäßig den CSS `font-weight` Eigenschaftswert `bold` haben.

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

{{embedlivesample("Selecting normal and bold fonts", "", 300)}}

### Einstellen von Schriftgewichtsbereichen

Dieses Beispiel demonstriert, wie Autoren mehrere Schriften für verschiedene Schriftgewichte (und Schriftstile) einbeziehen können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert verwenden. Durch das Festlegen der `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 können Sie in den restlichen Stylesheets einen `font-weight` (oder `font-style`) deklarieren und wissen, dass die entsprechende Schrift verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtwerten festgelegt, aber alle verwenden denselben Schriftnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra fette Version der Schrift, und ihre zugehörigen `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra fette Schrift ist dem Bereich 700-1000 zugeordnet

Die CSS [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) sorgt dafür, dass die drei letzteren Deklarationen Teile des Bereichs überschreiben, der in der `FiraSans-Regular` Deklaration festgelegt wurde.

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

{{embedlivesample("Setting font-weight ranges", "", 500)}}

Der `seven` Absatz verwendet die extra fette Schrift. Während `font-weight: 700` sowohl die `FiraSans-Bold` als auch die `FiraSans-ExtraBold` Deklarationen trifft, überschreibt die FiraSans-ExtraBold, da sie später deklariert ist, die `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden sowohl `100` als auch `300` die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen einschließen, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, aber dann müssten wir den Bereich des `font-weight` Deskriptors ändern.

### Einstellen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei der Verwendung einer variablen Schrift gesetzt werden können.

Wir fügen eine variable Schrift, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzigen `@font-face` At-Regel ein. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv einzuschränken. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet, wird das Gewicht, wenn es außerhalb dieses Bereichs liegt, auf die Reichweite geklammert.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standardschriftgewicht für nicht gestylten Absatztxt ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie gerenderte und deklarierte Schriftgewichtwerte vergleichen können.

Wir fügen einen {{htmlelement("input/range")}} vom Typ `range` in ein {{htmlelement("label")}} ein und setzen den `step` auf `50`.

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

Wir setzen den Bereich des `font-weight` Deskriptors auf `300 700`, um die variable Schrift auf diesen Bereich zu beschränken.

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

Wir fügen einen Ereignishandler ein, der den Wert der `font-weight` Eigenschaft des Absatzes aktualisiert und den Text zur Reflexion der Änderung aktualisiert:

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

{{embedlivesample("Setting a range for a variable font", "", "400")}}

Ändern Sie das Schriftgewicht des Absatzes über den Bereich.
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht ist auf den Bereich des `font-weight` Deskriptors beschränkt.

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
