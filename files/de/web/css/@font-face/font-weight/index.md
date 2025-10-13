---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der **`font-weight`** [CSS](/de/docs/Web/CSS) {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die in einer {{cssxref("@font-face")}} At-Regel angegebene Schriftart zu definieren. Dies wird dann vom Browser verwendet, um die passende Schrift auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/font-weight) setzt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in verschiedenen Gewichten verwenden. Mit traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen einer Schriftfamilie in einem spezifischen Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von hellen, normalen, fetten oder extra-fetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein spezifisches Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für die gleiche Familie definieren (alle mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein paar durch Leerzeichen getrennte Schriftgewichts-Werte als Wert für den `font-weight` Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht durch Setzen der {{cssxref("font-weight")}} Eigenschaft oder der {{cssxref("font")}} Kurzschreibweise festlegen, wird dann die passende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` ist, und die Eigenschaft `font-weight: 450` oder `font-weight: 550` ist, wird diese Schrift für diese Schriftfamilie verwendet.
Ob die Schrift eine statische oder eine [variable Schrift](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die zur Auswahl passende Schrift wird verwendet. In diesem Fall erscheinen `450` und `550` gleich, wenn die Schrift eine statische Schrift ist. Wenn die Schrift eine variable Schrift ist, wird letztere fetter erscheinen.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schrift einstellen, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um die gleiche Schrift für alle Font-Weight-Eigenschaftswerte zu verwenden.

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
- Ein Paar `<font-weight-absolute>` Werte, durch ein Leerzeichen getrennt.

Jeder `<font-weight-absolute>` kann einer der folgenden Werte sein:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettes Schriftgewicht. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren Gewichte, die fetter (oder genauso fett) wie niedrigere Zahlen sind. Einige häufig verwendete Werte entsprechen gängigen Gewichtsbezeichnungen, wie in der untenstehenden [Häufige Gewichtsbezeichnung](#häufige_gewichtsbezeichnung) Abschnitt beschrieben.

### Häufige Gewichtsbezeichnung

Die numerischen Werte `100` bis `900` entsprechen in etwa den folgenden gängigen Gewichtsbezeichnungen:

| Wert | Gängiger Gewichtsname       |
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

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in [Häufige Gewichtsbezeichnung](#häufige_gewichtsbezeichnung) entspricht. Einige Schriften, die als variable Schriften bezeichnet werden, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen. Dies bietet dem Designer eine viel genauere Kontrolle über das gewählte Gewicht.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit Sehbeeinträchtigungen könnten Schwierigkeiten beim Lesen von Text haben, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung zum Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriften

In diesem Beispiel beziehen wir zwei Schriften ein - eine normale und eine fette - aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie mithilfe von zwei `@font-face` At-Regeln. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften anzupassen.

Nach diesem Schritt können CSS-Regeln die normale oder fette Schrift für die "Fira Sans" Familie auswählen, indem sie einfach die {{cssxref("font-weight")}} Eigenschaft setzen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>` Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

{{embedlivesample("Auswahl normaler und fetter Schriften", "", 300)}}

### Festlegen von Schriftgewichtsbereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftarten) einbinden können, indem sie mehrere `@font-face` Deklarationen mit dem gleichen `font-family` Wert einfügen. Durch das Festlegen der `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 können Sie im Rest Ihres Stylesheets ein `font-weight` (oder `font-style`) deklarieren und sicherstellen, dass die passende Schriftart verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel gezeigt. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichts-Werten gesetzt, aber alle verwenden den gleichen Schriftartennamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtswerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift, und ihre zugehörigen `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- Die leichte Schrift ist mit dem Bereich 1-300 assoziiert
- Die fette Schrift ist mit dem Bereich 500-700 assoziiert
- Die extra-fette Schrift ist mit dem Bereich 700-1000 assoziiert

Die CSS [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letztgenannten Deklarationen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Deklaration festgelegt wurden.

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

{{embedlivesample("Festlegen von Schriftgewichtsbereichen", "", 500)}}

Der `seven` Absatz verwendet die extra fette Schrift. Obwohl `font-weight: 700` sowohl mit den `FiraSans-Bold` als auch `FiraSans-ExtraBold` Deklarationen übereinstimmt, überschreibt `FiraSans-ExtraBold`, da es später deklariert wurde, `FiraSans-Bold` für diesen Wert.

Ebenso verwenden sowohl `100` als auch `300` die leichte Schrift; obwohl sowohl `FiraSans-Regular` als auch `FiraSans-Light` `300` in ihren Bereichen beinhalten, ist `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, aber wir müssten den `font-weight` Deskriptorbereich ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei Verwendung einer variablen Schriftart gesetzt werden können.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), anhand einer einzigen `@font-face` At-Regel hinzu. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schriftart verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht an den Bereich angepasst.

#### HTML

Wir fügen einen Absatz mit `<output>` hinzu, der initial auf `400` gesetzt ist, da dies das Standardschriftgewicht für ungestylte Absatztexte ist. Dieser Absatz steht zwischen zwei anderen Absätzen, sodass Sie die dargestellten Schriftgewichte mit den deklarierten vergleichen können.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700` und begrenzen damit die variable Schrift auf diesen Bereich.

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

Wir fügen einen Ereignis-Handler hinzu, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text entsprechend der Änderung aktualisiert:

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

Verändern Sie das Schriftgewicht des Absatzes über den Bereich.
Beachten Sie, dass der Beispielabsatz weder leichter als der `300` Absatz darüber noch fetter als der `700` Absatz darunter wird; das Schriftgewicht ist auf den Bereich beschränkt, der durch den `font-weight` Deskriptor definiert ist.

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
