---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es einfach macht, Ergänzungen zu bestehenden Farben zu erstellen — wie etwa hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt, welche Optionen es gibt, und betrachtet einige veranschaulichende Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Verwenden Sie eine grundlegende Farb-Funktion (oben dargestellt durch _`color-function()`_), wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt von _`origin-color`_), auf der Ihre relative Farbe basieren wird, vorangestellt durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Custom-Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion fügen Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe ein.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der Originalwert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, dem ein Schrägstrich (`/`) vorangestellt ist. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht 100%, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farb-Funktion kompatibel ist, und zerlegt sie dann in die Farbkomponenten plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat. Diese sind als passend benannte Werte innerhalb der Farb-Funktion verfügbar — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabewerte für die Kanäle zu berechnen.

Lassen Sie uns die relative Farbsyntax in Aktion betrachten. Das untenstehende CSS wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu gestalten, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion auf der Grundlage desselben `red`-Farbwerts erstellt wurde:

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
  background-color: rgb(from red 200 g b);
}
```

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, diese in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe mit einem Rotkanal von Wert `200` und Grün- und Blaukanälen, die denselben Wert wie die Ursprungsfarbe haben, definiert (sie verwendet die `g`- und `b`-Werte, die dem Browser innerhalb der Funktion zur Verfügung gestellt werden und beide gleich `0` sind).

Das resultiert in einer Ausgabe von `rgb(200 0 0)` — einem leicht dunkleren Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe exakt derselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` — `color(srgb 0.784314 0 0)` — entspricht.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zunächst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgegeben wird.
> - Bei neueren Farb-Funktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farb-Ausgabewerte im selben Syntax wie die verwendete Farb-Funktion ausgedrückt. Beispielsweise wird, wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb-Funktion verwendet wird, die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Syntaxflexibilität

Es gibt einen wichtigen Unterschied zwischen den entnommenen Ursprungsfarben-Kanalwerten, die in der Funktion zur Verfügung stehen, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu betonen: Wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung gestellt, um die Kanalwerte der Ausgabefarbe zu definieren. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Kanalwerte der Ursprungsfarben (verfügbar als `r`, `g` und `b`) für die Ausgabekanalwerte, sodass die Ausgabefarbe die gleiche wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Allerdings müssen beim Festlegen der Ausgabewerte die Ursprungsfarben-Kanalwerte überhaupt nicht verwendet werden. Es müssen die Ausgabekanalwerte in der richtigen Reihenfolge angegeben werden (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige gültige Werte für diese Kanäle sein. Dies gibt relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie beispielsweise möchten, könnten Sie absolute Werte wie die unten gezeigten angeben, um `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. In einem echten Codebestand würden Sie dies wahrscheinlich nie tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax _können_, als Ausgangspunkt zum Erlernen davon.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt als Eingabe ein leicht dunkleres Rot und gibt eine hellgraue Farbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die Kanalwerte `r`, `g` und `b` der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farb-Funktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Allerdings können relative Farben mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbenwerte unterschiedliche Namen haben, die zur verwendeten Funktion passen.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farbfunktion. Jeder Fall ist so einfach wie möglich, wobei die Ausgabefarb-Kanalwerte genau den Ursprungsfarben-Kanalwerten entsprechen:

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

Es lohnt sich, noch einmal zu erwähnen, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet eine Menge Flexibilität. In der Regel sind Sie nicht daran interessiert und wissen möglicherweise nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie haben möglicherweise nur einen [Custom-Property-Wert](#verwendung_von_benutzerdefinierten_eigenschaften) zur Manipulation). Sie möchten einfach eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind, sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarb-Kanalwert-Definitionen. Schauen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbstichwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Opacity-Wert der Marke, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Einer erhält eine absolute Farbe — unser `--base-color` Markenlila. Der andere erhält eine relative Farbe, die unserem Markenlila entspricht und in einen Alphakanal verwandelt wird, der gleich unserem Standard-Opacity-Wert ist.

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

Sie können CSS-[Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Lassen Sie uns ein Beispiel betrachten.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Das mittlere erhält ein unverändertes `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion eingefügt, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

## Kanalwerte lösen sich in `<number>`-Werte auf

Um Berechnungen der Kanalwerte in relativen Farben zu ermöglichen, lösen sich alle Ursprungsfarben-Kanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zu oder von dem `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren. Wenn wir versucht hätten, `calc(l + 20%)` zu machen, hätte dies zu einer ungültigen Farbe geführt — `l` ist ein `<number>` und kann keine {{cssxref("&lt;percentage&gt;")}} zugefügt bekommen.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in ein `<number>` auf, das für die Ausgabefarb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Gradzahl in einem Bereich von `0` bis `360` auf, eingeschlossen.

Prüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten darüber, zu was die Kanalwerte ihrer Ursprungsfarbe aufgelöst werden.

## Überprüfung der Unterstützung durch den Browser

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie diese durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele zur Verwendung von relativen Farbsyntaxen in den verschiedenen Funktionstypen auf ihren speziellen Seiten finden: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht es Ihnen, eine Grundfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine passende Palette von Farben basierend auf der gewählten Grundfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders gesagt, _entgegengesetzte Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen über Farbtöne und Farbräder). Die beiden Farben werden definiert als eine Grundfarbe und die Grundfarbe mit einem Farbtonkanal von +180 Grad.
- **Triadisch**: Umfasst drei Farben, die gleiche Distanzen um den Farbkreis herum haben. Die drei Farben werden definiert als eine Grundfarbe, eine Grundfarbe mit einem Farbtonkanal von -120 Grad und eine Grundfarbe mit einem Farbtonkanal von +120 Grad.
- **Tetradisch**: Beinhaltet vier Farben, die gleiche Distanzen um den Farbkreis haben. Die vier Farben werden definiert als eine Grundfarbe und die Grundfarbe mit einem Farbtonkanal von +90, +180 und +270 Grad.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Grundfarbe und Grundfarbe mit einem Helligkeitskanal von -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color` benutzerdefinierte Eigenschaft wird als Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) angegeben, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Grundfarbenpicker wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerelement erstellt. Wenn in diesem Steuerelement ein neuer Wert festgelegt wird, wird die `--base-color` benutzerdefinierte Eigenschaft mit diesem Wert mithilfe von JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Gruppe der [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelemente ermöglicht die Auswahl eines zu generierenden Farbpalettentyps. Wenn hier ein neuer Wert gewählt wird, wird mithilfe von JavaScript eine neue Klasse auf dem `container`-`<div>` gesetzt, um den gewählten Palettentyp darzustellen. In dem CSS werden Nachfahrenselektoren verwendet, um auf die Kinder-`<div>`s (z.B. `.comp :nth-child(1)`) abzuzielen, damit sie die richtigen Farben zugeteilt bekommen und die nicht genutzten `<div>`-Knoten ausgeblendet werden.
- Der `container`-`<div>`, der die Kinder-`<div>`s enthält, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass ihm anfänglich eine Klasse `comp` zugeordnet ist, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Nachstehend zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jedes Kinder-`<div>` für die gewählte Palette anzuwenden. Wir legen mehr Wert auf die Position der `<div>`s in der Quellordnung als auf den Typ des Elements, sodass wir {{cssxref(":nth-child")}} verwendet haben, um sie anzuzielen.

Im letzten Regel haben wir den [Generellen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht genutzten `<div>`-Elemente in jedem Palettentyp zu gezielten, die auf [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt sind, um zu verhindern, dass sie gerendert werden.

Die Farben selbst umfassen die `--base-color` plus relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — wobei die Ursprungsfarbe `--base-color` und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal, wie erforderlich, definiert werden.

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

##### Eine Anmerkung zum Testen von `@supports`

Im Beispiel-CSS bemerken Sie möglicherweise, dass {{cssxref("@supports")}}-Blöcke verwendet werden, um verschiedene {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, da Safaris erste Implementierung auf einer älteren Version der Spezifikation basierte, in der die Kanalwerte der Ursprungsfarbe auf {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen in Abhängigkeit vom Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was Verwirrung verursachte. In neueren Implementierungen lösen sich die Ausgangskanalwerte der Ursprungsfarbe immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie der Support-Test in jedem Fall mit irgendeiner Farbdarstellung durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt mit dem tatsächlichen Wert, den wir für andere Browser ändern müssen. Beim Testen von komplexen Werten wie diesen sollten Sie die einfachste mögliche Darstellung verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbinden einer benutzerdefinierten Eigenschaft in den `@supports`-Test funktioniert nicht — der Test verläuft immer positiv, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft erhält. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einer ungültigen Wertzuweisung (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugeordnet wird. Um dieses Problem zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzu, sodass beim Auswählen einer Option die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die richtigen Hintergrundfarben auf die Kinder-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Farbpicker-Steuerelement hinzu, sodass bei Auswahl einer neuen Farbe die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem wir eine einzige benutzerdefinierte Eigenschaft anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live-UI-Farbschema-Aktualisierer

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, aber mit einer Wendung — unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Kontrollfeld. Wenn sich dessen Wert ändert, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies führt wiederum dazu, dass sich das Farbschema der gesamten Benutzeroberfläche anpasst:

- Der `--base-color`-Wert ist eine relative Farbe mit einem Farbtonkanal, der auf den Wert der benutzerdefinierten Eigenschaft `--hue` gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}}-Element dient als äußerer Container, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Steuerelement und seine {{htmlelement("label")}}.

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

Im CSS hat das `:root` einen Standard-`--hue`-Wert, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zur Definition des Farbschemas sowie ein Radialverlauf, der den gesamten Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe geeignet wäre) und passt deren Farbtonwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu deren Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine Komplementärfarbe, die 180 Grad um den Farbkreis von `--base-color` liegt. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu deren Farbtonwert hinzugefügt wird.

Sehen Sie sich nun den Rest des CSS an und achten Sie auf alle Orte, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Rahmen](/de/docs/Web/CSS/border), [`Text-Schatten`](/de/docs/Web/CSS/text-shadow) und sogar die [`Akzentfarbe`](/de/docs/Web/CSS/accent-color) des Schiebereglers ein.

> [!NOTE]
> Aus Gründen der Kürze werden hier nur die Teile des CSS gezeigt, die für die Verwendung von relativen Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Schieberegler-Steuerelement hinzu, sodass bei Setzen eines neuen Werts die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-benutzerdefinierten Eigenschaftswert auf das `:root` (das `<html>`-Element), das den ursprünglichen Standardwert unseres CSS überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relativ-CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, da ein einzelner Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
