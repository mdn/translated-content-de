---
title: Leitfaden zu variablen Schriftarten
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 45913d055f02da51493b1b8a5d2c07a86e8d90b7
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Schriftartdatei zu haben. Sie ermöglichen den Zugriff auf alle Variationen, die in einer gegebenen Schriftartdatei über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz enthalten sind. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von variablen Schriftarten zu beginnen.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie variable Schriftarten in Webseiten oder in den Firefox Developer Tools nicht verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei variablen Schriftarten anders ist, lohnt es sich, zu überprüfen, wie nicht-variablen Schriftarten aussehen und wie sie verglichen werden können.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriftarten erstellt, wobei jede Schriftart eine spezifische Kombination aus Breite/Gewicht/Stil repräsentierte. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' – was bedeutet, dass Sie 20 oder 30 verschiedene Schriftartdateien haben könnten, um eine vollständige Schriftfamilie darzustellen (bei einer großen Schriftfamilie mit unterschiedlichen Breiten könnte es noch mehrere Male so viele sein).

In einem solchen Szenario müssten Sie, um eine Schriftart für die typische Verwendung auf einer Seite für Fließtext zu verwenden, mindestens vier Dateien bereitstellen: regular, italic, bold und bold italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie ein leichteres für Beschriftungen oder ein schwereres für zusätzliche Betonung, würden das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (üblicherweise etwa 20k oder mehr pro Datei).

### Variable Schriftarten

Mit einer variablen Schriftart können alle diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr genauso groß wie die 4, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl der variablen Schriftart besteht darin, dass Ihnen das gesamte Spektrum an Gewichten, Breiten und Stilen zur Verfügung steht, anstatt nur auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie das Setzen unterschiedlicher Größen von Überschriften in unterschiedlichen Gewichtungen für bessere Lesbarkeit bei jeder Größe oder die Verwendung einer etwas schmaleren Breite für datenintensive Anzeigen. Zum Vergleich ist es in einem typografischen System für ein Magazin üblich, 10–15 oder mehr verschiedene Gewichts- und Breitenkombinationen im gesamten Publikationsprozess einzusetzen – was ein weitaus breiteres Spektrum an Stilen ermöglicht als derzeit im Web üblich (oder tatsächlich aus Leistungsgründen allein praktisch).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht haben Sie bemerkt, dass wir darüber gesprochen haben, eine spezifische Schriftartdatei für jedes Gewicht und jeden Stil zu haben (d.h. fett, kursiv und fett kursiv), anstatt sich auf den Browser zu verlassen, der sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichtungen und Kursiven haben, die oft völlig andere Zeichen enthalten (der Kleinbuchstabe 'a' und 'g' sind zum Beispiel oft in Kursivschriften ganz anders). Um das Schriftdesign so genau wie möglich widerzuspiegeln und Unterschiede zwischen Browsern zu vermeiden, und wie sie möglicherweise die unterschiedlichen Stile nicht synthetisieren, ist es genauer, die spezifischen Schriftartdateien dort zu laden, wo sie benötigt werden, wenn man eine nicht-variable Schriftart verwendet.

Sie werden auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt sind: eine für aufrechte und alle deren Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die Gesamtdateigröße zu reduzieren, falls die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit dem gleichen `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Der Kern des neuen Formates variabler Schriftarten ist das Konzept einer **Variationsachse**, die den erlaubten Bereich dieses bestimmten Aspekts des Schriftdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursives Schriftgut vorhanden ist und entsprechend an- oder ausgeschaltet werden kann usw. Beachten Sie, dass eine Achse einen Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1 bis 999 reichen, während kursiv 0 oder 1 (aus oder an) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten auftreten und so häufig sind, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie mit bestehenden CSS-Attributen in Verbindung zu bringen, und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftdesigner kann jede beliebige Achse definieren und umreißen und muss ihr nur einen vierstelligen **Tag** geben, um sie innerhalb des Schriftartdateiformates selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu bestimmen, wie in den unten gezeigten Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen anhand von Beispielen und dem entsprechenden CSS. Wenn möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung von variablen Schriftarten zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings sollte diese Syntax laut W3C nur verwendet werden, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, das entsprechende Attribut verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen einzustellen, die ansonsten nicht verfügbar sind.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist zu beachten, dass Achsennamen case-sensitiv sind. Die registrierten Achsennamen müssen in Kleinschreibung angegeben werden, und benutzerdefinierte Achsen müssen in Großbuchstaben angegeben werden. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle von ihnen neu deklarieren (auf die gleiche Weise wie beim Setzen von OpenType-Schriftartfunktionen mit {{cssxref("font-feature-settings")}}). Sie können dieses Problem umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die individuellen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch das Tag `wght`) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in Schritten von 100 sowie Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliasse für ihre entsprechenden numerischen Werte (400 und 700 in diesem Fall) sind. Diese werden weiterhin angewendet, wenn man mit nicht-variablen oder variablen Schriftarten arbeitet, aber mit variablen ist jetzt jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schriftart der Schlüsswörter `bold` (oder einem anderen Schlüsswort) zuzuordnen. Dies kann in der Regel relativ einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgewichts-Werten zu spielen.

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

Breite (repräsentiert durch das Tag `wdth`) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft gesetzt, mit Werten, die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig – obwohl es viel wahrscheinlicher ist, dass der Bereich näher am 100% liegt, wie z.B. 75%-125%. Wenn ein Zahlenwert außerhalb des in der Schriftart kodierten Bereichs angegeben wird, sollte der Browser die Schriftart mit dem nächsten erlaubten Wert rendern.

> [!NOTE]
> Das Prozentzeichen wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftbreiten-Werten zu spielen.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halbwegs kursiv" und `1` "vollständig kursiv" angibt. Kursivdesigns enthalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, daher treten beim Übergang von aufrecht zu kursiv normalerweise mehrere Glyphen- (oder Zeichen-)Substitutionen auf. Kursiv und schräg werden oft etwas austauschbar verwendet, sind aber in Wahrheit recht unterschiedlich. Schräg wird in diesem Kontext mit dem Begriff `slant` (siehe den untenstehenden Abschnitt) definiert, und eine Schriftart hätte typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg auf Text mithilfe der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` – dies verhindert, dass Browser versehentlich die Variationsachse und ein synthetisches Kursiv anwenden. Dies kann auch verwendet werden, um faux-fett zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftkursiv-Werten zu spielen.

```html hidden live-sample___variable-fonts-italic-example
<div>
  <p class="p1">Italic</p>
  <span>(font-style: italic)</span>
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
/* italic range is 0 or 1 */
.p1 {
  font-synthesis: none;
  font-style: italic;
}

/* italic range is 0 or 1 */
.p2 {
  font-synthesis: none;
  font-variation-settings: "ital" 1;
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

Slant (repräsentiert durch das Tag `slnt`), oder wie es oft genannt wird, 'schräg' – unterscheidet sich von echten Kursiven darin, dass es den Winkel der Buchstabenformen ändert, aber keine Art von Zeichensubstitution durchführt. Es ist auch variabel, in dem Sinne, dass es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schriftart überall entlang der Schrägachse zu variieren. Der erlaubte Bereich beträgt von -90 bis 90 Grad.

Die zwei Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft über die `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Außerdem bedeutet im Fall der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schrägstellung.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik im Design und der Erstellung von Metallschriften. Optische Größe bezieht sich auf die Praxis, die gesamte Strichstärke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie z.B. ein Äquivalent zu 10 oder 12px), würden die Zeichen einen insgesamt dickeren Strich haben und vielleicht andere kleine Modifikationen, um sicherzustellen, dass sie bei einer physisch kleineren Größe reproduziert und lesbar wären. Im Gegensatz dazu, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Unterschiede in den Dicken und dünnen Strichstärken geben, die das Schriftdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Obwohl dies ursprünglich getan wurde, um den Druckprozess von Tinte und Papier zu kompensieren (sehr dünne Linien in kleinen Größen druckten oft nicht und gaben den Buchstabenformen ein gebrochenes Aussehen), lässt es sich gut auf digitale Displays übersetzen, wenn die Bildschirmqualität und die physische Größendarstellung kompensiert werden müssen.

Optische Größenwerte sollen in der Regel automatisch in Übereinstimmung mit `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um variable Schriftarten in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` – dieses Attribut ermöglicht daher nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert abgleichen (was die beabsichtigte Anwendung der optischen Größenanpassung bei Verwendung von `auto` widerspiegelt). Die Möglichkeit, einen spezifischen Wert anzugeben, wird bereitgestellt, damit bei Bedarf – aus Gründen der Lesbarkeit, Ästhetik oder einem anderen Grund – ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Werten der optischen Größe zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Designvariationsachse sein, die sich der Schriftdesigner ausdenkt. Es kann einige geben, die ziemlich häufig werden – oder sogar registriert werden – aber das wird nur die Zeit zeigen.

### Grade

Grade könnte eine der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftdesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Verwendung und die Drucktechniken durchgeführt. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftdesigns, unterscheidet sich jedoch vom traditionellen 'Gewicht', da der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades das Gesamtlayout des Textes oder der darum liegenden Elemente nicht verändert. Dies macht Grade zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne eine Neuanordnung des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Werten des Schriftgrades zu experimentieren.

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

### Verwendung einer variablen Schriftart: Änderungen bei @font-face

Die Syntax für das Laden variabler Schriftarten ist sehr ähnlich wie jede andere Webschriftart, mit ein paar bemerkenswerten Unterschieden, die durch Erweiterungen der traditionellen {{cssxref("@font-face")}}-Syntax jetzt in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist dieselbe, aber die Schriftarttechnologie kann angegeben werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können anstelle von Namen entsprechend der geladenen Schriftartdatei angegeben werden.

#### Beispiel für eine Standard-Aufrechte (Römische) Schriftart

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

In diesem Fall zeigt der Wert `normal` an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `normal` ist. Die Werte `oblique 0deg` und `oblique 0deg 20deg` zeigen auch an, dass die Schriftart normale aufrechte Glyphen hat.

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

In diesem Fall gibt der Wert `italic` an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `italic` ist. Der Wert `oblique 14deg` zeigt auch an, dass die Schriftart kursivistische Glyphen hat.

#### Beispiel für eine Schriftart, die eine Schrägachse (Slant) enthält

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

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `oblique` mit einem Winkel zwischen null und 12 Grad inklusiv ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformate implementiert, testen Sie daher sorgfältig. Alle Browser, die variable Schriftarten unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur auf das Dateiformat einstellen, anstatt auf format-variations (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), blockiert jedoch nicht, dass Sie einen ungültigen Wert über `font-variation-settings` angeben können, verwenden Sie dies also mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriftarten kann mit CSS-Funktionsabfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, variable Schriftarten in der Produktion zu verwenden und das CSS, das die variablen Schriftarten aufruft, innerhalb eines Funktionabfrage-Blocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für einen `font-variation-settings`-String festzulegen, und zeigt, wie Sie einfacher einzelne Variablenwerte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hovereffekt auf dem `h2`, der nur den Grade-Achsen-Benutzereigenschaftswert ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schriftart kann, über eine einfache Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable-Schriftarten-Spielplatzseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von variablen Schriftarten und wo sie zu bekommen sind)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
