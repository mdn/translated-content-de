---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Das [CSS Colors Modul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Ergänzungen zu vorhandenen Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und somit eine effektivere Farbpalettenerstellung ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen auf und behandelt einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden unter Verwendung der gleichen [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erzeugt, jedoch mit unterschiedlichen Parametern:

1. Integrieren Sie eine grundlegende Farb-Funktion (dargestellt durch _`color-function()`_ oben) wie z.B. [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die von Ihnen erstellte relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** ein (oben dargestellt durch _`origin-color`_), auf deren Grundlage Ihre relative Farbe basiert, vorangestellt mit dem `from`-Schlüsselwort. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden individuellen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein relativer Wert im Vergleich zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, der durch einen Schrägstrich (`/`) vorangestellt wird. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er auf den Alpha-Kanalwert von _`origin-color`_ gesetzt (nicht 100%, was im Fall von absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farb-Funktion kompatibel ist, und zerlegt sie in Komponenten-Farbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese werden innerhalb der Farb-Funktion als passend benannte Werte verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()` Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()` Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Lassen Sie uns die relative Farbsyntax in Aktion sehen. Das folgende CSS wird verwendet, um zwei {{htmlelement("div")}} Elemente zu gestalten, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, erstellt mit der `rgb()` Funktion, basierend auf demselben `red` Farbwert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()` Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe als eine mit einem Rotkanal von Wert `200` und mit Grün-, Blau- und Alpha-Kanälen mit denselben Werten wie die Ursprungsfarbe definiert (sie verwendet die Werte `g` und `b`, die innerhalb der Funktion vom Browser verfügbar gemacht werden, die beide gleich `0` sind, und der `alpha` ist `100%`).

Dies ergibt eine Ausgabe von `rgb(200 0 0)` — ein leicht dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r` Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()` Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das erste, was der Browser beim Berechnen einer relativen Farbe tut, die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert zu konvertieren, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe von der Ursprungsfarbe aus berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB Farb-Funktionen können nicht das volle Farbspektrum sichtbar machen. Die Ausgabe-Farben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass der Ausgabefarbwert über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgegeben wird.
> - Für neuere Farb-Funktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden relative Farb-Ausgabewerte in derselben Syntax wie die verwendete Farb-Funktion ausgedrückt. Wenn zum Beispiel eine [`lab()`](/de/docs/Web/CSS/color_value/lab) Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()` Wert sein.

Die folgenden Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

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

Es gibt einen wichtigen Unterschied zwischen den destrukturierten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den Kanalwerten der Ausgabefarbe, die vom Entwickler festgelegt werden.

Um es zu wiederholen, wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um die Ausgabe-Farbkanalwerte darin festzulegen. Das folgende Beispiel definiert eine relative Farbe, die eine `rgb()` Funktion verwendet, und verwendet die Ursprungsfarbkanalwerte (verfügbar gemacht als `r`, `g` und `b`) für die Ausgabe-Kanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Wenn Sie die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben einen hohen Grad an Flexibilität.

Beispielsweise könnten Sie absolute Werte wie unten gezeigt spezifizieren und `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Es ist unwahrscheinlich, dass Sie dies jemals in einer realen Codebasis tun würden, und würden wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie dies mit relativer Farbsyntax tun _können_, als Ausgangspunkt, um darüber zu lernen.

Sie können die bereitgestellten Werte sogar durcheinandermischen oder wiederholen. Die folgende Farbkorrektur nimmt ein leicht dunkleres Rot als Eingabe und gibt eine helle Graufarbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Die folgende Korrektur verwendet die Kanalwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die für die verwendete Funktion geeignet sind.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farb-Funktion. Jeder Fall ist der einfachste mögliche, mit den Ausgabe-Farbkanalwerten, die genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist wiederum erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet wiederum viel Flexibilität. Im Allgemeinen interessiert Sie das System, in dem die Ursprungsfarbe definiert ist, vielleicht nicht einmal (Sie haben vielleicht nur einen [benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zum Manipulieren). Sie möchten lediglich eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()` Funktion einfügen und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die sowohl in [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) für die Ursprungsfarbe als auch innerhalb der Ausgabefarbkanalwertdefinitionen definiert sind. Schauen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}} Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Marken-Lila. Das andere erhält eine relative Farbe, die unserer Marken-Lila entspricht, umgewandelt zur Hinzufügung eines Alphakanals, der unserem Standard-Opazitätswert entspricht.

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

Sie können CSS-[mathematische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Das folgende CSS wird verwendet, um drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Das mittlere erhält ein unmodifiziertes `--base-color`, während das linke und rechte leicht aufhellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert — das `--base-color` wird in eine `lch()` Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

## Alpha-Kanal manipulieren

Dieses Beispiel demonstriert das Ändern des Alphakanals einer benannten Farbe. Hier haben wir ein Element in einen Container eingespannt, der beide einen `teal` Hintergrund haben. Um die Hintergründe zu unterscheiden, variieren wir den Wert des Alphakanals unter Verwendung der relativen Farb-Funktion, der [`calc()` Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alphakanal wird über das Schlüsselwort `alpha` referenziert. In diesem Fall ändert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alphakanalwert, indem er `alpha` mit dem `--alpha-multiplier` benutzerdefinierten Eigenschaftswert multipliziert. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator von `0.3` weniger als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Damit Kanalwertberechnungen in relativen Farben funktionieren, lösen sich alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}} Werte auf. Zum Beispiel berechnen wir in den `lch()` Beispielen oben neue Helligkeitswerte, indem wir Zahlen zu den `l`-Kanalwerten der Ursprungsfarbe addieren oder von ihnen subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` auszuführen, würde das zu einer ungültigen Farbe führen — `l` ist eine `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in eine `<number>` auf, die für die Ausgabefarb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Anzahl von Grad im Bereich von `0` bis `360`, einschließlich.

Überprüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, was ihre Ursprungskanalwerte lösen.

## Überprüfung der Browserunterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch ein {{cssxref("@supports")}} Regelwerk ausführen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können weitere Beispiele zur Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren speziellen Seiten finden: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp zu wählen. Der Browser zeigt dann eine passende Farbpalette basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich an gegenüberliegenden Seiten eines Farbkreises befinden, oder anders gesagt, _entgegengesetzte Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für mehr Informationen über Farbtöne und Farbräder). Die beiden Farben sind als Basisfarbe und die Basisfarbe mit Farbtankanalm +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleiche Abstände um den Farbkreis haben. Die drei Farben sind als Basisfarbe, Basisfarbe mit Farbtankanalm -120 Grad und Basisfarbe mit Farbtankanalm +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleiche Abstände um den Farbkreis haben. Die vier Farben sind als Basisfarbe und Basisfarbe mit Farbtankanalm +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit dem gleichen Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe, und Basisfarbe mit Helligkeitskanalm -20, -10, +10 und +20.

#### HTML

Das vollständige HTML wird unten zur Referenz bereitgestellt. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}} Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir normalerweise dies wahrscheinlich auf dem {{htmlelement("html")}} Element setzen würden, aber das MDN Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarbenpicker wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerungselement erstellt. Wenn ein neuer Wert in dieses Steuerungselement gesetzt wird, wird die `--base-color` benutzerdefinierte Eigenschaft mit diesem Wert mit JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben basieren auf `--base-color`.
- Die Menge an [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungselementen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn hier ein neuer Wert gewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container` `<div>` festzulegen, um den gewählten Palettentyp zu repräsentieren. In der CSS werden Nachkommen-Selektoren verwendet, um die Kinder-`<div>` Elemente (z. B. `.comp :nth-child(1)`) so zu zielen, dass sie die richtigen Farben erhalten und nicht verwendete `<div>`-Knoten ausgeblendet werden.
- Der `container` `<div>`, der die Kinder `<div>`-Elemente enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse `comp` darauf gesetzt ist, so dass die Seite beim ersten Laden ein komplementäres Farbschema zeigt.

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

Unten zeigen wir nur das CSS, welches die Palette Farben setzt. Beachten Sie, wie in jedem Fall Nachfahren-Selektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes Kind `<div>` für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>` s in der Quellreihenfolge als um die Art des Elements, so dass wir {{cssxref(":nth-child")}} verwendet haben, um sie zu zielen.

In der letzten Regel haben wir den [General-Sibling-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die unbenutzten `<div>` Elemente in jedem Palettentyp zu zielen, die [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) setzen, um sie davon abzuhalten, gerendert zu werden.

Die Farben selbst beinhalten die `--base-color`, sowie relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch) Funktion — indem sie das Ursprungs `--base-color` und eine Ausgabefarbe definieren, die einen angepassten Helligkeits- oder Farbkanal hat.

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

##### Ein Exkurs zum `@supports` Testen

Im Beispiel-CSS werden Sie {{cssxref("@supports")}} Blöcke bemerken, die verwendet werden, um unterschiedliche {{cssxref("background-color")}} Werte an Browser zu liefern, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safaris erste Implementierung auf einer älteren Version der Spezifikation basierte, bei der Ursprungsfarbenkanalwerte sich in {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen je nach Kontext auflösten. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungsfarbenkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}} Wert auf, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, wie der Support-Test in jedem Fall mit irgendeiner Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Beim Testen solcher komplexen Werte sollten Sie die einfachstmögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports` Test funktioniert nicht — der Test kommt immer positiv zurück, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er zu einem ungültigen Wert (oder Teil eines ungültigen Werts) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red` Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Listener auf den Radio-Buttons hinzu, sodass, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class` Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, damit die korrekten Hintergrundfarben auf die Kinder `<div>` für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event) Event-Listener auf dem Farbpicker-Steuerungselement hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` läuft. Diese Funktion setzt den Wert der `--base-color` benutzerdefinierten Eigenschaft auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies zeigt die Kraft der relativen CSS-Farben — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem ein einzelner benutzerdefinierter Eigenschaftswert angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI Farbthemenaktualisierer

Dieses Beispiel zeigt eine Karte mit einer Überschrift und Text, aber mit einem Twist — unterhalb der Karte befindet sich ein Schieberegler-([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerungselement. Wenn dessen Wert geändert wird, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Slider-Wert zu setzen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color` Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert von `--hue` gesetzt ist.
- Die anderen in diesem Design verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}} Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, damit die Karte und das Formular vertikal und horizontal innerhalb des `<main>` als eine Einheit zentriert sind.
- Das {{htmlelement("section")}} Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}} Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerungselement und sein {{htmlelement("label")}}.

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

Im CSS hat `:root` einen Standard-`--hue` Wert auf sich gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch) Farben, um das Farbschema zu definieren, sowie ein Radial-Gradienten, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe `red` (obwohl jede volle Farbe funktionieren würde) und passt ihren Farbwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, gedacht für die Verwendung als Hintergrund. Diese wird erstellt, indem sie `--base-color` als Ursprungsfarbe nimmt und 40 zu ihrem Helligkeitswert hinzufügt.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Diese wird erstellt, indem sie `--base-color` als Ursprungsfarbe nimmt und 180 zu ihrem Farbwert hinzufügt.

Schauen Sie sich jetzt den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Schiebereglers ein.

> [!NOTE]
> Der Kürze halber werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event) Ereignis-Listener zu dem Schieberegler-Steuerungselement hinzu, sodass, wenn ein neuer Wert eingestellt wird, die `setHue()` Funktion läuft. Diese Funktion setzt einen neuen Inline-`--hue` benutzerdefinierten Eigenschaftswert auf `:root` (das `<html>` Element), der den in unserem CSS ursprünglich gesetzten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, wenn ein einzelner Wert verändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farbsysteme](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://de.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
