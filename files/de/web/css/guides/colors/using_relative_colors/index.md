---
title: Relative Farben verwenden
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert die **Syntax für relative Farben**. Damit lässt sich ein CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe definieren. Mit dieser leistungsfähigen Funktion können Varianten vorhandener Farben programmgesteuert erzeugt werden – etwa hellere, dunklere, stärker gesättigte, halbtransparente oder invertierte Varianten. So lassen sich Farbpaletten effektiver erstellen.

Dieser Artikel erklärt die Syntax für relative Farben, stellt die verschiedenen Möglichkeiten vor und zeigt einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Verwenden Sie eine Farbfunktion (oben durch _`color-function()`_ dargestellt), beispielsweise [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl). Welche Funktion Sie wählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Übergeben Sie die **Ausgangsfarbe** (oben durch _`origin-color`_ dargestellt), auf der die relative Farbe basieren soll. Stellen Sie ihr das Schlüsselwort `from` voran. Die Ausgangsfarbe kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert in einem beliebigen verfügbaren Farbmodell sein, einschließlich eines Farbwerts in einer [benutzerdefinierten CSS-Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), einer Systemfarbe, `currentColor` oder sogar einer anderen relativen Farbe.
3. Geben Sie bei der Funktion [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) den _[`colorspace`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie für jeden einzelnen Kanal einen Ausgabewert an. Die Ausgabefarbe wird nach der Ausgangsfarbe definiert – oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_ dargestellt. Welche Kanäle hier definiert werden, hängt von der [Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Bei [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) müssen Sie beispielsweise Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe Wert wie in der Ausgangsfarbe oder ein Wert relativ zum entsprechenden Kanalwert der Ausgangsfarbe sein.
5. Optional können Sie für die Ausgabefarbe einen Wert vom Typ {{CSSXref("&lt;alpha-value&gt;")}} für den `alpha`-Kanal angeben. Diesem wird ein Schrägstrich (`/`) vorangestellt. Wird der Wert des `alpha`-Kanals nicht ausdrücklich angegeben, übernimmt er den Alpha-Kanalwert von _`origin-color`_ (und nicht 100 %, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ausgangsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie anschließend in einzelne Farbkanäle (sowie den `alpha`-Kanal, falls die Ausgangsfarbe einen hat). Diese stehen innerhalb der Farbfunktion als entsprechend benannte Werte zur Verfügung – bei `rgb()` beispielsweise `r`, `g`, `b` und `alpha`, bei `lab()` `l`, `a`, `b` und `alpha` sowie bei `hwb()` `h`, `w`, `b` und `alpha`. Mit ihnen lassen sich neue Ausgabewerte für die Kanäle berechnen.

Sehen wir uns die Syntax für relative Farben in der Praxis an. Das folgende CSS gestaltet zwei {{htmlelement("div")}}-Elemente: eines mit einer absoluten Hintergrundfarbe – `red` – und eines mit einer relativen Hintergrundfarbe, die mithilfe der Funktion `rgb()` auf Basis desselben Farbwerts `red` erstellt wird:

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Diese nimmt `red` als Ausgangsfarbe, konvertiert es in eine entsprechende `rgb()`-Farbe (`rgb(255 0 0)`) und definiert dann die neue Farbe mit dem Wert `200` für den Rotkanal. Der Grün-, Blau- und Alphakanal erhalten dieselben Werte wie in der Ausgangsfarbe. Dazu werden die vom Browser innerhalb der Funktion bereitgestellten Werte `g` und `b` verwendet, die beide `0` sind; `alpha` beträgt `100%`.

Das Ergebnis ist `rgb(200 0 0)` – ein etwas dunkleres Rot. Hätten wir für den Rotkanal den Wert `255` (oder einfach den Wert `r`) angegeben, wäre die Ausgabefarbe exakt dieselbe wie die Eingabefarbe. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein zu `rgb(200 0 0)` äquivalenter sRGB-`color()`-Wert: `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zunächst die angegebene Ausgangsfarbe (im obigen Beispiel `red`) in einen Wert, der mit der verwendeten Farbfunktion (hier `rgb()`) kompatibel ist. Dadurch kann er die Ausgabefarbe aus der Ausgangsfarbe berechnen. Die Berechnungen erfolgen zwar relativ zur verwendeten Farbfunktion, der tatsächliche Ausgabefarbwert hängt jedoch vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können nicht das gesamte Spektrum sichtbarer Farben darstellen. Die Ausgabefarben von [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) werden als `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Wenn Sie den Ausgabefarbwert über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) abfragen, erhalten Sie daher einen [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden die Ausgabewerte relativer Farben in derselben Syntax wie die verwendete Farbfunktion dargestellt. Wird beispielsweise die Farbfunktion [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) verwendet, ist die Ausgabefarbe ein `lab()`-Wert.

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

Es ist wichtig, zwischen den in der Funktion bereitgestellten, zerlegten Kanalwerten der Ausgangsfarbe und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe zu unterscheiden.

Zur Erinnerung: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ausgangsfarbe in der Funktion zur Verfügung, um damit die Kanalwerte der Ausgabefarbe zu definieren. Das folgende Beispiel definiert eine relative Farbe mit der Funktion `rgb()` und verwendet die Kanalwerte der Ausgangsfarbe (bereitgestellt als `r`, `g` und `b`) als Ausgabewerte. Die Ausgabefarbe ist daher mit der Ausgangsfarbe identisch:

```css
rgb(from red r g b)
```

Beim Festlegen der Ausgabewerte müssen Sie die Kanalwerte der Ausgangsfarbe jedoch nicht verwenden. Sie müssen die Werte für die Ausgabekanäle lediglich in der richtigen Reihenfolge angeben (bei `rgb()` beispielsweise zuerst Rot, dann Grün und dann Blau). Ansonsten können Sie beliebige Werte verwenden, sofern sie für die jeweiligen Kanäle gültig sind. Das macht relative CSS-Farben sehr flexibel.

Sie könnten beispielsweise wie unten gezeigt absolute Werte angeben und damit `red` in `blue` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die Syntax für relative Farben verwenden, aber dieselbe Farbe wie die Ausgangsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ausgangsfarbe basiert, erstellen Sie streng genommen keine relative Farbe. In einer echten Codebasis würden Sie das wahrscheinlich nicht tun, sondern stattdessen einen absoluten Farbwert verwenden. Als Einstieg in das Thema ist es dennoch hilfreich zu wissen, dass dies mit der Syntax für relative Farben _möglich_ ist.

Sie können die bereitgestellten Werte sogar in anderer Reihenfolge verwenden oder wiederholen. Im Folgenden dient ein etwas dunkleres Rot als Eingabe; ausgegeben wird ein helles Grau. Die Kanäle `r`, `g` und `b` der Ausgabefarbe werden alle auf den Wert des Kanals `r` der Ausgangsfarbe gesetzt:

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

Im vorherigen Abschnitt haben wir nur relative Farben gesehen, die mit der Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in allen Fällen gleich; die Werte der Ausgangsfarbe tragen jedoch je nach verwendeter Funktion unterschiedliche Namen.

Im Folgenden finden Sie Beispiele für die Syntax relativer Farben mit jeder Farbfunktion. Jedes Beispiel ist so einfach wie möglich gehalten: Die Kanalwerte der Ausgabefarbe entsprechen exakt denen der Ausgangsfarbe.

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

Es sei noch einmal darauf hingewiesen, dass das Farbsystem der Ausgangsfarbe nicht mit dem Farbsystem übereinstimmen muss, in dem die Ausgabefarbe erstellt wird. Auch das bietet viel Flexibilität. In der Regel interessiert Sie möglicherweise gar nicht, in welchem System die Ausgangsfarbe definiert ist, oder Sie wissen es nicht einmal (vielleicht steht Ihnen nur der Wert einer [benutzerdefinierten Eigenschaft](#benutzerdefinierte_eigenschaften_verwenden) zur Verfügung, den Sie verändern möchten). Sie möchten lediglich eine Farbe eingeben und beispielsweise eine hellere Variante erstellen, indem Sie sie an eine `hsl()`-Funktion übergeben und den Helligkeitswert ändern.

## Benutzerdefinierte Eigenschaften verwenden

Beim Erstellen einer relativen Farbe können Sie Werte aus [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) sowohl für die Ausgangsfarbe als auch innerhalb der Definitionen der Ausgabekanalwerte verwenden. Sehen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Marken-Grundfarbe – `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber als Ausgangsfarbe akzeptieren relative Farben jede Farbsyntax.
- `--standard-opacity` enthält den standardmäßigen Deckkraftwert unserer Marke, den wir auf halbtransparente Boxen anwenden möchten: `0.75`.

Anschließend weisen wir zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe zu. Eines erhält eine absolute Farbe – das Marken-Violett aus `--base-color`. Das andere erhält eine relative Farbe, die ebenfalls diesem Violett entspricht, aber um einen Alphakanal mit unserem standardmäßigen Deckkraftwert ergänzt wird.

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Mathematische Funktionen verwenden

Mit CSS-[Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} können Sie Werte für die Kanäle der Ausgabefarbe berechnen. Sehen wir uns ein Beispiel an.

Das folgende CSS gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält den unveränderten Wert von `--base-color`, während das linke und das rechte aufgehellte beziehungsweise abgedunkelte Varianten von `--base-color` erhalten. Diese Varianten werden als relative Farben definiert: `--base-color` wird an eine `lch()`-Funktion übergeben, und der Helligkeitskanal der Ausgabefarbe wird mithilfe einer `calc()`-Funktion angepasst. Für die aufgehellte Farbe werden dem Helligkeitskanal 20 % hinzugefügt, für die abgedunkelte 20 % davon abgezogen.

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Den Alphakanal verändern

Dieses Beispiel zeigt, wie der Alphakanal einer benannten Farbe geändert wird. Ein Element befindet sich in einem Container; beide haben einen Hintergrund in `teal`. Damit sich die Hintergründe unterscheiden, variieren wir den Wert des Alphakanals mithilfe relativer Farben, der [Funktion `calc()`](/de/docs/Web/CSS/Reference/Values/calc) und einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).

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

Auf den Alphakanal wird mit dem Schlüsselwort `alpha` Bezug genommen. In diesem Fall verändert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den Alphakanalwert, indem er `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert. Der Container erhält einen halbtransparenten Hintergrund, weil der Multiplikator `0.3` kleiner als `1.0` ist.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("manipulating_the_alpha_channel", "100%", "200") }}

## Kanalwerte werden in `<number>`-Werte aufgelöst

Damit Berechnungen mit Kanalwerten bei relativen Farben funktionieren, werden alle Kanalwerte der Ausgangsfarbe in passende {{cssxref("&lt;number&gt;")}}-Werte aufgelöst. In den obigen `lch()`-Beispielen berechnen wir neue Helligkeitswerte, indem wir zum Wert des Kanals `l` der Ausgangsfarbe Zahlen addieren oder davon subtrahieren. Würden wir `calc(l + 20%)` verwenden, ergäbe das eine ungültige Farbe: `l` ist ein `<number>`, zu dem kein {{cssxref("&lt;percentage&gt;")}} addiert werden kann.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, werden in einen für die Ausgabefarbfunktion geeigneten `<number>`-Wert aufgelöst.
- Kanalwerte, die ursprünglich als {{cssxref("hue")}}-Winkel angegeben wurden, werden in eine Gradzahl im Bereich von `0` bis einschließlich `360` aufgelöst.

Welche Werte die einzelnen Ausgangskanäle konkret ergeben, erfahren Sie auf den jeweiligen [Seiten zu den Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions).

## Ausgangsfarben außerhalb des sRGB-Farbumfangs

Beim Konvertieren einer Ausgangsfarbe in den Farbraum der Ausgabefarbe werden ihre Kanäle nicht auf den üblichen Wertebereich dieses Farbraums begrenzt. Im folgenden Beispiel liegt `color(display-p3 1 0.5 0.5)` innerhalb des Display-P3-Farbumfangs, aber außerhalb von sRGB. Sein Rotkanal entspricht auf der `rgb()`-Skala ungefähr `273.88` und ist damit größer als `255`. Bei der Berechnung von `background-color` wird dieser außerhalb des Wertebereichs liegende Wert verwendet, sodass sich für Rot `272.88` ergibt. Bei dieser Berechnung findet zu keinem Zeitpunkt eine Begrenzung statt. Ob die endgültige Hintergrundfarbe korrekt dargestellt werden kann, hängt von den Fähigkeiten des Bildschirms ab.

```css
.very-red {
  --origin: color(display-p3 1 0.5 0.5);
  background-color: rgb(from var(--origin) calc(r - 1) g b);
}
```

Die absolute `rgb()`-Notation begrenzt dagegen ihre Argumente. Wenn Sie also `--origin: rgb(273.88 117.95 123.15)` schreiben, beginnt der Rotkanal bei `255`, und der Rotkanal der Hintergrundfarbe beträgt anschließend `254`.

## Browser-Unterstützung prüfen

Mit der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob ein Browser die Syntax für relative Farben unterstützt.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele für die Verwendung relativer Farben mit den verschiedenen Funktionstypen finden Sie auf deren jeweiligen Seiten: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

In diesem Beispiel können Sie eine Grundfarbe und einen Farbpalettentyp auswählen. Der Browser zeigt daraufhin eine passende Farbpalette auf Basis der gewählten Grundfarbe an. Folgende Farbpaletten stehen zur Auswahl:

- **Komplementär**: Enthält zwei Farben, die auf dem Farbkreis einander gegenüberliegen, also _entgegengesetzte Farbtöne_ haben (weitere Informationen zu Farbtönen und Farbkreisen finden Sie beim Datentyp {{cssxref("hue")}}). Die beiden Farben sind die Grundfarbe und die Grundfarbe mit einem um 180 Grad erhöhten Farbtonkanal.
- **Triadisch**: Enthält drei Farben, die auf dem Farbkreis gleich weit voneinander entfernt liegen. Die drei Farben sind die Grundfarbe, die Grundfarbe mit einem um 120 Grad verringerten Farbtonkanal und die Grundfarbe mit einem um 120 Grad erhöhten Farbtonkanal.
- **Tetradisch**: Enthält vier Farben, die auf dem Farbkreis gleich weit voneinander entfernt liegen. Die vier Farben sind die Grundfarbe sowie die Grundfarbe mit einem um 90, 180 beziehungsweise 270 Grad erhöhten Farbtonkanal.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel umfasst die monochrome Palette fünf Farben: die Grundfarbe sowie die Grundfarbe mit einem um 20 beziehungsweise 10 verringerten und um 10 beziehungsweise 20 erhöhten Helligkeitskanal.

#### HTML

Das vollständige HTML ist unten als Referenz aufgeführt. Die wichtigsten Teile sind:

- Die benutzerdefinierte Eigenschaft `--base-color` ist als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Dort können wir ihren Wert mit JavaScript aktualisieren. Als Anfangswert haben wir `#ff0000` (`red`) angegeben, damit beim Laden des Beispiels eine auf diesem Wert basierende Farbpalette angezeigt wird. Normalerweise würden wir die Eigenschaft wahrscheinlich auf dem {{htmlelement("html")}}-Element festlegen, aber das MDN-Live-Beispiel entfernte sie beim Rendern.
- Der Farbwähler für die Grundfarbe wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelement erstellt. Wird darin ein neuer Wert festgelegt, setzt JavaScript die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert. Dadurch entsteht eine neue Farbpalette. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Mit den [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen lässt sich der zu erzeugende Farbpalettentyp auswählen. Wird hier ein neuer Wert ausgewählt, setzt JavaScript auf dem `container`-`<div>` eine neue Klasse, die die gewählte Palette repräsentiert. Im CSS werden Nachkommen-Selektoren verwendet, um die untergeordneten `<div>`-Elemente anzusprechen (beispielsweise `.comp :nth-child(1)`). So können ihnen die richtigen Farben zugewiesen und nicht benötigte `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>` enthält die untergeordneten `<div>`-Elemente, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass es anfänglich die Klasse `comp` erhält, damit die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Im Folgenden zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, dass in jedem Fall Nachkommen-Selektoren verwendet werden, um für die gewählte Palette jedem untergeordneten `<div>` den richtigen Wert für {{cssxref("background-color")}} zuzuweisen. Für uns ist die Position der `<div>`-Elemente in der Quellreihenfolge wichtiger als ihr Elementtyp. Deshalb sprechen wir sie mit {{cssxref(":nth-child")}} an.

In der letzten Regel verwenden wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), um die ungenutzten `<div>`-Elemente jedes Palettentyps anzusprechen. Mit [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verhindern wir, dass sie gerendert werden.

Die Farben umfassen `--base-color` sowie relative Farben, die daraus abgeleitet werden. Die relativen Farben verwenden die Funktion [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch): Sie übergeben `--base-color` als Ausgangsfarbe und definieren eine Ausgabefarbe mit entsprechend angepasstem Helligkeits- oder Farbtonkanal.

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

##### Ein Hinweis zu Tests mit `@supports`

Im CSS des Beispiels werden Ihnen {{cssxref("@supports")}}-Blöcke auffallen, die Browsern mit Unterstützung für einen früheren Entwurf der Syntax für relative Farben andere Werte für {{cssxref("background-color")}} bereitstellen. Sie sind nötig, weil die ursprüngliche Implementierung in Safari auf einer älteren Version der Spezifikation beruhte. Darin wurden Kanalwerte der Ausgangsfarbe je nach Kontext in {{cssxref("&lt;number&gt;")}}-Werte oder andere Einheitentypen aufgelöst. Deshalb benötigten Werte beim Addieren und Subtrahieren manchmal Einheiten, was zu Verwirrung führte. In neueren Implementierungen werden Kanalwerte der Ausgangsfarbe stets in einen entsprechenden {{cssxref("&lt;number&gt;")}}-Wert aufgelöst. Berechnungen erfolgen daher immer mit einheitenlosen Werten.

Beachten Sie, dass die Unterstützung in jedem Fall mit einer beliebigen Farbdeklaration geprüft wird – beispielsweise `color: lch(from red l c calc(h + 90deg))` – und nicht unbedingt mit dem Wert, den wir für andere Browser tatsächlich variieren müssen. Verwenden Sie beim Testen solch komplexer Werte die einfachstmögliche Deklaration, die den syntaktischen Unterschied enthält, den Sie prüfen möchten.

Eine benutzerdefinierte Eigenschaft in den `@supports`-Test aufzunehmen, funktioniert nicht: Der Test fällt unabhängig vom Wert der benutzerdefinierten Eigenschaft immer positiv aus. Denn der Wert einer benutzerdefinierten Eigenschaft wird erst dann ungültig, wenn er einer regulären CSS-Eigenschaft als ungültiger Wert oder als Teil eines ungültigen Werts zugewiesen wird. Um das zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir den Optionsfeldern einen Event-Listener für [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Wird eines ausgewählt, läuft die Funktion `setContainer()`. Sie aktualisiert den Wert von `class` auf dem `<div>` mit `id="container"` mit dem Wert des ausgewählten Optionsfelds. Dadurch erhalten die untergeordneten `<div>`-Elemente die richtigen Hintergrundfarben für den gewählten Palettentyp.
- Fügen wir dem Farbwähler einen Event-Listener für [`input`](/de/docs/Web/API/Element/input_event) hinzu. Wird eine neue Farbe ausgewählt, läuft die Funktion `setBaseColor()`. Sie setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist unten zu sehen. Hier zeigt sich bereits das Potenzial relativer CSS-Farben: Wir definieren mehrere Farben und erzeugen Paletten, die durch Ändern einer einzigen benutzerdefinierten Eigenschaft unmittelbar aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Farbschema einer Benutzeroberfläche live aktualisieren

Dieses Beispiel zeigt eine Karte mit einer Überschrift und Text – allerdings mit einer Besonderheit: Unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)). Wird sein Wert geändert, setzt JavaScript die benutzerdefinierte Eigenschaft `--hue` auf den neuen Reglerwert.

Dadurch ändert sich das Farbschema der gesamten Benutzeroberfläche:

- Der Wert von `--base-color` ist eine relative Farbe, deren Farbtonkanal auf den Wert von `--hue` gesetzt ist.
- Die anderen im Design verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Daher ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

- Das {{htmlelement("main")}}-Element dient als äußerer Container für den übrigen Inhalt. So können Karte und Formular innerhalb von `<main>` gemeinsam vertikal und horizontal zentriert werden.
- Das {{htmlelement("section")}}-Element enthält die Elemente [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Steuerelement und sein {{htmlelement("label")}}.

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

Im CSS erhält `:root` einen Standardwert für `--hue`. Außerdem werden relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Farben zur Definition des Farbschemas sowie ein radialer Farbverlauf festgelegt, der den gesamten Body ausfüllt.

Die relativen Farben sind:

- `--base-color`: Die Grundfarbe verwendet `red` als Ausgangsfarbe (jede vollständig definierte Farbe wäre möglich) und setzt ihren Farbtonwert auf den Wert der benutzerdefinierten Eigenschaft `--hue`.
- `--bg-color`: Eine wesentlich hellere Variante von `--base-color`, die als Hintergrund dienen soll. Dazu wird `--base-color` als Ausgangsfarbe verwendet und ihr Helligkeitswert um 40 erhöht.
- `--complementary-color`: Eine Komplementärfarbe, die auf dem Farbkreis 180 Grad von `--base-color` entfernt liegt. Dazu wird `--base-color` als Ausgangsfarbe verwendet und ihr Farbtonwert um 180 erhöht.

Sehen Sie sich nun das übrige CSS an und achten Sie darauf, wo diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), {{cssxref("text-shadow")}} und sogar die {{cssxref("accent-color")}} des Schiebereglers.

> [!NOTE]
> Der Kürze halber werden nur die für die Verwendung relativer Farben relevanten Teile des CSS gezeigt.

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

Das Ergebnis ist unten zu sehen. Hier steuern relative CSS-Farben das Farbschema einer gesamten Benutzeroberfläche, das sich durch Ändern eines einzigen Werts unmittelbar anpassen lässt.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der Datentyp {{CSSXref("&lt;color&gt;")}}
- Das Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
