---
title: Leitfaden für Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartenspezifikation, die es ermöglicht, viele verschiedene Variationen einer Schriftart in einer einzigen Datei zu integrieren, anstatt eine separate Schriftartendatei für jede Breite, Gewicht oder Stil zu haben. Sie ermöglichen Ihnen den Zugriff auf alle Variationen, die in einer bestimmten Schriftartendatei enthalten sind, über CSS und eine einzige {{cssxref("@font-face")}}-Referenz. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass es auf dem neuesten Stand ist. Beispielsweise benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts weder auf Webseiten noch in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei Variable Fonts anders ist, lohnt es sich, sich anzusehen, wie nicht-variable Fonts aussehen und wie sie im Vergleich sind.

### Standard- (oder Statische) Fonts

In der Vergangenheit wurde eine Schriftart als mehrere einzelne Fonts produziert, wobei jeder Font eine bestimmte Breite/Gewicht/Stilkombination darstellte. So hatten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' - was bedeutete, dass Sie am Ende 20 oder 30 verschiedene Font-Dateien haben konnten, um eine vollständige Schriftart darzustellen (es könnte mehrere Male so viel sein für eine große Schriftart, die auch unterschiedliche Breiten hat).

In einem solchen Szenario bräuchten Sie für die typische Verwendung einer Schriftart auf einer Website für Fließtext mindestens vier Dateien: regular, italic, bold, und bold italic. Wenn Sie mehr Gewichte hinzufügen wollten, wie ein leichteres für Bildunterschriften oder ein schwereres für zusätzliche Betonung, bräuchte das mehrere weitere Dateien. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (in der Regel etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können alle diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als ein einzelner Font, aber in den meisten Fällen kleiner oder ungefähr so groß wie die 4, die Sie für Fließtext laden könnten. Der Vorteil der Wahl des Variable Fonts ist, dass Sie Zugriff auf das gesamte Spektrum der verfügbaren Gewichte, Breiten und Stile haben, anstatt auf die wenigen beschränkt zu sein, die Sie zuvor separat geladen hätten.

Dies ermöglicht typografische Techniken wie das Setzen unterschiedlich großer Überschriften in unterschiedlichen Gewichten, um die Lesbarkeit bei jeder Größe zu verbessern, oder das Verwenden einer leicht schmaleren Breite für datenintensive Anzeigen. Zum Vergleich: In einem typografischen System für ein Magazin ist es typisch, 10-15 oder mehr verschiedene Kombinationen von Gewichten und Breiten im gesamten Druckerzeugnis zu verwenden — was eine viel breitere Palette an Stilen bietet als derzeit im Web typisch (oder in der Tat nur aus Leistungsgründen praktisch).

#### Eine Anmerkung zu Schriftfamilien, Gewichten und Varianten

Vielleicht haben Sie bemerkt, dass wir davon gesprochen haben, für jedes Gewicht und jeden Stil (z.B. fett und kursiv und fett kursiv) eine spezifische Font-Datei zu haben, anstatt sich darauf zu verlassen, dass der Browser sie synthetisiert. Der Grund dafür ist, dass die meisten Schriftarten sehr spezifische Designs für fettere Gewichte und Kursivschriften haben, die oft völlig unterschiedliche Zeichen enthalten (das Kleinbuchstabe 'a' und 'g's sind zum Beispiel in der Kursivschrift oft ganz anders). Um das Design der Schriftart möglichst genau wiederzugeben und Unterschiede zwischen Browsern und deren Fähigkeit oder Unfähigkeit, die verschiedenen Stile zu synthetisieren, zu vermeiden, ist es genauer, die spezifischen Font-Dateien dort zu laden, wo sie benötigt werden, wenn Sie eine nicht-variable Schriftart verwenden.

Sie werden möglicherweise auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für die aufrechten und alle ihre Variationen und eine, die die kursiven Variationen enthält. Dies wird manchmal gemacht, um die Gesamtgröße der Datei zu reduzieren, wenn die Kursivschriften nicht benötigt oder verwendet werden. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit demselben `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung in die 'Variationsachse'

Das Herzstück des neuen Variable-Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses bestimmten Aspekts des Schriftartendesigns beschreibt. So beschreibt die 'Gewichtsachse', wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse', wie schmal oder wie breit sie sein können; die 'Kursivachse', ob kursive Buchstabenformen vorhanden sind und entsprechend ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Auswahl sein kann. Das Gewicht könnte von 1–999 reichen, während Kursiv 0 oder 1 (aus oder an) sein könnte.

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind diejenigen, die am häufigsten vorkommen und häufig genug sind, dass die Autoren der Spezifikation es für wert hielten, sie zu standardisieren. Die fünf derzeit registrierten Achsen sind Gewicht, Breite, Schrägstellung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie auf bestehende CSS-Attribute abzubilden und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftartendesigner kann jede Achse definieren und festlegen, die er möchte, und muss ihr nur einen vierstelligen **Tag** geben, um sie im Fontdateiformat selbst zu identifizieren. Sie können diese vierstelligen Tags in CSS verwenden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den unten gezeigten Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt zeigen wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die Low-Level-Syntax enthalten. Die Low-Level-Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Variablen-Font-Unterstützung zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Jedoch war die Absicht des W3C, dass diese Syntax nicht verwendet werden sollte, wenn andere Attribute verfügbar sind. Deshalb sollte, wo immer möglich, die entsprechende Eigenschaft verwendet werden, mit der Low-Level-Syntax von `font-variation-settings`, die nur verwendet werden sollte, um Werte oder Achsen zu setzen, die anders nicht verfügbar sind.

#### Anmerkungen

1. Beim Verwenden von `font-variation-settings` ist darauf zu achten, dass Achsnamen case-sensitive sind. Die Namen der registrierten Achsen müssen in Kleinbuchstaben, und benutzerdefinierte Achsen in Großbuchstaben geschrieben werden. Zum Beispiel:

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (Gewicht) ist eine registrierte Achse, und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` gesetzt haben und einen dieser Werte ändern möchten, müssen Sie alle erneut deklarieren (ähnlich wie bei der Setzung von OpenType Schriftarteneigenschaften mit {{cssxref("font-feature-settings")}}). Diese Einschränkung kann durch die Verwendung von [CSS-Custom-Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte und das Modifizieren des Werts einer individuellen benutzerdefinierten Eigenschaft umgangen werden. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch den `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen) die Striche der Buchstabenformen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die Eigenschaft {{cssxref("font-weight")}} anzugeben, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` nimmt, die Aliase für ihre entsprechenden numerischen Werte (400 und 700 in diesem Fall) sind. Diese werden nach wie vor angewendet, unabhängig davon, ob es sich um nicht-variable oder variable Fonts handelt, aber bei variablen gibt es jetzt keine Beschränkung zwischen 1 und 1000.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit gibt, in der `@font-face`-Deklaration einen spezifischen Punkt auf der Variationsachse eines Variable Fonts mit dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zu 'mappen'. Dies kann im Allgemeinen recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Das folgende Live-Beispiel kann bearbeitet werden, um mit den font-weight-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Breite

Breite (dargestellt durch den `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) Buchstabenformen sein können. Dies wird in CSS typischerweise mittels der Eigenschaft {{cssxref("font-stretch")}} eingestellt, wobei die Werte als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, jede Zahl größer als 0 ist technisch gesehen gültig — obwohl es weitaus wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie z. B. 75%-125%. Wenn ein Zahlenwert außerhalb des im Font kodierten Bereichs angegeben wird, sollte der Browser den Font mit dem nächstgelegenen erlaubten Wert rendern.

> [!NOTE]
> Das %-Symbol wird nicht bei der Verwendung von `font-variation-settings` verwendet.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

Das folgende Live-Beispiel kann bearbeitet werden, um mit den font-width-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### Kursiv

Die Kursivachse (`ital`) kann im Bereich `[0-1]` eingestellt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "vollständig kursiv" angibt. Kursiv-Designs umfassen häufig ganz andere Buchstabenformen als ihre aufrechten Gegenstücke, sodass beim Übergang von aufrecht zu kursiv in der Regel mehrere Glyphe- (oder Zeichen-)Ersetzungen vorgenommen werden. Kursiv und schräg werden oft etwas austauschbar verwendet, sind aber in Wahrheit ganz unterschiedlich. Schräge wird in diesem Zusammenhang mit dem Begriff `slant` definiert (siehe untenstehender Abschnitt), und eine Schriftart hätte typischerweise eines oder das andere, aber nicht beides.

In CSS werden sowohl kursiv als auch schräg auf Text mit der Eigenschaft {{cssxref("font-style")}} angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — diese verhindert, dass Browser versehentlich die Variationsachse und eine synthetische Kursivschrift anwenden. Dies kann verwendet werden, um auch das falsche Fetten zu verhindern.

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

Das folgende Live-Beispiel kann bearbeitet werden, um mit den Kursivschriftwerten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### Schräge

Schräge (dargestellt durch den `slnt`-Tag) oder, wie es oft bezeichnet wird, 'oblique' — unterscheidet sich von echten Kursivschriften darin, dass es den Winkel der Buchstabenformen ändert, aber keine Art von Zeichenersetzung vornimmt. Es ist auch variabel, in dem Sinne, dass es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, den Font überall entlang der Schrägehenachse zu variieren. Der erlaubte Bereich liegt zwischen -90 und 90 Grad.

Die beiden Eigenschaften, die die Schräge steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden beiden Eigenschaftsdeklarationen sind identisch:

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

Bevorzugen Sie die Eigenschaft `font-style` vor der `font-variation-settings`-Eigenschaft. Das Schlüsselwort `deg` wird nicht verwendet, wenn Sie die Eigenschaft `font-variation-settings` verwenden. Auch im Fall der `font-variation-settings`-Eigenschaft bedeutet ein positiver Winkel ein gegen den Uhrzeigersinn gerichtetes Kippen.

Im folgenden Live-Beispiel können Sie die Schräge anpassen.

```html hidden
<div>
  <p class="font-style">Schräge</p>
  <span>(font-style: oblique 5deg)</span>
</div>
<div>
  <p class="font-variation">Schräge</p>
  <span>(font-variation-settings: 'slnt' -5)</span>
</div>
<div class="adjustable-box">
  <p class="adjustable">Schräge</p>
  (font-variation-settings: 'slnt' <span id="angle-text">-5</span>)<br />

  <label for="slant-angle">Schräge anpassen: </label>
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

Dies ist etwas Neues für digitale Schriftarten und CSS, aber eine jahrhundertealte Technik beim Entwerfen und Erstellen von Metallschriften. Optisches Größen beschreibt den Vorgang, die Gesamtdicke der Striche von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie ein Äquivalent zu 10 oder 12px), hatten die Zeichen einen insgesamt dickeren Strich, und vielleicht noch andere kleine Modifikationen, um sicherzustellen, dass sie reproduzierbar sind und bei einer physisch kleineren Größe lesbar sind. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60px), könnte es viel größere Abweichungen in den dicken und dünnen Strichgewichten geben, die das Schriftartendesign mehr in Übereinstimmung mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich getan wurde, um den Druckprozess mit Tinte und Papier auszugleichen (sehr dünne Linien bei kleinen Größen druckten oft nicht, was den Buchstabenformen ein zerbrochenes Aussehen gab), passt es gut zu digitalen Anzeigen, wenn es darum geht, die Bildschirmqualität und die physikalische Größenwiedergabe auszugleichen.

Optische Größenwerte sind im Allgemeinen dazu gedacht, automatisch entsprechend der `font-size` angewendet zu werden, können aber auch mit der Low-Level-Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das zur Unterstützung von Variable Fonts in CSS erstellt wurde. Bei Verwendung von `font-optical-sizing` sind nur die Werte `auto` oder `none` zulässig - dieses Attribut ermöglicht es also nur, die optische Größenanpassung ein- oder auszuschalten. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen würden Sie die `font-size` (die physische Größe, die der Text gerendert wird) mit dem `opsz`-Wert abstimmen (das ist, wie die optische Größenanpassung angewendet werden sollte, wenn `auto` verwendet wird). Die Möglichkeit, einen spezifischen Wert anzugeben, wird bereitgestellt, sodass, falls es notwendig sein sollte, die Standardeinstellung aus Gründen der Lesbarkeit, Ästhetik oder aus einem anderen Grund zu überschreiben, ein spezifischer Wert angewendet werden kann.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

Das folgende Live-Beispiel kann bearbeitet werden, um mit den Werten für die optische Größe zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Benutzerdefinierte Achsen

Benutzerdefinierte Achsen sind genau das: sie können jede Achse von Designvariationen sein, die sich der Schriftartendesigner vorstellen kann. Es könnte einige geben, die ziemlich üblich werden - oder sogar registriert werden - aber nur die Zeit wird es zeigen.

### Grad

Der Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftartendesign hat. Die Praxis, verschiedene Grade einer Schriftart zu entwerfen, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik gemacht. Der Begriff 'Grad' bezieht sich auf das relative Gewicht oder die Dichte des Schriftartendesigns, unterscheidet sich jedoch von traditionellem 'Gewicht', da der physische Raum, den der Text einnimmt, sich nicht ändert, sodass das Ändern des Textgrades das Gesamtlayout des Textes oder der Elemente darum nicht beeinflusst. Dies macht den Grad zu einer nützlichen Variationsachse, da er variieren oder animiert werden kann, ohne einen Reflow des Textes selbst zu verursachen.

```css
font-variation-settings: "GRAD" 88;
```

Das folgende Live-Beispiel kann bearbeitet werden, um mit den font-grade-Werten zu experimentieren.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Verwendung eines Variable Fonts: Änderungen bei @font-face

Die Syntax zum Laden von Variablen-Fonts ist der für andere Web-Schriften sehr ähnlich, mit einigen bemerkenswerten Unterschieden, die durch Upgrades der traditionellen {{cssxref("@font-face")}}-Syntax, die jetzt in modernen Browsern verfügbar ist, bereitgestellt werden.

Die grundlegende Syntax ist die gleiche, aber die Schriftartentechnologie kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können bereitgestellt werden, statt sie nach der geladenen Schriftartendatei zu benennen.

#### Beispiel für eine Standard-Upright-Schriftart

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}
```

In diesem Fall gibt der Wert `normal` an, dass diese Schriftartendatei verwendet werden sollte, wenn in einer Stilregel die Eigenschaft `font-family` auf `MyVariableFontName` gesetzt ist und die Eigenschaft [font-style](/de/docs/Web/CSS/font-style) `normal` ist. Die Werte `oblique 0deg` und `oblique 0deg 20deg` bedeuten ebenfalls, dass die Schrift normale aufrechte Glyphen hat.

#### Beispiel für eine Schriftart, die nur Kursivschriften und keine aufrechten Zeichen enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: italic;
}
```

In diesem Fall gibt der Wert `italic` an, dass diese Schriftartendatei verwendet werden sollte, wenn in einer Stilregel die Eigenschaft `font-family` auf `MyVariableFontName` und die Eigenschaft [font-style](/de/docs/Web/CSS/font-style) `italic` ist. Der Wert `oblique 14deg` gibt ebenfalls an, dass die Schrift kursive Glyphen hat.

#### Beispiel für eine Schriftart, die eine Schrägachse enthält

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/myvariablefont.woff2") format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 12deg;
}
```

In diesem Fall gibt der Wert `oblique 0deg 12deg` an, dass diese Schriftartendatei verwendet werden sollte, wenn in einer Stilregel die Eigenschaft `font-family` auf `MyVariableFontName` und die Eigenschaft [font-style](/de/docs/Web/CSS/font-style) auf oblique mit einem Winkel zwischen null und 12 Grad inklusiv ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftartenformat implementiert, daher sollten Sie gründlich testen. Alle Browser, die Variable Fonts unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt format-variations (z.B. `woff2` statt `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Bereitstellen von Wertebereichen für `font-weight`, `font-stretch` und `font-style` hält den Browser davon ab, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut (z.B.`font-weight` oder `font-stretch`) verwenden, wird Sie jedoch nicht daran hindern, über `font-variation-settings` einen ungültigen Wert zu liefern, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung von Variablen-Fonts kann mit CSS-Feature-Abfragen überprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variablen-Fonts in der Produktion zu verwenden und das CSS, das die Variablen-Fonts aufruft, innerhalb eines Feature-Abfrageblocks zu platzieren.

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

Die folgenden Beispielseiten zeigen zwei verschiedene Strukturen Ihres CSS. Das erste Beispiel verwendet die Standardattribute, wann immer möglich. Das zweite Beispiel verwendet CSS-Custom-Properties, um Werte für einen `font-variation-settings`-String festzulegen und zeigt, wie Sie einzelvariable Werte einfacher aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt den gesamten String neu zu schreiben. Beachten Sie den Hover-Effekt bei den `h2`, der nur den Custom-Property-Wert der Achse Grad ändert.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Ressourcen

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4/) (editor's draft)
- [W3C GitHub issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen zeigen wird, was Ihre Schriftart über eine einfache Drag-and-Drop-Inspektionsoberfläche kann)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Variable Fonts Spielplatzseite)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variablen-Fonts und wo man sie bekommt)
- [Font Playground](https://play.typedetail.com/) (ein weiterer Spielbereich für Variable Fonts mit einigen sehr einzigartigen Herangehensweisen an Benutzeroberflächen)
