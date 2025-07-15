---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-weight`** CSS-{{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die in einer {{cssxref("@font-face")}} Regel festgelegte Schriftart anzugeben. Der Browser verwendet dies dann, um die geeignete Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [font-weight](/de/docs/Web/CSS/font-weight) festlegt.

In der Regel möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in unterschiedlichen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um leichte, normale, fette oder extra-fette Schriften anzuzeigen, wenn die `font-weight` Eigenschaft ein bestimmtes Gewicht aufruft, können Sie mehrere {{cssxref("@font-face")}} Regeln für dieselbe Familie definieren (alle mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten festzulegen, deklarieren Sie ein durch Leerzeichen getrenntes Paar von Schriftgewicht-Werten als Wert für den `font-weight` Deskriptor. Wenn CSS-Regeln ein Schriftgewicht festlegen, indem sie die {{cssxref("font-weight")}} Eigenschaft oder die {{cssxref("font")}} Kurzform-Eigenschaft setzen, wird dann die geeignete Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` ist, wird diese Schriftart bei `font-weight: 450` oder `font-weight: 550` für diese Schriftfamilie verwendet. Unabhängig davon, ob die Schriftart eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die Schriftart, die dem Bereich entspricht, wird verwendet. In diesem Fall erscheinen `450` und `550` bei einer statischen Schriftart gleich. Ist die Schriftart eine variable Schriftart, wird letztere fetter erscheinen.

Der Deskriptor ist bei allen Schriften gleich, jedoch wird der Bereich, den Sie für eine variable Schriftart festlegen, in der Regel größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Werte der Schriftgewichtseigenschaft zu verwenden.

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
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusiv. Höhere Zahlen repräsentieren Gewichte, die fetter sind als (oder ebenso fett wie) niedrigere Zahlen. Einige gängige Werte entsprechen den üblichen Namen von Gewichten, wie in der unten beschriebenen [Zuweisung der üblichen Gewichtsnamen](#zuweisung_der_üblichen_gewichtsnamen).

### Zuweisung der üblichen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden üblichen Gewichtsnamen:

| Wert | Üblicher Gewichtname        |
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

### Variable Schriftarten

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in der [Zuweisung der üblichen Gewichtsnamen](#zuweisung_der_üblichen_gewichtsnamen) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, und dies kann dem Designer eine viel genauere Kontrolle über das gewählte Gewicht geben.

Für TrueType oder OpenType variable Schriften wird die "wght" Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schriftart ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriften

In diesem Beispiel enthalten wir zwei Schriften, eine mit normalem Gewicht und eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie mithilfe von zwei `@font-face` Regeln. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften anzupassen.

Danach können CSS-Regeln die normale oder die fette Schrift für die "Fira Sans"-Familie einfach durch Setzen der {{cssxref("font-weight")}} Eigenschaft auswählen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element auch die fette Schrift auswählt, da `<strong>`-Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

### Festlegen von Schriftgewichtsbereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert einfügen. Indem Sie die `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 festlegen, können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die geeignete Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie hinzu, wie im vorherigen Beispiel gesehen. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtswerten eingestellt, aber alle verwenden denselben Schriftartnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugeordneter `font-weight` Bereich umfasst den gesamten möglichen Bereich der Schriftgewichtswerte.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift und ihre zugehörigen `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des in der `FiraSans-Regular` Deklaration festgelegten Bereichs überschreiben.

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

Der `seven` Absatz verwendet die extra-fette Schrift. Während `font-weight: 700` sowohl die `FiraSans-Bold` als auch die `FiraSans-ExtraBold` Deklarationen trifft, überschreibt die später deklarierte FiraSans-ExtraBold die `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, hätten aber den `font-weight` Deskriptorbereich ändern müssen, wenn wir so vorgehen.

### Festlegen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich von Gewichtungen einzuschränken, die bei der Verwendung einer variablen Schriftart gesetzt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mithilfe einer einzigen `@font-face` Regel hinzu. Wir verwenden einen Wert von `font-weight: 300 700`, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schriftart verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den Bereich geklammert.

#### HTML

Wir fügen einen Absatz mit `<output>` hinzu, der zunächst auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie die gerenderten und die deklarierten Schriftgewichtswerte vergleichen können.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700` und klemmen die variable Schriftart auf diesen Bereich.

```css
@font-face {
  font-family: LeagueMono;
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: LeagueMono, serif;
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

Wir fügen einen Ereignishandler hinzu, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text zur Darstellung der Änderung aktualisiert:

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
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht ist auf den Bereich beschränkt, der durch den `font-weight` Deskriptor definiert ist.

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
