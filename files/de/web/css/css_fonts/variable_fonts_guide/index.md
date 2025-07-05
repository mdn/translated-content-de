---
title: Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Fontspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftdatei für jede Breite, Gewicht oder Stil zu haben. Sie ermöglichen den Zugriff auf alle Variationen, die in einer gegebenen Schriftartdatei enthalten sind, über CSS und einen einzigen {{cssxref("@font-face")}}-Verweis. Dieser Artikel gibt Ihnen alles, was Sie brauchen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts in Webseiten oder den Firefox Developer Tools nicht verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei Variable Fonts anders ist, lohnt es sich, sich anzusehen, wie nicht-variable Fonts aussehen und wie sie sich vergleichen lassen.

### Standard- (oder statische) Fonts

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Fonts produziert, und jeder Font repräsentierte eine spezifische Kombination aus Breite, Gewicht und Stil. So gab es separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass man mit 20 oder 30 verschiedenen Schriftdateien enden konnte, um eine komplette Schriftart darzustellen (es könnten mehrere Male mehr für eine große Schriftart sein, die verschiedene Breiten hat).

In einem solchen Szenario benötigen Sie mindestens vier Dateien, um eine Schriftart für typische Verwendungen auf einer Website für Fließtext zu nutzen: regular, italic, bold und bold italic. Wenn Sie mehr Gewicht hinzufügen möchten, wie ein leichteres für Überschriften oder ein schwereres für zusätzliche Betonung, bedeutet dies mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladenden Daten (in der Regel etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr so groß wie die 4, die Sie für den Fließtext laden könnten. Der Vorteil der Wahl der Variable Font besteht darin, dass Sie Zugriff auf die gesamte Bandbreite an Gewichten, Breiten und Stilen haben, die verfügbar sind, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen von Überschriften unterschiedlicher Größe in unterschiedlichen Gewichten für bessere Lesbarkeit bei jeder Größe oder das Verwenden einer etwas schmaleren Breite für datenreiche Anzeigen. Zum Vergleich: Es ist typisch in einem typografischen System für ein Magazin, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen im gesamten Publikation zu verwenden — was eine viel breitere Palette an Stilen bietet, als derzeit typischerweise im Web üblich ist (oder allein aus Leistungsgründen praktisch ist).

#### Ein Hinweis zu Schriftfamilien, Gewichten und Varianten

Sie haben vielleicht bemerkt, dass wir darüber gesprochen haben, eine spezifische Schriftdatei für jedes Gewicht und jeden Stil zu haben (d.h. fett und kursiv und fett kursiv), anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftsätze sehr spezifische Designs für fettere Gewichte und Kursivschriften haben, die oft völlig andere Zeichen enthalten (Kleinbuchstaben 'a' und 'g' sind in Kursiv häufig ganz anders, zum Beispiel). Um das Schriftartdesign möglichst genau zu reflektieren und Unterschiede zwischen Browsern zu vermeiden, wie sie die verschiedenen Stile möglicherweise oder möglicherweise nicht synthetisieren, ist es genauer, die spezifischen Schriftdateien zu laden, wo sie benötigt werden, wenn eine nicht-variable Schrift verwendet wird.

Sie werden vielleicht auch feststellen, dass einige Variable Fonts auf zwei Dateien aufgeteilt sind: eine für Stehschriften und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die Gesamtgröße der Datei zu reduzieren, falls die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Der Kern des neuen Formats der Variable Fonts ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 sein könnte (aus oder an).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind jene, die am häufigsten vorkommen und häufig genug, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie vorhandenen CSS-Attributen zuzuordnen, und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartdesigner kann jede beliebige Achse definieren und abgrenzen, die er möchte, und muss ihr nur ein vierstelliges **Tag** geben, um sie innerhalb des Fontdateiformats selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den untenstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und vorhandene CSS-Attribute

In diesem Abschnitt zeigen wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen des Supports für Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Allerdings war es die Absicht des W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte wo immer möglich das entsprechende Attribut verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die anders nicht verfügbar sind.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsenbezeichnungen case-sensitive sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben sein und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (auf dieselbe Weise wie beim Setzen von OpenType-Schriftmerkmalen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch den Tag `wght`) definiert die Designachse dafür, wie dünn oder dick (leicht oder schwer, in typografischen üblichen Begriffen) die Striche der Buchstabenformen sein können. Seit langem besteht in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in Schritten von 100 nimmt und Stichwörter wie `normal` oder `bold`, die Aliasnamen für ihre entsprechenden numerischen Werte (400 bzw. 700 in diesem Fall) sind. Diese werden immer noch angewendet, wenn es um nicht-variable oder variable Fonts geht, aber bei variablen Fonts sind jetzt alle Zahlen von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse eines Variablen Fonts dem Stichwort `bold` (oder jedem anderen Stichwort) zuzuordnen. Dies kann im Allgemeinen ziemlich einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-weight-Werten zu experimentieren.

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

Breite (repräsentiert durch den `wdth`-Tag) definiert die Designachse dafür, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS durch die {{cssxref("font-stretch")}}-Eigenschaft gesetzt, mit Werten, die als Prozentwert über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig—obwohl es weit wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie 75%-125%. Wenn ein Zahlenwert angegeben wird, der außerhalb des im Font kodierten Bereichs liegt, sollte der Browser den Font am nächstzulässigen Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-width-Werten zu experimentieren.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren nicht-kursiven Gegenstücken, sodass im Übergang von aufrecht zu kursiv häufig mehrere Glyphen- (oder Zeichen-) Substitutionen stattfinden. Kursiv und Kursivschrift werden oft ein wenig austauschbar verwendet, sind aber tatsächlich recht unterschiedlich. Kursivschrift wird in diesem Kontext als Neigung (`slant`) definiert (siehe den unteren Abschnitt), und eine Schriftart hätte typischerweise das eine oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch Kursivschrift auf Text angewendet, indem die {{cssxref("font-style")}}-Eigenschaft verwendet wird. Beachten Sie auch die Einführung von `font-synthesis: none;` — das verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivform anwenden. Dies kann verwendet werden, um auch Pseudo-Fettung zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-italics zu experimentieren.

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

Neigung (repräsentiert durch den `slnt`-Tag), oder wie es oft genannt wird, 'oblique' — unterscheidet sich von echten Kursiven darin, dass sie den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersetzung vornimmt. Sie ist auch variabel, da sie als numerischer Bereich ausgedrückt wird. Dies erlaubt es dem Font, irgendwo entlang der Neigungsachse variiert zu werden. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die zwei Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg` Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft genutzt wird. Auch bei der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Neigung.

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

Dies ist etwas Neues für digitale Schriften und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metalltypen. Optische Größenanpassung bezieht sich auf die Praxis, die Gesamtdicke der Striche von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (zum Beispiel ein Äquivalent zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduzierbar und bei einer physisch kleineren Größe lesbar wären. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Variation in dicken und dünnen Strichgewichten geben, die das Schriftartdesign eher im Einklang mit der ursprünglichen Absicht zeigen.

Obwohl dies ursprünglich als Kompensation für den Tinten- und Papierdruckprozess durchgeführt wurde (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, wodurch die Zeichenformen ein gebrochenes Aussehen erhielten), lässt es sich gut auf digitale Anzeigen übertragen, wenn es darum geht, Bildschirmqualität und physische Größenwiedergabe auszugleichen.

Optische Größenwerte sollen im Allgemeinen automatisch entsprechend der `font-size` angewendet werden, können aber auch mithilfe der niedrigeren `font-variation-settings`-Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das zur Unterstützung von Variable Fonts in CSS erstellt wurde. Wenn `font-optical-sizing` verwendet wird, sind die einzigen zulässigen Werte `auto` oder `none` — dieses Attribut erlaubt also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der die Schrift rendert wird) mit dem `opsz`-Wert (was bedeutet, wie die optische Größenanpassung angewendet werden soll, wenn `auto` verwendet wird) abgleichen. Die Möglichkeit, einen spezifischen Wert bereitzustellen, wird angeboten, damit Sie — aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund — falls notwendig den Standardwert überschreiben können.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Werten der optischen Größe zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: sie können jede Achse des Designvariations sein, die der Schriftartdesigner sich ausdenkt. Es können einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird zeigen.

### Grade

Grade könnte zu einer der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftartdesign hat. Die Praxis, unterschiedliche Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik gemacht. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass sich durch Ändern des Textgrades das Gesamtlayout des Textes oder der umgebenden Elemente nicht ändert. Dies macht den Grade zu einer nützlichen Variation, da er variiert oder animiert werden kann, ohne einen Textumbruch des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit font-grade-Werten zu experimentieren.

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

### Verwendung eines Variablen Fonts: Änderungen an @font-face

Die Syntax zum Laden von Variablen Fonts ist der anderer Web Fonts sehr ähnlich, mit einigen bemerkenswerten Unterschieden, die durch Aktualisierungen der traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die jetzt in modernen Browsern verfügbar ist.

Die grundlegende Syntax ist dieselbe, aber die Schrifttechnologie kann angegeben werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt benannt zu werden, wie es die Schriftdatei lädt.

#### Beispiel für eine Standard-Schrift (Romane)

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

In diesem Fall gibt die `font-style: normal`-Deklaration an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass der Font normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schrift, die nur Kursivzeichen und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic`-Deklaration an, dass diese Schriftdatei verwendet werden soll, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Als Alternative könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass der Font Kursivglyphen hat.

#### Beispiel für eine Schrift, die eine Achse für schräg (Neigung) enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft auf `MyVariableFontName` gesetzt ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformate implementiert, testen Sie daher sorgfältig. Alle Browser, die Variablen Fonts unterstützen, werden sie dennoch rendern, wenn Sie das Format nur auf das Dateiformat anstatt auf Format-Variationen setzen (d.h. `woff2` anstatt `woff2-variations`), aber es ist am besten, die korrekte Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), verhindert jedoch nicht, dass Sie einen ungültigen Wert über `font-variation-settings` angeben, verwenden Sie dies also mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variablen Fonts kann mit CSS Feature Queries überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variablen Fonts in der Produktion zu nutzen und das CSS, das die Variablen Fonts aufruft, innerhalb eines Feature-Abfrage-Blocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenfolge zu setzen, und zeigt, wie Sie einfacher einzelne Variablenwerte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenfolge neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur die Grade-Achse der benutzerdefinierten Eigenschaft als Wert verändert. Klicken Sie im Codeblock unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Spezifikation](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung des Herausgebers)
- [W3C GitHub-Issue-Warteschlange](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft OpenType Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variationsachsen-Tag-Register](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schrift über eine Drag-and-Drop-Inspektionsoberfläche tun kann)
- [Axis Praxis](https://www.axis-praxis.org/) (der originale Variablen Fonts Playground)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variablen Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Playground für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
