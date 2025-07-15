---
title: Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen eines Schriftbildes in eine einzelne Datei einzubinden, anstatt für jede Breite, Gewicht oder Stil eine separate Schriftartdatei zu haben. Sie ermöglichen Ihnen den Zugriff auf alle Variationen, die in einer bestimmten Schriftartdatei enthalten sind, über CSS und einen einzelnen {{cssxref("@font-face")}}-Verweis. Dieser Artikel liefert Ihnen alles Wissenswerte, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Version von Linux FreeType, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts in Webseiten oder den Firefox Developer Tools nicht verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, zu überprüfen, wie nicht-variable Schriftarten sind und wie sie im Vergleich aussehen.

### Normale (oder statische) Schriftarten

In der Vergangenheit wurde ein Schriftbild als mehrere einzelne Schriftarten produziert, wobei jede Schriftart eine spezielle Breite/Gewicht/Stil-Kombination darstellte. So hatten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — wodurch Sie 20 oder 30 verschiedene Schriftartdateien benötigen konnten, um ein komplettes Schriftbild darzustellen (bei großen Schriftbildern mit verschiedenen Breiten konnte es mehrere Male mehr sein).

In einem solchen Szenario benötigen Sie, um ein Schriftbild für den typischen Einsatz auf einer Website für Fließtext zu verwenden, mindestens vier Dateien: normal, kursiv, fett und fett kursiv. Wenn Sie mehr Gewichte, wie ein leichteres für Untertitel oder ein schwereres für zusätzliche Hervorhebung hinzufügen möchten, bedeutet das mehrere weitere Dateien. Das resultiert in mehr HTTP-Anfragen und mehr herunterzuladende Daten (in der Regel rund 20k oder mehr pro Datei).

### Variable Fonts

Mit einer Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder etwa gleich groß wie die 4 Dateien, die man für Fließtext laden könnte. Der Vorteil bei der Wahl der Variable Font ist, dass Sie Zugriff auf die gesamte Bandbreite von Gewichten, Breiten und Stilen haben, anstatt nur auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht übliche typografische Techniken, wie das Festlegen unterschiedlicher Größenüberschriften in unterschiedlichen Gewichten für bessere Lesbarkeit in jeder Größe oder die Verwendung einer leicht schmaleren Breite für datenintensive Anzeigen. Zum Vergleich: In einem typografischen System eines Magazins ist es üblich, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen in der gesamten Publikation zu verwenden — was eine viel breitere Stilpalette bietet als derzeit im Web üblich (oder allein aus Leistungsgründen praktikabel).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht haben Sie bemerkt, dass wir darüber gesprochen haben, für jedes Gewicht und jeden Stil eine spezifische Schriftartdatei zu haben (d.h. fett und kursiv und fett kursiv), anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftbilder sehr spezifische Designs für fettere Gewichte und Kursive haben, die oft völlig andere Zeichen enthalten (Kleinbuchstaben 'a' und 'g's sind beispielsweise oft in Kursive ganz anders). Um das Design der Schriftart am genauesten widerzuspiegeln und Unterschiede zwischen Browsern und ihrer Fähigkeit oder Unfähigkeit, die verschiedenen Stile zu synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftartdateien dort zu laden, wo sie bei der Verwendung einer nicht-variablen Schriftart benötigt werden.

Sie könnten auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für die aufrechten Variationen und eine für die kursive Variationen. Dies wird manchmal durchgeführt, um die Gesamtdateigröße in Fällen zu reduzieren, in denen die Kursive nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verlinken, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Variable-Fonts-Formats ist das Konzept einer **Variationsachse**, welche den zulässigen Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. Die 'Gewichtsachse' beschreibt also, wie leicht oder schwer die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursiveachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Das Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 (aus oder an) sein könnte.

In der Spezifikation bezeichnet, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und so häufig sind, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schräge, kursiv und optische Größe. Die W3C hat sich verpflichtet, sie bestehenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, wie Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartendesigner kann jede beliebige Achse definieren und festlegen, er muss sie nur mit einem vierbuchstabigen **Tag** identifizieren, um sie im Schriftartendateiformat selbst festzulegen. Diese vierbuchstabigen Tags können in CSS verwendet werden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den unten gezeigten Code-Beispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um die frühen Implementierungen von Variable-Fonts-Unterstützung zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings war es die Absicht der W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die geeignete Eigenschaft verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen festzulegen, die andernfalls nicht verfügbar sind.

#### Hinweise

1. Bei der Nutzung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen groß- und kleinschreibungssensitiv sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben vorliegen und benutzerdefinierte Achsen in Großbuchstaben. Zum Beispiel:

`wght` (Weight) ist eine registrierte Achse, und `GRAD` (Grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (ähnlich wie bei der Einstellung von OpenType-Schriftfunktionen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Schon lange gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte im Bereich von 100 bis 900 in Schritten von 100 akzeptiert, sowie Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte sind (400 und 700 in diesem Fall). Diese werden weiterhin angewendet, wenn es um nicht-variable oder variable Schriftarten geht, aber bei variablen ist nun jede Zahl von 1 bis 1000 gültig.

Es sei darauf hingewiesen, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, um einen bestimmten Punkt auf der Variationsachse einer Variablen Schriftart dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zu 'zuordnen'. Dies kann generell recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Gewichtswerten zu spielen.

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

Breite (dargestellt durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird in CSS typischerweise mit der {{cssxref("font-stretch")}}-Eigenschaft festgelegt, wobei die Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden. Jeder Wert größer als 0 ist technisch gültig — allerdings ist es weit wahrscheinlicher, dass der Bereich näher an der 100%-Marke liegt, wie 75%–125%. Wenn ein bereitgestellter Zahlenwert außerhalb des im Font kodierten Bereichs liegt, sollte der Browser den Font mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn Sie `font-variation-settings` nutzen.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Breitwerten zu spielen.

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

Die Kursive (`ital`) Achse kann im Bereich `[0-1]` festgelegt werden, wobei `0` "nicht kursiv", `0.5` "halbwegs kursiv" und `1` "vollständig kursiv" festlegt. Kursive Designs umfassen oft dramatisch andere Buchstabenformen als ihre aufrechten Gegenstücke, sodass bei der Umstellung von aufrecht auf kursiv oft mehrere Glyphen- (oder Zeichen-)Substitutionen auftreten. Kursiv und schräg werden oft etwas austauschbar verwendet, sind jedoch in Wahrheit ganz anders. Schräg (oblique) wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe untenstehenden Abschnitt), und eine Schriftart würde normalerweise eines von beiden haben, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg mit der {{cssxref("font-style")}}-Eigenschaft auf Text angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursive anwenden. Dies kann auch verwendet werden, um falsches Fetten zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Kursivierungen zu spielen.

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

Schrägstellung (repräsentiert durch das `slnt`-Tag), oder wie es oft genannt wird, 'schräg' — unterscheidet sich von echten Kursiven dadurch, dass es den Winkel der Buchstabenformen ändert, aber keine Art von Zeichensubstitution vornimmt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dadurch kann die Schrift überall entlang der Achse der Schrägstellung variiert werden. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schrägstellung kontrollieren können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn Sie die `font-variation-settings`-Eigenschaft verwenden. Außerdem bedeutet in dem Fall der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn verlaufende Schrägstellung.

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

Dies ist neu bei digitalen Schriftarten und CSS, aber es ist eine jahrhundertealte Technik beim Entwerfen und Erstellen von Bleisatz. Optische Größenanpassung bezieht sich darauf, die Dicke der Striche der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie eine Entsprechung zu 10 oder 12px), hatten die Zeichen einen insgesamt dickeren Strich und vielleicht andere kleine Anpassungen, um sicherzustellen, dass sie bei einer physisch kleineren Größe reproduziert und lesbar sind. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Variationen in der Strichdicke geben, die das Design des Schriftbildes mehr im Einklang mit der ursprünglichen Absicht zeigen.

Obwohl dies ursprünglich getan wurde, um den Druckvorgang mit Tinte und Papier zu kompensieren (sehr dünne Linien bei kleinen Größen druckten oft nicht und gaben den Buchstabenformen ein gebrochenes Aussehen), übersetzt es sich gut zu digitalen Bildschirmen, wenn man die Bildschirmqualität und die physische Größenanzeige kompensiert.

Optische Größeneigenschaften sind im Allgemeinen so ausgelegt, dass sie automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax von `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das eingeführt wurde, um Variable Fonts im CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` erlaubt — somit ermöglicht dieses Attribut nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, kann ein numerischer Wert angegeben werden. In den meisten Fällen würden Sie den `font-size` (die physische Größe, in der der Typ gerendert wird) mit dem `opsz`-Wert abgleichen wollen (was die Art ist, wie optische Größenanpassung bei Verwendung von `auto` angewendet werden soll). Die Option, einen bestimmten Wert bereitzustellen, wird zur Verfügung gestellt, damit, falls es nötig ist, den Standard — aus Gründen der Lesbarkeit, Ästhetik oder einem anderen Grund — zu überschreiben, ein spezifischer Wert angewendet werden kann.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Designachse sein, die sich der Schriftentwerfer ausdenkt. Es könnte einige geben, die ziemlich gebräuchlich werden - oder gar registriert werden - aber nur die Zeit wird es zeigen.

### Grad

Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftbilddesign hat. Das Entwerfen unterschiedlicher Grade eines Schriftbildes wurde oft als Reaktion auf die beabsichtigte Verwendung und Drucktechnik vorgenommen. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftbildesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades das Gesamt-Layout des Textes oder der umliegenden Elemente nicht verändert. Dies macht den Grad zu einer nützlichen Variationsachse, da er variiert oder animiert werden kann, ohne dass eine Umverteilung des Textes selbst verursacht wird.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Schriftgradwerten zu spielen.

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

### Verwendung einer Variable Font: Änderungen von @font-face

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich wie bei jeder anderen Webschriftart, mit einigen bemerkenswerten Unterschieden, die durch Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax möglich sind, die jetzt in modernen Browsern verfügbar ist.

Die grundlegende Syntax ist die gleiche, aber die Schrifttechnologie kann spezifiziert werden und erlaubte Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Namen gemäß der geladenen Schriftartdatei.

#### Beispiel für eine Standardschriftart (römisch)

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

In diesem Fall gibt die Deklaration `font-style: normal` an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt wird und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schriftart normale aufrechte Zeichen hat (angegeben mit `0deg`).

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

In diesem Fall gibt die Deklaration `font-style: italic` an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt wird und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schriftart kursive Zeichen hat.

#### Beispiel für eine Schriftart, die eine schräge (schrägstehende) Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie dennoch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt format-Variationen (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Bereitstellen von Wertebereichen für `font-weight`, `font-stretch` und `font-style` wird den Browser davon abhalten, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht davon abhalten, einen ungültigen Wert über `font-variation-settings` bereitzustellen, also verwenden Sie diese mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variable Fonts kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variable Fonts in der Produktion einzusetzen und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Abfrageblocks einzurahmen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die standardmäßigen Attribute, wo immer möglich. Das zweite Beispiel verwendet CSS-Custom-Properties, um Werte für eine `font-variation-settings` Zeichenkette festzulegen und zeigt, wie Sie einzelne Variable-Werte leichter aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Grade-Achse Custom Property ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Webseite, die zeigt, was Ihre Schriftart über eine Drag-and-Drop-Inspektionsschnittstelle kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche variable Fonts-Spielplatz-Webseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
