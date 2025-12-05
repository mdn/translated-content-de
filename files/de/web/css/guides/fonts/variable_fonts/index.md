---
title: Variable fonts
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**Variable fonts** sind eine Weiterentwicklung der OpenType-Schrift-Spezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftdatei für jede Breite, jedes Gewicht oder jeden Stil zu haben. Sie können alle im Fontfile enthaltenen Variationen über CSS und eine einzige {{cssxref("@font-face")}}-Referenz nutzen. Dieser Artikel vermittelt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von variablen Schriften zu beginnen.

> [!NOTE]
> Um variable Schriften auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriften. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie variable Schriften weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an variablen Schriften anders ist, lohnt es sich, zu überprüfen, wie nicht-variable Schriften aussehen und wie sie im Vergleich dazu abschneiden.

### Standard- (oder statische) Schriften

Früher wurde eine Schriftart als mehrere individuelle Schriften erzeugt, und jede Schrift stellte eine spezifische Breite-/Gewicht-/Stilkombination dar. So hatte man separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — das bedeutete, dass man bis zu 20 oder 30 verschiedene Schriftdateien für eine vollständige Schriftart haben konnte (es könnte mehrere Male mehr sein bei einer großen Schriftart, die unterschiedliche Breiten hat).

In einem solchen Szenario würde man für die typische Nutzung einer Schriftart auf einer Website für Fließtext mindestens vier Dateien benötigen: regular, italic, bold und bold italic. Wenn man mehr Gewichtungen hinzufügen wollte, wie beispielsweise eine leichtere für Bildunterschriften oder eine schwerere für extra Betonung, würde das mehrere zusätzliche Dateien bedeuten. Das resultiert in mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable fonts

Mit einer variablen Schrift können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, aber in den meisten Fällen kleiner oder ungefähr so groß wie die vier Dateien, die man für Fließtext laden würde. Der Vorteil der Wahl einer variablen Schrift besteht darin, dass man Zugriff auf das gesamte Spektrum an Gewichten, Breiten und verfügbaren Stilen hat, anstatt auf die wenigen beschränkt zu sein, die man zuvor separat geladen hätte.

Dies ermöglicht gemeinsame typografische Techniken, wie das Setzen unterschiedlicher Überschriftengrößen in unterschiedlichen Gewichten für eine bessere Lesbarkeit in jedem Format oder die Verwendung einer leicht schmaleren Breite für datendichte Anzeigen. Im Vergleich dazu ist es in einem typografischen System für ein Magazin typisch, 10–15 oder mehr verschiedene Gewichtungs- und Breitenkombinationen in der gesamten Publikation zu verwenden — was eine viel breitere Palette an Stilen bietet, als derzeit im Web üblich (oder in der Tat allein aus Leistungsgründen praktikabel).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie werden möglicherweise bemerken, dass wir darüber gesprochen haben, dass jede Gewichts- und Stilart (d.h. fett, kursiv und fett-kursiv) über eine spezifische Schriftdatei verfügen sollte, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschriften haben, die oft völlig andere Zeichen enthalten (Kleinbuchstaben 'a' und 'g' sind oft in Kursiv sehr unterschiedlich, zum Beispiel). Um das Schriftartendesign am genauesten zu widerspiegeln und Unterschiede zwischen den Browsern zu vermeiden, und wie diese möglicherweise die verschiedenen Stile synthetisieren oder nicht synthetisieren, ist es genauer, die spezifischen Schriftdateien dort zu laden, wo sie benötigt werden, wenn Sie keine variable Schrift verwenden.

Sie werden möglicherweise auch feststellen, dass einige variable Schriften in zwei Dateien aufgeteilt sind: eine für die aufrechten Varianten und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, falls die Kursivschrift nicht benötigt oder verwendet wird. In jedem Fall ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}} Namen zu verknüpfen, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herz des neuen variablen Schriftformats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder fett die Buchstabenzauber sein können; die 'Breitenachse' beschreibt, wie schmal oder breit sie sein können; die 'Kursivachse' beschreibt, ob kursivierte Buchstabenzauber vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Das Gewicht kann von 1 bis 999 reichen, während Kursivschrift 0 oder 1 sein kann (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schrägneigung, Kursivschrift und optische Größe. Das W3C hat sich vorgenommen, sie bestehenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartendesigner kann jede Achse definieren und gestalten, die er möchte, und diese einfach mit einem vierbuchstabigen **Tag** kennzeichnen, um sie im Schriftdateiformat selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den untenstehenden Code-Beispielen gezeigt wird.

### Registrierte Achsen und vorhandene CSS-Attribute

In diesem Abschnitt zeigen wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die grundlegendere Syntax enthalten. Die grundlegendere Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus zur Prüfung der frühen Implementierungen der Unterstützung variabler Schriften und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die entsprechende Eigenschaft verwendet werden, wobei die grundlegendere Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die ansonsten nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsnamen groß- und kleinschreibungssensitiv sind. Die registrierten Achsnamen müssen in Kleinbuchstaben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie values mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (auf die gleiche Weise wie beim Setzen von OpenType-Schriftmerkmalen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. In CSS gibt es schon lange die Möglichkeit, dies über die {{cssxref("font-weight")}} Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in 100er-Schritten annimmt sowie Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden immer noch angewendet, wenn man mit nicht-variablen oder variablen Schriften umgeht, aber mit variablen Schriften ist jetzt jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es momentan keine Möglichkeit in der `@font-face` Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schrift auf das Schlüsselwort `:bold` (oder ein anderes Schlüsselwort) zu 'mappen'. Dies lässt sich im Allgemeinen ziemlich einfach lösen, erfordert jedoch einen zusätzlichen Schritt im CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-weight` Werten zu experimentieren.

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

Breite (repräsentiert durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenzauber sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}} Eigenschaft gesetzt, bei der Werte als Prozentsatz oberhalb oder unterhalb von 'normal' (100%) ausgedrückt werden, wobei jede Zahl größer als 0 technisch gültig ist – wobei es wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie z.B. 75%-125%. Wenn ein Zahlenwert angegeben wird, der außerhalb des im Font kodierten Bereichs liegt, sollte der Browser den Font beim nächsten erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` verwendet wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-width` Werten zu experimentieren.

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

### Kursiv

Die Kursiv-Achse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0,5` "halb kursiv" und `1` "voll kursiv" bedeutet. Kursiv-Designs enthalten oft dramatisch andere Formen als ihre aufrechten Pendants, daher treten bei dem Übergang von aufrecht zu kursiv meist mehrere Glyphen- (oder Zeichen-) Ersetzungen auf. Kursiv und Schrägschrift werden oft etwas austauschbar verwendet, sind aber wahrhaftig ganz unterschiedlich. Schrägschrift wird in diesem Zusammenhang mit dem Begriff `slnt` (siehe folgenden Abschnitt) definiert, und eine Schriftart würde typischerweise entweder das eine oder das andere haben, aber nicht beides.

In CSS werden sowohl Kursiv- als auch Schrägschriften auf Text mit der {{cssxref("font-style")}} Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann verwendet werden, um auch falsches Fett-Drucken zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-italics` zu experimentieren.

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

### Schrägneigung

Schrägneigung (repräsentiert durch das `slnt`-Tag), oder wie sie oft genannt wird, 'oblique' — unterscheidet sich von echten Kursivschriften darin, dass sie den Winkel der Buchstabenzauber ändert, aber keine Art von Zeichentausch vornimmt. Es ist zudem variabel, da es als numerischer Bereich ausgedrückt wird. Dadurch kann die Schrift entlang der Schrägneigungsachse variiert werden. Der erlaubte Bereich ist von -90 bis 90 Grad.

Die zwei Eigenschaften, die die Schrägneigung steuern können, sind {{cssxref("font-style")}} und {{cssxref("font-variation-settings")}}. Die folgenden zwei Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style` Eigenschaft gegenüber der `font-variation-settings` Eigenschaft. Das `deg` Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings` Eigenschaft verwendet wird. Auch bei der `font-variation-settings` Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn verlaufende Neigung.

Im folgenden Live-Beispiel können Sie die Schrägneigung anpassen.

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

Dies ist etwas Neues für digitale Schriften und CSS, aber eine Jahrhunderte alte Technik bei der Gestaltung und Herstellung von Metalltypen. Optisches Sizing bezieht sich auf die Praxis der Anpassung der gesamten Strichstärke der Buchstabenzauber basierend auf der physischen Größe. Wenn die Größe sehr klein war (z.B. ein Äquivalent von 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und vielleicht andere kleine Änderungen, um sicherzustellen, dass sie reproduziert und bei einer physisch kleineren Größe lesbar wären. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Variationen in den dicken und dünnen Strichstärken geben, um das Schriftartendesign mehr in Übereinstimmung mit der ursprünglichen Absicht zu zeigen.

Während dies ursprünglich gemacht wurde, um den Druck- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen druckten oft nicht, was den Buchstabenzaubern ein unterbrochenes Aussehen gab), eignet es sich gut für digitale Displays, wenn es um die Kompensation von Bildschirmqualität und physischer Größendarstellung geht.

Optische Größenwerte sollen allgemein automatisch angewendet werden, entsprechend der `font-size`, können aber auch mit der grundlegenderen `font-variation-settings` Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um variable Schriften in CSS zu unterstützen. Bei Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut erlaubt also nur das Ein- oder Ausschalten des optischen Sizings. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Typ gerendert wird) mit dem `opsz`-Wert übereinstimmen (was die Art und Weise ist, wie optisches Sizing angewendet werden soll, wenn `auto` verwendet wird). Die Möglichkeit, einen bestimmten Wert anzugeben, wird bereitgestellt, damit es, falls notwendig, — aus Gründen der Lesbarkeit, Ästhetik oder aus anderen Gründen — überschrieben werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Designvariationsachse sein, die der Schriftartendesigner sich vorstellt. Es könnte einige geben, die recht häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grad

Der Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftartendesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartendesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass die Änderung des Textgrads das gesamte Layout des Textes oder der darum befindlichen Elemente nicht verändert. Dies macht den Grad zu einer nützlichen Achse der Variation, da er variiert oder animiert werden kann, ohne einen Neufluss des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit `font-grade`-Werten zu experimentieren.

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

### Verwendung einer variablen Schrift: Änderungen bei @font-face

Die Syntax zum Laden von variablen Schriften ist sehr ähnlich zu der jeder anderen Web-Schrift, mit einigen bemerkenswerten Unterschieden, die jetzt durch Upgrades der traditionellen {{cssxref("@font-face")}}-Syntax in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist die gleiche, aber die Schrifttechnologie kann angegeben werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt sie nach dem geladenen Fontfile zu benennen.

#### Beispiel für einen Standard-aufrechten (Römischen) Font

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

In diesem Fall gibt die `font-style: normal` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und {{cssxref("font-style")}} auf `normal` gesetzt ist. Alternativ können Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen enthält (angezeigt durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursivschrift und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und {{cssxref("font-style")}} auf `italic` gesetzt ist. Alternativ können Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass die Schrift kursive Glyphen hat.

#### Beispiel für eine Schrift, die eine Schrägneigungsachse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die Eigenschaft `font-family` `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad einschließlich gesetzt ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Fontformat implementiert, also testen Sie sorgfältig. Alle Browser, die variable Schriften unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf Format-Variationen (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Die Angabe von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht daran hindern, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie dies mit Bedacht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriften kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, variable Schriften in der Produktion zu verwenden und das CSS, das die variablen Schriften aufruft, in einem Feature Query Block zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet, wo immer möglich, die Standardattribute. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für einen `font-variation-settings`-String festzulegen, und zeigt, wie Sie einzelne variable Werte leichter aktualisieren können, indem Sie nur eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hover-Effekt auf den `h2`, der nur den Wert der benutzerdefinierten Achse für den Grad ändert. Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die anhand einer Drag-and-Drop-Inspektionsschnittstelle zeigt, was Ihre Schrift kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielwiese für variable Schriften)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von variablen Schriften und wo Sie diese erhalten können)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für variable Schriften mit einigen sehr einzigartigen Ansätzen für die Benutzeroberfläche)
