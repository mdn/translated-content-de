---
title: Leitfaden für variable Schriftarten
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**Variable Schriftarten** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen eines Schriftbildes in einer einzelnen Datei zu integrieren, anstatt für jede Breite, Gewichtung oder Stil eine separate Schriftdatei zu haben. Sie ermöglichen Ihnen den Zugriff auf alle in einer bestimmten Schriftartdatei enthaltenen Variationen über CSS und eine einzelne {{cssxref("@font-face")}}-Referenz. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um mit der Verwendung variabler Schriftarten zu beginnen.

> [!NOTE]
> Um variable Schriftarten auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine variablen Schriftarten. Wenn Ihr Betriebssystem nicht aktuell ist, können Sie keine variablen Schriftarten auf Webseiten oder in den Firefox Developer Tools verwenden.

## Variable Schriftarten: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei variablen Schriftarten anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriftarten aussehen und wie sie im Vergleich stehen.

### Standard- (oder statische) Schriftarten

In der Vergangenheit wurde ein Schriftbild als mehrere einzelne Schriftarten produziert, wobei jede Schriftart eine bestimmte Breite/Gewichtung/Stilkombination repräsentierte. So hatten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutete, dass Sie am Ende 20 oder 30 verschiedene Schriftdateien haben konnten, um ein vollständiges Schriftbild darzustellen (bei einem großen Schriftbild mit unterschiedlichen Breiten konnte es mehrfach so viel sein).

In einem solchen Szenario müssten Sie, um ein Schriftbild für eine typische Nutzung auf einer Website für Fließtext zu verwenden, mindestens vier Dateien benötigen: Regular, Italic, Bold und Bold Italic. Wenn Sie weitere Gewichtungen hinzufügen möchten, wie eine leichtere für Bildunterschriften oder eine schwerere für zusätzlichen Nachdruck, würde das mehrere weitere Dateien bedeuten. Dies resultiert in mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Schriftarten

Mit einer variablen Schriftart können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder etwa so groß wie die vier, die Sie für den Fließtext laden könnten. Der Vorteil der Wahl der variablen Schriftart besteht darin, dass Sie auf die gesamte Bandbreite an Gewichtungen, Breiten und Stilen zugreifen können, anstatt nur auf die wenigen beschränkt zu sein, die Sie vorher separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Setzen verschiedener Größenüberschriften in unterschiedlichen Gewichtungen für eine bessere Lesbarkeit in jeder Größe oder die Verwendung einer etwas schmaleren Breite für datendichte Anzeigen. Zum Vergleich: In einem typografischen System für eine Zeitschrift ist es üblich, 10–15 oder mehr verschiedene Kombinationen von Gewichtung und Breite im gesamten Magazin zu verwenden — was eine viel größere Bandbreite an Stilen bietet, als derzeit im Web üblich ist (oder tatsächlich allein aus Leistungsgründen praktikabel ist).

#### Eine Anmerkung zu Schriftfamilien, Gewichtungen und Varianten

Vielleicht ist Ihnen aufgefallen, dass wir davon sprechen, eine spezifische Schriftdatei für jede Gewichts- und Stilrichtung (z.B. fett und kursiv und fett kursiv) zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichtungen und Kursivschnitte haben, die oft völlig unterschiedliche Zeichen enthalten (beispielsweise sind Kleinbuchstaben 'a' und 'g' in Kursiv oft ganz anders). Um das Schriftbilddesign am genauesten widerzuspiegeln und Unterschiede zwischen Browsern und der Art, wie sie verschiedene Stile möglicherweise synthetisieren oder nicht, zu vermeiden, ist es genauer, die spezifischen Schriftdateien zu laden, wo sie benötigt werden, wenn Sie eine nicht-variable Schrift verwenden.

Sie werden vielleicht auch feststellen, dass einige variable Schriftarten in zwei Dateien aufgeteilt kommen: eine für die Stehenden und alle ihre Variationen, und eine, die die kursiven Variationen enthält. Dies wird manchmal getan, um die Gesamtdateigröße zu reduzieren, falls die Kursiven nicht benötigt oder verwendet werden. In allen Fällen ist es immer noch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie über dieselbe `font-family` und den entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der "Variationsachse"

Das Herzstück des neuen variablen Schriftformat ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses besonderen Aspekts des Schriftbilddesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'kursiv Achse' beschreibt, ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Gewichtung könnte von 1–999 reichen, während kursiv 0 oder 1 (aus oder an) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Neigung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie den bestehenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftdesigner kann jede beliebige Achse definieren und beschreiben, er muss ihr nur ein vierstelliges **Tag** geben, um sie im Schriftsystem selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den folgenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Syntax auf niedrigerer Ebene enthalten. Die Syntax auf niedrigerer Ebene ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, um die frühen Implementierungen der Unterstützung variabler Schriftarten zu testen und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Das W3C beabsichtigte jedoch, dass diese Syntax nicht verwendet wird, wenn andere Attribute vorhanden sind. Daher sollte, wenn möglich, das entsprechende Attribut verwendet werden, wobei die Syntax auf niedrigerer Ebene von `font-variation-settings` nur verwendet wird, um Werte oder Achsen festzulegen, die sonst nicht verfügbar sind.

#### Anmerkungen

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen groß-/kleinschreibungssensitiv sind. Die registrierten Achsennamen müssen in Kleinbuchstaben sein, während benutzerdefinierte Achsen in Großbuchstaben sein müssen. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (weight) ist eine registrierte Achse, und `GRAD` (grade) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle von ihnen erneut festlegen (genauso wie beim Setzen von OpenType-Schriftmerkmalen mit {{cssxref("font-feature-settings")}}). Sie können dieses Limit umgehen, indem Sie [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer einzelnen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewichtung

Gewichtung (repräsentiert durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Schon lange besteht in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` akzeptiert, die Aliase für ihre entsprechenden numerischen Werte (400 und 700 in diesem Fall) sind. Diese werden weiterhin angewendet, wenn man mit nicht-variablen oder variablen Schriftarten umgeht, aber mit variablen sind nun alle Zahlen von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schrift einem Schlüsselwort wie `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies kann in der Regel relativ einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Der folgende live Beispielcode des CSS kann geändert werden, um mit den Werten für Schriftgewichtungen zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Breite

Breite (repräsentiert durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS unter Verwendung der {{cssxref("font-stretch")}}-Eigenschaft festgelegt, mit Werten, die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, wobei grundsätzlich jede Zahl größer als 0 technisch gültig ist—obwohl es weit wahrscheinlicher ist, dass der Bereich näher an den 100%-Mark fällt, wie 75%-125%. Wenn ein zu hoher oder zu niedriger Zahlenwert angegeben wird, rendert der Browser die Schrift bei dem nächstgelegenen zulässigen Wert.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` verwendet wird.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Der folgende live Beispielcode des CSS kann geändert werden, um mit den Schriftbreitenwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### Kursiv

Die kursiv (`ital`) Achse kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halbwegs kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns beinhalten oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, so dass beim Übergang von aufrecht zu kursiv mehrere Glyphen- (oder Zeichen-) Ersetzungen im Allgemeinen auftreten. Kursiv und oblique werden häufig austauschbar verwendet, sind aber in Wahrheit ziemlich verschieden. Oblique wird in diesem Kontext mit dem Begriff `slant` definiert (siehe den folgenden Abschnitt), und eine Schrift würde typischerweise eine oder andere haben, aber nicht beide.

In CSS werden sowohl kursiv als auch oblique auf Text über die {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — was verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann verwendet werden, um auch Faux-Fett zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Der folgende live Beispielcode des CSS kann geändert werden, um mit den Schriftkursivwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### Neigung

Neigung (repräsentiert durch das `slnt`-Tag), oder wie es oft genannt wird, 'oblique' — unterscheidet sich von echter Kursivschrift dadurch, dass es den Winkel der Buchstabenformen ändert, jedoch keine Art von Zeichenersetzung durchführt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, die Schrift entlang der Neigungsachse zu variieren. Der zulässige Bereich liegt von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind gleich:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die `font-style`-Eigenschaft gegenüber der `font-variation-settings`-Eigenschaft. Das `deg` Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings`-Eigenschaft verwendet wird. Auch im Fall der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel eine gegen den Uhrzeigersinn geneigte Neigung.

Im folgenden live Beispiel können Sie die Neigung anpassen.

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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschriftarten. Optische Größenanpassung bezieht sich auf die Praxis, die allgemeine Strichstärke der Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie etwa ein Äquivalent zu 10 oder 12px), hätten die Zeichen eine insgesamt dickere Linie und möglicherweise andere kleine Anpassungen, um sicherzustellen, dass sie in kleinerer physischer Größe reproduziert und lesbar wären. Umgekehrt würde bei einer viel größeren Größe (wie 48 oder 60px) eine viel stärkere Variation in der Strichstärke zeigen, was das Schriftbild mehr im Einklang mit der ursprünglichen Absicht zeigt.

Obwohl dies ursprünglich dazu gedacht war, die Qualität des Druckverfahrens mit Tinte und Papier auszugleichen (sehr dünne Linien in kleinen Größen wurden oft nicht gedruckt, was den Buchstabenformen ein gebrochenes Aussehen gab), übersetzt es sich gut auf digitale Anzeigen, wenn es darum geht, die Qualität des Bildschirms und die physische Größenwiedergabe auszugleichen.

Optische Größenwerte sollen in der Regel automatisch entsprechend der `font-size` angewendet werden, können aber auch mit der Syntax auf niedrigerer Ebene `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das zur Unterstützung variabler Schriftarten in CSS erstellt wurde. Bei der Verwendung von `font-optical-sizing` sind die einzigen erlaubten Werte `auto` oder `none` — so erlaubt dieser Schalter lediglich ein Ein- oder Ausschalten der optischen Größenanpassung. Allerdings können Sie, wenn Sie `font-variation-settings: 'opsz' <num>` verwenden, einen numerischen Wert angeben. In den meisten Fällen würden Sie die `font-size` (gewöhnlich die physische Größe, in der die Schrift gerendert wird) mit dem `opsz`-Wert (was der Wert ist, wie optische Größenanpassung beabsichtigt ist, wenn `auto` verwendet wird) abgleichen wollen. Die Möglichkeit, einen spezifischen Wert anzugeben, ist gegeben, so dass, sollte es notwendig sein, den Standardwert zu überschreiben — aus Gründen der Lesbarkeit, Ästhetik oder einem anderen Grund — ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Der folgende live Beispielcode des CSS kann geändert werden, um mit den optischen Größenwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Benutzerdefinierte Achsen

Benutzerdefinierte Achsen sind genau das: sie können jede Achse des Designvariationen sein, die sich der Schriftdesigner vorstellt. Es könnte einige geben, die durchaus häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grade

Grade könnte eine der häufigeren benutzerdefinierten Achsen werden, da sie eine bekannte Geschichte im Schriftdesign hat. Die Praxis, verschiedene Grade eines Schriftbilds zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik durchgeführt. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftdesigns, unterscheidet sich aber von traditionellem 'Gewicht' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrads den gesamten Layout des Textes oder der umliegenden Elemente nicht ändert. Das macht Grade zu einer nützlichen Variationsachse, da es variiert oder animiert werden kann, ohne ein Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Der folgende live Beispielcode des CSS kann geändert werden, um mit den Schriftgradwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Verwendung einer variablen Schrift: Veränderungen bei @font-face

Die Syntax zum Laden variabler Schriftarten ist sehr ähnlich wie jede andere Webschrift, mit einigen bemerkenswerten Unterschieden, die über Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax jetzt in modernen Browsern verfügbar sind.

Die grundlegende Syntax ist die gleiche, aber die Schriftarttechnologie kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt nach dem Namen der zu ladenden Schriftdatei zu benennen.

#### Beispiel für eine normale aufrechte (römische) Schriftart

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

In diesem Fall gibt der Wert `normal` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft `normal` ist. Die Werte `oblique 0deg` und `oblique 0deg 20deg` geben, aufgrund des `0deg`, auch an, dass die Schrift normale aufrechte Glyphen enthält.

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

In diesem Fall zeigt der Wert `italic` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft `italic` ist. Der Wert `oblique 14deg` zeigt auch an, dass die Schrift kursive Glyphen hat.

#### Beispiel für eine Schrift, die eine oblique (Schräg-) Achse enthält

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

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden soll, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style)-Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für Schriftformate implementiert, daher sollten Sie sorgfältig testen. Alle Browser, die variable Schriftarten unterstützen, werden diese immer noch rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt auf Variationsformate (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` lässt den Browser nicht versuchen, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), aber es wird Sie nicht daran hindern, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie dies mit Bedacht.

## Arbeiten mit älteren Browsern

Die Unterstützung variabler Schriftarten kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, variable Schriftarten in der Produktion zu verwenden und das CSS, das die variablen Schriftarten aufruft, innerhalb eines Feature-Abfrageblocks zu kapseln.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenfolge festzulegen und zeigt, wie Sie einzelne Variableneinstellungen einfacher aktualisieren können, indem Sie statt der Neuschreibung der gesamten Zeichenfolge eine einzelne Variable überschreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Gradachsen-Custom-Property-Wert ändert.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Ressourcen

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (Editor's Draft)
- [W3C GitHub Issue Queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Website, die Ihnen zeigt, was Ihre Schriftart über eine einfache Drag-and-Drop-Inspektionsschnittstelle machen kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die originale variable Schriftarten-Spielwiese)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog variabler Schriftarten und wo man sie erhält)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielplatz für variable Schriftarten mit einigen sehr einzigartigen Ansätzen zur Benutzeroberfläche)
