---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Der **`font-weight`** CSS-{{cssxref("@font-face")}}-Deskriptor ermöglicht es Autoren, ein einzelnes oder einen Bereich von Schriftgewicht(en) für die im {{cssxref("@font-face")}}-At-Regel spezifizierte Schriftart anzugeben. Der Browser verwendet dies dann, um die passende Schrift auszuwählen, wenn eine CSS-Regel ein gewünschtes {{cssxref("font-weight", "Schriftgewicht")}} setzt.

Typischerweise möchte ein Entwickler Schriftarten aus einer einzigen Schriftfamilie in verschiedenen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen einer Schriftfamilie in einem spezifischen Gewicht und Stil, beispielsweise „Helvetica fett kursiv“. Um die Anzeige von leichten, regulären, fetten oder extrafetten Schriftarten zu ermöglichen, wenn die `font-weight`-Eigenschaft ein spezifisches Gewicht aufruft, können Sie mehrere {{cssxref("@font-face")}}-At-Regeln für dieselbe Familie definieren (alle mit demselben Wert für den {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor), eine für jedes Gewicht oder jede Gewichtsspanne.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein durch ein Leerzeichen getrenntes Paar von Schriftgewicht-Werten als Wert für den `font-weight`-Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht durch Festlegen der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}}-Kurzschreibweise definieren, wird dann die entsprechende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` lautet, wird bei Verwendung von `font-weight: 450` oder `font-weight: 550` diese Schriftart für die Schriftfamilie genutzt. Ob die Schrift statisch oder eine [variable Schrift](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die passende Schrift im Bereich wird verwendet. In diesem Fall sehen `450` und `550` gleich aus, wenn die Schriftart statisch ist. Ist es eine variable Schrift, wird letztere fetter dargestellt.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schrift setzen, ist in der Regel größer, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Werte der Schriftgewicht-Eigenschaft zu verwenden.

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
- Ein Paar von `<font-weight-absolute>`-Werten, getrennt durch ein Leerzeichen.

Jeder `<font-weight-absolute>`-Wert kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000 (einschließlich). Höhere Zahlen entsprechen Gewichten, die fetter als (oder genauso fett wie) niedrigere Zahlen sind. Einige häufig verwendete Werte korrespondieren mit gängigen Gewichtsnamen, wie im Abschnitt [Gemeinsame Gewichtsnamen-Zuordnung](#gemeinsame_gewichtsnamen-zuordnung) unten beschrieben.

### Gemeinsame Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden gemeinsamen Gewichtsnamen:

| Wert | Gemeinsamer Gewichtname     |
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

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einer der Zahlenwerte in der [Gemeinsamen Gewichtsnamen-Zuordnung](#gemeinsame_gewichtsnamen-zuordnung) entspricht. Einige Schriftarten, sogenannte variable Schriftarten, können jedoch eine Reihe von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was Designern eine viel größere Kontrolle über das gewählte Gewicht ermöglicht.

Bei TrueType- oder OpenType-variablen Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Gewichte umzusetzen.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN-Erklärung zu WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung Erfolgs-Kriterium 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl von normalen und fetten Schriftarten

In diesem Beispiel integrieren wir zwei Schriftarten aus der Schriftfamilie ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans), eine mit normalem Gewicht und eine mit fettem Gewicht, unter Verwendung von zwei `@font-face`-At-Regeln. Wir setzen `font-weight`-Deskriptoren, um das Gewicht der Schriftarten abzugleichen.

Danach können CSS-Regeln durch Festlegen der {{cssxref("font-weight")}}-Eigenschaft zwischen der normalen und der fetten Schriftart für die "Fira Sans"-Familie wählen. Beachten Sie, dass auch das {{htmlelement("strong")}}-HTML-Element die fette Schrift auswählt, da `<strong>`-Elemente standardmäßig eine CSS-`font-weight`-Eigenschaft mit dem Wert `bold` haben.

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

### Einstellen von Schriftgewichtsspannen

Dieses Beispiel zeigt, wie Autoren mehrere Schriftarten für verschiedene Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face`-Deklarationen mit demselben `font-family`-Wert verwenden. Durch Festlegen der `font-weight`-Deskriptoren mit Spannen von 1 bis 1000 können Sie in Ihren Stylesheets ein Schriftgewicht (oder Schriftstil) deklarieren und sicherstellen, dass die passende Schrift verwendet wird.

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

Wir schließen vier `@font-face`-Deklarationen für vier verschiedene Schriftarten der Schriftfamilie `FireSans` ein, wie im vorherigen Beispiel zu sehen. Jede Deklaration wird auf einen anderen Bereich von Schriftgewichtswerten gesetzt, aber alle verwenden denselben Schriftfamiliennamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight`-Bereich umfasst die gesamte mögliche Bandbreite von Schriftgewichtswerten.

Die anderen drei Deklarationen verwenden die leichten, fetten und extra fetten Versionen der Schrift, und deren zugehörige `font-weight`-Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet,
- die fette Schrift ist dem Bereich 500-700 zugeordnet,
- die extra fette Schrift ist dem Bereich 700-1000 zugeordnet.

Die CSS-[Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des Bereichs überschreiben, der in der `FiraSans-Regular`-Deklaration festgelegt wurde.

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

Der `seven`-Absatz verwendet die extra fette Schrift. Während `font-weight: 700` sowohl zu den Deklarationen `FiraSans-Bold` als auch `FiraSans-ExtraBold` passt, überschreibt die später deklarierte `FiraSans-ExtraBold`-Schriftart die `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wurde `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, müssten aber den Bereich des `font-weight`-Deskriptors ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schrift

In diesem Beispiel wird der `font-weight`-Deskriptor verwendet, um den Bereich der Gewichte einzuschränken, die bei der Verwendung einer variablen Schrift eingestellt werden können.

Wir binden eine variable Schrift, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzigen `@font-face`-At-Regel ein. Wir verwenden den Wert `font-weight: 300 700`, um den Bereich der verfügbaren Schriftgewichte effektiv einzuschränken. Wenn eine CSS-Regel unsere "League Mono"-Schrift verwendet, wird ein Gewicht außerhalb dieses Bereichs auf den definierten Bereich geklemmt.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestalteten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen verschachtelt, sodass Sie die gerenderten gegenüber den deklarierten Schriftgewichtswerten vergleichen können.

Wir binden einen {{htmlelement("input/range")}} vom Typ `range` ein, verschachtelt in ein {{htmlelement("label")}}, das den `step` auf `50` setzt.

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

Wir setzen den Bereich des `font-weight`-Deskriptors auf `300 700`, um die variable Schriftart auf diesen Bereich zu begrenzen.

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

Wir fügen einen Ereignishandler hinzu, der den `font-weight`-Eigenschaftswert des Absatzes aktualisiert und den Text entsprechend ändert:

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

Ändern Sie das Schriftgewicht des Absatzes über den Bereich. Beachten Sie, dass der Beispielabsatz nicht leichter als der obere Absatz mit `300` oder fetter als der untere mit `700` wird; das Schriftgewicht wird auf den Bereich begrenzt, der im `font-weight`-Deskriptor festgelegt wurde.

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
- {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor
