---
title: Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**Variable Fonts** sind eine Evolution der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Schriftartendatei zu haben. Sie erlauben es Ihnen, alle im Schriftartendatei enthaltenen Variationen über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz zu nutzen. Dieser Artikel gibt Ihnen alles, was Sie benötigen, um mit der Nutzung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux FreeType-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei Variable Fonts anders ist, lohnt es sich, zu überprüfen, wie nicht-variabel Schriftarten aussehen und wie sie sich vergleichen lassen.

### Standard- (oder statische) Schriftarten

Früher wurde eine Schriftart als mehrere einzelne Schriftarten produziert, und jede Schriftart repräsentierte eine spezifische Breite/Gewicht/Stilkombination. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' – was bedeutet, dass Sie am Ende 20 oder 30 verschiedene Schriftartendateien benötigen könnten, um eine vollständige Schriftart darzustellen (es könnte bei einer großen Schriftart mit unterschiedlichen Breiten auch um mehrere Male mehr gehen).

In einem solchen Szenario benötigten Sie mindestens vier Dateien, um eine Schriftart für typischen Einsatz auf einer Seite für Fließtext zu verwenden: regular, italic, bold und bold italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, bedeutete das mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladenden Daten (normalerweise um die 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzelnen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die vier, die Sie möglicherweise für Fließtext laden. Der Vorteil bei der Wahl des Variable Fonts besteht darin, dass Sie Zugang zur gesamten Bandbreite von Gewichten, Breiten und Stilen haben, anstatt auf nur wenige beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie das Setzen unterschiedlicher Größen mit unterschiedlichen Gewichten für bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datenintensive Displays. Im Vergleich dazu ist es üblich, in einem typografischen System für ein Magazin 10–15 oder mehr unterschiedliche Gewicht- und Breitenkombinationen in der gesamten Publikation zu verwenden – was ein viel breiteres Spektrum an Stilen bietet, als derzeit im Web üblich ist (oder tatsächlich allein aus Leistungsgründen praktisch).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir darüber gesprochen haben, für jedes Gewicht und jeden Stil (d.h. fett und kursiv und fett kursiv) eine spezifische Schriftartendatei zu haben, anstatt darauf zu vertrauen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschrift haben, die oft völlig unterschiedliche Zeichen enthalten (der Kleinbuchstabe „a“ und „g“ sind beispielsweise oft ganz anders in Kursivschrift). Um das Schriftartendesign genau wiederzugeben und Unterschiede zwischen Browsern und deren möglicher oder nicht möglicher Sinthetisierung der verschiedenen Stile zu vermeiden, ist es genauer, die spezifischen Schriftartendateien zu laden, wo nötig, wenn Sie eine nicht-variable Schriftart verwenden.

Es kann auch vorkommen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für die aufrechten und ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal gemacht, um die Gesamtgröße der Datei zu reduzieren, falls die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verlinken, sodass Sie sie mit demselben `font-family` und einem passenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Variable Font-Formats ist das Konzept einer **Achse der Variation**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. Die 'Gewichtsachse' beschreibt also, wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursiv Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 sein könnte (aus oder an).

In der Spezifikation sind zwei Arten von Achsen definiert: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für lohnenswert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schrägstellung, Kursiv und optische Größe. Das W3C hat unternommen, sie bestehenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartendesigner kann jede beliebige Achse definieren und definieren, die er möchte, und muss ihr lediglich ein vierstelliges **Tag** zuweisen, um sie im Schriftartendateiformat selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie in den untenstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt werden wir die fünf registrierten Achsen mit Beispielen und der entsprechenden CSS demonstrieren. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Variable Font-Unterstützung zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen weiter als die fünf registrierten zu nutzen. Jedoch war die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die entsprechende Eigenschaft verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die sonst nicht verfügbar sind.

#### Anmerkungen

1. Wenn `font-variation-settings` verwendet wird, ist es wichtig zu beachten, dass Achsennamen groß- und kleinschreibungssensitiv sind. Die registrierten Achsennamen müssen in Kleinbuchstaben vorliegen, und benutzerdefinierte Achsen müssen in Großbuchstaben vorliegen. Zum Beispiel:

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (auf die gleiche Weise, wie wenn Sie OpenType-Schriftartenmerkmale mit {{cssxref("font-feature-settings")}} setzen). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, im typischen typografischen Sinne) die Striche der Buchstabenformen sein können. Seit langem existiert im CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die Werte von 100 bis 900 in 100er-Schritten sowie Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliase für ihre entsprechenden Zahlenwerte sind (400 bzw. 700 in diesem Fall). Diese werden weiterhin angewendet, wenn nicht-variable oder variable Schriftarten verwendet werden, aber mit variablen Schriftarten ist jetzt jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse eines variablen Schriftart zu einem Schlüsselwort wie `bold` (oder einem anderen Schlüsselwort) zu 'mappen'. Dies kann normalerweise ziemlich einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgewicht-Werten zu experimentieren.

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

Breite (repräsentiert durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, im typografischen Sinne) die Buchstabenformen sein können. Dies wird typischerweise im CSS mit der Eigenschaft {{cssxref("font-stretch")}} gesetzt, wobei die Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig – obwohl es viel wahrscheinlicher ist, dass der Bereich näher am 100%-Mark liegt, wie etwa 75%-125%. Wenn ein Zahlenwert geliefert wird, der außerhalb des im Schriftart kodierten Bereichs liegt, sollte der Browser die Schriftart am nächsten erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` verwendet wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftbreite-Werten zu experimentieren.

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

Die Kursiv-Achse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halbwegs kursiv" und `1` "vollständig kursiv" spezifiziert. Kursivdesigns beinhalten oft drastisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Entsprechungen, sodass beim Übergang von aufrecht zu kursiv mehrere Glyphaustausch (oder Zeichenersetzungen) normalerweise auftreten. Kursiv und oblique werden oft weitgehend austauschbar verwendet, sind jedoch in Wahrheit recht unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe untenstehender Abschnitt), und eine Schriftart hätte in der Regel eines von beiden, aber nicht beide.

In CSS werden sowohl kursiv als auch oblique auf Text mittels der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und einen synthetisierten Kursiv anwenden. Dies kann auch verwendet werden, um Faux-Bolding zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftkursiv-Werten zu experimentieren.

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

Schrägstellung (repräsentiert durch das `slnt`-Tag), oder wie es oft genannt wird, 'Oblique' — unterscheidet sich von echten Kursivschrift darin, dass sie den Winkel der Buchstabenformen ändert aber keine Zeichenaustausch vornimmt. Sie ist auch variabel, da sie als Zahlenbereich ausgedrückt wird. Dadurch kann die Schriftart überall entlang der Schrägachse variiert werden. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die zwei Eigenschaften, die die Schrägstellung kontrollieren können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Im Falle der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schrägstellung.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber ein jahrhundertealtes Verfahren beim Entwerfen und Erstellen von Metallschrift. Optische Größenanpassung bezieht sich auf die Praxis, die gesamte Strichstärke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie ein Äquivalent zu 10 oder 12px), hätten die Zeichen insgesamt dickere Striche und möglicherweise andere kleine Anpassungen, um sicherzustellen, dass sie bei einer physisch kleineren Größe reproduzierbar und lesbar wären. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte eine viel größere Variation in den dicken und dünnen Strichen auftreten, die das Schriftartendesign besser entsprechend dem ursprünglichen Entwurf zeigen.

Während dies ursprünglich gemacht wurde, um den Druckprozess von Tinte und Papier auszugleichen (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, was den Buchstabenformen ein gebrochenes Aussehen gab), überträgt sich gut auf digitale Displays, wenn die Bildschirmqualität und die physische Größendarstellung ausgeglichen werden sollen.

Optische Größenwerte sind in der Regel so konzipiert, dass sie automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das erstellt wurde, um variable Schriften in CSS zu unterstützen. Wenn `font-optical-sizing` verwendet wird, sind die einzigen erlaubten Werte `auto` oder `none` — sodass dieses Attribut nur das Ein- oder Ausschalten der optischen Größenanpassung erlaubt. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert abgleichen (dies ist, wie die optische Größenanpassung anzuwenden ist, wenn `auto` verwendet wird). Die Möglichkeit, einen spezifischen Wert anzugeben, ist vorgesehen, damit Sie, falls nötig, aus irgendeinem Grund die Standards übersteuern — aus Lesbarkeitsgründen, ästhetisch oder aus einem anderen Grund — einen spezifischen Wert anwenden können.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede beliebige Design-Variationsachse sein, die sich der Schriftartendesigner vorstellen. Es mag einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grade

Grad könnte eine der häufigeren benutzerdefinierten Achsen sein, da es eine bekannte Geschichte im Schriftartdesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft in Reaktion auf die beabsichtigte Nutzung und Drucktechnik durchgeführt. Der Begriff "Grade" bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen "Gewicht", da der physische Platz, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades das gesamte Layout des Textes oder der umgebenden Elemente nicht ändert. Dies macht den Grad zu einer nützlichen Variationsachse, da er variiert oder animiert werden kann, ohne einen Neufluss des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgrad-Werten zu experimentieren.

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

### Eine Variable Font verwenden: @font-face Änderungen

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich wie bei jedem anderen Webfont, mit einigen bemerkenswerten Unterschieden, die nun durch Upgrades für die traditionelle {{cssxref("@font-face")}}-Syntax in modernen Browsern verfügbar sind.

Die Grundsyntax ist die gleiche, aber die Schriftarttechnologie kann angegeben werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Schriftartendatei benannt zu werden.

#### Beispiel für eine standard aufrechte (römische) Schriftart

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

In diesem Fall gibt die `font-style: normal` Deklaration an, dass diese Schriftartdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` und [font-style](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass die Schriftart normale aufrechte Glyphen hat (angegeben durch `0deg`).

#### Beispiel für eine Schriftart, die nur Kursiv und keine aufrechten Zeichen enthält

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

In diesem Fall gibt die `font-style: italic` Deklaration an, dass diese Schriftartdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` und [font-style](/de/docs/Web/CSS/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass die Schriftart kursiv Glyphen hat.

#### Beispiel für eine Schriftart, die eine schräg (Slant)-Achse enthält

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

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftartdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad inklusiv ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, rendern sie immer noch, wenn Sie das Format einfach als Dateiformat setzen, anstatt Format-Varianten (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Die Angabe von Wertebereichen für `font-weight`, `font-stretch` und `font-style` wird den Browser davon abhalten, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), aber blockiert Sie nicht, einen ungültigen Wert über `font-variation-settings` bereitzustellen, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Query-Blocks zu scopen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenfolge festzulegen und zeigt, wie Sie einzelne Variablenwerte einfacher aktualisieren können, indem Sie eine einzelne Variable übersteuern, anstatt die gesamte Zeichenfolge neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Gradeachsen-Custom-Property-Wert ändert. Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel in der MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editorentwurf)
- [W3C GitHub Ausgabe-Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variationsachse Tag-Registrierung](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schriftart kann, über eine Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts-Spielplatzseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für Variable Fonts mit einigen sehr einzigartigen Ansätzen für Benutzeroberflächen)
