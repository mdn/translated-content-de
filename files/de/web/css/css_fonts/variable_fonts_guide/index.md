---
title: Variable-Fonts-Leitfaden
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Varianten einer Schriftart in eine einzelne Datei zu integrieren, anstatt eine separate Schriftartdatei für jede Breite, Gewichtung oder Stil zu haben. Sie erlauben Ihnen den Zugriff auf alle Variationen, die in einer gegebenen Schriftartdatei enthalten sind, über CSS und einen einzigen {{cssxref("@font-face")}}-Verweis. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um die Verwendung von Variable Fonts zu starten.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem verwenden zu können, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Version von Linux Freetype, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, zu überprüfen, wie Nicht-Variable-Fonts aussehen und wie sie im Vergleich stehen.

### Standard- (oder Statische) Fonts

In der Vergangenheit wurde eine Schriftart als mehrere individuelle Schriftarten produziert, wobei jede Schriftart eine spezifische Breite-/Gewicht-/Stilkombination darstellte. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutet, dass Sie möglicherweise 20 oder 30 verschiedene Schriftartdateien hätten, um eine vollständige Schriftart darzustellen (bei einer großen Schriftart mit verschiedenen Breiten könnte es sogar mehrere Male so viel sein).

In einem solchen Szenario bräuchten Sie für die typische Nutzung einer Schriftart auf einer Seite für Fließtext mindestens vier Dateien: normal, kursiv, fett und fett kursiv. Wenn Sie mehr Gewichtungen hinzufügen wollten, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, würde das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladenden Daten (normalerweise etwa 20 kB oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Kombinationen in einer einzelnen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die vier, die Sie vielleicht für Fließtext laden würden. Der Vorteil bei der Wahl des Variable Fonts besteht darin, dass Sie Zugriff auf die gesamte Bandbreite der verfügbaren Gewichtungen, Breiten und Stile haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht häufige typografische Techniken wie das Setzen unterschiedlicher Größen von Überschriften in verschiedenen Gewichtungen für eine bessere Lesbarkeit bei jeder Größe oder die Verwendung einer leicht schmaleren Breite für datenreiche Darstellungen. Zum Vergleich ist es in einem typografischen System eines Magazins typisch, 10–15 oder mehr verschiedene Gewichtungs- und Breitenkombinationen in der gesamten Publikation zu verwenden — was eine viel breitere Range an Stilen ermöglicht, als es derzeit im Web üblich ist (oder tatsächlich aus Leistungsgründen allein praktisch ist).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie haben vielleicht bemerkt, dass wir darüber gesprochen haben, eine spezifische Schriftdatei für jede Gewichtung und jeden Stil zu haben (d. h. fett und kursiv und fett kursiv), anstatt darauf zu vertrauen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für stärkere Gewichtungen und Kursivschrift haben, die oft ganz andere Zeichen beinhalten (ein kleines 'a' und 'g' sind in der Regel in Kursivschrift ziemlich unterschiedlich, zum Beispiel). Um das Design der Schriftart genau wiederzugeben und Unterschiede zwischen Browsern zu vermeiden, und wie sie die verschiedenen Stile möglicherweise oder möglicherweise nicht synthetisieren, ist es genauer, die spezifischen Schriftdateien zu laden, wo sie benötigt werden, wenn eine Nicht-Variable-Schriftart verwendet wird.

Sie können auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für normale Schriftschnitte und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die Gesamtdateigröße in Fällen zu reduzieren, in denen die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}} Namen zu verknüpfen, so dass Sie sie mit demselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Der Kern des neuen Variable-Fonts-Formats ist das Konzept einer **Achse der Variation**, die den erlaubten Bereich dieses bestimmten Aspekts des Schriftdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Schriftzeichen sein können; die 'Breitenachse', wie schmal oder breit sie sein können; die 'Italics-Achse', ob kursiven Buchstaben vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Gewichtung kann von 1–999 reichen, während Italics 0 oder 1 (aus oder ein) sein kann.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind die, die am häufigsten auftreten und häufig genug sind, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewichtung, Breite, Schräglage, Italics und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden, und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: der Schriftdesigner kann jede Achse definieren und festlegen, die ihm gefällt, und es ist nur erforderlich, ihr ein vier Buchstaben langes **Tag** zu geben, um es im Schriftdateiformat selbst zu identifizieren. Sie können diese vier Buchstaben langen Tags in CSS verwenden, um einen Punkt entlang dieser Achse der Variation zu spezifizieren, wie in den untenstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen, die mit Beispielen und dem entsprechenden CSS definiert sind. Wo möglich, sind sowohl die standardmäßige als auch die niedrigere Syntax enthalten. Die niedrigere Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Umsetzungen der Unterstützung von Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Das Ziel des W3C war es jedoch, dass diese Syntax nicht verwendet wird, wenn andere Attribute zur Verfügung stehen. Daher sollte soweit möglich die geeignete Eigenschaft verwendet werden, wobei die niedrigere Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die sonst nicht verfügbar sind.

#### Anmerkungen

1. Wenn Sie `font-variation-settings` verwenden, ist es wichtig zu beachten, dass Achsnamen unabhängig von der Groß-/Kleinschreibung sind. Die Namen registrierter Achsen müssen in Kleinbuchstaben geschrieben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben geschrieben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewichtung) ist eine registrierte Achse, und `GRAD` (Stufe) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (genauso wie wenn Sie OpenType-Schriftartfeatures mit {{cssxref("font-feature-settings")}} einstellen). Sie können dieses Limit umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewichtung

Gewichtung (dargestellt durch das `wght` Tag) definiert die Designachse dafür, wie dünn oder dick (leicht oder schwer in typografischen Begriffen) die Striche der Schriftzeichen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in Schritten von 100 und Schlüsselwörter wie `normal` oder `bold` akzeptiert, die Aliase ihrer entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden weiterhin angewendet, wenn mit nicht-variablen oder Variablen-Fonts gearbeitet wird, aber mit variablen können jetzt Zahlen von 1 bis 1000 gültig sein.

Es ist zu beachten, dass es derzeit keine Möglichkeit in der `@font-face` Deklaration gibt, um einen spezifischen Punkt auf der Variationsachse eines variablen Fonts dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies lässt sich im Allgemeinen relativ leicht beheben, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Gewicht-Werten zu spielen.

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

Breite (dargestellt durch das `wdth` Tag) definiert die Designachse dafür, wie schmal oder breit (kondensiert oder erweitert in typografischen Begriffen) die Schriftzeichen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft angegeben, wobei Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden; jede Zahl größer als 0 ist technisch gültig — obwohl es viel wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie z. B. 75%-125%. Wenn ein Zahlwert geliefert wird, der außerhalb des im Schriftart kodierten Bereichs liegt, sollte der Browser die Schriftart mit dem nächstgelegenen zulässigen Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` verwendet wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Breite-Werten zu spielen.

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

### Italics

Die Italics (`ital`) Achse kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" angibt. Kursivdesigns umfassen oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv normalerweise mehrere Glyphen- (oder Zeichen-) Ersetzungen auftreten. Italics und oblique werden oft etwas austauschbar verwendet, sind jedoch in Wahrheit ziemlich unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den untenstehenden Abschnitt), und eine Schriftart hätte typischerweise eine oder die andere, jedoch nicht beide.

In CSS werden sowohl italics als auch oblique auf Text mit der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und eine synthetische Italic anwenden. Dies kann auch verwendet werden, um Faux-Bold zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Italics zu spielen.

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

### Schräglage

Die Schräglage (dargestellt durch das `slnt` Tag) oder im Allgemeinen als 'oblique' bezeichnet — unterscheidet sich von echten Italics darin, dass sie den Winkel der Buchstabenformen ändert, jedoch keine Art von Zeichensubstitutionen durchführt. Sie ist auch variabel, da sie als numerischer Bereich ausgedrückt wird. Dadurch kann die Schriftart irgendwo entlang der Schräglageachse variiert werden. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die beiden Eigenschaften, die die Schräglage steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaften-Deklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft über `font-variation-settings`. Das `deg` Schlüsselwort wird nicht verwendet, wenn die Eigenschaft `font-variation-settings` benutzt wird. Außerdem bedeutet im Falle der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schräglage.

Im folgenden Live-Beispiel können Sie die Schräglage anpassen.

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

Dies ist etwas Neues für digitale Schriften und CSS, aber eine jahrhundertealte Technik im Design und der Erstellung von Metalltypen. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtstrichstärke von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie etwa ein Äquivalent zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduziert und bei einer physisch kleineren Größe lesbar wären. Im Gegensatz dazu, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Unterschiede in der Gewichtung geben, die beeinflussen, wie die ursprüngliche Absicht des Schriftartdesigns zum Ausdruck kommt.

Während dies ursprünglich getan wurde, um den Druckprozess von Tinte und Papier zu kompensieren (sehr dünne Linien in kleinen Größen druckten oft nicht, was den Buchstaben ein gebrochenes Erscheinungsbild gab), übersetzt es sich gut auf digitale Anzeigen, wenn es um die Kompensation für Bildschirmqualität und physische Anzeigegröße geht.

Optische Größenwerte sollen in der Regel automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der niedrigeren `font-variation-settings`-Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um variable Fonts in CSS zu unterstützen. Bei Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut erlaubt also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen Zahlenwert liefern. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, bei der die Schriftart gerendert wird) mit dem `opsz`-Wert (der angibt, wie die optische Größenanpassung angewendet werden soll, wenn `auto` verwendet wird) abgleichen. Die Möglichkeit, einen spezifischen Wert anzugeben, wird bereitgestellt, damit, sollte es notwendig sein, die Standardeinstellungen zu überschreiben — für Lesbarkeit, Ästhetik oder einen anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu spielen.

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

Benutzerdefinierte Achsen sind genau das: sie können jede Designvariationsachse sein, die sich der Schriftdesigner ausdenkt. Es kann einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Stufe

Stufe könnte eine der häufigeren benutzerdefinierten Achsen werden, da sie eine bekannte Geschichte im Schriftartdesign hat. Die Praxis, verschiedene Stufen einer Schriftart zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Verwendung und die Drucktechnik durchgeführt. Der Begriff 'Stufe' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass sich die Änderung der Textstufe nicht auf das Gesamtlayout des Textes oder der es umgebenden Elemente auswirkt. Dies macht Stufe zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne ein Neufluss des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Stufenwerten zu spielen.

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

### Verwenden eines Variablen-Fonts: @font-face Änderungen

Die Syntax zum Laden von Variablen-Schriften ähnelt der jeder anderen Webschrift, mit einigen bemerkenswerten Unterschieden, die durch Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax jetzt in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist dieselbe, aber die Schriftartentechnologie kann angegeben werden, und zulässige Bereiche für Beschreibungsmerkmale wie `font-weight` und `font-stretch` können bereitgestellt werden, anstatt sie nach dem Schriftdateinamen zu benennen, die geladen wird.

#### Beispiel für eine Standard-Schrift (Roman)

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursiv enthält und keine aufrechten Zeichen

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift kursiv Gezeichnet hat.

#### Beispiel für eine Schriftart, die eine Schräglagenachse enthält

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

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die Eigenschaft `font-family` `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die volle Syntax für Schriftformat implementiert, daher testen Sie sorgfältig. Alle Browser, die Variable Schriften unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur als Dateiformat setzen, anstatt format-variations (d. h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch`, und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (“font-weight” oder “font-stretch“), blockiert Sie jedoch nicht daran, einen ungültigen Wert über `font-variation-settings` zu liefern, also verwenden Sie mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS Feature Queries überprüft werden (siehe {{cssxref("@supports")}}), daher ist es möglich, Variable Fonts in der Produktion zu verwenden und die CSS, die die Variable Fonts aufruft, in einem Feature-Query-Block zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für einen `font-variation-settings`-String zu setzen und zeigt, wie Sie einfacher einzelne variable Werte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hover-Effekt über den `h2`, der nur den Wert der custome Property für die Achse der Stufe ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- [Microsoft Open Type Variations introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Webseite, die Ihnen sagt, was Ihre Schriftart über eine Drag-and-Drop-Inspektionsschnittstelle tun kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielwiese für Variable Fonts)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variablen-Fonts und wo sie zu finden sind)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einzigartigen Ansätzen für die Benutzeroberfläche)
