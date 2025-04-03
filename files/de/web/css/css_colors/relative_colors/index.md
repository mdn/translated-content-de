---
title: Verwenden von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, leicht Komplementärfarben zu bestehenden Farben zu erstellen – wie z.B. hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und so eine effektivere Farbpalettenerstellung zu ermöglichen.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen auf und betrachtet einige anschauliche Beispiele.

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

1. Integrieren Sie eine grundlegende Farb-Funktion (oben dargestellt durch _`color-function()`_), wie zum Beispiel [`rgb()`](/de/docs/Web/CSS/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/color_value/hsl). Welche Sie auswählen, hängt vom Farbmodell ab, das Sie für die Erstellung der relativen Farbe (der **Ausgabefarbe**) verwenden möchten.
2. Übergeben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_), auf der Ihre relative Farbe basieren soll, und zwar vorangestellt durch das Schlüsselwort `from`. Dies kann ein beliebiger gültiger {{cssxref("&lt;color&gt;")}}-Wert sein, der jedes verfügbare Farbmodell verwendet, einschließlich eines Farbwerts, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) enthalten ist, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion geben Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe an.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert – oben dargestellt durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der verwendeten [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions) für Ihre relative Farbe ab. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit festlegen. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, vorangestellt mit einem Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, nimmt er standardmäßig den `alpha`-Kanalwert der _`origin-color`_ an (nicht 100%, wie bei absoluten Farbwerten).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farb-Funktion kompatible Syntax und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese werden als geeignet benannte Werte innerhalb der Farb-Funktion verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()`, usw. — die zur Berechnung neuer Ausgabe-Kanalwerte verwendet werden können.

Lassen Sie uns die relative Farbsyntax in Aktion sehen. Der unten stehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, die mit der `rgb()`-Funktion erstellt wurde und auf derselben `red`-Farbe basiert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) umwandelt und dann die neue Farbe mit einem roten Kanalwert von `200` und grünen und blauen Kanälen, die denselben Wert wie die Ursprungsfarbe haben (sie verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser bereitgestellt werden, die beide `0` sind), definiert.

Das resultiert in einem Output von `rgb(200 0 0)` — ein leicht dunkleres Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau dieselbe wie der Eingabewert. Die endgültige vom Browser ausgegebene Farbe (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser bei der Berechnung einer relativen Farbe zuerst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen Wert, der mit der verwendeten Farb-Funktion kompatibel ist (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Obwohl die Berechnungen relativ zur verwendeten Farb-Funktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farb-Funktionen können nicht das vollständige Spektrum sichtbarer Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.
> - Für neuere Farb-Funktionen (`lab()`, `oklab()`, `lch()` und `oklch()`) werden die Ausgabewerte der relativen Farben im selben Syntax wie die verwendete Farb-Funktion ausgedrückt. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farb-Funktion verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den in der Funktion zur Verfügung gestellten zerlegten Ursprungsfarbkanalwerten und den vom Entwickler festgelegten Kanalausgabewerten.

Noch einmal, wenn eine relative Farbe definiert wird, werden die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung gestellt, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Das folgende Beispiel definiert eine relative Farbe unter Verwendung einer `rgb()`-Funktion und verwendet die Ursprungsfarbkanalwerte (verfügbar gemacht als `r`, `g` und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe dieselbe ist wie die Ursprungsfarbe:

```css
rgb(from red r g b)
```

Allerdings müssen Sie bei der Angabe der Ausgabewerte die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z.B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige gültige Werte für diese Kanäle sein. Dies verleiht relativen CSS-Farben einen hohen Grad an Flexibilität.

Zum Beispiel könnten Sie, wenn Sie wollten, absolute Werte wie die unten gezeigten angeben und `red` in `blue` transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie keine relative Farbe. Sie würden dies wahrscheinlich nie in einem echten Codebasis tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie dies mit der relativen Farbsyntax tun _können_, als Ausgangspunkt für das Verständnis darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein leicht dunkleres Rot als Eingabe und gibt eine hellgraue Farbe aus — die `r`, `g` und `b` Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

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

Im obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farb-Funktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall die gleiche, obwohl die Ursprungsfarbwerte unterschiedliche, der verwendeten Funktion angemessene Namen haben.

Im Folgenden finden Sie relative Farbsyntax-Beispiele für jede Farbfunktion. Jeder Fall ist das einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist nochmals erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch das bietet viel Flexibilität. Im Allgemeinen wird es Sie nicht interessieren und Sie wissen möglicherweise nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie haben möglicherweise nur einen [benutzerdefinierten Eigenschaftswert](#verwendung_von_benutzerdefinierten_eigenschaften), den Sie manipulieren möchten). Sie werden einfach eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einfügen und den Helligkeitswert variieren.

## Verwendung von benutzerdefinierten Eigenschaften

Wenn Sie eine relative Farbe erstellen, können Sie sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarbkanalwertdefinitionen Werte verwenden, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind. Sehen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Schlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eine wird mit einer absoluten Farbe versehen — unserem Markenpurpur `--base-color`. Die andere wird mit einer relativen Farbe versehen, die gleich unserem Markenpurpur ist, transformiert, um einen Alphakanal mit unserem Standard-Opazitätswert hinzuzufügen.

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

Sie können CSS-[mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere wird mit einem nicht modifizierten `--base-color` versehen, während die linken und rechten mit aufgehellten und abgedunkelten Varianten dieser `--base-color` versehen werden. Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt anhand einer `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Damit Kanalwertberechnungen in relativen Farben funktionieren, lösen sich alle Ursprungsfarbkanalwerte in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel berechnen wir in den obigen `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen vom `l`-Kanalwert der Ursprungsfarbe addieren oder subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu machen, würde das zu einem ungültigen Farbwert führen — `l` ist ein `<number>` und kann nicht mit einem {{cssxref("&lt;percentage&gt;")}} kombiniert werden.

- Kanalwerte, die ursprünglich als ein `<percentage>` angegeben wurden, lösen sich in ein `<number>` auf, das für die Ausgabefarb-Funktion geeignet ist.
- Kanalwerte, die ursprünglich als ein {{cssxref("&lt;hue&gt;")}}-Winkel angegeben wurden, lösen sich in eine Anzahl von Grad in einem Bereich von `0` bis `360` inklusive auf.

Überprüfen Sie die verschiedenen [Farb-Funktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Auflösungen ihrer Ursprungs-Kanalwerte.

## Überprüfen der Browser-Unterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie in einer {{cssxref("@supports")}}-Regel durchlaufen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele zur Verwendung der relativen Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren dedizierten Seiten finden: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpaletten-Generator

Dieses Beispiel erlaubt Ihnen, eine Basisfarbe und einen Farbpalettentyp zu wählen. Der Browser zeigt dann eine passende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpaletten-Auswahl ist wie folgt:

- **Komplementär**: Umfasst zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen oder anders ausgedrückt, _entgegengesetzte Farbtöne_ (sehen Sie sich den {{cssxref("&lt;hue&gt;")}}-Datentyp für weitere Informationen über Farbtöne und Farbkreise an). Die zwei Farben werden als eine Basisfarbe und die Basisfarbe mit Farbtönkanal +180 Grad definiert.
- **Triadisch**: Umfasst drei Farben, die gleiche Abstände um den Farbkreis haben. Die drei Farben werden als eine Basisfarbe, Basisfarbe mit Farbtönkanal -120 Grad und Basisfarbe mit Farbtönkanal +120 Grad definiert.
- **Tetradisch**: Umfasst vier Farben, die gleiche Abstände um den Farbkreis haben. Die vier Farben werden als eine Basisfarbe und Basisfarbe mit Farbtönkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Umfasst mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten als Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) auf das {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben sie dort platziert, damit sie leicht mit JavaScript aktualisiert werden kann. Wir haben einen anfänglichen Wert von `#ff0000` (`red`) bereitgestellt, um beim Laden des Beispiels eine Farbpalette basierend auf diesem Wert anzuzeigen. Normalerweise würden wir dies wahrscheinlich auf dem {{htmlelement("html")}}-Element setzen, aber das MDN-Live-Beispiel entfernte es beim Rendern.
- Der Basisfarb-Auswahlwerkzeug wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerelement erstellt. Wenn ein neuer Wert in diesem Steuerelement gesetzt wird, wird die benutzerdefinierte Eigenschaft `--base-color` mithilfe von JavaScript auf diesen Wert gesetzt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Das Set von [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen ermöglicht die Auswahl eines zu generierenden Farbpalettentyps. Wenn hier ein neuer Wert ausgewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container`-`<div>` zu setzen, um die gewählte Palette zu repräsentieren. In CSS werden Nachfahrenselektoren verwendet, um die untergeordneten `<div>`s zu zielen (z.B. `.comp :nth-child(1)`), sodass sie die richtigen Farben erhalten und die ungenutzten `<div>`-Knoten ausgeblendet werden.
- Der `container`-`<div>`, der die untergeordneten `<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse `comp` darauf gesetzt ist, sodass die Seite ein komplementäres Farbschema beim ersten Laden anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachfahrenselektoren verwendet werden, um die korrekte {{cssxref("background-color")}} zu jedem untergeordneten `<div>` für die gewählte Palette anzuwenden. Wir kümmern uns mehr um die Position der `<div>`s in der Quellreihenfolge als um den Elementtyp, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu zielen.

In der letzten Regel haben wir den [allgemeinen Geschwisterknotenselektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu zielen, indem wir [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) setzen, um sie von der Darstellung auszuschließen.

Die Farben selbst umfassen die `--base-color` sowie relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — sie übernehmen die Ursprungs-`--base-color` und definieren eine Ausgabefarbe mit einem entsprechend angepassten Helligkeits- oder Farbtönkanal.

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

##### Ein Hinweis zum `@supports`-Test

Im Beispiel-CSS bemerken Sie die Verwendung von {{cssxref("@supports")}}-Blöcken, um verschiedenen Browsern, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen, unterschiedliche {{cssxref("background-color")}}-Werte bereitzustellen. Diese sind erforderlich, da Safaris anfängliche Implementierung auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitstypen abhängig vom Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn man Additionen oder Subtraktionen durchführte, was für Verwirrung sorgte. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen entsprechenden {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitlosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht unbedingt der tatsächliche Wert, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachstmögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einfügen einer benutzerdefinierten Eigenschaft in den `@supports`-Test funktioniert nicht — der Test gibt immer als positiv zurück, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft hat. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er so zugewiesen wird, dass er einen ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft bildet. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zu den Radio-Buttons hinzu, sodass beim Auswählen einer die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des gewählten Radio-Buttons, sodass die zugehörigen Hintergrundfarben für die untergeordneten `<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zum Farbauswahl-Steuerelement hinzu, sodass beim Auswählen einer neuen Farbe die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt die Stärke relativer CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem eine einzige benutzerdefinierte Eigenschaft eingestellt wird.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live-UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und Text, jedoch mit einer Wendung — unterhalb der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement. Wenn dessen Wert geändert wird, wird JavaScript verwendet, um den Wert der benutzerdefinierten Eigenschaft `--hue` auf den neuen Schiebereglerwert zu setzen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe, deren Farbtönkanal auf den Wert der `--hue`-Eigenschaft gesetzt ist.
- Die anderen in der Gestaltung verwendeten Farben sind relative Farben basierend auf `--base-color`. Deshalb ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal in `<main>` als eine Einheit zentriert werden können.
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

Im CSS hat der `:root` einen Standard-`--hue`-Wert darauf gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, sowie einen radialen Verlauf, der den gesamten body füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe `red` (obwohl jede Vollfarbe verwenden könnte) und passt ihren Farbtönwert auf den in der `--hue`-Eigenschaftsvariablen gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante der `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe der `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe, die 180 Grad um den Farbkreis von `--base-color` liegt. Diese wird erstellt, indem eine Ursprungsfarbe der `--base-color` genommen und 180 zu ihrem Farbtönwert hinzugefügt wird.

Lassen Sie uns jetzt einen Blick auf den Rest des CSS werfen und aufmerksam alle Orte registrieren, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders ein.

> [!NOTE]
> Der Kürze halber werden nur die Teile des CSS gezeigt, die sich auf die Verwendung relativer Farben beziehen.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zum Slider-Steuerelement hinzu, sodass, wenn ein neuer Wert eingestellt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-Eigenschaftswert auf dem `:root` (dem `<html>`-Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS gesetzt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, welches live angepasst werden kann, während ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS-Syntax für relative Farben](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
