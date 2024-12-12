---
title: Variable Fonts Leitfaden
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 498b20f9027718a6873b85307e8a91e1a554d1e5
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftartendatei für jede Breite, jedes Gewicht oder jeden Stil zu haben. Sie können alle Variationen, die in einer bestimmten Schriftartdatei enthalten sind, über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz zugreifen. Dieser Artikel wird Ihnen alles vermitteln, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools nutzen.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, vorherige Schriftarten und deren Vergleich zu betrachten.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriftarten produziert, wobei jede Schriftart eine spezifische Breite/Gewicht/Stilkombination repräsentierte. So würden Sie separate Dateien für ‚Roboto Regular‘, ‚Roboto Bold‘ und ‚Roboto Bold Italic‘ haben – was dazu führen konnte, dass Sie 20 oder 30 verschiedene Schriftartdateien benötigen, um eine vollständige Schriftfamilie darzustellen (bei großen Schriftarten mit unterschiedlichen Breiten könnte es noch mehr sein).

In einem solchen Szenario müssten Sie für die typische Nutzung einer Schriftart auf einer Website für Fließtext mindestens vier Dateien verwenden: regular, italic, bold und bold italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, müssten Sie mehrere weitere Dateien hinzufügen. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladenden Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einer Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die 4, die Sie für den Fließtext laden würden. Der Vorteil bei der Wahl einer Variable Font ist, dass Ihnen das gesamte Spektrum an Gewichten, Breiten und Stilen zur Verfügung steht, anstatt auf die wenigen beschränkt zu sein, die Sie vorher separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie sie im Print-Bereich angewendet werden, wie etwa unterschiedlich große Überschriften in verschiedenen Gewichten für eine bessere Lesbarkeit bei jeder Größe zu setzen oder eine etwas schmälere Breite für datenreiche Darstellungen zu verwenden. Zum Vergleich: In einem typografischen System für ein Magazin werden typischerweise 10–15 oder mehr verschiedene Gewicht- und Breitkombinationen im gesamten Werk genutzt — dies bietet ein viel breiteres Spektrum an Stilen als derzeit im Web (oder aus Gründen der Leistung allein praktikabel).

#### Eine Anmerkung zu Schriftartenfamilien, Gewicht und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir darüber gesprochen haben, eine spezifische Schriftartdatei für jedes Gewicht und jeden Stil (d. h. fett und kursiv sowie fett kursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschrift haben, die oft völlig andere Zeichen enthalten (kleine 'a' und 'g's sind in Kursiv häufig ganz anders, zum Beispiel). Um das Schriftartdesign genau zu reflektieren und Unterschiede zwischen Browsern und wie sie die verschiedenen Stile möglicherweise oder möglicherweise nicht synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftartdateien dort zu laden, wo sie benötigt werden, wenn eine nicht-variable Schriftart verwendet wird.

Es kann auch sein, dass einige Variable Fonts in zwei Dateien unterteilt sind: eine für die aufrechten Variationen und eine, die die Kursivvariationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, falls die Kursivschrift nicht benötigt oder genutzt wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verlinken, damit Sie sie mit derselben `font-family` und dem passenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Variable Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursivgeschriebene Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Das Gewicht könnte von 1-999 reichen, während Kursiv 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind die, die am häufigsten angetroffen werden und häufig genug vorkommen, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden, und in einem Fall ein neues eingeführt, das Sie weiter unten sehen.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartdesigner kann jede Achse definieren und bestimmen, die ihm einfällt, und muss ihr lediglich ein vierbuchstabiges **Tag** geben, um sie innerhalb des Schriftartdateiformats selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den unten stehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die niedrigere Syntax enthalten. Die niedrigere Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Variable Font-Unterstützung zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Jedoch war die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die passende Eigenschaft verwendet werden, und die niedrigere Syntax von `font-variation-settings` nur verwendet werden, um Werte oder Achsen festzulegen, die sonst nicht verfügbar sind.

#### Notizen

1. Bei der Nutzung von `font-variation-settings` ist es wichtig zu beachten, dass Achsenbezeichnungen case-sensitiv sind. Die registrierten Achsenbezeichnungen müssen in Kleinbuchstaben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Gradation) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (so wie wenn Sie OpenType-Schriftartmerkmale mit {{cssxref("font-feature-settings")}} setzen). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Das Gewicht (repräsentiert durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. In CSS existiert schon lange die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` annimmt, die Alias für ihre entsprechenden numerischen Werte (400 und 700 in diesem Fall) sind. Diese werden weiterhin bei der Arbeit mit nicht-variablen oder Variablen Fonts angewendet, aber bei letzteren ist nun jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer Variable Font auf das Schlüsselwort `bold` (oder ein anderes Schlüsselwort) zuzuordnen. Dies kann im Allgemeinen recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-weight-Werten zu experimentieren.

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Weight</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="adjustable">
  <p class="p3">Weight</p>
  (font-variation-settings: "wght" <span id="angle-text">625</span>)<br />
  <label for="text-axis">Adjust Weight: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* weight range is 300 to 900 */
.p1 {
  font-weight: 625;
}

/* weight range is 300 to 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wght" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", "450px")}}

### Breite

Die Breite (repräsentiert durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (verdichtet oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mithilfe der {{cssxref("font-stretch")}}-Eigenschaft gesetzt, mit Werten, die als Prozentwert über oder unter ‚normal‘ (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig — obwohl es weit wahrscheinlicher ist, dass der Bereich näher am 100%-Markenbereich, wie 75%–125%, liegen würde. Wenn ein Zahlenwert außerhalb des im Font kodierten Bereichs angegeben wird, sollte der Browser den Font am nächsten zulässigen Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-width-Werten zu experimentieren.

```html hidden live-sample___variable-fonts-width-example
<div>
  <p class="p1">Width</p>
  <span>(font-stretch: 60%)</span>
</div>
<div>
  <p class="p2">Width</p>
  <span>(font-variation-settings: "wdth" 60)</span>
</div>
<div class="adjustable">
  <p class="p3">Width</p>
  (font-variation-settings: "wdth" <span id="angle-text">60</span>)<br />

  <label for="text-axis">Adjust Width: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="55"
    max="100"
    value="60" />
</div>
```

```css hidden live-sample___variable-fonts-width-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 60;
}
```

```css live-sample___variable-fonts-width-example
/* width range is 55% to 100% */
.p1 {
  font-stretch: 60%;
}

/* width range is an integer from 55 to 100 */
.p2 {
  font-variation-settings: "wdth" 60;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wdth" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-width-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-width-example", "", "450px")}}

### Kursiv

Die Kursivachse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" angibt. Kursiv-Designs beinhalten oft dramatisch unterschiedliche Buchstabenformen gegenüber ihren aufrechten Gegenstücken, sodass im Übergang von aufrecht zu kursiv mehrere Glyphen- (oder Zeichen-) Ersetzungen in der Regel stattfinden. Kursiv und Schräg (oblique) werden oft etwas austauschbar verwendet, sind aber in Wahrheit ganz verschieden. Schräg wird in diesem Kontext mit dem Begriff `slant` definiert (siehe unten Abschnitt), und eine Schriftart hätte typischerweise eines von beiden, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg auf Text mit der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — das verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann auch verwendet werden, um falsches Fetten zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-italics zu experimentieren.

```html hidden live-sample___variable-fonts-italic-example
<div>
  <p class="p1">Italic</p>
  <span>(font-style: italic)</span>
  <p class=".p1-no-synthesis">Italic</p>
  <span>(font-style: italic; font-synthesis: none)</span>
</div>
<div>
  <p class="p2">Italic</p>
  <span>(font-variation-settings: "ital" 1)</span>
</div>
<div class="adjustable">
  <p class="p3">Italic</p>
  (font-variation-settings: "ital" <span id="angle-text">1</span>)<br />

  <label for="slant-angle">Adjust Italic: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="0"
    max="1"
    value="1" />
</div>
```

```css hidden live-sample___variable-fonts-italic-example
@font-face {
  font-family: "Jost VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/jost-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-display: swap;
}

p {
  font:
    1.2em "Jost VF",
    Helvetica,
    Arial,
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 1;
}
```

```css live-sample___variable-fonts-italic-example
/* font-style: italic, with and without font-synthesis */
.p1 {
  font-style: italic;
}

.p1-no-synthesis {
  font-style: italic;
  font-synthesis: none;
}

/* italic range is 0 or 1 */
.p2 {
  font-variation-settings: "ital" 1;
  font-synthesis: none;
}

/* Adjust with slider & custom property */
.p3 {
  font-synthesis: none;
  font-variation-settings: "ital" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-italic-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-italic-example", "", "450px")}}

### Neigung

Die Neigung (repräsentiert durch das `slnt`-Tag), oder wie es oft bezeichnet wird, 'oblique' — unterscheidet sich von wahren Kursiven darin, dass sie den Winkel der Buchstabenformen verändert, aber keine Art von Zeichenersetzung durchführt. Sie ist auch variabel, da sie als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schriftart überall entlang der Neigungsachse zu variieren. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird bei der Verwendung der `font-variation-settings`-Eigenschaft nicht verwendet. Auch bedeutet im Fall der `font-variation-settings`-Eigenschaft ein positiver Winkel eine linksläufige Neigung.

Im folgenden Live-Beispiel können Sie die Neigung anpassen.

```html hidden live-sample___slant-example
<div>
  <p class="font-style">Slant</p>
  <span>(font-style: oblique 5deg)</span>
</div>
<div>
  <p class="font-variation">Slant</p>
  <span>(font-variation-settings: 'slnt' -5)</span>
</div>
<div class="adjustable-box">
  <p class="adjustable">Slant</p>
  (font-variation-settings: 'slnt' <span id="angle-text">-5</span>)<br />

  <label for="slant-angle">Adjust Slant: </label>
  <input
    type="range"
    name="range-slider"
    value="5"
    id="slant-angle"
    min="-15"
    max="15" />
</div>
```

```css hidden live-sample___slant-example
@font-face {
  font-family: "SlantFont";
  font-style: oblique -15 15;
  src: url("https://mdn.github.io/shared-assets/fonts/font_with_slant_axis.woff2")
    format("woff2");
}

p {
  font-family: "SlantFont";
  display: inline-block;
  margin: 1rem;
  font-size: 4rem;
}

.adjustable-box {
  border: 1px dashed;
  --text-axis: -5;
}
```

```css live-sample___slant-example
.font-style {
  font-style: oblique 5deg;
}

.font-variation {
  font-variation-settings: "slnt" -5;
}

.adjustable {
  font-variation-settings: "slnt" var(--slant-angle);
}
```

```js hidden live-sample___slant-example
const angle = document.querySelector("#slant-angle");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = -1 * e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--slant-angle", angle);
});
```

{{EmbedLiveSample("slant-example", "", "400")}}

### Optische Größe

Das ist etwas Neues für digitale Schriften und CSS, aber eine jahrhundertealte Technik im Entwerfen und Erstellen von Metallschriften. Optische Größenanpassung bezieht sich auf die Praxis, die gesamte Strichdicke von Buchstabenformen basierend auf der physischen Größe zu variieren. War die Größe sehr klein (etwa die Entsprechung zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und vielleicht andere kleine Anpassungen zur Sicherstellung der Reproduzierbarkeit und Lesbarkeit bei einer physisch kleineren Größe. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), gäbe es möglicherweise weit größere Unterschiede im Gewicht der dicken und dünnen Striche, die das Schriftartdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich gemacht wurde, um den Tintennund Papierdruckprozess auszugleichen (sehr dünne Linien bei kleinen Größen druckten oft nicht, was den Buchstaben eine gebrochene Erscheinung verlieh), überträgt es sich gut auf digitale Anzeigen, um die Bildschirmqualität und die physische Größenwiedergabe auszugleichen.

Optische Größenwerte sollen im Allgemeinen automatisch entsprechend zur `font-size` angewandt werden, können aber auch durch die niedrigere `font-variation-settings`-Syntax manipuliert werden.

Es wurde ein neues Attribut, {{cssxref("font-optical-sizing")}}, zur Unterstützung von Variable Fonts in CSS erstellt. Wenn `font-optical-sizing` verwendet wird, sind die einzigen zulässigen Werte `auto` oder `none` — so erlaubt dieses Attribut nur, die optische Größenanpassung ein- oder auszuschalten. Jedoch wenn `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen würden Sie die `font-size` (die physische Größe, in der die Schriftart gerendert wird) mit dem `opsz`-Wert abgleichen (was die Art und Weise ist, wie optische Größenanpassung angewandt wird, wenn `auto` verwendet wird). Die Option, einen spezifischen Wert anzugeben, wird angeboten, sodass, sollte es nötig sein, um die Standardeinstellung zu überschreiben — aus Gründen der Lesbarkeit, ästhetischen oder einem anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größeneinstellungen zu spielen.

```html hidden live-sample___optical-sizing-example
<div>
  <p class="p1">Optical Size</p>
  <span>(font-optical-sizing: none)</span>
</div>
<div>
  <p class="p2">Optical Size</p>
  <span>(font-optical-sizing: auto)</span>
</div>
<div>
  <p class="p3">Optical Size</p>
  <span>(font-variation-settings: "opsz" 64)</span>
</div>

<div class="adjustable">
  <p class="p4">Optical Size</p>
  (font-variation-settings: "opsz" <span id="angle-text">-64</span>)<br />

  <label for="slant-angle">Adjust Optical Sizing: </label>
  <input
    type="range"
    name="text-axis"
    value="64"
    id="text-axis"
    min="8"
    max="144" />
</div>
```

```css hidden live-sample___optical-sizing-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 64;
}
```

```css live-sample___optical-sizing-example
.p1 {
  font-optical-sizing: none;
}
/* font-optical-sizing can be auto or none */
.p2 {
  font-optical-sizing: auto;
}

/* optical range is from 8 to 144 */
.p3 {
  font-variation-settings: "opsz" 64;
}

/* Adjust with slider & custom property */
.p4 {
  font-variation-settings: "opsz" var(--text-axis);
}
```

```js hidden live-sample___optical-sizing-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("optical-sizing-example", "", "550px")}}

### Benutzerdefinierte Achsen

Benutzerdefinierte Achsen sind genau das: Es können beliebige Designvariationenachse sein, die sich der Schriftartdesigner vorstellt. Es kann sein, dass einige von ihnen recht häufig werden — oder sogar registriert werden — aber das wird nur die Zeit zeigen.

### Grad

Der Grad mag eine der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftartdesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft in Reaktion auf die beabsichtigte Verwendung und die Drucktechnik durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewicht' dadurch, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass die Änderung der Textgrade nicht das gesamte Layout des Textes oder der umgebenden Elemente verändert. Dies macht Grad zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne ein Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-grade-Werten zu spielen.

```html hidden live-sample___grade-example
<div>
  <p class="p1">Grade</p>
  <span>(font-variation-settings: 'GRAD' 88)</span>
</div>

<div class="adjustable">
  <p class="p2">Grade</p>
  (font-variation-settings: 'GRAD' <span id="angle-text">88</span>)<br />

  <label for="slant-angle">Adjust Grade: </label>
  <input
    type="range"
    name="text-axis"
    value="88"
    id="text-axis"
    min="88"
    max="150" />
</div>
```

```css hidden live-sample___grade-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 64px;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 88;
}
```

```css live-sample___grade-example
/* grade range is 88 to 150 */
.p1 {
  font-size: 64px;
  font-variation-settings: "GRAD" 88;
}

/* Adjust with slider & custom property */
.p2 {
  font-size: 64px;
  font-variation-settings: "GRAD" var(--text-axis);
}
```

```js hidden live-sample___grade-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("grade-example", "", "300px")}}

### Verwendung einer Variablen Schriftart: Änderungen bei @font-face

Die Syntax zum Laden von Variablen Fonts ist sehr ähnlich zu anderen Web Fonts, mit ein paar bemerkenswerten Unterschieden, die über Upgrades der traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die jetzt in modernen Browsern verfügbar sind.

Die Grundsyntax ist dieselbe, aber die Schriftarttechnologie kann angegeben werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können bereitgestellt werden, anstatt nach dem zu ladenden Schriftartdatum benannt zu werden.

#### Beispiel für eine Standard-Upright-Schrift (Roman)

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}
```

In diesem Fall zeigt der `normal`-Wert an, dass diese Schriftartdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `normal` ist. Die `oblique 0deg` und `oblique 0deg 20deg` Werte, aufgrund des `0deg`, zeigen auch an, dass die Schrift normale aufrechte Glyphen hat.

#### Beispiel für eine Schriftart, die nur Kursivschriften und keine aufrechten Zeichen enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: italic;
}
```

In diesem Fall zeigt der `italic`-Wert an, dass diese Schriftartdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `italic` ist. Der `oblique 14deg`-Wert zeigt auch an, dass die Schrift kursives Glyphen hat.

#### Beispiel für eine Schriftart, die eine oblique (Neigung) Achse enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 12deg;
}
```

In diesem Fall zeigt der `oblique 0deg 12deg`-Wert an, dass diese Schriftartdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie immer noch rendern, wenn Sie das Format nur als Dateiformat festlegen, anstatt format-variations (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Die Angabe von Wertbereichen für `font-weight`, `font-stretch`, und `font-style` wird den Browser daran hindern, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie die entsprechende Eigenschaft verwenden (z.B. `font-weight` oder `font-stretch`), wird Sie aber nicht davor bewahren, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie mit Sorgfalt.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variable Fonts kann mit CSS-Feature-Abfragen (siehe {{cssxref("@supports")}}) überprüft werden, daher ist es möglich, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Abfrageblocks zu platzieren.

```css
h1 {
  font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: "wdth" 115) {
  h1 {
    font-family: some-variable-font-family;
  }
}
```

## Beispielseiten

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenkette festzulegen und zeigt, wie Sie einzelne variable Werte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, statt die ganze Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf den `h2`, der nur den Wert des Grade-Achsen-Custom-Property-Wertes ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___sample-page-example
<div class="container container1">
  <h1>Moby-Dick</h1>
  <h2>CHAPTER 1. Loomings.</h2>
  <p>
    Call me Ishmael. Some years ago—never mind how long precisely–having little
    or no money in my purse, and nothing particular to interest me on shore, I
    thought I would sail about a little and see the watery part of the world. It
    is a way I have of driving off the spleen and regulating the circulation.
    Whenever I find myself growing grim about the mouth; whenever it is a damp,
    drizzly November in my soul; whenever I find myself involuntarily pausing
    before coffin warehouses, and bringing up the rear of every funeral I meet;
    and especially whenever my hypos get such an upper hand of me, that it
    requires a strong moral principle to prevent me from deliberately stepping
    into the street, and methodically knocking people’s hats off then, I account
    it high time to get to sea as soon as I can.
  </p>
</div>
<hr />
<div class="container container2 demo2">
  <h1>Moby-Dick</h1>
  <h2>CHAPTER 1. (hover here)</h2>
  <p>
    Call me Ishmael. Some years ago—never mind how long precisely–having little
    or no money in my purse, and nothing particular to interest me on shore, I
    thought I would sail about a little and see the watery part of the world. It
    is a way I have of driving off the spleen and regulating the circulation.
    Whenever I find myself growing grim about the mouth; whenever it is a damp,
    drizzly November in my soul; whenever I find myself involuntarily pausing
    before coffin warehouses, and bringing up the rear of every funeral I meet;
    and especially whenever my hypos get such an upper hand of me, that it
    requires a strong moral principle to prevent me from deliberately stepping
    into the street, and methodically knocking people’s hats off then, I account
    it high time to get to sea as soon as I can.
  </p>
</div>
```

```css hidden live-sample___sample-page-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

body {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  margin: 20px;
  padding: 0;
}

.container * {
  margin: 0.5rem auto 1rem;
  max-width: 42rem;
}
```

```css live-sample___sample-page-example
.container1 h1 {
  font-optical-sizing: auto;
  font-size: 5rem;
  font-stretch: 85%;
  font-weight: 450;
}
.container1 h2 {
  font-optical-sizing: auto;
  font-size: 2.25rem;
  font-stretch: 90%;
  font-weight: 575;
}
.container1 p {
  font-optical-sizing: auto;
  font-size: 1rem;
  font-stretch: 100%;
  font-weight: 375;
}
.demo2 {
  --text-wght: 375;
  --text-wdth: 100;
  --text-opsz: 16;
  --text-GRAD: 88;
}
.container2 > * {
  font-size: 5rem;
  font-variation-settings:
    "wght" var(--text-wght),
    "wdth" var(--text-wdth),
    "opsz" var(--text-opsz),
    "GRAD" var(--text-GRAD);
}
.container2 h1 {
  --text-wght: 450;
  --text-wdth: 85;
  --text-opsz: 80;
  font-size: 5rem;
}
.container2 h2 {
  --text-wght: 575;
  --text-wdth: 95;
  --text-opsz: 36;
  font-size: 2.25rem;
}
.container2 h2:hover {
  --text-GRAD: 130;
}
.container2 p {
  font-size: 1rem;
}
```

{{EmbedLiveSample("sample-page-example", "", "850px")}}

## Ressourcen

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editor's Draft)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen zeigt, was Ihre Schriftart kann, über eine einfache Drag-and-Drop-Inspektionsoberfläche)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Spielwiese)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variablen Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen einzigartigen Ansätzen zur Benutzeroberfläche)
