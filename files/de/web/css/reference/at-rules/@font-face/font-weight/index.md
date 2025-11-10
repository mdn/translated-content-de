---
title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}}-Deskriptor ermöglicht es den Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}}-Regel angegebene Schriftart zu spezifizieren. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight) festlegt.

In der Regel möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in verschiedenen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriften zu ermöglichen, wenn die Eigenschaft `font-weight` ein spezifisches Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}}-Regeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}}-Deskriptionswert), eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die für einen Bereich von Schriftgewichten zu verwendende Schriftart zu deklarieren, deklarieren Sie ein durch Leerzeichen getrenntes Paar von Schriftgewicht-Werten als Wert für den `font-weight`-Deskriptor. Wenn CSS-Regeln ein Schriftgewicht durch das Setzen der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}}-Kurzform festlegen, wird dann die passende Schriftart verwendet.

Beispielsweise, wenn der Deskriptor `font-weight: 400 600;` lautet, wird bei der Eigenschaft `font-weight: 450` oder `font-weight: 550` diese Schriftart für diese Schriftfamilie verwendet. Ob die Schrift eine statische oder eine [variable Schrift](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts) ist, die der Bandbreite entsprechende Schrift wird verwendet. In diesem Fall werden, wenn die Schrift eine statische Schrift ist, `450` und `550` gleich erscheinen. Wenn die Schrift eine variable Schrift ist, wird die letztere fetter sein.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schrift setzen, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um dieselbe Schrift für alle Schriftgewicht-Eigenschaftswerte zu nutzen.

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

- Das Stichwort `auto`.
- Ein einzelner `<font-weight-absolute>`-Wert.
- Ein Paar von `<font-weight-absolute>`-Werten, getrennt durch ein Leerzeichen.

Jeder `<font-weight-absolute>` kann einer der folgenden sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren Gewichte, die fetter oder genauso fett wie niedrigere Zahlen sind. Bestimmte häufig verwendete Werte entsprechen gängigen Gewichtsnamen, wie im Abschnitt [Übliche Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) unten beschrieben.

### Übliche Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden gebräuchlichen Gewichtsnamen:

| Wert | Gebräuchlicher Gewichtsnamen |
| ---- | ---------------------------- |
| 100  | Dünn (Haarlinie)             |
| 200  | Extra Leicht (Ultra Leicht)  |
| 300  | Leicht                       |
| 400  | Normal                       |
| 500  | Mittel                       |
| 600  | Halb Fett (Demi Fett)        |
| 700  | Fett                         |
| 800  | Extra Fett (Ultra Fett)      |
| 900  | Schwarz (Schwer)             |

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in der [Üblichen Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) entspricht. Es gibt jedoch einige Schriften, sogenannte variable Schriften, die einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen können, und dies kann dem Designer ein viel näher liegendes Maß an Kontrolle über das gewählte Gewicht bieten.

Für TrueType- oder OpenType-variable Schriften wird die "wght"-Variation verwendet, um variierende Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight`-Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/Reference/Properties/color#accessibility) aufweist.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriften

In diesem Beispiel schließen wir zwei Schriften ein, eine mit normalem Gewicht, eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans)-Schriftfamilie, indem wir zwei `@font-face`-Regeln verwenden. Wir setzen `font-weight`-Deskriptoren, um das Gewicht der Schriften zu bestimmen.

Anschließend können mit CSS-Regeln die normale oder die fette Schrift für die „Fira Sans“-Familie einfach durch Einstellen der {{cssxref("font-weight")}}-Eigenschaft ausgewählt werden. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element auch die fette Schrift auswählt, weil `<strong>`-Elemente standardmäßig einen CSS `font-weight`-Eigenschaftswert von `bold` haben.

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

### Einstellen von Schriftgewicht-Bereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face`-Erklärungen mit demselben `font-family`-Wert einbinden. Indem Sie die `font-weight`-Deskriptoren mit Bereichen von 1 bis 1000 festlegen, können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) deklarieren und sicher sein, dass die entsprechende Schrift verwendet wird.

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

Wir fügen vier `@font-face`-Erklärungen für vier verschiedene Schriften aus der `FireSans`-Schriftfamilie ein, wie im vorherigen Beispiel beschrieben. Jede Erklärung ist auf einen anderen Bereich von Schriftgewicht-Werten eingestellt, aber alle verwenden denselben Schriftartnamen.

Die erste Erklärung verwendet `FiraSans-Regular` und der zugehörige `font-weight`-Bereich umfasst den gesamten möglichen Bereich von Schriftgewicht-Werten.

Die anderen drei Erklärungen verwenden die leichten, fetten und extra-fetten Versionen der Schrift, und ihre zugehörigen `font-weight`-Bereiche definieren Teilmengen des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS-[Kaskadensystem](/de/docs/Web/CSS/Guides/Cascade/Introduction) stellt sicher, dass die drei letzteren Erklärungen Teile des Bereichs überschreiben, der in der `FiraSans-Regular`-Erklärung festgelegt wurde.

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

Der `seven`-Absatz verwendet die extra-fette Schrift. Auch wenn `font-weight: 700` sowohl mit den `FiraSans-Bold`- als auch `FiraSans-ExtraBold`-Erklärungen übereinstimmt, überschreibt `FiraSans-ExtraBold`, da es später deklariert wird, `FiraSans-Bold` für diesen Wert.

Ähnlich verwenden `100` und `300` beide die leichte Schrift; obwohl sowohl `FiraSans-Regular` als auch `FiraSans-Light` `300` in ihren Bereichen einschließen, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, müssten jedoch den `font-weight`-Deskriptorbereich ändern, wenn wir das tun.

### Einstellen eines Bereichs für eine variable Schriftart

In diesem Beispiel verwenden wir den `font-weight`-Deskriptor, um den Bereich der Gewichtungen zu beschränken, die festgelegt werden können, wenn eine variable Schrift verwendet wird.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzelnen `@font-face`-Regel ein. Wir verwenden einen `font-weight: 300 700`-Wert, um den verfügbaren Bereich der Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono"-Schrift verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den Bereich geklammert.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der zunächst auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestaltetem Absatztext ist. Dieser Absatz befindet sich zwischen zwei weiteren Absätzen, damit Sie die gerenderten Schriftgewichtwerte mit den deklarierten vergleichen können.

Wir fügen ein {{htmlelement("input/range")}} vom Typ `range` in ein {{htmlelement("label")}} ein und setzen den `step` auf `50`.

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

Wir setzen den `font-weight`-Deskriptorbereich auf `300 700`, um die variable Schrift auf diesen Bereich zu begrenzen.

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

Wir fügen einen Ereignis-Handler ein, der den `font-weight`-Eigenschaftswert des Absatzes aktualisiert und den Text anpasst, um die Änderung widerzuspiegeln:

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
Beachten Sie, dass der Beispielabsatz nicht leichter wird als der `300`-Absatz darüber oder fetter als der `700`-Absatz darunter; das Schriftgewicht wird auf den Bereich geklammert, der durch den `font-weight`-Deskriptor definiert ist.

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
