---
title: Verwendung relativer Farben
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein leistungsstarkes Feature, das die programmatische Erstellung von Farbergänzungen zu vorhandenen Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt, welche verschiedenen Optionen es gibt, und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Integrieren Sie eine grundlegende Farbfunktion (dargestellt durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf der Ihre relative Farbe basieren wird, und verwenden Sie dabei das Schlüsselwort `from`. Dies kann ein beliebiger gültiger {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell einschließlich eines Farbwerts, der in einer [CSS-Custom-Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe verwendet.
3. Im Fall der Funktion [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) geben Sie den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, der gleiche wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `Alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, gefolgt von einem Schrägstrich (`/`). Wenn der `Alpha`-Kanalwert nicht explizit angegeben wird, übernimmt er standardmäßig den Alphakanalwert der _`origin-color`_ (nicht 100%, was bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie dann in Komponentenfarbkanäle (plus den `Alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese werden innerhalb der Farbfunktion als passend benannte Werte wie `r`, `g`, `b` und `alpha` im Fall der Funktion `rgb()`, `l`, `a`, `b` und `alpha` im Fall der Funktion `lab()`, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. bereitgestellt, die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Schauen wir uns die relative Farbsyntax in Aktion an. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu gestalten, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der Funktion `rgb()` basierend auf dem gleichen `red`-Farbwert erstellt wurde:

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

Die relative Farbe verwendet die Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe definiert als eine mit einem Rotkanalwert von `200` und Grün-, Blau- und Alphakanälen mit einem Wert, der dem der Ursprungsfarbe entspricht (es verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser verfügbar gemacht werden, die beide gleich `0` sind, und das `alpha` ist `100%`).

Das führt zu einer Ausgabe von `rgb(200 0 0)` — einem leicht dunkleren Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau die gleiche wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das Erste, was der Browser beim Berechnen einer relativen Farbe tut, die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert zu konvertieren (in diesem Fall `rgb()`). Dies geschieht, damit der Browser in der Lage ist, die Ausgabefarbe aus der Ursprungsfarbe zu berechnen. Obwohl die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können das gesamte Spektrum sichtbarer Farben nicht darstellen. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu umgehen. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert zurückgegeben wird.
> - Für neuere Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabe-Werte in der gleichen Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn zum Beispiel eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Farbfunktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

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

Es gibt einen wichtigen Unterschied zwischen den zerstückelten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um dies zu wiederholen: Wenn eine relative Farbe definiert wird, sind die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe mithilfe einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (die als `r`, `g` und `b` verfügbar gemacht werden) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe die gleiche ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die gültige Werte für diese Kanäle sind. Dies gibt relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel, wenn Sie möchten, können Sie absolute Werte wie die unten gezeigten angeben und `red` in `blue` verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die erzielte Ausgabefarbe mit der relativen Farbsyntax die gleiche wie die Ursprungsfarbe ist oder eine Farbe, die nicht auf der Ursprungsfarbe basiert, erstellen Sie nicht wirklich eine relative Farbe. Es ist unwahrscheinlich, dass Sie dies jemals in einem echten Codebase tun würden, und würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich, zu erklären, dass Sie _können_ dies mit relativer Farbsyntax tun, als Ausgangspunkt, um mehr darüber zu lernen.

Sie können die angegebenen Werte sogar durcheinandermischen oder wiederholen. Das Folgende nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Die folgende Zeile verwendet die Ursprungsfarbkanalwerte für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Unten finden Sie Beispiele zur relativen Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist nochmals erwähnenswert, dass das Farbmodell der Ursprungsfarbe nicht mit dem Farbmodell übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen werden Sie sich nicht dafür interessieren, und es wird möglicherweise nicht einmal bekannt sein, in welchem System die Ursprungsfarbe definiert ist (Sie haben möglicherweise nur einen [Custom-Property-Wert](#verwendung_von_benutzerdefinierten_eigenschaften) zu manipulieren). Sie möchten nur eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarbkanalwert-Definitionen Werte verwenden, die in [CSS-Custom-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) definiert sind. Sehen wir uns ein Beispiel an.

In dem unten stehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbstichwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Opazitätswert der Marke, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Markenlila. Das andere erhält eine relative Farbe, die unserem Markenlila entspricht, transformiert, um einen Alpha-Kanal zu addieren, der unserem Standard-Opazitätswert entspricht.

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

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Der unten stehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Das mittlere Element erhält die unveränderte `--base-color`, während die Elemente links und rechts aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% abgezogen.

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

Dieses Beispiel demonstriert die Änderung des Alpha-Kanals einer benannten Farbe. Hier haben wir ein Element, das in einen Container eingewickelt ist, die beide einen `teal`-Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Alpha-Kanalwert mithilfe der relativen Farb-Funktion, der [`calc()` Funktion](/de/docs/Web/CSS/Reference/Values/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alpha-Kanal wird mit dem Keyword `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanalwert, indem `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte werden zu `<number>`-Werten aufgelöst

Um Kanalwertberechnungen in relativen Farben funktionieren zu lassen, werden alle Ursprungsfarbkanalwerte zu entsprechenden {{cssxref("&lt;number&gt;")}}-Werten aufgelöst. Zum Beispiel in den `lch()`-Beispielen oben berechnen wir neue Helligkeitswerte, indem wir Zahlen zu dem `l`-Kanalwert der Ursprungsfarbe addieren oder von ihm subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu schreiben, würde das zu einer ungültigen Farbe führen — `l` ist eine `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, werden zu einem `<number>` aufgelöst, das für die Ausgabefunktion passend ist.
- Kanalwerte, die ursprünglich als {{cssxref("hue")}}-Winkel angegeben wurden, werden in einen Gradbereich von `0` bis `360` aufgelöst, einschließlich.

Überprüfen Sie die verschiedenen [Farb-Funktions-Seiten](/de/docs/Web/CSS/Guides/Colors#functions) für die spezifischen Details, wie deren Ursprungs-Kanalwerte aufgelöst werden.

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
> Sie können zusätzliche Beispiele finden, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren speziellen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Farbpalette basierend auf der gewählten Basisfarbe an. Die Farbpaletten-Auswahlen sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen, oder anders gesagt, _gegenteilige Farbtöne_ (siehe den {{cssxref("hue")}} Datentyp für weitere Informationen über Farbtöne und Farbkreise). Die beiden Farben werden als Basisfarbe und Basisfarbe mit Farbtönkanal +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit auseinander um den Farbkreis liegen. Die drei Farben werden als Basisfarbe, Basisfarbe mit Farbtönkanal -120 Grad und Basisfarbe mit Farbtönkanal +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit auseinander um den Farbkreis liegen. Die vier Farben werden als Basisfarbe und Basisfarbe mit Farbtönkanal +90, +180 und +270 Grad definiert.
- **Mono**: Beinhaltet mehrere Farben mit dem gleichen Farbton, jedoch unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color` benutzerdefinierte Eigenschaft wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit wir den Wert mit JavaScript aktualisieren können. Wir haben einen Ausgangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN Live Sample hat es beim Rendern entfernt.
- Der Basistolpickpicker wird erstellt, indem ein [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerung verwendet wird. Wenn in dieser Steuerung ein neuer Wert festgelegt wird, wird die benutzerdefinierte Eigenschaft `--base-color` über JavaScript auf diesen Wert gesetzt, wodurch wiederum eine neue Farbpalette generiert wird. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Reihe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen ermöglicht die Auswahl eines zu erstellenden Farbpalettentyps. Wenn hier ein neuer Wert gewählt wird, wird mit Hilfe von JavaScript eine neue Klasse auf dem `<div>` Container gesetzt, um den gewählten Palettentyp zu repräsentieren. In der CSS verwenden Nachfahre-Selektoren, um die untergeordneten `<div>`s zu targetieren (z.B. `.comp :nth-child(1)`), sodass sie die richtigen Farben erhalten und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Der `container` `<div>`, der den untergeordneten `<div>`s enthält, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass ihm eine anfängliche Klasse von `comp` zugewiesen wird, damit die Seite ein komplementäres Farbschema anzeigt, wenn sie zum ersten Mal geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachfahre-Selektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jeden untergeordneten `<div>` für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>`s in der Quellreihenfolge als um den Elementtyp, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu targetieren.

Im letzten Regel haben wir den [generellen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die unbenutzten `<div>`-Elemente in jedem Palettentyp zu targetieren und `display: none` zu setzen, um sie vom Rendering auszuschließen.

Die Farben selbst beinhalten `--base-color` plus relative Farben, die von diesem `--base-color` abgeleitet sind. Die relativen Farben verwenden die Funktion [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) — sie übergeben die Ursprungs-`--base-color` und definieren eine Ausgabefarbe mit einem entsprechend angepassten Helligkeits- oder Farbtönkanal.

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

##### Bemerkung zum `@supports`-Test

Im Beispiel-CSS werden Sie feststellen, dass {{cssxref("@supports")}}-Blöcke verwendet werden, um verschiedenen {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safari's erste Implementierung auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitentypen entsprechend dem Kontext aufgelöst wurden. Dies bedeutete, dass die Werte manchmal Einheiten benötigten, wenn Additionen und Subtraktionen durchgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen werden Ursprungsfarbkanalwerte immer zu einem Äquivalent {{cssxref("&lt;number&gt;")}} aufgelöst, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, dass der Support-Test in jedem Fall unter Verwendung einer beliebigen Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie dieser sollten Sie die einfachste mögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Eine benutzerdefinierte Eigenschaft in den `@supports`-Test einzubeziehen funktioniert nicht — der Test liefert immer ein positives Ergebnis, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft erhält. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dieses Problem zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Wir fügen ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener zu den Radio-Buttons hinzu, sodass, wenn einer ausgewählt wird, die `setContainer()` Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die richtigen Hintergrundfarben auf die `<div>`s des gewählten Palettentyps angewendet werden können.
- Wir fügen ein [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener zur Farbwahlersteuerung hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die `setBaseColor()` Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Stärke relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem wir eine einzige benutzerdefinierte Eigenschaft anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-UI Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, enthält jedoch einen Twist — unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung. Wenn sich dessen Wert ändert, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color` Wert ist eine relative Farbe, deren Farbton-Kanal auf den Wert der `--hue` benutzerdefinierten Eigenschaft gesetzt ist.
- Die anderen Farben, die im Design verwendet werden, sind relative Farben, die auf `--base-color` basieren. Daher ändern sie sich, wenn `--base-color` sich ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}} Element fungiert als äußerer Container, um den restlichen Inhalt zu enthalten, sodass die Karte und das Formular vertikal und horizontal in `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}} Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}} Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerung und deren {{htmlelement("label")}}.

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

Im CSS hat der `:root` einen standardmäßigen `--hue`-Wert darauf gesetzt, rechtmäßige [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) Farben, um das Farbschema zu definieren, plus ein radialer Gradient, der den ganzen Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe funktionieren würde) und passt ihren Farbtonwert an den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine deutlich hellere Variante von `--base-color`, gedacht als Hintergrund zu verwenden. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine Komplementärfarbe, die 180 Grad um den Farbkreis von `--base-color` entfernt ist. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtönwert hinzugefügt wird.

Sehen Sie sich nun den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Ränder](/de/docs/Web/CSS/Reference/Properties/border), {{cssxref("text-shadow")}}, und sogar die {{cssxref("accent-color")}} des Schiebereglers mit ein.

> [!NOTE]
> Aus Gründen der Kürze werden nur die Teile des CSS gezeigt, die sich auf die Verwendung von relativen Farben beziehen.

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

Das JavaScript fügt der Schiebereglersteuerung einen [`input`](/de/docs/Web/API/Element/input_event) Ereignislistener hinzu, sodass, wenn ein neuer Wert gesetzt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline `--hue` benutzerdefinierten Eigenschaftswert auf der `:root` (dem `<html>`-Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS gesetzt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, da ein einziger Wert verändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
