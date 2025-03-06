---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Der **`font-weight`** CSS {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel spezifizierte Schriftart anzugeben. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes {{cssxref("font-weight", "Schriftgewicht")}} festlegt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in unterschiedlichen Gewichtungen verwenden. Bei herkömmlichen oder _statischen_ Schriften enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica bold italic". Um bei der Verwendung der `font-weight` Eigenschaft bestimmte Gewichtungen anzuzeigen, wie leicht, normal, fett oder extra-fett, können Sie mehrere {{cssxref("@font-face")}}-At-Regeln für die gleiche Familie definieren (alle mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Bereich von Gewichten.

Um die Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein durch Leerzeichen getrenntes Paar von Schriftgewichts-Werten als Wert für den `font-weight` Deskriptor an. Wenn CSS-Regeln ein Schriftgewicht mit der {{cssxref("font-weight")}}-Eigenschaft oder der {{cssxref("font")}} Kurzschrift-Eigenschaft festlegen, wird dann die passende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` lautet, wird diese Schriftart für diese Schriftfamilie verwendet, wenn die Eigenschaft `font-weight: 450` oder `font-weight: 550` ist. Unabhängig davon, ob die Schriftart eine statische oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, wird die Schriftart verwendet, die dem Bereich entspricht. In diesem Fall erscheinen `450` und `550` bei statischen Schriftarten gleich. Bei einer variablen Schrift wäre letztere fetter.

Der Deskriptor ist für alle Schriften gleich, doch wird der Bereich, den Sie für eine variable Schrift festlegen, in der Regel größer sein, möglicherweise sogar `1 1000`, um dieselbe Schrift für alle Schriftgewicht-Werte zu verwenden.

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
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich. Höhere Zahlen repräsentieren Gewichte, die fetter oder so fett wie niedrigere Zahlen sind. Bestimmte häufig verwendete Werte entsprechen üblichen Gewichtsnamen, wie im Abschnitt [Übliche Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) beschrieben.

### Übliche Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen ungefähr den folgenden üblichen Gewichtsnamen:

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

### Variable Schriften

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in der [Übliche Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, was dem Designer eine genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght"-Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Texte zu lesen, die mit einem `font-weight` Wert von `100` (Dünn/Haarlinie) oder `200` (Extra Leicht) gesetzt sind, insbesondere wenn die Schrift ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl von normalen und fetten Schriften

In diesem Beispiel binden wir zwei Schriften ein, eine mit normalem Gewicht, eine mit fettem Gewicht, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, indem wir zwei `@font-face` At-Regeln verwenden. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften abzugleichen.

Anschließend können CSS-Regeln die normale oder fette Schrift der "Fira Sans"-Familie einfach durch Festlegen der {{cssxref("font-weight")}}-Eigenschaft auswählen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element ebenfalls die fette Schrift auswählt, da `<strong>`-Elemente standardmäßig einen CSS `font-weight`-Eigenschaftswert von `bold` haben.

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

### Festlegen von Schriftgewicht-Bereichen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face`-Deklarationen mit demselben `font-family`-Wert einfügen. Indem Sie die `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 festlegen, können Sie in Ihren Stylesheets ein `font-weight` (oder `font-style`) deklarieren und sicherstellen, dass die passende Schriftart verwendet wird.

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

Wir binden vier `@font-face`-Deklarationen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie ein, wie im vorhergehenden Beispiel gezeigt. Jede Deklaration ist auf einen anderen Bereich von Schriftgewichtswerten gesetzt, verwendet jedoch alle denselben Schriftnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und der zugeordnete `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtswerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift und ihre zugehörigen `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist dem Bereich 1-300 zugeordnet
- die fette Schrift ist dem Bereich 500-700 zugeordnet
- die extra-fette Schrift ist dem Bereich 700-1000 zugeordnet

Das CSS [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) sorgt dafür, dass die drei letztgenannten Deklarationen Teile des Bereichs überschreiben, der in der `FiraSans-Regular` Deklaration festgelegt wurde.

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

Der `seven` Absatz verwendet die extra-fette Schrift. Während `font-weight: 700` sowohl mit den `FiraSans-Bold` als auch den `FiraSans-ExtraBold` Deklarationen übereinstimmt, hebt die später deklarierte `FiraSans-ExtraBold` die `FiraSans-Bold` für diesen Wert auf.

Ebenso verwenden `100` und `300` beide die leichte Schrift; obwohl sowohl `FiraSans-Regular` als auch `FiraSans-Light` `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ könnten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren, müssten jedoch den `font-weight` Deskriptorbereich ändern, wenn wir dies tun.

### Festlegen eines Bereichs für eine variable Schrift

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich der Gewichte einzuschränken, die bei der Verwendung einer variablen Schriftart gesetzt werden können.

Wir binden eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einer einzigen `@font-face` At-Regel ein. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schriftart verwendet, wird ein Gewicht, das außerhalb dieses Bereichs liegt, auf den Bereich beschränkt.

#### HTML

Wir binden einen Absatz mit `<output>` ein, der anfänglich auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestylten Absatztext ist. Dieser Absatz ist zwischen zwei anderen Absätzen eingebettet, sodass Sie die gerenderten und deklarierten Schriftgewichtswerte vergleichen können.

Wir binden ein {{htmlelement("input/range")}} vom Typ `range` ein, das in einem {{htmlelement("label")}} verschachtelt ist und setzen den `step` auf `50`.

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

Wir setzen den `font-weight` Deskriptorbereich auf `300 700`, um die variable Schrift auf diesen Bereich zu beschränken.

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

Wir binden einen Ereignishandler ein, der den `font-weight` Eigenschaftswert des Absatzes aktualisiert und den Text entsprechend ändert:

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

Ändern Sie das Schriftgewicht des Absatzes über den Bereich. Beachten Sie, dass der Beispielabsatz nicht leichter wird als der `300` Absatz darüber oder fetter als der `700` Absatz darunter; das Schriftgewicht wird auf den durch den `font-weight` Deskriptor definierten Bereich begrenzt.

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
