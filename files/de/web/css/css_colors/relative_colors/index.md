---
title: Verwendung relativer Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es erlaubt, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, einfach Komplementärfarben zu bestehenden Farben zu erstellen – wie hellere, dunklere, stärker gesättigte, halbtransparente oder invertierte Varianten –, was eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und behandelt einige anschauliche Beispiele.

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

1. Fügen Sie eine grundlegende Farbfunktion (repräsentiert durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), etc., ein. Welche Sie wählen, hängt von dem Farbmodell ab, das Sie für die relative Farbe verwenden möchten, die Sie erstellen (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (repräsentiert durch _`origin-color`_ oben), auf der Ihre relative Farbe basieren wird, und zwar mit dem Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert unter Verwendung eines verfügbaren Farbmodells sein, einschließlich eines Farbwerts in einer [CSS-Custom-Property](/de/docs/Web/CSS/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion geben Sie den _[`Farbraum`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_ oben. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Beispielsweise müssen Sie, wenn Sie [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungfarbe.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, dem ein Schrägstrich (`/`) vorangestellt ist. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er auf den `alpha`-Kanalwert der _`origin-color`_ zurückgesetzt (nicht auf 100 %, was bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese stehen als entsprechend benannte Werte innerhalb der Farbfunktion zur Verfügung – `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()`, etc. – die zur Berechnung neuer Ausgabekanalwerte verwendet werden können.

Schauen wir uns die relative Farbsyntax in der Praxis an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe – `red` – und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion basierend auf demselben `red`-Farbwert erstellt wird:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe konvertiert (`rgb(255 0 0)`) und dann die neue Farbe so definiert, dass sie einen Rot-Kanal mit dem Wert `200` und Grün- und Blau-Kanäle mit einem Wert hat, der dem der Ursprungsfarbe entspricht (sie verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser zur Verfügung gestellt werden und beide gleich `0` sind).

Das resultiert in einer Ausgabe von `rgb(200 0 0)` – einem leicht dunkleren Rot. Hätten wir einen Rot-Kanalwert von `255` (oder nur den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert gewesen. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` – `color(srgb 0.784314 0 0)` – entspricht.

> [!NOTE]
> Wie oben erwähnt, ist der erste Schritt, den der Browser bei der Berechnung einer relativen Farbe unternimmt, die Umwandlung der angegebenen Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe von der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte in derselben Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

Diese fünf Zeilen ergeben alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es zu verdeutlichen: Wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion verfügbar gemacht, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe mit einer `rgb()`-Funktion und verwendet die Kanalwerte der Ursprungsfarbe (verfügbar als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Kanalwerte der Ursprungsfarbe überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber sie können beliebige Werte sein, vorausgesetzt, sie sind gültige Werte für diese Kanäle. Dies verleiht relativen CSS-Farben ein hohes Maß an Flexibilität.

Zum Beispiel könnten Sie absolute Werte angeben, wie im folgenden Beispiel gezeigt, das `red` in `blue` umwandelt:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Es ist unwahrscheinlich, dass Sie dies jemals in einer echten Codebasis tun würden und würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Aber, wir hielten es für nützlich zu erklären, dass Sie dies _können_ mit der relativen Farbsyntax tun können, als Ausgangspunkt für das Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das Folgende nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus – die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe eingestellt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Kanalwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanalwerte der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die zur verwendeten Funktion passen.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachstmögliche, bei dem die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen sind Sie nicht daran interessiert, und es könnte sogar sein, dass Sie das System nicht kennen, in dem die Ursprungsfarbe definiert ist (Sie haben vielleicht nur einen [benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zu manipulieren). Sie möchten einfach eine Farbe eingeben und zum Beispiel eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte verwenden, die in [CSS-Custom-Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) sowohl für die Ursprungsfarbe als auch für die Definitionen von Ausgabefarbkanalwerten definiert sind. Schauen wir uns ein Beispiel an.

Im unten stehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Grundmarkenfarbe – `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten – `0,75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines bekommt eine absolute Farbe – unser `--base-color` Markenpurpur. Das andere bekommt eine relative Farbe, die unserem Markenpurpur entspricht, transformiert, um einen Alphakanal hinzuzufügen, der unserem Standard-Opazitätswert entspricht.

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

## Verwendung von Mathematikfunktionen

Sie können CSS [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Schauen wir uns ein Beispiel an.

Der unten stehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während das linke und rechte aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert – die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal verändert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 20 % zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20 % davon abgezogen.

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

## Kanalwerte werden in `<number>`-Werte aufgelöst

Um Kanalwertberechnungen in relativen Farben zu ermöglichen, werden alle Ursprungsfarbkanalwerte zu geeigneten {{cssxref("&lt;number&gt;")}}-Werten aufgelöst. Zum Beispiel berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen von dem `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu berechnen, würde das zu einer ungültigen Farbe führen – `l` ist ein `<number>` und es kann kein {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, werden zu einem `<number>`-Wert aufgelöst, der für die Ausgabefunktion geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkel angegeben wurden, werden in eine Anzahl von Grad in einem Bereich von `0` bis `360`, einschließlich, aufgelöst.

Überprüfen Sie die unterschiedlichen [Farbfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Einzelheiten, was ihre Ursprungsfarbkanalwerte darstellen.

## Überprüfung auf Browserunterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Weitere Beispiele zur Demonstration der Verwendung von relativen Farbsyntaxen in den verschiedenen Funktionstypen finden Sie auf deren speziellen Seiten: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalette-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp zu wählen. Der Browser zeigt dann eine geeignete Palette von Farben an, die auf der gewählten Basisfarbe basieren. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbrades liegen, oder anders ausgedrückt, _gegenüberliegende Farbton_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen zu Farbtönen und Farbrädern). Die zwei Farben sind als Basisfarbe und Basisfarbe mit Farbtonkanal +180 Grad definiert.
- **Triadisch**: Enthält drei Farben, die gleich weit voneinander entfernt um das Farbrad angeordnet sind. Die drei Farben sind als Basisfarbe, Basisfarbe mit Farbtonkanal -120 Grad und Basisfarbe mit Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben, die gleich weit voneinander entfernt um das Farbrad angeordnet sind. Die vier Farben sind als Basisfarbe, Basisfarbe mit Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert – Basisfarbe, und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML wird unten zur Referenz bereitgestellt. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte `--base-color`-Eigenschaft wird als Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) vorgegeben, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Der Basisfarbwähler wird mithilfe eines [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerelements erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die benutzerdefinierte `--base-color`-Eigenschaft auf diesen Wert mithilfe von JavaScript gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben, die auf `--base-color` basieren.
- Die Reihe von [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn ein neuer Wert hier gewählt wird, wird mithilfe von JavaScript eine neue Klasse auf dem `container` `<div>` gesetzt, um den gewählten Farbpalette-Typ darzustellen. In dem CSS wurden Nachkommensselektoren verwendet, um die Kind-`<div>`s zu wählen (z. B. `.comp :nth-child(1)`) damit sie die richtigen Farben erhalten und die ungenutzten `<div>`-Knoten ausgeblendet werden.
- Das `container` `<div>`, das die Kind-`<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine Anfangsklasse `comp` darauf gesetzt ist, damit die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten wird nur der CSS-Code angezeigt, der die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkommensselektoren verwendet werden, um die richtige {{cssxref("background-color")}} auf jede Kind-`<div>` für die gewählte Palette anzuwenden. Uns ist mehr an der Position der `<div>`s in der Quellreihenfolge gelegen, als an der Art des Elements, also haben wir {{cssxref(":nth-child")}} verwendet, um sie auszuwählen.

Im letzten Regel haben wir den [Allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu wählen, wobei [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt wird, um zu verhindern, dass sie gerendert werden.

Die Farben selbst beinhalten die `--base-color`, plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion – die Ursprungs-`--base-color` wird unter Angabe einer Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal weitergegeben, je nachdem, was erforderlich ist.

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

##### Ein Exkurs über `@supports`-Tests

Im Beispiel-CSS werden Sie {{cssxref("@supports")}}-Blöcke bemerken, die verwendet werden, um verschiedenen {{cssxref("background-color")}}-Werten für Browser, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen, bereitzustellen. Diese sind erforderlich, da Safaris erste Implementierung auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}} oder anderen Einheitstypen je nach Kontext aufgelöst wurden. Dies bedeutete, dass manchmal Werte Einheiten benötigten, wenn sie Additionen und Subtraktionen durchgeführt wurden, was zu Verwirrung führte. In neueren Implementierungen werden Ursprungsfarbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aufgelöst, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, dass der Unterstützungs-Test in jedem Fall mit einer einfachen Deklaration durchgeführt wird – `color: lch(from red l c calc(h + 90deg))` zum Beispiel – anstatt den tatsächlichen Wert, den wir für andere Browser benötigen, abzuwickeln. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachste mögliche Deklaration verwenden, die trotzdem den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht – der Test wird immer positiv zurückgegeben, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er auf einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft gesetzt wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir den Radio-Buttons einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener hinzu, sodass bei Auswahl einer Von dem die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert der ausgewählten Radio-Schaltfläche, damit die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir dem Farbwähler-Steuerelement einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener hinzu, sodass bei Auswahl einer neuen Farbe die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion legt den Wert der benutzerdefinierten `--base-color`-Eigenschaft auf die neue Farbe fest.

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

Die Ausgabe ist wie folgt. Dies beginnt die Leistungsfähigkeit der relativen CSS-Farben zu zeigen – wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem nur eine einzige benutzerdefinierte Eigenschaft angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI Farbschema Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und Text enthält, jedoch mit einem Dreh – unterhalb der Karte befindet sich ein Slider ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Kontroll. Wenn sein Wert verändert wird, wird JavaScript verwendet, um den Wert der benutzerdefinierten `--hue`-Eigenschaft auf den neuen Slider-Wert festzulegen.

Dies passt wiederum das Farbschema für die gesamte UI an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal auf den Wert der `--hue`-Eigenschaft gesetzt.
- Die anderen in der Gestaltung verwendeten Farben basieren auf `--base-color`. Als Ergebnis ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest der Inhalte zu enthalten, sodass die Karte und das Formular vertikal und horizontal als eine Einheit innerhalb von `<main>` zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement und ihr {{htmlelement("label")}}.

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

Im CSS hat das `:root` einen Standard-`--hue`-Wert darauf gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, und ein Radialverlauf, der den ganzen Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Grundfarbe nimmt eine Ursprungsfarbe von `red` an (obwohl jede volle Farbe in Ordnung wäre) und passt ihren Farbtonwert auf den Wert an, der in der benutzerdefinierten `--hue`-Eigenschaft festgelegt ist.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, gedacht als Hintergrund. Dies wird erstellt, indem man eine Ursprungsfarbe von `--base-color` nimmt und 40 zu ihrem Helligkeitswert hinzufügt.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um das Farbrad von `--base-color`. Dies wird erstellt, indem man eine Ursprungsfarbe von `--base-color` verwendet und 180 zu ihrem Farbtonwert hinzufügt.

Schauen Sie sich jetzt den restlichen CSS-Code an und nehmen Sie Notiz von allen Stellen, an denen diese Farben benutzt werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders ein.

> [!NOTE]
> Aus Gründen der Kürze sind nur die Teile des CSS relevant für die Verwendung relativer Farben angezeigt.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum Slider-Steuerelement hinzu, sodass bei Setzen eines neuen Wertes die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-Wert der benutzerdefinierten `--hue`-Eigenschaft auf das `:root` (das `<html>`-Element), das den ursprünglich in unserem CSS festgelegten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Die Ausgabe ist unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten UI zu steuern, das live angepasst werden kann, indem ein einfacher Wert verändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
