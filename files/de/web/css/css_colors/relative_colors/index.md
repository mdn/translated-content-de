---
title: Relative Farben verwenden
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 9e35bdfeb62dde5d8274486b53184502d28f2ddc
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es erleichtert, Komplementärfarben zu existierenden Farben zu erstellen – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und ermöglicht eine effektivere Erstellung von Farbpaletten.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Integrieren Sie eine grundlegende Farbfunktion (dargestellt durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie auswählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, vorangestellt durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein verfügbares Farbmodell verwendet, einschließlich eines Farbwertes, der in einer [CSS-Benutzerdefinierten-Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion, geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, der gleiche wie der ursprüngliche Wert oder ein Wert in Relation zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, vorangestellt durch einen Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben ist, wird er auf den Alpha-Kanalwert der _`origin-color`_ gesetzt (nicht 100%, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie in die Farbkanalkomponenten (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese werden als passend benannte Werte innerhalb der Farbfunktion verfügbar gemacht – `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. – die verwendet werden können, um neue Ausgabekanalkomponenten zu berechnen.

Lassen Sie uns die relative Farbsyntax in Aktion betrachten. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe – `red` – und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion auf Grundlage desselben Farbwertes `red` erstellt wurde:

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
  background-color: rgb(from red 200 g b / alpha);
}
```

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine entsprechende `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe als einen roten Kanal mit dem Wert `200` und grünen, blauen sowie alpha-Kanälen mit einem Wert gleich der Ursprungsfarbe definiert (sie verwendet die innerhalb der Funktion vom Browser bereitgestellten `g`- und `b`-Werte, die beide gleich `0` sind, und das `alpha` ist `100%`).

Dies führt zu einem Ausgabewert von `rgb(200 0 0)` – ein leicht dunkleres Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) spezifiziert, wäre die resultierende Ausgabefarbe genau gleich dem Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht – `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe als erstes die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert, der mit der verwendeten Farbfunktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Die Berechnungen werden relativ zur verwendeten Farbfunktion durchgeführt, der tatsächliche Ausgabefarbwert hängt jedoch vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das vollständige Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgibt.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden relative Farbausgabewerte im gleichen Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Alle folgenden Zeilen erzeugen eine äquivalente Ausgabefarbe:

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

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den in der Funktion verfügbaren, zerlegten Ursprungsfarbkanalwerten und den vom Entwickler festgelegten Kanalausgabewerten.

Noch einmal: Wenn eine relative Farbe definiert wird, stehen die Ursprungsfarbkanalwerte in der Funktion zur Verfügung, um bei der Definition der Kanalausgabewerte für die Ausgabefarbe verwendet zu werden. Im folgenden Beispiel wird eine relative Farbe mit einer `rgb()`-Funktion definiert und die Ursprungsfarbkanalwerte (verfügbar gemacht als `r`, `g` und `b`) werden für die Kanalausgabewerte verwendet, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn man jedoch die Ausgabewerte spezifiziert, muss man die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Man muss die Kanalausgabewerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel, wenn Sie möchten, könnten Sie absolute Werte angeben wie die unten gezeigten, um `red` in `blue` zu verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe, die nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Es ist unwahrscheinlich, dass Sie dies jemals in einer echten Codebasis tun würden und würden wahrscheinlich einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie _dies_ mit der relativen Farbsyntax tun können, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingangswert und liefert eine hellgraue Farbe – die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Ursprungsfarbkanalwerte für die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben definiert, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden – [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die zur verwendeten Funktion passen.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachstmögliche, bei dem die Kanalausgabewerte der Ausgabefarbe genau den Kanalausgabewerten der Ursprungsfarbe entsprechen:

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

Es ist nochmals erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Das bietet erneut eine hohe Flexibilität. Im Allgemeinen sind Sie nicht interessiert und wissen vielleicht nicht einmal, in welchem System die Ursprungsfarbe definiert ist (es könnte sich nur um einen [Wert einer benutzerdefinierten Eigenschaft](#verwenden_von_benutzerdefinierten_eigenschaften) handeln, den es zu manipulieren gilt). Sie wollen einfach eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Benutzerdefinierten-Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind, sowohl für die Ursprungsfarbe als auch in den Definitionswerten der Ausgabefarbkanäle. Lassen Sie uns ein Beispiel betrachten.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe – `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Marken-Transparenzwert, den wir auf halbtransparente Boxen anwenden möchten – `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines wird mit einer absoluten Farbe versehen – unserem `--base-color` Markenlila. Das andere erhält eine relative Farbe, die unserem Markenlila entspricht, transformiert, um einen Alpha-Kanal mit einem Wert unserer Standarddeckung hinzuzufügen.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Verwendung von mathematischen Funktionen

Sie können CSS-[Mathefunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Kanäle der Ausgabefarbe zu berechnen. Lassen Sie uns ein Beispiel betrachten.

Der unten was ver\*ist CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` mit aufgehellten und abgedunkelten Varianten dieser Basisfarbe definiert werden. Diese Varianten werden mithilfe relativer Farben definiert – die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal durch eine `calc()`-Funktion modifiziert, um den gewünschten Effekt zu erzielen. Die hellere Farbe hat eine Erhöhung des Helligkeitskanals um 20%, die dunklere Farbe eine Verringerung desselben um 20%.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Manipulation des Alpha-Kanals

Dieses Beispiel zeigt, wie der Alpha-Kanal einer benannten Farbe geändert wird. Hier haben wir ein Element, das in einem Container mit einem `teal`-Hintergrund verpackt ist. Um zwischen den Hintergründen zu unterscheiden, ändern wir den Alpha-Kanalwert mithilfe der relativen Farb-Funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*).

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

Der Alpha-Kanal wird mit dem `alpha`-Keyword referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanalwert, indem `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0.3` kleiner als `1.0` ist.

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte werden auf `<number>`-Werte aufgelöst

Um die Kanalwertberechnungen in relativen Farben arbeiten zu lassen, werden alle Ursprungsfarbkanalwerte auf geeignete {{cssxref("&lt;number&gt;")}}-Werte aufgelöst. Zum Beispiel in den `lch()`-Beispielen oben, berechnen wir neue Helligkeitswerte, indem wir Zahlen zu dem `l`-Kanalwert der Ursprungsfarbe addieren oder von ihm subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu machen, würde das zu einer ungültigen Farbe führen – `l` ist ein `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` spezifiziert wurden, werden auf `<number>`-Werte umgerechnet, die für die Ausgabefarb-Funktion geeignet sind.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel spezifiziert wurden, werden auf eine Anzahl von Grad in einem Bereich von `0` bis `360` einschließlich umgerechnet.

Prüfen Sie die unterschiedlichen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, auf welche ihre Ursprungsfarbkanalwerte umgerechnet werden.

## Überprüfung der Browser-Kompatibilität

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}} Anweisung laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele finden, die die Verwendung der relativen Farbsyntax in den verschiedenen Funktionsnotationstypen auf ihren speziellen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalette Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben an, die auf der gewählten Basisfarbe basieren. Die Farbpalettenoptionen sind wie folgt:

- **Komplementärfarben**: Enthält zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder in anderen Worten, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbrädern). Die zwei Farben werden als eine Basisfarbe und die Basisfarbe mit dem Farbtonkanal +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleiche Abstände um den Farbkreis herum haben. Die drei Farben werden als Basisfarbe, Basisfarbe mit dem Farbtonkanal -120 Grad und Basisfarbe mit dem Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleiche Abstände um den Farbkreis herum haben. Die vier Farben werden als eine Basisfarbe und die Basisfarbe mit dem Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben, die denselben Farbton, aber unterschiedliche Helligkeitswerte haben. Im Beispiel haben wir fünf Farben in einer monochromen Palette definiert – Basisfarbe und Basisfarbe mit dem Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit sie einfach mit JavaScript aktualisiert werden kann. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}}-Element festlegen würden, aber das MDN-Live-Beispiel entfernte es beim Rendern.
- Der Basiskolorpicker wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement eingestellt wird, wird die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert mit JavaScript eingestellt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Der Satz von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn ein neuer Wert ausgewählt wird, wird JavaScript verwendet, um eine neue Klasse im `container`-`<div>` zu setzen, um die gewählte Palette darzustellen. In dem CSS werden Nachfahrenselektoren verwendet, um die Kind-`<div>`s anzusprechen (z.B. `.comp :nth-child(1)`), sodass ihnen die richtigen Farben zugewiesen werden und die ungenutzten `<div>`-Knoten ausgeblendet werden.
- Der `container`-`<div>`, der die Kindelemente `<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine Anfangsklasse von `comp` darauf gesetzt ist, sodass die Seite ein komplementäres Farbschema anzeigt, wenn sie zuerst geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Es ist uns wichtiger, die `<div>`s in der Quellreihenfolge als den Typ des Elements anzusprechen, deshalb haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

In der letzten Regel haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) genutzt, um die ungenutzten `<div>`-Elemente in jedem Palettentyp anzusprechen, und das Setzen von [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator), um zu verhindern, dass sie gerendert werden.

Die Farben selbst beinhalten die `--base-color`, plus die von dieser `--base-color` abgeleiteten relativen Farben. Die relativen Farben nutzen die [`lch()`](/de/docs/Web/CSS/color_value/lch) Funktion – wobei die Ursprungs-`--base-color` verwendet und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal definiert wird, je nach Bedarf.

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
  --base-color: red;

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

##### Eine Anmerkung zum `@supports` Test

Im Beispiel-CSS werden Ihnen {{cssxref("@supports")}}-Blöcke auffallen, die verwendet werden, um verschiedene {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die einen früheren Entwurfsspezifikationsentwurf der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil die anfängliche Implementierung von Safari auf einer älteren Version der Spezifikation basierte, bei der Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen im Kontext aufgelöst wurden. Das bedeutete, dass Werte in einigen Fällen Einheiten benötigten, wenn Addition und Subtraktion erforderlich waren, was zu Verwirrung führte. In neueren Implementierungen werden Ursprungsfarbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aufgelöst, was bedeutet, dass Berechnungen immer mit werten ohne Einheiten durchgeführt werden.

Beachten Sie, dass der Unterstützungstest in jedem Fall mit einer beliebigen Farbdeklaration durchgeführt wird – zum Beispiel `color: lch(from red l c calc(h + 90deg))` – unabhängig davon, welchen tatsächlichen Wert wir für andere Browser variieren müssen. Beim Testen von komplexen Werten wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie überprüfen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht – der Test kommt immer als positiv zurück, unabhängig von dem Wert, der der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein Wert einer benutzerdefinierten Eigenschaft nur ungültig wird, wenn er einer ungültigen Eigenschaft (oder Teil einer ungültigen Eigenschaft) einer regulären CSS-Eigenschaft zugewiesen wird. Um dieses Problem zu lösen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript haben wir:

- Einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zu den Optionsfeldern hinzugefügt, sodass wenn eines ausgewählt ist, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Optionsfeldes, sodass die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zum Farbauswahl-Steuerelement hinzugefügt, sodass wenn eine neue Farbe ausgewählt wird, die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebis sieht wie folgt aus. Dies beginnt die Leistungsfähigkeit der relativen CSS-Farben zu zeigen – wir definieren mehrere Farben und erzeugen Paletten, die Live durch das Anpassen einer einzigen benutzerdefinierten Eigenschaft aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI Farbschema Aktualisierer

Dieses Beispiel zeigt eine Karte, die eine Überschrift und Text enthält, jedoch mit einem Twist – unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung. Wenn der Wert geändert wird, wird JavaScript verwendet, um eine `--hue` Custom Property-Wert auf den neuen Schieberegler-Wert zu setzen.

Das passt wiederum das Farbschema für die gesamte UI an:

- Der `--base-color` Wert ist eine relative Farbe mit ihrem Farbtonkanal setzbar auf den `--hue`-Wert.
- Die anderen im Design verwendeten Farben sind relative Farben basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}}-Element dient als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert werden.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement und sein {{htmlelement("label")}}.

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

Im CSS hat die `:root` ein Standardeinstellung `--hue`-Value auf ihr, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, sowie einen radialen Verlauf, der den gesamten Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe dies tun würde) und passt ihren Farbtonwert zu der im Custom Property `--hue` eingestellten Wert an.
- `--bg-color`: Eine viel leichtere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Dies wurde geschaffen, indem eine Ursprungsfarbe von `--base-color` genommen wurde und 40 zu seinem Helligkeitswert hinzugefügt wurde.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wurde durch das nehmen einer Ursprungsfarbe von `--base-color` und das hinzufügen von 180 zu seinen Farbtonwert erstellt.

Nun schauen Sie sich den Rest des CSS an und achten Sie auf alle Orte, an denen diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders.

> [!NOTE]
> Der Übersichtlichkeit halber werden nur die Teile des CSS gezeigt, die für die Verwendung von relativen Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zur Slider-Steuerung hinzu, sodass wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue` Custom Property-Wert auf die `:root` (das `<html>`-Element), das den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema eines gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, während ein einziger Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
