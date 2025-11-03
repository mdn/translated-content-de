---
title: Verwenden von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsfähige Funktion, die es ermöglicht, einfach Komplementärfarben zu bestehenden Farben zu erstellen - wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten - und so eine effektivere Farbpalette zu erstellen.

Dieser Artikel erklärt die relative Farbsyntax, zeigt, welche verschiedenen Optionen es gibt, und betrachtet einige illustrative Beispiele.

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

1. Verwenden Sie eine grundlegende Farb-Funktion (oben dargestellt durch _`color-function()`_), wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie auswählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf der Ihre relative Farbe basieren wird, vorangestellt durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Custom-Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden individuellen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert - dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, vorangestellt durch einen Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht auf 100%, was für absolute Farbwerte der Fall wäre).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der verwendeten Farb-Funktion kompatibel ist, und zerlegt sie in Komponenten-Farbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farb-Funktion zur Verfügung - `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. - die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Lassen Sie uns die relative Farbsyntax in Aktion sehen. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu gestalten: eines mit einer absoluten Hintergrundfarbe - `red` - und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf dem gleichen `red`-Farbwert erstellt wird:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe definiert, die einen roten Kanal mit dem Wert `200` und grüne, blaue und `alpha`-Kanäle mit demselben Wert wie die Ursprungsfarbe hat (sie verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser zur Verfügung gestellt werden, die beide `0` sind, und `alpha` ist `100%`).

Dies ergibt ein Ausgabeergebnis von `rgb(200 0 0)` - ein etwas dunkleres Rot. Wenn wir einen roten Kanalwert von `255` (oder nur den `r`-Wert) angegeben hätten, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht - `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, wenn der Browser eine relative Farbe berechnet, wird zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert umgewandelt, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Obwohl die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können das volle Spektrum sichtbarer Farben nicht ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Bei neueren Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden die relativen Farb-Ausgabewerte in derselben Syntax wie die verwendete Farb-Funktion ausgedrückt. Wenn also eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert.

Die folgenden Zeilen ergeben alle eine gleichwertige Ausgabefarbe:

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

Es gibt einen wichtigen Unterschied zwischen den aufgeschlüsselten Ursprungsfarb-Kanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um noch einmal darauf hinzuweisen: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung, um sie bei der Definition der Ausgabefarb-Kanalwerte zu verwenden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarb-Kanalwerte (verfügbar gemacht als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe mit der Ursprungsfarbe identisch ist:

```css
rgb(from red r g b)
```

Sie müssen jedoch beim Festlegen der Ausgabewerte die Ursprungsfarb-Kanalwerte nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, vorausgesetzt, sie sind gültig für diese Kanäle. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel könnten Sie, wenn Sie wollten, absolute Werte wie die unten gezeigten angeben, um `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erzeugen Sie eigentlich keine relative Farbe. Sie würden dies wahrscheinlich in einem echten Codebestand nie tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies mit relativer Farbsyntax _tun_ können, als Ausgangspunkt zum Erlernen davon.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Folgendes nimmt ein etwas dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus - die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden - [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte je nach verwendeter Funktion unterschiedliche Namen haben.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farb-Funktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarb-Kanalwerte genau den Ursprungsfarb-Kanalwerten entsprechen:

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

Es sei nochmals darauf hingewiesen, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet eine Menge Flexibilität. Im Allgemeinen werden Sie wahrscheinlich nicht daran interessiert sein und vielleicht nicht einmal wissen, in welchem System die Ursprungsfarbe definiert ist (Sie haben vielleicht nur einen [benutzerdefinierten Eigenschaftswert](#verwenden_von_benutzerdefinierten_eigenschaften) zum Manipulieren). Sie möchten einfach eine Farbe eingeben und beispielsweise eine leichtere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Bei der Erstellung einer relativen Farbe können Sie Werte verwenden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarb-Kanalwertdefinitionen definiert sind. Sehen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe - `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Marken-Transparenzwert, den wir auf halbtransparente Boxen anwenden möchten - `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe - unser `--base-color` Marken-Purpur. Das andere erhält eine relative Farbe, die unserem Marken-Purpur entspricht, umgewandelt, um einen Alphakanal mit dem gleichen Wert wie unser Standard-Transparenzwert hinzuzufügen.

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

Sie können CSS-[Mathematische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarb-Kanäle zu berechnen. Sehen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben zu gestalten. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten hellere und dunklere Varianten dieser `--base-color` erhält. Diese Varianten sind unter Verwendung von relativen Farben definiert - die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal verändert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt und die abgedunkelte Farbe hat 20% davon abgezogen.

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

## Manipulieren des Alphakanals

Dieses Beispiel zeigt, wie der Alphakanal eines benannten Farbwerts verändert werden kann. Hier haben wir ein Element, das in einem Container eingebettet ist, wobei beide einen `teal`-Hintergrund haben. Um die beiden Hintergründe voneinander zu unterscheiden, variieren wir den Alphakanalwert mithilfe der relativen Farb-Funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alphakanal wird mit dem Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Wert des Alphakanals, indem `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Damit Kanalwertberechnungen bei relativen Farben funktionieren, lösen sich alle Ursprungsfarb-Kanalwerte in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel berechnen wir in den obigen `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe hinzufügen oder davon abziehen. Wenn wir `calc(l + 20%)` versuchen würden, würde dies zu einer ungültigen Farbe führen - `l` ist ein `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in einen `<number>`-Wert auf, der für die Ausgabefarb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Anzahl von Grad in einem Bereich von `0` bis `360` auf, inklusive.

Prüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, wie sich ihre Ursprungs-Kanalwerte auflösen.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}} At-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele zur Verwendung der relativen Farbsyntax in den verschiedenen Funktionsnotationen finden Sie auf ihren jeweiligen Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Farbpalette basierend auf der gewählten Basisfarbe. Die Farbpalettenauswahlen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die an gegenüberliegenden Seiten eines Farbrades liegen, oder anders ausgedrückt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbrädern). Die beiden Farben sind definiert als eine Basisfarbe und die Basisfarbe mit dem Farbtönkanal +180 Grad.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit voneinander entfernt auf dem Farbrad angeordnet sind. Die drei Farben sind definiert als eine Basisfarbe, die Basisfarbe mit dem Farbtönkanal -120 Grad und die Basisfarbe mit dem Farbtönkanal +120 Grad.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit voneinander entfernt auf dem Farbrad angeordnet sind. Die vier Farben sind definiert als eine Basisfarbe und die Basisfarbe mit dem Farbtönkanal +90, +180 und +270 Grad.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert - Basisfarbe und die Basisfarbe mit dem Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code wird unten zur Referenz angegeben. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit sie mit JavaScript einfach aktualisiert werden kann. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN Live-Beispiel hat es beim Rendern entfernt.
- Der Basiskolorierungs-Auswahlmechanismus wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement gesetzt wird, wird die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert mithilfe von JavaScript gesetzt, wodurch eine neue Farbpalette erzeugt wird. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Reihe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen ermöglicht die Auswahl eines Farbpalettentyps, der erzeugt werden soll. Wenn hier ein neuer Wert gewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `<div>` des `containers` zu setzen, die den gewählten Palettentyp repräsentiert. In der CSS werden Nachfahrenselektoren verwendet, um die Kind-`<div>`-Elemente zu zielen (z.B. `.comp :nth-child(1)`), damit sie die richtigen Farben erhalten und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `<div>` des `containers`, das die Kind-`<div>`-Elemente enthält, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse von `comp` darauf gesetzt ist, so dass die Seite ein komplementäres Farbschema anzeigt, wenn sie zum ersten Mal geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Uns interessieren mehr die Position der `<div>`-Elemente in der Quellreihenfolge als der Typ des Elements, so dass wir {{cssxref(":nth-child")}} verwendet haben, um sie zu zielen.

In der letzten Regel haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die unbenutzten `<div>`-Elemente in jedem Palettentyp zu zielen und [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) zu setzen, um deren Darstellung zu verhindern.

Die Farben selbst umfassen die `--base-color` sowie relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion - sie übergeben die Ursprung `--base-color` und definieren eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtönkanal, je nach Bedarf.

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

##### Ein Hinweis zur `@supports`-Prüfung

In dem CSS-Beispiel werden Ihnen {{cssxref("@supports")}}-Blöcke auffallen, die verwendet werden, um unterschiedliche {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, da die anfängliche Implementierung von Safari auf einer älteren Version der Spezifikation basierte, bei der sich Ursprungsfarb-Kanalwerte je nach Kontext in {{cssxref("&lt;number&gt;")}} oder andere Einheitstypen auflösten. Dies bedeutete, dass Werte beim Hinzufügen und Subtrahieren manchmal Einheiten erforderten, was Verwirrung stiftete. In neueren Implementierungen lösen sich Ursprungsfarb-Kanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, wie der Support-Test in jedem Fall mit einer beliebigen Farbangabe - `color: lch(from red l c calc(h + 90deg))` zum Beispiel - durchgeführt wird, nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachste mögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft in den `@supports`-Test funktioniert nicht - der Test kommt immer positiv zurück, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn ihm ein ungültiger Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener zu den Radioknöpfen hinzu, so dass, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radioknopfs, so dass die richtigen Hintergrundfarben auf die Kind-`<div>`-Elemente für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener zu dem Farbwähler-Steuerelement hinzu, so dass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Leistungsfähigkeit von relativen CSS-Farben zu zeigen - wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem ein einzelner benutzerdefinierter Eigenschaftswert angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und Text, aber mit einem Twist - unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies wiederum passt das Farbschema für die gesamte Benutzeroberfläche an:

- Der Wert `--base-color` ist eine relative Farbe mit einem Farbtönkanal, der auf den Wert `--hue` gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, wodurch die Karte und das Formular vertikal und horizontal als eine Einheit innerhalb von `<main>` zentriert werden können.
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

Im CSS hat `:root` einen Standardwert `--hue` darauf gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, zuzüglich einem radialen Gradienten, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede Vollfarbe funktionieren würde) und passt den Farbtonwert an den in `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, vorgesehen als Hintergrund. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen wird und 40 zum Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um das Farbrad von `--base-color`. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen wird und 180 zum Farbtonwert hinzugefügt wird.

Schauen Sie sich nun den Rest des CSS an und achten Sie auf all die Orte, an denen diese Farben verwendet werden. Dies umfasst [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Schiebereglers.

> [!NOTE]
> Aus Gründen der Kürze werden nur die Teile des CSS gezeigt, die für die Verwendung von relativen Farben relevant sind.

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

Das JavaScript fügt dem Schieberegler-Steuerelement einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener hinzu, damit, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-Wert `--hue` der benutzerdefinierten Eigenschaft auf `:root` (das `<html>`-Element), das den ursprünglichen Standardwert, den wir in unserem CSS gesetzt haben, überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, indem ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) in der Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) in der Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
