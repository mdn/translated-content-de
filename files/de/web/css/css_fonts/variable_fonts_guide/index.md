---
title: Leitfaden für Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 80132903750b5644f99517228d296559947e64bf
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftart-Spezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftartdatei für jede Breite, jedes Gewicht oder jeden Stil zu haben. Sie erlauben Ihnen, alle Variationen, die in einer gegebenen Schriftartdatei enthalten sind, über CSS und eine einzige {{cssxref("@font-face")}} Referenz zuzugreifen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variablen-Schriftarten zu beginnen.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux-Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie keine variablen Schriftarten auf Webseiten oder den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an variablen Schriftarten anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriftarten aussehen und wie sie im Vergleich dazu stehen.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriftarten erstellt, und jede Schriftart würde eine spezifische Breite/Gewicht/Stilkombination darstellen. So hätte man zum Beispiel separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' – was bedeutet, dass Sie am Ende 20 oder 30 verschiedene Schriftartdateien haben könnten, um eine komplette Schriftart darzustellen (es könnte mehrere Male so viel sein für eine große Schriftart, die verschiedene Breiten enthält).

In einem solchen Szenario würde man zur Verwendung einer Schriftart auf einer Webseite für gewöhnlichen Text mindestens vier Dateien benötigen: regular, italic, bold und bold italic. Wenn Sie mehr Gewichtungen hinzufügen wollten, wie z. B. eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, würden das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (in der Regel etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einer variablen Schriftart können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die vier, die Sie für den Fließtext laden würden. Der Vorteil der Wahl einer variablen Schriftart besteht darin, dass Sie Zugriff auf das gesamte Spektrum der verfügbaren Gewichte, Breiten und Stile haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht häufige typografische Techniken wie das Setzen von Überschriften in unterschiedlichen Größen und Gewichten für bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datenreiche Darstellungen. Zum Vergleich: Es ist typisch in einem typografischen System für ein Magazin, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen durch die Publikation zu verwenden—was eine viel größere Bandbreite an Stilen bietet als derzeit im Web üblich (oder in der Tat aus Leistungsgesichtspunkten alleine praktisch).

#### Ein Hinweis zu Schriftfamilien, Gewichten und Varianten

Sie haben möglicherweise bemerkt, dass wir darüber gesprochen haben, für jedes Gewicht und jeden Stil (z. B. fett und kursiv und fett kursiv) eine spezifische Schriftartdatei zu haben, anstatt sich auf den Browser zu verlassen, um sie zu synthetisieren. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschrift haben, die oft vollständig unterschiedliche Zeichen beinhalten (Kleinbuchstaben 'a' und 'g' sind in Kursiv oft ganz anders zum Beispiel). Um das Design der Schriftart am genauesten widerzuspiegeln und Unterschiede zwischen Browsern und deren Fähigkeit oder Nichtfähigkeit, die verschiedenen Stile zu synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftartdateien zu laden, wo erforderlich, wenn nicht-variable Schriftarten verwendet werden.

Sie werden auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt sind: eine für aufrechte Varianten und eine für die kursiven Varianten. Dies wird manchmal getan, um die gesamte Dateigröße zu reduzieren, falls die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}} Namen zu verbinden, sodass Sie sie mit demselben `font-family` und dem passenden {{cssxref("font-style")}} verwenden können.

## Einführung in die 'Variationsachse'

Das Herz des neuen Formats der variablen Schriftarten ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder breit sie sein können; die 'Kursivachse' beschreibt, ob kursiv geschriebene Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewichte könnten von 1 bis 999 reichen, während Kursiv möglicherweise 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind jene, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für lohnenswert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursivschrift und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden und in einem Fall ein neues hinzuzufügen, welches Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartendesigner kann jede beliebige Achse definieren und gestalten, die ihm beliebt, und muss ihr lediglich ein vierbuchstabiges **Tag** zuordnen, um sie innerhalb des Schriftartdateiformats selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie in den Codebeispielen unten gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen, die mit Beispielen und dem entsprechenden CSS definiert sind. Wo immer möglich, sind sowohl die Standard- als auch die niedrigere Syntax enthalten. Die niedrigerstufige Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus zur Testung der frühen Implementierungen der Unterstützung für variable Schriftarten und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Jedoch war die Absicht des W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte wo möglich die geeignete Eigenschaft verwendet werden, wobei die niedrigere Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die anderweitig nicht verfügbar sind.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen case-sensitive sind. Die registrierten Achsennamen müssen in Kleinbuchstaben und benutzerdefinierte Achsen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Abstufung) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (auf die gleiche Art und Weise wie bei der Einstellung von OpenType-Schriftmerkmale mittels {{cssxref("font-feature-settings")}}). Sie können dieses Einschränkung umgehen, indem Sie [CSS-Custom-Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die individuellen Werte nutzen und, durch die Modulierung des Wertes einer individuellen benutzerdefinierten Eigenschaft, dies ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch das `wght` Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein dürfen. Seit langem existiert in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}} Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in 100er-Schritten akzeptiert, sowie Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden immer noch angewendet, wenn nicht-variable oder variable Schriftarten verwendet werden, aber mit letzteren ist jede Zahl von 1 bis 1000 jetzt gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face` Deklaration gibt, einen bestimmten Punkt auf der Variationsachse einer variablen Schriftart auf das Schlüsselwort `bold` (oder ein anderes Schlüsselwort) zu 'mappen'. Dies kann im Allgemeinen relativ einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-weight`-Werten zu spielen.

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

Breite (dargestellt durch das `wdth` Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein dürfen. Dies wird normalerweise in CSS über die {{cssxref("font-stretch")}} Eigenschaft gesetzt, mit Werten, die als Prozentsatz über oder unter 'normal' (100 %) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig—obwohl es weitaus wahrscheinlicher ist, dass der Bereich näher an der 100 %-Marke liegt, wie z. B. 75 % - 125 %. Wenn ein angegebener Zahlenwert außerhalb des im Font kodierten Bereichs liegt, sollte der Browser die Schriftart am nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht bei Verwendung von `font-variation-settings` verwendet.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-width`-Werten zu spielen.

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

Die Kursiv-(`ital`) Achse kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halbwegs kursiv" und `1` "vollständig kursiv" angibt. Kursivdesigns umfassen oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv in der Regel mehrere Glyphen- (oder Zeichen-) Ersetzungen stattfinden. Kursiv und Schrägschrift werden oft mehr oder weniger austauschbar verwendet, sind in Wahrheit jedoch recht unterschiedlich. Schrägschrift wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe den folgenden Abschnitt), und eine Schriftart hat typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg auf Text mit der {{cssxref("font-style")}} Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;`—dies wird verhindern, dass Browser aus Versehen die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann verwendet werden, um Faux-Fettdruck ebenfalls zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-italics`-Werten zu spielen.

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

Neigung (dargestellt durch das `slnt` Tag), oft auch als 'oblique' bezeichnet—unterscheidet sich von echter Kursivschrift dadurch, dass es den Winkel der Buchstabenformen ändert, aber keine Zeichenersetzung durchführt. Es ist auch variabel, da es als numerische Reichweite ausgedrückt wird. Dies ermöglicht es, die Schrift an beliebiger Stelle entlang der Neigungsachse zu variieren. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die zwei Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die Eigenschaft `font-style` gegenüber der Eigenschaft `font-variation-settings`. Das `deg` Schlüsselwort wird nicht verwendet, wenn die Eigenschaft `font-variation-settings` eingesetzt wird. Außerdem bedeutet ein positiver Winkel im Fall der `font-variation-settings`-Eigenschaft eine gegen den Uhrzeigersinn verlaufende Neigung.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschrift. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtdicke der Striche von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie ein Äquivalent zu 10 oder 12px), hätten die Zeichen eine insgesamt dickere Linie, und vielleicht weitere kleine Anpassungen, um sicherzustellen, dass sie reproduziert und in einer physisch kleineren Größe lesbar wären. Im Gegensatz dazu, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Unterschiede in den dicken und dünnen Strichgewichten geben, wodurch das Schriftartdesign mehr in Einklang mit dem ursprünglichen Entwurf gezeigt würde.

Obwohl dies ursprünglich getan wurde, um die Druckqualität auf Papier (sehr dünne Linien in kleinen Größen druckten oft nicht, was den Buchstabenformen ein gebrochenes Aussehen gab) zu kompensieren, überträgt es sich gut auf digitale Anzeigen, wenn die Bildschirmqualität und das physische Größenrendering berücksichtigt werden.

Optische Größenwerte sollen im Allgemeinen automatisch entsprechend der `font-size` angewendet werden, können aber auch mithilfe der niedrigerstufigen `font-variation-settings` Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um variable Schriftarten in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen zulässigen Werte `auto` oder `none`—dieses Attribut ermöglicht also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie den `font-size` (die physische Größe, in der die Schrift dargestellt wird) mit dem `opsz` Wert (der, wie optische Größenanpassung angewendet werden soll, wenn `auto` verwendet wird) abgleichen. Die Möglichkeit, einen spezifischen Wert bereitzustellen, wird angeboten, sodass, sollte es notwendig sein, die Standardeinstellung—aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund—zu überschreiben, ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Werten der optischen Größe zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Es können beliebige Variationen des Design sein, die sich der Schriftartendesigner ausdenkt. Es könnte einige geben, die ziemlich verbreitet werden—oder sogar registriert—aber nur die Zeit wird es zeigen.

### Abstufung

Abstufung könnte eine der häufigeren benutzerdefinierten Achsen werden, da sie in der Schriftartgestaltung eine bekannte Geschichte hat. Die Praxis, unterschiedliche Abstufungen einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Verwendungszweck und die Drucktechnik durchgeführt. Der Begriff 'Abstufung' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern der Textabstufung das gesamte Layout des Textes oder der umgebenden Elemente nicht verändert. Dies macht die Abstufung zu einer nützlichen Variationsachse, da sie geändert oder animiert werden kann, ohne einen Umbruch des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-grade`-Werten zu spielen.

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

### Verwendung einer variablen Schriftart: @font-face Änderungen

Die Syntax zum Laden variabler Schriftarten ist der jeder anderen Web-Schriftart sehr ähnlich, mit einigen bemerkenswerten Unterschieden, die durch Upgrades der traditionellen {{cssxref("@font-face")}} Syntax nun in modernen Browsern verfügbar sind.

Die Grundsyntax ist die gleiche, aber die Schriftechnologie kann spezifiziert werden und erlaubte Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Namen entsprechend der geladenen Schriftartdatei zu benennen.

#### Beispiel für eine Standard-upright (Roman) Schriftart

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

In diesem Fall gibt die `font-style: normal` Deklaration an, dass diese Schriftartdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass die Schriftart normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schriftart, die nur Kursivschrift und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic` Deklaration an, dass diese Schriftartdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass die Schriftart kursive Glyphen hat.

#### Beispiel für eine Schriftart, die eine Schrägachse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftartdatei verwendet werden sollte, wenn in einer Stilregel die `font-family` Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad inklusiv ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die variable Schriftarten unterstützen, werden diese weiterhin rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf das Format-Variationen (d. h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die ordnungsgemäße Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Die Angabe von Wertbereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d. h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht davon abhalten, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie dies mit Bedacht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriftarten kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, variable Schriftarten in der Produktion zu nutzen und das CSS, das die variablen Schriftarten aufruft, in einem Feature-Abfrageblock zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Das erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS-Custom-Properties, um Werte für einen `font-variation-settings`-String festzulegen, und zeigt, wie Sie einfacher einzelne variable Werte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Abstufungsachse-Eigenschaft ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Schriftartenmodul 4 Spezifikation](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung der Redaktion)
- [W3C GitHub-Problemwarteschlange](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Einführung in OpenType-Variationen](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variations-Achsen-Tag-Registrierung](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schriftart über eine einfache Drag-and-Drop-Inspektionsschnittstelle kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielplatzseite für variable Schriftarten)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von variablen Schriftarten und wo man sie bekommen kann)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
