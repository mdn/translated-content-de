---
title: Leitfaden für Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Varianten eines Schriftstils in eine einzige Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Schriftartdatei zu haben. Sie können alle Varianten, die in einer gegebenen Schriftartdatei enthalten sind, über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz abrufen. Dieser Artikel gibt Ihnen alle Informationen, die Sie benötigen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem verwenden zu können, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux-Freetype-Version, und macOS vor High Sierra (10.13) unterstützt Variable Fonts nicht. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und worin sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, einen Überblick darüber zu bekommen, wie nicht-variable Schriftarten sind und wie sie im Vergleich abschneiden.

### Standard- (oder Statische) Schriftarten

In der Vergangenheit wurde ein Schriftschnitt als mehrere Einzel-Schriftarten produziert, wobei jede Schriftart eine bestimmte Kombination aus Breite/Gewicht/Stil darstellt. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeuten könnte, dass Sie am Ende 20 oder 30 verschiedene Schriftartdateien haben, um einen kompletten Schriftschnitt darzustellen (für einen großen Schriftschnitt mit verschiedenen Breiten könnten es mehrfach so viele sein).

In einem solchen Szenario bräuchten Sie für die typische Nutzung eines Schriftschnitts für Fließtext auf einer Webseite mindestens vier Dateien: Regular, Italic, Bold und Bold Italic. Wenn Sie weitere Gewichtungen hinzufügen wollten, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, würde das mehrere weitere Dateien bedeuten. Dies resultiert in mehr HTTP-Anfragen und mehr heruntergeladene Daten (normalerweise etwa 20 kB oder mehr pro Datei).

### Variable Fonts

Mit einer Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr genauso groß wie die vier, die Sie möglicherweise für Fließtext laden würden. Der Vorteil bei der Wahl der Variable Font ist, dass Sie Zugriff auf die gesamte Bandbreite an Gewichtungen, Breiten und Stilen haben, die verfügbar sind, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Einstellen unterschiedlicher Größenüberschriften in unterschiedlichen Gewichtungen für bessere Lesbarkeit in jeder Größe oder die Verwendung einer leicht schmaleren Breite für datendichte Anzeigen. Zum Vergleich: Es ist typisch für ein typografisches System eines Magazins, 10–15 oder mehr verschiedene Kombinationen aus Gewicht und Breite im gesamten Druckerzeugnis zu verwenden — was ein viel breiteres Spektrum an Stilen bietet als derzeit im Web typisch ist (oder in der Tat allein aus Leistungsgründen praktisch wäre).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie könnten bemerkt haben, dass wir davon sprechen, für jedes Gewicht und jeden Stil (d.h. Bold und Italic und Bold Italic) eine spezifische Schriftartdatei zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftschnitte sehr spezifische Designs für stärkere Gewichtungen und Italics haben, die oft komplett andere Zeichen enthalten (zum Beispiel sind der Kleinbuchstabe 'a' und 'g' in Italics oft ganz anders). Um das Schriftschnittdesign so genau wie möglich widerzuspiegeln und Unterschiede zwischen Browsern und deren möglicherweise unterschiedlicher Synthese der verschiedenen Stile zu vermeiden, ist es genauer, die spezifischen Schriftartdateien nach Bedarf zu laden, wenn Sie eine nicht-variable Schriftart verwenden.

Sie könnten auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für die Uprights und alle ihre Variationen und eine, die die Italic-Variationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, wenn die Italics nicht benötigt oder verwendet werden. In allen Fällen ist es weiterhin möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit demselben `font-family` und entsprechendem {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Variable-Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftschnittdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder intensiv die Formen der Buchstaben sein können; die 'Breitenachse' beschreibt, wie eng oder breit sie sein können; die 'Italic-Achse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während Italic 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind die, die am häufigsten auftreten und so häufig sind, dass die Autoren der Spezifikation es für lohnenswert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Slant, Italic und optische Größe. Das W3C hat sich bemüht, sie mit vorhandenen CSS-Attributen zu verknüpfen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftschnittdesigner kann jede beliebige Achse definieren und sie muss lediglich mit einem vierstelligen **Tag** identifiziert werden, um sie innerhalb des Schriftartdateiformats selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie es in den unten gezeigten Codebeispielen gezeigt wird.

### Registrierte Achsen und vorhandene CSS-Attribute

In diesem Abschnitt werden die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS demonstriert. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die ersten Implementierungen der Unterstützung von Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Das W3C's Ziel war es jedoch, diese Syntax nicht zu verwenden, wenn andere Attribute verfügbar sind. Deshalb sollte wo immer möglich das geeignete Attribut verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die sonst nicht verfügbar sind.

#### Hinweise

1. Wenn Sie `font-variation-settings` verwenden, ist es wichtig zu beachten, dass Achsennamen case-sensitiv sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben geschrieben werden, und benutzerdefinierte Achsen müssen in Großbuchstaben geschrieben werden. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Werte mit `font-variation-settings` gesetzt wurden und Sie einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (ähnlich wie bei der Einstellung von OpenType-Schriftartfunktionen mit {{cssxref("font-feature-settings")}}). Sie können dieses Problem umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Das Gewicht (dargestellt durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Lange Zeit bestand in CSS die Möglichkeit, dies über das {{cssxref("font-weight")}}-Attribut zu spezifizieren, das numerische Werte von 100 bis 900 in Hunderterschritten, sowie Schlüsselwörter wie `normal` oder `bold` unterstützt, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden weiterhin angewendet, wenn mit nicht-variablen oder variablen Schriftarten gearbeitet wird, aber bei Variablen ist nun jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit gibt, in der `@font-face`-Deklaration einen bestimmten Punkt auf der Variationsachse einer Variable Font mit dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zu 'mappen'. Dies lässt sich im Allgemeinen ziemlich einfach lösen, erfordert aber einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-weight`-Werten zu spielen.

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

Die Breite (dargestellt durch das `wdth`-Tag) definiert die Designachse, wie eng oder weit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit dem {{cssxref("font-stretch")}}-Attribut eingestellt, mit Werten, die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig—obwohl es weitaus wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, zum Beispiel 75%-125%. Wenn ein Zahlenwert außerhalb des im Font kodierten Bereichs angegeben wird, sollte der Browser die Schriftart mit dem nächstgelegenen zulässigen Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-width`-Werten zu spielen.

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

### Italic

Die Italic- (`ital`) Achse kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0,5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Italic-Designs beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, so dass im Übergang von aufrecht zu kursiv normalerweise mehrere Glyphen- (oder Zeichen-)Ersetzungen auftreten. Italic und Oblique werden oft etwas austauschbar verwendet, sind aber in Wahrheit ganz unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe untenstehenden Abschnitt), und ein Schriftschnitt würde typischerweise entweder das eine oder das andere haben, aber nicht beides.

In CSS werden sowohl Italic als auch Oblique auf Text durch das {{cssxref("font-style")}}-Attribut angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und ein synthetisiertes Italic anwenden. Dies kann auch verwendet werden, um Faux-Bold zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-italics` zu spielen.

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

### Slant

Slant (dargestellt durch das `slnt`-Tag), oder wie es oft bezeichnet wird, 'oblique' — unterscheidet sich von echten Italics darin, dass es den Winkel der Buchstabenformen verändert, aber keine Art von Zeichenaustausch durchführt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies erlaubt es, die Schrift an jedem Punkt entlang der Slant-Achse zu verändern. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die beiden Attribute, die den Slant steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Attributdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie das `font-style`-Attribut über das `font-variation-settings`-Attribut. Das `deg`-Schlüsselwort wird nicht verwendet, wenn das `font-variation-settings`-Attribut verwendet wird. Außerdem bedeutet im Fall des `font-variation-settings`-Attributs ein positiver Winkel einen gegen den Uhrzeigersinn gerichteten Slant.

Im folgenden Live-Beispiel können Sie den Slant anpassen.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik im Design und in der Erstellung von Metallschrift. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtstrichstärke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (z. B. ein Äquivalent zu 10 oder 12 px), hätten die Zeichen insgesamt dickere Striche und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduziert werden und bei kleineren physischen Größen lesbar sind. Im Gegenzug, wenn eine viel größere Größe verwendet wurde (wie z. B. 48 oder 60 px), könnte es eine viel größere Variation in dicken und dünnen Strichstärken geben, um das Schriftartdesign mehr in Übereinstimmung mit der ursprünglichen Absicht zu zeigen.

Während dies ursprünglich gemacht wurde, um den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, was den Buchstabenformen ein gebrochenes Aussehen verlieh), übersetzt sich dies gut in digitale Anzeigen bei der Kompensation von Bildschirmqualität und physischer Größenwiedergabe.

Optische Größenwerte sind im Allgemeinen dazu gedacht, automatisch entsprechend der `font-size` angewendet zu werden, können aber auch mithilfe der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das entwickelt wurde, um Variable Fonts in CSS zu unterstützen. Bei Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut erlaubt es nur, die optische Größenanpassung ein- oder auszuschalten. Bei Verwendung von `font-variation-settings: 'opsz' <num>`, können Sie jedoch einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert abgleichen (was der beabsichtigten Anwendung von optischer Größenanpassung bei Verwendung von `auto` entspricht). Die Möglichkeit, einen spezifischen Wert anzugeben, wird bereitgestellt, sodass es notwendig ist, die Standardeinstellung — aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund — zu überschreiben und einen spezifischen Wert anzuwenden.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede erdenkliche Designvariationsachse sein, die sich der Schriftschnittdesigner ausdenkt. Es könnte einige geben, die relativ üblich werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grade

Grade könnte eine der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftschnittdesign hat. Die Praxis, unterschiedliche Grade eines Schriftschnitts zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Nutzung und Drucktechnik gemacht. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftschnittdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, so dass das Ändern des Textgrades das allgemeine Layout des Texts oder der umgebenden Elemente nicht ändert. Dies macht Grade zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne einen Reflow des Texts selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-grade`-Werten zu spielen.

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

### Verwendung eines Variable Fonts: Änderungen an @font-face

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich zu jeder anderen Web-Schrift, mit einigen bemerkenswerten Unterschieden, die durch Verbesserungen der traditionellen {{cssxref("@font-face")}}-Syntax, die jetzt in modernen Browsern verfügbar sind, bereitgestellt werden.

Die grundlegende Syntax ist die gleiche, aber die Schrifttechnologie kann spezifiziert und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` angegeben werden, anstatt nach dem geladenen Schriftdateiformat bestimmt zu werden.

#### Beispiel für eine Standard-Aufrecht-Schriftart (Roman)

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

In diesem Fall gibt die `font-style: normal`-Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` eingestellt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass die Schrift normale aufrechte Glyphen hat (angegeben durch `0deg`).

#### Beispiel für eine Schriftart, die nur Italics und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic`-Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` eingestellt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass die Schrift Kursivglyphen hat.

#### Beispiel für eine Schriftart, die eine oblique (slant) Achse enthält

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

In diesem Fall gibt der `oblique 0deg 12deg`-Wert an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft ist oblique mit einem Winkel zwischen null und 12 Grad inclusive.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, daher sollten Sie sorgfältig testen. Alle Browser, die Variable Fonts unterstützen, werden sie dennoch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` anstatt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertbereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie aber nicht daran hindern, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variable Fonts kann mit CSS-Feature-Abfragen (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, in einen Feature-Query-Block einzuschließen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Der erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenkette zu setzen und zeigt, wie Sie einzelne variable Werte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Grade-Achse Custom Property ändert. Klicken Sie in den Codeblöcken unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen zeigt, was Ihre Schrift über eine Drag-and-Drop-Inspektionsoberfläche kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Playground Seite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommen kann)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
