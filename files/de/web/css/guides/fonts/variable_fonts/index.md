---
title: Variable Fonts
slug: Web/CSS/Guides/Fonts/Variable_fonts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt für jede Breite, Gewichtung oder Stil eine separate Schriftartdatei zu haben. Sie können auf alle in einer Schriftartdatei enthaltenen Variationen über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz zugreifen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Systeme die neueste Version von Linux FreeType, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht aktuell ist, werden Sie nicht in der Lage sein, Variable Fonts auf Webseiten oder in den Firefox Developer Tools zu verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an Variable Fonts anders ist, lohnt es sich, zu betrachten, wie nicht variable Schriftarten aussehen und wie sie im Vergleich stehen.

### Standard- (oder statische) Schriftarten

Früher wurde eine Schriftart als mehrere individuelle Schriftarten erstellt, und jede Schriftart repräsentierte eine spezifische Breite/Gewichtung/Stilkombination. So hatte man separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass man am Ende 20 oder 30 verschiedene Schriftdateien haben könnte, um eine vollständige Schriftart zu repräsentieren (bei einer großen Schriftart, die verschiedene Breiten hat, könnte es mehrere Male so viel sein).

In einem solchen Szenario müssten Sie, um eine Schriftart für die typische Nutzung auf einer Webseite für Fließtext zu verwenden, mindestens vier Dateien haben: regular, italic, bold und bold italic. Wenn Sie noch mehr Gewichtungen hinzufügen möchten, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Betonung, würden das mehrere zusätzliche Dateien bedeuten. Das führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einer Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder etwa gleich groß wie die 4, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl der Variable Font ist, dass Sie Zugriff auf das gesamte Spektrum an Gewichtungen, Breiten und Stilen haben, anstatt auf nur die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies erlaubt gängige typografische Techniken, wie das Setzen unterschiedlicher Kopfzeilen in unterschiedlichen Gewichtungen für bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datenreiche Anzeigen. Im Vergleich dazu ist es typisch in einem typografischen System für ein Magazin, 10–15 oder mehr verschiedene Gewichtungs- und Breitenkombinationen durch die Publikation zu verwenden — was ein viel breiteres Spektrum an Stilen bietet, als aktuell im Web üblich ist (oder tatsächlich allein aus Leistungsgründen praktisch ist).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Sie könnten bemerken, dass wir davon sprechen, für jede Gewichtung und jeden Stil (z.B. fett und kursiv und fett kursiv) eine spezifische Schriftdatei zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für stärkere Gewichtungen und Kursivschriften haben, die oft völlig unterschiedliche Zeichen beinhalten (zum Beispiel sind das Kleinbuchstaben-'a' und -'g' in Kursiv oft ziemlich unterschiedlich). Um das Design der Schriftart am genauesten widerzuspiegeln und Unterschiede zwischen Browsern zu vermeiden, und wie sie möglicherweise die verschiedenen Stile synthetisieren, ist es genauer, die spezifischen Schriftdateien zu laden, wo sie benötigt werden, wenn eine nicht-variable Schrift verwendet wird.

Sie könnten auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt geliefert werden: eine für aufrechte und all ihre Variationen und eine, die die kursiven Variationen enthält. Das wird gelegentlich gemacht, um die Gesamtgröße der Datei zu reduzieren, wenn die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, damit Sie sie mit der gleichen `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Das Herzstück des neuen Variable Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich des jeweiligen Aspekts des Schriftartdesigns beschreibt. So beschreibt die 'Gewichtungsachse', wie leicht oder wie kräftig die Buchstabenumrisse sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursiv gesetzte Buchstabenumrisse vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, etc. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewichtung könnte von 1–999 reichen, während kursiv 0 oder 1 (aus oder an) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind die, die am häufigsten auftreten und häufig genug, dass die Autoren der Spezifikation dachten, es sei lohnenswert, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursivschrift und optische Größe. Das W3C hat sich bereit erklärt, sie mit bestehenden CSS-Attributen zu korrelieren und in einem Fall ein neues einzuführen, wie Sie unten sehen werden.
- Benutzerdefinierte Achsen sind grenzenlos: Der Schriftartdesigner kann jede beliebige Achse definieren und abgrenzen, wie er will, und muss sie nur mit einem vierbuchstabigen **Tag** kennzeichnen, um sie im Schriftdateiformat selbst zu identifizieren. Sie können diese vierbuchstabigen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie es in den nachstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, werden sowohl die standardmäßige als auch die niedere Syntaxebene enthalten. Die niedere Syntaxebene ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung von Variable Fonts zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte wann immer möglich die entsprechende Eigenschaft verwendet werden, wobei die niedere Syntaxebene von `font-variation-settings` nur verwendet wird, um Werte oder Achsen festzulegen, die ansonsten nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen groß- und kleinschreibungssensitiv sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben sein, und benutzerdefinierte Achsen müssen in Großbuchstaben sein. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewichtung) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (auf die gleiche Weise wie beim Setzen von OpenType-Schriftmerkmale mit {{cssxref("font-feature-settings")}}). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewichtung

Gewichtung (repräsentiert durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenumrisse sein können. Seit langer Zeit gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte von 100 bis 900 in Hunderterschritten nimmt, und Stichwörter wie `normal` oder `bold`, die Aliase ihrer entsprechenden numerischen Werte sind (400 und 700 in diesem Fall). Diese werden weiterhin angewendet, wenn es um nicht-variable oder variable Schriftarten geht, aber mit Variablen ist jetzt jede Zahl von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit gibt, in der `@font-face`-Deklaration einen bestimmten Punkt auf der Variationsachse einer Variablen Schriftart der Keyword `bold` (oder jedem anderen Stichwort) zuzuordnen. Dies kann in der Regel relativ einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgewichtswerten zu experimentieren.

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

Breite (repräsentiert durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenumrisse sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft eingestellt, wobei Werte als Prozentsatz über oder unter 'normal' (100 %) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig — obwohl es weitaus wahrscheinlicher ist, dass der Bereich näher an der 100 %-Marke liegt, wie 75 % - 125 %. Wenn ein eingegebener Zahlenwert außerhalb des im Font kodierten Bereichs liegt, sollte der Browser den Font mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht verwendet, wenn `font-variation-settings` verwendet wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftbreitenwerten zu experimentieren.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv" spezifiziert, `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursiv-Designs beinhalten oft dramatisch unterschiedliche Buchstabenformen als ihre aufrechten Gegenstücke, so dass beim Übergang von aufrecht zu kursiv mehrere Glyphen- (oder Zeichen-)ersetzungen normalerweise vorkommen. Kursiv und Oblique werden oft etwas austauschbar verwendet, sind jedoch in Wahrheit ziemlich unterschiedlich. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den untenstehenden Abschnitt), und eine Schriftart würde typischerweise eines oder das andere haben, aber nicht beides.

In CSS werden sowohl kursiv als auch oblique auf Text mit der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindern wird, dass Browser die Variationsachse versehentlich anwenden und eine synthetisierte Kursivschrift nutzen. Dies kann verwendet werden, um falsches Fetten ebenfalls zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Kursivschrift zu experimentieren.

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

### Neigung

Neigung (repräsentiert durch das `slnt`-Tag), oder wie es häufig genannt wird, 'oblique' — unterscheidet sich von echten Kursivschriften darin, dass es den Winkel der Buchstabenumrisse ändert, aber keine Zeichenersetzung vornimmt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dadurch kann die Schrift entlang der Neigungsachse variiert werden. Der erlaubte Bereich liegt zwischen -90 bis 90 Grad.

Die beiden Eigenschaften, die die Neigung kontrollieren können, sind [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/Reference/Properties/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Außerdem bedeutet ein positiver Winkel in der `font-variation-settings`-Eigenschaft eine gegen den Uhrzeigersinn verlaufende Neigung.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik beim Entwurf und bei der Erstellung von Metallschriftarten. Optische Größenanpassung bezieht sich auf die Praxis, die insgesamt Linienstärke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie etwa ein Äquivalent zu 10 oder 12px), würden die Zeichen einen insgesamt dickeren Strich haben, und vielleicht andere kleine Anpassungen, um sicherzustellen, dass es wiedergegeben und bei einer physisch kleineren Größe lesbar wäre. Andererseits, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es eine viel größere Variation der dicken und dünnen Linienstärken geben, die das Schriftdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich getan wurde, um den Tinten- und Papierdruckprozess zu kompensieren (sehr dünne Linien bei kleinen Größen wurden oft nicht gedruckt, was den Zeichnungsformen ein gebrochenes Erscheinungsbild verlieh), übersetzt es sich gut in digitale Anzeigen, wenn die Qualität des Bildschirms und die physische Größenwiedergabe kompensiert werden.

Optische Größenwerte sind generell dazu gedacht, automatisch entsprechend der `font-size` angewandt zu werden, können aber auch mit der niedrigeren Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um Variable Fonts in CSS zu unterstützen. Wenn `font-optical-sizing` verwendet wird, sind die einzigen erlaubten Werte `auto` oder `none` — also erlaubt dieses Attribut nur das Ein- oder Ausschalten optischer Größenanpassung. Beim Verwenden von `font-variation-settings: 'opsz' <num>`, können Sie jedoch einen numerischen Wert angeben. In den meisten Fällen würde man die `font-size` (die physische Größe, in der der Text gerendert wird) mit dem `opsz`-Wert übereinstimmen wollen (was die Art und Weise ist, wie die optische Größenanpassung angewendet wird, wenn `auto` verwendet wird). Die Option, einen spezifischen Wert zu liefern, wird bereitgestellt, damit bei Bedarf die Standardeinstellung — aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund — übersprungen werden kann, um einen spezifischen Wert anzuwenden.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit optischen Größenwerten zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: Sie können jede Desigvariationachse sein, die sich der Schriftart-Designer vorstellt. Es kann einige geben, die ziemlich verbreitet werden — oder sogar registriert werden — aber die Zeit wird es zeigen.

### Grad

Grad wird möglicherweise eine der häufigeren benutzerdefinierten Achsen, da es eine bekannte Geschichte im Schriftdesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf die vorgesehene Verwendung und die Drucktechnik gemacht. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' insofern, dass sich der physische Raum, den der Text einnimmt, nicht ändert, sodass die Änderung des Textgrades das Gesamt-Layout des Textes oder der umgebenden Elemente nicht verändert. Dies macht den Grad zu einer nützlichen Variierungachse, da er variiert oder animiert werden kann, ohne dass ein Reflow des Textes selbst verursacht wird.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit Schriftgradwerten zu experimentieren.

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

### Verwendung einer Variable Font: @font-face Änderungen

Die Syntax zum Laden von Variable Fonts ist sehr ähnlich wie bei jeder anderen Webschriftart, mit einigen bemerkenswerten Unterschieden, die über Updates zur traditionellen {{cssxref("@font-face")}}-Syntax zur Verfügung gestellt werden, jetzt in modernen Browsern verfügbar.

Die grundlegende Syntax ist die gleiche, aber die Schrifttechnik kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können geliefert werden, anstatt nach dem zu ladenden Font-Datei benannt zu werden.

#### Beispiel für eine standardmäßige aufrechte (Römische) Schriftart

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

In diesem Fall zeigt die `font-style: normal` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `normal` gesetzt ist. Alternativ könnten Sie `font-style: oblique 0deg` oder `font-style: oblique 0deg 20deg` verwenden, um anzugeben, dass der Font normale, aufrechte Glyphen hat (angezeigt durch `0deg`).

#### Beispiel für eine Schriftart, die nur Kursivschrift und keine aufrechte Zeichen enthält

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

In diesem Fall zeigt die `font-style: italic` Deklaration an, dass diese Schriftdatei verwendet werden sollte, wenn `font-family` auf `MyVariableFontName` gesetzt ist und [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style) auf `italic` gesetzt ist. Alternativ könnten Sie `font-style: oblique 14deg` verwenden, um anzugeben, dass der Font kursiv gesetzte Glyphen hat.

#### Beispiel für eine Schriftart, die eine schrägen (Neigungs) Achse enthält

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

In diesem Fall zeigt der `oblique 0deg 12deg` Wert an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family` Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/Reference/Properties/font-style) Eigenschaft schräg mit einem Winkel zwischen null und zwölf Grad inklusiv ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie immer noch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf format-variations (d.h. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Wenn Sie Wertebereiche für `font-weight`, `font-stretch` und `font-style` angeben, wird verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie aber nicht daran hindern, einen ungültigen Wert mit `font-variation-settings` anzugeben, also verwenden Sie es mit Sorgfalt.

## Arbeit mit älteren Browsern

Die Unterstützung von Variable Fonts kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, wodurch es möglich ist, Variable Fonts in der Produktion zu verwenden und den CSS, der die Variable Fonts aufruft, in einem Feature-Query-Block zu scopen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenkette festzulegen und zeigt, wie man einfacher einzelne variable Werte aktualisieren kann, indem man eine einzelne Variable überschreibt, anstatt die ganze Zeichenkette neu zu schreiben. Beachten Sie den Hover-Effekt beim `h2`, der nur den Wert der Gradachsen-Benutzerdefinierten Eigenschaft ändert. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schriftart über eine Drag-and-Drop-Inspektionsschnittstelle tun kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Playground-Seite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo sie erhältlich sind)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Playground für Variable Fonts mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
