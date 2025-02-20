---
title: Relative Farben verwenden
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Das [CSS Colors-Modul](/de/docs/Web/CSS/CSS_colors) definiert **relative Farbsyntax**, die es ermöglicht, einen CSS {{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist ein mächtiges Feature, das die einfache Erstellung von Ergänzungen zu bestehenden Farben ermöglicht — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und so die effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die Syntax der relativen Farben, zeigt die verschiedenen Optionen auf und betrachtet einige anschauliche Beispiele.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden unter Verwendung der gleichen [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, aber mit unterschiedlichen Parametern:

1. Inkludieren Sie eine grundlegende Farbfunktion (oben dargestellt durch _`color-function()`_) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie auswählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Übergeben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren wird, vorangestellt durch das `from`-Schlüsselwort. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell einschließlich eines in einer [CSS Custom Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthaltenen Farbwerts, Systemfarben, `currentColor` oder sogar eine andere relative Farbe verwendet.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion muss der _[`Farbraum`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe inkludiert werden.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_ oben. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optionale kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, voran gegangen von einem Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht ausdrücklich angegeben wird, wird er standardmäßig auf den `alpha`-Kanalwert der _`origin-color`_ gesetzt (nicht auf 100%, wie es bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie in einzelne Farbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese stehen innerhalb der Farbfunktion als passend benannte Werte zur Verfügung — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Sehen wir uns die relative Farbsyntax in Aktion an. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wurde und auf demselben `red`-Farbwert basiert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, diese in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe mit einem Rotkanalwert von `200` und Grün- und Blaukanälen mit einem Wert identisch zum Ursprungsfarbwert definiert (sie verwendet die `g` und `b`-Werte, die innerhalb der Funktion vom Browser bereitgestellt werden und beide gleich `0` sind).

Das Ergebnis ist ein Ausgangswert von `rgb(200 0 0)` — ein etwas dunkleres Rot. Hätten wir einen Rotkanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, führt der Browser beim Berechnen einer relativen Farbe zuerst eine Konvertierung der angegebenen Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert aus (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Obwohl die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.
> - Bei neueren Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden die Ausgabewerte der relativen Farben im gleichen Syntaxformat wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den innerhalb der Funktion bereitgestellten aufgeschlüsselten Farbkanalwerten der Ursprungsfarbe und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es zu wiederholen: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe durch eine `rgb()`-Funktion und verwendet die Kanalwerte der Ursprungsfarbe (bereitgestellt als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe mit der Ursprungsfarbe identisch ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte festlegen, müssen Sie die Kanalwerte der Ursprungsfarbe überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die gültige Werte für diese Kanäle sind. Dies bietet den relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie beispielsweise möchten, könnten Sie absolute Werte wie die unten angegebenen festlegen, die `red` in `blue` verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe ausgeben, die nicht auf der Ursprungsfarbe basiert, erstellen Sie eigentlich keine relative Farbe. Es ist unwahrscheinlich, dass Sie dies in einem echten Code tun würden, und Sie würden wahrscheinlich einfach einen absoluten Farbwert verwenden. Aber wir fanden es nützlich zu erklären, dass Sie dies _mit_ der relativen Farbsyntax tun können, als Ausgangspunkt, um darüber zu lernen.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus - die `r`, `g` und `b` Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

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

Im obigen Abschnitt haben wir nur relative Farben gesehen, die durch die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Im Folgenden finden Sie Beispiele zur relativen Farbsyntax für jede Farbfunktion. Jeder Fall ist der simpelste mögliche, wobei die Kanalwerte der Ausgabefarbe genau mit den Kanalwerten der Ursprungsfarbe übereinstimmen:

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

Es sei noch einmal erwähnt, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Dies bietet wiederum viel Flexibilität. In der Regel sind Sie daran nicht interessiert und wissen möglicherweise nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie haben möglicherweise nur einen [Custom Property-Wert](#verwenden_von_benutzerdefinierten_eigenschaften) zum Manipulieren). Sie möchten lediglich eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie in [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definierte Werte sowohl für die Ursprungsfarbe als auch innerhalb der Definition der Ausgabefarbkanalwerte verwenden. Schauen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei Custom Properties:

- `--base-color` enthält unsere Grundmarkenfarbe — `purple`. Hier verwenden wir ein benanntes Farbkeyword, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Deckkraftwert der Marke, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Marken-Purpur. Das andere erhält eine relative Farbe, die unserem Marken-Purpur entspricht, transformiert, um einen Alphakanal mit einem Wert unserer Standarddeckkraft hinzuzufügen.

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

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der folgende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält das unveränderte `--base-color`, während die linken und rechten Varianten hellere und dunklere Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung von relativen Farben definiert — das `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die verdunkelte Farbe hat 20% davon subtrahiert.

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

Um Kanalwertberechnungen in relativen Farben zu ermöglichen, lassen sich alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auflösen. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe hinzufügen oder davon subtrahieren. Würden wir `calc(l + 20%)` versuchen, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann nicht um ein {{cssxref("&lt;percentage&gt;")}} erhöht werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in einen `<number>` auf, der für die Ausgabefunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, lösen sich zu einer Anzahl von Graden im Bereich von `0` bis `360`, einschließlich, auf.

Besuchen Sie die verschiedenen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions), um die spezifischen Informationen darüber zu finden, zu welchen Werten sich ihre Ursprungskanalwerte auflösen.

## Überprüfung der Browserunterstützung

Sie können überprüfen, ob ein Browser die Syntax der relativen Farben unterstützt, indem Sie sie mit einer {{cssxref("@supports")}} At-Regel ausprobieren.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen veranschaulichen, finden Sie auf deren speziellen Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpallettengenerator

Dieses Beispiel erlaubt es Ihnen, eine Basisfarbe und einen Farbpalettentyp zu wählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbauswahlmöglichkeiten sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders ausgedrückt, _gegenteilige Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für weitere Informationen zu Farbtönen und Farbkreisen). Die zwei Farben werden als eine Basisfarbe und die Basisfarbe mit einem Farbtonkanal von +180 Grad definiert.
- **Triadisch**: Enthält drei Farben gleicher Abstände um den Farbkreis herum. Die drei Farben werden als Basisfarbe, Basisfarbe mit einem Farbtonkanal von -120 Grad, und Basisfarbe mit einem Farbtonkanal von +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben gleicher Abstände um den Farbkreis herum. Die vier Farben werden als Basisfarbe, und Basisfarbe mit einem Farbtonkanal von +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, jedoch variierenden Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit einem Helligkeitskanal von -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die `--base-color` Custom Property wird als inline [`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarbwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die `--base-color` Custom Property mit diesem Wert mit JavaScript festgelegt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Gruppe der [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelemente ermöglicht es, einen Farbpalettentyp zur Generierung auszuwählen. Wenn hier ein neuer Wert gewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container`-`<div>` festzulegen, um die gewählte Palette darzustellen. In der CSS werden Nachkommen-Selektoren verwendet, um die Kind-`<div>`s zu targeten (z.B. `.comp :nth-child(1)`), damit sie die richtigen Farben zugewiesen bekommen und die ungenutzten `<div>`-Elemente versteckt werden.
- Das `container`-`<div>`, das die Kind-`<div>`s enthält, die die Farben der generierten Palette darstellen. Beachten Sie, dass ihm standardmäßig eine Klasse `comp` zugewiesen wird, so dass beim ersten Laden der Seite ein komplementäres Farbschema angezeigt wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkommen-Selektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jede Kind-`<div>` für die gewählte Palette anzuwenden. Wir kümmern uns hier mehr um die Position der `<div>`s in der Quellreihenfolge als um den Typ des Elements, weswegen wir {{cssxref(":nth-child")}} verwenden, um sie zu targeten.

In der letzten Regel haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu targeten, wobei [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt wird, damit sie nicht gerendert werden.

Die Farben selbst umfassen die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — mit der übergebenen Ursprungs-`--base-color` und einer Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal je nach Bedarf.

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

Im Beispiel-CSS werden Sie {{cssxref("@supports")}}-Blöcke bemerken, die verwendet werden, um anderen {{cssxref("background-color")}}-Werte an Browser zu geben, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil die anfängliche Implementierung in Safari auf einer älteren Version der Spezifikation basierte, in der sich die Kanalwerte der Ursprungsfarbe je nach Kontext in {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen auflösten. Das bedeutete, dass die Werte manchmal Einheiten erforderten, wenn sie addiert oder subtrahiert wurden, was für Verwirrung sorgte. In neueren Implementierungen lassen sich Kanalwerte der Ursprungsfarbe immer in einen entsprechenden {{cssxref("&lt;number&gt;")}}-Wert auflösen, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten durchgeführt werden.

Beachten Sie, dass der Unterstützungstest in jedem Fall mit einem einfachen Deklaration — z.B. `color: lch(from red l c calc(h + 90deg))` — durchgeführt wird statt dem tatsächlichen Wert, den wir für andere Browser variieren müssen. Bei Tests von komplexen Werten wie diesen sollten Sie die einfachste mögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer Custom Property im `@supports`-Test funktioniert nicht — der Test kommt immer positiv zurück unabhängig von dem Wert, der der Custom Property gegeben wird. Dies liegt daran, dass ein Custom Property-Wert nur dann ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Keyword ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir den [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zu den Radioknöpfen hinzu, so dass, wenn einer ausgewählt ist, die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radioknopfes, damit die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir den [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zur Farbauswahlsteuerung hinzu, so dass, wenn eine neue Farbe ausgewählt ist, die `setBaseColor()`-Funktion ausgeführt wird. Diese setzt den Wert der `--base-color` Custom Property auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Leistung von relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live durch Anpassen einer einzigen Custom Property aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live-UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einer Wendung — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement. Wenn dessen Wert geändert wird, wird JavaScript verwendet, um den `--hue` Custom Property-Wert auf den neuen Schiebereglerwert zu setzen.

Dies wiederum passt das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit dem Farbtonkanal, der auf den Wert der `--hue`-Custom Property gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben, die auf der `--base-color` basieren. Infolgedessen ändern sie sich, wenn die `--base-color` geändert wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, der den Rest des Inhalts umschließt, sodass die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält das ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement und dessen {{htmlelement("label")}}.

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

Im CSS hat das `:root` einen standardmäßigen `--hue`-Wert darauf gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, plus ein Radialgradient, der den gesamten Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede Vollfarbe akzeptiert werden könnte) und passt ihren Farbtonwert auf den im `--hue` Custom Property gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert addiert wird.
- `--complementary-color`: Eine komplementäre Farbe, 180 Grad um den Farbkreis herum von `--base-color`. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert addiert wird.

Schauen Sie sich nun den Rest des CSS genau an und beachten Sie alle Orte, an denen diese Farben verwendet werden. Dies umfasst [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers.

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

Das JavaScript fügt dem Schiebesteuerelement einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener hinzu, so dass, wenn ein neuer Wert gesetzt wird, die `setHue()` Funktion ausgeführt wird. Diese Funktion setzt einen neuen inline `--hue` Custom Property-Wert auf dem `:root` (dem `<html>`-Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS gesetzt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten angezeigt. Relativ CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, wenn ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
