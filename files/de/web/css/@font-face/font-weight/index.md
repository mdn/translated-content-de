---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 969c3ca835e0a43a403ed61a3ea8245539fcc4dd
---

{{CSSRef}}

Der **`font-weight`** CSS {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} Attribut angegebenen Schriftarten zu spezifizieren. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes {{cssxref("font-weight", "Schriftgewicht")}} setzt.

In der Regel möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in einer Vielzahl unterschiedlicher Gewichte verwenden. Bei traditionellen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extra-fetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein bestimmtes Gewicht anfordert, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für dieselbe Familie (alle mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert) definieren, eine für jedes Gewicht oder Gewichtsbereich.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, deklarieren Sie ein durch Leerzeichen getrenntes Paar von `font-weight` Werten als Wert für den `font-weight` Deskriptor. Wenn CSS-Regeln ein Schriftgewicht setzen, indem sie die {{cssxref("font-weight")}} Eigenschaft oder die {{cssxref("font")}} Kurzform-Eigenschaft setzen, wird dann die passende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` lautet, wird die Schriftart für diese Schriftfamilie verwendet, wenn die Eigenschaft `font-weight: 450` oder `font-weight: 550` ist. Ob die Schrift eine statische oder eine [variable Schrift](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die Schriftart, die dem Bereich entspricht, wird verwendet. In diesem Fall, wenn die Schrift eine statische Schrift ist, sehen `450` und `550` gleich aus. Wenn es sich um eine variable Schrift handelt, wird letztere fetter erscheinen.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schrift festlegen werden, wird in der Regel größer sein, möglicherweise sogar `1 1000`, um dieselbe Schrift für alle Schriftgewichtswerte zu verwenden.

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
  - : Normales Schriftgewicht. Gleich wie `400`.
- `bold`
  - : Fettes Schriftgewicht. Gleich wie `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, inklusive. Höhere Zahlen stehen für Gewichte, die fetter sind als (oder genauso fett wie) niedrigere Zahlen. Bestimmte häufig verwendete Werte entsprechen gängigen Gewichtsnamen, wie in der [Mapping von häufigen Gewichtsnamen](#mapping_von_häufigen_gewichtsnamen) unten beschrieben.

### Mapping von häufigen Gewichtsnamen

Die numerischen Werte von `100` bis `900` entsprechen ungefähr den folgenden gängigen Gewichtsnamen:

| Wert | Gängiger Gewichtsnamen      |
| ---- | --------------------------- |
| 100  | Dünn (Haarlinie)            |
| 200  | Extra Leicht (Ultra Leicht) |
| 300  | Leicht                      |
| 400  | Normal                      |
| 500  | Mittel                      |
| 600  | Semi Fett (Demi Fett)       |
| 700  | Fett                        |
| 800  | Extra Fett (Ultra Fett)     |
| 900  | Schwarz (Schwer)            |

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in der [Mapping von häufigen Gewichtsnamen](#mapping_von_häufigen_gewichtsnamen) entspricht. Einige Schriften, die als variable Schriften bezeichnet werden, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen und bieten dem Designer so eine viel genauere Kontrolle über das gewählte Gewicht.

Für TrueType oder OpenType variable Schriften wird die "wght" Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Personen mit Sehbehinderungen könnten Schwierigkeiten beim Lesen von Text haben, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt ist, insbesondere wenn die Schrift ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl normaler und fetter Schriften

In diesem Beispiel verwenden wir zwei Schriften, eine mit normalem Gewicht, eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, indem wir zwei `@font-face` At-Regeln verwenden. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften abzugleichen.

Danach können CSS-Regeln die normale oder die fette Schrift für die "Fira Sans" Familie auswählen, indem sie die {{cssxref("font-weight")}} Eigenschaft setzen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, weil `<strong>` Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

Dieses Beispiel demonstriert, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und -stile) einbinden können, indem sie mehrere `@font-face` Deklarationen mit demselben `font-family` Wert einfügen. Indem Sie die `font-weight` Deskriptoren von 1 bis 1000 festlegen, können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die passende Schrift verwendet wird.

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

Wir fügen vier `@font-face` Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel gezeigt. Jede Deklaration wird auf einen anderen Bereich von Schriftgewichtswerten gesetzt, aber alle verwenden denselben Schriftnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und deren zugehöriger `font-weight` Bereich umfasst den gesamten möglichen Bereich der Schriftgewichtswerte.

Die anderen drei Deklarationen verwenden die leichte, fett und extra-fett Version der Schrift, und deren zugehörige `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS [Kaskadierung](/de/docs/Web/CSS/Cascade) stellt sicher, dass die drei letzteren Deklarationen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Deklaration festgelegt wurden.

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

Der `seven` Absatz verwendet die extra-fette Schrift. Während `font-weight: 700` sowohl die `FiraSans-Bold` als auch die `FiraSans-ExtraBold` Deklarationen abgleicht, überschreibt, da die `FiraSans-ExtraBold` später deklariert ist, diese die `FiraSans-Bold` für diesen Wert.

Ebenso verwenden sowohl der `100` als auch der `300` Absatz die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, müssten jedoch den `font-weight` Deskriptorbereich ändern, wenn wir dies tun.

### Einstellen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei der Verwendung einer variablen Schrift festgelegt werden können.

Wir fügen eine variable Schrift ein, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), durch die Verwendung einer einzelnen `@font-face` At-Regel. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet, wird das Gewicht, wenn es außerhalb dieses Bereichs liegt, auf den Bereich geklemmt.

#### HTML

Wir fügen einen Absatz mit `<output>` ein, der initial auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingefügt, sodass Sie gerenderte gegenüber deklarierte Schriftgewichtswerte vergleichen können.

Wir fügen ein {{htmlelement("input/range")}} vom Typ `range` hinzu, eingekapselt in ein {{htmlelement("label")}}, wobei der `step` auf `50` gesetzt wird.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700`, um die variable Schrift auf diesen Bereich zu klemmen.

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

Wir fügen einen Ereignishandler hinzu, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text spiegelt, um die Veränderung zu reflektieren:

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
Beachten Sie, dass der Beispielabsatz nicht leichter als der `300` Absatz darüber oder fetter als der `700` Absatz darunter wird; das Schriftgewicht ist auf den durch den `font-weight` Deskriptor definierten Bereich geklemmt.

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
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Descriptor
