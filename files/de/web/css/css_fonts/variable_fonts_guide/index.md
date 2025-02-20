---
title: Leitfaden für Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Font-Spezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Font-Datei zu haben. Sie können auf alle in einer bestimmten Schriftdatei enthaltenen Variationen über CSS und eine einzige {{cssxref("@font-face")}}-Referenz zugreifen. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um mit dem Einsatz von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts in Webseiten oder den Firefox Developer Tools nicht verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriftarten aussehen und wie sie im Vergleich abschneiden.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere individuelle Schriftdateien produziert, und jede Schriftdatei repräsentierte eine spezifische Kombination aus Breite/Gewicht/Stil. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold', und 'Roboto Bold Italic' — was bedeutet, dass Sie schließlich 20 oder 30 verschiedene Font-Dateien hätten, um eine vollständige Schriftfamilie darzustellen (bei einer größeren Schriftfamilie, die unterschiedliche Breiten aufweist, könnte es mehrere Male so viel sein).

In einem solchen Szenario benötigen Sie, um eine Schriftart für den typischen Gebrauch auf einer Seite für Fließtext zu verwenden, mindestens vier Dateien: regular, italic, bold und bold italic. Wenn Sie weitere Gewichtungen hinzufügen wollten, etwa eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, bedeutete dies mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können alle diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, aber in den meisten Fällen kleiner oder etwa von der gleichen Größe wie die 4, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl des Variable Fonts besteht darin, dass Sie auf die gesamte Palette von Gewichten, Breiten und Stilen zugreifen können, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht techniken wie das Einstellen unterschiedlicher Größenüberschriften in unterschiedlichen Gewichten für bessere Lesbarkeit bei jeder Größe oder die Verwendung einer leicht schmaleren Breite für datendichte Darstellungen. Zum Vergleich: Es ist typisch in einem typografischen System für ein Magazin, 10–15 oder mehr verschiedene Gewichtungs- und Breitenkombinationen im gesamten Druckerzeugnis zu nutzen — und damit ein viel breiteres Spektrum an Stilen zu erhalten, als derzeit im Web üblich ist (oder überhaupt praktisch aus Leistungsgründen).

#### Eine Anmerkung zu Schriftartfamilien, Gewichten und Varianten

Sie haben vielleicht bemerkt, dass wir darüber gesprochen haben, für jedes Gewicht und Stil (d.h. fettdruck, kursiv und fett-kursiv) eine spezifische Font-Datei zu haben, anstatt sich auf den Browser zu verlassen, diese zu synthetisieren. Der Grund hierfür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichtungen und Kursive aufweisen, die oft vollständig unterschiedliche Charaktere enthalten (z.B. sind der Kleinbuchstabe 'a' und 'g' oft sehr unterschiedlich in der Kursivschrift). Um das Schriftschnittdesign am genauesten zu reflektieren und Unterschiede zwischen den Browsern und deren Fähigkeit oder Unfähigkeit, die verschiedenen Stile zu synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftdateien bei Bedarf zu laden, wenn Sie eine nicht-variable Schriftart verwenden.

Sie werden auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für die Aufrechte und alle ihre Variationen und eine, die die Kursivvariationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, falls die Kursive nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit dem gleichen `font-family` und dem entsprechenden {{cssxref("font-style")}} verwenden können.

## Einführung in die 'Variationsachse'

Im Kern des neuen Formats der Variable Fonts steht das Konzept einer **Variationsachse**, die den zulässigen Bereich von diesem bestimmten Aspekt des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder schwer die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder breit sie sein können; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse einen Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, wohingegen Kursiv 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und so häufig sind, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schrägung, Kursiv und optische Größe. Das W3C hat sich vorgenommen, sie zu existierenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie weiter unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartdesigner kann jede beliebige Achse definieren und begrenzen und muss ihr lediglich ein vierbuchstabiges **Tag** geben, um sie im Font-Dateiformat selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie in den untenstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um die frühen Implementierungen der Unterstützung für Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Jedoch war es die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Deshalb sollte, wann immer möglich, die passende Eigenschaft verwendet werden, mit der Low-Level-Syntax von `font-variation-settings` nur, um Werte oder Achsen zu setzen, die anderweitig nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsnamen auf Groß- und Kleinschreibung achten. Die registrierten Achsnamen müssen in Kleinbuchstaben und benutzerdefinierte Achsen in Großbuchstaben sein. Zum Beispiel:

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (ähnlich wie bei der Einstellung von OpenType-Schriftmerkmalen mit {{cssxref("font-feature-settings")}}). Dies können Sie umgehen, indem Sie [CSS-Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Ein Beispielcode folgt am Ende des Leitfadens.

### Gewichtung

Gewicht (dargestellt durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Schon lange gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in Schritten von 100 sowie Schlüsselwörter wie `normal` oder `bold` nimmt, die Aliasse für ihre entsprechenden numerischen Werte sind (400 bzw. 700 in diesem Fall). Diese werden weiterhin angewendet, wenn man mit nicht-variablen oder variablen Fonts arbeitet, aber mit variablen sind jetzt alle Zahlen von 1 bis 1000 gültig.

Es sei angemerkt, dass es derzeit keinen Weg in der `@font-face`-Deklaration gibt, um einen spezifischen Punkt auf der Variationsachse eines Variable Fonts dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies kann im Allgemeinen recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-weight`-Werten zu experimentieren.

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

Breite (dargestellt durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (verkleinert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft gesetzt, wobei die Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden; jede Zahl größer als 0 ist technisch gültig – obwohl es weit wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, etwa 75%-125%. Wenn der bereitgestellte Zahlenwert außerhalb des in der Schrift kodierten Bereichs liegt, sollte der Browser die Schrift bei dem nächstgelegenen zulässigen Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-width`-Werten zu experimentieren.

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

Die kursiv-Achse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns beinhalten oft drastisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv mehrere Glyphen- (oder Zeichen-) Ersetzungen normalerweise vorkommen. Kursiv und schräg werden oft etwas austauschbar verwendet, sind aber in Wahrheit ganz unterschiedlich. Schräg wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den unteren Abschnitt), und eine Schriftart hätte typischerweise eines oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg auf Text über die {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser den Variationsachse und ein synthetisiertes Kursiv versehentlich anwenden. Dies kann auch verwendet werden, um Fake-Bold zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Kursivschriften zu experimentieren.

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

### Slant (Schrägung)

Slant (dargestellt durch das `slnt`-Tag), oder wie es oft genannt wird, 'schräg' — ist anders als echte Kursivschriften, da es den Winkel der Buchstabenformen ändert, ohne eine Art von Zeichenersetzung vorzunehmen. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schrift an jeder Stelle entlang der Schrägungsachse zu variieren. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schrägung kontrollieren können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft genutzt wird. Auch bedeutet bei der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn verlaufende Schrägung.

Im folgenden Live-Beispiel können Sie die Schrägung anpassen.

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

Dies ist etwas Neues bei digitalen Schriften und CSS, aber eine jahrhundertealte Technik im Design und der Erstellung von Metallschrift. Die optische Größenanpassung bezieht sich auf die Praxis, die allgemeine Strichstärke von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (z.B. ein Äquivalent zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und vielleicht andere kleine Anpassungen, um sicherzustellen, dass sie reproduziert und in kleinerer physischer Größe lesbar wären. Im Gegensatz dazu könnte bei einer viel größeren Größe (wie 48 oder 60px) eine viel größere Variation bei dicken und dünnen Strichstärken sein, was das Schriftschnittdesign mehr mit der ursprünglichen Absicht zeigen könnte.

Während dies ursprünglich getan wurde, um den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen haben oft nicht gedruckt und den Buchstabenformen ein gebrochenes Aussehen gegeben), überträgt es sich gut auf digitale Displays, wenn man die Bildschirmqualität und die physische Größenwiedergabe kompensiert.

Optische Größeneinstellungen sollen allgemein automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um Variable Fonts in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` erlaubt – dieses Attribut erlaubt es also nur, die optische Größenanpassung ein- oder auszuschalten. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, kann ein numerischer Wert angegeben werden. In den meisten Fällen würden Sie die `font-size` (die physische Größe, in der die Schrift gerendert wird) mit dem `opsz`-Wert (der so angewendet werden soll, wenn `auto` verwendet wird) übereinstimmen wollen. Die Option, einen spezifischen Wert anzugeben, wird angeboten, damit bei Bedarf die Standardeinstellung – aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund – überschrieben werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Werten der optischen Größe zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Designvariationsachse sein, die sich der Schriftartdesigner vorstellt. Es könnte einige geben, die ziemlich häufig werden – oder sogar registriert werden – aber das wird die Zeit zeigen.

### Grad

Der Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftschnittdesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Verwendung und Drucktechnik gemacht. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftschnittdesigns, unterscheidet sich jedoch vom traditionellen 'Gewicht' dadurch, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass sich der Textgrad ändern kann, ohne das Layout des Textes oder der umgebenden Elemente zu verändern. Dies macht den Grad zu einer nützlichen Variationsachse, da er variiert oder animiert werden kann, ohne einen Refow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-grade`-Werten zu experimentieren.

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

Die Syntax zum Laden von Variable Fonts ähnelt weitgehend jeder anderen Webschrift, mit ein paar bemerkenswerten Unterschieden, die über Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die jetzt in modernen Browsern verfügbar sind.

Die Grundsyntax bleibt gleich, aber die Schrifttechnologie kann angegeben und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können bereitgestellt werden, anstatt nach der zu ladenden Schriftdatei benannt zu sein.

#### Beispiel für eine standardmäßige aufrechte (Roman) Schriftart

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftart-Datei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass die Schrift normale aufrechte Glyphen enthält (angezeigt durch `0deg`).

#### Beispiel für eine Schriftart, die nur Kursiv enthält und keine aufrechten Zeichen

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftart-Datei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass die Schrift kursivisierte Zeichen hat.

#### Beispiel für eine Schriftart, die eine schiefe (Schrägungs-) Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftart-Datei verwendet werden sollte, wenn eine Stilregel die `font-family`-Eigenschaft auf `MyVariableFontName` gesetzt ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad inklusive ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie noch rendern, wenn Sie das Format nur auf das Dateiformat einstellen, anstatt format-variations (d.h. `woff2` anstatt `woff2-variations`), aber es ist am besten, die ordnungsgemäße Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Bereitstellen von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereiches zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), hindert Sie jedoch nicht daran, einen ungültigen Wert über `font-variation-settings` zu liefern, also verwenden Sie mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS Feature Queries überprüft werden (siehe {{cssxref("@supports")}}), so dass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Query-Blocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Arten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS-Custom Properties, um Werte für eine `font-variation-settings` Zeichenkette zu setzen und zeigt, wie Sie einfacher einzelne variable Werte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Gradachse-Custom-Property-Wert ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editoren-Entwurf)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen sagt, was Ihre Schrift über eine einfache Drag-and-Drop-Inspektionsoberfläche kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts-Playground-Seite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Playground für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
