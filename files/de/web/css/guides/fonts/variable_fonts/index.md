---
title: Variable fonts
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Varianten einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftartendatei für jede Breite, Gewichtung oder Stil zu haben. Sie ermöglichen den Zugriff auf alle in einer bestimmten Schriftartendatei enthaltenen Varianten über CSS und eine einzige {{cssxref("@font-face")}}-Referenz. Dieser Artikel liefert Ihnen alles, was Sie brauchen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts in Webseiten oder den Firefox Developer Tools nicht verwenden.

## Variable Fonts: was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht variable Fonts aussehen und wie sie sich vergleichen lassen.

### Standard-(oder statische) Fonts

In der Vergangenheit wurde eine Schriftart in mehreren einzelnen Schriftdateien produziert, und jede Schriftdatei repräsentierte eine spezifische Kombination von Breite, Gewichtung und Stil. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' – was bedeuten könnte, dass Sie mit 20 oder 30 verschiedenen Schriftdateien enden, um eine vollständige Schriftart zu repräsentieren (für eine große Schriftart mit unterschiedlichen Breiten könnte das sogar mehrmals so viele sein).

In einem solchen Szenario würden Sie, um eine Schriftart für die typische Nutzung auf einer Website für Textkörper zu verwenden, mindestens vier Dateien benötigen: Regular, Italic, Bold und Bold Italic. Wenn Sie mehr Gewichte hinzufügen möchten, wie ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, würde das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise um die 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die vier, die Sie möglicherweise für Textkörper laden würden. Der Vorteil bei der Wahl des Variable Fonts ist, dass Sie Zugriff auf das gesamte Spektrum an Gewichten, Breiten und Stilen haben, anstatt auf die wenigen beschränkt zu sein, die Sie vorher separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen von Überschriften in verschiedenen Größen mit unterschiedlichen Gewichten für eine bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datendichte Anzeigen. Zum Vergleich: In einem typografischen System für ein Magazin ist es üblich, 10–15 oder mehr verschiedene Gewichts- und Breitenkombinationen im gesamten Publikationsverlauf zu verwenden – was eine viel breitere Palette von Stilen bietet, als derzeit im Web typisch ist (oder allein aus Performancegründen praktisch wäre).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie haben möglicherweise bemerkt, dass wir darüber gesprochen haben, eine spezifische Schriftdatei für jedes Gewicht und jeden Stil (d.h. fett und kursiv und fettkursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für stärkere Gewichtungen und Kursive haben, die oft komplett unterschiedliche Zeichen umfassen (wie das Kleinbuchstaben-'a' und 'g's, die in Kursiv oft ganz anders sind). Um das Design der Schriftart am genauesten wiederzugeben und Unterschiede zwischen Browsern zu vermeiden, wie sie die verschiedenen Stile synthetisieren können oder nicht, ist es genauer, die spezifischen Schriftdateien zu laden, wo nötig, wenn man eine nicht-variable Schriftart verwendet.

Sie könnten auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für aufrechte und all ihre Varianten, und eine, die die kursiven Varianten enthält. Dies wird manchmal getan, um die Gesamtgröße der Datei zu reduzieren, falls die Kursive nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, so dass Sie sie mit demselben `font-family` und entsprechendem {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herz des neuen Variable-Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursiveachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Das Gewicht könnte von 1 bis 999 reichen, während kursiv 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die derzeit fünf registrierten Achsen sind Gewicht, Breite, Schräge, Kursive und optische Größe. Das W3C hat sich verpflichtet, sie auf vorhandene CSS-Attribute abzubilden und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartendesigner kann jede gewünschte Achse definieren und umreißen und muss ihr nur eine vierbuchstabige **Marke** geben, um sie im Schriftartdateiformat selbst zu identifizieren. Diese vierbuchstabigen Marken können in CSS verwendet werden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den folgenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf definierten registrierten Achsen mit Beispielen und der entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Implementierungsmechanismus, um die frühen Implementierungen der Variable-Font-Unterstützung zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die entsprechende Eigenschaft genutzt werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die anderweitig nicht verfügbar sind.

#### Hinweise

1. Beim Verwenden von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen groß-/kleinschreibungssensitiv sind. Die Namen registrierter Achsen müssen in Kleinbuchstaben geschrieben werden und benutzerdefinierte Achsen in Großbuchstaben. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

`wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

1. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (auf dieselbe Weise wie beim Setzen von OpenType-Schriftfunktionen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in 100er-Schritten akzeptiert, sowie Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden immer noch angewendet, wenn es um nicht-variable oder variable Schriftarten geht, aber bei variablen Schriften ist jetzt jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit im `@font-face`-Deklaration keine Möglichkeit gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schriftart dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies lässt sich im Allgemeinen recht einfach lösen, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihrer CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgewicht-Werten zu spielen.

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
    "Georgia",
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

Breite (dargestellt durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft gesetzt, wobei Werte als Prozentsätze über oder unter 'normal' (100 %) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig – auch wenn es weitaus wahrscheinlicher ist, dass der Bereich näher bei 100% liegt, wie etwa 75 %-125 %. Wenn ein Zahlenwert außerhalb des Bereichs liegt, der in der Schrift kodiert ist, sollte der Browser die Schriftart mit dem nächstliegenden erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftbreite-Werten zu spielen.

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
    "Georgia",
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

### Kursive

Die Kursiv-Achse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv" angibt, `0.5` "teilweise kursiv" und `1` "vollständig kursiv" spezifiziert. Kursiv-Designs beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv üblicherweise mehrere Glyphen- (oder Zeichen-) Ersetzungen stattfinden. Kursiv und schräg werden oft etwas austauschbar verwendet, aber in Wahrheit sind sie sehr unterschiedlich. Schräg wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe unten), und eine Schriftart hätte typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg angewendet, indem die {{cssxref("font-style")}}-Eigenschaft verwendet wird. Beachten Sie auch die Einführung von `font-synthesis: none;` – was verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursive anwenden. Dies kann verwendet werden, um Faux-Fettdruck ebenfalls zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftkursiv-Werten zu spielen.

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
    "Helvetica",
    "Arial",
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

### Schräge

Schräge (repräsentiert durch das `slnt`-Tag), oder wie es oft genannt wird, 'schräg', ist anders als echte Kursive, da sie den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersetzung vornimmt. Sie ist auch variabel, da sie als numerischer Bereich ausgedrückt ist. Dies erlaubt es, die Schriftart an jedem Punkt entlang der Schrägachse zu variieren. Der zulässige Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schräge steuern können, sind {{cssxref("font-style")}} und {{cssxref("font-variation-settings")}}. Die folgenden beiden Eigenschaftsdeklarationen sind dieselben:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings` Property. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Auch: Im Fall von `font-variation-settings` bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schräge.

Im folgenden Live-Beispiel können Sie die Schräge anpassen.

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
  font-style: oblique -15deg 15deg;
  src: url("https://mdn.github.io/shared-assets/fonts/font_with_slant_axis.woff2")
    format("woff2");
}

p {
  font-family: "SlantFont", sans-serif;
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

Das ist etwas Neues für digitale Fonts und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschriften. Optische Größe bezieht sich auf die Praxis, die Gesamtdickeder Striche der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie etwa ein Äquivalent zu 10 oder 12 Pixel), hatten die Zeichen eine insgesamt dickere Strichführung und möglicherweise andere kleine Anpassungen, um sicherzustellen, dass sie bei einer physisch kleineren Größe wiedergeben und lesbar sein würden. Im Gegensatz dazu, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60 Pixel), könnte es eine viel größere Variation in den dicken und dünnen Strichbreiten geben, die das Schriftartendesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich getan wurde, um den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, wodurch die Buchstabenformen ein gebrochenes Aussehen bekamen), wird es gut auf digitale Displays übertragen, wenn die Bildschirmqualität und die physische Größenwiedergabe kompensiert werden.

Optische Größenwerte sind im Allgemeinen dazu gedacht, automatisch entsprechend der `font-size` angewendet zu werden, können aber auch unter Verwendung der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um Variable Fonts in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut ermöglicht also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Typ gerendert wird) mit dem `opsz`-Wert (der, wie optische Größenanpassung beim Verwenden von `auto` angewendet werden soll) abgleichen. Die Möglichkeit, einen spezifischen Wert bereitzustellen, wird bereitgestellt, damit, sollte es notwendig sein, die Standardeinstellung zu überschreiben— für Lesbarkeit, Ästhetik oder aus einem anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu spielen.

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
    "Georgia",
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

Benutzerdefinierte Achsen sind genau das: Sie können jede Achse des Designvarianten sein, die sich der Schriftartendesigner ausdenkt. Es gibt möglicherweise einige, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grade

Grade könnte eine der häufigeren benutzerdefinierten Achsen werden, da sie eine bekannte Geschichte im Schriftensedesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik gemacht. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' dadurch, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades das gesamte Layout des Textes oder der ihn umgebenden Elemente nicht verändert. Dies macht Grade zu einer nützlichen Achse der Variation, da sie variiert oder animiert werden kann, ohne dass ein Reflow des Textes selbst verursacht wird.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgradwerten zu spielen.

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
    "Georgia",
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

### Verwendung eines Variable Fonts: @font-face-Änderungen

Die Syntax zum Laden von Variable Fonts ähnelt sehr anderen Web-Fonts, mit einigen bemerkenswerten Unterschieden, die jetzt in modernem Browsers durch Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax verfügbar sind.

Die grundlegende Syntax ist dieselbe, aber die Schriftarttechnologie kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Dateinamen der Schriftart.

#### Beispiel für eine Standard-aufrechte (römische) Schrift

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftartdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` eingestellt ist und {{cssxref("font-style")}} auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schriftart normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursive und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` eingestellt ist und {{cssxref("font-style")}} auf `italic` gesetzt ist. Als Alternative könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift kursive Glyphen hat.

#### Beispiel für eine Schrift, die eine schiefe (Schräge) Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat umgesetzt, daher sollte sorgfältig getestet werden. Alle Browser, die Variable Fonts unterstützen, werden diese immer noch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Die Angabe von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht daran hindern, einen ungültigen Wert über `font-variation-settings` bereitzustellen, sodass Sie mit Sorgfalt verwendet werden.

## Arbeiten mit älteren Browsern

Variable Font-Unterstützung kann mit CSS Feature Queries überprüft werden (siehe {{cssxref("@supports")}}), daher ist es möglich, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, in einem Feature Query-Block zu erfassen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenfolge festzulegen, und zeigt, wie Sie einzelne Variablenwerte leichter aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenfolge neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Grad-Achsenwert der benutzerdefinierten Eigenschaft ändert. Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
    into the street, and methodically knocking people's hats off then, I account
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
    into the street, and methodically knocking people's hats off then, I account
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
    "Georgia",
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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurf des Editors)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Webseite, die Ihnen zeigt, was Ihre Schriftart kann, über eine Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die Original-Spielplatzseite für Variable Fonts)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo Sie sie erhalten können)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
