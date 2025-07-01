---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relativen Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein leistungsstarkes Feature, das die einfache Erstellung von Ergänzungen zu bestehenden Farben ermöglicht — wie hellere, dunklere, gesättigte, halbdurchsichtige oder invertierte Varianten — und so eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen auf und beleuchtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Schließen Sie eine grundlegende Farbfunktion (dargestellt durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. ein. Welche Sie wählen, hängt von dem Farbmodell ab, das Sie für die relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf der Ihre relative Farbe basieren soll, zuvor durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell verwendet, einschließlich eines Farbwerts in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion, schließen Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe ein.
4. Geben Sie einen Ausgabe-Wert für jeden individuellen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert, der relativ zum Kanalwert der Ursprungsfarbe ist.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, dem ein Schrägstrich (`/`) vorangestellt ist. Wenn der `alpha`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht 100 %, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie dann in die Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese stehen als geeignete Namen in der Farbfunktion zur Verfügung — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Sehen wir uns die relative Farbsyntax in Aktion an. Das untenstehende CSS wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wurde, basierend auf demselben `red`-Farbwert:

```html hidden live-sample___simple-relative-color
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden live-sample___simple-relative-color
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css live-sample___simple-relative-color
#one {
  background-color: red;
}

#two {
  background-color: rgb(from red 150 g b / alpha);
}
```

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe mit einem Rotkanal von Wert `200` und grünen, blauen und Alpha-Kanälen definiert, die denselben Wert wie die Ursprungsfarbe haben (sie verwendet die vom Browser bereitgestellten `g`- und `b`-Werte innerhalb der Funktion, die beide gleich `0` sind, und das `alpha` ist `100%`).

Dies führt zu einem Ergebnis von `rgb(200 0 0)` — ein etwas dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau gleich dem Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` äquivalent ist — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie bereits erwähnt, konvertiert der Browser beim Berechnen einer relativen Farbe zunächst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert, der mit der verwendeten Farbfunktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht so, dass der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können das gesamte Spektrum sichtbarer Farben nicht ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden als `color(srgb)` serialisiert, um diese Einschränkungen zu umgehen. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farb-Ausgabewerte im selben Syntax geschrieben wie die verwendete Farbfunktion. Beispiel: Wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb-Funktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Alle folgenden Zeilen ergeben eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red 255 0 0)
rgb(from red 255 0 0 / 1)
rgb(from red 255 0 0 / 100%)

rgb(from red 255 g b)
rgb(from red r 0 0)
rgb(from red r g b / 1)
rgb(from red r g b / 100%)

rgb(from red r g b)
rgb(from red r g b / alpha)

/* With `red`, the g and b are the same, making them interchangeable */
rgb(from red r g g)
rgb(from red r b b)
rgb(from red 255 g g)
rgb(from red 255 b b)
```

## Syntax-Flexibilität

Es gibt einen wichtigen Unterschied zwischen den im Funktionsblock bereitgestellten aufgeschlüsselten Ursprungsfarbe-Kanalwerten und den Kanalwerten, die vom Entwickler für die Ausgabefarbe festgelegt werden.

Um es noch einmal zu betonen: Wenn eine relative Farbe definiert ist, stehen die Kanalwerte der Ursprungsfarbe im Funktionsblock zur Verfügung, um die Ausgabefarbe-Kanalwerte zu definieren. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungsfarbe-Kanalwerte (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbe-Kanalwerte gar nicht verwenden. Sie müssen lediglich sicherstellen, dass die Ausgabekanalwerte in der richtigen Reihenfolge angegeben werden (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige gültige Werte für diese Kanäle sein. Dies gibt relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie beispielsweise möchten, können Sie absolute Werte wie gezeigt verwenden, um `red` in `blue` zu verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, um dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe zu erzeugen, die überhaupt nicht auf der Ursprungsfarbe basiert, erzeugen Sie keine wirkliche relative Farbe. Dies würden Sie wahrscheinlich niemals in einer echten Codebasis tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich, zu erklären, dass Sie dies mit der relativen Farbsyntax tun _können_, als Ausgangspunkt zum Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die `r`, `g` und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Ursprungsfarbe-Kanalwerte für die `r`, `g` und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Allerdings können relative Farben mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, auch wenn die Ursprungsfarbwerte unterschiedliche Namen haben, die der verwendeten Funktion entsprechen.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbe-Kanalwerte genau mit den Ursprungsfarbe-Kanalwerten übereinstimmen:

```css
/* color() with and without alpha channel */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

color(from red xyz-d50 x y z)
color(from red xyz-d50 x y z / alpha)

/* hsl() with and without alpha channel */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() with and without alpha channel */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() with and without alpha channel */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() with and without alpha channel */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() with and without alpha channel */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() with and without alpha channel */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() with and without alpha channel */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

Es sei nochmals erwähnt, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein, und vielleicht wissen Sie nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie könnten einfach einen Manipulationswert einer [benutzerdefinierten Eigenschaft](#verwendung_benutzerdefinierter_eigenschaften) haben). Sie möchten einfach eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion stecken und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Bei der Erstellung einer relativen Farbe können Sie Werte verwenden, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Definitionen der Ausgabefarbe-Kanalwerte definiert sind. Sehen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir eine benannte Farbbezeichnung, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Marken-Opazitätswert, den wir auf halbdurchsichtige Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Markenlila. Das andere erhält eine relative Farbe, die unserem Markenlila entspricht, transformiert, um einen Alphakanal hinzuzufügen, der unserem Standard-Opazitätswert entspricht.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: repeating-linear-gradient(
    45deg,
    white,
    white 24px,
    black 25px,
    black 50px
  );
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: purple;
  --standard-opacity: 0.75;
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: hwb(from var(--base-color) h w b / var(--standard-opacity));
}
```

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Verwendung mathematischer Funktionen

Sie können CSS-[Mathefunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während das linke und das rechte mit aufgehellten und abgedunkelten Varianten dieser `--base-color` versehen werden. Diese Varianten werden mithilfe relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übertragen, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt zu erzielen, über eine `calc()`-Funktion. Die aufgehellte Farbe hat 20 % zum Helligkeitskanal addiert, und die abgedunkelte Farbe hat 20 % davon subtrahiert.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}
```

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Manipulation des Alphakanals

Dieses Beispiel zeigt die Änderung des Alphakanals einer benannten Farbe. Hier haben wir ein Element, das in einen Container eingebettet ist, und beide haben einen `teal` Hintergrund. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Wert des Alphakanals unter Verwendung der relativen Farb-Funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*).

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css hidden
.container {
  padding: 60px;
}

.item {
  height: 60px;
}
```

```css
div {
  background-color: rgb(
    from teal r g b / calc(alpha * var(--alpha-multiplier))
  );
}

.container {
  --alpha-multiplier: 0.3;
}

.item {
  --alpha-multiplier: 1;
}
```

Der Alphakanal wird mit dem Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Wert des Alphakanals, indem `alpha` mit dem `--alpha-multiplier` einer benutzerdefinierten Eigenschaft multipliziert wird. Der Container erhält einen halbdurchsichtigen Hintergrund, da der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte werden auf `<number>`-Werte aufgelöst

Um Rechnungen mit Kanalwerten in relativen Farben zu ermöglichen, werden alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte aufgelöst. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe addieren oder davon abziehen. Wenn wir `calc(l + 20%)` versuchen würden, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann nicht um ein {{cssxref("&lt;percentage&gt;")}} ergänzt werden.

- Kanalwerte, die ursprünglich als `<percentage>` spezifiziert wurden, werden auf einen `<number>`-Wert aufgelöst, der für die Ausgabefarb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel spezifiziert wurden, werden auf eine Anzahl von Grad in einem Bereich von `0` bis `360` aufgelöst, einschließlich.

Überprüfen Sie die verschiedenen [Seiten zu Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, in was ihre Ursprungsfarbenskalen aufgelöst werden.

## Überprüfen der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch ein {{cssxref("@supports")}} at-rule laufen lassen.

Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele zur Demonstration der Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen finden Sie auf ihren dedizierten Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht Ihnen die Auswahl einer Grundfarbe und eines Farbpalette-Typs. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Grundfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder mit anderen Worten, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbkreisen). Die beiden Farben werden als Grundfarbe und die Grundfarbe mit Farbtonkanal +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit um den Farbkreis herum liegen. Die drei Farben werden als Grundfarbe, Grundfarbe mit Farbtonkanal -120 Grad und Grundfarbe mit Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit um den Farbkreis herum liegen. Die vier Farben werden als Grundfarbe und Grundfarbe mit Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit gleichem Farbton, aber verschiedenen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Grundfarbe und Grundfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte `--base-color`-Eigenschaft wird als Inline-`style` auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach mit JavaScript aktualisiert werden kann. Wir haben einen Initialwert von `#ff0000` (`red`) angegeben, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat dies beim Rendern entfernt.
- Der Farbwertwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die `--base-color`-benutzerdefinierte Eigenschaft mit diesem Wert über JavaScript festgelegt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Der Satz von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen ermöglicht die Auswahl eines zu generierenden Farbpaletten-Typs. Wenn hier ein neuer Wert ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container`-`<div>` festgelegt, um den gewählten Palette-Typ darzustellen. In CSS werden Nachkom-Selektoren verwendet, um die Kind-`<div>`s anzusteuern (z. B. `.comp :nth-child(1)`), so dass sie die richtigen Farben erhalten und die ungenutzten `<div>`-Knoten versteckt werden.
- Das `container`-`<div>`, das die Kind-`<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass zunächst eine Klasse `comp` darauf festgelegt ist, so dass die Seite ein komplementäres Farbschema anzeigt, wenn sie erstmalig geladen wird.

```html
<div>
  <h1>Color palette generator</h1>
  <form>
    <div id="color-picker">
      <label for="color">Select a base color:</label>
      <input type="color" id="color" name="color" value="#ff0000" />
    </div>
    <div>
      <fieldset>
        <legend>Select a color palette type:</legend>

        <div>
          <input
            type="radio"
            id="comp"
            name="palette-type"
            value="comp"
            checked />
          <label for="comp">Complementary</label>
        </div>

        <div>
          <input
            type="radio"
            id="triadic"
            name="palette-type"
            value="triadic" />
          <label for="triadic">Triadic</label>
        </div>

        <div>
          <input
            type="radio"
            id="tetradic"
            name="palette-type"
            value="tetradic" />
          <label for="tetradic">Tetradic</label>
        </div>

        <div>
          <input
            type="radio"
            id="monochrome"
            name="palette-type"
            value="monochrome" />
          <label for="monochrome">Monochrome</label>
        </div>
      </fieldset>
    </div>
  </form>
  <div id="container" class="comp">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkom-Selektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes Kind-`<div>`-Element für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>`s in der Quellreihenfolge als um den Elementtyp, so dass wir {{cssxref(":nth-child")}} verwenden, um sie anzusprechen.

Im letzten Regelblock haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Paletten-Typ anzusprechen, und `display: none` gesetzt, um deren Darstellung zu verhindern.

Die Farben selbst beinhalten die `--base-color` plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die `lch()`-Funktion — sie geben die Ursprungs-`--base-color` weiter und definieren eine Ausgabefarbe mit angepassten Helligkeits- oder Farbtonkanal je nach Bedarf.

```css hidden
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h1 {
  margin-left: 16px;
}

/* Basic form styling */

#color-picker {
  margin-left: 16px;
  margin-bottom: 20px;
}

#color-picker label,
legend {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

input[type="color"] {
  width: 200px;
  display: block;
}

fieldset {
  display: flex;
  gap: 20px;
  border: 0;
}

/* Palette container styling */

#container {
  /* Default value */
  --base-color: #ff0000;

  display: flex;
  width: 100vw;
  height: 250px;
  box-sizing: border-box;
}

#container div {
  flex: 1;
}
```

```css
/* Complementary colors */
/* Base color, and base color with hue channel +180 degrees */

.comp :nth-child(1) {
  background-color: var(--base-color);
}

.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Triadic colors */
/* Base color, base color with hue channel -120 degrees, and base color */
/* with hue channel +120 degrees */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 120deg));
  }
}

/* Tetradic colors */
/* Base color, and base color with hue channel +90, +180, and +270 degrees */

.tetradic :nth-child(1) {
  background-color: var(--base-color);
}

.tetradic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 90));
}

.tetradic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

.tetradic :nth-child(4) {
  background-color: lch(from var(--base-color) l c calc(h + 270));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 90deg))) {
  .tetradic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 90deg));
  }

  .tetradic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }

  .tetradic :nth-child(4) {
    background-color: lch(from var(--base-color) l c calc(h + 270deg));
  }
}

/* Monochrome colors */
/* Base color, and base color with lightness channel -20, -10, +10, and +20 */

.monochrome :nth-child(1) {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}

.monochrome :nth-child(2) {
  background-color: lch(from var(--base-color) calc(l - 10) c h);
}

.monochrome :nth-child(3) {
  background-color: var(--base-color);
}

.monochrome :nth-child(4) {
  background-color: lch(from var(--base-color) calc(l + 10) c h);
}

.monochrome :nth-child(5) {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

/* Hide unused swatches for each palette type */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}
```

##### Ein Exkurs zum `@supports`-Test

Im Beispiel-CSS werden Ihnen verschiedene {{cssxref("@supports")}}-Blöcke auffallen, die verwendet werden, um andere {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, da die ursprüngliche Implementierung von Safari auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbe-Kanalwerte je nach Kontext zu {{cssxref("&lt;number&gt;")}}en oder anderen Einheitstypen aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten benötigten, wenn Additionen und Subtraktionen durchgeführt wurden, was Verwirrung stiftete. In neueren Implementierungen werden Ursprungsfarbe-Kanalwerte immer auf einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aufgelöst, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall unter Verwendung einer beliebigen Farberklärung durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht notwendigerweise den tatsächlichen Wert, den wir für andere Browser variieren müssen. Beim Testen von komplexen Werten wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test fällt immer positiv aus, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einem ungültigen Wert (oder einem Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener zu den Radiobuttons hinzu, sodass, wenn einer ausgewählt wird, die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radiobuttons, sodass die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Paletten-Typ angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event) Ereignis-Listener zu dem Farbwertwähler-Steuerelement hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten `--base-color`-Eigenschaft auf die neue Farbe.

```js
const form = document.forms[0];
const radios = form.elements["palette-type"];
const colorPicker = form.elements["color"];
const containerElem = document.getElementById("container");

for (const radio of radios) {
  radio.addEventListener("change", setContainer);
}

colorPicker.addEventListener("input", setBaseColor);

function setContainer(e) {
  const palType = e.target.value;
  console.log("radio changed");
  containerElem.setAttribute("class", palType);
}

function setBaseColor(e) {
  console.log("color changed");
  containerElem.style.setProperty("--base-color", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist wie folgt. Dies beginnt, die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem ein einziger benutzerdefinierter Eigenschaftswert eingestellt wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-UI-Farbschema-Aktualisierer

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einem Twist — unterhalb der Karte befindet sich ein Schieberegler-([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue`-Wert für benutzerdefinierte Eigenschaften auf diesen neuen Schiebereglerwert einzustellen.

Dies wiederum passt das Farbschema für die gesamte UI an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal auf den `--hue`-Wert eingestellt.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn die `--base-color` geändert wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, der den Rest des Inhalts enthält und es ermöglicht, dass die Karte und das Formular vertikal und horizontal innerhalb der `<main>`-Elemente als eine Einheit zentriert werden.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement und seine {{htmlelement("label")}}.

```html
<main>
  <section>
    <h1>A love of colors</h1>
    <p>
      Colors, the vibrant essence of our surroundings, are truly awe-inspiring.
      From the fiery warmth of reds to the calming coolness of blues, they bring
      unparalleled richness to our world. Colors stir emotions, ignite
      creativity, and shape perceptions, acting as a universal language of
      expression. In their brilliance, colors create a visually enchanting
      tapestry that invites admiration and sparks joy.
    </p>
  </section>
  <form>
    <label for="hue-adjust">Adjust the hue:</label>
    <input
      type="range"
      name="hue-adjust"
      id="hue-adjust"
      value="240"
      min="0"
      max="360" />
  </form>
</main>
```

#### CSS

Im CSS ist im `:root` ein Standard-`--hue`-Wert festgelegt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, sowie ein radialer Verlauf, der den gesamten Körper ausfüllt.

Die relative Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe geeignet wäre) und passt ihren Farbtonwert an den in der `--hue`-Eigenschaft gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, gedacht als Hintergrund. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine Komplementärfarbe, die 180 Grad um den Farbkreis von `--base-color` liegt. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Schauen Sie sich nun den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies umfasst [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers.

> [!NOTE]
> Zur Veranschaulichung werden nur die für die Verwendung relativer Farben relevanten Teile des CSS gezeigt.

```css hidden
html {
  font-family: sans-serif;
}

main {
  width: 80vw;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  margin: 0;
  color: black;
  border-radius: 16px 16px 0 0;
  font-size: 3rem;
  letter-spacing: -1px;
}

p {
  line-height: 1.5;
  margin: 0;
  padding: 1.2rem;
}

form {
  width: fit-content;
  display: flex;
  margin: 2rem auto;
  padding: 0.4rem;
}
```

```css
:root {
  /* Default hue value */
  --hue: 240;

  /* Relative color definitions */
  --base-color: lch(from red l c var(--hue));
  --bg-color: lch(from var(--base-color) calc(l + 40) c h);
  --complementary-color: lch(from var(--base-color) l c calc(h + 180));

  background: radial-gradient(ellipse at center, white 20%, var(--base-color));
}

/* Use @supports to add in support for --complementary-color with old
   syntax that requires deg units to be specified in hue calculations.
   This is required for in Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  body {
    --complementary-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Box styling */

section {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 0.5);
}

h1 {
  background-color: var(--base-color);
  text-shadow:
    1px 1px 1px var(--complementary-color),
    -1px -1px 1px var(--complementary-color),
    0 0 3px var(--complementary-color);
}

/* Range slider styling */

form {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
}

input {
  accent-color: var(--complementary-color);
}
```

#### JavaScript

Das JavaScript fügt dem Schieberegler ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener hinzu, damit, wenn ein neuer Wert eingestellt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-Wert für benutzerdefinierte Eigenschaften im `:root` (dem `<html>`-Element), der den ursprünglich in unserem CSS gesetzten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, während ein einzelner Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS Relative Color Syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
