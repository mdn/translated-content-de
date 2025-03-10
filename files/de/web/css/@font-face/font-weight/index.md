---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Der **`font-weight`** CSS {{cssxref("@font-face")}} Deskriptor ermöglicht es Autoren, ein einzelnes Schriftgewicht oder einen Bereich von Schriftgewichten für die im {{cssxref("@font-face")}} At-Regel spezifizierte Schriftart anzugeben. Der Browser verwendet dies dann, um die passende Schriftart auszuwählen, wenn eine CSS-Regel ein gewünschtes [Schriftgewicht](/de/docs/Web/CSS/font-weight) festlegt.

Typischerweise möchte ein Entwickler Schriften aus einer einzigen Schriftfamilie in verschiedenen Gewichten verwenden. Bei traditionellen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einem bestimmten Gewicht und Stil: zum Beispiel "Helvetica fett kursiv". Um die Anzeige von leichten, regulären, fetten oder extrafetten Schriften zu ermöglichen, wenn die `font-weight` Eigenschaft ein bestimmtes Gewicht aufruft, können Sie mehrere {{cssxref("@font-face")}} At-Regeln für dieselbe Familie definieren (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}} Deskriptorwert), eine für jedes Gewicht oder jeden Gewichtsbereich.

Um die zu verwendende Schriftart für einen Bereich von Schriftgewichten zu deklarieren, geben Sie ein durch Leerzeichen getrenntes Paar von Schriftgewichtswerten als Wert des `font-weight` Deskriptors an. Wenn CSS-Regeln ein Schriftgewicht durch Festlegung der {{cssxref("font-weight")}} Eigenschaft oder der {{cssxref("font")}} Kurzschreibweise festlegen, wird die entsprechende Schriftart verwendet.

Wenn zum Beispiel der Deskriptor `font-weight: 400 600;` lautet, wird diese Schriftart für `font-weight: 450` oder `font-weight: 550` für diese Schriftfamilie verwendet. Ob die Schriftart statisch oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, die Schriftart, die dem Bereich entspricht, wird verwendet. In diesem Fall erscheinen `450` und `550` bei einer statischen Schriftart gleich. Wenn die Schriftart eine variable Schriftart ist, wird letztere fetter dargestellt.

Der Deskriptor ist für alle Schriften gleich, aber der Bereich, den Sie für eine variable Schriftart festlegen, wird im Allgemeinen größer sein, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Werte der Schriftgewicht-Eigenschaft zu verwenden.

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

Jeder `<font-weight-absolute>` kann einen der folgenden Werte haben:

- `normal`
  - : Normales Schriftgewicht. Entspricht `400`.
- `bold`
  - : Fettschrift. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}} Wert zwischen 1 und 1000, einschließlich. Größere Zahlen stellen fettere (oder ebenso fetter) Gewichte als kleinere Zahlen dar. Bestimmte häufig verwendete Werte entsprechen üblichen Gewichtsnamen, wie in der unten stehenden Sektion [Übliche Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) beschrieben.

### Übliche Gewichtsnamen-Zuordnung

Die numerischen Werte `100` bis `900` entsprechen grob den folgenden üblichen Gewichtsnamen:

| Wert | Üblicher Gewichtname     |
| ---- | ------------------------ |
| 100  | Dünn (Haarlinierung)     |
| 200  | Extra Hell (Ultra Light) |
| 300  | Hell                     |
| 400  | Normal                   |
| 500  | Mittel                   |
| 600  | Halbfett (Demi Bold)     |
| 700  | Fett                     |
| 800  | Extra Fett (Ultra Bold)  |
| 900  | Schwarz (Schwer)         |

### Variable Schriftarten

Die meisten Schriften haben ein bestimmtes Gewicht, das einem der Zahlen in der [Übliche Gewichtsnamen-Zuordnung](#übliche_gewichtsnamen-zuordnung) entspricht. Einige Schriften, sogenannte variable Schriften, können jedoch einen Bereich von Gewichten mit mehr oder weniger feiner Granularität unterstützen, und dies kann dem Designer einen viel genaueren Grad der Kontrolle über das gewählte Gewicht geben.

Für TrueType- oder OpenType-Variable-Schriften wird die "wght" Variation verwendet, um unterschiedliche Gewichte zu implementieren.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Text zu lesen, der mit einem `font-weight` Wert von `100` (Dünn/Haarlinierung) oder `200` (Extra Hell) gesetzt ist, insbesondere wenn die Schriftart ein [niedriges Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verstehen WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen Erfolgs-Kriterium 1.4.8 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normale und fette Schriftarten auswählen

In diesem Beispiel fügen wir zwei Schriften ein, eine normale und eine fette, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) Schriftfamilie, indem wir zwei `@font-face` At-Regeln verwenden. Wir setzen `font-weight` Deskriptoren, um das Gewicht der Schriften zu entsprechen.

Danach können CSS-Regeln die normale oder die fette Schrift für die "Fira Sans" Familie einfach durch Festlegung der {{cssxref("font-weight")}} Eigenschaft auswählen. Beachten Sie, dass das {{htmlelement("strong")}} HTML-Element auch die fette Schrift auswählt, da `<strong>` Elemente standardmäßig einen CSS `font-weight` Eigenschaftswert von `bold` haben.

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

### Schriftgewichtsbereiche festlegen

Dieses Beispiel zeigt, wie Autoren mehrere Schriften für mehrere Schriftgewichte (und Schriftstile) einbinden können, indem sie mehrere `@font-face` Erklärungen mit demselben `font-family` Wert einfügen. Durch die Festlegung der `font-weight` Deskriptoren mit Bereichen von 1 bis 1000 können Sie im Rest Ihrer Stylesheets ein `font-weight` (oder `font-style`) deklarieren und wissen, dass die richtige Schrift verwendet wird.

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

Wir fügen vier `@font-face` Erklärungen für vier verschiedene Schriften aus der `FireSans` Schriftfamilie ein, wie im vorherigen Beispiel zu sehen. Jede Erklärung ist auf einen anderen Bereich von Schriftgewichtswerten eingestellt, aber alle verwenden denselben Schriftnamen.

Die erste Erklärung verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight` Bereich umfasst den gesamten möglichen Bereich von Schriftgewichtwerten.

Die anderen drei Erklärungen verwenden die leichten, fetten und extra fetten Versionen der Schrift, und ihre zugehörigen `font-weight` Bereiche definieren Teilbereiche des Bereichs wie folgt:

- die leichte Schrift ist mit dem Bereich 1-300 verbunden
- die fette Schrift ist mit dem Bereich 500-700 verbunden
- die extra fette Schrift ist mit dem Bereich 700-1000 verbunden

Das CSS [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) stellt sicher, dass die drei letzteren Erklärungen Teile des Bereichs überschreiben, die in der `FiraSans-Regular` Erklärung eingestellt wurden.

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

Der `seven` Paragraph verwendet die extra fette Schriftart. Während `font-weight: 700` sowohl mit der `FiraSans-Bold` als auch `FiraSans-ExtraBold` Erklärung übereinstimmt, überschreibt die später deklarierte FiraSans-ExtraBold für diesen Wert die `FiraSans-Bold`.

Ebenso verwenden `100` und `300` beide die leichte Schrift; obwohl `FiraSans-Regular` und `FiraSans-Light` beide `300` in ihren Bereichen enthalten, wird `FiraSans-Light` später deklariert. Alternativ hätten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren können, aber wir müssten den Bereich des `font-weight` Deskriptors ändern, wenn wir dies tun.

### Einen Bereich für eine variable Schriftart festlegen

In diesem Beispiel verwenden wir den `font-weight` Deskriptor, um den Bereich von Gewichten zu beschränken, die festgelegt werden können, wenn eine variable Schriftart verwendet wird.

Wir fügen eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), mit einem einzigen `@font-face` At-Regel ein. Wir verwenden einen `font-weight: 300 700` Wert, um den Bereich der verfügbaren Gewichte effektiv zu begrenzen. Wenn eine CSS-Regel unsere "League Mono" Schrift verwendet, dann wird bei Angabe eines Gewichts außerhalb dieses Bereichs das Gewicht auf den Bereich beschränkt.

#### HTML

Wir fügen einen Paragraph hinzu mit `<output>`, der anfänglich auf `400` gesetzt ist, da dies das Standard-Schriftgewicht für ungestylten Paragraphentext ist. Dieser Paragraph ist zwischen zwei anderen Paragraphen eingefügt, sodass Sie die gerenderten mit den deklarierten Schriftgewichtswerten vergleichen können.

Wir fügen einen {{htmlelement("input/range")}} vom Typ `range` ein, eingebettet in ein {{htmlelement("label")}}, und setzen den `step` auf `50`.

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

Wir fügen einen Ereignis-Handler hinzu, der den `font-weight` Eigenschaftswert des Paragraphs aktualisiert und den Text reflektiert:

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

Ändern Sie das Schriftgewicht des Paragraphen über den Bereich. Beachten Sie, dass der Beispielparagraph weder leichter als der `300` Paragraph darüber noch fetter als der `700` Paragraph darunter wird; das Schriftgewicht wird auf den Bereich begrenzt, der durch den `font-weight` Deskriptor definiert ist.

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
