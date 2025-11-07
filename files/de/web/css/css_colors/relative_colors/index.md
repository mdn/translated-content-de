---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, leicht Komplementärfarben zu bestehenden Farben zu erstellen – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und somit eine effektivere Farbpaltettenerstellung ermöglicht.

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

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Verwenden Sie eine grundlegende Farb-Funktion (oben dargestellt durch _`color-function()`_) wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) usw. Welche Sie wählen, hängt von dem Farbmodell ab, das Sie für die Erstellung der relativen Farbe (die **Ausgabefarbe**) verwenden möchten.
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, und geben Sie sie mit dem Schlüsselwort `from` an. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der mit jedem verfügbaren Farbmodell, einschließlich eines in einer [CSS-Custom-Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthaltenen Farbwertes, Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe, verwendet wird.
3. Im Fall der [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion geben Sie den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Definieren Sie einen Ausgabe-Wert für jedes einzelne Kanal. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zu dem Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, getrennt durch einen Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht 100 %, wie dies bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farb-Funktion kompatibel ist, und zerlegt sie in die Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farb-Funktion zur Verfügung — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabe-Kanalwerte verwendet werden können.

Lassen Sie uns die relative Farbsyntax in Aktion sehen. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf demselben `red`-Farbwert erstellt wurde:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe übernimmt, diese in eine äquivalente `rgb()`-Farbe umwandelt (`rgb(255 0 0)`) und dann die neue Farbe so definiert, dass sie einen roten Kanalwert von `200` und grüne, blaue sowie alpha-Kanäle mit einem Wert wie bei der Ursprungsfarbe hat (es verwendet die im Funktionsumfang durch den Browser bereitgestellten `g`- und `b`-Werte, die beide `0` sind, und der `alpha`-Wert ist `100%`).

Dies ergibt eine Ausgabe von `rgb(200 0 0)` — ein leicht dunkleres Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der äquivalent zu `rgb(200 0 0)` ist — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das erste, was der Browser tut, wenn er eine relative Farbe berechnet, die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert zu konvertieren, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion ausgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Um diese Einschränkungen zu vermeiden, werden die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) in `color(srgb)` serialisiert. Dies bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) zurückgibt.
> - Bei neueren Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farb-Ausgabewerte in der gleichen Syntax ausgedrückt wie die verwendete Farb-Funktion. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Farb-Funktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Alle folgenden Zeilen produzieren eine äquivalente Ausgabefarbe:

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

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarben-Kanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Noch einmal: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe mit der Ursprungsfarbe identisch ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. zuerst rot, dann grün und dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel könnten Sie absolute Werte wie die unten gezeigten angeben, `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe erzeugen, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Sie würden dies wahrscheinlich nie in einem echten Codebase tun und wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax tun _können_, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mixen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus – die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanäle der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

In dem obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbwerte verschiedene, für die verwendete Funktion geeignete Namen haben.

Nachfolgend finden Sie Beispiele für relative Farbsyntax für jede Farb-Funktion. Jeder Fall ist der einfachstmögliche, bei dem die Ausgabefarbkanalwerte genau mit den Ursprungsfarbkanalwerten übereinstimmen:

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

Es ist erneut erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein und möglicherweise nicht einmal das System kennen, in dem die Ursprungsfarbe definiert ist (Sie könnten einfach einen [Custom-Property-Wert](#verwendung_von_benutzerdefinierten_eigenschaften) zur Manipulation haben). Sie möchten lediglich eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Bei der Erstellung einer relativen Farbe können sowohl für die Ursprungsfarbe als auch innerhalb der Definition von Ausgabefarbkanalwerten Werte verwendet werden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind. Lassen Sie uns ein Beispiel betrachten.

Im unten stehenden CSS definieren wir zwei Custom-Properties:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Brand-Opazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unsere `--base-color` Markenfarbe Purple. Das andere erhält eine relative Farbe, die gleich unserer Markenfarbe Purple ist, transformiert durch Hinzufügen eines Alpha-Kanals, der unserem Standard-Opazitätswert entspricht.

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

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittelere erhält eine unveränderte `--base-color`, während die linken und rechten gelichtete und verdunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden über relative Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt mittels einer `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die verdunkelte Farbe hat 20% abgezogen.

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

Dieses Beispiel zeigt, wie der Alpha-Kanal einer benannten Farbe geändert wird. Hier haben wir ein Objekt, das in einem Container eingewickelt ist, wobei beide einen `teal`-Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Alpha-Kanalwert mithilfe der relativen Farb-Funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/Reference/Values/calc) und einer [Custom-Property](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alpha-Kanal wird mit dem `alpha`-Schlüsselwort referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanalwert, indem `alpha` mit dem `--alpha-multiplier`-Wert der Custom-Property multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte werden zu `<number>`-Werten aufgelöst

Um Kanalwertberechnungen in relativen Farben zu ermöglichen, werden alle Ursprungsfarbkanalwerte in angemessene {{cssxref("&lt;number&gt;")}}-Werte aufgelöst. Zum Beispiel werden in den `lch()`-Beispielen oben neue Helligkeitswerte berechnet, indem Zahlen zum `l`-Kanalwert der Ursprungsfarbe hinzugefügt oder davon subtrahiert werden. Wenn wir versuchen würden, `calc(l + 20%)` zu verwenden, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann nicht zu einem {{cssxref("&lt;percentage&gt;")}} addiert werden.

- Kanalwerte, die ursprünglich als `<percentage>` spezifiziert wurden, lösen sich zu einem `<number>` auf, das angemessen für die Ausgabefarb-Funktion ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel spezifiziert wurden, lösen sich in eine Anzahl von Grad innerhalb eines Bereichs von `0` bis `360`, einschließlich, auf.

Überprüfen Sie die verschiedenen [Seiten zu Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, in was sich ihre Ursprungs-Kanalwerte auflösen.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Anweisung laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie finden zusätzliche Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen Funktions-Notationstypen auf ihren eigenen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpallette-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Typ der Farbpalette auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpalette-Optionen sind wie folgt:

- **Komplementärfarben**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen, oder anders gesagt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen über Farbtöne und Farbkreise). Die zwei Farben werden als eine Basisfarbe und die Basisfarbe mit einem um +180 Grad verschobenen Farbtonkanal definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit voneinander auf dem Farbkreis entfernt sind. Die drei Farben werden als eine Basisfarbe, die Basisfarbe mit einem um -120 Grad verschobenen Farbtonkanal und die Basisfarbe mit einem um +120 Grad verschobenen Farbtonkanal definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit voneinander auf dem Farbkreis entfernt sind. Die vier Farben werden als eine Basisfarbe und die Basisfarbe mit einem um +90, +180 und +270 Grad verschobenen Farbtonkanal definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert – die Basisfarbe und die Basisfarbe mit einem um -20, -10, +10 und +20 verschobenen Helligkeitskanal.

#### HTML

Der vollständige HTML-Code wird unten zur Referenz gezeigt. Die interessantesten Teile sind wie folgt:

- Die `--base-color`-Custom-Property wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) im {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen anfänglichen Wert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette zu zeigen, die auf diesem Wert basiert, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Farbpicker der Basisfarbe wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Kontrollsatz erstellt. Wenn in dieser Steuerung ein neuer Wert gesetzt wird, wird die `--base-color`-Custom-Property unter Verwendung von JavaScript auf diesen Wert gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Gruppe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen ermöglicht es, einen Typ der zu generierenden Farbpalette auszuwählen. Wenn hier ein neuer Wert gewählt wird, wird über JavaScript eine neue Klasse auf dem `container`-`<div>` gesetzt, um die gewählte Palette darzustellen. In der CSS werden Nachfahren-Selektoren verwendet, um die Kinder-`<div>`-Elemente (zum Beispiel `.comp :nth-child(1)`) anzusprechen, sodass sie die korrekten Farben erhalten und die ungenutzten `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>`, das die Kinder-`<div>`-Elemente enthält, welche die Farben der generierten Palette zeigen. Beachten Sie, dass eine anfängliche Klasse `comp` darauf gesetzt ist, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Nachfolgend zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachfahren-Selektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Wir legen mehr Wert auf die Position der `<div>`-Elemente in der Quellreihenfolge als auf den Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

Im letzten Regelwerk haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp anzusprechen, indem wir [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) setzen, um zu verhindern, dass sie gerendert werden.

Die Farben selbst schließen die `--base-color` ein, sowie relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Funktion – übergeben die Ursprungs-`--base-color` und definieren eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal, wie es erforderlich ist.

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

##### Ein Hinweis zu `@supports`-Tests

Im hier gezeigten CSS bemerken Sie wahrscheinlich {{cssxref("@supports")}}-Blöcke, die verwendet werden, um unterschiedlichen {{cssxref("background-color")}}-Werten für Browser anzubieten, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese werden benötigt, weil die ursprüngliche Implementation von Safari auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was Verwirrung stiftete. In neueren Implementierungen werden Ursprungsfarbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aufgelöst, was bedeutet, dass Berechnungen immer mit einheitslosen Werten vorgenommen werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farberklärung durchgeführt wird – `color: lch(from red l c calc(h + 90deg))` zum Beispiel – nicht unbedingt der tatsächlichen Wert, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachstmögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer Custom-Property im `@supports`-Test funktioniert nicht – der Test kommt immer positiv zurück, egal welchen Wert die Custom-Property hat. Dies liegt daran, dass ein Custom-Property-Wert erst dann ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Werts) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir den [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener zu den Radio-Buttons, damit, wenn einer ausgewählt ist, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die richtigen Hintergrundfarben auf die Kinder-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener zum Farbwahlkontrollsatz hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den `--base-color`-Wert der Custom-Property auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Kraft der relativen CSS-Farben zu zeigen – wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem eine einzige Custom-Property angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI Farbschema-Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und Text enthält, aber mit einem Dreh – unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Steuerelement. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue` Custom-Property-Wert auf den neuen Reglerwert zu setzen.

Dies passt das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert von `--hue` gesetzt ist.
- Die anderen im Design verwendeten Farben sind relative Farben basierend auf `--base-color`. Daher ändern sie sich, wenn die `--base-color` sich ändert.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

- Das {{htmlelement("main")}}-Element dient als äußerer Wrapper, um den Rest des Inhalts zu enthalten, damit die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
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

Im CSS hat der `:root` einen Standard-`--hue`-Wert, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farben, um das Farbschema zu definieren, sowie ein radialer Verlauf, der den gesamten Body ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe geeignet wäre) und passt ihren Farbtonwert an den in der `--hue`-Custom-Property festgelegten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem sie eine Ursprungsfarbe von `--base-color` nimmt und 40 zu ihrem Helligkeitswert hinzufügt.
- `--complementary-color`: Eine komplementär Farbe, die 180 Grad auf dem Farbkreis von `--base-color` entfernt ist. Diese wird erstellt, indem sie eine Ursprungsfarbe von `--base-color` nimmt und 180 zu ihrem Farbtonwert hinzufügt.

Jetzt schauen Sie sich den Rest des CSS an und achten Sie auf all die Plätze, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Ränder](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Schiebers ein.

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

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener zu dem Schieberegler hinzu, sodass, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue` Custom-Property-Wert auf der `:root` (das `<html>`-Element), der den ursprünglichen Standardwert, den wir in unserem CSS gesetzt haben, überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten angezeigt. Relative CSS-Farben werden hier verwendet, um die Farbgebung eines gesamten UI zu steuern, die live angepasst werden kann, während ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://de.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
