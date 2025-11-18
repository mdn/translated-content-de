---
title: Verwenden von relativen Farben
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}} Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein leistungsstarkes Feature, das die einfache Erstellung von Ergänzungen zu bestehenden Farben ermöglicht – wie hellere, dunklere, gesättigte, halbdurchsichtige oder invertierte Varianten – und damit eine effektivere Erstellung von Farbpaletten erlaubt.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und erläutert einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben, aber mit unterschiedlichen Parametern erstellt:

1. Verwenden Sie eine grundlegende Farb-Funktion (oben dargestellt durch _`color-function()`_) wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Übergeben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basiert, und zwar vorangestellt durch das Schlüsselwort `from`. Dies kann ein beliebiger gültiger {{cssxref("&lt;color&gt;")}} Wert sein, der ein beliebiges verfügbares Farbmodell, einschließlich eines Farbwerts, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) gespeichert ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe verwendet.
3. Im Fall der [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion geben Sie den _[`Farbraum`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — oben repräsentiert durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha` Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, vorangestellt durch einen Schrägstrich (`/`). Wenn der `alpha` Kanalwert nicht explizit angegeben ist, geht er standardmäßig vom Alpha-Kanalwert der _`origin-color`_ aus (nicht 100%, was der Fall bei absoluten Farbwerten ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farb-Funktion kompatible Syntax und zerlegt sie in die Komponentenfarbkanäle (plus den `alpha` Kanal, falls die Ursprungsfarbe einen hat). Diese sind als entsprechend benannte Werte innerhalb der Farb-Funktion verfügbar — `r`, `g`, `b` und `alpha` im Fall der `rgb()` Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()` Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Schauen wir uns die relative Farbsyntax in Aktion an. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}} Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()` Funktion erstellt wurde und auf demselben `red` Farbwert basiert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()` Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe als rot Kanal mit dem Wert `200` und grüne, blaue und alpha Kanäle mit einem Wert, der identisch mit der Ursprungsfarbe ist (es verwendet die von der Browserfunktion bereitgestellten `g` und `b` Werte, die beide gleich `0` sind, und das `alpha` ist `100%`), definiert.

Dies resultiert in einer Ausgabe von `rgb(200 0 0)` — ein leicht dunkleres Rot. Wenn wir einen roten Kanalwert von `255` (oder nur den `r` Wert) angegeben hätten, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()` Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zuerst die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farb-Funktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe von der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können das vollständige Spektrum der sichtbaren Farben nicht ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als einen [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgibt.
> - Bei neueren Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte in derselben Syntax ausgedrückt, wie sie die verwendete Farb-Funktion benutzt. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()` Wert sein.

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

Es gibt eine wichtige Unterscheidung zwischen den in der Funktion bereitgestellten zerlegten Ursprungsfarbkanalwerten und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu sagen: Wenn eine relative Farbe definiert ist, werden die Kanalwerte der Ursprungsfarbe in der Funktion bereitgestellt, um sie beim Definieren der Ausgabefarbkanalwerte zu verwenden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()` Funktion und verwendet die Ursprungsfarbkanalwerte (bereitgestellt als `r`, `g`, und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Allerdings müssen beim Spezifizieren der Ausgabewerte die Ursprungsfarbkanalwerte überhaupt nicht verwendet werden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben eine hohe Flexibilität.

Zum Beispiel, wenn Sie möchten, könnten Sie absolute Werte wie die unten gezeigten angeben, wodurch `red` in `blue` umgewandelt wird:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Sie würden dies wahrscheinlich in einem echten Code nicht tun und stattdessen einfach einen absoluten Farbwert verwenden. Dennoch hielten wir es für nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax tun _können_, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die Ausgabefarbe `r`, `g`, und `b` Kanäle wurden alle auf den `r` Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`, `g`, und `b` Kanäle der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. In jedem Fall ist es das einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es lohnt sich zu erwähnen, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet wiederum viel Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein und vielleicht nicht einmal wissen, welches System die Ursprungsfarbe definiert (Sie könnten einfach einen [benutzerdefinierten Eigenschaftswert](#verwenden_von_benutzerdefinierten_eigenschaften) zur Manipulation haben). Sie möchten einfach eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()` Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) definiert sind, sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabe-Farbkanalwertdefinitionen. Schauen wir uns ein Beispiel an.

In dem unten stehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den standardmäßigen Markenopazitätswert, den wir auf halbdurchsichtige Kästchen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}} Elementen eine Hintergrundfarbe. Einem wird eine absolute Farbe zugewiesen — unser `--base-color` Markenpurple. Das andere wird mit einer relativen Farbe versehen, die unserem Markenpurple entspricht, transformiert, um einen Alphakanal hinzuzufügen, der unserem standardmäßigen Opazitätswert entspricht.

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

## Verwenden von mathematischen Funktionen

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabe-Farbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der unten stehende CSS wird verwendet, um drei {{htmlelement("div")}} Elementen mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere wird mit unverändertem `--base-color` versehen, während die linken und rechten mit aufgehellten und abgedunkelten Varianten dieses `--base-color` versehen werden. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()` Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Dieses Beispiel demonstriert die Veränderung des Alphakanals einer benannten Farbe. Hier haben wir ein Element, das in einem Container eingeschlossen ist, die beide einen `teal` Hintergrund haben. Um die Hintergründe zu unterscheiden, variieren wir den Alphakanalwert mit der relativen Farb-Funktion, der [`calc()` Funktion](/de/docs/Web/CSS/Reference/Values/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alphakanal wird über das Schlüsselwort `alpha` referenziert. In diesem Fall ändert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Wert des Alphakanals durch Multiplikation von `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier`. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0.3` weniger als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich zu `<number>` Werten auf

Um Kanalwertberechnungen bei relativen Farben funktionsfähig zu machen, lösen sich alle Ursprungsfarbkanalwerte zu entsprechenden {{cssxref("&lt;number&gt;")}} Werten auf. Zum Beispiel berechnen wir in den `lch()` Beispielen oben neue Helligkeitswerte, indem wir Zahlen zu oder von dem `l` Kanalwert der Ursprungsfarbe hinzufügen oder abziehen. Wenn wir versuchen würden `calc(l + 20%)` zu machen, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keine {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben waren, lösen sich zu einem `<number>` auf, das für die Ausgabe-Farb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich zu einer Anzahl von Grad in einem Bereich von `0` bis `360`, einschließlich.

Überprüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/Guides/Colors#functions) für die Einzelheiten, wozu ihre Ursprungsfarbkanalwerte sich auflösen.

## Überprüfung der Unterstützung von Browsern

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}} at-rule laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen Funktionsnotierungen demonstrieren, finden Sie auf ihren speziellen Seiten: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine passende Palette von Farben basierend auf der ausgewählten Basisfarbe. Die Farbpalettenauswahl ist wie folgt:

- **Komplementär**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen oder, um es anders auszudrücken, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbkreisen). Die beiden Farben werden als Basisfarbe und die Basisfarbe mit dem Farbkanal +180 Grad definiert.
- **Triadisch**: Enthält drei Farben, die gleich weit um den Farbkreis verteilt sind. Die drei Farben werden als Basisfarbe, Basisfarbe mit dem Farbkanal -120 Grad und Basisfarbe mit dem Farbkanal +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben, die gleich weit um den Farbkreis verteilt sind. Die vier Farben werden als Basisfarbe und Basisfarbe mit dem Farbkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Lichtkanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color` benutzerdefinierte Eigenschaft wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}} Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}} Element setzen würden, aber das MDN Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarbwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die `--base-color` benutzerdefinierte Eigenschaft mithilfe von JavaScript auf diesen Wert gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Reihe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerelementen ermöglicht die Wahl eines zu generierenden Farbpalettentyps. Wenn hier ein neuer Wert gewählt wird, wird über JavaScript eine neue Klasse auf dem `<div>` mit `id="container"` gesetzt, um die gewählte Palette darzustellen. In dem CSS werden Nachfahren-Selektoren verwendet, um die Kind-`<div>`s (z.B. `.comp :nth-child(1)`) zu adressieren, damit sie die korrekten Farben erhalten und die nicht verwendeten `<div>` Knoten ausgeblendet werden.
- Der `container` `<div>`, der die Kind-`<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse von `comp` darauf gesetzt ist, damit die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachfahren-Selektoren verwendet werden, um die korrekten {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>`s in der Quellreihenfolge als um den Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu adressieren.

In der letzten Regel haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die nicht genutzten `<div>` Elemente in jedem Palettentyp zu adressieren und [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) zu setzen, um sie vom Rendern auszuschließen.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) Funktion — indem sie die Ursprung `--base-color` übergeben und eine Ausgabefarbe mit einem angepassten Licht- oder Farbkanal wie passend definieren.

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

##### Ein Hinweis zum `@supports` Test

In dem CSS-Beispiel werden Sie {{cssxref("@supports")}} Blöcke bemerken, die verwendet werden, um verschiedenen {{cssxref("background-color")}} Werten in Browsern zu bieten, die eine ältere Entwurfspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, da die anfängliche Implementierung von Safari auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte als {{cssxref("&lt;number&gt;")}}s oder andere Einheitentypen je nach Kontext aufgelöst wurden. Das bedeutete, dass Werte beim Addieren und Subtrahieren manchmal Einheiten benötigten, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}} Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — und nicht notwendigerweise mit dem tatsächlichen Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie dieser sollten Sie die einfachste mögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports` Test funktioniert nicht — der Test kommt immer positiv zurück, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert erst dann ungültig wird, wenn er auf einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red` Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener zu den Radioknöpfen hinzu, sodass bei Auswahl einer die `setContainer()` Funktion ausgeführt wird. Diese Funktion aktualisiert die `class`-Werte des `<div>` mit `id="container"` mit dem Wert der ausgewählten Radioknöpfe, sodass die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener zu der Farbwahlersteuerung hinzu, sodass bei Auswahl einer neuen Farbe die `setBaseColor()` Funktion ausgeführt wird. Diese Funktion setzt den Wert der `--base-color` benutzerdefinierten Eigenschaft auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies zeigt die Kraft relativer CSS-Farben — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, wenn wir einen einzelnen benutzerdefinierten Eigenschaftswert anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einem Titel und Text, aber mit einem Twist — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung. Wenn dessen Wert geändert wird, wird mithilfe von JavaScript ein `--hue` benutzerdefinierter Eigenschaftswert auf den neuen Schiebereglerwert gesetzt.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color` Wert ist eine relative Farbe mit ihrem Farbkanal auf den Wert `--hue` gesetzt.
- Die anderen Farben, die im Design verwendet werden, sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn die `--base-color` geändert wird.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}} Element dient als äußerer Wrapper, um den Rest des Inhalts einzuschließen, sodass die Karte und das Formular vertikal und horizontal als eine Einheit in `<main>` zentriert werden.
- Das {{htmlelement("section")}} Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}} Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung und sein {{htmlelement("label")}}.

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

Im CSS hat die `:root` einen Standardwert `--hue` auf sie gesetzt, relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) Farben zur Definition des Farbschemas, plus einen radialen Verlauf, der das ganze Body füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe es tut) und passt ihren Farbwert auf den Wert ein, der in der benutzerdefinierten Eigenschaft `--hue` festgelegt wurde.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbwert hinzugefügt wird.

Sehen Sie sich den Rest des CSS an und nehmen Sie alle Orte zur Kenntnis, an denen diese Farben verwendet werden. Dies beinhaltet [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow), und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Schiebereglers.

> [!NOTE]
> Aus Gründen der Kürze werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener zu der Schiebereglersteuerung hinzu, sodass bei einer eingestellten neuen Wert die `setHue()` Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue` benutzerdefinierten Eigenschaftswert auf die `:root` (das `<html>` Element), die den ursprünglich in unserem CSS festgelegten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema der gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, während ein einzelner Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
