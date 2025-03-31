---
title: Verwenden von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS {{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine mächtige Funktion, die die einfache Erstellung von Komplementärfarben zu bestehenden Farben ermöglicht – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten – und somit eine effektivere Erstellung von Farbpaletten ermöglicht.

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

Relative Farben werden mit denselben [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit unterschiedlichen Parametern:

1. Integrieren Sie eine grundlegende Farbfunktion (repräsentiert durch _`color-function()`_ oben) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie wählen, hängt von dem Farbmodell ab, das Sie für die Erstellung der relativen Farbe (der **Ergebnisfarbe**) verwenden möchten.
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf die sich Ihre relative Farbe stützen wird, gefolgt vom `from`-Schlüsselwort. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert in jedem verfügbaren Farbmodell sein, einschließlich eines Farbwerts in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), Systemfarben, `currentColor` oder sogar einer anderen relativen Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color) Funktion, fügen Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ergebnisfarbe hinzu.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ergebnisfarbe wird nach der Ursprungsfarbe definiert – repräsentiert durch die Platzhalter _`channel1`_, _`channel2`_, und _`channel3`_ oben. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie beispielsweise [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `alpha`-Kanalwert für die Ergebnisfarbe, gefolgt von einem Schrägstrich (`/`), definiert werden. Wird der `alpha`-Kanalwert nicht explizit angegeben, wird er auf den `alpha`-Kanalwert der _`origin-color`_ (nicht 100 %, wie bei absoluten Farbwerten) gesetzt.

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktion kompatible Syntax und zerlegt sie in die Komponentenfarbkanäle (plus den `alpha`-Kanal, falls die Ursprungsfarbe einen hat). Diese stehen innerhalb der Farbfunktion als entsprechend benannte Werte zur Verfügung — `r`, `g`, `b`, und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b`, und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b`, und `alpha` im Fall von `hwb()`, usw. — die zur Berechnung neuer Ausgabekanäle verwendet werden können.

Schauen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe – `red` – und eines mit einer relativen Hintergrundfarbe, erstellt mit der Funktion `rgb()` und basierend auf demselben `red`-Farbwert:

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, es in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe als Rotkanal mit dem Wert `200` und Grün- und Blaukanälen mit einem Wert gleich der Ursprungsfarbe definiert (sie verwendet die `g`- und `b`-Werte, die innerhalb der Funktion vom Browser bereitgestellt werden, die beide gleich `0` sind).

Das Ergebnis ist `rgb(200 0 0)` – ein leicht dunkleres Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben, wäre die resultierende Ausgabefarbe genau gleich dem Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert äquivalent zu `rgb(200 0 0)` – `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, konvertiert der Browser beim Berechnen einer relativen Farbe zunächst die angegebene Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ergebnisfarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabe-Farbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können nicht das gesamte Spektrum der sichtbaren Farben ausdrücken. Die Ausgabe von Farben ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) wird zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabe-Farbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabe-Farbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.
> - Für neuere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`), werden relative Farbeausgabewerte in derselben Syntax wie die verwendete Farbfunktion ausgedrückt. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab) Farbfunktion verwendet wird, wird die Ausgabe-Farbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle eine äquivalente Ausgabefarbe:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den innerhalb der Funktion bereitgestellten zerlegten Ursprungskanalwerten und den vom Entwickler gesetzten Ausgabefarbkanalwerten zu beachten.

Um es zu wiederholen: Wenn eine relative Farbe definiert wird, stehen die Kanalwerte der Ursprungsfarbe innerhalb der Funktion zur Verfügung, die zur Definition der Ausgabefarbkanalwerte verwendet werden können. Das folgende Beispiel definiert eine relative Farbe mithilfe einer `rgb()`-Funktion und verwendet die Ursprungskanalwerte (bereitgestellt als `r`, `g`, und `b`) für die Ausgabekanalwerte, was bedeutet, dass die Ausgabefarbe der Ursprungsfarbe entspricht:

```css
rgb(from red r g b)
```

Beim Festlegen der Ausgabe-Werte müssen Sie jedoch die Ursprungskanalwerte gar nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. rot, dann grün, dann blau im Fall von `rgb()`), aber es können beliebige Werte sein, vorausgesetzt, sie sind gültige Werte für diese Kanäle. Dies verleiht relativen CSS-Farben einen hohen Grad an Flexibilität.

Zum Beispiel können Sie, wenn Sie möchten, absolute Werte wie die unten gezeigten angeben, um `red` in `blue` zu verwandeln:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber die gleiche Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie keine wirklich relative Farbe. Dies würden Sie wahrscheinlich nie in einem realen Codebasis tun und stattdessen einfach einen absoluten Farbwert verwenden. Aber es ist nützlich, zu erklären, dass Sie dies mit der relativen Farbsyntax _können_, als Ausgangspunkt zum Lernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende nimmt ein etwas dunkleres Rot als Eingabewert und gibt eine hellgraue Farbe aus – die `r`, `g`, und `b`-Kanäle der Ausgabefarbe werden alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

Das folgende Beispiel verwendet die Ursprungskanalwerte der Farbe für die `r`, `g`, und `b`-Kanalwerte der Ausgabefarbe, aber in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Farbfunktionen, die relative Farben unterstützen

In dem obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert sind. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktion definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall dieselbe, obwohl die Namen der Kanalwerte je nach verwendeter Funktion unterschiedlich sind.

Nachfolgend finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. In jedem Fall ist dies das einfachste mögliche Beispiel, bei dem die Ausgabefarbkanalwerte genau mit den Ursprungsfarbkanalwerten übereinstimmen:

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

Es sei nochmals erwähnt, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. Im Allgemeinen wird es Sie nicht interessieren und Sie wissen möglicherweise nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie haben möglicherweise nur einen [benutzerdefinierten Eigenschaftswert](#verwenden_von_benutzerdefinierten_eigenschaften) zu manipulieren). Sie möchten lediglich eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einsetzen und den Helligkeitswert variieren.

## Verwenden von benutzerdefinierten Eigenschaften

Beim Erstellen einer relativen Farbe können Sie Werte, die in [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) definiert sind, sowohl für die Ursprungsfarbe als auch innerhalb der Definitionen der Ausgabefarbkanalwerte verwenden. Schauen wir uns ein Beispiel an.

Im folgenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den standardmäßigen Marken-Deckkraftwert, den wir auf halbtransparente Boxen anwenden wollen — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser Markenpurple `--base-color`. Das andere erhält eine relative Farbe, die gleich unserem Markenpurple ist, das so transformiert wurde, dass ein Alpha-Kanal mit unserem Standard-Deckkraftwert hinzugefügt wird.

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Verwenden von mathematischen Funktionen

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Kanäle der Ausgabefarbe zu berechnen. Schauen wir uns ein Beispiel an.

Der untenstehende CSS-Code wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält ein unverändertes `--base-color`, während die linke und rechte Box aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden über relative Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Kanalwerte lösen sich in `<number>`-Werte auf

Um Kanalkalkulationen in relativen Farben zu ermöglichen, lösen sich alle Ursprungskanäle in geeignete {{cssxref("&lt;number&gt;")}}-Werte auf. Beispielsweise berechnen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zur `l`-Kanalwert der Ursprungsfarbe hinzufügen oder von ihm subtrahieren. Wenn wir versuchen würden, `calc(l + 20%)` zu tun, würde das in einer ungültigen Farbe resultieren – `l` ist ein `<number>` und kann keinen {{cssxref("&lt;percentage&gt;")}} hinzugefügt haben.

- Kanalwerte, die ursprünglich als `<percentage>` angegeben wurden, lösen sich in einen `<number>` um, der für die Farbfunktion der Ausgabe geeignet ist.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel angegeben wurden, lösen sich in eine Anzahl von Grad im Bereich `0` bis `360` auf, einschließlich.

Sehen Sie sich die verschiedenen [Farbfunktion-Seiten](/de/docs/Web/CSS/CSS_colors#functions) für die spezifischen Auflösungen der Ursprungskanalwerte an.

## Überprüfung der Browserunterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}}-Regel laufen lassen.

Beispielsweise:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie finden zusätzliche Beispiele, die die Verwendung von relativer Farbsyntax in den verschiedenen Funktionsnotationsarten auf ihren eigenen Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalettengenerator

Dieses Beispiel ermöglicht es Ihnen, eine Basisfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbpalettenoptionen sind wie folgt:

- **Komplementär**: Enthält zwei Farben, die auf gegenüberliegenden Seiten eines Farbkreises liegen, oder anders gesagt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}} Datentyp für mehr Informationen zu Farbtönen und Farbkreisen). Die beiden Farben werden als Basisfarbe und Basisfarbe mit einem Farbtonkanal von +180 Grad definiert.
- **Triadisch**: Enthält drei Farben, die gleich weit um den Farbkreis verteilt sind. Die drei Farben werden als Basisfarbe, Basisfarbe mit einem Farbtonkanal von -120 Grad und Basisfarbe mit einem Farbtonkanal von +120 Grad definiert.
- **Tetradisch**: Enthält vier Farben, die gleich weit um den Farbkreis verteilt sind. Die vier Farben werden als Basisfarbe, Basisfarbe mit einem Farbtonkanal von +90, +180 und +270 Grad definiert.
- **Monochrom**: Enthält mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert – Basisfarbe, und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das vollständige HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` ist als inline-`style` auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit es leicht ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine auf diesem Wert basierende Farbpalette anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir es normalerweise auf dem {{htmlelement("html")}}-Element setzen würden, aber das MDN-Live-Sample entfernte es beim Rendern.
- Der Basisfarbwähler wird mit einer [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerung erstellt. Wenn ein neuer Wert in dieser Steuerung eingestellt wird, wird die benutzerdefinierte Eigenschaft `--base-color` mit diesem Wert mithilfe von JavaScript festgelegt, was wiederum eine neue Farbpalette generiert. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Die Set von [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerungen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn ein neuer Wert hier gewählt wird, wird mit JavaScript eine neue Klasse auf dem `container`-`<div>` gesetzt, um die gewählte Palette darzustellen. Im CSS werden Nachkomme-Selektoren verwendet, um die Kind-`<div>`s zu zielen (z. B. `.comp :nth-child(1)`), damit sie die richtigen Farben erhalten und die nicht verwendeten `<div>`-Knoten ausgeblendet werden.
- Das `container`-`<div>`, das die Kind-`<div>`s enthält, die die Farben der generierten Palette anzeigen. Beachten Sie, dass eine Anfangsklasse von `comp` darauf gesetzt wurde, damit die Seite ein komplementäres Farbschema anzeigt, wenn sie erstmals geladen wird.

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

Unten zeigen wir nur das CSS, das die Palettenfarben setzt. Beachten Sie, wie in jedem Fall Nachkomme-Selektoren verwendet werden, um den richtigen {{cssxref("background-color")}} auf jedes Kind-`<div>` für die gewählte Palette anzuwenden. Bei den Farben interessieren wir uns mehr für die Position der `<div>`s in der Quellordnung als für den Typ des Elements, daher haben wir {{cssxref(":nth-child")}} verwendet, um sie zu zielen.

Im letzten Regel haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu zielen, wobei wir [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt haben, um zu verhindern, dass sie gerendert werden.

Die Farben selbst umfassen `--base-color`, plus relative Farben, die von diesem `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — indem sie den Ursprungs-`--base-color` übergeben und eine Ausgabefarbe mit einem entsprechend angepassten Helligkeits- oder Farbtonkanal definieren.

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

##### Ein Exkurs über `@supports`-Tests

In dem Beispiel-CSS werden Sie {{cssxref("@supports")}}-Blöcke bemerken, die verwendet werden, um verschiedenen {{cssxref("background-color")}}-Werte an Browser bereitzustellen, die eine frühere Entwurfsspezifikation der relativen Farbsyntax unterstützen. Diese sind erforderlich, weil Safari's anfängliche Implementierung auf einer älteren Version der Spezifikation basierte, in der Ursprungskanalwerte sich in {{cssxref("&lt;number&gt;")}}s oder andere Einheitstypen kontextabhängig auflösten. Das bedeutete, dass Werte manchmal Einheiten erfordern, wenn Addition oder Subtraktion durchgeführt wurde, was zu Verwirrung führte. In neueren Implementierungen lösen sich Ursprungskanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert auf, was bedeutet, dass Berechnungen immer mit einheitslosen Werten durchgeführt werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit einer beliebigen Farbdeklaration gemacht wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht notwendigerweise der tatsächliche Wert, den wir für andere Browser unterscheiden müssen. Beim Testen komplexer Werte wie diese sollten Sie die einfachstmögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einschließen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test kommt immer positiv zurück, unabhängig davon, welchen Wert die benutzerdefinierte Eigenschaft erhalten hat. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur ungültig wird, wenn er einem ungültigen Wert (oder Teil eines ungültigen Wertes) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir `var(--base-color)` in jedem Test durch das `red`-Schlüsselwort ersetzt.

#### JavaScript

Im JavaScript:

- Wir fügen den [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener zu den Radiobuttons hinzu, sodass wenn einer ausgewählt wird, die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert die `class`-Eigenschaft des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radiobuttons, damit die richtigen Hintergrundfarben auf die Kind-`<div>`s für den gewählten Palettentyp angewendet werden.
- Wir fügen den [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener zur Farbwähler-Steuerung hinzu, sodass wenn eine neue Farbe ausgewählt wird, die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Die Ausgabe ist wie folgt. Dies beginnt, die Möglichkeiten von relativen CSS-Farben zu zeigen – wir definieren mehrere Farben und generieren Paletten, die live aktualisiert werden, indem wir eine einzige benutzerdefinierte Eigenschaft anpassen.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einem zusätzlichen Element – unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerelement. Wenn dessen Wert geändert wird, wird JavaScript verwendet, um einen `--hue`-Wert in einer benutzerdefinierten Eigenschaft auf den neuen Schiebereglerwert zu setzen.

Dies passt wiederum das Farbschema der gesamten Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbtonkanal auf den Wert der `--hue`-benutzerdefinierten Eigenschaft eingestellt.
- Die anderen in der Gestaltung verwendeten Farben basieren ebenfalls auf relativen Farben, die auf `--base-color` basieren. Infolgedessen ändern sie sich, wenn sich `--base-color` ändert.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten, sodass die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zentriert werden können.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range))-Steuerung und ihr {{htmlelement("label")}}.

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

Im CSS hat `:root` einen Standardwert `--hue` gesetzt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben, um das Farbschema zu definieren, plus einen radialen Verlauf, der den ganzen Körper ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe geeignet wäre) und passt ihren Farbtonwert auf den in der `--hue`-benutzerdefinierten Eigenschaft gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen wird und 40 zum Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe, 180 Grad um den Farbkreis von `--base-color` entfernt. Diese wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen wird und 180 zum Farbtonwert hinzugefügt wird.

Werfen Sie nun einen Blick auf den Rest des CSS und achten Sie auf all die Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar die [`accent-color`](/de/docs/Web/CSS/accent-color) des Schiebereglers ein.

> [!NOTE]
> Zur Kürze sind nur die Teile des CSS gezeigt, die für die Verwendung von relativen Farben relevant sind.

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

Das JavaScript fügt dem Schieberegler eine [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener hinzu, sodass wenn ein neuer Wert gesetzt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inlinewert für die benutzerdefinierte Eigenschaft `--hue` auf das `:root` (das `<html>`-Element), der den ursprünglichen Standardwert überschreibt, den wir in unserem CSS festgelegt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Die Ausgabe wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, da ein einzelner Wert geändert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
