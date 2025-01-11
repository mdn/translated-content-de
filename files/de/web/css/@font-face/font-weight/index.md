---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 02010edee188d03c342222619f5057cf362ea138
---

{{CSSRef}}

Der **`font-weight`** CSS {{cssxref("@font-face")}}-Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel spezifizierte Schriftart anzugeben. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes {{cssxref("font-weight", "Schriftgewicht")}} festlegt.

Typischerweise möchte ein Entwickler Schriftarten aus einer einzigen Schriftfamilie in verschiedenen Gewichtungen verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil, zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriften zu ermöglichen, wenn die `font-weight`-Eigenschaft ein bestimmtes Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}}-Regeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}}-Deskriptorwert), eine für jedes Gewicht oder Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein Leerzeichen-getrenntes Paar von Schriftgewichtswerten als Wert für den `font-weight`-Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht durch Setzen der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}}-Kurzform-Eigenschaft festlegen, wird die passende Schriftart verwendet.

Beispielsweise, wenn der Deskriptor `font-weight: 400 600;` lautet, wird bei der Eigenschaft `font-weight: 450` oder `font-weight: 550` diese Schriftart für diese Schriftfamilie verwendet.
Ob die Schriftart eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die zum Bereich passende Schriftart wird verwendet. In diesem Fall erscheint, wenn die Schriftart eine statische ist, `450` und `550` gleich. Wenn die Schriftart eine variable ist, wird Letzteres fetter sein.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart festlegen, wird in der Regel größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Schriftgewichtseigenschaftswerte zu verwenden.

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

Der `font-weight`-Deskriptor nimmt eine der folgenden Formen an:

- Das Schlüsselwort `auto`.
- Ein einzelner `<font-weight-absolute>`-Wert.
- Ein Paar von `<font-weight-absolute>`-Werten, durch ein Leerzeichen getrennt.

Jeder `<font-weight-absolute>` kann einer der folgenden Werte sein:

- `normal`
  - : Normales Schriftgewicht. Gleich `400`.
- `bold`
  - : Fettes Schriftgewicht. Gleich `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, inklusive. Höhere Zahlen repräsentieren Gewichtungen, die fetter sind als (oder genauso fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen allgemeinen Gewichtsnamen, wie im Abschnitt [Allgemeine Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) unten beschrieben.

### Allgemeine Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden allgemeinen Gewichtsnamen:

| Wert | Allgemeiner Gewichtname     |
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

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlen in der [Allgemeinen Gewichtsnamen-Zuordnung](#allgemeine_gewichtsnamen-zuordnung) entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, und dies kann dem Designer einen viel genaueren Grad der Kontrolle über das gewählte Gewicht geben.

Für TrueType- oder OpenType-Variable-Schriftarten wird die "wght"-Variation verwendet, um variierende Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit eingeschränktem Sehvermögen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt wird, insbesondere wenn die Schriftart ein [niedriges Kontrastfarbverhältnis](/de/docs/Web/CSS/color#accessibility) hat.

- [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl von normalen und fetten Schriftarten

In diesem Beispiel beinhalten wir zwei Schriftarten, eine normale Gewichtung und eine fette Gewichtung, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie unter Verwendung von zwei `@font-face` At-Regeln. Wir setzen `font-weight`-Deskriptoren, um der Gewichtung der Schriftarten zu entsprechen.

Nach diesem Schritt können CSS-Regeln die normale oder die fette Schriftart für die "Fira Sans"-Familie einfach durch das Setzen der {{cssxref("font-weight")}}-Eigenschaft auswählen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schriftart auswählt, da `<strong>`-Elemente standardmäßig einen CSS `font-weight`-Eigenschaftswert von `bold` haben.

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

### Festlegen von Schriftgewichtbereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriftarten für mehrere Schriftgewichte (und Schriftstile) einschließen können, indem sie mehrere `@font-face`-Deklarationen mit demselben `font-family`-Wert einfügen. Durch das Setzen der `font-weight`-Deskriptoren mit Bereichen von 1 bis 1000 können Sie im Rest Ihres Stylesheets ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die passende Schriftart verwendet wird.

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

Wir fügen vier `@font-face`-Deklarationen für vier verschiedene Schriftarten aus der `FireSans`-Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtswerten festgelegt, verwendet jedoch alle denselben Schriftartennamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight`-Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schriftart und ihre zugehörigen `font-weight`-Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Die CSS-[Kaskade](/de/docs/Web/CSS/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des Bereichs, der in der `FiraSans-Regular`-Deklaration festgelegt wurde, überschreiben.

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

Der `seven`-Absatz verwendet die extra-fette Schriftart. Während `font-weight: 700` sowohl mit den `FiraSans-Bold` als auch `FiraSans-ExtraBold`-Deklarationen übereinstimmt, überschreibt die später deklarierte `FiraSans-ExtraBold` die `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden sowohl `100` als auch `300` die leichte Schriftart; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, müssten jedoch den `font-weight`-Deskriptorbereich ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight`-Deskriptor, um den Bereich der Gewichte einzuschränken, die bei Verwendung einer variablen Schriftart eingestellt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), unter Verwendung einer einzigen `@font-face` At-Regel ein. Wir verwenden einen `font-weight: 300 700`-Wert, um den verfügbaren Gewichtungsbereich effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schriftart verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht an den Bereich angepasst.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der ursprünglich auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, damit Sie gerenderte und deklarierte Schriftgewichtwerte vergleichen können.

Wir fügen ein {{htmlelement("input/range")}}-Element vom Typ `range` ein, eingebettet in ein {{htmlelement("label")}}, wobei der `step` auf `50` gesetzt ist.

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

Wir setzen den `font-weight`-Deskriptorbereich auf `300 700` und begrenzen die variable Schriftart auf diesen Bereich.

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

Wir fügen einen Ereignishandler ein, der den `font-weight`-Eigenschaftswert des Absatzes aktualisiert und den Text entsprechend der Änderung aktualisiert:

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

Verändern Sie das Schriftgewicht des Absatzes über den Bereich.
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht wird an den durch den `font-weight`-Deskriptor definierten Bereich angepasst.

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
