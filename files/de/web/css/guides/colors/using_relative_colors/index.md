---
title: Relative Farben verwenden
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: d9b5b8a024347a17498356d6b7825cc4ff96d693
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert die **Syntax für relative Farben**. Damit lässt sich ein CSS-Wert vom Typ {{cssxref("&lt;color&gt;")}} relativ zu einer anderen Farbe definieren. So können Sie aus vorhandenen Farben beispielsweise hellere, dunklere, stärker gesättigte, halbtransparente oder invertierte Varianten erzeugen und Farbpaletten effektiver erstellen.

Dieser Artikel erklärt die Syntax für relative Farben, stellt die verschiedenen Möglichkeiten vor und zeigt einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Struktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Verwenden Sie eine grundlegende Farbfunktion (oben durch _`color-function()`_ dargestellt), etwa [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl). Welche Funktion Sie wählen, hängt vom Farbmodell der relativen Farbe ab, die Sie erstellen möchten (der **Ausgabefarbe**).
2. Übergeben Sie die **Ausgangsfarbe** (oben durch _`origin-color`_ dargestellt), auf der die relative Farbe basieren soll, und stellen Sie ihr das Schlüsselwort `from` voran. Die Ausgangsfarbe kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert in einem beliebigen verfügbaren Farbmodell sein. Dazu gehören Farbwerte aus einer [benutzerdefinierten CSS-Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), Systemfarben, `currentColor` und sogar andere relative Farben.
3. Geben Sie bei der Funktion [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) zusätzlich den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie für jeden einzelnen Kanal einen Ausgabewert an. Die Ausgabefarbe wird nach der Ausgangsfarbe definiert – oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Welche Kanäle hier festgelegt werden, hängt von der [Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Bei [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) müssen Sie beispielsweise Werte für Farbton, Sättigung und Helligkeit angeben. Jeder Kanalwert kann ein neuer Wert sein, dem ursprünglichen Wert entsprechen oder relativ zum entsprechenden Kanalwert der Ausgangsfarbe definiert werden.
5. Optional können Sie für die Ausgabefarbe einen Wert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für den `alpha`-Kanal angeben. Stellen Sie diesem einen Schrägstrich (`/`) voran. Wird der Wert des `alpha`-Kanals nicht ausdrücklich angegeben, entspricht er standardmäßig dem Alphakanalwert von _`origin-color`_ (und nicht 100 %, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ausgangsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie anschließend in ihre Farbkanäle (sowie gegebenenfalls den `alpha`-Kanal). Innerhalb der Farbfunktion stehen diese als passend benannte Werte zur Verfügung: `r`, `g`, `b` und `alpha` bei `rgb()`, `l`, `a`, `b` und `alpha` bei `lab()`, `h`, `w`, `b` und `alpha` bei `hwb()` usw. Mit ihnen können neue Ausgabewerte für die Kanäle berechnet werden.

Sehen wir uns die Syntax für relative Farben in der Praxis an. Das folgende CSS gestaltet zwei {{htmlelement("div")}}-Elemente: eines mit der absoluten Hintergrundfarbe `red` und eines mit einer relativen Hintergrundfarbe, die mit `rgb()` auf Grundlage desselben Farbwerts `red` erstellt wird:

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Sie nimmt `red` als Ausgangsfarbe, konvertiert es in die entsprechende `rgb()`-Farbe (`rgb(255 0 0)`) und definiert dann eine neue Farbe: Ihr Rotkanal hat den Wert `200`, während Grün-, Blau- und Alphakanal dieselben Werte wie die Ausgangsfarbe haben. Dafür werden die vom Browser innerhalb der Funktion bereitgestellten Werte `g` und `b` verwendet, die beide `0` sind; `alpha` beträgt `100%`.

Das Ergebnis ist `rgb(200 0 0)` – ein etwas dunkleres Rot. Hätten wir für den Rotkanal `255` (oder einfach den Wert `r`) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie die Eingabefarbe. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht: `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zunächst die angegebene Ausgangsfarbe (im obigen Beispiel `red`) in einen Wert, der mit der verwendeten Farbfunktion (hier `rgb()`) kompatibel ist. So kann er aus der Ausgangsfarbe die Ausgabefarbe berechnen. Die Berechnungen erfolgen zwar relativ zur verwendeten Farbfunktion, der tatsächliche Ausgabefarbwert hängt jedoch vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können nicht das gesamte Spektrum sichtbarer Farben darstellen. Die Ausgabefarben von [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) werden daher als `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Wenn Sie den Ausgabefarbwert über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) abfragen, erhalten Sie folglich einen [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden die Ausgabewerte relativer Farben in derselben Syntax wie die verwendete Farbfunktion ausgedrückt. Wird beispielsweise die Farbfunktion [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) verwendet, ist die Ausgabefarbe ein `lab()`-Wert.

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

## Flexibilität der Syntax

Es ist wichtig, zwischen den in der Funktion bereitgestellten, zerlegten Kanalwerten der Ausgangsfarbe und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe zu unterscheiden.

Zur Wiederholung: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ausgangsfarbe innerhalb der Funktion zur Verfügung, um damit die Kanalwerte der Ausgabefarbe festzulegen. Das folgende Beispiel definiert eine relative Farbe mit `rgb()` und verwendet die Kanalwerte der Ausgangsfarbe (bereitgestellt als `r`, `g` und `b`) als Ausgabewerte. Die Ausgabefarbe ist somit dieselbe wie die Ausgangsfarbe:

```css
rgb(from red r g b)
```

Bei der Angabe der Ausgabewerte müssen Sie die Kanalwerte der Ausgangsfarbe allerdings überhaupt nicht verwenden. Sie müssen die Ausgabewerte lediglich in der richtigen Reihenfolge angeben (bei `rgb()` beispielsweise Rot, dann Grün, dann Blau). Dabei können Sie beliebige Werte wählen, sofern sie für die jeweiligen Kanäle gültig sind. Das macht relative CSS-Farben sehr flexibel.

Sie könnten beispielsweise wie unten absolute Werte angeben und so `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die Syntax für relative Farben verwenden, aber dieselbe Farbe wie die Ausgangsfarbe oder eine Farbe ausgeben, die gar nicht auf der Ausgangsfarbe basiert, erstellen Sie streng genommen keine relative Farbe. In einer echten Codebasis würden Sie das vermutlich nicht tun, sondern stattdessen einen absoluten Farbwert verwenden. Dennoch ist es für den Einstieg hilfreich zu wissen, dass die Syntax für relative Farben dies ermöglicht.

Sie können die bereitgestellten Werte sogar vertauschen oder wiederholen. Im folgenden Beispiel wird ein etwas dunkleres Rot als Eingabe verwendet und ein helles Grau ausgegeben: Die Kanäle `r`, `g` und `b` der Ausgabefarbe werden alle auf den Wert des Kanals `r` der Ausgangsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ausgangsfarbe für die Kanäle `r`, `g` und `b` der Ausgabefarbe, allerdings in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im vorherigen Abschnitt haben wir nur relative Farben betrachtet, die mit [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) definiert wurden. Relative Farben lassen sich jedoch mit jeder modernen CSS-Farbfunktion definieren: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in allen Fällen gleich; die Werte der Ausgangsfarbe haben jedoch jeweils Namen, die zur verwendeten Funktion passen.

Im Folgenden finden Sie Beispiele für die Syntax relativer Farben mit jeder Farbfunktion. Jedes Beispiel ist möglichst einfach gehalten: Die Kanalwerte der Ausgabefarbe entsprechen genau denen der Ausgangsfarbe.

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

Erwähnenswert ist auch, dass das Farbsystem der Ausgangsfarbe nicht mit dem Farbsystem übereinstimmen muss, mit dem die Ausgabefarbe erstellt wird. Das bietet ebenfalls viel Flexibilität. Im Allgemeinen interessiert Sie möglicherweise gar nicht, in welchem Farbsystem die Ausgangsfarbe definiert ist, oder Sie wissen es nicht einmal – etwa, wenn Sie lediglich einen [Wert aus einer benutzerdefinierten Eigenschaft](#benutzerdefinierte_eigenschaften_verwenden) bearbeiten möchten. Sie möchten einfach eine Farbe übergeben und beispielsweise eine hellere Variante erzeugen, indem Sie sie in eine `hsl()`-Funktion einsetzen und den Helligkeitswert ändern.

## Benutzerdefinierte Eigenschaften verwenden

Beim Erstellen einer relativen Farbe können Sie Werte aus [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) sowohl für die Ausgangsfarbe als auch in den Definitionen der Kanalwerte der Ausgabefarbe verwenden. Sehen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Marken-Grundfarbe `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, doch relative Farben akzeptieren für die Ausgangsfarbe jede Farbsyntax.
- `--standard-opacity` enthält den Standardwert für die Deckkraft unserer Marke, den wir auf halbtransparente Boxen anwenden möchten: `0.75`.

Anschließend geben wir zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe – das Markenviolett aus `--base-color`. Das andere erhält eine relative Farbe, die unserem Markenviolett entspricht, aber um einen Alphakanal mit dem Wert unserer Standarddeckkraft ergänzt wird.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Mathematische Funktionen verwenden

Mit CSS-[Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} können Sie die Werte für die Kanäle der Ausgabefarbe berechnen. Sehen wir uns ein Beispiel an.

Das folgende CSS gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte Farbe `--base-color`, während das linke und das rechte jeweils eine aufgehellte beziehungsweise abgedunkelte Variante von `--base-color` erhalten. Diese Varianten werden als relative Farben definiert: `--base-color` wird an eine `lch()`-Funktion übergeben, und der Helligkeitskanal der Ausgabefarbe wird mithilfe von `calc()` angepasst. Für die aufgehellte Farbe werden dem Helligkeitskanal 20 % hinzugefügt, für die abgedunkelte Farbe werden 20 % davon abgezogen.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Den Alphakanal verändern

Dieses Beispiel zeigt, wie sich der Alphakanal einer benannten Farbe ändern lässt. Ein Element befindet sich in einem Container; beide haben einen `teal`-Hintergrund. Um die Hintergründe voneinander zu unterscheiden, ändern wir den Wert des Alphakanals mithilfe relativer Farben, der [Funktion `calc()`](/de/docs/Web/CSS/Reference/Values/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Auf den Alphakanal wird mit dem Schlüsselwort `alpha` verwiesen. Hier verändert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alphakanalwert, indem er `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator `0.3` kleiner als `1.0` ist.

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte werden zu `<number>`-Werten aufgelöst

Damit Berechnungen mit Kanalwerten bei relativen Farben funktionieren, werden alle Kanalwerte der Ausgangsfarbe zu passenden {{cssxref("&lt;number&gt;")}}-Werten aufgelöst. In den obigen `lch()`-Beispielen berechnen wir etwa neue Helligkeitswerte, indem wir Zahlen zum Wert des Kanals `l` der Ausgangsfarbe addieren oder davon subtrahieren. Würden wir `calc(l + 20%)` verwenden, entstünde eine ungültige Farbe: `l` ist ein `<number>`-Wert, zu dem kein {{cssxref("&lt;percentage&gt;")}}-Wert addiert werden kann.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, werden zu einem `<number>`-Wert aufgelöst, der für die Ausgabefarbfunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("hue")}}-Winkel angegeben wurden, werden zu einer Gradzahl im Bereich von einschließlich `0` bis `360` aufgelöst.

Auf den Seiten zu den einzelnen [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) erfahren Sie, zu welchen Werten deren Ausgangskanäle jeweils aufgelöst werden.

## Ausgangsfarben außerhalb des sRGB-Farbumfangs

Bei der Konvertierung einer Ausgangsfarbe in den Farbraum der Ausgabefarbe werden ihre Kanäle nicht auf den üblichen Wertebereich dieses Farbraums begrenzt. Im folgenden Beispiel liegt `color(display-p3 1 0.5 0.5)` innerhalb des Display-P3-Farbumfangs, aber außerhalb von sRGB. Der Rotkanal hat auf der `rgb()`-Skala einen Wert von ungefähr `273.88` und liegt damit über `255`. Die Berechnung von `background-color` verwendet diesen Wert außerhalb des üblichen Bereichs, sodass der Rotwert schließlich `272.88` beträgt. Bei dieser Berechnung findet zu keinem Zeitpunkt eine Begrenzung statt. Ob die endgültige Hintergrundfarbe korrekt dargestellt werden kann, hängt von den Fähigkeiten des Displays ab.

```css
.very-red {
  --origin: color(display-p3 1 0.5 0.5);
  background-color: rgb(from var(--origin) calc(r - 1) g b);
}
```

Die absolute `rgb()`-Schreibweise begrenzt ihre Argumente dagegen. Wenn Sie also `--origin: rgb(273.88 117.95 123.15)` schreiben, beginnt der Rotkanal bei `255`, und der Rotkanal der Hintergrundfarbe beträgt `254`.

## Browser-Unterstützung prüfen

Sie können mit der At-Regel {{cssxref("@supports")}} prüfen, ob ein Browser die Syntax für relative Farben unterstützt.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele für die Verwendung relativer Farben mit den verschiedenen Funktionsschreibweisen finden Sie auf deren jeweiligen Seiten: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Generator für Farbpaletten

In diesem Beispiel können Sie eine Grundfarbe und einen Farbpalettentyp auswählen. Der Browser zeigt dann eine passende Farbpalette auf Grundlage der gewählten Grundfarbe an. Die verfügbaren Farbpalettentypen sind:

- **Komplementär**: Enthält zwei Farben, die sich auf dem Farbkreis gegenüberliegen, also _entgegengesetzte Farbtöne_ haben. Weitere Informationen zu Farbtönen und Farbkreisen finden Sie beim Datentyp {{cssxref("hue")}}. Die beiden Farben werden als Grundfarbe und als Grundfarbe mit einem um 180 Grad erhöhten Farbtonkanal definiert.
- **Triadisch**: Enthält drei Farben, die auf dem Farbkreis gleich weit voneinander entfernt sind. Die drei Farben werden als Grundfarbe sowie als Grundfarbe mit einem um 120 Grad verringerten beziehungsweise erhöhten Farbtonkanal definiert.
- **Tetradisch**: Enthält vier Farben, die auf dem Farbkreis gleich weit voneinander entfernt sind. Die vier Farben werden als Grundfarbe sowie als Grundfarbe mit einem um 90, 180 beziehungsweise 270 Grad erhöhten Farbtonkanal definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel besteht die monochrome Palette aus fünf Farben: der Grundfarbe sowie der Grundfarbe mit einem um 20 oder 10 verringerten beziehungsweise um 10 oder 20 erhöhten Helligkeitskanal.

#### HTML

Der vollständige HTML-Code ist unten als Referenz enthalten. Besonders interessant sind folgende Teile:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Dort können wir ihren Wert mit JavaScript aktualisieren. Als Anfangswert haben wir `#ff0000` (`red`) festgelegt, damit beim Laden des Beispiels eine darauf basierende Farbpalette angezeigt wird. Normalerweise würden wir die Eigenschaft vermutlich auf dem {{htmlelement("html")}}-Element festlegen; das MDN-Live-Beispiel entfernte sie dort jedoch beim Rendern.
- Die Auswahl der Grundfarbe erfolgt über ein [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement. Wird darin ein neuer Wert festgelegt, setzt JavaScript die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert. Dadurch wird wiederum eine neue Farbpalette erzeugt. Alle angezeigten Farben sind relative Farben auf Grundlage von `--base-color`.
- Mit den [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen lässt sich der zu erzeugende Farbpalettentyp auswählen. Bei einer neuen Auswahl setzt JavaScript eine entsprechende Klasse auf dem `<div>` `container`. Im CSS werden Nachfahrenselektoren verwendet, um die untergeordneten `<div>`-Elemente anzusprechen (z. B. `.comp :nth-child(1)`). So erhalten sie die richtigen Farben, während nicht benötigte `<div>`-Knoten ausgeblendet werden.
- Das `<div>` `container` enthält die untergeordneten `<div>`-Elemente, die die Farben der erzeugten Palette anzeigen. Es hat anfänglich die Klasse `comp`, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten zeigen wir nur das CSS, das die Farben der Palette festlegt. Beachten Sie, dass jeweils Nachfahrenselektoren verwendet werden, um für die gewählte Palette jedem untergeordneten `<div>` die richtige {{cssxref("background-color")}} zuzuweisen. Für uns ist die Position der `<div>`-Elemente in der Quellreihenfolge wichtiger als ihr Elementtyp. Deshalb sprechen wir sie mit {{cssxref(":nth-child")}} an.

In der letzten Regel verwenden wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), um die nicht benötigten `<div>`-Elemente jedes Palettentyps anzusprechen. Mit [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verhindern wir, dass sie dargestellt werden.

Die Farben umfassen `--base-color` selbst sowie daraus abgeleitete relative Farben. Die relativen Farben verwenden [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch): `--base-color` wird als Ausgangsfarbe übergeben, und für die Ausgabefarbe wird je nach Bedarf ein angepasster Helligkeits- oder Farbtonkanal definiert.

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

##### Exkurs zu Tests mit `@supports`

Im CSS des Beispiels werden {{cssxref("@supports")}}-Blöcke verwendet, um Browsern, die eine frühere Entwurfsversion der Syntax für relative Farben unterstützen, andere Werte für {{cssxref("background-color")}} bereitzustellen. Das ist nötig, weil die erste Implementierung in Safari auf einer älteren Version der Spezifikation beruhte. Darin wurden Kanalwerte der Ausgangsfarbe je nach Kontext zu {{cssxref("&lt;number&gt;")}}-Werten oder anderen Einheitentypen aufgelöst. Dadurch waren bei Additionen und Subtraktionen für manche Werte Einheiten erforderlich, was Verwirrung verursachte. In neueren Implementierungen werden Kanalwerte der Ausgangsfarbe immer zu einem entsprechenden {{cssxref("&lt;number&gt;")}}-Wert aufgelöst. Berechnungen erfolgen somit stets mit einheitenlosen Werten.

Beachten Sie, dass der Unterstützungstest jeweils eine beliebige Farbdeklaration verwendet – beispielsweise `color: lch(from red l c calc(h + 90deg))` – und nicht unbedingt den tatsächlichen Wert, der für andere Browser angepasst werden muss. Verwenden Sie beim Testen komplexer Werte möglichst die einfachste Deklaration, die den zu prüfenden Syntaxunterschied noch enthält.

Eine benutzerdefinierte Eigenschaft in den `@supports`-Test aufzunehmen, funktioniert nicht: Der Test fällt immer positiv aus, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Das liegt daran, dass der Wert einer benutzerdefinierten Eigenschaft erst dann ungültig wird, wenn er einer regulären CSS-Eigenschaft als ungültiger Wert oder als Teil eines ungültigen Werts zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir den Optionsfeldern einen Event-Listener für [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Wird eines ausgewählt, läuft die Funktion `setContainer()`. Sie setzt den Wert von `class` für das `<div>` mit `id="container"` auf den Wert des ausgewählten Optionsfelds. Dadurch erhalten die untergeordneten `<div>`-Elemente die richtigen Hintergrundfarben für den gewählten Palettentyp.
- Fügen wir der Farbauswahl einen Event-Listener für [`input`](/de/docs/Web/API/Element/input_event) hinzu. Wird eine neue Farbe ausgewählt, läuft die Funktion `setBaseColor()`. Sie setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Die Ausgabe ist unten zu sehen. Hier zeigt sich allmählich, wie leistungsfähig relative CSS-Farben sind: Wir definieren mehrere Farben und erzeugen Paletten, die sich durch Anpassen einer einzigen benutzerdefinierten Eigenschaft unmittelbar aktualisieren.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Farbschema einer Benutzeroberfläche live aktualisieren

Dieses Beispiel zeigt eine Karte mit Überschrift und Text. Darunter befindet sich jedoch zusätzlich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)). Wenn sich dessen Wert ändert, setzt JavaScript die benutzerdefinierte Eigenschaft `--hue` auf den neuen Wert des Schiebereglers.

Dadurch wird das Farbschema der gesamten Benutzeroberfläche angepasst:

- `--base-color` ist eine relative Farbe, deren Farbtonkanal auf den Wert von `--hue` gesetzt wird.
- Die übrigen im Design verwendeten Farben sind relative Farben auf Grundlage von `--base-color`. Ändert sich `--base-color`, ändern sie sich daher ebenfalls.

#### HTML

Der HTML-Code des Beispiels ist unten zu sehen.

- Das {{htmlelement("main")}}-Element dient als äußerer Container für den übrigen Inhalt. Dadurch lassen sich Karte und Formular innerhalb von `<main>` gemeinsam vertikal und horizontal zentrieren.
- Das {{htmlelement("section")}}-Element enthält die Elemente [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}, die den Inhalt der Karte bilden.
- Das {{htmlelement("form")}}-Element enthält den Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) und dessen {{htmlelement("label")}}.

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

Im CSS wird für `:root` ein Standardwert für `--hue` festgelegt. Außerdem werden relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farben definiert, die das Farbschema bilden, sowie ein radialer Farbverlauf, der den gesamten Body ausfüllt.

Die relativen Farben sind:

- `--base-color`: Die Grundfarbe verwendet `red` als Ausgangsfarbe (jede andere vollständig definierte Farbe wäre ebenfalls möglich) und setzt ihren Farbtonwert auf den Wert der benutzerdefinierten Eigenschaft `--hue`.
- `--bg-color`: Eine deutlich hellere Variante von `--base-color`, die als Hintergrund dienen soll. Sie entsteht, indem `--base-color` als Ausgangsfarbe verwendet und der Helligkeitswert um 40 erhöht wird.
- `--complementary-color`: Eine Komplementärfarbe, die auf dem Farbkreis 180 Grad von `--base-color` entfernt liegt. Sie entsteht, indem `--base-color` als Ausgangsfarbe verwendet und der Farbtonwert um 180 erhöht wird.

Sehen Sie sich nun das übrige CSS an und achten Sie darauf, wo diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), {{cssxref("text-shadow")}} und sogar die {{cssxref("accent-color")}} des Schiebereglers.

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

Das JavaScript fügt dem Schieberegler einen Event-Listener für [`input`](/de/docs/Web/API/Element/input_event) hinzu. Wird ein neuer Wert festgelegt, läuft die Funktion `setHue()`. Sie setzt auf `:root` (dem `<html>`-Element) einen neuen Inline-Wert für die benutzerdefinierte Eigenschaft `--hue`. Dieser überschreibt den ursprünglichen Standardwert aus unserem CSS.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Die Ausgabe ist unten zu sehen. Hier steuern relative CSS-Farben das Farbschema einer gesamten Benutzeroberfläche, das sich durch Ändern eines einzigen Werts live anpassen lässt.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der Datentyp {{CSSXref("&lt;color&gt;")}}
- Das Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [Syntax für relative CSS-Farben](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
