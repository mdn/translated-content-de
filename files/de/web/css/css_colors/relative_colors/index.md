---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das [CSS colors module](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Komplementärfarben zu bestehenden Farben ermöglicht — wie z.B. hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und somit eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen auf und betrachtet einige illustrative Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende grundlegende Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Verwenden Sie eine grundlegende Farb-Funktion (repräsentiert durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben durch _`origin-color`_ dargestellt), auf der Ihre relative Farbe basieren wird, vorausgehend durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion integrieren Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann eine `alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, vorausgehend durch einen Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben ist, entspricht er standardmäßig dem `alpha`-Kanalwert der _`origin-color`_ (nicht 100%, was bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farb-Funktion kompatible Syntax und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese werden als entsprechend benannte Werte innerhalb der Farb-Funktion zur Verfügung gestellt — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()`, usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Schauen wir uns die relative Farbsyntax in Aktion an. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eins mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wird und auf dem gleichen `red`-Farbwert basiert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, es in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe als einen roten Kanal mit dem Wert `200` definiert, während die grünen, blauen und alpha-Kanäle den gleichen Wert wie die Ursprungsfarbe haben (sie verwenden die `g`- und `b`-Werte, die im Browser innerhalb der Funktion zur Verfügung gestellt werden, beide gleich `0`, und das `alpha` ist `100%`).

Dies führt zu einem Ausgabewert von `rgb(200 0 0)` — einem leicht dunkleren Rot. Hätten wir einen roten Kanalwert von `255` (oder nur den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser beim Berechnen einer relativen Farbe zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können das gesamte sichtbare Farbspektrum nicht darstellen. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Für neuere Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte im gleichen Syntax wie die verwendete Farb-Funktion ausgedrückt. Wenn zum Beispiel eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Alle folgenden Zeilen produzieren einen äquivalenten Ausgabefarbwert:

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

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu wiederholen: Wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung gestellt, um sie bei der Definition der Ausgabefarbkanalwerte zu verwenden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (die als `r`, `g` und `b` verfügbar gemacht werden) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber es können beliebige Werte sein, sofern sie gültige Werte für diese Kanäle sind. Das gibt relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie zum Beispiel wollten, könnten Sie absolute Werte angeben, wie in den unten gezeigten Beispielen, um `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Sie würden das wahrscheinlich nie in einer realen Codebasis tun und stattdessen einen absoluten Farbwert verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax _können_, als Ausgangspunkt für deren Erlernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die `r`, `g` und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`, `g` und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir relative Farben nur mit der [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall die gleiche, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farb-Funktion. Jeder Fall ist der einfachste mögliche, bei dem die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist noch einmal erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein und das System, in dem die Ursprungsfarbe definiert ist, möglicherweise nicht einmal kennen (Sie haben vielleicht nur einen [benutzerdefinierten Eigenschaftswert](#verwendung_von_benutzerdefinierten_eigenschaften) zur Manipulation). Sie möchten lediglich eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können sowohl für die Ursprungsfarbe als auch in den Ausgabefarbkanalwert-Definitionen Werte verwendet werden, die in [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind. Schauen wir uns ein Beispiel an.

Im unten stehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markefarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede beliebige Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den standardmäßigen Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser Markenpurpur `--base-color`. Das andere erhält eine relative Farbe, die unserem Markenpurpur entspricht, um einen Alphakanal mit einem Wert der Standardopazität hinzuzufügen.

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

Sie können [mathematische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der unten stehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unmodifizierte `--base-color`, während die linken und rechten eine aufgehellte und verdunkelte Variante dieser `--base-color` erhalten. Diese Varianten werden mithilfe relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion eingespeist, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt durch eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, die abgedunkelte Subtrahiert man 20% davon.

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

## Manipulation des Alpha-Kanals

Dieses Beispiel demonstriert die Änderung des Alpha-Kanals einer benannten Farbe. Hier haben wir ein Objekt in einem Container eingewickelt, die beide einen `teal`-Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Alpha-Kanalwert, indem wir die relative Farb-Funktion verwenden, die [`calc()`-Funktion](/de/docs/Web/CSS/calc) und eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alpha-Kanal wird mit dem Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanalwert, indem er `alpha` mit dem `--alpha-multiplier`-Wert der benutzerdefinierten Eigenschaft multipliziert. Der Container erhält einen semitransparenten Hintergrund, weil der Multiplikator von `0.3` weniger als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich zu `<number>`-Werten auf

Damit Kanalwertberechnungen in relativen Farben funktionieren, lösen sich alle Ursprungskanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auf. Wenn Sie in den `lch()`-Beispielen oben neue Helligkeitswerte berechnen, indem Sie Zahlen zu oder von dem `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren, würde zum Beispiel `calc(l + 20%)` zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keine {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich für die Ausgabefarb-Funktion in einen `<number>` auf.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel angegeben wurden, lösen sich in eine Anzahl von Grad im Bereich von `0` bis `360`, inklusive, auf.

Überprüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, zu welchen Werten sich ihre Ursprungskanalwerte auflösen.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele, die die Verwendung der relativen Farbsyntax in verschiedenen funktionalen Notationstypen zeigen, finden Sie auf ihren dedizierten Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalette-Generator

Dieses Beispiel ermöglicht Ihnen die Auswahl einer Basisfarbe und eines Farbpalettentyps. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe. Die Farbpalettenoptionen sind wie folgt:

- **Komplementärfarben**: Enthält zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders gesagt, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen zu Farbtönen und Farbkreisen). Die beiden Farben sind als Basisfarbe und Basisfarbe mit plus 180 Grad im Farbtonkanal definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit voneinander entfernt auf dem Farbkreis liegen. Die drei Farben sind als Basisfarbe, Basisfarbe mit minus 120 Grad im Farbtonkanal und Basisfarbe mit plus 120 Grad im Farbtonkanal definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit voneinander entfernt auf dem Farbkreis liegen. Die vier Farben sind als Basisfarbe und Basisfarbe mit plus 90, plus 180 und plus 270 Grad im Farbtonkanal definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit dem gleichen Farbton, jedoch unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit minus 20, minus 10, plus 10 und plus 20 im Helligkeitskanal.

#### HTML

Der vollständige HTML-Code ist nachfolgend zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf das {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen initialen Wert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise wahrscheinlich auf das {{htmlelement("html")}}-Element gesetzt hätten, aber die MDN-Livebeispiele entfernt es beim Rendern.
- Der Farbgrundauswähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die benutzerdefinierte Eigenschaft `--base-color` mit diesem Wert mithilfe von JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Menge an [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen ermöglicht die Auswahl eines zu erzeugenden Farbpalettentyps. Wenn ein neuer Wert hier gewählt wird, wird JavaScript verwendet, um eine neue Klasse am `container`-`<div>` zu setzen, um die gewählte Palette darzustellen. Im CSS werden Nachfahrenselektoren verwendet, um die untergeordneten `<div>`-Elemente (z.B. `.comp :nth-child(1)`) zu zielen, damit ihnen die korrekten Farben zugewiesen werden und die nicht verwendeten `<div>`-Knoten versteckt.
- Der `container`-`<div>`, der die untergeordnete `<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse `comp` daran gesetzt ist, sodass die Seite ein komplementäres Farbschema anzeigt, wenn sie zuerst geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jede untergeordnete `<div>` für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>`s in der Quellordnung als um den Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu zielen.

Im letzten Regel haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu zielen, wobei [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt ist, um zu verhindern, dass sie gerendert werden.

Die Farben selbst enthalten die `--base-color`, plus relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — indem die Ursprung `--base-color` eingespeist und eine Ausgabefarbe mit angepasstem Helligkeits- oder Farbtonkanal definiert wird, wie angebracht.

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

##### Eine Anmerkung zum `@supports`-Test

Im CSS-Beispiel bemerken Sie möglicherweise die Verwendung von {{cssxref("@supports")}}-Blöcken, um unterschiedliche {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine vorherige Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safaris anfängliche Implementierung auf einer älteren Version der Spezifikation basierte, bei der die Ursprungskanalwerte in {{cssxref("&lt;number&gt;")}} oder andere Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten bei Additionen und Subtraktionen erforderten, was Verwirrung schuf. In neueren Implementierungen lösen sich die Ursprungskanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachstmögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Ein benutzerdefinierter Eigenschaftswert im `@supports`-Test funktioniert nicht — der Test kommt immer positiv zurück, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft zugewiesen wird. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Werts) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzu, damit, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, damit die korrekten Hintergrundfarben auf die untergeordneten `<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Farbpicker-Steuerelement hinzu, damit, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live durch Anpassen einer einzigen benutzerdefinierten Eigenschaft aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und Text enthält, aber mit einem Twist — unterhalb der Karte befindet sich ein Slider ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Sliderwert zu setzen.

Dies wiederum passt das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert von `--hue` gesetzt wird.
- Die anderen in der Design genutzten Farben sind relative Farben basierend auf `--base-color`. Dadurch ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

- Das {{htmlelement("main")}}-Element fungiert als äußere Umhüllung, um den Rest des Inhalts einzuschließen, wodurch die Karte und das Formular vertikal und horizontal innerhalb des `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement und sein {{htmlelement("label")}}.

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

Im CSS hat `:root` einen Standardwert `--hue`, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zum Definieren des Farbschemas, sowie ein radialer Farbverlauf, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (wobei jede volle Farbe funktionieren würde) und passt ihren Farbtonwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante der `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem sie eine Ursprungsfarbe von `--base-color` nimmt und 40 zu ihrem Helligkeitswert hinzufügt.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad rund um den Farbkreis von `--base-color`. Diese wird erstellt, indem sie eine Ursprungsfarbe von `--base-color` nimmt und 180 zu ihrem Farbtonwert hinzufügt.

Jetzt schauen Sie sich den Rest des CSS an und beachten Sie alle Orte, an denen diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Sliders.

> [!NOTE]
> Der Einfachheit halber werden hier nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Slider-Steuerelement hinzu, damit, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-benutzerdefinierten Eigenschaftswert auf das `:root` (das `<html>`-Element), das den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten dargestellt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, während ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS colors](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
