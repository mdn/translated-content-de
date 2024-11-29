---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: e454e364325a0fe56c63bd1e6211b7f84ad5a51b
---

{{CSSRef}}

Der **`font-weight`** CSS {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die Schriftart anzugeben, die in einer {{cssxref("@font-face")}} Regel angegeben ist. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes {{cssxref("font-weight", "font weight")}} festlegt.

In der Regel möchte ein Entwickler Schriftarten aus einer einzigen Schriftfamilie in verschiedenen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriftarten zu ermöglichen, wenn die `font-weight`-Eigenschaft ein bestimmtes Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}} Regeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein paar Schriftgewichtswerte, getrennt durch ein Leerzeichen, als Wert für den `font-weight` Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht festlegen, indem sie die {{cssxref("font-weight")}}-Eigenschaft oder die {{cssxref("font")}}-Kurzform-Eigenschaft festlegen, wird die entsprechende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` ist, wird, wenn die Eigenschaft `font-weight: 450` oder `font-weight: 550` ist, diese Schriftart für diese Schriftfamilie verwendet. Ob die Schriftart eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die Schriftart, die dem Bereich entspricht, wird verwendet. In diesem Fall erscheinen, wenn die Schriftart eine statische Schriftart ist, `450` und `550` gleich. Wenn die Schriftart eine variable Schriftart ist, wird letztere fetter sein.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart festlegen, ist in der Regel größer, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Schriftgewichtseigenschaftswerte zu verwenden.

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

Jedes `<font-weight-absolute>` kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettschriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusive. Höhere Zahlen repräsentieren Gewichte, die fetter sind als (oder so fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gebräuchlichen Gewichtsnamen, wie in der unten beschriebenen [Common weight name mapping](#allgemeine_gewichtsnamen-zuordnung).

### Allgemeine Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden gebräuchlichen Gewichtsnamen:

| Wert | Gebräuchlicher Gewichtsname |
| ---- | --------------------------- |
| 100  | Dünn (Haardünn)             |
| 200  | Extra Hell (Ultra Hell)     |
| 300  | Hell                        |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Semi Fett (Demi Fett)       |
| 700  | Fett                        |
| 800  | Extra Fett (Ultra Fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Schriftarten

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlen in der [Common weight name mapping](#allgemeine_gewichtsnamen-zuordnung) entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für TrueType- oder OpenType-Variable Schriftarten wird die "wght"-Variation verwendet, um variierende Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text mit einem `font-weight` Wert von `100` (Dünn/Haardünn) oder `200` (Extra Hell) zu lesen, insbesondere wenn die Schriftart ein [niedriges Kontrastfarbverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl von normalen und fetten Schriftarten

In diesem Beispiel fügen wir zwei Schriftarten ein, eine mit normalem und eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, indem wir zwei `@font-face`-Regeln verwenden. Wir setzen `font-weight`-Deskriptoren, um das Gewicht der Schriftarten abzugleichen.

Danach können CSS-Regeln die normale oder die fette Schriftart für die "Fira Sans" Familie auswählen, indem sie einfach die {{cssxref("font-weight")}}-Eigenschaft festlegen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element auch die fette Schriftart auswählt, da `<strong>`-Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

Dieses Beispiel zeigt, wie Autoren mehrere Schriftarten für mehrere Schriftgewichte (und Schriftstile) einfügen können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert einschließen. Durch das Einstellen der `font-weight`-Deskriptoren mit Bereichen von 1 bis 1000 in Ihren restlichen Stylesheets, können Sie ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die passende Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriftarten aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtwerten eingestellt, verwendet jedoch alle denselben Schriftartnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Deklarationen verwenden die leichten, fetten und extra-fetten Versionen der Schriftart, und ihre zugehörigen `font-weight` Bereiche definieren Untergruppen des Bereichs wie folgt:

- die leichte Schriftart ist mit dem Bereich 1-300 verbunden
- die fette Schriftart ist mit dem Bereich 500-700 verbunden
- die extra-fette Schriftart ist mit dem Bereich 700-1000 verbunden

Der CSS [Cascade](/de/docs/Web/CSS/Cascade) stellt sicher, dass die drei letzteren Deklarationen Teile des Bereichs überschreiben, der in der `FiraSans-Regular` Deklaration festgelegt wurde.

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

Der `seven` Absatz verwendet die extra-fette Schrift. Während `font-weight: 700` sowohl die `FiraSans-Bold` als auch die `FiraSans-ExtraBold` Deklarationen trifft, überschreibt die FiraSans-ExtraBold die `FiraSans-Bold` für diesen Wert, da sie später deklariert wird.

Ähnlich verwenden sowohl `100` als auch `300` die leichte Schriftart; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ könnten wir `FiraSans-Regular` nach `FiraSans-Light` deklariert haben, aber wir müssten den Bereich des `font-weight` Deskriptors ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte zu beschränken, die bei der Verwendung einer variablen Schriftart festgelegt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzigen `@font-face` Regel ein. Wir verwenden einen `font-weight: 300 700` Wert, um effektiv den Bereich der verfügbaren Gewichte einzuschränken. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet, und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht an den Bereich angepasst.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standardschriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie die gerenderten im Vergleich zu den deklarierten Schriftgewichtwerten vergleichen können.

Wir fügen ein {{htmlelement("input/range")}} vom Typ `range` ein, das in einem {{htmlelement("label")}} verschachtelt ist, wobei der `step` auf `50` gesetzt ist.

```html
<p>LeagueMono, font-weight: 300 (comparison)</p>
<p id="example">LeagueMono, font-weight: <output>400</output> (example)</p>
<p>LeagueMono, font-weight: 700 (comparison)</p>
<label
  >Change the font size:
  <input type="range" min="50" max="1000" step="50" value="400" />
</label>
```

#### CSS

Wir setzen den Bereich des `font-weight` Deskriptors auf `300 700` und klemmen die variable Schriftart auf diesen Bereich.

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

Wir fügen einen Ereignis-Handler hinzu, der den Wert der `font-weight` Eigenschaft des Absatzes aktualisiert und den Text aktualisiert, um die Änderung widerzuspiegeln:

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
Beachten Sie, dass der Beispielabsatz nicht leichter wird als der `300` Absatz darüber oder fetter als der `700` Absatz darunter; das Schriftgewicht ist auf den Bereich beschränkt, der durch den `font-weight` Deskriptor definiert ist.

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
