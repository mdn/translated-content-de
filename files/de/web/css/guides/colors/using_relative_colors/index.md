---
title: Verwendung relativer Farben
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Das [CSS Farben Modul](/de/docs/Web/CSS/Guides/Colors) definiert die **relative Farbsyntax**, die es ermöglicht, einen CSS {{cssxref("&lt;color&gt;")}}-Wert relativ zu einer anderen Farbe zu definieren. Dies ist eine leistungsfähige Funktion, die die programmgesteuerte Erstellung von Ergänzungen zu vorhandenen Farben ermöglicht — wie z. B. hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten — und somit eine effektivere Erstellung von Farbpaletten ermöglicht.

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

Relative Farben werden mit denselben [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) wie absolute Farben erstellt, jedoch mit anderen Parametern:

1. Fügen Sie eine Grundfarbfunktion (oben dargestellt durch _`color-function()`_) wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) usw. hinzu. Welche Sie wählen, hängt vom Farbmodell ab, das Sie für die zu erstellende relative Farbe verwenden möchten (die **Ausgabefarbe**).
2. Geben Sie die **Ursprungsfarbe** (oben dargestellt durch _`origin-color`_) an, auf der Ihre relative Farbe basieren soll, und zwar vorangestellt durch das Schlüsselwort `from`. Dies kann jeder gültige {{cssxref("&lt;color&gt;")}}-Wert sein, der ein verfügbares Farbmodell verwendet, einschließlich eines Farbwertes in einer [CSS benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), Systemfarben, `currentColor` oder sogar eine andere relative Farbe.
3. Im Fall der [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion wird der _[`Farbraum`](/de/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_ der Ausgabefarbe hinzugefügt.
4. Geben Sie einen Ausgabewert für jeden einzelnen Kanal an. Die Ausgabefarbe wird nach der Ursprungsfarbe definiert — dargestellt oben durch die Platzhalter _`channel1`_, _`channel2`_ und _`channel3`_. Die hier definierten Kanäle hängen von der [Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions) ab, die Sie für Ihre relative Farbe verwenden. Wenn Sie zum Beispiel [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwenden, müssen Sie die Werte für Farbton, Sättigung und Helligkeit definieren. Jeder Kanalwert kann ein neuer Wert sein, der gleiche wie der ursprüngliche Wert oder ein Wert relativ zum Kanalwert der Ursprungsfarbe.
5. Optional kann ein `alpha`-Kanalwert vom Typ {{cssxref("&lt;alpha-value&gt;")}} für die Ausgabefarbe definiert werden, der durch einen Schrägstrich (`/`) vorangestellt ist. Wenn der `alpha`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den Alpha-Kanalwert der Ursprungsfarbe gesetzt (nicht 100 %, was bei absoluten Farbwerten der Fall ist).

Der Browser konvertiert die Ursprungsfarbe in eine Syntax, die mit der Farbfunktion kompatibel ist, und zerlegt sie dann in Komponentenfarbkanäle (plus den `alpha`-Kanal, wenn die Ursprungsfarbe einen hat). Diese werden als entsprechend benannte Werte innerhalb der Farbfunktion verfügbar gemacht — `r`, `g`, `b` und `alpha` im Fall der `rgb()`-Funktion, `l`, `a`, `b` und `alpha` im Fall der `lab()`-Funktion, `h`, `w`, `b` und `alpha` im Fall von `hwb()` etc. — die verwendet werden können, um neue Ausgabekanalwerte zu berechnen.

Sehen wir uns die relative Farbsyntax in Aktion an. Der untenstehende CSS-Code wird verwendet, um zwei {{htmlelement("div")}}-Elemente zu stylen, eines mit einer absoluten Hintergrundfarbe — `red` — und eines mit einer relativen Hintergrundfarbe, erstellt mit der `rgb()`-Funktion, basierend auf dem gleichen `red`-Farbwert:

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

Die relative Farbe verwendet die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion, die `red` als Ursprungsfarbe nimmt, sie in eine äquivalente `rgb()`-Farbe (`rgb(255 0 0)`) konvertiert und dann die neue Farbe definiert, indem ein roter Kanal mit dem Wert `200` und grüne, blaue und alpha-Kanäle mit einem Wert, der dem der Ursprungsfarbe entspricht, verwendet werden (sie verwendet die `g`- und `b`-Werte, die durch den Browser in der Funktion verfügbar gemacht werden, die beide `0` sind, und `alpha` ist `100%`).

Das Ergebnis ist eine Ausgabe von `rgb(200 0 0)` — ein etwas dunkleres Rot. Hätten wir einen roten Kanalwert von `255` (oder einfach den `r`-Wert) angegeben, würde die resultierende Ausgabefarbe genau den Ursprungswert widerspiegeln. Die endgültige Ausgabefarbe des Browsers (der berechnete Wert) ist ein sRGB-`color()`-Wert, der `rgb(200 0 0)` entspricht — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Wie oben erwähnt, ist das erste, was der Browser beim Berechnen einer relativen Farbe tut, die konvertierte Ursprungsfarbe (`red` im obigen Beispiel) in einen mit der verwendeten Farbfunktion kompatiblen Wert umzurechnen (in diesem Fall `rgb()`). Dies geschieht, damit der Browser die Ausgabefarbe aus der Ursprungsfarbe berechnen kann. Während die Berechnungen relativ zur verwendeten Farbfunktion durchgeführt werden, hängt der tatsächliche Ausgabefarbwert vom Farbfarbraum ab:
>
> - Ältere sRGB-Funktionsfarbmodelle können nicht das gesamte Spektrum sichtbarer Farben ausdrücken. Die Ausgabefarben von ([`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)) werden zu `color(srgb)` serialisiert, um diese Einschränkungen zu vermeiden. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert zurückgibt.
> - Für modernere Farbfunktionen (`lab()`, `oklab()`, `lch()`, und `oklch()`) werden relative Farbausgabewerte im gleichen Syntax wie die verwendete Farbfunktion ausgedrückt. Wenn beispielsweise eine [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Farb-funktion verwendet wird, ist die Ausgabefarbe ein `lab()`-Wert.

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

## Syntaxflexibilität

Es gibt einen wichtigen Unterschied zwischen den zerlegten Ursprungsfarbkanalwerten, die in der Funktion verfügbar gemacht werden, und den vom Entwickler festgelegten Kanalwerten der Ausgabefarbe.

Um es nochmals zu sagen, wenn eine relative Farbe definiert ist, werden die Kanalwerte der Ursprungsfarbe in der Funktion zur Verfügung gestellt, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden. Im folgenden Beispiel wird eine relative Farbe mit einer `rgb()`-Funktion definiert und die Ursprungsfarbkanalwerte (verfügbar gemacht als `r`, `g` und `b`) für die Ausgabekanalwerte verwendet, was bedeutet, dass die Ausgabefarbe mit der Ursprungsfarbe identisch ist:

```css
rgb(from red r g b)
```

Beim Spezifizieren der Ausgabewerte müssen Sie jedoch die Ursprungsfarbkanalwerte überhaupt nicht verwenden. Sie müssen die Ausgabekanalwerte in der richtigen Reihenfolge angeben (z. B. rot, dann grün, dann blau im Fall von `rgb()`), aber sie können beliebige Werte sein, die für diese Kanäle gültig sind. Dies gibt relativen CSS-Farben einen hohen Grad an Flexibilität.

Wenn Sie beispielsweise wollten, könnten Sie absolute Werte wie im Folgenden gezeigt angeben, um `red` in `blue` zu transformieren:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> [!NOTE]
> Wenn Sie die relative Farbsyntax verwenden, aber dieselbe Farbe wie die Ursprungsfarbe oder eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert, ausgeben, erstellen Sie eigentlich keine relative Farbe. Sie würden dies wahrscheinlich nie in einem echten Codebasis tun und stattdessen einfach einen absoluten Farbwert verwenden. Wir hielten es jedoch für nützlich, zu erklären, dass Sie dies mit der relativen Farbsyntax _tun_ können, als Ausgangspunkt zum Lernen darüber.

Sie können auch die bereitgestellten Werte mischen oder wiederholen. Folgendes nimmt ein etwas dunkleres Rot als Eingabe und gibt eine helle Graufarbe aus — die `r`-, `g`- und `b`-Kanäle der Ausgabefarbe sind alle auf den `r`-Kanalwert der Ursprungsfarbe gesetzt:

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

In dem obigen Abschnitt haben wir nur relative Farben gesehen, die über die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion definiert wurden. Relative Farben können jedoch unter Verwendung jeder modernen CSS-Farb-funktion definiert werden — [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) oder [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb). Die allgemeine Syntaxstruktur ist in jedem Fall die gleiche, obwohl die Ursprungsfarbwerte unterschiedliche, für die verwendete Funktion geeignete Namen haben.

Unten finden Sie Beispiele für die relative Farbsyntax für jede Farbfunktion. Jeder Fall ist der einfachste mögliche, wobei die Ausgabefarbkanalwerte genau den Ursprungsfarbkanalwerten entsprechen:

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

Es ist nochmals erwähnenswert, dass das Farbsystem der Ursprungsfarbe nicht mit dem verwendeten Farbsystem zur Erstellung der Ausgabefarbe übereinstimmen muss. Auch dies bietet eine Menge Flexibilität. Generell werden Sie nicht interessiert daran sein und vielleicht nicht einmal wissen, in welchem System die Ursprungsfarbe definiert ist (Sie könnten lediglich einen [benutzerdefinierten Eigenschaftswert](#verwendung_benutzerdefinierter_eigenschaften) zur Manipulation haben). Sie möchten einfach eine Farbe eingeben und beispielsweise eine hellere Variante davon erstellen, indem Sie sie in eine `hsl()`-Funktion setzen und den Helligkeitswert variieren.

## Verwendung benutzerdefinierter Eigenschaften

Bei der Erstellung einer relativen Farbe können Sie sowohl Werte verwenden, die in [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) definiert sind, als auch innerhalb der Definitionen der Ausgabefarbkanalwerte. Sehen wir uns ein Beispiel an.

Im untenstehenden CSS definieren wir zwei benutzerdefinierte Eigenschaften:

- `--base-color` enthält unsere Basis-Markenfarbe — `purple`. Hier verwenden wir ein benanntes Farb-Stichwort, aber relative Farben können jede Farbsyntax für die Ursprungsfarbe akzeptieren.
- `--standard-opacity` enthält den Standard-Markenopazitätswert, den wir auf halbtransparente Boxen anwenden möchten — `0.75`.

Wir geben dann zwei {{htmlelement("div")}}-Elementen eine Hintergrundfarbe. Einem wird eine absolute Farbe gegeben — unser Marken-Purple `--base-color`. Das andere erhält eine relative Farbe, die unserem Marken-Purple entspricht, das zu einer alpha-Kanaltransformation hinzugefügt wird gleich unserem Standardopazitätswert.

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

## Verwendung von mathematischen Funktionen

Sie können CSS [mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) wie {{cssxref("calc")}} verwenden, um Werte für die Ausgabefarbkanäle zu berechnen. Sehen wir uns ein Beispiel an.

Das untenstehende CSS wird verwendet, um drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben zu stylen. Das mittlere erhält einen unmodifizierten `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten. Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal durch eine `calc()`-Funktion verändert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat 20% zum Helligkeitskanal addiert, und die abgedunkelte Farbe hat 20% subtrahiert.

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

## Manipulation des Alpha-Kanals

Dieses Beispiel zeigt das Ändern des Alpha-Kanals einer benannten Farbe. Hier haben wir ein Element, das in einem Container eingewickelt ist, und beide haben einen `teal`-Hintergrund. Um zwischen den Hintergründen zu unterscheiden, variieren wir den `alpha`-Kanalwert, indem wir die relative Farb-Eigenschaft, die [`calc()`-Funktion](/de/docs/Web/CSS/Reference/Values/calc) und eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) verwenden.

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

Der `alpha`-Kanal wird unter Verwendung des `alpha`-Schlüsselworts referenziert. In diesem Fall modifiziert der Ausdruck `calc(alpha * var(--alpha-multiplier))` den `alpha`-Kanalwert, indem er `alpha` mit dem Wert der benutzerdefinierten Eigenschaft `--alpha-multiplier` multipliziert. Der Container erhält einen halbtransparenten Hintergrund, da der Multiplikator von `0.3` kleiner als `1.0` ist.

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Manipulating alpha channel", "100%", "200") }}

## Kanalwerte lösen sich zu `<number>`-Werten

Um Berechnungen von Kanalwerten in relativen Farben möglich zu machen, lösen sich alle Ursprungsfarbkanalwerte in entsprechende {{cssxref("&lt;number&gt;")}}-Werte auf. Zum Beispiel erzeugen wir in den `lch()`-Beispielen oben neue Helligkeitswerte, indem wir Zahlen zum `l`-Kanalwert der Ursprungsfarbe addieren oder von ihm subtrahieren. Wenn wir versucht haben, `calc(l + 20%)` zu machen, würde das zu einer ungültigen Farbe führen — `l` ist ein `<number>` und kann keine {{cssxref("&lt;percentage&gt;")}} hinzugefügt werden.

- Kanalwerte, die ursprünglich als `<percentage>` spezifiziert wurden, lösen sich in einen `<number>` für die Ausgabefunktion auf.
- Kanalwerte, die ursprünglich als {{cssxref("&lt;hue&gt;")}}-Winkel spezifiziert wurden, lösen sich zu einer Anzahl von Grad im Bereich von `0` bis `360` auf.

Überprüfen Sie die verschiedene [Farbfunktionsseiten](/de/docs/Web/CSS/Guides/Colors#functions) für die Details darüber, was ihre Ursprungsfarbkanalwerte auflösen.

## Überprüfen der Browserunterstützung

Sie können überprüfen, ob ein Browser die relative Farbsyntax unterstützt, indem Sie sie durch eine {{cssxref("@supports")}} at-rule ausführen.

Zum Beispiel:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Beispiele

> [!NOTE]
> Sie finden weitere Beispiele, die die Verwendung der relativen Farbsyntax in den verschiedenen Funktionalnotationstypen auf ihren dedizierten Seiten demonstrieren: [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_relative_colors_with_color), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#using_relative_colors_with_rgb).

### Farbpalgenerator

In diesem Beispiel können Sie eine Basisfarbe und einen Farbpalettentyp auswählen. Der Browser zeigt dann eine entsprechende Palette von Farben basierend auf der gewählten Basisfarbe an. Die Farbauswahlmöglichkeiten sind wie folgt:

- **Komplementär**: Beinhaltet zwei Farben, die sich auf gegenüberliegenden Seiten eines Farbkreises befinden, oder anders ausgedrückt, _gegenüberliegende Farbtöne_ (siehe den {{cssxref("&lt;hue&gt;")}}-Datentyp für mehr Informationen über Farbtöne und Farbkreise). Die zwei Farben werden definiert als eine Basisfarbe und die Basisfarbe mit Farbton-Kanal +180 Grad.
- **Triadisch**: Beinhaltet drei Farben, die gleich weit um den Farbkreis verteilt sind. Die drei Farben werden definiert als eine Basisfarbe, Basisfarbe mit Farbton-Kanal -120 Grad, und Basisfarbe mit Farbton-Kanal +120 Grad.
- **Tetradisch**: Beinhaltet vier Farben, die gleich weit um den Farbkreis verteilt sind. Die vier Farben werden definiert als eine Basisfarbe und Basisfarbe mit Farbton-Kanal +90, +180 und +270 Grad.
- **Monochrom**: Beinhaltet mehrere Farben mit demselben Farbton, aber unterschiedlichen Helligkeitswerten. In unserem Beispiel haben wir fünf Farben in einer monochromen Palette definiert — Basisfarbe und Basisfarbe mit Helligkeitskanal -20, -10, +10 und +20.

#### HTML

Der vollständige HTML-Code ist unten als Referenz enthalten. Die interessantesten Teile sind wie folgt:

- Die benutzerdefinierte Eigenschaft `--base-color` wird als inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf dem {{htmlelement("div")}}-Element mit der ID `container` gespeichert. Wir haben es dort platziert, damit wir den Wert mit JavaScript aktualisieren können. Wir haben einen Anfangswert von `#ff0000` (`red`) bereitgestellt, um eine Farbpalette basierend auf diesem Wert anzuzeigen, wenn das Beispiel geladen wird. Beachten Sie, dass wir das normalerweise auf dem {{htmlelement("html")}}-Element einstellen würden, aber das MDN-Live-Beispiel hat es beim Rendern entfernt.
- Das Farbauswahlwerkzeug wird mit einer [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerung erstellt. Wenn in dieser Steuerung ein neuer Wert festgelegt wird, wird die benutzerdefinierte Eigenschaft `--base-color` unter Verwendung von JavaScript auf diesen Wert gesetzt, was wiederum eine neue Farbpalette erstellt. Alle angezeigten Farben sind relative Farben basierend auf `--base-color`.
- Das Set von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerungen ermöglicht die Auswahl eines Farbpalettentyps zur Generierung. Wenn hier ein neuer Wert gewählt wird, wird JavaScript verwendet, um eine neue Klasse auf dem `container`-`<div>` zu setzen, die die gewählte Palette repräsentiert. In der CSS-Datei werden abgestufte Selektoren verwendet, um auf die Kindelemente-`<div>`-Elemente zu zielen (z. B. `.comp :nth-child(1)`), damit sie die korrekten Farben erhalten und die ungenutzten `<div>`-Knoten ausgeblendet werden können.
- Das `container`-`<div>`, das die Kindelemente-`<div>`-Elemente enthält, die die Farben der erzeugten Palette anzeigen. Beachten Sie, dass eine anfängliche Klasse von `comp` auf ihr gesetzt ist, sodass die Seite beim ersten Laden ein komplementäres Farbschema anzeigt.

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

Unten zeigen wir nur das CSS, das die Palettenfarben festlegt. Beachten Sie, wie in jedem Fall abgestufte Selektoren verwendet werden, um das richtige {{cssxref("background-color")}} auf jedes Kind-`<div>`-Element für die gewählte Palette anzuwenden. Uns ist mehr wichtig, die Position der `<div>`-Elemente in der Quellreihenfolge als der Typ von Element, deshalb haben wir {{cssxref(":nth-child")}} verwendet, um sie zu zielen.

In der letzten Regel haben wir den [generellen Geschwister-Selektor (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) verwendet, um die ungenutzten `<div>`-Elemente in jedem Palettentyp zu zielen und die Eigenschaft [`display: none`](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) zu setzen, um sie vom Rendern abzuhalten.

Die Farben selbst beinhalten die `--base-color` plus relative Farben, die von dieser `--base-color` abgeleitet sind. Die relativen Farben verwenden die [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)-Funktion — sie geben die Ursprungs-`--base-color` an und definieren eine Ausgabefarbe mit einem entsprechend angepassten Helligkeits- oder Farbton-Kanal.

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

##### Ein Hinweis zu `@supports`-Tests

Im CSS-Beispiel sehen Sie {{cssxref("@supports")}}-Blöcke, die verwendet werden, um bei Browsern, die eine vorherige Entwurfsspezifikation der relativen Farbsyntax unterstützen, unterschiedliche {{cssxref("background-color")}}-Werte bereitzustellen. Diese sind erforderlich, weil die initiale Implementierung von Safari auf einer älteren Version der Spezifikation basierte, in der Ursprungsfarbkanalwerte sich zu {{cssxref("&lt;number&gt;")}}s oder anderen Einheitentypen je nach Kontext auflösten. Dies bedeutete, dass Werte manchmal Einheiten benötigten, wenn sie Additionen und Subtraktionen durchführten, was Verwirrung stiftete. In neueren Implementierungen lösen sich Ursprungsfarbkanalwerte immer zu einem äquivalenten {{cssxref("&lt;number&gt;")}}-Wert, was bedeutet, dass Berechnungen immer mit einheitsfreien Werten vorgenommen werden.

Beachten Sie, wie der Unterstützungstest in jedem Fall mit irgendeiner Farbdeklaration durchgeführt wird — `color: lch(from red l c calc(h + 90deg))` zum Beispiel — nicht notwendigerweise der eigentliche Wert, den wir für andere Browser variieren müssen. Beim Testen komplexer Werte wie dieser sollten Sie die einfachste mögliche Deklaration verwenden, die immer noch den syntaktischen Unterschied enthält, den Sie testen möchten.

Das Einbeziehen einer benutzerdefinierten Eigenschaft im `@supports`-Test funktioniert nicht — der Test kommt immer als positiv zurück, unabhängig davon, welchen Wert der benutzerdefinierten Eigenschaft gegeben wird. Das liegt daran, dass ein benutzerdefinierter Eigenschaftswert nur dann ungültig wird, wenn er einer ungültigen Wertzuteilung (oder Teil einer ungültigen Zuteilung) einer regulären CSS-Eigenschaft zugewiesen ist. Um das zu umgehen, haben wir in jedem Test `var(--base-color)` durch das Keyword `red` ersetzt.

#### JavaScript

Im JavaScript:

- Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu den Radiobuttons hinzu, sodass, wenn einer ausgewählt wird, die Funktion `setContainer()` ausgeführt wird. Diese Funktion aktualisiert den `class`-Wert des `<div>` mit `id="container"` mit dem Wert des ausgewählten Radiobuttons, sodass die richtigen Hintergrundfarben auf die Child-`<div>`s für den gewählten Palettentyp angewendet werden.
- Fügen wir eine [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Farbauswahlsteuerung hinzu, damit, wenn eine neue Farbe ausgewählt wird, die Funktion `setBaseColor()` ausgeführt wird. Diese Funktion setzt den Wert der benutzerdefinierten Eigenschaft `--base-color` auf die neue Farbe.

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

Das Ergebnis ist wie folgt. Dies beginnt, die Macht von relativen CSS-Farben zu zeigen — wir definieren mehrere Farben und erzeugen Paletten, die live aktualisiert werden, indem ein einziger benutzerdefinierter Eigenschaftswert angepasst wird.

{{ EmbedLiveSample("Color palette generator", "100%", "500") }}

### Live-UI-Farbschema-Updater

Dieses Beispiel zeigt eine Karte mit einer Überschrift und einem Text, jedoch mit einem Twist — unter der Karte befindet sich eine Schiebereglersteuerung ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)). Wenn ihr Wert geändert wird, wird JavaScript verwendet, um einen `--hue` benutzerdefinierten Eigenschaftswert auf den neuen Schiebereglerwert zu setzen.

Dies passt wiederum das Farbschema für die gesamte Benutzeroberfläche an:

- Der Wert von `--base-color` ist eine relative Farbe mit ihrem Farbtonkanal, der auf den Wert von `--hue` eingestellt ist.
- Die anderen im Design verwendeten Farben sind relative Farben basierend auf `--base-color`. Infolgedessen ändern sie sich, wenn sich die `--base-color` ändert.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

- Das {{htmlelement("main")}}-Element dient als äußerer Wrapper, um den Rest des Inhalts zu enthalten und die Karte und das Formular vertikal und horizontal innerhalb von `<main>` als eine Einheit zu zentrieren.
- Das {{htmlelement("section")}}-Element enthält die [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, die den Inhalt der Karte definieren.
- Das {{htmlelement("form")}}-Element enthält die ([`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range))-Steuerung und deren {{htmlelement("label")}}.

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

Im CSS hat das `:root` einen Standard-`--hue`-Wert, der darauf gesetzt ist, relative [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) Farben zur Definition des Farbschemas, plus ein radialer Verlauf, der den ganzen Körper füllt.

Die relativen Farben sind wie folgt:

- `--base-color`: Die Basisfarbe nimmt eine Ursprungsfarbe von `red` (obwohl jede vollständige Farbe verwendet werden könnte) und passt ihren Farbtonwert auf den in der benutzerdefinierten Eigenschaft `--hue` gesetzten Wert an.
- `--bg-color`: Eine viel hellere Variante von `--base-color`, die als Hintergrund verwendet werden soll. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 40 zu ihrem Helligkeitswert hinzugefügt wird.
- `--complementary-color`: Eine komplementäre Farbe 180 Grad um den Farbkreis von `--base-color`. Dies wird erstellt, indem eine Ursprungsfarbe von `--base-color` genommen und 180 zu ihrem Farbtonwert hinzugefügt wird.

Werfen Sie jetzt einen Blick auf den Rest des CSS und beachten Sie alle Stellen, an denen diese Farben verwendet werden. Dies beinhaltet [Hintergründe](/de/docs/Web/CSS/Reference/Properties/background), [Rahmen](/de/docs/Web/CSS/Reference/Properties/border), {{cssxref("text-shadow")}} und sogar die {{cssxref("accent-color")}} des Schiebereglers.

> [!NOTE]
> Der Kürze halber werden nur die Teile des CSS gezeigt, die für die Verwendung relativer Farben relevant sind.

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

Das JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zur Schiebereglersteuerung hinzu, sodass, wenn ein neuer Wert festgelegt wird, die Funktion `setHue()` ausgeführt wird. Diese Funktion setzt einen neuen inline-`--hue`-benutzerdefinierten Eigenschaftswert auf das `:root` (das `<html>`-Element), der den ursprünglich in unserem CSS gesetzten Standardwert überschreibt.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Relative CSS-Farben werden hier verwendet, um das Farbschema einer gesamten Benutzeroberfläche zu steuern, die live angepasst werden kann, sobald ein einzelner Wert modifiziert wird.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "450") }}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) auf Wikipedia
- [CSS relative Farbsyntax](https://developer.chrome.com/blog/css-relative-color-syntax) auf developer.chrome.com (2023)
