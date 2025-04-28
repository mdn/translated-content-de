---
title: Variable Fonts Guide
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schrift-Spezifikation, die es ermöglicht, viele verschiedene Variationen eines Schriftbilds in einer einzigen Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Schriftdatei zu haben. Sie ermöglichen es Ihnen, über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz auf alle in einer bestimmten Schriftdatei enthaltenen Variationen zuzugreifen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um den Einstieg in die Verwendung variabler Schriftarten zu erleichtern.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor High Sierra (10.13) unterstützt variable Schriftarten nicht. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie variable Schriftarten weder auf Webseiten noch in den Firefox Developer Tools nutzen.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an variablen Schriftarten anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht variable Schriftarten sind und wie sie im Vergleich abschneiden.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde ein Schriftbild als mehrere einzelne Schriftarten produziert, wobei jede Schriftart eine spezifische Kombination aus Breite/Gewicht/Stil darstellte. So hatten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass Sie am Ende 20 oder 30 verschiedene Schriftdateien hatten, um ein komplettes Schriftbild darzustellen (für ein großes Schriftbild mit unterschiedlichen Breiten konnte es auch mehrere Male so viele sein).

In einem solchen Szenario brauchten Sie mindestens vier Dateien für eine typische Verwendung eines Schriftbilds auf einer Seite mit Fließtext: regular, italic, bold und bold italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Hervorhebungen, bedeutete das mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (in der Regel etwa 20k oder mehr pro Datei).

### Variable Schriftarten

Mit einer variablen Schriftart können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, aber in den meisten Fällen kleiner oder ungefähr die gleiche Größe wie die 4, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl der variablen Schriftart ist, dass Sie Zugriff auf das gesamte Spektrum der verfügbaren Gewichte, Breiten und Stile haben, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie z.B. das Setzen von Überschriften in unterschiedlichen Gewichten, um die Lesbarkeit in jeder Größe zu verbessern, oder die Verwendung einer etwas schmaleren Breite für datenreiche Darstellungen. Zum Vergleich: In einem typografischen System für ein Magazin ist es üblich, 10–15 oder mehr verschiedene Gewichtungs- und Breitenkombinationen im gesamten Werk zu verwenden — was ein deutlich breiteres Stilspektrum bietet als derzeit im Web üblich ist (oder allein aus Leistungsgründen praktisch ist).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir darüber gesprochen haben, eine spezifische Schriftdatei für jedes Gewicht und jeden Stil (d.h. fett und kursiv und fett kursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftbilder sehr spezifische Designs für fettere Gewichte und Kursivschriften haben, die oft komplett unterschiedliche Zeichen beinhalten (zum Beispiel sind kleingeschriebene 'a' und 'g' in Kursivschriften häufig ziemlich unterschiedlich). Um das Design des Schriftbilds möglichst genau widerzuspiegeln und Unterschiede zwischen Browsern zu vermeiden, wie sie die verschiedenen Stile möglicherweise synthetisieren oder nicht, ist es genauer, die spezifischen Schriftdateien dort zu laden, wo nötig, wenn Sie eine nicht-variable Schrift verwenden.

Sie könnten auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt kommen: eine für die Grundformen und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die Gesamtdateigröße zu reduzieren, falls die Kursivschriften nicht benötigt oder genutzt werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit demselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variation Axis'

Das Herzstück des neuen variablen Schriftartenformats ist das Konzept einer **Achseder Variation**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftbilddesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Gewicht kann im Bereich von 1–999 liegen, während Kursiv 0 oder 1 (aus oder an) sein kann.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für sinnvoll erachteten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schräge, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden, und in einem Fall ein neues einzuführen, das Sie weiter unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftgestalter kann jede beliebige Achse definieren und eingrenzen, die er möchte, und muss ihr innerhalb des Schriftdateiformats lediglich einen vierstelligen **Tag** zuweisen. Diese vierstelligen Tags können in CSS verwendet werden, um einen Punkt entlang dieser Achse der Variation anzugeben, wie in den unten stehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, werden sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung für variable Schriftarten zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte wann immer möglich das entsprechende Attribut verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen festzulegen, die anderweitig nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen Groß- und Kleinschreibung unterscheiden. Die Namen der registrierten Achsen müssen in Kleinschreibung und die benutzerdefinierten Achsen in Großschreibung sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte Achse.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (ähnlich wie bei der Festlegung von OpenType-Schriftfunktionen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende der Anleitung.

### Gewicht

Gewicht (repräsentiert durch den `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Schon lange besteht in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte im Bereich von 100 bis 900 in Schritten von 100 und Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliase für ihre entsprechenden numerischen Werte (400 und 700 in diesem Fall) sind. Diese werden weiterhin bei nicht variablen oder variablen Schriften angewendet, aber bei variablen Schriften ist jetzt jede Nummer von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schrift dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuweisen. Dies lässt sich in der Regel recht einfach lösen, erfordert jedoch einen zusätzlichen Schritt beim Verfassen Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Werten von font-weight zu spielen.

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

Breite (repräsentiert durch den `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird normalerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft festgelegt, mit Werten, die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gesehen gültig — jedoch ist es weit wahrscheinlicher, dass der Bereich näher bei 100% liegt, wie z.B. 75%-125%. Wenn ein Zahlenwert außerhalb des Bereichs, der in der Schrift kodiert ist, angegeben wird, sollte der Browser die Schrift mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Ändern Sie den CSS-Code, um mit den Breitenwerten der Schrift zu spielen.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv," `0.5` "halb kursiv," und `1` "voll kursiv" spezifiziert. Kursivdesigns enthalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv normalerweise mehrere Glyphe (oder Zeichen) Anpassungen vorgenommen werden. Kursiv und oblique werden oft ziemlich austauschbar verwendet, sind jedoch in Wahrheit ziemlich unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den nachstehenden Abschnitt), und eine Schriftart hätte typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch oblique per {{cssxref("font-style")}}-Eigenschaft auf Text angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und ein synthetisiertes Kursiv anwenden. Dies kann auch verwendet werden, um Faux-Bold zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Kursivwerten zu spielen.

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

### Schräge

Schräge (repräsentiert durch den `slnt`-Tag), oder wie es oft genannt wird, 'oblique' — unterscheidet sich von echten Kursivschriften darin, dass sie den Winkel der Buchstabenformen verändert, aber keine Art von Zeichenaustausch durchführt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schrift entlang der Schrägachse zu variieren. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die beiden Eigenschaften, die die Schräge steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft vor der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Im Fall der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn verlaufende Schräge.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber es ist eine jahrhundertealte Technik im Entwerfen und Erstellen von Metallschriften. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtdicke der Striche von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (z.B. ein Äquivalent zu 10 oder 12px), hätten die Zeichen eine insgesamt dickere Linienführung, und vielleicht andere kleine Modifikationen, um sicherzustellen, dass sie bei einer physisch kleineren Größe reproduziert und lesbar wären. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Variationen in der Stärke und Gewichtung der Striche geben, was das Schriftbild designmäßig mehr im Einklang mit der ursprünglichen Absicht zeigt.

Obwohl dies ursprünglich dazu gedacht war, den Tinten- und Papierdruckprozess auszugleichen (sehr dünne Linien bei kleinen Größen druckten oft nicht und gaben den Buchstabenformen ein gebrochenes Aussehen), ist es gut auf digitale Displays übertragbar, wenn es darum geht, die Bildschirmqualität und physische Größenwiedergabe auszugleichen.

Optische Größenwerte sind in der Regel dazu gedacht, automatisch entsprechend `font-size` angewendet zu werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um variable Schriftarten in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen zulässigen Werte `auto` oder `none` — dieses Attribut ermöglicht es daher nur, die optische Größenanpassung ein- oder auszuschalten. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen würde man den `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert abgleichen (was die Art und Weise ist, wie optische Größen im `auto`-Modus angewendet werden sollen). Die Option, einen spezifischen Wert zu liefern, wird bereitgestellt, um, falls es notwendig ist, die Standardeinstellung für Lesbarkeit, Ästhetik oder aus einem anderen Grund zu überschreiben – ein spezifischer Wert angewendet werden kann.

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

Benutzerdefinierte Achsen sind genau das: sie können jede Achse der Designvariation sein, die sich der Schriftgestalter vorstellt. Einige werden möglicherweise ziemlich häufig werden — oder sogar registriert — aber das wird nur die Zeit zeigen.

### Grad

Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftbilddesign hat. Die Praxis, verschiedene Grade eines Schriftbildes zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Verwendung und den Druckvorgang durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftbilddesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass das Ändern des Textgrades das gesamte Layout des Textes oder der umgebenden Elemente nicht ändert. Dies macht Grad zu einer nützlichen Variationsachse, da es variiert oder animiert werden kann, ohne einen Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Gradwerten der Schrift zu spielen.

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

Die Syntax zum Laden von variabler Schriftarten ist sehr ähnlich zu jeder anderen Webschrift, mit einigen bemerkenswerten Unterschieden, die durch Upgrades der traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die jetzt in modernen Browsern verfügbar sind.

Die Grundsyntax ist dieselbe, aber die Schrifttechnologie kann spezifiziert werden, und erlaubte Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Namen der geladenen Schriftdatei benannt zu werden.

#### Beispiel für eine Standard-Upright- (Roman-) Schrift

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie auch `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen hat (angegeben durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursivschriften und keine aufrechten Zeichen enthält

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

In diesem Fall zeigt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift kursivierte Glyphen hat.

#### Beispiel für eine Schrift, die eine Oblique- (Slant-) Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft auf `MyVariableFontName` gesetzt ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft oblique mit einem Winkel zwischen null und einschließlich 12 Grad ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformats implementiert, also testen Sie sorgfältig. Alle Browser, die variable Schriftarten unterstützen, werden sie trotzdem rendern, wenn Sie das Format auf nur das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn das entsprechende Attribut (d.h. `font-weight` oder `font-stretch`) verwendet wird, blockiert Sie jedoch nicht, einen ungültigen Wert über `font-variation-settings` festzulegen. Verwenden Sie dies daher mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriftarten kann mit CSS-Featureabfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, variable Schriftarten in Produktion zu verwenden und das CSS, das die variablen Schriftarten aufruft, innerhalb eines Featureabfrageblocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenfolge festzulegen und zeigt, wie Sie einzelne variable Werte leichter aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die ganze Zeichenfolge neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den benutzerdefinierten Eigenschaftenwert der Gradachse ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung der Redaktion)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schrift über eine Drag-and-Drop-Inspektionsschnittstelle kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Font Spielplatzseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog variabler Schriftarten und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
