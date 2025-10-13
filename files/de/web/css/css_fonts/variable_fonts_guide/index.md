---
title: Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftenspezifikation, die es ermöglicht, viele verschiedene Varianten einer Schriftart in einer einzigen Datei zu speichern, anstatt für jede Breite, Gewichtung oder Stil eine separate Schriftdatei zu haben. Sie können all diese Varianten über CSS und einen einzigen {{cssxref("@font-face")}}-Verweis auf die in einer Schriftdatei enthaltenen Varianten zugreifen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Version von Linux FreeType, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie auf Webseiten oder in den Firefox Developer Tools keine Variable Fonts verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variabelen Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Fonts aussehen und wie sie im Vergleich abschneiden.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriften produziert, wobei jede Schrift eine bestimmte Breite/Gewicht/Stil-Kombination repräsentierte. So hätte man separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutet, dass man am Ende 20 oder 30 verschiedene Schriftdateien hätte, um eine komplette Schriftart darzustellen (es könnten mehrere Male so viele sein für eine große Schriftart, die auch unterschiedliche Breiten hat).

In einem solchen Szenario würden Sie für die typische Verwendung einer Schriftart auf einer Website für den Textkörper mindestens vier Dateien benötigen: regular, italic, bold und bold italic. Wenn Sie mehr Gewichtungen hinzufügen möchten, z. B. eine leichtere für Untertitel oder eine schwerere für zusätzliche Betonung, würde das mehrere weitere Dateien bedeuten. Dadurch ergeben sich mehr HTTP-Anfragen und mehr herunterzuladende Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variablen Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, aber in den meisten Fällen kleiner oder etwa gleich groß wie die vier, die Sie für den Textkörper laden könnten. Der Vorteil an der Wahl der Variablen Font ist, dass Sie Zugriff auf die gesamte Bandbreite an Gewichtungen, Breiten und Stilen haben, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen unterschiedlicher Größen von Überschriften in unterschiedlichen Gewichtungen für bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datendichte Anzeigen. Zum Vergleich: In einem typografischen System für ein Magazin ist es typisch, 10-15 oder mehr unterschiedliche Gewichtungs- und Breitenkombinationen im gesamten Magazin zu verwenden — was zu einem weitaus breiteren Spektrum an Stilen führt als derzeit im Web üblich (oder tatsächlich aus rein Leistungsgründen praktikabel).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir darüber gesprochen haben, eine spezifische Schriftdatei für jede Gewichtung und jeden Stil zu haben (d.h. fett und kursiv und fett kursiv), anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für stärkere Gewichtungen und Kursivschnitte haben, die oft völlig unterschiedliche Zeichen enthalten (zum Beispiel sind der Kleinbuchstabe 'a' und 'g' in Kursiv oft ganz anders). Um das Schriftartendesign am genauesten wiederzugeben und Unterschiede zwischen Browsern und wie sie die unterschiedlichen Stile möglicherweise oder möglicherweise nicht synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftdateien zu laden, wo nötig, wenn man eine nicht-variable Schrift verwendet.

Es kann auch vorkommen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für aufrechte Schrift und all ihre Varianten, und eine, die die kursiven Varianten enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, falls die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit derselben `font-family` und dem passenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen Formats der Variablen Fonts ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftdesigns beschreibt. Die 'Gewichtsachse' beschreibt also, wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursivierte Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während kursiv 0 oder 1 sein könnte (aus oder ein).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind jene, die am häufigsten vorkommen und häufig genug sind, dass es den Autoren der Spezifikation als lohnenswert erschien, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schräge, Kursivschrift und optische Größe. Das W3C hat sich verpflichtet, sie vorhandenen CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartendesigner kann jede Achse definieren und spezifizieren, die ihm einfällt, und ist lediglich verpflichtet, ihr einen vierstelligen **Tag** zu geben, um sie innerhalb des Schriftdateiformats selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse zu spezifizieren, wie in den untenstehenden Code-Beispielen gezeigt.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt werden wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS demonstrieren. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung für Variable Fonts zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten zu nutzen. Allerdings war die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die geeignete Eigenschaft verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur zur Einstellung von Werten oder Achsen verwendet werden sollte, die sonst nicht verfügbar sind.

#### Hinweise

1. Bei Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen case-sensitive sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben und die der benutzerdefinierten in Großbuchstaben geschrieben werden. Zum Beispiel:

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (ähnlich wie wenn Sie OpenType-Schriftmerkmale mit {{cssxref("font-feature-settings")}} setzen). Sie können diese Einschränkung umgehen, indem Sie [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Die Gewichtung (repräsentiert durch das `wght` Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langer Zeit existiert in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}} Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliase für ihre entsprechenden numerischen Werte (in diesem Fall 400 und 700) sind. Diese werden nach wie vor angewendet, wenn man mit nicht-variablen oder variablen Fonts arbeitet, aber bei Variablen Fonts ist jede Zahl von 1 bis 1000 jetzt gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse eines Variablen Fonts dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies kann in der Regel relativ einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-weight` Werten zu spielen.

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

Die Breite (repräsentiert durch das `wdth` Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}} Eigenschaft eingestellt, wobei Werte als Prozentsätze über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig – obwohl es weit wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, z.B. 75%-125%. Wenn ein angegebener Zahlenwert außerhalb des im Font codierten Bereichs liegt, sollte der Browser den Font mit dem nächst erlaubten Wert rendern.

> [!NOTE]
> Das % Zeichen wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-width` Werten zu spielen.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursives Design beinhaltet oft dramatisch unterschiedliche Buchstabenformen verglichen mit aufrechten Formen, sodass bei der Umstellung von aufrecht auf kursiv mehrere Glyphen- (oder Zeichen-) Substitutionen gewöhnlich auftreten. Kursiv und Oblique werden oft etwas austauschbar verwendet, sind aber in Wahrheit ziemlich unterschiedlich. Oblique wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe der untenstehende Abschnitt), und eine Schriftart würde typischerweise das eine oder das andere, aber nicht beides haben.

In CSS werden sowohl kursiv als auch oblique auf Text mit der {{cssxref("font-style")}} Eigenschaft angewandt. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser die Variationsachse und eine synthetisierte Kursivschrift versehentlich anwenden. Dies kann verwendet werden, um auch Faux-Fettung zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Kursiv-Werten zu spielen.

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

Schräge (repräsentiert durch das `slnt` Tag), oder wie sie oft genannt wird, 'oblique', unterscheidet sich von echten Kursivschriften, da sie den Winkel der Buchstabenformen ändert, jedoch keine Art von Zeichenersetzung durchführt. Sie ist ebenfalls variabel, da sie als numerischer Bereich ausgedrückt wird. Dadurch kann die Schrift an beliebiger Stelle entlang der Schrägeachse variiERT werden. Der zulässige Bereich beträgt -90 bis 90 Grad.

Die zwei Eigenschaften, die die Schrägstellung kontrollieren können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind gleichwertig:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style` Eigenschaft über die `font-variation-settings` Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Auch im Fall der `font-variation-settings` Eigenschaft bedeutet ein positiver Winkel eine Gegenuhrzeigerschräge.

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

Dies ist etwas Neues für digitale Schriften und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschriften. Optische Größe bezieht sich auf die Praxis, die Gesamtdicke der Striche von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie das Äquivalent zu 10 oder 12 px), hätten die Zeichen insgesamt einen dickeren Strich, und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie gut wiedergegeben werden und lesbar sind bei einer physisch kleineren Größe. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60 px), könnte es viel mehr Variation in den dicken und dünnen Strichstärken geben, die das Schriftartdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Obwohl dies ursprünglich gemacht wurde, um den Druckprozess mit Tinte und Papier zu kompensieren (sehr dünne Linien bei kleinen Größen druckten oft nicht, was den Buchstabenformen ein zerrissenes Aussehen verlieh), übersetzt sich das gut zu digitalen Anzeigen, wenn es darum geht, die Bildschirmqualität und physische Größenwiedergabe zu kompensieren.

Optische Größenwerte sind im Allgemeinen dafür gedacht, automatisch entsprechend der `font-size` angewendet zu werden, können aber auch mit Hilfe der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das in CSS zur Unterstützung von Variablen Fonts erstellt wurde. Bei Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` – dieses Attribut ermöglicht also nur, die optische Größenanpassung ein- oder auszuschalten. Wenn Sie jedoch `font-variation-settings: 'opsz' <num>` verwenden, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der die Schrift gerendert wird) mit dem `opsz`-Wert abgleichen (was die Art und Weise ist, wie optische Größenanpassung angewendet werden soll, wenn Sie `auto` verwenden). Die Möglichkeit, einen spezifischen Wert anzugeben, ist vorhanden, damit er, falls nötig, zum Überschreiben des Standards verwendet werden kann – aus Lesbarkeits-, ästhetischen oder anderen Gründen – ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Werten der optischen Größe zu spielen.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Achse des Designvariationsprozesses sein, die sich der Schriftartendesigner vorstellt. Es könnte einige geben, die relativ gängig werden — oder sogar registriert — aber nur die Zeit wird es zeigen.

### Grad

Grad kann eine der häufigeren benutzerdefinierten Achsen werden, da sie eine bekannte Geschichte im Schriftartendesign hat. Das Gestalten unterschiedlicher Grade einer Schriftart war oft eine Reaktion auf den beabsichtigten Verwendungszweck und die Drucktechnik. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, daher ändert das Ändern des Textgrades nicht das Gesamtlayout des Textes oder der umgebenden Elemente. Dies macht den Grad zu einer nützlichen Achse der Variation, da sie variiert oder animiert werden kann, ohne ein Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den `font-grade` Werten zu spielen.

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

### Verwendung eines Variablen Fonts: Änderungen bei @font-face

Die Syntax zum Laden von Variablen Fonts ist sehr ähnlich zu jeder anderen Schriftart für das Web, mit einigen bemerkenswerten Unterschieden, die durch Upgrades der traditionellen {{cssxref("@font-face")}}-Syntax jetzt in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist gleich, aber die Schriftarttechnologie kann spezifiziert werden und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt benannt zu werden nach der Schriftdatei, die geladen wird.

#### Beispiel für eine standardmäßige aufrechte (Römische) Schrift

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

In diesem Fall gibt die `font-style: normal` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` eingestellt ist und [`font-style`](/de/docs/Web/CSS/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass die Schrift normale aufrechte Glyphen (angezeigt durch `0deg`) hat.

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

In diesem Fall gibt die `font-style: italic` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` und [`font-style`](/de/docs/Web/CSS/font-style) auf `italic` eingestellt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass die Schrift Kursivglyphen hat.

#### Beispiel für eine Schrift, die eine Schrägeachse (Schrägachse) enthält

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

In diesem Fall gibt der `oblique 0deg 12deg` Wert an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family` Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft schräg mit einem Winkel zwischen null und 12 Grad inklusive ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftformat implementiert, testen Sie daher sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur als Dateiformat setzen, statt Format-Variationen (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, wenn möglich, die richtige Syntax zu verwenden.

> [!NOTE]
> Die Bereitstellung von Wertbereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs darzustellen, wenn Sie das passende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), hindert Sie jedoch nicht daran, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie dies mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, in einen Feature-Abfrageblock zu integrieren.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings` Zeichenkette festzulegen und zeigt, wie Sie einzelne Variablenwerte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die ganze Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt bei `h2`, der nur den Achsenwert des Grad benutzerdefinierten Eigenschaftenwerts ändert. Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editorenentwurf)
- [W3C GitHub issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen zeigt, was Ihre Schriftart kann, über eine Drag-and-Drop-Inspektionsoberfläche)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielwiese für Variable Fonts)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variablen Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
