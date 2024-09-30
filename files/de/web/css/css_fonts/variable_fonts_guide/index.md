---
title: Leitfaden zu variablen Schriften
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**Variable Schriftarten** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Varianten einer Schriftart in eine einzelne Datei zu integrieren, anstatt eine separate Schriftartdatei für jede Breite, Gewichtung oder Stil zu haben. Sie erlauben es Ihnen, über CSS und einen einzigen {{cssxref("@font-face")}}-Verweis auf alle Variationen zuzugreifen, die in einer gegebenen Schriftartdatei enthalten sind. Dieser Artikel liefert alles, was Sie wissen müssen, um mit der Verwendung von variablen Schriften zu beginnen.

> [!NOTE]
> Um variable Schriften auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux-Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriften. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie keine variablen Schriften auf Webseiten oder den Firefox Developer Tools verwenden.

## Variable Schriften: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei variablen Schriften anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriften aussehen und wie sie im Vergleich stehen.

### Standard- (oder statische) Schriften

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Schriften produziert, und jede Schrift stellte eine spezifische Breite/Gewichtung/Stilkombination dar. So hätte man separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was dazu führt, dass man 20 oder 30 verschiedene Schriftdateien benötigt, um eine vollständige Schriftart darzustellen (es könnten bei einer großen Schriftart mit verschiedenen Breiten sogar noch mehr sein).

In einem solchen Szenario bräuchte man für die typische Verwendung einer Schriftart auf einer Webseite für Fließtext mindestens vier Dateien: regular, italic, bold und bold italic. Wenn Sie mehr Gewichte hinzufügen möchten, wie z.B. ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, würde dies mehrere weitere Dateien bedeuten. Das resultiert in mehr HTTP-Anfragen und mehr Daten, die heruntergeladen werden müssen (normalerweise etwa 20k oder mehr pro Datei).

### Variable Schriften

Mit einer variablen Schrift können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schrift, aber in den meisten Fällen kleiner oder ungefähr gleich groß wie die 4, die Sie für Fließtext laden würden. Der Vorteil bei der Wahl der variablen Schrift liegt darin, dass Sie Zugang zu der gesamten Bandbreite an Gewichten, Breiten und Stilen haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen verschiedener Überschriftengrößen in unterschiedlichen Gewichten für bessere Lesbarkeit bei jeder Größe oder die Verwendung einer etwas schmaleren Breite für datendichte Anzeigen. Zum Vergleich: In einem typografischen System für ein Magazin ist es üblich, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen in der gesamten Publikation zu verwenden — was ein viel breiteres Spektrum an Stilen bietet, als es derzeit im Web üblich ist (oder in der Tat aus Performance-Gründen allein praktikabel ist).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir darüber gesprochen haben, für jedes Gewicht und jeden Stil (d.h. fett und kursiv und fett kursiv) eine spezifische Schriftartdatei zu haben, anstatt darauf zu vertrauen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschrift haben, die oft völlig andere Zeichen umfassen (kleine Buchstaben 'a' und 'g's sind in der Kursivschrift zum Beispiel oft ziemlich unterschiedlich). Um das Design der Schrift möglichst genau widerzuspiegeln und Unterschiede zwischen Browsern und deren eventuelle oder nicht stattfindende Synthese der verschiedenen Stile zu vermeiden, ist es genauer, die spezifischen Schriftartdateien zu laden, wo sie benötigt werden, wenn eine nicht-variabel Schriftart verwendet wird.

Sie werden vielleicht auch feststellen, dass einige variable Schriften in zwei Dateien aufgeteilt sind: eine für die aufrechten Varianten und alle ihre Variationen, und eine, die die Kursivvariationen enthält. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, in Fällen, in denen die Kursivschrift nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit derselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Das Herzstück des neuen variablen Schriftenformats ist das Konzept einer **Variationsachse**, die den erlaubten Bereich dieses bestimmten Aspekts des Schriftart-Designs beschreibt. So beschreibt die 'Gewichtsachse', wie hell oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Gewicht könnte von 1–999 reichen, während kursiv 0 oder 1 (off oder on) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registriert** und **benutzerdefiniert**:

- Registrierte Achsen sind jene, die am häufigsten auftreten und häufig genug sind, dass die Autoren der Spezifikation es für lohnenswert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursivschrift und optische Größe. Das W3C hat sich verpflichtet, sie mit bestehenden CSS-Attributen zu verknüpfen, und in einem Fall ein neues einzuführen, wie Sie weiter unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftgestalter kann jede beliebige Achse definieren und festlegen, die er möchte, und muss ihr lediglich einen vierbuchstabigen **Tag** zuweisen, um sie innerhalb des Schriftdateiformats selbst zu identifizieren. Diese vierbuchstabigen Tags können in CSS verwendet werden, um einen Punkt entlang dieser Variationsachse festzulegen, wie in den folgenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung von variablen Schriftarten zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, die entsprechende Eigenschaft verwendet werden, mit der Low-Level-Syntax von `font-variation-settings` nur, um Werte oder Achsen festzulegen, die anderweitig nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsen-Namen case-sensitiv sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben geschrieben werden und benutzerdefinierte Achsen in Großbuchstaben. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einer dieser Werte ändern möchten, müssen Sie alle neu deklarieren (so wie wenn Sie OpenType-Schriftmerkmale mit {{cssxref("font-feature-settings")}} festlegen). Sie können diese Einschränkung umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (repräsentiert durch den `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. In CSS gibt es schon lange die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft zu spezifizieren, die numerische Werte im Bereich von 100 bis 900 in Schritten von 100 annimmt, sowie Schlüsselwörter wie `normal` oder `bold`, die Aliase für ihre entsprechenden numerischen Werte (400 bzw. 700 in diesem Fall) sind. Diese werden immer noch angewendet, wenn mit nicht-variablen oder variablen Schriftarten gearbeitet wird, aber mit variablen ist jede Zahl von 1 bis 1000 nun gültig.

Es sollte beachtet werden, dass es zu diesem Zeitpunkt keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schriftart auf das Schlüsselwort `bold` (oder ein anderes Schlüsselwort) zu 'mappen'. Dies kann im Allgemeinen leicht gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Das folgende Live-Beispiel-CSS kann bearbeitet werden, um mit den Font-Weight-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Breite

Breite (repräsentiert durch den `wdth`-Tag) definiert die Designachse, wie schmal oder breit (komprimiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mit der {{cssxref("font-stretch")}}-Eigenschaft festgelegt, wobei die Werte als Prozentsätze über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gültig — allerdings ist es wesentlich wahrscheinlicher, dass sich der Bereich näher an der 100%-Marke bewegt, wie z.B. 75%-125%. Wenn ein bereitgestellter Zahlenwert außerhalb des im Schriftartencodierten Bereichs liegt, sollte der Browser die Schriftart mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird bei der Nutzung von `font-variation-settings` nicht verwendet.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Das folgende Live-Beispiel-CSS kann bearbeitet werden, um mit den Font-Breite-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### Kursiv

Die Kursivachse (`ital`) kann im Bereich `[0-1]` festgelegt werden, wobei `0` "nicht kursiv", `0,5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass beim Übergang von aufrecht zu kursiv in der Regel mehrere Glyphen- (oder Zeichen-) Ersetzungen stattfinden. Kursiv und Schrägschrift werden oft etwas austauschbar verwendet, sind aber in Wahrheit recht unterschiedlich. Schrägschrift wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe untenstehenden Abschnitt), und eine Schriftart würde typischerweise das eine oder das andere haben, aber nicht beides.

In CSS werden sowohl Kursiv- als auch Schrägschrift auf Text mit der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — dies verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann auch verwendet werden, um falsches Fetten zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Das folgende Live-Beispiel-CSS kann bearbeitet werden, um mit Font-Kursivwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### Neigung

Neigung (repräsentiert durch den `slnt`-Tag) oder oft auch als 'Schrägschrift' bezeichnet — unterscheidet sich von echter Kursivschrift darin, dass sie den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersetzung vornimmt. Sie ist auch variabel, da sie als numerischer Bereich ausgedrückt wird. Dies erlaubt es, die Schrift überall entlang der Neigungsachse zu variieren. Der erlaubte Bereich reicht von -90 bis 90 Grad.

Die zwei Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg`-Schlüsselwort wird bei der Verwendung der `font-variation-settings`-Eigenschaft nicht verwendet. Außerdem bedeutet im Fall der `font-variation-settings`-Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn gehende Neigung.

Im folgenden Live-Beispiel können Sie die Neigung anpassen.

```html hidden
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

```css hidden
:root {
  --text-axis: -5;
}

p {
  display: inline-block;
  font-size: 2rem;
}

.adjustable-box {
  border: 1px dashed;
}
```

```css
@font-face {
  font-family: "SlantFont";
  font-style: oblique -15 15;
  src: url("https://mdn.github.io/shared-assets/fonts/font_with_slant_axis.woff2")
    format("woff2");
}

p {
  font-family: "SlantFont";
}

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

```js hidden
const angle = document.querySelector("#slant-angle");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = -1 * e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--slant-angle", angle);
});
```

{{EmbedLiveSample("slant", "100%", "350")}}

### Optische Größe

Dies ist etwas Neues für digitale Schriften und CSS, aber eine jahrhundertealte Technik im Entwerfen und Erstellen von Metallschriften. Optische Größeneinstellung bezieht sich auf die Praxis, die Gesamtstrichdicke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie eine Entsprechung zu 10 oder 12px), hätten die Zeichen einen insgesamt dickeren Strich und vielleicht einige kleine Anpassungen, um sicherzustellen, dass sie bei einer physischen kleineren Größe reproduzierbar und lesbar waren. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Variation in dickeren und dünneren Strichstärken geben, wobei das Schriftartdesign mehr im Einklang mit der ursprünglichen Absicht gezeigt wird.

Während dies ursprünglich dazu gedacht war, um den Druckprozess mit Tinte und Papier zu kompensieren (sehr dünne Linien in kleinen Größen druckten oft nicht, was den Buchstabenformen ein zerrissenes Aussehen gab), übersetzt es sich gut in digitale Displays, wenn es darum geht, die Bildschirmqualität und die physische Größenrenderung zu kompensieren.

Optische Größenwerte sollen im Allgemeinen automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das geschaffen wurde, um variable Schriften in CSS zu unterstützen. Bei der Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` erlaubt — dieses Attribut erlaubt also nur das Ein- oder Ausschalten der optischen Größeneinstellung. Bei der Verwendung von `font-variation-settings: 'opsz' <num>` können Sie jedoch einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der die Schrift gerendert wird) mit dem `opsz`-Wert abgleichen (wie es vorgesehen ist, wenn Sie `auto` verwenden). Die Möglichkeit, einen spezifischen Wert anzugeben, wird angeboten, damit, falls es notwendig ist, den Standard zu überschreiben — aus Gründen der Lesbarkeit, Ästhetik oder eines anderen Grundes — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Das folgende Live-Beispiel-CSS kann bearbeitet werden, um mit optischen Größenwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Sonderachsen

Benutzerdefinierte Achsen sind genau das: Sie können jede Achse des Designvariation sein, die der Schriftgestalter sich vorstellen kann. Es könnte einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grad

Grad könnte eine der häufiger genutzten benutzerdefinierten Achsen werden, da es eine bekannte Geschichte im Schriftdesign hat. Die Praxis, verschiedene Gradzahlen einer Schriftart zu entwerfen, wurde oft als Reaktion auf die beabsichtigte Verwendung und Drucktechnik durchgeführt. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartdesigns, unterscheidet sich jedoch von der traditionellen 'Gewichtung' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades nicht das allgemeine Layout des Textes oder der ihn umgebenden Elemente verändert. Dies macht Grad zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne einen Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Das folgende Live-Beispiel-CSS kann bearbeitet werden, um mit Font-Grad-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Verwendung einer variablen Schrift: Änderungen an @font-face

Die Syntax zum Laden von variablen Schriften ist sehr ähnlich zu jeder anderen Webschrift, mit einigen bemerkenswerten Unterschieden, die durch Aktualisierungen der traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die jetzt in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist dieselbe, aber die Schrifttechnologie kann angegeben und erlaubte Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem benannten Schriftfile angegeben zu werden.

#### Beispiel für eine Standard-upright (römische) Schrift

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}
```

In diesem Fall weist der Wert `normal` darauf hin, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `normal` ist. Die Werte `oblique 0deg` und `oblique 0deg 20deg`, aufgrund des `0deg`, zeigen auch an, dass die Schrift normale aufrechte Glyphen hat.

#### Beispiel für eine Schrift, die nur Kursivschrift und keine aufrechten Zeichen enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: italic;
}
```

In diesem Fall weist der Wert `italic` darauf hin, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `italic` ist. Der Wert `oblique 14deg` zeigt auch an, dass die Schrift Kursiv-Glyphen hat.

#### Beispiel für eine Schrift, die eine Oblique (Neigungs-) Achse enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 12deg;
}
```

In diesem Fall weist der Wert `oblique 0deg 12deg` darauf hin, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformate implementiert, testen Sie daher sorgfältig. Alle Browser, die variable Schriften unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt format-variations (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Bereitstellen von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), wird Sie jedoch nicht daran hindern, einen ungültigen Wert über `font-variation-settings` bereitzustellen, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für variable Schriften kann mit CSS Feature Queries (siehe {{cssxref("@supports")}}) überprüft werden, sodass es möglich ist, variable Schriften in der Produktion zu verwenden und das CSS, das die variablen Schriften aufruft, innerhalb eines Feature Query Blocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für einen `font-variation-settings`-String zu setzen und zeigt, wie Sie einzelne Variablenwerte leichter aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String umzuschreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Wert der Grade-Achsen-Benutzereigenschaft ändert.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Ressourcen

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung)
- [W3C GitHub-Issue-Schlange](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen zeigt, was Ihre Schriftart kann, über eine einfache Drag-and-Drop-Inspektionsoberfläche)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche variable Schriften-Spielwiese)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog variabler Schriften und wo Sie sie bekommen können)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für variable Schriften mit einigen sehr einzigartigen Ansätzen für Benutzeroberflächen)
