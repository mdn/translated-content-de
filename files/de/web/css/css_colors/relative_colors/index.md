---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Ergänzungen zu vorhandenen Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Struktursyntax:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit den gleichen [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erzeugt, jedoch mit unterschiedlichen Parametern:

1. Beziehen Sie eine Basisfarbfunktion (dargestellt als _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. ein. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die relative Farbe verwenden möchten, die Sie erstellen (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt als _`origin-color`_) an, auf der Ihre relative Farbe basieren soll, und verwenden Sie das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein verfügbares Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Custom-Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion, geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert des Typs {{CSSXref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, der durch einen Schrägstrich (`/`) angezeigt wird. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht auf 100 %, wie dies bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farbfunktion kompatibel ist, und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farbfunktion zur Verfügung — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Betrachten wir die relative Farbsyntax in Aktion. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, erstellt mit der `rgb()`-Funktion basierend auf demselben `red`-Farbwert:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, diese in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe mit einem Rotkanalwert von `200` und Grün-, Blau- und Alpha-Kanälen mit demselben Wert wie die Ursprungsfarbe definiert (es verwendet die `g` und `b`-Werte, die innerhalb der Funktion vom Browser bereitgestellt werden, die beide `0` sind, und das `alpha` ist `100%`).

Dies ergibt eine Ausgabe von `rgb(200 0 0)` — ein etwas dunkleres Rot. Hätten wir einen Rotkanalwert von `255` spezifiziert (oder einfach nur den `r`-Wert), wäre die resultierende Ausgabefarbe genau gleich dem Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` äquivalent ist — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können das gesamte sichtbare Farbspektrum nicht wiedergeben. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden als `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass der Abfragung des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden relative Farbausgabewerte im gleichen Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb funktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Alle folgenden Zeilen ergeben eine äquivalente Ausgabefarbe:

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

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungskanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu betonen, wenn eine relative Farbe definiert ist, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um beim Festlegen der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungskanalwerte (die als `r`, `g` und `b` verfügbar gemacht werden) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungskanalwerte gar nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie beispielsweise wollten, könnten Sie absolute Werte angeben wie die unten gezeigten und `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Sie würden so etwas in einem echten Codebasis vermutlich nie tun und stattdessen einfach einen absoluten Farbwert verwenden. Wir fanden es jedoch nützlich zu erklären, dass Sie dies mit relativer Farbsyntax \_können, als Ausgangspunkt für das Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingabefarbe und gibt eine hellgraue Farbe aus — die `r`, `g` und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Ursprungskanalwerte für die Ausgabekanalwerte `r`, `g` und `b`, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Werte der Ursprungsfarbe je nach verwendeter Funktion unterschiedliche Namen haben.

Nachfolgend finden Sie Beispiele zur relativen Farbsyntax für jede Farbfunktion. Jeder Fall ist so einfach wie möglich gehalten, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen.

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

Es sei noch einmal erwähnt, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet eine Menge Flexibilität. Im Allgemeinen werden Sie sich nicht für das System interessieren und es möglicherweise nicht einmal kennen, in dem die Ursprungsfarbe definiert ist (Sie könnten einfach einen Wert einer [benutzerdefinierten Eigenschaft](#verwendung_von_benutzerdefinierten_eigenschaften) manipulieren). Sie möchten einfach eine Farbe eingeben und z. B. eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarbkanalwertdefinitionen definiert sind. Schauen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Marken-Opazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser Marken-`--base-color` Purple. Das andere erhält eine relative Farbe, die gleich unserer Marken-Purple ist, transformiert, um einen Alphakanal hinzuzufügen, der unserem Standard-Opazitätswert entspricht.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Verwendung von mathematischen Funktionen

Sie können CSS-[Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` in aufgehellter und abgedunkelter Form gegeben werden. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Manipulation des Alpha-Kanals

Dieses Beispiel zeigt die Änderung des Alpha-Kanals einer benannten Farbe. Hier haben wir ein Element, das in einem Container eingebettet ist, die beide einen `teal`-Hintergrund haben. Um zwischen den Hintergründen zu unterscheiden, variieren wir den Wert des Alpha-Kanals mithilfe der relativen Farb funktion, der [`calc()`-Funktion](/de/docs/Web/CSS/calc) und einer [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*).

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

Der Alpha-Kanal wird mit dem Schlüsselwort `alpha` referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alpha-Kanalwert, indem `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert wird. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator von `0.3` kleiner als `1.0` ist.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Damit Kanalwertberechnungen in relativen Farben funktionieren, lösen sich alle Ursprungskanalwerte in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Beispielsweise berechnen wir in den obigen `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen zu oder von dem `l`-Kanalwert der Ursprungsfarbe hinzufügen oder subtrahieren. Wenn wir `calc(l + 20%)` verwenden würden, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in einen `<number>`-Wert auf, der für die Ausgabefunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel angegeben wurden, lösen sich in eine Anzahl von Grad im Bereich von `0` bis `360` inklusive auf.

Überprüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Details, wie ihre Ursprungskanalwerte aufgelöst werden.

## Überprüfung der Browser-Kompatibilität

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie diese durch eine {{cssxref("@supports")}}-At-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen demonstrieren, auf ihren speziellen Seiten finden: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Typ von Farbpalette auszuwählen. Der Browser zeigt dann eine passende Farbpalette basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders ausgedrückt, _entgegengesetzte Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen zu Farbtönen und Farbkreisen). Die beiden Farben werden als Basisfarbe und als Basisfarbe mit einem Farbtankanalkanal von +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit um den Farbkreis verteilt sind. Die drei Farben werden als Basisfarbe, Basisfarbe mit einem Farbtankanalkanal von -120 Grad und Basisfarbe mit einem Farbtankanalkanal von +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit um den Farbkreis verteilt sind. Die vier Farben werden als Basisfarbe und als Basisfarben mit Farbtankanalkanal von +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromatischen Palette definiert — Basisfarbe und Basisfarbe mit einem Helligkeitskanal von -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um beim Laden des Beispiels eine auf diesem Wert basierende Farbpalette anzuzeigen. Normalerweise würden wir dies wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen, aber das MDN-Live-Beispiel entfernte es beim Rendern.
- Der Farbwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die benutzerdefinierte Eigenschaft `--base-color` mit diesem Wert mit JavaScript gesetzt, was wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Anzahl der [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelemente ermöglicht die Wahl eines zu generierenden Palettentyps. Wenn hier ein neuer Wert gewählt wird, wird mit JavaScript eine neue Klasse auf dem `container`-`<div>` gesetzt, die die gewählte Palette darstellt. In CSS werden Nachkommenselektoren verwendet, um die untergeordneten `<div>`s zu stylen (z.B. `.comp :nth-child(1)`), damit sie die richtigen Farben erhalten und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>`-Element, das die untergeordneten `<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass ihm eine Anfangsklasse von `comp` zugeordnet ist, sodass die Seite ein komplementäres Farbschema anzeigt, wenn sie zum ersten Mal geladen wird.

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

Unten zeigen wir nur den CSS-Code, der die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachkommenselektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes untergeordnete `<div>` für die gewählte Palette anzuwenden. Es interessiert uns mehr die Position der `<div>`s in der Quellreihenfolge als der Typ des Elements, also haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

Im letzten Regelwerk haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht verwendeten `<div>`-Elemente in jedem Palettentyp anzusprechen und sie mit [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) aus dem Rendern auszuschließen.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — mit der Ursprung `--base-color` und der Definition einer Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtankanalkanal nach Bedarf.

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
  --base-color: #ff0000;

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

##### Ein Nachsatz zur `@supports`-Prüfung

Im Beispiel-CSS werden Sie die Verwendung von {{cssxref("@supports")}}-Blöcken bemerken, um verschiedenen {{cssxref("background-color")}}-Werten für Browser zu liefern, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützt haben. Diese sind erforderlich, da die erste Implementierung von Safari auf einer älteren Version der Spezifikation basierte, in der die Ursprungskanalwerte der Farbe als {{cssxref("&lt;number&gt;")}}-Werte oder andere Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass die Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was Verwirrung stiftete. In neueren Implementierungen lösen sich die Ursprungskanalwerte der Farbe immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie die Unterstützung in jedem Fall durch eine beliebige Farbangabe getestet wird — z.B. `color: lch(from red l c calc(h + 90deg))` — nicht unbedingt der tatsächliche Wert, der für andere Browser variiert werden muss. Beim Testen komplexer Werte wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einfügen einer benutzerdefinierten Eigenschaft in den `@supports`-Test funktioniert nicht — der Test wird immer als positiv zurückgegeben, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft erhält. Dies geschieht, weil ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er so zugewiesen wird, dass er einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft darstellt. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzugefügt, sodass bei Auswahl die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die richtigen Hintergrundfarben auf die untergeordneten `<div>`s für den gewählten Palettentyp angewendet werden.
- Wird ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Farbwähler-Steuerelement hinzugefügt, sodass bei Auswahl einer neue Farbe die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis sieht folgendermaßen aus. Dieses Beispiel zeigt die Leistungsfähigkeit relativer CSS-Farben — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem wir eine einzige benutzerdefinierte Eigenschaft anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-UI-Farbschema-Aktualisierung

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einem besonderen Twist — unterhalb der Karte befindet sich ein Schieberegler-([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerelement. Wenn der Wert geändert wird, setzt JavaScript den Wert einer benutzerdefinierten Eigenschaft `--hue` auf den neuen Schieberegler-Wert.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbkankenkanalwert auf den Wert der benutzerdefinierten Eigenschaft `--hue` gesetzt.
- Die anderen im Design verwendeten Farben sind relative Farben basierend auf `--base-color`. Sie ändern sich somit, wenn sich die `--base-color` ändert.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal in `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
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

Im CSS hat die `:root` einen Standard-`--hue`-Wert, der darauf eingestellt ist, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zur Definition des Farbschemas, plus einen radialen Gradient, der den gesamten `body` füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede Vollfarbe es auch tun würde) und passt ihren Farbwert auf den in der benutzerdefinierten Eigenschaft `--hue` festgelegten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` angenommen und 40 zum Helligkeitswert hinzugefügt werden.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` angenommen und 180 zum Farbkankenkanalwert hinzugefügt werden.

Schauen Sie sich den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dazu gehören Hintergründe, Rahmen, [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers.

> [!NOTE]
> Der Kürze halber werden nur die Teile des CSS gezeigt, die relevant für die Verwendung relativer Farben sind.

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

Das JavaScript fügt dem Schiebereglers ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener hinzu, sodass bei jedem neuen Wert, der gesetzt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-Wert für die benutzerdefinierte Eigenschaft im `:root` (das `<html>`-Element), das den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, indem ein einziger Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
