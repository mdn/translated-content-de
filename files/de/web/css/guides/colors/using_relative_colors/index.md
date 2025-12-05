---
title: Verwendung relativer Farben
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das [CSS Farben-Modul](/de/docs/Web/CSS/Guides/Colors) definiert die **relative Farbsyntax**, mit der ein CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe definiert werden kann. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Ergänzungen zu bestehenden Farben ermöglicht – wie etwa hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und so die effektive Erstellung von Farbpaletten erleichtert.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen auf und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Schließen Sie eine grundlegende Farbfunktion (oben dargestellt durch _`color-function()`_) ein, wie z.B. [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), etc. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf der Ihre relative Farbe basieren soll, vorangestellt durch das Schlüsselwort `from`. Dies kann ein gültiger {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), Systemfarben, `currentColor` oder sogar eine andere relative Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion, fügen Sie den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe hinzu.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Zum Beispiel, wenn Sie [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, der gleiche wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe festgelegt werden, der durch ein Schrägstrich (`/`) vorangestellt wird. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird standardmäßig der `alpha`-Kanalwert der _`origin-color`_ verwendet (nicht 100%, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine für die Farbfunktion kompatible Syntax und zerlegt sie dann in komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen solchen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farbfunktion zur Verfügung – `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()`, etc. – die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Sehen wir uns die relative Farbsyntax in Aktion an. Der folgende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wurde und auf demselben `red`-Farbwert basiert:

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine gleichwertige `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe als rot Kanal mit dem Wert `200` und grünen, blauen sowie alpha-Kanälen mit einem Wert, der dem der Ursprungsfarbe entspricht (es verwendet die `g`- und `b`-Werte, die vom Browser innerhalb der Funktion zur Verfügung gestellt werden, und die beide gleich `0` sind, und das `alpha` ist `100%`), definiert.

Das Ergebnis ist `rgb(200 0 0)` — ein leicht abgedunkeltes Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau der gleiche wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der gleich `rgb(200 0 0)` ist — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser, wenn er eine relative Farbe berechnet, zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb Funktionen können nicht das gesamte Spektrum sichtbarer Farben darstellen. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) werden in `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als `color(srgb ...)`-Wert zurückgibt.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farb Ausgabewerte in derselben Syntax ausgedrückt wie die verwendete Farbfunktion. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Farb Funktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Alle folgenden Zeilen erzeugen eine gleichwertige Ausgabefarbe:

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

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler gesetzten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu betonen, wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um sie beim Definieren der Ausgabefarbkanalwerte zu verwenden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe derselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge bereitstellen (z. B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Wenn Sie beispielsweise möchten, könnten Sie absolute Werte wie die unten gezeigten angeben, die `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie keine wirkliche relative Farbe. Es ist unwahrscheinlich, dass Sie dies in einem realen Codebasis tun würden, und Sie würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie dies mit relativer Farbsyntax tun _können_, als Ausgangspunkt für das Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Der folgende Code nimmt ein leicht abgedunkeltes Rot als Eingabe und gibt eine hellgraue Farbe aus – die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Der folgende Code verwendet die Ursprungsfarbkanalwerte für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb Funktion definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die für die verwendete Funktion geeignet sind.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachstmögliche, mit den Ausgabefarbkanalwerten, die genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist erneut erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein und möglicherweise nicht einmal wissen, in welchem System die Ursprungsfarbe definiert ist (Sie könnten einfach einen [benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zum Manipulieren haben). Sie möchten nur eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Wenn Sie eine relative Farbe erstellen, können Sie Werte verwenden, die in [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Definitionen des Ausgabefarbkanalwerts definiert sind. Sehen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standardmarken-Opazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0,75`.

Dann geben wir zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Einer erhält eine absolute Farbe — unser Markenlila `--base-color`. Der andere erhält eine relative Farbe, die gleich unserem Markenlila ist, transformiert, um einen Alphakanal hinzuzufügen, der unserem Standardopazitätswert entspricht.

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

## Verwendung von mathematischen Funktionen

Sie können CSS-[mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Lassen Sie uns ein Beispiel ansehen.

Der folgende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten leicht aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Dieses Beispiel zeigt die Änderung des Alphakanals einer benannten Farbe. Hier haben wir ein Element, das in einen Container eingewickelt ist und beide haben einen `teal`-Hintergrund. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Alphakanalwert mit der relativen Farb Funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/Reference/Values/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alphakanal wird über das Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alphakanalwert, indem er `alpha` mit dem benutzerdefinierten Eigenschaftswert `--alpha-multiplier` multipliziert. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0,3` kleiner als `1,0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Um Kanalwert Berechnungen in relativen Farben zu ermöglichen, lösen sich alle Ursprungsfarbkanalwerte in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen vom `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren. Wenn wir versuchten, `calc(l + 20%)` zu machen, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt haben.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in einen `<number>` auf, der für die Ausgabefarbfunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel angegeben wurden, lösen sich in eine Anzahl Grad im Bereich von `0` bis `360` einschließlich auf.

Überprüfen Sie die verschiedenen [Farbfunktion Seiten](/de/docs/Web/CSS/Guides/Colors#functions) für die Spezifika, in was ihre Ursprungs Kanalwerte auflösen.

## Überprüfen der Browserunterstützung

Sie können überprüfen, ob ein Browser relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen Funktionsnotationen demonstrieren, auf ihren eigenen Seiten finden: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Palettentyp auszuwählen. Der Browser zeigt dann eine geeignete Farbpalette basierend auf der ausgewählten Basisfarbe. Die Farbpaletten-Auswahlmöglichkeiten sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die an gegenüberliegenden Seiten eines Farbkreises liegen, oder anders ausgedrückt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen über Farbtöne und Farbkreise). Die zwei Farben werden als Basisfarbe und die Basisfarbe mit +180 Grad Farbton-Kanal definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit um den Farbkreis angeordnet sind. Die drei Farben werden als Basisfarbe, Basisfarbe mit -120 Grad Farbton-Kanal und Basisfarbe mit +120 Grad Farbton-Kanal definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit um den Farbkreis angeordnet sind. Die vier Farben werden als Basisfarbe und Basisfarbe mit +90, +180 und +270 Grad Farbton-Kanal definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert – Basisfarbe und Basisfarbe mit -20, -10, +10 und +20 Helligkeitskanal.

#### HTML

Das gesamte HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte `--base-color` Eigenschaft wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert zu zeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber dass die Live-Probe von MDN es beim Rendern entfernt hat.
- Der Farbpicker der Basisfarbe wird mit einer [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerung erstellt. Wenn ein neuer Wert in dieser Steuerung festgelegt wird, wird die benutzerdefinierte `--base-color` Eigenschaft mithilfe von JavaScript auf diesen Wert gesetzt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Reihe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen ermöglicht es Ihnen, einen zu generierenden Farbpalettentyp auszuwählen. Wenn hier ein neuer Wert gewählt wird, wird JavaScript verwendet, um dem `container`-`<div>` eine neue Klasse zuzuweisen, die die gewählte Palette darstellt. Im CSS werden Nachkommen-Selektoren verwendet, um die untergeordneten `<div>`s (z.B. `.comp :nth-child(1)`) zu targetieren, damit sie die richtigen Farben erhalten und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>`, das die untergeordneten `<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass ihm eine Anfangsklasse von `comp` zugewiesen wird, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkommen-Selektoren verwendet werden, um das richtige {{cssxref("background-color")}} auf jedes untergeordnete `<div>` für die gewählte Palette anzuwenden. Uns ist die Position der `<div>`s in der Quellreihenfolge wichtiger als der Typ des Elements, sodass wir {{cssxref(":nth-child")}} verwendet haben, um sie zu targetieren.

Im letzten Regelwerk haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die nicht verwendeten `<div>`-Elemente in jedem Palettentyp zu targetieren, und setzen [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), um sie nicht rendern zu lassen.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Funktion — indem die Ursprungs-`--base-color` übergeben und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbton-Kanal definiert wird.

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

##### Ein Hinweis zum `@supports`-Test

Im Beispiel-CSS werden Sie feststellen, dass {{cssxref("@supports")}}-Blöcke verwendet werden, um verschiedenen Browsern, die eine frühere Entwurfspezifikation der relativen Farbsyntax unterstützen, unterschiedliche {{cssxref("background-color")}}-Werte bereitzustellen. Diese sind erforderlich, weil die ursprüngliche Implementierung von Safari auf einer älteren Version der Spezifikationen basierte, in der sich Ursprungsfarbkanalwerte in {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen abhängig vom Kontext auflösten. Dies bedeutete, dass Werte manchmal Einheiten benötigten, wenn sie Additionen und Subtraktionen durchführten, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit irgendeiner Farbangabe durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — und nicht notwendigerweise der tatsächliche Wert, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diesen testen, sollten Sie die einfachste mögliche Deklaration verwenden, die trotzdem den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test kommt immer als positiv zurück, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur als ungültig erkannt wird, wenn er einer ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Optionsfeldern hinzu, sodass, wenn eines ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Optionsfelds, sodass die richtigen Hintergrundfarben auf die untergeordneten `<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Farbpicker-Steuerung hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten `--base-color`-Eigenschaft auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt die Leistung der relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem wir einen einzigen benutzerdefinierten Eigenschaftswert anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI-Farbaktualisierung

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einem Twist — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert von `--hue` gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal in `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerung und ihr {{htmlelement("label")}}.

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

Im CSS hat das `:root` einen Standard-`--hue`-Wert, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farben, um das Farbschema zu definieren, sowie ein radialer Farbverlauf, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Grundfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe funktionieren würde) und passt ihren Tonwert an den in der benutzerdefinierten `--hue`-Eigenschaft festgelegten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt werden.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Tonwert hinzugefügt werden.

Schauen Sie sich nun den Rest des CSS an und achten Sie darauf, an welchen Stellen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Ränder](/de/docs/Web/CSS/Reference/Properties/border), {{cssxref("text-shadow")}}, und sogar die {{cssxref("accent-color")}} des Schiebers ein.

> [!NOTE]
> Der Übersichtlichkeit halber werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Schiebereglersteuerung hinzu, sodass, wenn ein neuer Wert festgelegt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-Benutzer Eigenschaftswert auf das `:root` (das `<html>`-Element), das den ursprünglichen Standardwert überschreibt, den wir in unserem CSS gesetzt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, während ein einziger Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
