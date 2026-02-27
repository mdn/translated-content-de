---
title: Variable Fonts
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele unterschiedliche Variationen einer Schriftart in einer einzigen Datei unterzubringen, anstatt für jede Breite, Dicke oder Stil eine separate Schriftartendatei zu haben. Sie ermöglichen den Zugriff auf alle Variationen in einer bestimmten Schriftartendatei über CSS und eine einzige {{cssxref("@font-face")}}-Referenz. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu nutzen, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste FreeType-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie keine Variable Fonts auf Webseiten oder in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, die Eigenschaften von Nicht-Variablen zu betrachten und wie sie im Vergleich dastehen.

### Standard (oder Statische) Schriften

In der Vergangenheit wurde eine Schriftart in mehrere einzelne Schriften unterteilt, wobei jede Schrift eine spezifische Breite/Dicke/Stil-Kombination darstellte. So gab es separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass man am Ende 20 oder 30 verschiedene Schriftdateien benötigte, um eine vollständige Schriftart darzustellen (es konnten mehrere Dutzend bei einer großen Schriftart mit verschiedenen Breiten sein).

In einem solchen Szenario benötigte man mindestens vier Dateien für eine typische Verwendung auf einer Website für Fließtext: normal, kursiv, fett und fett kursiv. Wollte man weitere Dicken hinzufügen, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, bedeutete das mehrere weitere Dateien. Dies führte zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (gewöhnlich um die 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftartendatei, aber in den meisten Fällen kleiner oder etwa gleich groß wie die vier, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl einer Variable Font ist, dass Sie Zugriff auf das gesamte Spektrum an Dicken, Breiten und Stilen haben, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken, wie beispielsweise unterschiedliche Größen von Überschriften in verschiedenen Dicken zu setzen, um die Lesbarkeit bei jeder Größe zu verbessern, oder eine etwas schmalere Breite für datenintensive Anzeigen zu verwenden. Zum Vergleich ist es in einem typografischen System für ein Magazin üblich, 10–15 oder mehr verschiedene Dicken- und Breitenkombinationen im gesamten Publikationsmaterial zu verwenden — was eine viel breitere Palette an Stilen bietet, als derzeit im Web typisch ist (oder tatsächlich nur aus Leistungsgründen praktikabel ist).

#### Eine Anmerkung zu Schriftfamilien, Dicken und Varianten

Sie haben vielleicht bemerkt, dass wir davon sprechen, eine spezifische Schriftdatei für jede Dicke und jeden Stil (d.h. fett und kursiv und fett kursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser diese synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Dicken und Kursivstile haben, die oft komplett unterschiedliche Zeichen enthalten (Kleinbuchstaben 'a' und 'g' sind in Kursiv oft sehr unterschiedlich, zum Beispiel). Um das Schriftartendesign am genauesten darzustellen und Unterschiede zwischen Browsern zu vermeiden, wie diese die unterschiedlichen Stile ggf. synthesieren, ist es genauer, die spezifischen Schriftdateien zu laden, wo sie benötigt werden, wenn Sie keine Variable Font verwenden.

Sie könnten auch feststellen, dass einige Variable Fonts in zwei Dateien gesplittet werden: eine für die aufrechten Typen und all ihre Variationen und eine, die die Kursivvariationen enthält. Dies wird manchmal gemacht, um die Gesamtgröße der Datei zu reduzieren, falls die Kursivschriften nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verbinden, sodass Sie diese mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Das Herzstück des neuen Variable Fonts-Formats ist das Konzept einer **Achse der Variation**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse', wie schmal oder wie breit sie sein können; die 'Kursivachse', ob kursive Buchstabenformen vorhanden sind und ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse eine Spanne oder eine binäre Auswahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 (aus oder ein) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind jene, die am häufigsten vorkommen und häufig genug genutzt werden, dass die Autoren der Spezifikation es für sinnvoll hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schräglage, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartendesigner kann jede gewünschte Achse definieren und umschreiben, sie muss lediglich mit einem vierbuchstabigen **Tag** im Schriftartendateiformat selbst identifiziert werden. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den unten stehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die standardmäßige als auch die untere Syntax enthalten. Die untere Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um frühe Implementierungen von Variable Fonts-Unterstützung zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen jenseits der fünf registrierten einzusetzen. Allerdings war die Absicht des W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die passende Eigenschaft verwendet werden, wobei die untere Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die sonst nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen Groß-/Kleinschreibung beachten. Die registrierten Achsennamen müssen in Kleinbuchstaben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (auf die gleiche Weise wie bei der Festlegung von OpenType-Schriftartenmerkmalen mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft modifizieren. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch das `wght` Tag) definiert die Designachse, wie dünn oder dick (hell oder schwer im typografischen Sinne) die Striche der Buchstabenformen sein können. Schon lange gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in Schritten von 100 sowie Schlüsselwörter wie `normal` oder `bold` annimmt, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden weiterhin angewendet, wenn es um nicht-variable oder Variable Fonts geht, jedoch ist es bei variablen nun möglich, jede Zahl von 1 bis 1000 zu verwenden.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schriftart dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies lässt sich in der Regel relativ einfach lösen, erfordert aber einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Gewicht-Werten zu spielen.

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

Breite (repräsentiert durch das `wdth` Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert im typografischen Sinne) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}} Eigenschaft festgelegt, wobei Werte als Prozentsatz oberhalb oder unterhalb von 'normal' (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig, obwohl es weit wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegen würde, etwa 75%-125%. Wenn ein vorgegebener Zahlenwert außerhalb des im Font kodierten Bereichs liegt, sollte der Browser den Font mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Breiten-Werten zu spielen.

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

Die Kursiv-Achse (`ital`) kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" bezeichnet. Kursivdesigns umfassen oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Entsprechungen, sodass beim Übergang von aufrecht zu kursiv normalerweise mehrere Zeichen- (oder Glyphen-)ersetzungen erfolgen. Kursiv und oblique werden oft fälschlicherweise synonym verwendet, sind in Wahrheit jedoch ziemlich unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den folgenden Abschnitt), und eine Schriftart hätte typischerweise entweder eine oder die andere, aber nicht beide.

In CSS werden sowohl kursiv als auch oblique auf Text mithilfe der {{cssxref("font-style")}}-Eigenschaft angewandt. Beachten Sie auch die Einführung von `font-synthesis: none;`, was verhindert, dass Browser versehentlich die Variationsachse und ein synthetisiertes Kursiv anwenden. Dies kann auch genutzt werden, um unechtes Fetten zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Kursiv-Werten zu spielen.

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

Schräglage (repräsentiert durch das `slnt`-Tag), oft als 'oblique' bezeichnet, unterscheidet sich von echtem Kursiv dadurch, dass es den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersatz vornimmt. Es ist ebenfalls variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es dem Font, entlang der Schrägachse variiert zu werden. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Schräglage steuern können, sind {{cssxref("font-style")}} und {{cssxref("font-variation-settings")}}. Die folgenden beiden Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft über die `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn `font-variation-settings` verwendet wird. Auch bedeutet bei der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schräglage.

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

Dies ist etwas Neues für digitale Fonts und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallfonten. Optische Größe bezieht sich auf die Praxis, die gesamte Strichdicke von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (z.B. ein Äquivalent zu 10 oder 12px), hätten die Zeichen insgesamt einen dickeren Strich und möglicherweise andere kleine Änderungen, um sicherzustellen, dass es reproduziert und bei einer physisch kleineren Größe lesbar wäre. Andererseits, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnten es viel mehr Variationen in dicken und dünnen Strichstärken geben, die das Schriftartendesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich gemacht wurde, um den Druckprozess mit Tinte und Papier zu kompensieren (sehr dünne Linien von kleinen Größen drucken oft nicht, was den Buchstaben ein kaputtes Aussehen verleiht), lässt sich dies gut auf digitale Displays übertragen, wenn es darum geht, die Bildschirmqualität und die physische Größendarstellung auszugleichen.

Optische Größenwerte sollen im Allgemeinen entsprechend der `font-size` automatisch angewendet werden, können aber auch mit der unteren `font-variation-settings`-Syntax manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um Variable Fonts in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` erlaubt — dieses Attribut ermöglicht also nur das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen würden Sie die `font-size` (die physische Größe, in der der Text wiedergegeben wird) mit dem `opsz`-Wert abstimmen wollen (was die optische Größenanpassung beabsichtigt wird, wenn `auto` verwendet wird). Die Option, einen spezifischen Wert anzugeben, wird bereitgestellt, damit, falls erforderlich, die Standardeinstellung überschrieben werden kann — aus Gründen der Lesbarkeit, Ästhetik oder einem anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den optischen Größenwerten zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Designvariationsachse sein, die der Schriftartendesigner sich vorstellt. Es gibt möglicherweise einige, die ziemlich häufig werden — oder sogar registriert werden — aber das wird sich erst mit der Zeit zeigen.

### Grad

Grad könnte zu einer der häufigeren benutzerdefinierten Achsen werden, da es in der Schriftartendesigngeschichte bekannt ist. Die Praxis, verschiedene Grade eines Schriftschnitts zu entwerfen, wurde oft als Reaktion auf die geplante Nutzung und Drucktechnik durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartendesigns, unterscheidet sich jedoch von der herkömmlichen 'Gewicht'-achse dadurch, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrads nicht das Gesamtlayout des Textes oder der umgebenden Elemente verändert. Dies macht den Grad zu einer nützlichen Variationsachse, da er variiert oder animiert werden kann, ohne ein Umbruch des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den Font-Grad-Werten zu spielen.

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

### Verwenden einer variablen Schriftart: Änderungen von @font-face

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich zu jeder anderen Webschriftart, mit einigen bemerkenswerten Unterschieden, die über Aktualisierungen der traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die nun in modernen Browsern verfügbar ist.

Die grundlegende Syntax ist gleich, aber die Fonttechnologie kann spezifiziert und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` angegeben werden, statt sie entsprechend der geladenen Fontdatei zu benennen.

#### Beispiel für einen Standard-Upright (Roman) Font

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

In diesem Fall zeigt die `font-style: normal`-Deklaration an, dass diese Fontdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und {{cssxref("font-style")}} auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzuzeigen, dass der Font normale aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Font, die nur Kursivschrift und keine aufrechten Zeichen enthält

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

In diesem Fall zeigt die `font-style: italic`-Deklaration an, dass diese Fontdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und {{cssxref("font-style")}} auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzuzeigen, dass der Font kursiv Gephren enthält.

#### Beispiel für eine Font, die eine schräge Achse enthält

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

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Fontdatei verwendet werden sollte, wenn in einer Stilregel die Eigenschaft `font-family` auf `MyVariableFontName` gesetzt ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft auf oblique mit einem Winkel zwischen null und 12 Grad einschließlich gesetzt ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Fontformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie noch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), blockiert jedoch nicht, dass Sie einen ungültigen Wert über `font-variation-settings` angeben, also verwenden Sie mit Sorgfalt.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, innerhalb eines Feature-Abfrageblocks zu kapseln.

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

Die folgenden Beispielsseiten zeigen zwei verschiedene Möglichkeiten, Ihre CSS zu strukturieren. Die erste verwendet, wo immer möglich, die Standardattribute. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für einen `font-variation-settings`-String festzulegen, und zeigt, wie Sie einzelne Variablenwerte leichter aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Grad-Achse als benutzerdefinierte Eigenschaft ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
    into the street, and methodically knocking people's hats off then, I account
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
    into the street, and methodically knocking people's hats off then, I account
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
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen zeigt, was Ihr Font kann, über eine Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielwiese für Variable Fonts)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie erhält)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
