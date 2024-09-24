---
title: Verwenden von relativen Farben
slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Das [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS-{{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsstarke Funktion, die es ermöglicht, einfach Ergänzungen zu bestehenden Farben zu erstellen — wie hellere, dunklere, gesättigte, halbdurchsichtige oder invertierte Varianten — und somit eine effektivere Erstellung von Farbpaletten ermöglicht.

Dieser Artikel erklärt die relative Farbsyntax, zeigt die verschiedenen Optionen und stellt einige anschauliche Beispiele vor.

## Allgemeine Syntax

Ein relativer CSS-Farbwert hat die folgende allgemeine Syntaxstruktur:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* Farbraum im Falle von Farb() Funktionen enthalten */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Einfache Farbfunktionsaufnahme (oben durch _`color-function()`_ dargestellt) wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) usw. Welche Sie auswählen, hängt vom Farbraummodell ab, das Sie für die relative Farbe verwenden möchten, die Sie erstellen (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** an (oben durch _`origin-color`_ dargestellt), auf der Ihre relative Farbe basieren wird, vorangestellt mit dem Schlüsselwort `from`. Das kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein beliebiges verfügbares Farbmodell einschließlich eines Farbwertes, der in einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties) enthalten ist, verwenden, Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion beinhalten Sie den _[`colorspace`](/de/docs/Web/CSS/color_value/color#colorspace)_ der Ausgabefarbe.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions) ab, die Sie für ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwenden, müssten Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert, derselbe wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe sein.
5. Optional kann ein `alpha`-Kanalwert für die Ausgabefarbe definiert werden, vorangestellt mit einem Schrägstrich (`/`). Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird der Standardwert des `alpha`-Kanalwertes der _`origin-color`_ verwendet (nicht 100 %, was der Fall für absolute Farbwerte ist).

Der Browser konvertiert die Ursprungsfarbe in eine mit der Farbfunktionssyntax kompatible Form und zerlegt sie in einzelne Farbkomponentenkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen besitzt). Diese werden als entsprechend benannte Werte innerhalb der Farbfunktion verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` usw. — die verwendet werden können, um neue Ausgabekanawerte zu berechnen.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen: eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer durch die `rgb()`-Funktion erstellten relativen Hintergrundfarbe, basierend auf demselben `red`-Farbwert:

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

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe als mit einem roten Kanal mit dem Wert `200` und grünen und blauen Kanälen mit einem Wert, der dem der Ursprungsfarbe entspricht (sie verwendet die `g`- und `b`-Werte, die von dem Browser innerhalb der Funktion bereitgestellt werden, die beide `0` sind).

Das ergibt eine Ausgabe von `rgb(200 0 0)` — ein etwas dunkleres Rot. Wenn wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben hätten, wäre die resultierende Ausgabefarbe exakt dieselbe wie der Eingabewert. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB `color()`-Wert, der `rgb(200 0 0)` äquivalent zu `color(srgb 0.784314 0 0)` ist.

> [!NOTE]
> Wie oben erwähnt, ist das Erste, was der Browser tut, wenn er eine relative Farbe berechnet, die bereitgestellte Ursprungsfarbe (`red` im obigen Beispiel) in eine mit der verwendeten Farbfunktionssyntax kompatible Form (in diesem Fall `rgb()`) umzuwandeln. Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktionssyntax erfolgen, hängt der tatsächliche Ausgabefarbwert vom Farbraum der Farbe ab:
>
> - Ältere sRGB-Farbfunktionen können das vollständige Spektrum sichtbarer Farben nicht ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abrufen des Ausgabefarbwerts über die {{domxref("HTMLElement.style")}}-Eigenschaft oder die {{domxref("CSSStyleDeclaration.getPropertyValue()")}}-Methode die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.
> - Für neuere Farbwertfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte in derselben Syntax wie die Farbfunktionssyntax ausgedrückt. Zum Beispiel, wenn eine [`lab()`](/de/docs/Web/CSS/color_value/lab)-Farbfunktionssyntax verwendet wird, wird die Ausgabefarbe ein `lab()`-Wert sein.

Diese fünf Zeilen erzeugen alle einen äquivalenten Ausgabefarbwert:

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Flexibilität der Syntax

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungskanalfarbwerten, die innerhalb der Funktion verfügbar sind, und den Ausgabefärbewerten, die vom Entwickler festgelegt werden.

Zur Wiederholung, wenn eine relative Farbe definiert wird, sind die Kanalfarbwerte der Ursprungsfarbe innerhalb der Funktion verfügbar zum Verwenden, wenn die Ausgabefärbekanäle definiert werden. Das folgende Beispiel definiert eine relative Farbe mithilfe einer `rgb()`-Funktion und verwendet die Kanalfarbwerte der Ursprungsfarbe (bereitgestellt als `r`, `g` und `b`) für die Ausgabefärbekanäle, was bedeutet dass die Ausgabefarbe dieselbe wie die Ursprungsfarbe ist:

```css
rgb(from red r g b)
```

Wenn Sie jedoch die Ausgabewerte angeben, müssen Sie die Kanalfarbwerte der Ursprungsfarbe überhaupt nicht verwenden. Sie müssen die Ausgangskanalfarbwerte in der richtigen Reihenfolge angeben (z. B. Rot, dann Grün, dann Blau im Fall von `rgb()`), aber es können beliebige Werte sein, vorausgesetzt, es handelt sich um gültige Werte für diese Kanäle. Dies bietet relative CSS-Farben ein hohes Maß an Flexibilität.

Wenn Sie beispielsweise absolute Werte wie im Folgenden angegeben festlegen möchten, um `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* Ausgabefarbe entspricht rgb(0 0 255), reines Blau */
```

> [!NOTE]
> Wenn Sie relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine überhaupt nicht auf der Ursprungsfarbe basierende Farbe ausgeben, erstellen Sie in Wirklichkeit keine relative Farbe. Es ist unwahrscheinlich, dass Sie dies jemals in einem realen Codebasistun würden und würden wahrscheinlich einen absoluten Farbwert stattdessen verwenden. Aber wir hielten es für nützlich zu erklären, dass Sie _dies_ mit relativer Farbsyntax tun können, als Ausgangspunkt zum Erlernen darüber.

Sie können sogar die bereitgestellten Werte mischen oder wiederholen. Das folgende Beispiel nimmt ein etwas dunkleres Rot als Eingabe und gibt eine helle Graufarbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe eingestellt:

```css
rgb(from rgb(200 0 0) r r r)
/* Ausgabefarbe entspricht rgb(200 200 200), helles Grau */
```

Das folgende verwendet die Kanalfarbwerte der Ursprungsfarbe für die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe, jedoch in umgekehrter Reihenfolge:

```css
rgb(from rgb(200 170 0) b g r)
/* Ausgabefarbe entspricht rgb(0 170 200) */
```

## Farbwertfunktionen, die relative Farben unterstützen

In dem obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch mit jeder modernen CSS-Farbfunktionssyntax definiert werden — [`color()`](/de/docs/Web/CSS/color_value/color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall gleich, obwohl die Ursprungsfarbwerte unterschiedliche Namen haben, die für die verwendete Funkton geeignet sind.

Nachfolgend finden Sie Beispiele für relative Farbsyntax für jede Farbfunktionssyntax. Jede Fall ist die einfachste mögliche, wobei die Ausgabefarbenkanalwerte genau den Kanalfarbwerten der Ursprungsfarbe entsprechen:

```css
/* color() mit und ohne Alphakanal */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

color(from red xyz-d50 x y z)
color(from red xyz-d50 x y z / alpha)

/* hsl() mit und ohne Alphakanal */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() mit und ohne Alphakanal */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() mit und ohne Alphakanal */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() mit und ohne Alphakanal */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() mit und ohne Alphakanal */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() mit und ohne Alphakanal */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() mit und ohne Alphakanal */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

Es ist nochmals erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem Farbsystem übereinstimmen muss, das zur Erstellung der Ausgabefarbe verwendet wird. Auch dies bietet viel Flexibilität. In der Regel sind Sie nicht interessiert und wissen möglicherweise nicht einmal, in welchem System die Ursprungsfarbe definiert ist (Sie haben vielleicht einfach nur einen [Benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zum Manipulieren). Sie werden nur eine Farbe eingeben wollen und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion einsetzen und den Helligkeitswert variieren.

## Verwendung Benutzerdefinierter Eigenschaften

Wenn Sie eine relative Farbe erstellen, können Sie in [CSS Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) definierte Werte sowohl für die Ursprungsfarbe als auch innerhalb der Ausgabefarbkanalwertdefinitionen verwenden. Sehen wir uns ein Beispiel an.

Im nachstehenden CSS definieren wir zwei Benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farbschlüsselwort, aber relative Farben können jede Färbereinsatzsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den standardmäßigen Markenopazitätswert, den wir auf halbdurchlässige Kästen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Eines erhält eine absolute Farbe — unser `--base-color` Markenlila. Das andere erhält eine relative Farbe, die gleich unserem Markenlila ist, das so transformiert ist, einen Alphakanal hinzuzufügen, der gleich unserem Standardopazitätswert ist.

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

Sie können CSS [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Das unterstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält eine unveränderte `--base-color`, während die linken und rechten jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden mithilfe relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion eingegeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 20 % zum Helligkeitskanal addiert, und die abgedunkelte Farbe hat 20 % abgezogen.

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

## Kanalfarbwerte lösen zu `<number>`-Werten auf

Um Kanalfarbwertberechnungen zu ermöglichen, lösen sich alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auf. Beispielsweise berechnen wir in den oben stehenden `lch()`-Beispielen neue Helligkeitswerte, indem wir Zahlen von dem Ursprungsfarbwert `l`-Kanalwert addieren oder subtrahieren. Wenn wir versuchen würden `calc(l + 20%)` zu tun, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann kein {{cssxref("&lt;percentage&gt;")}} addiert bekommen.

- Kanalfarbwerte, die ursprünglich als `<percentage>` festgelegt sind, lösen sich zu einem `<number>` auf, das dem Ausgabefarbfunktionssyntax entspricht.
- Kanalfarbwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}} Winkelspezifikation festgelegt sind, lösen sich zu einem Grad (in einem Bereich von `0` bis `360`, inklusive).

Überprüfen Sie die verschiedenen [Farbwertfunktionsseiten](/de/docs/Web/CSS/CSS_colors#functions) für die Spezifikationen, in was ihre Ursprungskanalwerte aufgelöst werden.

## Browserunterstützung überprüfen

Sie können überprüfen, ob ein Browser relative Farbsyntax unterstützt, indem Sie diese durch eine {{cssxref("@supports")}} at-regel ausführen.

Beispielsweise:

```css
@supports (color: hsl(from white h s l)) {
  /* sicher relative Farbsyntex zu verwenden */
}
```

## Beispiele

> [!NOTE]
> Sie können zusätzliche Beispiele finden, die die Verwendung relativer Farbsyntax in den verschiedenen funktionalen Notationstypen auf ihren dedizierten Seiten zeigen: [`color()`](/de/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalletten-Generator

Dieses Beispiel ermöglicht es Ihnen, eine Grundfarbe und einen Farbpalettentyp auszuwählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der ausgewählten Grundfarbe an. Die Farbpallettenauswahlen sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders gesagt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für mehr Informationen über Farbtöne und Farbkreise). Die beiden Farben sind als Grundfarbe und Grundfarbe mit dem Farbkanal +180 Grad definiert.
- **Triadisch**: Beinhaltet drei Farben, die gleiche Abstände um den Farbkreis haben. Die drei Farben sind als Grundfarbe, Grundfarbe mit dem Farbtonkanal -120 Grad und als Grundfarbe mit dem Farbtonkanal +120 Grad definiert.
- **Tetradisch**: Beinhaltet vier Farben, die gleiche Abstände um den Farbkreis haben. Die vier Farben sind als Grundfarbe und als Grundfarbe mit dem Farbtonkanal +90, +180 und +270 Grad definiert.
- **Monochrom**: Beinhaltet mehrere Farben mit dem gleichen Farbton, jedoch unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Grundfarbe und Grundfarbe mit dem Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Das gesamte HTML ist unten zur Referenz enthalten. Die interessantesten Teile sind:

- Die `--base-color` Benutzerdefinierte Eigenschaft wird als Inline [`style`](/de/docs/Web/HTML/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID von `container` gespeichert. Wir haben es dort platziert, damit es einfach ist, den Wert mit JavaScript zu aktualisieren. Wir haben einen Startwert von `#ff0000` (`red`) bereitgestellt, um beim Laden des Beispiels eine darauf basierende Farbpallette anzuzeigen. Beachten Sie, dass wir dies normalerweise wahrscheinlich auf dem {{htmlelement("html")}}-Element festlegen würden, aber das MDN Live-Sample hat es beim Rendern entfernt.
- Der Grundfarbwähler wird mit einem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Steuerungselement erstellt. Wenn ein neuer Wert in diesem Steuerelement festgelegt wird, wird die `--base-color`-Benutzerdefinierte Eigenschaft auf diesen Wert mit JavaScript festgelegt, was wiederum eine neue Farbpallette generiert. Alle angezeigten Farben sind relative Farben, basierend auf `--base-color`.
- Die Menge der [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelemente ermöglicht die Auswahl eines Farbpaletten-Typs zur Generierung. Wenn hier ein neuer Wert ausgewählt wird, wird mit JavaScript eine neue Klasse auf dem `container`-`<div>` festgelegt, die den gewählten Palettentyp repräsentiert. Im CSS werden Nachkommenselektoren verwendet, um die untergeordneten `<div>` zu targetieren (z. B. `.comp :nth-child(1)`), damit sie die richtigen Farben erhalten und die nicht genutzten `<div>`-Knoten verstecken.
- Der `container` `<div>` mit den untergeordneten `<div>`, die die Farben der generierten Palette darstellen. Beachten Sie, dass beim ersten Laden eine anfängliche Klasse von `comp` darauf gesetzt wurde, sodass die Seite ein komplementäres Farbschema zeigt.

```html
<div>
  <h1>Farbpaletten-Generator</h1>
  <form>
    <div id="color-picker">
      <label for="color">Wählen Sie eine Grundfarbe:</label>
      <input type="color" id="color" name="color" value="#ff0000" />
    </div>
    <div>
      <fieldset>
        <legend>Wählen Sie einen Farbpaletten-Typ:</legend>

        <div>
          <input
            type="radio"
            id="comp"
            name="palette-type"
            value="comp"
            checked />
          <label for="comp">Komplementär</label>
        </div>

        <div>
          <input
            type="radio"
            id="triadic"
            name="palette-type"
            value="triadic" />
          <label for="triadic">Triadisch</label>
        </div>

        <div>
          <input
            type="radio"
            id="tetradic"
            name="palette-type"
            value="tetradic" />
          <label for="tetradic">Tetradisch</label>
        </div>

        <div>
          <input
            type="radio"
            id="monochrome"
            name="palette-type"
            value="monochrome" />
          <label for="monochrome">Monochrom</label>
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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall Nachkommenselektoren verwendet werden, um die korrekte {{cssxref("background-color")}} auf jedes untergeordnete `<div>` für die gewählte Palette anzuwenden. Uns sind die Position der `<div>` im Quelltext wichtiger als der Typ des Elements, deshalb haben wir {{cssxref(":nth-child")}} verwendet, um sie anzusprechen.

In der letzten Regel haben wir den [allgemeinen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Subsequent-sibling_combinator) verwendet, um die nicht benutzten `<div>`-Elemente in jedem Palettentyp anzuvisieren, und [`display: none`](/de/docs/Web/CSS/Subsequent-sibling_combinator) gesetzt, um sie vom Rendern auszuschließen.

Die Farben selbst umfassen die `--base-color` sowie relative Farben, die aus dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/color_value/lch)-Funktion — Übermitteln der Ursprung `--base-color` und Definieren einer Ausgabefarbe mit einem angepassten Helligkeits- oder Farbtonkanal, wie es passend ist.

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

/* Einfaches Formular-Styling */

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

/* Paletten-Container-Styling */

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
/* Komplementärfarben */
/* Basisfarbe und Basisfarbe mit Farbtonkanal +180 Grad */

.comp :nth-child(1) {
  background-color: var(--base-color);
}

.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* @supports verwenden, um Unterstützung für alte Syntax hinzuzufügen, die
   Einheitenspezifikationen für Grad in Farbtonberechnungen erfordert.
   Dies ist für Safari 16.4+ erforderlich. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Triadische Farben */
/* Basisfarbe, Basisfarbe mit Farbtonkanal -120 Grad und Basisfarbe */
/* mit Farbtonkanal +120 Grad */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* @supports verwenden, um Unterstützung für alte Syntax hinzuzufügen, die
   Einheitenspezifikationen für Grad in Farbtonberechnungen erfordert.
   Dies ist für Safari 16.4+ erforderlich. */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 120deg));
  }
}

/* Tetradische Farben */
/* Basisfarbe und Basisfarbe mit Farbtonkanal +90, +180 und +270 Grad */

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

/* @supports verwenden, um Unterstützung für alte Syntax hinzuzufügen, die
   Einheitenspezifikationen für Grad in Farbtonberechnungen erfordert.
   Dies ist für Safari 16.4+ erforderlich. */
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

/* Monochrome Farben */
/* Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20 */

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

/* Nicht genutzte Farbfelder für jeden Palettentyp verstecken */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}
```

##### Ein Aspekt zum Testen von `@supports`

Im Beispiel-CSS fallen Ihnen {{cssxref("@supports")}}-Blöcke auf, die verwendet werden, um in älteren Entwurfsspezifikationen der relativen Farbsyntax eine different {{cssxref("background-color")}}--Werte zu bieten. Dies ist erforderlich, weil Safaris erste Implementierung auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte auf {{cssxref("&lt;number&gt;")}}s oder andere Einheiten je nach Kontext aufgelöst wurden. Dies bedeutete, dass Werte manchmal Einheiten erforderten, wenn Additionen und Subtraktionen ausgeführt wurden, was Verwirrung schuf. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer in einen äquivalenten {{cssxref("&lt;number&gt;")}}-Wert aus, was bedeutet, dass Berechnungen immer mit einheitenlosen Werten ausgeführt werden.

Beachten Sie, dass der Unterstützungs-Test in jedem Fall mit einer einfachen Deklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` beispielsweise — anstelle des tatsächlichen Werts, den wir für andere Browser variieren müssen. Wenn Sie komplexe Werte wie diese testen, sollten Sie die einfachste mögliche Deklaration verwenden, die dennoch den syntaktischen Unterschied enthält, den Sie testen möchten.

Eine benutzerdefinierte Eigenschaft in den `@supports`-Test einzuschließen, funktioniert nicht — der Test ergibt stets ein positives Ergebnis, egal welcher Wert der benutzerdefinierten Eigenschaft gegeben wird. Dies ist, weil ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er zu einem ungültigen Wert (oder Teil eines ungültigen Werts) einer regulären CSS-Eigenschaft zugewiesen wird. Um dies zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Schlüsselwort `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radio-Buttons hinzu, sodass, wenn einer ausgewählt wird, die `setContainer()`-Funktion ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radio-Buttons, damit die korrekten Hintergrundfarben auf die untergeordneten `<div>` für den gewählten Paletten-Typ angewendet werden können.
- Fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zu den Farbwahlschaltungselement so hinzu, dass, wenn eine neue Farbe ausgewählt wird, die `setBaseColor()`-Funktion ausgeführt wird. Diese Funktion setzt den Wert der `--base-color`-Benutzerdefinierte Eigenschaft auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt die Leistungsfähigkeit von relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und generieren Paletten, die durch die Anpassung eines einzelnen benutzerdefinierten Eigenschaftswertes live aktualisiert werden.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte, die eine Überschrift und einen Text enthält, jedoch mit einem Twist — unter der Karte befindet sich ein Schieberegler ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Steuer Kontrolle. Wenn sein Wert geändert wird, wird ein neues `--hue`-Benutzerdefiniertwert auf den neuen Schiebereglerwert mit JavaScript festgelegt.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der `--base-color`-Wert ist eine relative Farbe mit ihrem Farbkanal, der auf den in der `--hue`-Benutzerdefinierteigenschaft festgelegten Wert eingestellt ist.
- Die anderen Farben, die im Design verwendet werden, sind relative Farben basierend auf `--base-color`. Folglich ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

- Das {{htmlelement("main")}}-Element fungiert als äußerer Wrapper, um den Rest des Inhalts zu enthalten und ermöglicht es der Karte und dem Formular, sich vertikal und horizontal innerhalb von `<main>` als eine Einheit zu zentrieren.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)- und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element mit der ([`<input type="range">`](/de/docs/Web/HTML/Element/input/range)) Steuer Kontrolle und seiner {{htmlelement("label")}}.

```html
<main>
  <section>
    <h1>Eine Liebe zu Farben</h1>
    <p>
      Farben, die lebendige Essenz unseres Umfelds, sind wirklich beeindruckend.
      Von der feurigen Wärme der Rottöne bis zur beruhigenden Kühle der Blautöne
      bringen sie unvergleichlichen Reichtum in unsere Welt. Farben wecken
      Emotionen, entzünden Kreativität und formen Wahrnehmungen, indem sie als
      universelle Sprache des Ausdrucks fungieren. In ihrer Brillanz schaffen
      Farben ein visuell bezauberndes Gewebe, das Bewunderung einlädt und Freude
      hervorruft.
    </p>
  </section>
  <form>
    <label for="hue-adjust">Justieren Sie den Farbton:</label>
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

Im CSS hat der `:root` einen Standardwert für `--hue` festgelegt, relative [`lch()`](/de/docs/Web/CSS/color_value/lch)-Farben zur Definition des Farbschemas, sowie einen radiale Verlauf, der das gesamte body ausfüllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede volle Farbe es täte) und passt ihren Farbtonwert auf den in benutzerdefinierte `--hue`-Eigenschaft festgelegten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, bestimmt als eine Hintergrundfarbe. Dies wird erstellt, indem eine Ursprung Farbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wird erstellt, indem eine Ursprung Farbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Nun schauen Sie sich den Rest des CSS an und beachten Sie all die Stellen, an denen diese Farben verwendet werden. Dies schließt [Hintergründe](/de/docs/Web/CSS/background), [Ränder](/de/docs/Web/CSS/border), [`text-shadow`](/de/docs/Web/CSS/text-shadow) und sogar das [`accent-color`](/de/docs/Web/CSS/accent-color) des Sliders ein.

> [!NOTE]
> Der Einfachheit halber werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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
  /* Standardwert für Farbat */
  --hue: 240;

  /* Definitionen für relative Farben */
  --base-color: lch(from red l c var(--hue));
  --bg-color: lch(from var(--base-color) calc(l + 40) c h);
  --complementary-color: lch(from var(--base-color) l c calc(h + 180));

  background: radial-gradient(ellipse at center, white 20%, var(--base-color));
}

/* @supports verwenden, um Unterstützung für --komplementäre Farbe 
   mit alter Syntax hinzuzufügen, die 
   Einheitenspezifikationen für Grad in Farbtonberechnungen erfordert.
   Dies ist erforderlich für in Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  body {
    --komplementärfarbe: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Kasten Styling */

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

/* Schieberegler Styling */

form {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
}

input {
  accent-color: var(--complementary-color);
}
```

#### JavaScript

Das JavaScript fügt ein [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Schiebereglersteuerung hinzu, sodass, wenn ein neuer Wert festgelegt wird, die `setHue()`-Funktion ausgeführt wird. Diese Funktion setzt einen neuen Inline-`--hue`-Benutzerdefinierten Eigenschaftswert auf dem `:root` (dem `<html>`-Element), das den ursprünglichen Standardwert überschreibt, den wir in unserem CSS gesetzt haben.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, welches sich live anpassen kann, wenn ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [sRGB](https://de.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://de.wikipedia.org/wiki/CIELAB_Farbraum) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
