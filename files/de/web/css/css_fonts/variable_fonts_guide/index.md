---
title: Leitfaden für variable Schriftarten
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

**Variable Schriftarten** sind eine Weiterentwicklung der OpenType-Schriftarten-Spezifikation, die es ermöglicht, viele verschiedene Variationen eines Zeichensatzes in eine einzige Datei zu integrieren, anstatt eine separate Schriftartdatei für jede Breite, jedes Gewicht oder jeden Stil zu haben. Sie können auf alle Variationen, die in einer bestimmten Schriftartdatei enthalten sind, über CSS und einen einzigen {{cssxref("@font-face")}}-Verweis zugreifen. In diesem Artikel erfahren Sie alles, was Sie wissen müssen, um mit der Verwendung variabler Schriftarten zu beginnen.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie keine variablen Schriftarten in Webseiten oder den Firefox Developer Tools verwenden.

## Variable Schriftarten: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an variablen Schriftarten anders ist, lohnt es sich, zu überprüfen, wie nicht-variable Schriftarten sind und wie sie im Vergleich stehen.

### Standard- (oder statische) Schriftarten

Früher würde ein Zeichensatz als mehrere einzelne Schriftarten produziert werden, und jede Schriftart würde eine spezifische Breite/Gewicht/Stil-Kombination darstellen. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutet, dass Sie mit 20 oder 30 verschiedenen Schriftartdateien enden könnten, um einen vollständigen Zeichensatz darzustellen (bei einem großen Zeichensatz mit unterschiedlichen Breiten könnte es sogar noch mehr sein).

In einem solchen Szenario bräuchten Sie für die typische Verwendung eines Zeichensatzes auf einer Webseite für Fließtext mindestens vier Dateien: normal, kursiv, fett und fett kursiv. Möchten Sie weitere Gewichte hinzufügen, wie ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Hervorhebung, wären das mehrere zusätzliche Dateien. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladendem Datenvolumen (in der Regel um die 20k oder mehr pro Datei).

### Variable Schriftarten

Mit einer variablen Schriftart können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftartdatei, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die 4, die Sie für Fließtext laden würden. Der Vorteil der Wahl der variablen Schriftart besteht darin, dass Sie Zugriff auf das gesamte Spektrum an Gewichten, Breiten und Stilen haben, anstatt nur auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie das Setzen von Überschriften verschiedener Größe in unterschiedlichen Gewichten für eine bessere Lesbarkeit in jeder Größe oder das Verwenden einer etwas schmaleren Breite für datenintensive Anzeigen. Zum Vergleich: In einem typografischen System für ein Magazin ist es typisch, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen im ganzen Werk zu verwenden — was ein viel breiteres Spektrum an Stilen bietet, als derzeit im Web üblich ist (oder tatsächlich nur aus Leistungsgründen praktisch wäre).

#### Ein Hinweis zu Schriftfamilien, Gewichten und Varianten

Sie haben vielleicht bemerkt, dass wir darüber gesprochen haben, eine spezifische Schriftartdatei für jedes Gewicht und jeden Stil (also fett und kursiv sowie fett kursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Zeichensätze sehr spezifische Designs für fettere Gewichte und Kursive haben, die oft völlig unterschiedliche Zeichen enthalten (kleines 'a' und 'g' sind in Kursive oft ziemlich unterschiedlich, zum Beispiel). Um den Zeichensatzentwurf am genauesten widerzuspiegeln und Unterschiede zwischen Browsern und deren eventuellen oder nicht eventuellen Synthese der verschiedenen Stile zu vermeiden, ist es genauer, die spezifischen Schriftartdateien dort zu laden, wo sie benötigt werden, wenn Sie eine nicht-variable Schriftart verwenden.

Sie werden auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt sind: eine für aufrechte und alle ihre Variationen und eine, die die Kursivvariationen enthält. Dies wird manchmal getan, um die Gesamtgröße der Datei zu reduzieren, falls die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verlinken, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Axes der Variation'

Das Herz des neuen Formats der variablen Schriftarten ist das Konzept einer **Achse der Variation**, die den erlaubten Bereich dieses bestimmten Aspekts des Schriftartentwurfs beschreibt. So beschreibt die 'Gewichtsachse', wie hell oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob Kursivbuchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 (aus oder ein) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf aktuell registrierten Achsen sind Gewicht, Breite, Schräglage, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie mit vorhandenen CSS-Attributen zu verknüpfen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Zeichensatzdesigner kann beliebige Achsen definieren und skizzieren, wie er möchte, und muss ihnen nur ein vierstelliges **Tag** geben, um es im Schriftartdateiformat selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Achse der Variation zu spezifizieren, wie in den unten stehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt zeigen wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der entwickelt wurde, um die frühen Implementierungen von variabler Schriftartunterstützung zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht benutzt werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die geeignete Eigenschaft verwendet werden, mit der Low-Level-Syntax von `font-variation-settings`, die nur verwendet wird, um Werte oder Achsen zu setzen, die sonst nicht verfügbar wären.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen zwischen Groß- und Kleinschreibung unterscheiden. Die Namen der registrierten Achsen müssen in Kleinbuchstaben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Note) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle von ihnen neu deklarieren (genauso wie beim Setzen von OpenType-Schriftarteigenschaften mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Das Gewicht (repräsentiert durch das Tag `wght`) definiert die Entwurfsachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langer Zeit gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte im Bereich von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden nach wie vor verwendet, wenn mit nicht-variablen oder variablen Schriftarten gearbeitet wird, aber bei variablen Schriftarten ist nun jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es momentan keine Möglichkeit in der `@font-face`-Deklaration gibt, einen bestimmten Punkt auf der Variationsachse einer variablen Schriftart auf das Schlüsselwort `bold` (oder ein anderes Schlüsselwort) abzubilden. Dies kann in der Regel recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Gewichtswerten zu experimentieren.

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

Die Breite (repräsentiert durch das `wdth`-Tag) definiert die Entwurfsachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft gesetzt, wobei Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig — obwohl es weit wahrscheinlicher ist, dass der Bereich näher bei 100% liegt, wie 75%-125%. Wird ein Zahlenwert außerhalb des im Schriftartdaten kodierten Bereichs angegeben, sollte der Browser die Schriftart am nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Schriftbreitenwerten zu experimentieren.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0,5` "halb kursiv" und `1` "vollständig kursiv" bedeutet. Kursive Designs beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, daher werden beim Übergang von aufrecht zu kursiv oft mehrere Glyphen- (oder Zeichen-) Ersetzungen vorgenommen. Kursiv und Schrägschrift werden oft etwas austauschbar verwendet, sind aber in Wahrheit völlig unterschiedlich. Schrägschrift wird in diesem Kontext mit dem Begriff `slant` definiert (siehe Abschnitt unten), und ein Schriftbild hätte typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg mit der {{cssxref("font-style")}}-Eigenschaft auf Text angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — das verhindern wird, dass Browser versehentlich die Variationsachse und ein synthetisiertes Kursiv anwenden. Dies kann auch genutzt werden, um Pseudo-Fettung zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Schriftkursivwerten zu experimentieren.

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

### Schrägstellung

Die Schrägstellung (repräsentiert durch das `slnt`-Tag), oder wie es oft genannt wird, 'oblique' — unterscheidet sich von echten Kursiven darin, dass es den Winkel der Buchstabenformen ändert, jedoch keine Art von Zeichenersetzung durchführt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es der Schriftart, überall entlang der Schrägungsachse variiert zu werden. Der erlaubte Bereich ist von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schrägstellung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft über die `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Außerdem bedeutet im Fall der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn abweichende Neigung.

Im folgenden Live-Beispiel können Sie die Schrägstellung anpassen.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik im Entwurf und der Erstellung von Metalldrucktypen. Optische Größe bezieht sich auf die Praxis, die gesamte Strichdicke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie ein Äquivalent von 10 oder 12px), würden die Zeichen eine insgesamt dickere Strichstärke haben und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie in kleiner Größe reproduziert und lesbar sind. Umgekehrt, wenn eine weitaus größere Größe verwendet wurde (wie 48 oder 60px), könnte es einen viel größeren Unterschied im Gewicht von dicken und dünnen Strichen geben, was das Design des Schriftbildes mehr in Übereinstimmung mit der ursprünglichen Absicht zeigen würde.

Während dies ursprünglich gemacht wurde, um den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, was den Buchstabenformen ein gebrochenes Aussehen verlieh), übersetzt es sich gut auf digitale Displays, wenn man die Bildschirmqualität und physische Größenwiedergabe kompensiert.

Optische Größenwerte sollen im Allgemeinen automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das entwickelt wurde, um variable Schriftarten in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut ermöglicht es daher nur, die optische Größenanpassung ein- oder auszuschalten. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Typ gerendert wird) mit dem `opsz`-Wert (der beabsichtigten Verwendung der optischen Größenanpassung beim Einsatz von `auto`) abgleichen. Die Möglichkeit, einen spezifischen Wert anzugeben, wird bereitgestellt, damit, sollte es notwendig sein, die Standardeinstellung zu überschreiben — aus Gründen der Lesbarkeit, der Ästhetik oder aus einem anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den optischen Größenwerten zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Entwurfsvariationsachse sein, die sich der Zeichensatzdesigner ausdenkt. Es gibt möglicherweise einige, die recht häufig werden — oder sogar registriert werden — aber das bleibt abzuwarten.

### Grade

Grade könnte eine der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Zeichensatzentwurf hat. Die Praxis, unterschiedliche Grade eines Zeichensatzes zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Verwendungszweck und die Drucktechnik durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Typentwurfes, unterscheidet sich jedoch von dem traditionellen 'Gewicht' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass das Ändern des Grades des Textes nicht die gesamte Layout des Textes oder der umliegenden Elemente verändert. Dies macht Grade zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne einen Textumbruch selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Schriftgradwerten zu experimentieren.

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

### Verwendung einer variablen Schriftart: Änderungen in @font-face

Die Syntax zum Laden von variablen Schriftarten ist sehr ähnlich zu jeder anderen Webschriftart, mit einigen bemerkenswerten Unterschieden, die durch Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die nun in modernen Browsern verfügbar ist.

Die grundlegende Syntax ist dieselbe, aber die Schriftarttechnologie kann spezifiziert werden, und erlaubte Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt benannt zu werden entsprechend der Schriftartdatei, die geladen wird.

#### Beispiel für eine standardmäßige aufrechte (römische) Schriftart

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

In diesem Fall gibt die `font-style: normal`-Deklaration an, dass diese Schriftartdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Als Alternative könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass die Schriftart normale aufrechte Glyphen hat (angegeben durch `0deg`).

#### Beispiel für eine Schriftart, die nur Kursive und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic`-Deklaration an, dass diese Schriftartdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Als Alternative könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schriftart kursive Glyphen hat.

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

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, testen Sie daher sorgfältig. Alle Browser, die variable Schriftarten unterstützen, werden sie immer noch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` hält den Browser davon ab, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), aber blockiert nicht das Setzen eines ungültigen Wertes über `font-variation-settings`, daher verwenden Sie dies mit Sorgfalt.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriftarten kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, variable Schriftarten in der Produktion zu verwenden und das CSS, das die variablen Schriftarten aufruft, innerhalb eines Feature-Abfrageblocks zu platzieren.

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

Die folgenden Beispielseiten zeigen zwei unterschiedliche Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS-Custom-Properties, um Werte für einen `font-variation-settings`-String festzulegen und zeigt, wie Sie einzelne Variable-Werte einfacher aktualisieren können, indem Sie eine einzige Variable überschreiben, anstatt die gesamte Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur die Grade-Achse Benutzerdefiniertes Eigenschaftswert ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen darüber Aufschluss gibt, was Ihre Schriftart kann, über eine Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable-Schriftarten-Spielplatzseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von variablen Schriftarten und wo man sie bekommen kann)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
