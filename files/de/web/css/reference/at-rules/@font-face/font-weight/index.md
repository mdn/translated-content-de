---
title: "`font-weight` CSS-Attributdescriptor"
short-title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
l10n:
  sourceCommit: c66cecb0ec58ddea1bd624aa89dd355d9b90b5c3
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}}-Attribut angegebenen Schriftarten festzulegen. Der Browser nutzt diese Informationen, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight) setzt.

Typischerweise möchte ein Entwickler Schriftarten aus einer einzigen Schriftfamilie in verschiedenen Gewichtungen verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriftarten zu ermöglichen, wenn die `font-weight` Eigenschaft ein bestimmtes Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}}-Attributregeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), jeweils eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die zu verwendende Schriftart für einen Bereich von Schriftgewichten zu deklarieren, definieren Sie ein durch Leerzeichen getrenntes Paar von Schriftgewichtwerten als Wert für den `font-weight` Deskriptor. Wenn CSS-Regeln ein Schriftgewicht durch Setzen der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}}-Kurzschreibweise setzen, wird die entsprechende Schriftart verwendet.

Wenn zum Beispiel der Deskriptor `font-weight: 400 600;` ist, wird bei der Eigenschaft `font-weight: 450` oder `font-weight: 550` diese Schriftart für diese Schriftfamilie verwendet. Ob es sich um eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts) handelt, die zum Bereich passende Schriftart wird verwendet. In diesem Fall sehen `450` und `550` bei einer statischen Schriftart gleich aus. Bei einer variablen Schriftart wird letztere fetter sein.

Der Deskriptor ist bei allen Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart einstellen, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Schriftgewichtwerte zu verwenden.

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
- Ein einzelner `<font-weight-absolute>`-Wert.
- Ein Paar von `<font-weight-absolute>`-Werten, durch ein Leerzeichen getrennt.

Jeder `<font-weight-absolute>` kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000 einschließlich. Höhere Zahlen stehen für Gewichtungen, die fetter sind als (oder genauso fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gängigen Gewichtsnamen, wie im Abschnitt [Zuordnung von üblichen Gewichtsnamen](#zuordnung_von_üblichen_gewichtsnamen) unten beschrieben.

### Zuordnung von üblichen Gewichtsnamen

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden gängigen Gewichtsnamen:

| Wert | Gängiger Gewichtname        |
| ---- | --------------------------- |
| 100  | Dünn (Haarlinie)            |
| 200  | Extra leicht (Ultra leicht) |
| 300  | Leicht                      |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Halb fett (Demi fett)       |
| 700  | Fett                        |
| 800  | Extra fett (Ultra fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Schriftarten

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlen in der [Zuordnung von üblichen Gewichtsnamen](#zuordnung_von_üblichen_gewichtsnamen) entspricht. Einige Schriftarten jedoch, sogenannte variable Schriftarten, können einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen und bieten dem Designer damit eine viel engere Kontrolle über das gewählte Gewicht.

Bei TrueType- oder OpenType-variablen Schriftarten wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit schlechter Sehfähigkeit können Schwierigkeiten beim Lesen von Text haben, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra leicht) eingestellt ist, insbesondere wenn die Schriftart ein [geringes Kontrastverhältnis der Farben](/de/docs/Web/CSS/Reference/Properties/color#accessibility) hat.

- [MDN Erklärung WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriftarten

In diesem Beispiel fügen wir zwei Schriftarten hinzu, eine mit normalem Gewicht, die andere mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie unter Verwendung von zwei `@font-face` Regeln. Wir stellen `font-weight` Deskriptoren ein, um das Gewicht der Schriftarten zu entsprechen.

Danach können CSS-Regeln die normale oder fette Schrift der "Fira Sans" Familie auswählen, indem die {{cssxref("font-weight")}} Eigenschaft eingestellt wird. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>`-Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

Dieses Beispiel zeigt, wie Autoren mehrere Schriftarten für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face` Erklärungen mit demselben `font-family` Wert einschließen. Indem Sie die `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 einstellen, können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) deklarieren und sicher sein, dass die passende Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Erklärungen für vier verschiedene Schriftarten aus der `FiraSans` Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Erklärung ist auf einen anderen Bereich von Schriftgewichtwerten eingestellt, aber alle verwenden denselben Schriftartnamen.

Die erste Erklärung verwendet `FiraSans-Regular` und sein zugeordnetes `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Erklärungen verwenden die leichte, fette und extra-fette Versionen der Schriftart, und ihre zugeordneten `font-weight` Bereiche definieren Unterbereiche des Bereichs wie folgt:

- die leichte Schriftart ist dem Bereich 1-300 zugeordnet
- die fette Schriftart ist dem Bereich 500-700 zugeordnet
- die extra-fette Schriftart ist dem Bereich 700-1000 zugeordnet

Die CSS [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) stellt sicher, dass die drei letzten Erklärungen Teile des Bereichs überschreiben, der in der `FiraSans-Regular` Erklärung festgelegt wurde.

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

Der `seven` Absatz verwendet die extra-fette Schrift. Obwohl `font-weight: 700` sowohl mit den `FiraSans-Bold` als auch `FiraSans-ExtraBold` Erklärungen übereinstimmt, wird die `FiraSans-ExtraBold` Erklärung aufgrund der späteren Deklaration bevorzugt.

Ebenso verwenden `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen haben, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, aber wir müssten den `font-weight` Deskriptorbereich ändern, wenn wir das tun.

### Festlegen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei der Verwendung einer variablen Schriftart eingestellt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), unter Verwendung einer einzigen `@font-face` Regel ein. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv einzuschränken. Wenn eine CSS-Regel unsere "League Mono" Schriftart verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den Bereich begrenzt.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standardschriftgewicht für nicht gestylten Absatztext ist. Dieser Absatz befindet sich zwischen zwei anderen Absätzen, so dass Sie gerenderte und erklärte Schriftgewichtwerte vergleichen können.

Wir fügen ein {{htmlelement("input/range")}} vom Typ `range` ein, eingebettet in ein {{htmlelement("label")}}, wobei `step` auf `50` gesetzt wird.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700`, um die variable Schriftart auf diesen Bereich zu begrenzen.

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

Wir fügen einen Ereignishandler hinzu, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text anpasst, um die Änderung widerzuspiegeln:

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
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht ist auf den von dem `font-weight` Deskriptor definierten Bereich begrenzt.

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
