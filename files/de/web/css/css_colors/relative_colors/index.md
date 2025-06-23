---
title: Verwendung von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: cd9b29d45dc19fccca6c68d5368878eb581c3059
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein leistungsstarkes Merkmal, das die einfache Erstellung von Komplementärfarben zu bestehenden Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und somit die effektivere Erstellung von Farbpaletten unterstützt.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und geht auf einige illustrative Beispiele ein.

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

1. Integrieren Sie eine grundlegende Farbfunktion (dargestellt durch _`color-function()`_), wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Übergeben Sie die **Ursprungsfarbe** (repräsentiert durch _`origin-color`_), auf der Ihre relative Farbe basieren soll, vorangestellt mit dem Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell verwendet, einschließlich eines Farbwertes, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion fügen Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe hinzu.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, der gleiche wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, der durch einen Schrägstrich (`/`) eingeleitet wird. Wenn der `alpha`-Kanalwert nicht explizit spezifiziert ist, wird er standardmäßig zum Alpha-Kanalwert der _`origin-color`_ (nicht 100 %, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie in Hauptfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese werden als entsprechend benannte Werte innerhalb der Farbfunktion verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf dem gleichen `red`-Farbwert erstellt wurde:

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe übernimmt, diese in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe als mit einem Rotkanal von Wert `200` und Grün-, Blau- und Alphakanälen des gleichen Wertes wie die Ursprungsfarbe definiert (es verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser verfügbar gemacht werden, die beide gleich `0` sind, und das `alpha` ist `100%`).

Dies führt zu einem Ergebnis von `rgb(200 0 0)` — ein etwas dunkleres Rot. Wenn wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben hätten, wäre das resultierende Ausgabefarbwert genau gleich dem Eingabewert. Der endgültige Ausgabefarbwert des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zunächst die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können das gesamte Spektrum der sichtbaren Farben nicht darstellen. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden als `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass die Abfrage des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte in derselben Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

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

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalkanalwerten der Ausgabefarbe.

Um zu wiederholen, bei der Definition einer relativen Farbe werden die Kanalkanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um sie beim Definieren der Kanalkanalwerte der Ausgabefarbe zu verwenden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (verfügbar gemacht als `r`, `g` und `b`) für die Kanalkanalwerte der Ausgabe, was bedeutet, dass die Ausgabefarbe die gleiche wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabe-Kanalkanalwerte in der richtigen Reihenfolge bereitstellen (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die für diese Kanäle gültig sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel, wenn Sie möchten, könnten Sie absolute Werte wie die unten gezeigten angeben, die `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie nicht wirklich eine relative Farbe. Sie würden dies wahrscheinlich nie in einem echten Code-Base tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich, zu erklären, dass Sie _können_ dies mit relativer Farbsyntax tun, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mixen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus – die `r`, `g` und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Ursprungsfarbkanalwerte für die Kanalkanalwerte der Ausgabefarbe `r`, `g` und `b`, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die zur verwendeten Funktion passen.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Kanalkanalwerte der Ausgabefarbe genau den Kanalkanalwerten der Ursprungsfarbe entsprechen:

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

Es ist nochmal erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet wiederum viel Flexibilität. Generell wird es Sie nicht interessieren und Sie kennen möglicherweise nicht einmal das System, in dem die Ursprungsfarbe definiert ist (Sie haben möglicherweise einfach einen [benutzerdefinierten Eigenschaftswert](#verwendung_von_benutzerdefinierten_eigenschaften), den Sie manipulieren möchten). Sie möchten nur eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Bei der Erstellung einer relativen Farbe können Sie Werte verwenden, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch in den Definitionen der Kanalkanalwerte der Ausgabefarbe definiert sind. Schauen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den standardmäßigen Marken-Deckkraftwert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eine erhält eine absolute Farbe — unser `--base-color` Markenpurpur. Die andere bekommt eine relative Farbe, die unserem Markenpurpur entspricht, transformiert um einen Alphakanal hinzuzufügen, der unserem Standard-Deckkraftwert entspricht.

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Verwendung von Mathematikfunktionen

Sie können CSS [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabekanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der folgende CSS-Stil wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten Varianten heller und dunkler Variante dieser `--base-color` erhalten. Diese Varianten werden mit relativen Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben und die Ausgabefarbe hat ihren Helligkeitskanal durch eine `calc()`-Funktion modifiziert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% subtrahiert.

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Manipulation des Alphakanals

Dieses Beispiel zeigt die Änderung des Alphakanals einer benannten Farbe. Hier haben wir ein Element, das in einem Container eingeschlossen ist, die beide einen `teal`-Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Wert des Alphakanals mithilfe der relativen Farbfeature, der [`calc()`-Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*).

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

Der Alphakanal wird mit dem `alpha`-Schlüsselwort referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alphakanalwert, indem `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator von `0,3` kleiner als `1,0` ist.

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalkanalwerte werden in `<number>`-Werte aufgelöst

Um Kanalkanalwertberechnungen in relativen Farben durchzuführen, werden alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte aufgelöst. Zum Beispiel, in den `lch()`-Beispielen oben, berechnen wir neue Helligkeitswerte, indem wir Zahlen zu dem `l`-Kanalkanalwert der Ursprungsfarbe addieren oder von diesem subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu schreiben, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalkanalwerte, die ursprünglich als `<percentage>` angegeben wurden, werden in einen `<number>` aufgelöst, der für die Ausgabefarb-Funktion geeignet ist.
- Kanalkanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, werden in eine Anzahl von Grad in einem Bereich von `0` bis `360`, einschließlich, aufgelöst.

Prüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Details, in was ihre Ursprungs-Kanalkanalwerte aufgelöst werden.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie es durch eine {{cssxref("@supports")}}-Regel testen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele zur Verwendung der relativen Farbsyntax in den verschiedenen Funktionsnotierungstypen auf ihren speziellen Seiten finden: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Ablaufkalender-Generator

Dieses Beispiel erlaubt es Ihnen, eine Basisfarbe und eine Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders ausgedrückt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für mehr Informationen über Farbtöne und Farbkreise). Die zwei Farben werden als Basisfarbe und Basisfarbe mit Farbtöne-Kanal +180 Grad definiert.
- **Triadisch**: Enthält drei Farben in gleichen Abständen um den Farbkreis. Die drei Farben werden als Basisfarbe, Basisfarbe mit Farbtöne-Kanal -120 Grad und Basisfarbe mit Farbtöne-Kanal +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben in gleichen Abständen um den Farbkreis. Die vier Farben werden als Basisfarbe und Basisfarbe mit Farbtöne-Kanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit dem gleichen Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zum Nachschlagen aufgeführt. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}} Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es leicht mit JavaScript aktualisiert werden kann. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Livemuster hat es beim Rendern entfernt.
- Der Basisfarbenwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerungselement erstellt. Wenn ein neuer Wert in diesem Steuerungselement gesetzt wird, wird die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert mittels JavaScript gesetzt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Gruppe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen ermöglicht die Auswahl eines zu generierenden Farbpalettentypen. Wenn hier ein neuer Wert ausgewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container` `<div>` festzulegen, die den gewählten Palettentyp darstellt. In dem CSS werden Nachkommen-Selektoren verwendet, um die Kind-`<div>`-Elemente (z.B. `.comp :nth-child(1)`) zu targetieren, so dass ihnen die korrekten Farben zugewiesen werden und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>`-Element, das die im Layout des Palettenlayouts angezeigten Farben enthält. Beachten Sie, dass ihm eine Anfangsklasse von `comp` zugeordnet ist, so dass die Seite beim ersten Laden ein komplementäres Farbdesign anzeigt.

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
  <div id="container" class="comp" style="--base-color: #ff0000;">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

Im Folgenden wird nur die CSS gezeigt, die die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachkommen-Selektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes Kind-`<div>` für die ausgewählte Palette anzuwenden. Wir geben mehr Acht auf die Position der `<div>`-Elemente in der Quelldatei als auf den Elementtyp, deshalb haben wir {{cssxref(":nth-child")}} verwendet, um sie zu targetieren.

Im letzten Regel haben wir den [Allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht verwendeten `<div>`-Elemente in jedem Palettentyp zu targieren und [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) festzulegen, um sie daran zu hindern, gerendert zu werden.

Die Farben selbst umfassen die `--base-color`, plus relative Farben, die aus dieser `--base-color` abgeleitet werden. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — unter Angabe der Ursprungs-`--base-color` und Definition einer Ausgabefarbe mit einem entsprechend angepassten Helligkeits- oder Farbtöne-Kanal.

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

##### Ein Exkurs zum `@supports`-Testing

In dem Beispiel-CSS werden Sie bemerken, dass {{cssxref("@supports")}}-Blöcke verwendet werden, um unterschiedliche {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine ältere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safaris ursprüngliche Implementierung auf einer älteren Version der Spezifikation basierte, bei der Ursprungs-Farbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen abhängig vom Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was Verwirrung stiftete. In neueren Implementierungen werden Ursprungs-Farbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aufgelöst, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farberklärung durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — und nicht unbedingt mit dem tatsächlichen Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie dieser sollten Sie die einfachste mögliche Erklärung verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test wird immer als positiv zurückgemeldet, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft gegeben wurde. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er gesetzt wird, um einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zu sein. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Optionsfeldern hinzu, so dass, wenn eines ausgewählt wird, die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Optionsfeldes, so dass die passenden Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Farbwähler-Steuerungselement hinzu, so dass, wenn eine neue Farbe ausgewählt wird, die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis sieht wie folgt aus. Dies beginnt die Leistung der relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live durch das Anpassen einer einzelnen benutzerdefinierten Eigenschaft aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live UI-Farbdesign-Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und einen Text enthält, jedoch mit einer Besonderheit — unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerungselement. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue`-benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies wirkt sich wiederum auf das Farbschema der gesamten Benutzeroberfläche aus:

- Der `--base-color`-Wert ist eine relative Farbe mit seinem Farbtöne-Kanal auf den Wert der `--hue`-Eigenschaft gesetzt.
- Die anderen im Design verwendeten Farben sind relative Farben basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element dient als äußerer Wrapper, um den Rest des Inhalts zu enthalten, so dass die Karte und das Formular innerhalb von `<main>` vertikal und horizontal als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerung und sein {{htmlelement("label")}}.

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

Im CSS hat `:root` einen Standardwert für `--hue` festgelegt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zur Definition des Farbschemas, plus ein radialer Gradienten, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe ausreichen würde) und passt ihren Farbtöne-Wert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, gedacht für die Verwendung als Hintergrund. Dies wird gemacht, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert addiert wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wird gemacht, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtönewert addiert wird.

Schauen Sie sich nun den Rest des CSS an und nehmen Sie zur Kenntnis, an welchen Stellen diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers.

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

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Schiebereglersteuerung hinzu, so dass, wenn ein neuer Wert gesetzt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-benutzerdefinierten Eigenschaftswert auf `:root` (das `<html>`-Element), der unseren ursprünglichen Standardwert, den wir in unserem CSS gesetzt haben, überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, indem ein einziger Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
