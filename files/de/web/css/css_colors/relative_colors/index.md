---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Das [CSS-Farben-Modul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die die einfache Erstellung von Ergänzungen zu vorhandenen Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so eine effektivere Erstellung von Farbschemata ermöglicht.

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

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Schließen Sie eine grundlegende Farbfunktion ein (dargestellt durch _`color-function()`_ oben), wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie auswählen, hängt vom Farbmodell ab, das Sie für die Erstellung des relativen Farben verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, und zwar mit dem Keyword `from` davor. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe enthalten ist.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion geben Sie den _[`Farbraum`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert sein oder ein Wert, der relativ zum Kanalwert der Ursprungsfarbe ist.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, dem ein Schrägstrich (`/`) vorangestellt ist. Wenn der `alpha`-Kanalwert nicht explizit spezifiziert wird, entspricht er standardmäßig dem Alpha-Kanalwert der _`origin-color`_ (nicht 100 %, was der Fall bei absoluten Farbwerten ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farbfunktion kompatibel ist und zerlegt sie in Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese werden als entsprechend benannte Werte innerhalb der Farbfunktion zur Verfügung gestellt — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wurde, basierend auf demselben `red`-Farbwert:

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

Die relative Farbe nutzt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, es in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe so definiert, dass sie einen roten Kanal mit dem Wert `200` und grüne und blaue Kanäle mit dem gleichen Wert wie die Ursprungsfarbe aufweist (es verwendet die `g`- und `b`-Werte, die vom Browser innerhalb der Funktion bereitgestellt werden und die beide gleich `0` sind).

Dies führt zu einem Ergebnis von `rgb(200 0 0)` — einem leicht dunkleren Rot. Wenn wir einen roten Kanalwert von `255` (oder nur den `r`-Wert) angegeben hätten, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)`gleichwertig ist — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das erste, was der Browser tut, wenn eine relative Farbe berechnet wird, die bereitgestellte Ursprungsfarbe (`rot` im obigen Beispiel) in einen Wert zu konvertieren, der mit der verwendeten Farbfunktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden als `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode der Ausgabewert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgegeben wird.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`), werden relative Farbausgabewerte im selben Syntaxstil ausgedrückt wie die verwendete Farbfunktion. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine gleichwertige Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den innerhalb der Funktion verfügbaren destrukturierten Ursprungsfarbkanalwerten und den vom Entwickler festgelegten Ausgabefarbkanalwerten.

Um das noch einmal zu wiederholen: Wenn eine relative Farbe definiert ist, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um bei der Bestimmung der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge bereitstellen (z. B. rot, dann grün, dann blau im Fall von `rgb()`), aber es können beliebige Werte sein, die Sie wünschen, vorausgesetzt, es sind gültige Werte für diese Kanäle. Dies gibt relativen CSS-Farben einen hohen Grad an Flexibilität.

Zum Beispiel, wenn Sie wollten, könnten Sie absolute Werte wie die unten gezeigten angeben und `rot` in `blau` umwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie keine wirkliche relative Farbe. Sie würden dies wahrscheinlich in einem echten Code nicht tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie _können_ dies mit relativer Farbsyntax tun, als Ausgangspunkt, um mehr darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Folgendes nimmt ein leicht dunkleres Rot als Eingabe und gibt eine helle Graufarbe aus — die `r`, `g` und `b` Kanäle der Ausgabefarbe werden alle auf den `r` Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`, `g` und `b` Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im Abschnitt oben haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die für die verwendete Funktion geeignet sind.

Unten finden Sie Beispiele für die relative Farbsyntax bei jeder Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist nochmal erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet erneut viel Flexibilität. Im Allgemeinen sind Sie nicht daran interessiert (und wissen möglicherweise nicht einmal), welches System die Ursprungsfarbe definiert, und möchten möglicherweise nur einen [benutzerdefinierten Eigenschaftswert](#verwenden_von_benutzerdefinierten_eigenschaften) manipulieren. Sie möchten nur eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie es in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definierte Werte sowohl für die Ursprungsfarbe als auch innerhalb der Definitionen der Ausgabefarbkanalwerte verwenden. Sehen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Keyword, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Marken-lila. Das andere erhält eine relative Farbe, die unserem Marken-lila entspricht, transformiert, um einen Alpha-Kanal hinzuzufügen, der unserem Standard-Opazitätswert entspricht.

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

Sie können CSS-[Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu gestalten. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während die linken und rechten Varianten hellere und dunklere Varianten dieser `--base-color` haben. Diese Varianten werden mit relativen Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschte Effekt zu erzielen mittels einer `calc()`-Funktion. Die aufgehellte Farbe hat 20 % zu ihrem Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20 % abgezogen.

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

Um Berechnungen von Kanalwerten in relativen Farben zu ermöglichen, lösen sich alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auf. Beispielsweise berechnen wir in den obigen `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen zu oder von ihrem `l`-Kanalwert der Ursprungsfarbe hinzufügen oder abziehen. Würden wir versuchen, `calc(l + 20%)` auszuführen, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in ein `<number>` auf, das für die Farbfunktion der Ausgabefarbe geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich in eine Zahl von Grad in einem Bereich von `0` bis `360` ein, einschließlich.

Prüfen Sie die verschiedenen [Farbfunktionenseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, wozu ihre Ursprungsfarbkanalwerte sich auflösen.

## Überprüfung der Browserunterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}} At-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele finden, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren speziellen Seiten illustrieren: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalette-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe. Die Optionen für die Farbpalette sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen, oder anders ausgedrückt, _gegensätzliche Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen über Farbtöne und Farbkreise). Die beiden Farben sind als Basisfarbe und Basisfarbe mit einem Farbtonkanal +180 Grad definiert.
- **Triadisch**: Enthält drei Farben, die gleiche Abstände auf dem Farbkreis haben. Die drei Farben sind als Basisfarbe, Basisfarbe mit einem Farbtonkanal -120 Grad und Basisfarbe mit einem Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben, die gleichen Abstände auf dem Farbkreis haben. Die vier Farben sind als Basisfarbe und Basisfarbe mit einem Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit einem Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zum Nachlesen eingeschlossen. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert zu zeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir dies normalerweise möglicherweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarben-Picker wird durch eine [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) Kontrolle erstellt. Wenn ein neuer Wert in diesem Steuerungssatz eingestellt wird, wird die benutzerdefinierte Eigenschaft `--base-color` mit diesem Wert mittels JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Der Satz von [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) Kontrollpunkten ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn ein neuer Wert hier ausgewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container` `<div>` festzulegen, die den ausgewählten Palette entspricht. In dem CSS werden Nachkommen-Selektoren verwendet, um die Kinder-`<div>`s anzusprechen (z.B. `.comp :nth-child(1)`), damit sie die richtigen Farben erhalten und die nicht genutzten `<div>`-Knoten verbergen.
- Das `container` `<div>`, das die Kinder-`<div>`s enthält, welche die Farben der generierten Palette anzeigen. Beachten Sie, dass anfänglich eine Klasse von `comp` gesetzt wird, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in den einzelnen Fällen Nachkommen-Selektoren verwendet werden, um jedem Kind-`<div>` die richtige {{cssxref("background-color")}} für die gewählte Palette zuzuweisen. Wir kümmern uns hier mehr um die Position der `<div>`s in der Quellreihenfolge als um den Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

In der letzten Regel haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp anzusprechen und [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) festzulegen, um sie davon abzuhalten, gerendert zu werden.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — in dem sie die Ursprungsfarbe `--base-color` übergeben und eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbton-Kanal definieren.

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

/* Simple form styling */

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

##### Eine Bemerkung zu `@supports`-Tests

Im Beispiel-CSS werden Ihnen {{cssxref("@supports")}}-Blöcke auffallen, die verwendet werden, um andere {{cssxref("background-color")}}-Werte für Browser bereitzustellen, die ein früherer Entwurfs-Standard der relativen Farbsyntax unterstützen. Diese sind erforderlich, da Safaris anfängliche Umsetzung auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte je nach Kontext in {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten benötigten, wenn Addition und Subtraktion ausgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten erfolgen.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer einfachen Anweisung durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — anstatt den tatsächlichen Wert, den wir für andere Browser variieren müssen. Bei der Prüfung komplexer Werte wie dieser sollten Sie die einfachste mögliche Anweisung verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test wird immer als positiv zurückgegeben, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft gibt. Der Grund dafür ist, dass ein Wert einer benutzerdefinierten Eigenschaft erst dann ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Wertes) einer normalen CSS-Eigenschaft zugewiesen wird. Um dieses Problem zu umgehen, haben wir in jedem Test `var(--base-color)` mit dem `red`-Keyword ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzu, sodass, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die korrekten Hintergrundfarben auf die Kinder-`<div>`s für den gewählten Palette-Typ angewendet werden.
- Fügen wir ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zu dem Farb-Auswahlsteuerung hinzu, sodass, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem eine einzelne benutzerdefinierte Eigenschaft angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI Farbschema Aktualisierer

Dieses Beispiel zeigt eine Karte, die eine Überschrift und einen Text enthält, jedoch mit einem Twist — unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Kontrolle. Wenn sein Wert geändert wird, wird JavaScript verwendet, um einen `--hue`-Wert der benutzerdefinierten Eigenschaft auf den neuen Schieberwert zu setzen.

Dies wiederum passt das Farbschema der gesamten Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe, deren Farbtonkanal auf den Wert der benutzerdefinierten Eigenschaft `--hue` gesetzt ist.
- Die anderen in dem Design verwendeten Farben sind relative Farben, die auf `--base-color` basieren. Dadurch ändern sie sich, wenn die `--base-color` sich ändert.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußere Umhüllung, um den Rest des Inhalts zu umfassen und es der Karte und dem Formular zu ermöglichen, vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert zu werden.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Steuerung und sein {{htmlelement("label")}}.

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

Im CSS hat die `:root` einen Standardwert für `--hue`, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zur Definition des Farbschemas plus ein radialen Farbverlauf, der den gesamten Hintergrund umfasst.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe hat eine Ursprungsfarbe von `red` (obwohl jede volle Farbe ausreichen würde) und passt ihren Farbwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, vorgesehen als Hintergrund. Dies wird erstellt, indem ein Ursprung von `--base-color` genommen und 40 zu seinem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wird erstellt, indem ein Ursprung von `--base-color` genommen und 180 zu seinem Farbwert hinzugefügt wird.

Betrachten Sie jetzt den Rest des CSS und achten Sie auf alle Stellen, an denen diese Farben verwendet werden. Dazu gehören [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow), und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schieberegler.

> [!NOTE]
> Aus Gründen der Übersichtlichkeit werden nur die Teile des CSS gezeigt, die für die Verwendung von relativen Farben relevant sind.

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

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Schieberegler hinzu, sodass, wenn ein neuer Wert gesetzt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-Wert der benutzerdefinierten Eigenschaft `--hue` auf der `:root` (dem `<html>`-Element), der den ursprünglich standardmäßigen Wert, den wir in unserem CSS gesetzt haben, überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, das live angepasst werden kann, da ein einziger Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
