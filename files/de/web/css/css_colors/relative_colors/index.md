---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Komplementärfarben zu bestehenden Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und beleuchtet einige anschauliche Beispiele.

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

1. Enthalten Sie eine grundlegende Farbfunktion (dargestellt durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt von dem Farbmodell ab, das Sie für die Erstellung der relativen Farbe verwenden möchten (die **Ausgabe-Farbe**).
2. Übergeben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, vorangestellt mit dem Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_ oben. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert, der relativ zum Kanalwert der Ursprungsfarbe ist.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, vorangestellt mit einem Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den Alpha-Kanalwert der _`origin-color`_ gesetzt (nicht 100%, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese werden als entsprechend benannte Werte in der Farbfunktion verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf demselben `red`-Farbwert erstellt wurde:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprung nimmt, es in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe mit einem Rotkanal von Wert `200` und einem Grün- und Blaukanal definiert, deren Wert derselbe wie die Ursprungsfarbe ist (es verwendet die `g`- und `b`-Werte, die vom Browser innerhalb der Funktion bereitgestellt werden und beide gleich `0` sind).

Dies führt zu einem Ergebnis von `rgb(200 0 0)` — ein leicht dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau die gleiche wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, wird beim Berechnen einer relativen Farbe als erstes die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert umgewandelt (in diesem Fall `rgb()`). Dies geschieht, damit der Browser in der Lage ist, die Ausgabefarbe aus der Ursprungsfarbe zu berechnen. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können das gesamte Spektrum sichtbarer Farben nicht ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte in derselben Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Syntaxflexibilität

Es gibt einen wichtigen Unterschied zwischen den in der Funktion bereitgestellten, zerlegten Ursprungsfarbkanalwerten und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es noch einmal zu betonen: Wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um die Ausgabefarbkanalwerte zu definieren. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Kanalwerte der Ursprungsfarbe (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Kanalwerte der Ursprungsfarbe überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben einen hohen Grad an Flexibilität.

Zum Beispiel könnten Sie absolute Werte wie die unten gezeigten angeben und `red` in `blue` verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe ausgeben oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Sie würden dies in einer realen Codebasis wahrscheinlich nicht tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie dies mit relativer Farbsyntax _tun können_, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und erzeugt eine hellgraue Farbe — die `r`, `g` und `b` Kanäle der Ausgabefarbe sind alle auf den `r` Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die Kanalwerte `r`, `g` und `b` der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachstmögliche, bei dem die Werte der Ausgabefarbkanäle genau mit den Werten der Ursprungsfarbkanäle übereinstimmen:

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

Erwähnenswert ist erneut, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch hier bietet dies eine Menge Flexibilität. Im Allgemeinen werden Sie nicht daran interessiert sein und möglicherweise nicht einmal wissen, in welchem System die Ursprungsfarbe definiert ist (Sie könnten einfach einen [benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zur Manipulation haben). Sie werden lediglich eine Farbe eingeben und beispielsweise ein helleres Abbild davon erzeugen wollen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch innerhalb der Wertedefinitionen der Ausgabefarbkanäle definiert sind. Schauen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markentransparenzwert, den wir auf halbtransparente Kästchen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Markenlila. Das andere erhält eine relative Farbe, die unserem Markenlila entspricht, verändert, um einen Alpha-Kanal gleich unserem Standardtransparenzwert hinzuzufügen.

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

Sie können CSS-[Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten mit aufgehellten und abgedunkelten Varianten dieser `--base-color` versehen werden. Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

## Kanalwerte lösen sich zu `<number>`-Werten auf

Damit Kanalwertberechnungen bei relativen Farben funktionieren, lösen sich alle Ursprungsfarbkanalwerte zu entsprechenden {{cssxref("&lt;number&gt;")}}-Werten auf. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe hinzufügen oder davon abziehen. Würden wir versuchen, `calc(l + 20%)` zu machen, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als ein `<percentage>` angegeben wurden, lösen sich in ein `<number>` auf, das für die Ausgabefarbfunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Anzahl von Grad in einem Bereich von `0` bis `360` inklusive auf.

Überprüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, zu welchen Werten ihre Ursprungsfarbkanäle aufgelöst werden.

## Überprüfung der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie es durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie finden zusätzliche Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren speziellen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Generator für Farbpaletten

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Typ einer Farbpalette auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpaletten-Auswahlmöglichkeiten sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen, oder anders gesagt, _entgegengesetzte Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen über Farbtöne und Farbkreise). Die zwei Farben sind als eine Basisfarbe und die Basisfarbe mit einem Farbtonkanal von +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleichmäßig um den Farbkreis verteilt sind. Die drei Farben sind als eine Basisfarbe, die Basisfarbe mit einem Farbtonkanal von -120 Grad und die Basisfarbe mit einem Farbtonkanal von +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleichmäßig um den Farbkreis verteilt sind. Die vier Farben sind als eine Basisfarbe und die Basisfarbe mit einem Farbtonkanal von +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe, und Basisfarbe mit einem Helligkeitskanal von -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color` benutzerdefinierte Eigenschaft wird als Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}} Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) angegeben, um beim Laden des Beispiels eine auf diesem Wert basierende Farbpalette anzuzeigen. Beachten Sie, dass wir dies normalerweise auf dem {{htmlelement("html")}} Element setzen würden, aber das MDN Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarbwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Steuerungselement erstellt. Wenn ein neuer Wert in diesem Steuerungselement festgelegt wird, wird die `--base-color` benutzerdefinierte Eigenschaft mit diesem Wert über JavaScript gesetzt, wodurch eine neue Farbpalette erstellt wird. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Menge von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungselementen ermöglicht die Auswahl eines Farbpalettentyps zur Erstellung. Wenn ein neuer Wert hier ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container` `<div>` gesetzt, um den gewählten Palettentyp darzustellen. In der CSS werden Nachfahren-Selektoren verwendet, um die untergeordneten `<div>`-Elemente zu zielgruppenorientieren (z.B. `.comp :nth-child(1)`), damit sie die korrekten Farben angewendet bekommen und die ungenutzten `<div>`-Nodes ausgeblendet werden.
- Das `container` `<div>`, das die untergeordneten `<div>` Elemente mit den angezeigten Farben der erzeugten Palette enthält. Beachten Sie, dass eine anfangs aufgesetzte Klasse von `comp` darauf gesetzt ist, damit die Seite eine komplementäre Farbgestaltung zeigt, wenn sie zuerst geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahren-Selektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes Kind-`<div>` des gewählten Palettentyps anzuwenden. Uns interessiert mehr die Position der `<div>`s in der Quellreihenfolge als der Elementtyp, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

In der letzten Regel haben wir den [Generellen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht genutzten `<div>` Elemente in jedem Palettentyp anzusprechen und [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) zu setzen, um sie daran zu hindern, gerendert zu werden.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — übergeben der Ursprung `--base-color` und definieren eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal, wie es angemessen ist.

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

##### Ein Exkurs über das Testen von `@supports`

Im Beispiel-CSS sehen Sie {{cssxref("@supports")}} Blöcke, die verwendet werden, um verschiedenen {{cssxref("background-color")}} Werten an Browser zu übergeben, die eine vorherige Entwurfspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil die anfängliche Implementierung von Safari auf einer älteren Version der Spezifikation basierte, in der die Ursprungsfarbkanalwerte in {{cssxref("&lt;number&gt;")}} oder andere Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen durchgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, wie der Support-Test in jedem Fall mit einer beliebigen Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie dieser sollten Sie die einfachstmögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test kommt immer als positiv zurück, unabhängig davon, welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies liegt daran, dass ein Wert einer benutzerdefinierten Eigenschaft nur dann ungültig wird, wenn er so zugewiesen wird, dass er einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft darstellt. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red` Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Wir fügen den Radio-Buttons einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener hinzu, damit bei Auswahl einer Option die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, damit die korrekten Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Wir fügen dem Farbwahlkontrollfeld einen [`input`](/de/docs/Web/API/Element/input_event)-Event-Listener hinzu, sodass bei Auswahl einer neuen Farbe die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Kraft der relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem wir eine einzelne benutzerdefinierte Eigenschaft anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI-Farbschema-Aktualisierer

Dieses Beispiel zeigt eine Karte mit einem Titel und Text, jedoch mit einem besonderen Touch — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Kontrollfeld. Wenn sein Wert geändert wird, wird von JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert festzulegen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color` Wert ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert der benutzerdefinierten Eigenschaft `--hue` gesetzt ist.
- Die anderen für das Design verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}} Element fungiert als äußerer Umschlag, um den restlichen Inhalt aufzunehmen, sodass die Karte und das Formular vertikal und horizontal als eine Einheit innerhalb von `<main>` zentriert werden können.
- Das {{htmlelement("section")}} Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}} Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)) Kontrollfeld und sein {{htmlelement("label")}}.

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

Im CSS hat die `:root` eine Standard-`--hue`-Wertsetzung auf ihr, relative [`lch()`](/de/docs/Web/CSS/color_value/lch) Farben, um das Farbschema zu definieren, und einen radialen Farbverlauf, der den gesamten Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe es tun würde) und passt ihren Farbtonwert an den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrundfarbe verwendet werden soll. Dies wird erreicht, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe, 180 Grad um den Farbkreis von `--base-color` entfernt. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Sehen Sie sich jetzt den Rest des CSS an und beachten Sie all die Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Rahmen](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers ein.

> [!NOTE]
> Aus Gründen der Übersichtlichkeit werden nur die für die Verwendung relativer Farben relevanten Teile des CSS gezeigt.

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

Das JavaScript fügt dem Slider-Kontrollfeld einen [`input`](/de/docs/Web/API/Element/input_event)-Event-Listener hinzu, sodass bei Festlegung eines neuen Werts die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue` benutzerdefinierten Eigenschaftswert auf die `:root` (das `<html>` Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis ist unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, sobald ein einzelner Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://de.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://de.wikipedia.org/wiki/CIELAB-Farbraum) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
