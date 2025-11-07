---
title: Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriften-Spezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in eine einzige Datei zu integrieren, anstatt für jede Breite, Gewicht oder Stil eine separate Schriftdatei zu haben. Sie ermöglichen den Zugriff auf alle in einer Schriftdatei enthaltenen Variationen über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass dieses auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Version von Linux FreeType, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts weder in Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und worin sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriften aussehen und wie sie im Vergleich dazu stehen.

### Standard- (oder Statische) Schriften

Früher wurde eine Schriftfamilie als mehrere Einzelschriften produziert, wobei jede Schrift eine spezifische Kombination aus Breite/Gewicht/Stil darstellte. So hatte man separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass man mit 20 oder 30 verschiedenen Schriftdateien enden konnte, um eine komplette Schriftfamilie zu repräsentieren (bei einer großen Schriftfamilie, die unterschiedliche Breiten hat, könnten es noch mehr sein).

In einem solchen Szenario bräuchte man zum typischen Einsatz einer Schriftart auf einer Webseite für Fließtext mindestens vier Dateien: regular, italic, bold, und bold italic. Wenn Sie mehr Gewichtungen hinzufügen wollten, wie z.B. ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, bedeutete das mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr zu ladenden Daten (normalerweise um die 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, in den meisten Fällen jedoch kleiner oder ungefähr so groß wie die vier, die Sie für Fließtext laden würden. Der Vorteil der Wahl eines Variable Fonts besteht darin, dass Sie Zugang zum gesamten Spektrum an Gewichtungen, Breiten und Stilen haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen unterschiedlicher Kopfzeilengrößen in verschiedenen Gewichtungen für bessere Lesbarkeit bei jeder Größe oder die Verwendung einer etwas schmaleren Breite für datenintensive Darstellungen. Zum Vergleich: In einem typografischen System für ein Magazin ist es üblich, 10–15 oder mehr verschiedene Kombinationen aus Gewichtung und Breite zu nutzen — was ein wesentlich breiteres Spektrum an Stilen bietet als derzeit im Web üblich (oder auch nur allein aus Leistungsgründen praktisch).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie haben vielleicht bemerkt, dass wir davon gesprochen haben, für jede Gewichtung und jeden Stil (d.h. fett und kursiv und fett kursiv) eine spezifische Schriftdatei zu haben, anstatt sich auf den Browser zu verlassen, um sie zu synthetisieren. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichtungen und Kursivschrift haben, die oft völlig andere Zeichen beinhalten (z.B. sind Kleinbuchstaben 'a' und 'g' in Kursiv oft ziemlich unterschiedlich). Um das Design der Schriftart genau wiederzugeben und Unterschiede zwischen Browsern zu vermeiden, wie sie die verschiedenen Stile möglicherweise (nicht) synthetisieren, ist es genauer, die spezifischen Schriftdateien dort zu laden, wo sie benötigt werden, wenn man eine nicht-variable Schrift verwendet.

Sie werden vielleicht auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für aufrechte Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, wenn die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Variable Fonts-Formats ist das Konzept einer **Variationsachse**, die den erlaubten Bereich dieses speziellen Aspekts des Schriftartdesigns beschreibt. Beispielsweise beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Schriftzeichen sein können; die 'Breitenachse', wie schmal oder wie breit sie sein können; die 'Kursive Achse', ob kursive Schriftzeichen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv möglicherweise 0 oder 1 ist (aus oder ein).

Wie in den Spezifikationen definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten auftreten und so häufig, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schräglage, Kursiv und optische Größe. Die W3C hat sich verpflichtet, sie existierenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartendesigner kann jede Achse definieren und eingrenzen, die er möchte, und muss ihr lediglich ein vierstelliges **Tag** geben, um sie innerhalb des Schriftdateiformats zu identifizieren. Diese vierstelligen Tags können in CSS verwendet werden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den untenstehenden Beispielcodes gezeigt wird.

### Registrierte Achsen und existierende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um die frühen Implementierungen der Unterstützung für Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings war die Absicht des W3C, diese Syntax nicht zu verwenden, wenn andere Attribute verfügbar sind. Daher sollte, wann immer möglich, die passende Eigenschaft verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen einzustellen, die ansonsten nicht verfügbar sind.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen case-sensitive sind. Die registrierten Achsennamen müssen in Kleinbuchstaben und benutzerdefinierte Achsen in Großbuchstaben sein. Zum Beispiel:

   `wght` (weight) ist eine registrierte Achse, und `GRAD` (grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (ähnlich wie bei der Einstellung von OpenType-Schriftmerkmalen mit {{cssxref("font-feature-settings")}}). Sie können dieses Problem umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch das `wght` Tag) definiert die Design-Achse, wie dünn oder dick (leicht oder schwer im typographischen Sinne) die Striche der Schriftzeichen sein können. In CSS gibt es schon lange die Möglichkeit, dies über die {{cssxref("font-weight")}} Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` akzeptiert, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese gelten immer noch, wenn man mit nicht-variablen oder variablen Schriften arbeitet, aber bei variablen sind jetzt alle Zahlen von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse eines Variable Fonts dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies lässt sich in der Regel recht einfach lösen, erfordert aber einen zusätzlichen Schritt in der Erstellung Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-weight`-Werten zu experimentieren.

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

Breite (repräsentiert durch das `wdth` Tag) definiert die Design-Achse, wie schmal oder breit (kondensiert oder erweitert, im typographischen Sinne) die Schriftzeichen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}} Eigenschaft gesetzt, mit Werten, die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig – obwohl es weitaus wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie etwa 75%-125%. Wenn ein numerischer Wert außerhalb des im Schriftartencodeierten Bereichs angegeben wird, sollte der Browser die Schriftart beim nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird bei der Verwendung von `font-variation-settings` nicht verwendet.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-width`-Werten zu experimentieren.

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

Die Kursiv- (`ital`) Achse kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns beinhalten oft dramatisch andere Buchstabenformen als ihre aufrechten Gegenstücke, so dass beim Übergang von aufrecht zu kursiv normalerweise mehrere Glyphe (oder Zeichen) Substitutionen auftreten. Kursiv und kursiv sind oft etwas austauschbar verwendet, sind aber in Wahrheit ziemlich unterschiedlich. Kursiv wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe untenstehende Sektion), und eine Schriftart würde typischerweise eines oder das andere haben, aber nicht beide.

In CSS werden sowohl kursiv als auch kursiv auf Text mit der {{cssxref("font-style")}} Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — dies verhindert, dass Browser aus Versehen die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann auch verwendet werden, um die falsche Fette zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-italics`-Werten zu experimentieren.

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

### Schräglage

Schräglage (repräsentiert durch das `slnt` Tag), oder wie es oft genannt wird, 'kursiv' — ist anders als echte Kursive darin, dass es den Winkel der Schriftzeichen verändert, ohne eine Art von Zeichenaustausch durchzuführen. Es ist auch veränderlich, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schrift entlang der Schräglageachse zu variieren. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die beiden Eigenschaften, die die Schräglage steuern können, sind [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/Reference/Properties/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die Eigenschaft `font-style` über die Eigenschaft `font-variation-settings`. Das `deg` Schlüsselwort wird bei der Verwendung der Eigenschaft `font-variation-settings` nicht verwendet. Darüber hinaus bedeutet ein positiver Winkel bei der Verwendung der Eigenschaft `font-variation-settings` eine gegen den Uhrzeigersinn gerichtete Schräglage.

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

Dies ist etwas Neues für digitale Schriften und CSS, aber es ist eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschrift. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtdicke der Schriftzeichen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (z.B. ein Äquivalent zu 10 oder 12px), hätten die Zeichen eine insgesamt dickere Linie und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduziert und in einer physisch kleineren Größe lesbar wären. Wenn hingegen eine viel größere Größe verwendet würde (z.B. 48 oder 60px), könnte es viel größere Variationen in den dicken und dünnen Liniengewichten geben, die das Schriftdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich gemacht wurde, um den Druckprozess mit Tinte und Papier zu kompensieren (sehr dünne Linien in kleinen Größen wurden oft nicht gedruckt, was den Schriftzeichen ein gebrochenes Aussehen gab), lässt es sich gut auf digitale Anzeigen übertragen, wenn es darum geht, die Bildschirmqualität und die physische Größenwiedergabe zu kompensieren.

Optische Größeneinstellungen sollen in der Regel automatisch entsprechend `font-size` angewendet werden, können aber auch mithilfe der niedrigen Ebene von `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das zur Unterstützung von Variable Fonts in CSS erstellt wurde. Bei der Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` erlaubt — so dass dieses Attribut nur das Ein- oder Ausschalten der optischen Größenanpassung erlaubt. Bei der Verwendung von `font-variation-settings: 'opsz' <num>` können Sie jedoch einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert abstimmen (was die Art und Weise ist, wie die optische Größenanpassung beim automatischen Gebrauch angewendet werden soll). Die Möglichkeit, einen spezifischen Wert anzugeben, wird angeboten, damit, falls es notwendig ist, den Standard — aus Gründen der Lesbarkeit, Ästhetik oder anderen — zu überschreiben, ein bestimmter Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `optical size`-Werten zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Design-Variationsachse sein, die sich der Schriftdesign-Entwickler vorstellt. Es kann einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grad

Der Grad könnte zu einer der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftartendesign hat. Die Praxis, verschiedene Gradzahlen einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik getan. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass sich das Ändern des Textgrades nicht auf das Gesamtlayout des Textes oder der ihn umgebenden Elemente auswirkt. Dies macht den Grad zu einer nützlichen Achse der Variation, da er variiert oder animiert werden kann, ohne dass ein Reflow des Textes selbst verursacht wird.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-grade`-Werten zu experimentieren.

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

### Verwendung eines Variable Fonts: Änderungen an @font-face

Die Syntax zum Laden von Variable Fonts ist im Wesentlichen dieselbe wie bei jeder anderen Webschrift, mit einigen bedeutenden Unterschieden, die durch Upgrades an der traditionellen {{cssxref("@font-face")}} Syntax jetzt in modernen Browsern verfügbar sind, bereitgestellt werden.

Die Grundsyntax bleibt gleich, aber die Schrifttechnologie kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach der geladenen Schriftdatei benannt zu werden.

#### Beispiel für eine Standard-Schrift (Römisch)

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

In diesem Fall deutet die Deklaration `font-style: normal` darauf hin, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `normal` gesetzt ist. Als Alternative könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen hat (angezeigt durch `0deg`).

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift kursiv Zeichen hat.

#### Beispiel für eine Schrift, die eine Schräglage (slant) Achse enthält

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

In diesem Fall deutet der Wert `oblique 0deg 12deg` darauf hin, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family` Eigenschaft auf `MyVariableFontName` gesetzt ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft auf oblique mit einem Winkel zwischen null und 12 Grad inklusive gesetzt ist.

> [!NOTE]
> Nicht alle Browser haben die volle Syntax für Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, rendern sie dennoch, wenn Sie das Format nur auf das Dateiformat setzen, anstelle von format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs darzustellen, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht davon abhalten, einen ungültigen Wert über `font-variation-settings` zu liefern. Daher mit Vorsicht verwenden.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS Feature Queries überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature Query-Blocks zu plazieren.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Wege zur Strukturierung Ihres CSS. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings` Zeichenfolge festzulegen und zeigt, wie Sie einfacher einzelne Variablenwerte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die ganze Zeichenfolge neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Achse `grade` der benutzerdefinierten Eigenschaft ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editor's Draft)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen zeigt, was Ihre Schrift über eine Drag-and-Drop-Inspektionsoberfläche tun kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Spielwiese)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man diese bekommt)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einzigartigen Ansätzen für die Benutzeroberfläche)
