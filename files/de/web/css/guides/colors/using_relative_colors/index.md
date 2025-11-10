---
title: Verwenden relativer Farben
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, leicht Komplementärfarben zu bestehenden Farben zu erstellen — wie z.B. hellere, dunklere, gesättigte, halbdurchsichtige oder invertierte Varianten — um eine effektivere Farbpallettenerstellung zu ermöglichen.

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

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Verwenden Sie eine grundlegende Farbfunktionsdarstellung (_`color-function()`_), wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) usw. Welche Funktion Sie auswählen, hängt von dem Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (der **Ausgabefarbe**).
2. Übergeben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basiert, und führen Sie sie mit dem `from`-Schlüsselwort ein. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell verwendet, einschließlich eines Farbwertes, der in einer [CSS-Custom-Property](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Falle der [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion fügen Sie den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe hinzu.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, der gleiche wie der Originalwert oder ein Wert, der zu dem Kanalwert der Ursprungsfarbe relativ ist.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, der mit einem Schrägstrich (`/`) eingeleitet wird. Wenn der `alpha`-Kanalwert nicht explizit festgelegt ist, wird er standardmäßig auf den Alpha-Kanalwert der _`origin-color`_ gesetzt (nicht 100 %, was der Fall für absolute Farbwerte ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farbfunktionsdarstellung kompatibel ist, und zerlegt sie dann in die Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen solchen hat). Diese sind als entsprechend benannte Werte innerhalb der Farbfunktionsdarstellung verfügbar — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabe-Kanalwerte verwendet werden können.

Lassen Sie uns die relative Farbsyntax in Aktion erleben. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion und basierend auf demselben `red`-Farbwert erstellt wurde:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe als eine mit einem Rotkanal von Wert `200` und Grün-, Blau- und Alpha-Kanälen mit einem Wert definiert, der dem der Ursprungsfarbe entspricht (sie verwendet die in der Funktion vom Browser bereitgestellten `g`- und `b`-Werte, die beide gleich `0` sind, und der `alpha` ist `100%`).

Dies ergibt eine Ausgabe von `rgb(200 0 0)` — ein etwas dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabe des Browsers (der berechnete Wert) ist ein äquivalenter sRGB-`color()`-Wert zu `rgb(200 0 0)` — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das Erste, was der Browser tut, um eine relative Farbe zu berechnen, die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktionsdarstellung kompatiblen Wert umzuwandeln (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktionsdarstellung durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionsdarstellungen können nicht das vollständige Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als ein [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert ergibt.
> - Für neuere Farbfunktionsdarstellungen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden relative Farbausgabewerte in demselben Syntax wie die verwendete Farbfunktionsdarstellung ausgedrückt. Wenn zum Beispiel eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Farbfunktionsdarstellung verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

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

## Syntax-Flexibilität

Es gibt eine wichtige Unterscheidung zwischen den zerlegten Ursprungskanalfarbwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Ausgabekanalwerten.

Um es noch einmal zu wiederholen: Wenn eine relative Farbe definiert ist, werden die Kanalfarbwerte der Ursprungsfarbe in der Funktion zur Verfügung gestellt, um bei der Definition der Ausgabekanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungskanalfarbwerte (verfügbar gemacht als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Jedoch müssen Sie, wenn Sie die Ausgabewerte angeben, die Ursprungskanalfarbwerte nicht überhaupt verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die gültige Werte für diese Kanäle sind. Dies verleiht den relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel könnten Sie absolute Werte angeben, wie die unten gezeigten, und `red` in `blue` verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Sie würden dies wahrscheinlich niemals in einem echten Codebasis tun und einfach einen absoluten Farbwert stattdessen verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax _können_, als Ausgangspunkt zum Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende nimmt ein etwas dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalfarbwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende verwendet die Kanalfarbwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalfarbwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionsdarstellungen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktionsdarstellung definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Namensgebung der Ursprungsfarbwerte je nach verwendeter Funktionsdarstellung unterschiedlich ist.

Unten finden Sie Beispiele für die relative Farbsyntax für jede der Farbfunktionen. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbkanalwerte exakt den Ursprungsfarbkanalwerten entsprechen:

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

Es ist noch einmal hervorzuheben, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet erneut viel Flexibilität. Im Allgemeinen werden Sie wahrscheinlich nicht daran interessiert sein und vielleicht nicht einmal wissen, in welchem System die Ursprungsfarbe definiert ist (Sie könnten einfach einen [Custom Property-Wert](#verwendung_von_benutzerdefinierten_eigenschaften) zur Manipulation haben). Sie möchten lediglich eine Farbe eingeben und z.B. eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktionsdarstellung einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabe-Farbkanalwert-Definitionen definiert sind. Schauen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbstichwort, aber relative Farben können jede beliebige Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Dann geben wir zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Einer erhält eine absolute Farbe — unser `--base-color` Marken-Purple. Der andere erhält eine relative Farbe gleich unserer Marken-Purple, die transformiert wird, um einen Alpha-Kanal hinzuzufügen, der unserem Standard-Opazitätswert entspricht.

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

Sie können CSS-[mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere wird mit einem unveränderten `--base-color` versehen, während die linken und rechten mit aufgehellten und abgedunkelten Varianten dieses `--base-color` versehen werden. Diese Varianten werden mit relativen Farben definiert — der `--base-color` wird in eine `lch()`-Funktionsdarstellung übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20 % zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20 % davon subtrahiert.

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

Dieses Beispiel demonstriert die Änderung des Alpha-Kanals einer benannten Farbe. Hier haben wir ein Element, das in einem Container eingeschlossen ist, die beide einen `teal` Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Alpha-Kanalwert mithilfe der relativen Farbfunktion, der [`calc()`-Funktion](/de/docs/Web/CSS/Reference/Values/calc), und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Der Alpha-Kanal wird mit dem `alpha` Schlüsselwort referenziert. In diesem Fall modifiziert der `calc(alpha * var(--alpha-multiplier))`-Ausdruck den Alpha-Kanalwert durch Multiplikation `alpha` mit dem `--alpha-multiplier`-Benutzerdefiniert-Wert. Der Container erhält einen semitransparenten Hintergrund, weil der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Damit die Berechnungen der Kanalwerte in relativen Farben funktionieren, lösen sich alle Ursprungskanalfarbwerte in angemessene {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel, in den `lch()`-Beispielen oben, berechnen wir neue Helligkeitswerte durch Hinzufügen oder Subtrahieren von Zahlen von dem `l`-Kanalfarbwert der Ursprungsfarbe. Wenn wir versuchen würden, `calc(l + 20%)` zu tun, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als ein `<percentage>` angegeben sind, werden zu einem `<number>` umgewandelt, das für die Ausgabefarbfunktionsdarstellung geeignet ist.
- Kanalwerte, die ursprünglich als ein {{cssxref("&lt;hue&gt;")}}-Winkel angegeben sind, lösen sich in eine Anzahl von Grad im Bereich von `0` bis `360`, einschließlich, auf.

Überprüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/Guides/Colors#functions) für die Details dessen, was ihre Ursprungskanalwerte lösen sich auf.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-At-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele finden, die die Verwendung von relativer Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren speziellen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp zu wählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders ausgedrückt, _gegenüberliegende Farbtöne_ (sehen Sie sich den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen zu Farbtönen und Farbkreisen an). Die beiden Farben werden als eine Basisfarbe und die Basisfarbe mit dem Farbtonkanal +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben in gleichen Abständen um den Farbkreis. Die drei Farben werden als eine Basisfarbe, die Basisfarbe mit dem Farbtonkanal -120 Grad und die Basisfarbe mit dem Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben in gleichen Abständen um den Farbkreis. Die vier Farben werden als eine Basisfarbe und die Basisfarbe mit dem Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit dem Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color`-Benutzerdefinierte Eigenschaft wird als inline-{{cssxref("style")}} auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Livebeispiel entfernte es beim Rendern.
- Der Basispicker für Farben wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Kontrolle erstellt. Wenn ein neuer Wert in dieser Kontrolle festgelegt wird, wird die `--base-color`-Benutzerdefinierte Eigenschaft mit diesem Wert mit JavaScript gesetzt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Gruppe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Kontrollen ermöglicht das Wählen eines Farbpalettentyps zur Generierung. Wenn ein neuer Wert hier ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container`-`<div>` festgelegt, die den gewählten Palette repräsentiert. Im CSS werden Nachfahren-Selektoren verwendet, um die Kind-`<div>`s zu verfolgen (z.B. `.comp :nth-child(1)`), sodass sie die korrekten Farben angewendet bekommen und die unbenutzten `<div>`-Knoten verborgen werden.
- Das `container`-`<div>`, das die Kind-`<div>`s enthält, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass ihm anfangs eine Klasse `comp` zugewiesen wird, sodass die Seite ein komplementäres Farbschema anzeigt, wenn sie zuerst geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahren-Selektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Uns ist wichtiger die Position der `<div>`s in der Quelldatei als die Art des Elements, sodass wir {{cssxref(":nth-child")}} verwendet haben, um sie zu verfolgen.

Im letzten Regelwerk haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die unbenutzten `<div>`-Elemente in jedem Palettentyp zu steuern, [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) einzustellen, um sie davon abzuhalten, gerendert zu werden.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Funktion — das Ursprungs-`--base-color` wird übergeben und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal wird definiert.

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

##### Ein Exkurs zum `@supports`-Testen

Im Beispiel-CSS bemerken Sie {{cssxref("@supports")}}-Blöcke, die verwendet werden, um verschiedene {{cssxref("background-color")}}-Werte an Browser bereitzustellen, die eine frühere Entwurfspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil die ursprüngliche Implementierung in Safari auf einer älteren Version der Spezifikation basierte, in der Ursprungskanalfarbwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen werden Ursprungskanalfarbwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}} Wert aufgelöst, was bedeutet, dass Berechnungen immer mit dimensionslosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit irgendeiner Farbangabe gemacht wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der eigentliche Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie diesen sollten Sie die einfachstmögliche Angabe verwenden, die dennoch die syntaktischen Unterschiede enthält, die Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test wird immer positiv, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft erhält. Dies liegt darin begründet, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einem ungültigen Wert (oder einem Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red` Stichwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis zur den Radio-Schaltflächen hinzu, sodass die Funktion `setContainer()` ausgeführt wird, wenn eines ausgewählt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert der gewählten Radio-Schaltfläche, sodass die korrekten Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zur dem Farbauswahlbedienfeld hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der `--base-color`-Benutzerdefinierten Eigenschaft auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Leistungsfähigkeit der relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem ein einzelner benutzerdefinierter Eigenschaftswert angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-Benutzeroberflächenfarbschema-Update

Dieses Beispiel zeigt eine Karte mit einer Überschrift und Text, jedoch mit einem besonderen Extra — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Kontrolle. Wenn der Wert geändert wird, wird mit JavaScript ein `--hue`-Benutzerdefinierter Wert auf den neuen Schiebereglerwert gesetzt.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert `--hue` gesetzt ist.
- Die anderen Farben, die im Design verwendet werden, sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußere Umhüllung, um den Rest des Inhalts zu enthalten und die Karte und das Formular innerhalb von `<main>` vertikal und horizontal zentriert als eine Einheit auszurichten.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("formular")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Kontrolle und ihre {{htmlelement("label")}}.

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

Im CSS hat der `:root` einen Standard-`--hue`-Wert festgelegt, relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farben, um das Farbschema zu definieren, plus einen radialen Verlauf, der das gesamte Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede Vollfarbe geeignet wäre) und passt ihren Farbtonwert an den in der `--hue`-Benutzerdefinierten Eigenschaft festgelegten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe, die 180 Grad um den Farbkreis von `--base-color` entfernt ist. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Schauen Sie sich jetzt den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies umfasst [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Ränder](/de/docs/Web/CSS/Reference/Properties/border), [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/Reference/Properties/accent-color) des Schiebers.

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

Das JavaScript fügt dem Schiebereglerkontron eine [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener hinzu, sodass, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen inline-`--hue`-Benutzerdefinierten Wert auf dem `:root` (dem `<html>`-Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist unten dargestellt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, während ein einziger Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) in der Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) in der Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
