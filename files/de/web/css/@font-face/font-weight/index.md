---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel angegebenen Schriftarten festzulegen. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/font-weight) setzt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in verschiedenen Gewichtungen verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein bestimmtes Gewicht anfordert, können mehrere {{cssxref("@font-face")}} At-Regeln für dieselbe Familie definiert werden (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Bereich von Gewichten.

Um die zu verwendende Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein durch Leerzeichen getrenntes Paar von Schriftgewichts-Werten als Wert für den `font-weight` Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht durch Setzen der {{cssxref("font-weight")}} Eigenschaft oder der {{cssxref("font")}} Kurzform-Eigenschaft festlegen, wird die entsprechende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` lautet, und die Eigenschaft `font-weight: 450` oder `font-weight: 550` lautet, wird diese Schriftart für diese Schriftfamilie verwendet.
Egal, ob die Schriftart eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die Schriftart, die dem Bereich entspricht, wird verwendet. In diesem Fall erscheinen `450` und `550` bei einer statischen Schrift gleich. Bei einer variablen Schriftart wird die letztere fetter erscheinen.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart festlegen, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Schriftgewicht-Eigenschaftswerte zu verwenden.

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
  - : Normaler Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fetter Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000 inklusive. Höhere Zahlen stellen Gewichtungen dar, die fetter sind als (oder so fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gebräuchlichen Gewichtsnamen, wie im Abschnitt [Gemeinsame Gewichtnamen-Zuordnung](#gemeinsame_gewichtnamen-zuordnung) unten beschrieben.

### Gemeinsame Gewichtnamen-Zuordnung

Die Zahlenwerte von `100` bis `900` entsprechen ungefähr den folgenden gebräuchlichen Gewichtsnamen:

| Wert | Gebräuchlicher Gewichtname  |
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

### Variable Schriftarten

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlen in der [Gemeinsame Gewichtnamen-Zuordnung](#gemeinsame_gewichtnamen-zuordnung) entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für TrueType oder OpenType variable Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit eingeschränkter Sehkraft können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastfarbverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriften

In diesem Beispiel fügen wir zwei Schriftarten ein, eine normale und eine fette, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, unter Verwendung von zwei `@font-face` At-Regeln. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriftarten anzupassen.

Danach können CSS-Regeln die normale oder die fette Schrift für die "Fira Sans" Familie auswählen, indem die {{cssxref("font-weight")}} Eigenschaft gesetzt wird. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>`-Elemente standardmäßig eine CSS `font-weight` Eigenschaft von `bold` haben.

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

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert verwenden. Durch das Festlegen der `font-weight` Deskriptoren über Bereiche von 1 bis 1000 können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) festlegen und sicher sein, dass die entsprechende Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriftarten aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtswerten eingestellt, verwendet aber alle denselben Schriftartnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und sein zugeordneter `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtswerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift und ihre zugeordneten `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS [Kaskadensystem](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Deklaration festgelegt wurden.

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

Der `seven` Absatz verwendet die extra fette Schrift. Während `font-weight: 700` sowohl die Deklarationen `FiraSans-Bold` als auch `FiraSans-ExtraBold` trifft, überschreibt FiraSans-ExtraBold, da es später deklariert wird, für diesen Wert die `FiraSans-Bold`.

Ähnlich verwenden `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, müssten dann jedoch den `font-weight` Deskriptorbereich ändern.

### Festlegen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich von Gewichten zu beschränken, die bei der Verwendung einer variablen Schriftart eingestellt werden können.

Wir binden eine variable Schriftart ein, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), unter Verwendung einer einzigen `@font-face` At-Regel. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet und dabei ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den Bereich geklemmt.

#### HTML

Wir binden einen Absatz mit `<output>` ein, der anfänglich auf `400` gesetzt ist, da dies das Standardschriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, damit Sie gerenderte gegenüber deklarierten Schriftgewichtswerte vergleichen können.

Wir binden ein {{htmlelement("input/range")}} vom Typ `range` ein, das in ein {{htmlelement("label")}} eingebettet ist, und setzen den `schritt` auf `50`.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700`, wodurch die variable Schriftart auf diesen Bereich begrenzt wird.

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

Wir binden einen Ereignishandler ein, der den `font-weight` Eigenschaftenwert des Absatzes aktualisiert und den Text entsprechend der Änderung aktualisiert:

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
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht wird auf den Bereich beschränkt, der vom `font-weight` Deskriptor definiert wird.

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
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
