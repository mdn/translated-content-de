---
title: font-weight
slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{CSSRef}}

Der **`font-weight`** CSS-{{cssxref("@font-face")}}-Deskriptor ermöglicht es Autor:innen, eine einzelne Schriftstärke oder einen Bereich von Schriftstärken für die im {{cssxref("@font-face")}}-At-Regel spezifizierte Schriftart festzulegen. Dies wird dann vom Browser verwendet, um die passende Schriftart auszuwählen, wenn eine CSS-Regel eine gewünschte {{cssxref("font-weight", "Schriftstärke")}} festlegt.

Typischerweise möchte ein Entwickler Schriftarten aus einer einzigen Schriftfamilie in verschiedenen Gewichtungen verwenden. Bei herkömmlichen oder _statischen_ Schriftarten enthält eine einzelne Schriftdatei Zeichen aus einer Schriftfamilie in einer bestimmten Gewichtung und Stilrichtung, z. B. "Helvetica fett kursiv". Um die Anzeige von leichten, normalen, fetten oder extra-fetten Schriftarten zu ermöglichen, wenn die Eigenschaft `font-weight` eine bestimmte Gewichtung aufruft, können mehrere {{cssxref("@font-face")}}-At-Regeln für dieselbe Familie definiert werden (alle mit demselben {{cssxref("@font-face/font-family", "font-family")}}-Deskriptorwert), jeweils eine für jedes Gewicht oder Gewichtungsbereich.

Um die Schriftart für einen Bereich von Schriftstärken zu deklarieren, geben Sie ein durch ein Leerzeichen getrenntes Paar von `font-weight`-Werten als Wert für den `font-weight`-Deskriptor an. Wenn CSS-Regeln eine Schriftstärke durch die Eigenschaften {{cssxref("font-weight")}} oder die Kurzschreibweise {{cssxref("font")}} festlegen, wird dann die entsprechende Schriftart verwendet.

Zum Beispiel, wenn der Deskriptor `font-weight: 400 600;` lautet, wird die angegebene Schriftart in dieser Schriftfamilie bei einem Wert von `font-weight: 450` oder `font-weight: 550` verwendet. Ob die Schriftart statisch oder eine [variable Schriftart](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) ist, es wird immer die passende Schriftart aus dem Bereich verwendet. In diesem Fall werden Schriftartenwerte von `450` und `550` bei statischen Schriften gleich aussehen. Bei variablen Schriften wird letztere jedoch fetter dargestellt.

Der Deskriptor ist für alle Schriftarten gleich, aber der Bereich, den Sie für eine variable Schriftart festlegen, ist in der Regel größer, möglicherweise sogar `1 1000`, um dieselbe Schriftart für alle Werte der Schriftstärken-Eigenschaft zu verwenden.

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

Jeder `<font-weight-absolute>` kann einer der folgenden Werte sein:

- `normal`
  - : Normale Schriftstärke. Entspricht `400`.
- `bold`
  - : Fette Schriftstärke. Entspricht `700`.
- `<number>`
  - : Ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 1 und 1000, inklusive. Höhere Werte repräsentieren Schriftstärken, die fetter sind als (oder genauso fett wie) niedrigere Werte. Bestimmte häufig verwendete Werte entsprechen gebräuchlichen Gewichtsbezeichnungen, wie im Abschnitt [Common weight name mapping](#zuordnung_von_gebräuchlichen_gewichtungsnamen) unten beschrieben.

### Zuordnung von gebräuchlichen Gewichtungsnamen

Die numerischen Werte zwischen `100` und `900` entsprechen in etwa den folgenden gebräuchlichen Gewichtsbezeichnungen:

| Wert | Häufig verwendete Gewichtsbezeichnung |
| ---- | ------------------------------------- |
| 100  | Dünn (Haarlinie)                      |
| 200  | Extra Dünn (Ultra-Light)              |
| 300  | Leicht                                |
| 400  | Normal                                |
| 500  | Mittel                                |
| 600  | Halb Fett (Demi-Fett)                 |
| 700  | Fett                                  |
| 800  | Extra Fett (Ultra-Fett)               |
| 900  | Schwarz (Schwer)                      |

### Variable Schriftarten

Die meisten Schriftarten haben ein bestimmtes Gewicht, das einem der Zahlenwerte in [Zuordnung von gebräuchlichen Gewichtungsnamen](#zuordnung_von_gebräuchlichen_gewichtungsnamen) entspricht. Einige Schriftarten, sogenannte variable Schriftarten, unterstützen jedoch einen Bereich von Schriftstärken mit mehr oder weniger feiner Granularität, was dem Designer eine viel genauere Kontrolle über das gewählte Gewicht ermöglicht.

Für variable TrueType- oder OpenType-Schriften wird die "wght"-Variation zur Implementierung variierender Schriftstärken verwendet.

## Barrierefreiheit

Menschen mit Sehbehinderungen können Schwierigkeiten haben, Texte mit einem `font-weight`-Wert von `100` (sehr dünn) oder `200` (extra leicht) zu lesen, insbesondere wenn die Schriftart ein [geringes Kontrastverhältnis](/de/docs/Web/CSS/color#accessibility) aufweist.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Normale und fette Schriftarten auswählen

In diesem Beispiel schließen wir zwei Schriftarten ein, eine normale Gewichtung, eine fette Gewichtung, aus der ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans)-Schriftfamilie, indem zwei `@font-face`-Regeln verwendet werden. Wir setzen `font-weight`-Deskriptoren, um das Gewicht der Schriftarten anzupassen.

Nach dieser Deklaration können CSS-Regeln durch das Festlegen der {{cssxref("font-weight")}}-Eigenschaft zwischen der normalen und der fetten Schriftart für die Schriftfamilie "Fira Sans" wählen. Beachten Sie, dass das {{htmlelement("strong")}}-HTML-Element ebenfalls die fette Schriftart auswählt, da `<strong>`-Elemente standardmäßig eine `font-weight`-Eigenschaft von `bold` haben.

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

### Schriftstärkenbereiche festlegen

Dieses Beispiel zeigt, wie Autor:innen mehrere Schriftarten für mehrere Schriftstärken (und Schriftarten-Stile) einbinden können, indem mehrere `@font-face`-Deklarationen mit demselben `font-family`-Wert verwendet werden. Durch Festlegen der `font-weight`-Deskriptoren in einem Bereich von 1 bis 1000 können Sie im Rest Ihrer Stylesheets eine `font-weight` (oder `font-style`) deklarieren und sicher sein, dass die entsprechende Schriftart verwendet wird.

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

Wir schließen vier `@font-face`-Deklarationen für vier verschiedene Schriftarten aus der `FireSans`-Schriftfamilie ein, wie im vorherigen Beispiel gezeigt. Jede Deklaration ist auf einen anderen Bereich von Schriftstärkenwerten festgelegt, aber alle verwenden denselben Schriftartnamen.

Die erste Deklaration verwendet `FiraSans-Regular` und ihr zugehöriger `font-weight`-Bereich umfasst den gesamten möglichen Bereich von Schriftstärkenwerten.

Die anderen drei Deklarationen verwenden die leichte, fette und extra-fette Version der Schrift und deren zugehörige `font-weight`-Bereiche definieren Teilmengen des Bereichs wie folgt:

- Die leichte Schriftart ist dem Bereich 1–300 zugeordnet.
- Die fette Schriftart ist dem Bereich 500–700 zugeordnet.
- Die extra-fette Schriftart ist dem Bereich 700–1000 zugeordnet.

Die CSS-[Kaskade](/de/docs/Web/CSS/Cascade) stellt sicher, dass die drei letzteren Deklarationen Teile des Bereichs überschreiben, der in der `FiraSans-Regular`-Deklaration festgelegt wurde.

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

Der `seven`-Absatz verwendet die extra-fette Schriftart. Während `font-weight: 700` sowohl der `FiraSans-Bold`- als auch der `FiraSans-ExtraBold`-Deklaration entspricht, überschreibt `FiraSans-ExtraBold`, da es später deklariert wird, die `FiraSans-Bold`-Deklaration für diesen Wert.

Ähnlich verwenden `100` und `300` beide die leichte Schriftart; obwohl sowohl `FiraSans-Regular` als auch `FiraSans-Light` den Bereich `300` enthalten, wird `FiraSans-Light` später deklariert. Alternativ könnten wir `FiraSans-Regular` nach `FiraSans-Light` deklarieren, jedoch müssten wir den Bereich des `font-weight`-Deskriptors anpassen, wenn wir dies tun.

### Bereich für eine variable Schriftart festlegen

In diesem Beispiel verwenden wir den Deskriptor `font-weight`, um den Bereich der Schriftstärken einzuschränken, die mit einer variablen Schriftart festgelegt werden können.

Eine variable Schriftart, ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono), wird mit einer einzigen `@font-face`-At-Regel eingebunden. Wir verwenden einen Wert von `font-weight: 300 700`, um effektiv den Bereich der verfügbaren Gewichtungen einzuschränken. Wenn eine CSS-Regel unsere Schriftart "League Mono" verwendet und ein Gewicht außerhalb dieses Bereichs angibt, wird das Gewicht auf den durch den Deskriptor definierten Bereich begrenzt.

#### HTML

Wir schließen einen Abschnitt mit `<output>` ein, der initial auf `400` gesetzt ist, da dies die Standard-Schriftstärke für nicht gestylten Absatztext ist. Dieser Absatz wird zwischen zwei weiteren Absätzen platziert, sodass Sie renderten und deklarierten Schriftstärkenwert vergleichen können.

Ein {{htmlelement("input/range")}}-Schieberegler vom Typ `range` wird in ein {{htmlelement("label")}} verschachtelt, wobei der `step`-Wert auf `50` gesetzt wird.

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

Ein Event-Handler wird hinzugefügt, der den Wert der `font-weight`-Eigenschaft des Absatzes aktualisiert und den Text entsprechend anpasst:

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

Ändern Sie das Schriftgewicht des Absatzes über den Schieberegler. Beachten Sie, dass der Beispielabsatz nicht leichter wird als der `300`-Absatz darüber oder fetter als der `700`-Absatz darunter; das Schriftgewicht wird auf den durch den `font-weight`-Deskriptor definierten Bereich begrenzt.

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
