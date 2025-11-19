---
title: Variable fonts
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in eine einzige Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Schriftartdatei zu haben. Sie ermöglichen den Zugriff auf alle in einer gegebenen Schriftartdatei enthaltenen Variationen über CSS und eine einzige {{cssxref("@font-face")}} Referenz. Dieser Artikel gibt Ihnen alles, was Sie benötigen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem verwenden zu können, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS Versionen vor High Sierra (10.13) unterstützen keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei Variable Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie Nicht-Variable-Schriftarten aussehen und wie sie sich vergleichen lassen.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriftdateien erstellt, wobei jede Schriftdatei eine bestimmte Breite/Gewicht/Stil-Kombination darstellte. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutet, dass Sie am Ende 20 oder 30 verschiedene Schriftartdateien benötigen könnten, um eine vollständige Schriftart darzustellen (bei großen Schriftarten mit verschiedenen Breiten könnte es sogar mehrmals so viele sein).

In einem solchen Szenario würden Sie, um eine Schriftart für die typische Verwendung auf einer Website für Fließtext zu nutzen, mindestens vier Dateien benötigen: Regular, Italic, Bold und Bold Italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie z.B. ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, würde das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (meistens etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einer Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die 4 Dateien, die Sie für Fließtext laden könnten. Der Vorteil der Wahl einer Variable Font ist, dass Sie Zugriff auf die gesamte Bandbreite an Gewichten, Breiten und Stilen haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Festlegen von Überschriften in verschiedenen Größen mit unterschiedlichen Gewichten, um die Lesbarkeit bei jeder Größe zu verbessern, oder die Verwendung einer etwas schmaleren Breite für datenintensive Anzeigen. Im Vergleich ist es typisch, dass ein typografisches System für ein Magazin 10-15 oder mehr verschiedene Gewichtungs- und Breitenskombinationen im gesamten Publikationsverlauf verwendet — was eine viel größere Bandbreite an Stilen bietet, als derzeit im Web typisch ist (oder in der Tat allein aus Leistungsgründen praktisch wäre).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Sie werden bemerken, dass wir darüber gesprochen haben, für jedes Gewicht und jeden Stil eine bestimmte Schriftdatei zu haben (d.h. fett und kursiv und fett kursiv), anstatt sich auf den Browser zu verlassen, sie zu synthetisieren. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschriften haben, die oft völlig unterschiedliche Zeichen enthalten (z.B. sind die Kleinbuchstaben 'a' und 'g' im Kursiv oft ganz anders). Um das Schriftartdesign am genauesten widerzuspiegeln und Unterschiede zwischen Browsern zu vermeiden und wie sie die verschiedenen Stile möglicherweise oder möglicherweise nicht synthetisieren, ist es genauer, die spezifischen Schriftdateien dort zu laden, wo sie benötigt werden, wenn eine Nicht-Variable-Schriftart verwendet wird.

Es kann auch vorkommen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für aufrechte und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die gesamte Dateigröße zu reduzieren, wenn die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}} Namen zu verknüpfen, sodass Sie sie mit demselben `font-family` und entsprechendem {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Der Kern des neuen Variable Fonts-Formats ist das Konzept einer **Achse der Variation**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartdesigns beschreibt. Beispielsweise beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine Binärwahl sein kann. Das Gewicht könnte von 1 bis 999 reichen, während Kursiv 0 oder 1 (aus oder ein) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und so häufig sind, dass die Autoren der Spezifikation es für lohnenswert hielten, sie zu standardisieren. Die derzeit fünf registrierten Achsen sind Gewicht, Breite, Schräge, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie bestehenden CSS-Attributen zuzuordnen und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartendesigner kann jede Achse definieren und festlegen, die er möchte, und ist lediglich verpflichtet, ihr einen vierbuchstabigen **Tag** zu geben, um sie im Schriftartdateiformat selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie in den folgenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS Attribute

In diesem Abschnitt zeigen wir die fünf registrierten Achsen, die mit Beispielen und dem entsprechenden CSS definiert sind. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung für Variable Fonts zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings war es die Absicht des W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte nach Möglichkeit das entsprechende Attribut verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen festzulegen, die ansonsten nicht verfügbar sind.

#### Hinweise

1. Beim Verwenden von `font-variation-settings` ist es wichtig zu beachten, dass Achsnamen groß-/kleinschreibungssensitiv sind. Die Namen registrierter Achsen müssen in Kleinbuchstaben und benutzerdefinierte Achsen in Großbuchstaben geschrieben werden. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (so wie wenn Sie OpenType-Schriftartfunktionen mit {{cssxref("font-feature-settings")}} festlegen). Diese Einschränkung können Sie umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch den `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}} Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in Schritten von 100 und Schlüsselwörter wie `normal` oder `bold` akzeptiert, die Aliase für ihre entsprechenden numerischen Werte sind (400 und 700 in diesem Fall). Diese werden weiterhin angewendet, wenn es um nicht variable oder variable Schriftarten geht, aber mit variablen ist jetzt jede Zahl von 1 bis 1000 gültig.

Es ist zu beachten, dass es derzeit keine Möglichkeit gibt, in der `@font-face`-Deklaration einen bestimmten Punkt auf der Variationsachse einer Variable Font dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies kann im Allgemeinen ziemlich einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Weight-Werten zu spielen.

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

Breite (repräsentiert durch den `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mithilfe der {{cssxref("font-stretch")}} Eigenschaft festgelegt, wobei Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig — obwohl es viel wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie etwa 75% - 125%. Wenn ein bereitgestellter Zahlenwert außerhalb des in der Schrift codierten Bereichs liegt, sollte der Browser die Schriftart mit dem nächstgelegenen zulässigen Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Width-Werten zu spielen.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" angibt. Kursive Designs beinhalten oft drastisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, daher finden bei der Umstellung von aufrecht auf kursiv mehrere Glyphen (oder Zeichen-)Substitutionen statt. Kursiv und Oblique werden oft synonym verwendet, sind jedoch in Wahrheit ganz unterschiedlich. In diesem Zusammenhang wird Oblique mit dem Begriff `slant` (siehe Abschnitt unten) definiert, und eine Schriftart würde typischerweise eines haben, aber nicht beides.

In CSS werden sowohl kursiv als auch oblique auf Text mit der {{cssxref("font-style")}} Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — dies verhindert, dass Browser versehentlich die Variationsachse anwenden und eine synthetisierte Kursivschrift nutzen. Dies kann verwendet werden, um Faux-Bold zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Kursivwerten zu spielen.

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

Schräge (repräsentiert durch den `slnt`-Tag), oder wie es oft genannt wird, 'oblique' — unterscheidet sich von echten Kursiven darin, dass der Winkel der Buchstabenformen verändert wird, aber keine Zeichen Substitutionen durchgeführt werden. Es ist auch variabel, da es als numerische Bereich ausgedrückt wird. Dies ermöglicht es, die Schriftart an beliebiger Stelle entlang der Achse der Schräge zu variieren. Der zulässige Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schräge steuern können, sind [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/Reference/Properties/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style` Eigenschaft gegenüber der `font-variation-settings` Eigenschaft. Der `deg` Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings` Eigenschaft verwendet wird. Auch im Fall der `font-variation-settings` Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn geneigte Schräge.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik im Design und der Erstellung von Bleilettern. Optische Größenanpassung bezieht sich auf die Praxis, die allgemeinen Strichstärken von Buchstabenformen basierend auf ihrer physischen Größe zu variieren. Wenn die Größe sehr klein war (wie ein Äquivalent zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduziert und bei physisch kleinerer Größe lesbar werden. Im Gegensatz dazu, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es einen viel größeren Unterschied in den Dicken- und Dünnheitsstrichen geben, was das Schriftartdesign mehr im Einklang mit der ursprünglichen Absicht zeigt.

Während dies ursprünglich dazu diente, den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen druckten oft nicht, was den Buchstabenformen ein zerbrochenes Aussehen verlieh), lässt es sich gut auf digitale Anzeigen übertragen, wenn es darum geht, die Bildschirmqualität und die physische Größenwiedergabe zu kompensieren.

Optische Größenwerte sollen generell automatisch entsprechend `font-size` angewendet werden, können aber auch mithilfe der unteren Ebene `font-variation-settings` Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um Variable Fonts in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen zulässigen Werte `auto` oder `none` — dieses Attribut erlaubt also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn Sie jedoch `font-variation-settings: 'opsz' <num>` verwenden, können Sie einen numerischen Wert liefern. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der die Schriftart gerendert wird) mit dem `opsz` Wert übereinstimmen lassen (was die optische Größenanpassung ist, wenn `auto` verwendet wird). Die Möglichkeit, einen spezifischen Wert bereitzustellen, wird angeboten, sodass es sollte nötig sein, den Standard zu überschreiben—aus Lesbarkeits-, ästhetischen oder einem anderen Grund—ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Werten der optischen Größe zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Achse des Designvarianten, die der Schriftartendesigner sich vorstellt, sein. Einige könnten ziemlich häufig werden — oder sogar registriert —, aber nur die Zeit wird es zeigen.

### Grade

Der Grad könnte eine der gebräuchlicheren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftartendesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf den vorgesehenen Gebrauch und die Drucktechnik durchgeführt. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass der physische Platz, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades nicht das Gesamtlayout des Textes oder der umgebenden Elemente verändert. Dies macht Grade zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne ein Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Font-Grade-Werten zu spielen.

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

### Verwendung einer Variable Font: Änderungen in @font-face

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich wie bei anderen Webfonts, mit einigen bemerkenswerten Unterschieden, die über Aktualisierungen der traditionellen {{cssxref("@font-face")}} Syntax verfügbar sind, die jetzt in modernen Browsern verfügbar ist.

Die grundlegende Syntax bleibt dieselbe, aber die Schriftarttechnologie kann spezifiziert werden und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können bereitgestellt werden, anstatt gemäß der geladenen Schriftartdatei benannt zu werden.

#### Beispiel für eine Standardschrift (Roman)

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursiv und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift kursive Glyphen hat.

#### Beispiel für eine Schrift, die eine oblique (Schräge) Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family` Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad inklusive ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, testen Sie also sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie dennoch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Wenn Sie Wertebereiche für `font-weight`, `font-stretch` und `font-style` angeben, verhindert dies, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), aber es wird Sie nicht daran hindern, einen ungültigen Wert über `font-variation-settings` zu liefern, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variable Fonts kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Query-Blocks einzufügen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet wo immer möglich die Standardattribute. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings` Zeichenkette festzulegen, und zeigt, wie Sie einzelne variable Werte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Grade Achsen benutzerdefinierten Eigenschaftswert ändert. Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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
- [W3C GitHub issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen zeigt, was Ihre Schriftart über eine Drag-and-Drop-Inspektionsschnittstelle kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Spielwiese)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einzigartigen Ansätzen für die Benutzeroberfläche)
