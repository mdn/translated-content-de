---
title: Leitfaden für variable Schriftarten
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{CSSRef}}

**Variable Schriftarten** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele unterschiedliche Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt für jede Breite, Gewichtung oder Stil eine separate Datei zu haben. Sie können auf alle in einer gegebenen Schriftartendatei enthaltenen Variationen über CSS und eine einzige {{cssxref("@font-face")}}-Referenz zugreifen. Dieser Artikel gibt Ihnen alle Informationen, die Sie benötigen, um mit der Nutzung variabler Schriftarten zu beginnen.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-OSes die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie variable Schriftarten auf Webseiten oder in den Firefox Developer Tools nicht verwenden.

## Variable Schriftarten: was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was an variablen Schriftarten anders ist, ist es sinnvoll, sich anzusehen, wie nicht-variable Schriftarten aussehen und wie sie verglichen werden.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriftdateien produziert, wobei jede Datei eine spezifische Breite/Gewichtung/Stilkombination darstellte. Sie hätten also separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' - das könnte in 20 oder 30 verschiedenen Schriftdateien resultieren, um eine komplette Schriftart darzustellen (es könnten sogar mehrere Dutzend für eine große Schriftart sein, die unterschiedliche Breiten hat).

In einem solchen Szenario würde man mindestens vier Dateien benötigen, um eine Schriftart für die typische Verwendung auf einer Website für den Fließtext zu verwenden: normal, kursiv, fett und fett kursiv. Wenn Sie mehr Gewichtungen hinzufügen wollten, etwa eine leichtere für Bildunterschriften oder eine schwerere für zusätzliche Hervorhebungen, würde das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr herunterzuladenden Daten (normalerweise etwa 20 KB oder mehr pro Datei).

### Variable Schriftarten

Mit einer variablen Schriftart können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftdatei, aber in den meisten Fällen kleiner oder etwa gleich groß wie die 4 Dateien, die Sie vielleicht für den Fließtext laden. Der Vorteil der Wahl der variablen Schriftart besteht darin, dass Sie Zugriff auf das gesamte Spektrum an Gewichtungen, Breiten und Stilen haben, statt nur auf die wenigen, die Sie bisher getrennt laden würden.

Dies ermöglicht gängige typografische Techniken, wie das Einstellen unterschiedlicher Größen von Überschriften in unterschiedlichen Gewichtungen für bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datendichte Anzeigen. Zum Vergleich: Es ist typisch in einem typografischen System für ein Magazin, 10–15 oder mehr unterschiedliche Gewichtungs- und Breitenkombinationen in der gesamten Publikation zu verwenden — was eine viel breitere Palette an Stilen als derzeit auf dem Web üblich (oder aus Performance-Gründen praktikabel) zulässt.

#### Ein Hinweis zu Schriftfamilien, Gewichtungen und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir davon sprechen, eine spezielle Schriftdatei für jede Gewichtung und jeden Stil (d.h. fett und kursiv und fett kursiv) zu haben, anstatt sich auf den Browser zu verlassen, diese zu synthetisieren. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichtungen und Kursivschrift haben, die oft komplett unterschiedliche Zeichen enthalten (z.B. sind die Kleinbuchstaben 'a' und 'g' in der Kursivschrift oft sehr unterschiedlich). Um das Schriftartendesign so akkurat wie möglich widerzuspiegeln und Unterschiede zwischen Browsern und wie sie die unterschiedlichen Stile eventuell oder nicht synthetisieren, zu vermeiden, ist es genauer, die spezifischen Schriftdateien zu laden, wenn nötig, wenn Sie eine nicht-variable Schriftart verwenden.

Sie werden auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt sind: eine für aufrechte und alle ihre Variationen und eine, die die Kursivvariationen enthält. Dies wird manchmal gemacht, um die Gesamtgröße der Datei zu reduzieren, in Fällen, in denen die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit denselben `font-family` und passenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Achse der Variation'

Der Kern des neuen Formats variabler Schriftarten ist das Konzept einer **Achse der Variation**, die den erlaubten Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. Also beschreibt die 'Gewichtsachse' wie hell oder fett die Buchstabenform sein kann; die 'Breitenachse' beschreibt, wie schmal oder breit sie sein kann; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewicht könnte von 1–999 reichen, während Kursiv von 0 oder 1 wäre (aus oder an).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind jene, die am häufigsten vorkommen und oft genug sind, dass die Autoren der Spezifikation es wert fanden, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schrägstellung, Kursivschrift und optische Größe. Das W3C hat sich verpflichtet, sie zu bestehenden CSS-Attributen zuzuordnen, und in einem Fall ein neues eingeführt, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unendlich: der Schriftartendesigner kann jede beliebige Achse definieren und festlegen, die ihm gefällt, und muss ihr lediglich einen vierstelligen **Tag** geben, um sie innerhalb des Schriftarten-Dateiformats selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Achse der Variation anzugeben, wie in den unten stehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um die frühen Implementierungen der Unterstützung variabler Schriftarten zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings war die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Daher sollte, wenn möglich, die entsprechende Eigenschaft verwendet werden, wobei die Low-Level-Syntax von `font-variation-settings` nur verwendet werden sollte, um Werte oder Achsen zu setzen, die anderweitig nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist zu beachten, dass die Achsennamen auf Groß- und Kleinschreibung achten müssen. Die Namen der registrierten Achsen müssen in Kleinbuchstaben geschrieben werden und die benutzerdefinierten Achsen müssen in Großbuchstaben geschrieben werden. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Stufe) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (in der gleichen Weise, wie wenn Sie OpenType-Schriftmerkmale mit {{cssxref("font-feature-settings")}} setzen). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch den `wght` Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in der typischen Typografie) die Striche der Buchstabenform sein können. Seit langer Zeit gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, welche numerische Werte von 100 bis 900 in Schritten von 100 annimmt und Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte sind (in diesem Fall 400 und 700). Diese werden weiterhin angewendet, wenn man mit nicht-variablen oder variablen Schriftarten arbeitet, aber mit variablen sind jetzt alle Zahlen von 1 bis 1000 gültig.

Es sollte angemerkt werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schriftart mit dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zu 'mappen'. Dies lässt sich im Allgemeinen recht einfach lösen, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den font-weight-Werten zu experimentieren.

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

Breite (dargestellt durch den `wdth` Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS über die {{cssxref("font-stretch")}}-Eigenschaft festgelegt, mit Werten, die als Prozentsatz über oder unter "normal" (100%) ausgedrückt werden. Jede Zahl größer als 0 ist technisch gültig – obwohl es weit wahrscheinlicher ist, dass der Bereich näher an die 100% fällt, wie z.B. 75%-125%. Wenn ein angegebener Zahlenwert außerhalb des Bereichs liegt, der in der Schriftart kodiert ist, sollte der Browser die Schrift bei dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird bei der Verwendung von `font-variation-settings` nicht verwendet.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den font-width-Werten zu spielen.

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

Die Kursivachse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" angibt. Kursivdesigns enthalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, so dass beim Übergang von aufrecht zu kursiv in der Regel mehrere Glyphen- (oder Zeichen-) Ersetzungen stattfinden. Kursiv und schräg werden häufig etwas austauschbar verwendet, sind aber in Wirklichkeit ganz unterschiedlich. Schrägstellung wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe den untenstehenden Abschnitt), und eine Schriftart hätte typischerweise eine oder die andere, aber nicht beide.

In CSS werden sowohl kursiv als auch schräg auf Text mittels der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` – dies verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann auch verwendet werden, um falsche Fettmarkierung zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den font-italics zu spielen.

```html hidden live-sample___variable-fonts-italic-example
<div>
  <p class="p1">Italic</p>
  <span>(font-style: italic)</span>
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
/* italic range is 0 or 1 */
.p1 {
  font-synthesis: none;
  font-style: italic;
}

/* italic range is 0 or 1 */
.p2 {
  font-synthesis: none;
  font-variation-settings: "ital" 1;
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

Schrägstellung (dargestellt durch den `slnt` Tag), oder wie es oft genannt wird, 'schräg' – unterscheidet sich von echten Kursiven darin, dass sie den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersetzung durchführt. Sie ist auch variabel, da sie als ein numerischer Bereich ausgedrückt wird. Dies ermöglicht die variable Änderung der Schriftart entlang der Schrägachse. Der zulässige Bereich liegt zwischen -90 und 90 Grad.

Die beiden Eigenschaften, die die Schrägstellung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaften-Deklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Auch im Fall der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn gerichtete Schrägstellung.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik im Design und der Herstellung von Metallschrift. Die optische Größeneinstellung bezieht sich auf die Praxis, die allgemeine Strichstärke von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (zum Beispiel ein Äquivalent zu 10 oder 12px), hätten die Zeichen eine insgesamt dickere Strichstärke und vielleicht andere kleine Anpassungen, um sicherzustellen, dass sie sich bei einer physisch kleineren Größe reproduzieren und lesbar wären. Im Gegenzug, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnten es viel größere Unterschiede in dicken und dünnen Strichstärken geben, die das Schriftartendesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich gemacht wurde, um den Druckprozess mit Tinte und Papier auszugleichen (sehr dünne Linien in kleinen Größen wurden oft nicht gedruckt und führten zu einem gebrochenen Aussehen der Buchstabenformen), lässt es sich gut auf digitale Displays übertragen, wenn Qualität und physische Größenwiedergabe kompensiert werden.

Optische Größeneinstellungen sollen in der Regel automatisch entsprechend der `font-size` angewendet werden, können aber auch über die Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das entwickelt wurde, um variable Schriftarten in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind die einzigen zulässigen Werte `auto` oder `none` – dieses Attribut ermöglicht es daher nur, die optische Größeneinstellung ein- oder auszuschalten. Allerdings können Sie bei der Verwendung von `font-variation-settings: 'opsz' <num>` einen numerischen Wert angeben. In den meisten Fällen würden Sie die `font-size` (die physische Größe, in der die Schriftart gerendert wird) mit dem `opsz`-Wert (wie die optische Größeneinstellung angewendet werden soll, wenn `auto` verwendet wird) übereinstimmen wollen. Die Option, einen spezifischen Wert anzugeben, wird bereitgestellt, sodass, falls es notwendig ist, die Standardeinstellung aus Gründen der Lesbarkeit, Ästhetik oder aus anderen Gründen zu überschreiben – ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den optischen Größeneinstellungen zu experimentieren.

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

Benutzerdefinierte Achsen sind genau das: sie können jede Achse der Designvariation sein, die sich der Schriftartendesigner ausdenken kann. Es kann sein, dass einige von ihnen ziemlich häufig werden – oder sogar registriert werden – aber nur die Zeit wird es zeigen.

### Stufe

Die Stufe könnte eine der häufigeren benutzerdefinierten Achsen werden, da sie eine bekannte Geschichte im Schriftartendesign hat. Die Praxis, unterschiedliche Stufen einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik gemacht. Der Begriff 'Stufe' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartendesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern der Textstufe das gesamte Layout des Textes oder der umgebenden Elemente nicht verändert. Dies macht die Stufe zu einer nützlichen Achse der Variation, da sie variiert oder animiert werden kann, ohne einen Umbruch des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten. Bearbeiten Sie den CSS-Code, um mit den font-grade-Werten zu spielen.

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

### Verwendung einer variablen Schriftart: Änderungen von @font-face

Die Syntax zum Laden variabler Schriftarten ist sehr ähnlich zu jeder anderen Webfont, mit einigen bemerkenswerten Unterschieden, die durch Aktualisierungen der traditionellen {{cssxref("@font-face")}}-Syntax, die jetzt in modernen Browsern verfügbar ist, bereitgestellt werden.

Die grundlegende Syntax ist dieselbe, aber die Schrifttechnologie kann spezifiziert werden und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können bereitgestellt werden, anstatt nach dem Namen laut der geladenen Schriftartendatei benannt zu werden.

#### Beispiel für eine Standard-ausgerichtete (Römische) Schriftart

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

In diesem Fall gibt der `normal`-Wert an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft `normal` ist. Die Werte `oblique 0deg` und `oblique 0deg 20deg`, weil von `0deg`, geben auch an, dass die Schrift normale aufrechte Glyphen hat.

#### Beispiel für eine Schriftart, die nur Kursivschrift und keine aufrechten Zeichen enthält

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

In diesem Fall gibt der `italic`-Wert an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft `italic` ist. Der `oblique 14deg`-Wert gibt auch an, dass die Schrift Kursivglyphen hat.

#### Beispiel für eine Schriftart, die eine Schrägstellungsachse (Oblique) enthält

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

In diesem Fall gibt der `oblique 0deg 12deg`-Wert an, dass diese Schriftartdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft schräg ist, mit einem Winkel zwischen null und 12 Grad inklusive.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformate implementiert, daher sollten Sie genau testen. Alle Browser, die variable Schriftarten unterstützen, rendert sie dennoch, wenn Sie das Format einfach auf das Dateiformat gesetzt haben, anstatt format-variations (z.B. `woff2` anstelle von `woff2-variations`), aber es ist ratsam, wenn möglich die korrekte Syntax zu verwenden.

> [!NOTE]
> Wenn Sie für `font-weight`, `font-stretch` und `font-style` Wertebereiche angeben, verhindert dies, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (z.B. `font-weight` oder `font-stretch`), aber es blockiert Sie nicht davor, durch `font-variation-settings` einen ungültigen Wert anzugeben, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriftarten kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, variable Schriftarten in der Produktion zu verwenden und den CSS-Code, der die variablen Schriftarten aufruft, innerhalb eines Feature-Query-Blocks zu umschließen.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, um Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel nutzt CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenkette zu setzen und zeigt, wie Sie einzelne variable Werte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette umzuschreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Grad-Achsenwert überschreibt. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___sample-page-example
<div class="container container1">
  <h1>Moby Dick</h1>
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
  <h1>Moby Dick</h1>
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

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurf des Redakteurs)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Einführung in OpenType Variationen](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen sagt, was Ihre Schriftart kann, über ein einfaches Drag-and-Drop-Inspektionsinterface)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Playground-Seite für variable Schriftarten)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog variabler Schriftarten und wo sie zu finden sind)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen für Benutzeroberflächen)
