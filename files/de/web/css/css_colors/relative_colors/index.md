---
title: Verwenden von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein leistungsstarkes Feature, das die einfache Erstellung von Komplementärfarben zu bestehenden Farben ermöglicht – wie z.B. hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und damit eine effektivere Erstellung von Farbpaletten ermöglicht.

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

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, aber mit unterschiedlichen Parametern:

1. Integrieren Sie eine Basisfarbfunktion (oben als _`color-function()`_ dargestellt) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe (die **Ausgabefarbe**) verwenden möchten.
2. Geben Sie die **Ursprungsfarbe** an (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, vorangestellt durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der mit jedem verfügbaren Farbmodell, einschließlich eines Farbwertes, der in einer [benutzerdefinierten CSS-Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe verwendet werden kann.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion geben Sie den _[`Farbraum`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der Originalwert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, der durch einen Schrägstrich (`/`) vorangestellt wird. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird standardmäßig der `alpha`-Kanalwert der _`Ursprungsfarbe`_ verwendet (nicht 100%, was für absolute Farbwerte der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farbfunktion kompatibel ist, und zerlegt sie dann in ihre Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen besitzt). Diese stehen als angemessen benannte Werte innerhalb der Farbfunktion zur Verfügung — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Sehen wir uns die relative Farbsyntax in Aktion an. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf dem gleichen `red` Farbewert erstellt wurde:

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

Die relative Farbe verwendet die Funktion [`rgb()`](/de/docs/Web/CSS/color_value/rgb), die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe definiert, indem ein roter Kanalwert von `200` und grüne und blaue Kanäle mit einem Wert gleich der Ursprungsfarbe festgelegt werden (es werden die `g`- und `b`-Werte verwendet, die vom Browser innerhalb der Funktion bereitgestellt werden, beide gleich `0` sind).

Dies führt zu einem Ergebnis von `rgb(200 0 0)` — einem leicht dunkleren Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe exakt derselbe Wert wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie bereits erwähnt, ist das Erste, was der Browser beim Berechnen einer relativen Farbe tut, die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert umzurechnen, der mit der verwendeten Farbfunktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser in der Lage ist, die Ausgabefarbe aus der Ursprungsfarbe zu berechnen. Während die Berechnungen relativ zur verwendeten Farbfunktion erfolgen, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunctions können nicht das gesamte Spektrum sichtbarer Farben darstellen. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden in `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farb-Ausgabewerte in derselben Syntax ausgedrückt wie die verwendete Farbfunktion. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den demontierten Ursprungsfarbkanalwerten in der Funktion und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es nochmals zu betonen: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung, um beim Definieren der Ausgabefarb-Kanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Ursprungsfarb-Kanalwerte (bereitgestellt als `r`, `g` und `b`) für die Ausgabe-Kanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Ursprungsfarb-Kanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, solange sie gültige Werte für diese Kanäle sind. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Wenn Sie möchten, können Sie z. B. absolute Werte wie unten dargestellt angeben, um `red` in `blue` zu verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die überhaupt nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Wahrscheinlich würden Sie dies in einem tatsächlichen Codebase nie tun und würden stattdessen einfach einen absoluten Farbwert verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies _können_ mit relativer Farbsyntax tun, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das Folgende nimmt ein leicht dunkleres Rot als Eingabe und gibt eine helle graue Farbe aus – die Ausgabefarbe hat ihre `r`-, `g`- und `b`-Kanäle alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das Folgende verwendet die Kanalwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, aber in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

In dem obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die der verwendeten Funktion entsprechen.

Unten finden Sie Beispiele für relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet eine Menge Flexibilität. Im Allgemeinen sind Sie nicht daran interessiert und wissen vielleicht nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie könnten einfach einen [benutzerdefinierten Eigenschaftswert](#verwenden_von_benutzerdefinierten_eigenschaften) haben, den Sie manipulieren möchten). Sie möchten einfach eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarb-Kanalwertdefinitionen Werte verwendet werden, die in [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) definiert sind. Lassen Sie uns ein Beispiel betrachten.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Marken-Deckungsgrad, den wir auf halbtransparente Kästen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eine erhält eine absolute Farbe — unser `--base-color` Marken-Purple. Der andere erhält eine relative Farbe, die unserem Marken-Purple entspricht und transformiert wird, um einen Alphakanal mit unserem Standard-Deckungsgrad zu ergänzen:

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

## Verwenden von Mathematikfunktionen

Sie können CSS-[Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Lassen Sie uns ein Beispiel betrachten.

Der folgende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält ein unverändertes `--base-color`, während die linken und rechten Varianten dieses `--base-color` verwendet werden, die mit relativen Farben definiert sind — das `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt mit einer `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Um Kanalwertberechnungen in relativen Farben zu ermöglichen, lösen sich alle Ursprungsfarbkanalwerte in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel berechnen wir in den obigen `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe addieren oder davon subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu machen, würde dies zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt bekommen.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich zu einem `<number>`-Wert auf, der zur verwendeten Ausgabefarbfunktion passt.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich zu einer Anzahl von Grad in einem Bereich von `0` bis `360`, einschließlich.

Prüfen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, in was sich ihre Ursprungsfarbkanalwerte auflösen.

## Überprüfen der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie finden weitere Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf deren eigenen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbschema-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalette-Typ auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden oder anders ausgedrückt, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen über Farbtöne und Farbräder). Die beiden Farben werden als Basisfarbe und die Basisfarbe mit einem Farbtonkanal +180 Grad definiert.
- **Triadic**: Beinhaltet drei Farben, die gleich weit um den Farbkreis herum liegen. Die drei Farben werden als Basisfarbe, Basisfarbe mit Farbtonkanal -120 Grad und Basisfarbe mit Farbtonkanal +120 Grad definiert.
- **Tetradic**: Beinhaltet vier Farben, die gleich weit um den Farbkreis herum liegen. Die vier Farben werden als Basisfarbe und Basisfarbe mit Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Basispicker für die Farbe wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die benutzerdefinierte Eigenschaft `--base-color` auf diesen Wert mit JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Der Satz von [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen ermöglicht die Auswahl eines zu generierenden Farbpalettentyps. Wenn hier ein neuer Wert ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container` `<div>` gesetzt, um den gewählten Palette-Typ darzustellen. In der CSS werden Nachkommen-Selektoren verwendet, um die Kind-`<div>`-s zu adressieren (z.B. `.comp :nth-child(1)`), damit sie die richtigen Farben bekommen und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `container` `<div>`, das die Kind-`<div>`-Elemente enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine Anfangsklasse `comp` darauf gesetzt ist, damit die Seite ein komplementäres Farbschema beim ersten Laden anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkommen-Selektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes Kind-`<div>` für den gewählten Palettentyp anzuwenden. Wir kümmern uns mehr um die Position der `<div>`-s in der Quellordnung als um den Typ des Elements, deshalb haben wir {{cssxref(":nth-child")}} verwendet, um sie zu adressieren.

In der letzten Regel haben wir den [allgemeinen Geschwisterselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die unbenutzten `<div>`-Elemente in jedem Palettentyp anzusprechen und [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) zu setzen, um zu verhindern, dass sie gerendert werden.

Die Farben selbst enthalten die `--base-color`, sowie relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — sie nehmen die Ursprungs-`--base-color` und definieren eine Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal, wie erforderlich.

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

##### Ein Exkurs zum Testen mit `@supports`

Im Beispiel-CSS werden Sie {{cssxref("@supports")}}-Blöcke bemerken, die verwendet werden, um verschiedenen {{cssxref("background-color")}}-Werte an Browser zu liefern, die einen vorherigen Entwurf der relativen Farbsyntax-Spezifikation unterstützen. Diese sind notwendig, weil Safaris erste Implementierung auf einer älteren Version der Spezifikationen beruhte, in denen sich die Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen in Abhängigkeit vom Kontext auflösten. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn man Additionen und Subtraktionen ausführte, was Verwirrung stiftete. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, dass der Support-Test in jedem Fall mit einer einfachen Deklaration — z.B. `color: lch(from red l c calc(h + 90deg))` — und nicht mit dem tatsächlichen Wert gemacht wird, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die trotzdem den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test fällt immer positiv aus, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Dies liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red` Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzu, damit wenn einer ausgewählt wird, die Funktion `setContainer()` läuft. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, sodass die richtigen Hintergrundfarben auf die Kind-`<div>`-s für den gewählten Palette-Typ angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Farbpicker-Steuerung hinzu, damit wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` läuft. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dieses Beispiel beginnt, die Leistungsfähigkeit relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem eine einzelne benutzerdefinierte Eigenschaft angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live-Farbschema-Aktualisierer für die Benutzeroberfläche

Dieses Beispiel zeigt eine Karte, die eine Überschrift und einen Text enthält, aber mit einer Wendung — darunter befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)). Wenn sein Wert geändert wird, wird JavaScript verwendet, um den Wert der benutzerdefinierten Eigenschaft `--hue` auf den neuen Schiebereglerwert zu setzen.

Dies passt das Farbschema für die gesamte Benutzeroberfläche entsprechend an:

- Der Wert `--base-color` ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert der benutzerdefinierten Eigenschaft `--hue` gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, die auf der `--base-color` basieren. Infolgedessen ändern sich diese, wenn sich die `--base-color` ändert.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Umschlag, um den Rest des Inhalts zu enthalten, damit die Karte und das Formular sowohl vertikal als auch horizontal innerhalb von `<main>` zentriert als eine Einheit angezeigt werden.
- Das {{htmlelement("section")}}-Element enthält das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Karteninhalt definieren.
- Das {{htmlelement("form")}}-Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement und sein {{htmlelement("label")}}.

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

Im CSS hat `:root` einen Standardwert `--hue` aufgesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch) Farben, um das Farbschema zu definieren, sowie einen radialen Verlauf, der den gesamten Body ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe ausreichen würde) und passt ihren Farbtonwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrundfarbe verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Jetzt schauen Sie sich den Rest des CSS an und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders ein.

> [!NOTE]
> Der Übersichtlichkeit halber werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Slider-Steuerelement hinzu, sodass wenn ein neuer Wert gesetzt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-Wert der benutzerdefinierten Eigenschaft `--hue` auf das `:root` (das `<html>`-Element), der den ursprünglich in unserem CSS gesetzten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. In diesem Beispiel werden relative CSS-Farben verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, indem ein einziger Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS-Relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
