---
title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im At-Regel {{cssxref("@font-face")}} spezifizierte Schriftart festzulegen. Dies wird dann vom Browser verwendet, um die geeignete Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight) festlegt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in einer Reihe unterschiedlicher Gewichte verwenden. Bei traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: z.B. "Helvetica bold italic". Um die Anzeige von leichten, normalen, fetten oder extra-fetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein spezifisches Gewicht aufruft, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für dieselbe Familie definieren (alle mit demselben Wert für das {{cssxref("@font-face/font-family", "font-family")}} Deskriptor), eine für jedes Gewicht oder Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, deklarieren Sie ein durch Leerzeichen getrenntes Paar von Schriftgewichtswerten als den Wert für den `font-weight` Deskriptor. Wenn CSS-Regeln ein Schriftgewicht durch Setzen der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}}-Kurzschreibweise festlegen, wird die entsprechende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` ist, wird bei der Eigenschaft `font-weight: 450` oder `font-weight: 550` diese Schriftart für diese Schriftfamilie verwendet. Ob die Schriftart statisch oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die zu dem Bereich passende Schriftart wird verwendet. In diesem Fall erscheinen `450` und `550` bei statischen Schriftarten gleich. Wenn die Schriftart eine variable Schriftart ist, wird die letztere fetter erscheinen.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart setzen werden, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Schriftgewichtseigenschaftswerte zu verwenden.

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
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusive. Höhere Zahlen repräsentieren stärkere Gewichte als (oder genauso stark wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gebräuchlichen Gewichtsnamen, wie in der unten beschriebenen [Mapping von gebräuchlichen Gewichtsnamen](#mapping_von_gebräuchlichen_gewichtsnamen).

### Mapping von gebräuchlichen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen in etwa den folgenden gebräuchlichen Gewichtsnamen:

| Wert | Gebräuchlicher Gewichtsname |
| ----- | --------------------------- |
| 100   | Dünn (Haarlinie)            |
| 200   | Extra Leicht (Ultra Leicht) |
| 300   | Leicht                      |
| 400   | Normal                      |
| 500   | Mittel                      |
| 600   | Halbfett (Demi Fett)        |
| 700   | Fett                        |
| 800   | Extra Fett (Ultra Fett)     |
| 900   | Schwarz (Schwer)            |

### Variable Schriftarten

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlen in [Mapping von gebräuchlichen Gewichtsnamen](#mapping_von_gebräuchlichen_gewichtsnamen) entspricht. Einige Schriftarten, sogenannte variable Schriften, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht geben kann.

Für TrueType- oder OpenType-variable Schriftarten wird die "wght"-Variante verwendet, um unterschiedliche Gewichtungen zu implementieren.

## Barrierefreiheit

Menschen mit eingeschränkter Sicht können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, besonders wenn die Schriftart ein [geringes Kontrastverhältnis in der Farbe](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normale und fette Schriften auswählen

In diesem Beispiel fügen wir zwei Schriften aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie ein, eine mit normalem Gewicht, eine mit fettem Gewicht, und verwenden zwei `@font-face` At-Regeln. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften zu entsprechen.

Nach diesem Schritt können CSS-Regeln die normale oder fette Schrift der "Fira Sans" Familie einfach durch das Setzen der {{cssxref("font-weight")}} Eigenschaft auswählen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>` Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

### Festlegen von Schriftgewichtsranges

Dieses Beispiel demonstriert, wie Autoren mehrere Schriften für verschiedene Schriftgewichte (und Schriftstile) einbeziehen können, indem sie mehrere `@font-face`-Deklarationen mit demselben `font-family`-Wert nutzen. Indem Sie die `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 festlegen, können Sie in den restlichen Stilen ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die entsprechende Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie hinzu, wie im vorherigen Beispiel zu sehen. Jede Deklaration ist auf einen unterschiedlichen Bereich von Schriftgewichtswerten gesetzt, aber alle verwenden denselben Schriftartnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugeordneter `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtswerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Versionen der Schriftart, und ihre zugeordneten `font-weight` Bereiche definieren Teilmengen des Bereichs wie folgt:

- die leichte Schriftart wird dem Bereich 1-300 zugeordnet
- die fette Schriftart wird dem Bereich 500-700 zugeordnet
- die extra-fette Schriftart wird dem Bereich 700-1000 zugeordnet

Die CSS [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letzteren Deklarationen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Deklaration festgelegt wurden.

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

Der `seven` Absatz verwendet die extra fette Schrift. Während `font-weight: 700` sowohl die `FiraSans-Bold` als auch `FiraSans-ExtraBold` Deklarationen trifft, überschreibt `FiraSans-ExtraBold` aufgrund der späteren Deklaration die `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden `100` und `300` beide die leichte Schriftart; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ könnten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren, aber wir müssten den `font-weight` Deskriptorbereich ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die beim Verwenden einer variablen Schriftart eingestellt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), unter Verwendung einer einzelnen `@font-face` At-Regel hinzu. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den Bereich geklammert.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der ursprünglich auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für nicht-gestalteten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie gerenderte gegenüber deklarierte Schriftgewichtswerte vergleichen können.

Wir fügen einen {{htmlelement("input/range")}} vom Typ `range` hinzu, der in einem {{htmlelement("label")}} geschachtelt ist, und setzen den `step` auf `50`.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700`, um die variable Schriftart auf diesen Bereich zu beschränken.

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

Wir fügen einen Ereignishandler ein, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text so anpasst, dass er die Änderung widerspiegelt:

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
Beachten Sie, dass der Beispielabsatz nicht leichter als der obere `300` oder fetter als der untere `700` Absatz wird; das Schriftgewicht wird auf den durch den `font-weight` Deskriptor definierten Bereich geklemmt.

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
