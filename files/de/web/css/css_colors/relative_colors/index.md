---
title: Verwenden relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Das [CSS Colors Modul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS {{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, Komplementärfarben zu bestehenden Farben einfach zu erstellen – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und erleichtert so die Erstellung effektiver Farbpaletten.

Dieser Artikel erklärt die relative Farbsyntax, zeigt, welche verschiedenen Optionen verfügbar sind, und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit den gleichen [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Schließen Sie eine grundlegende Farb-Funktion ein (repräsentiert durch _`color-function()`_ oben), wie zum Beispiel [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren soll, und zwar mit dem vorhergehenden Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein verfügbares Farbmodell verwendet, einschließlich eines Farbwertes, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion, geben Sie den _[`Farbraum`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert, der relativ zum Kanalwert der Ursprungsfarbe ist.
5. Optional kann ein `alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, dem ein Schrägstrich (`/`) vorausgeht. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, übernimmt er den `alpha`-Kanalwert der _`origin-color`_ (nicht 100%, was im Fall von absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farb-Funktion kompatible Syntax und zerlegt sie dann in Komponenten-Farbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farb-Funktion zur Verfügung – `r`, `g`, `b` und `alpha` im Fall der `rgb()` Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()` Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()`, usw. – die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu gestalten, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf demselben `red`-Farbwert erstellt wurde:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion, die `red` als Ursprungsfarbe nimmt, diese in eine äquivalente `rgb()` Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe definiert, indem sie einen Rotkanal mit dem Wert `200` und Grün-, Blau- und Alpakkanäle mit demselben Wert wie die Ursprungsfarbe verwendet. Es verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser zur Verfügung gestellt werden und beide gleich `0` sind, und der `alpha` ist `100%`.

Das ergibt ein Ergebnis von `rgb(200 0 0)` — ein leicht dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau gleich dem Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser beim Berechnen einer relativen Farbe zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farb-Funktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe von der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.
> - Bei neueren Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`), werden relative Farbausgabewerte im gleichen Syntaxformat der verwendeten Farb-Funktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab) Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

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

## Syntaxflexibilität

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanal-Werten, die in der Funktion verfügbar gemacht werden, und den Kanalwerten der Ausgabefarbe, die vom Entwickler festgelegt werden.

Um es zu wiederholen, wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe innerhalb der Funktion zur Verfügung, um sie bei der Definition der Ausgabekanalwerte zu verwenden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanal-Werte (zur Verfügung gestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanal-Werte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber es können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Wenn Sie zum Beispiel möchten, können Sie absolute Werte wie die unten gezeigten angeben, die `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Dies würden Sie in einem realen Code nicht tun und stattdessen wahrscheinlich einen absoluten Farbwert verwenden. Wir fanden es jedoch nützlich zu erklären, dass Sie _können_ dies mit der relativen Farbsyntax tun, als Ausgangspunkt zum Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die Ausgabefarbe hat `r`-, `g`- und `b`-Kanäle, die alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt sind:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, aber in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die zur verwendeten Funktion passen.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farb-Funktion. Jeder Fall ist das einfachste mögliche Beispiel, bei dem die Kanalwerte der Ausgabefarbe genau mit den Ursprungsfarbkanal-Werten übereinstimmen:

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

Es sei nochmals erwähnt, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem, das zur Erstellung der Ausgabefarbe verwendet wird, übereinstimmen muss. Auch dies bietet viel Flexibilität. Allgemein gesagt, sind Sie nicht an und wissen möglicherweise nicht einmal das System, in dem die Ursprungsfarbe definiert ist (Sie könnten einfach einen [Benutzerdefiniert-Wert](#verwenden_von_benutzerdefinierten_eigenschaften) zur Manipulation haben). Sie werden nur eine Farbe eingeben möchten und z.B. eine leichtere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind, sowohl für die Ursprungsfarbe als auch innerhalb der Definitionen der Ausgabefarbkanalwerte. Schauen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere grundlegende Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopa-wert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eine erhält eine absolute Farbe — unsere Markenfarbe `--base-color` purple. Die andere erhält eine relative Farbe, die gleich unserer Markenfarbe purple ist, die so transformiert wurde, dass ein Alpha-Kanal auf unseren Standard-Opazitätswert gesetzt wird.

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

## Verwendung von Mathe-Funktionen

Sie können CSS [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Kanäle der Ausgabefarbe zu berechnen. Schauen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Das mittlere Element erhält eine unmodifizierte `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden mit relativen Farben definiert — `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt mittels einer `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

## Manupulation des Alpha-Kanals

Dieses Beispiel zeigt das Ändern des Alpha-Kanals eines benannten Farbwertes. Hier haben wir ein Element, das in einem Container umhüllt ist, beide mit einem `teal` Hintergrund. Um die Hintergründe zu unterscheiden, variieren wir den Alpha-Kanal-Wert mithilfe der relativen Farb-Funktion, der [`calc()` Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*).

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

Der Alpha-Kanal wird mit dem Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanal-Wert, indem er `alpha` mit dem `--alpha-multiplier` benutzerdefinierten Eigenschaftswert multipliziert. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>` Werte auf

Um Kanalanwertsberechnungen in relativen Farben zu ermöglichen, werden alle Ursprungsfarbkanalwerte in geeignete {{cssxref("&lt;number&gt;")}} Werte aufgelöst. Zum Beispiel, in den `lch()` Beispielen oben, berechnen wir neue Helligkeitswerte, indem wir Zahlen zu oder von dem `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren. Wenn wir versuchten, `calc(l + 20%)` zu machen, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich zu einem `<number>` Wert auf, der für die Farb-Funktion der Ausgabe geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Anzahl von Grad im Bereich von `0` bis `360`, inklusive.

Überprüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, wofür ihre Ursprungs-Farbkanalwerte aufgelöst werden.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch ein {{cssxref("@supports")}} Attribut durchlaufen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen veranschaulichen, finden Sie auf ihren speziellen Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalette-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Palettentyp auszuwählen. Der Browser zeigt dann eine passende Farbpalette basierend auf der gewählten Basisfarbe an. Die Farbpalettentypen sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders gesagt, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbrädern). Die beiden Farben werden als Basisfarbe und Basisfarbe mit Farbtonkanal +180 Grad definiert.
- **Triadisch**: Enthält drei Farben, die gleichmäßig um den Farbkreis verteilt sind. Die drei Farben werden als Basisfarbe, Basisfarbe mit Farbtonkanal -120 Grad und Basisfarbe mit Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben, die gleichmäßig um den Farbkreis verteilt sind. Die vier Farben werden als Basisfarbe, und Basisfarbe mit Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe, und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als inline [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) angegeben, um eine Farbpalette basierend auf diesem Wert zu zeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir diesen normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel es beim Rendern entfernt hat.
- Der Farbauswähler wird durch ein [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement gesetzt wird, wird der `--base-color` benutzerdefinierte Eigenschaft in diesen Wert mit JavaScript gesetzt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Menge von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerelementen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn hier ein neuer Wert ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container` `<div>` gesetzt, um die gewählte Palette darzustellen. In der CSS werden Selektoren für Nachfahren verwendet, um die kindlichen `<div>`-Elemente (z.B. `.comp :nth-child(1)`) zu targetieren, sodass ihnen die richtigen Farben zugewiesen werden und die nicht genutzten `<div>`-Knoten ausgeblendet werden.
- Das `container` `<div>`, das die kindlichen `<div>`-Elemente enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine Anfangsklasse von `comp` darauf gesetzt ist, damit die Seite ein komplementäres Farbschema anzeigt, wenn sie das erste Mal geladen wird.

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

Unten zeigen wir nur die CSS, die die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die richtige {{cssxref("background-color")}} für jedes Kind `<div>` für die gewählte Palette anzuwenden. Uns interessieren mehr die Position der `<div>`-Elemente in der Quellordnung als der Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu targetieren.

In der letzten Regel haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht genutzten `<div>`-Elemente in jedem Palettentyp zu targetieren, das Setzen von [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) stoppt sie daran, gerendert zu werden.

Die Farben selbst beinhalten die `--base-color`, sowie relative Farben, die von dieser `--base-color` abgeleitet werden. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch) Funktion — indem sie die Ursprung `--base-color` übergeben und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal definieren, wie es passend ist.

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

##### Ein Exkurs zu `@supports` Tests

Im Beispiel-CSS werden Sie {{cssxref("@supports")}} Blöcke bemerken, die verwendet werden, um verschiedenen {{cssxref("background-color")}} Werte in Browsern bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safaris anfängliche Implementierung auf einer älteren Version der Spezifikationen basierte, bei der Ursprungsfarbkanal-Werte zu {{cssxref("&lt;number&gt;")}} oder anderen Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten bei Additionen und Subtraktionen erforderten, was Verwirrung stiftete. In neueren Implementierungen lösen sich Ursprungsfarbkanal-Werte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitlichen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit irgendeiner Farbdeklaration gemacht wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht zwangsläufig dem tatsächlichen Wert, den wir für andere Browser variieren müssen. Beim Testen von komplexen Werten wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Eine benutzerdefinierte Eigenschaft in den `@supports`-Test einzuschließen funktioniert nicht — der Test gibt immer einen positiven Wert zurück, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er darauf gesetzt wird, ein ungültiger Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zu sein. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener zu den Radio-Buttons hinzu, sodass, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die korrekten Hintergrundfarben auf die kindlichen `<div>`-Elemente für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener in der Farbauswahlsteuerung hinzu, sodass beim Auswählen einer neuen Farbe die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem ein einzelner benutzerdefinierter Eigenschaftswert angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI Farbschema-Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und Text enthält, jedoch mit einem Twist — unterhalb der Karte befindet sich ein Slider-Control ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)). Wenn sein Wert geändert wird, wird JavaScript verwendet, um den Wert der benutzerdefinierten Eigenschaft `--hue` auf den neuen Schiebereglerwert zu setzen.

Dies verändert das gesamte Farbschema der UI:

- Der `--base-color` Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert der `--hue` gesetzt wird.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn `--base-color` sich ändert.

#### HTML

Das HTML für das Beispiel ist unten angezeigt.

- Das {{htmlelement("main")}}-Element dient als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal innerhalb `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerelement und ihr {{htmlelement("label")}}.

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

In der CSS hat `:root` einen Standardwert von `--hue`, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/color_value/lch) Farben, um das Farbschema zu definieren, und einen Radialverlauf, der den gesamten Body füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede vollständige Farbe ausreichen würde) und passt ihren Farbtonwert an den Wert, der in der benutzerdefinierten Eigenschaft `--hue` gesetzt ist.
- `--bg-color`: Eine viel hellere Variante der `--base-color`, die als Hintergrund verwendet werden soll. Sie wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt werden.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad im Farbkreis von `--base-color` entfernt. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt werden.

Schauen Sie sich jetzt den Rest der CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow), und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders ein.

> [!NOTE]
> Der Kürze halber werden nur die relevanten Teile des CSS gezeigt, die für die Verwendung relativer Farben von Bedeutung sind.

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

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener zur Slidersteuerung hinzu, sodass, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inlinewert der benutzerdefinierten Eigenschaft `--hue` auf dem `:root` (dem `<html>`-Element) der den ursprünglich in unserem CSS gesetzten Standardwert außer Kraft setzt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten UI zu steuern, die live angepasst werden kann, während ein Einzelwert verändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Colors](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
