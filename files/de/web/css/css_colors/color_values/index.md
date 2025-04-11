---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form umzuwandeln, die ein Computer verwenden kann. Dies erfolgt typischerweise, indem die Farbe in Komponenten zerlegt wird, wie zum Beispiel die Menge verschiedener Primärfarben, die zusammen gemischt werden sollen, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, egal wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erzeugt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der standardmäßige Rot-, Grün- und Blau-Farbraum — wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass das Beschreiben einer bestimmten Farbe einheitlich ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt, wie viele Farben sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt und erweiterten sich, als sich die Fähigkeiten verbesserten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Spektrum")}} an Farben bieten. Wir können jetzt Farbe in CSS auf verschiedene Weisen beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle numerischer Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz — es kann sein, dass es kein Schlüsselwort gibt, das genau die gewünschte Farbe repräsentiert.

Farbschlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, darunter `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert und [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) setzt den aktuellen Wert der CSS {{cssxref("color")}} Eigenschaft. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl widerspiegeln, die der Benutzer, der Browser oder das Betriebssystem getroffen haben.

Alle Farbschlüsselwörter sind nicht unterscheidbar nach Groß-/Kleinschreibung. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptwege, eine {{Glossary("RGB", "RGB")}} Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie ermöglichen jedoch eine viel breitere Palette von Farben zu spezifizieren.

### Hexadezimale Zeichenfolgen-Notation

Hexadezimale (hex) Zeichenfolgen-Notation verwendet einen hexadezimalen Wert, um jede Komponente (rot, grün und blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgen-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht unterscheidbar nach Groß-/Kleinschreibung.

- `"#rrggbb"`

  - : Gibt eine vollständig undurchsichtige Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`

  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zwei stelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliger Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`)) repräsentiert.

> [!NOTE]
> Das führende `0x` in den obigen Werten zeigt ein hexadezimales ganzzahliges Literal an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Der Fall eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese zwei Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem die Ziffer jeder Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte zu 25 % undurchsichtig zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenfolgen-Notation für Farben finden Sie im {{cssxref("hex-color")}} Datentyp.

#### HTML Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer die Auswahl einer Farbe ermöglichen muss. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie editierbaren Text und müssen dem Benutzer die Wahl der Textfarbe ermöglichen. Oder vielleicht ermöglicht es Ihre App dem Benutzer, Farben zu Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`Typ`](/de/docs/Web/HTML/Reference/Elements/input#type), der eine Farbpicker-Kontrolle rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt eine Box, die eine Farbpicker-Kontrolle enthält (mit einem Etikett, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element, in das wir den Wert der Farbe mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

{{EmbedLiveSample("HTML color input type", 525, 120)}}

```css hidden
#box {
  width: 500px;
  height: 100px;
  border: 5px solid rgb(245 220 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

Der folgende JavaScript-Code aktualisiert die Randfarbe, um dem Anfangswert des Farbpickers zu entsprechen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen zu reagieren, die an seinem Wert vorgenommen werden.

```js
const colorPicker = document.querySelector("#colorPicker");
const box = document.querySelector("#box");
const output = document.querySelector("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  (event) => {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  (event) => {
    output.innerText = `${colorPicker.value}`;
  },
  false,
);
```

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbpicker anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe der Box so, dass sie dem aktuellen Wert des Farbpickers entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbpickers endgültig festgelegt wird. Wir reagieren darauf, indem wir den Inhalt des `<output>` mit dem Zeichenfolgenwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Rot, Grün, Blau) Funktionsnotation, wie hexadezimale Zeichenfolgen-Notation, repräsentiert Farben unter Verwendung ihrer roten, grünen und blauen Komponenten (und optional einer Alphakanalkomponente für die Deckkraft). Anstelle einer Zeichenfolge wird die Farbe jedoch mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentenwerte sowie einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, was in diesem Fall `0` entspricht.

- `alpha`

  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB Funktions-Notation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}} Farbfunktions-Referenz.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente – ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbkreismodell – enthalten, beinhalten die `srgb` Farb-Funktionen `hsl()` und `hwb()`, CIElab's `lch()` Funktion und OKLab's `oklch()` Farb-Funktion. Diese Farb-Funktionen sind intuitiver, da der Farbton uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL Funktions-Notation

Die `hsl()` CSS Farb-Funktion war die erste auf Farbton basierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von Veränderungen des Farbtons (`h`), der Sättigung (`s`) und der Helligkeit (`l`) zu bestimmen, als spezifische Farben über die Rot-, Grün- und Blau-Kanalwerte zu deklarieren. Zusätzlich ähnelt HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbpicker in Photoshop, was es vielen Menschen von Anfang an vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farb-Funktionen sind beide zylindrisch. Farbton wird als [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}} definiert. Das folgende Diagramm zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe entlang einer Skala zwischen vollständig graustufen und der maximal möglichen Menge des gegebenen Farbtons liegt. Wenn der Wert der Helligkeit zunimmt, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta fließt, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Vollwinkel (`turn`). Der Farbtonwert identifiziert, was der Basiston der Farbe ist, steuert jedoch nicht, wie lebendig oder matt oder wie hell oder dunkel die Farbe ist.

Die Sättigung-Komponente (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% ein vollständiger Mangel an Farbe (Graustufen) ist. Die Helligkeit-Komponente (`L`) gibt an, wie hell die Farbe ist, entlang einer gleitenden Skala zwischen vollständig Schwarz (`0%`) und vollständig Weiß (`100%`). Sie können auch einen optionalen Alphakanal, der von einem Schrägstrich (`/`) gefolgt wird, einbeziehen, um die Farbe weniger als 100% undurchsichtig zu machen.

Hier sind einige Beispiel-Farben in HSL-Notation:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0 0% 75%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg 0% 50%)</code></td>
      <td style="background-color: hsl(90deg 0% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90 100% 50%)</code></td>
      <td style="background-color: hsl(90 100% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 50% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 50% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 50%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg 90% 50% / 50%)</code></td>
      <td style="background-color: hsl(270deg 90% 50% / 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HSL_functional_notation", 300, 200)}}

Der letzte Wert ist halb-undurchsichtig; er enthält den optionalen Alphawert, der von einem Schrägstrich gefolgt wird.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons auslassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB-Funktions-Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstelle von `hsl()`'s Helligkeit und Sättigung, spezifizieren `hwb()` Funktionen Weißgrad (`W`) und Schwarzgrad (`B`). Diese Funktion ist auch recht intuitiv — sie ermöglicht es Ihnen, einen Farbton auszuwählen und dann Mengen von Weiß und/oder Schwarz zu mischen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr beträgt, wird die Farbe grau, ähnlich wie das Setzen von `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann ein optionaler Alphawert einbezogen werden, der von einem Schrägstrich `/` gefolgt wird.

Hier sind einige Beispiele für die Verwendung der HWB-Notation:

```css
/* These examples all specify varying shades of a lime green. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* Same lime green but with an alpha value */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

In den folgenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()` Beispielen, aber wir fügen jedem Farbton `hwb()` Weißgrad und Schwarzgrad hinzu, anstatt Sättigung und Helligkeit:

```css hidden
{/*end the bad selector*/}
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hwb(0 75% 25%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HWB notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hwb(90deg 50% 50%)</code></td>
      <td style="background-color: hwb(90deg 50% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(90 0% 0%)</code></td>
      <td style="background-color: hwb(90 0% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 25% 0%)</code></td>
      <td style="background-color: hwb(0.15turn 25% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 10% 25%)</code></td>
      <td style="background-color: hwb(0.15turn 10% 25%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(1turn 10% 65%)</code></td>
      <td style="background-color: hwb(1turn 10% 65%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(270deg 75% 10%)</code></td>
      <td style="background-color: hwb(270deg 75% 10%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HWB_functional_notation", 300, 200)}}

### LCH und OKLCH: CIELAB und Oklab Farbräume

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht, wie menschliche Wahrnehmung oder Monitore funktionieren. Es ist lesbar, weißen Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) zu haben, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern kann auch die Augen Ihrer Benutzer schmerzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbton-Kanal einer Farbe auf einer Website ändern könnten, ohne Texte unlesbar zu machen? Das können Sie mit Farb-Funktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren den gesamten Bereich der Farben, die Menschen sehen können. CIELAB Farbfunktionen beinhalten [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farbfunktionen beinhalten [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum gleich unterschiedlich für einen Betrachter erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber mit zusätzlichen numerischen Optimierungsschritten aufgebaut ist, sodass die Werte als genauer als CIELAB gelten. Dank dieser Optimierung sind Farbtöne wahrnehmungsgetreu einheitlich.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter diskutiert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-heit (entlang der `a`-Achse) und Gelb/Blau-heit (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen ist, dass die "Helligkeit" die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB Farbton-Farb-Funktionen ist der Farbton (`h`) Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), der den `<hue>` Winkel der Farbe darstellt. Die Farben bei den jeweiligen Winkelwerten sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im gesamten sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe demonstrieren die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE-Lab- und OKlab-Farbräumen:

```html hidden live-sample___hues
<p>sRGB (`hsl()` and `hwb()`)</p>
<div id="srgb"></div>
<p>CIE Lab (`lch()`)</p>
<div id="lch"></div>
<p>OKLab (`oklch()`)</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" /> Toggle greyscale</label>
</p>
```

```css hidden live-sample___hues
div:has(~ p input:checked) {
  filter: grayscale(100%);
}
p {
  margin: 0;
}
div {
  height: 50px;
  margin-bottom: 10px;
}
#srgb {
  background: linear-gradient(
    to right,
    hsl(0deg 100% 50%),
    hsl(90deg 100% 50%),
    hsl(180deg 100% 50%),
    hsl(270deg 100% 50%),
    hsl(360deg 100% 50%)
  );
}
#lch {
  background: linear-gradient(
    to right,
    lch(50% 100% 0deg),
    lch(50% 100% 90deg),
    lch(50% 100% 180deg),
    lch(50% 100% 270deg),
    lch(50% 100% 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 100% 0deg),
    oklch(50% 100% 90deg),
    oklch(50% 100% 180deg),
    oklch(50% 100% 270deg),
    oklch(50% 100% 360deg)
  );
}
```

{{embedlivesample("hues", '100', '260') }}

Sie werden möglicherweise bemerken, dass die Helligkeit der letzteren Verläufe gleichmäßiger über das Spektrum der Farbtöne ist als der sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Ausbreitung der Blauwerte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blauverbreitung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab Farbraum behoben und daher ist die `oklch()` Farbnotation.

Wie oben diskutiert, ist der Farbton (`H`) in der `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` der vollständige Mangel an Helligkeit, der schwarz ist.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder die "Menge der Farbe". Dies ist ähnlich dem `S` Sättigungswert der `hsl()` Farb-Funktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; was in einem Grauton zwischen weiß und schwarz inklusive, abhängig vom Helligkeitswert, resultiert. Die Zahlenwerte sind theoretisch ungebunden, wobei `100%` gleich `150` für `lch()` und `0.4` für `oklch()` ist.

Wie bei den anderen Farb-Funktionen gibt es auch einen optionalen Alphatransparenzwert, der von einem Schrägstrich (`/`) gefolgt wird.

Das folgende Beispiel zeigt die Wirkung der Änderung des Helligkeitswertes in den `lch()` und `oklch()` Funktionen.

```css hidden live-sample___lch-colors
/* Varying shades of pink */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}
[id$="99"],
[id$="90"],
[id$="80"] {
  color: lch(1% 40 0deg);
}

.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
#lch-1 {
  background-color: lch(1% 40 0deg);
}
#lch-10 {
  background-color: lch(10% 40 0deg);
}
#lch-20 {
  background-color: lch(20% 40 0deg);
}
#lch-30 {
  background-color: lch(30% 40 0deg);
}
#lch-40 {
  background-color: lch(40% 40 0deg);
}
#lch-50 {
  background-color: lch(50% 40 0deg);
}
#lch-60 {
  background-color: lch(60% 40 0deg);
}
#lch-70 {
  background-color: lch(70% 40 0deg);
}
#lch-80 {
  background-color: lch(80% 40 0deg);
}
#lch-90 {
  background-color: lch(90% 40 0deg);
}
#lch-99 {
  background-color: lch(99% 40 0deg);
}

#oklch-1 {
  background-color: oklch(1% 0.12 0deg);
}
#oklch-10 {
  background-color: oklch(10% 0.12 0deg);
}
#oklch-20 {
  background-color: oklch(20% 0.12 0deg);
}
#oklch-30 {
  background-color: oklch(30% 0.12 0deg);
}
#oklch-40 {
  background-color: oklch(40% 0.12 0deg);
}
#oklch-50 {
  background-color: oklch(50% 0.12 0deg);
}
#oklch-60 {
  background-color: oklch(60% 0.12 0deg);
}
#oklch-70 {
  background-color: oklch(70% 0.12 0deg);
}
#oklch-80 {
  background-color: oklch(80% 0.12 0deg);
}
#oklch-90 {
  background-color: oklch(90% 0.12 0deg);
}
#oklch-99 {
  background-color: oklch(99% 0.12 0deg);
}
```

```html hidden live-sample___lch-colors
<div class="container">
  <div id="lch-1">lch(1 40 0)</div>
  <div id="lch-10">lch(10 40 0)</div>
  <div id="lch-20">lch(20 40 0)</div>
  <div id="lch-30">lch(30 40 0)</div>
  <div id="lch-40">lch(40 40 0)</div>
  <div id="lch-50">lch(50 40 0)</div>
  <div id="lch-60">lch(60 40 0)</div>
  <div id="lch-70">lch(70 40 0)</div>
  <div id="lch-80">lch(80 40 0)</div>
  <div id="lch-90">lch(90 40 0)</div>
  <div id="lch-99">lch(99 40 0)</div>
  <div></div>
  <div id="oklch-1">oklch(1 .12 0)</div>
  <div id="oklch-10">oklch(10 .12 0)</div>
  <div id="oklch-20">oklch(20 .12 0)</div>
  <div id="oklch-30">oklch(30 .12 0)</div>
  <div id="oklch-40">oklch(40 .12 0)</div>
  <div id="oklch-50">oklch(50 .12 0)</div>
  <div id="oklch-60">oklch(60 .12 0)</div>
  <div id="oklch-70">oklch(70 .12 0)</div>
  <div id="oklch-80">oklch(80 .12 0)</div>
  <div id="oklch-90">oklch(90 .12 0)</div>
  <div id="oklch-99">oklch(99 .12 0)</div>
</div>
```

{{embedlivesample("lch-colors", '100', '150') }}

## Lab und OKLab

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) Funktions-Notation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren den gesamten Bereich der Farben, die Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alphatransparenzwert angeben.

Ähnlich wie bei `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt den Abstand der Farbe entlang der a-Achse im Farbraum an, welche definiert, wie grün (in Richtung -100% gehend) oder rot (in Richtung +100% gehend) die Farbe ist.

Beachten Sie, dass diese Werte unterzeichnet sind (sowohl positive als auch negative Werte erlaubend) und theoretisch ungebunden, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen festlegen können. In der Praxis können Werte ±160 bzw. ±0,5 nicht überschreiten.

Der `b`-Wert hat die gleichen Einschränkungen. Er spezifiziert den Abstand der Farbe entlang der b-Achse im Farbraum, welcher definiert, wie blau (in Richtung -100% gehend) oder gelb (in Richtung +100% gehend) die Farbe ist.

Das folgende Beispiel demonstriert die Effekte der Variation der `a`-Achse über eine `lab()` Funktion und der `b`-Achse über eine `oklab()` Funktion.

```html hidden live-sample___lab-colors
<div class="container">
  <div id="lab-100">lab(50% -100% 0)</div>
  <div id="lab-75">lab(50% -75% 0)</div>
  <div id="lab-50">lab(50% -50% 0)</div>
  <div id="lab-25">lab(50% -25% 0)</div>
  <div id="lab-0">lab(50% 0 0)</div>
  <div id="lab--25">lab(50% 25% 0)</div>
  <div id="lab--50">lab(50% 50% 0)</div>
  <div id="lab--75">lab(50% 75% 0)</div>
  <div id="lab--100">lab(50% 100% 0)</div>
  <div></div>
  <div id="oklab-4">oklab(50% 0 -0.4)</div>
  <div id="oklab-3">oklab(50% 0 -0.3)</div>
  <div id="oklab-2">oklab(50% 0 -0.2)</div>
  <div id="oklab-1">oklab(50% 0 -0.1)</div>
  <div id="oklab-0">oklab(50% 0 0)</div>
  <div id="oklab--1">oklab(50% 0 0.1)</div>
  <div id="oklab--2">oklab(50% 0 0.2)</div>
  <div id="oklab--3">oklab(50% 0 0.3)</div>
  <div id="oklab--4">oklab(50% 0 0.4)</div>
</div>
```

```css hidden live-sample___lab-colors
/* Varying shades of pink */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
#lab-100 {
  background-color: lab(50% -100% 0);
}
#lab-75 {
  background-color: lab(50% -75% 0);
}
#lab-50 {
  background-color: lab(50% -50% 0);
}
#lab-25 {
  background-color: lab(50% -25% 0);
}
#lab-0 {
  background-color: lab(50% 0 0);
}
#lab--25 {
  background-color: lab(50% 25% 0);
}
#lab--50 {
  background-color: lab(50% 50% 0);
}
#lab--75 {
  background-color: lab(50% 75% 0);
}
#lab--100 {
  background-color: lab(50% 100% 0);
}

#oklab-4 {
  background-color: oklab(50% 0 -0.4);
}
#oklab-3 {
  background-color: oklab(50% 0 -0.3);
}
#oklab-2 {
  background-color: oklab(50% 0 -0.2);
}
#oklab-1 {
  background-color: oklab(50% 0 -0.1);
}
#oklab-0 {
  background-color: oklab(50% 0 0);
}
#oklab--1 {
  background-color: oklab(50% 0 0.1);
}
#oklab--2 {
  background-color: oklab(50% 0 0.2);
}
#oklab--3 {
  background-color: oklab(50% 0 0.3);
}
#oklab--4 {
  background-color: oklab(50% 0 0.4);
}
```

{{embedlivesample("lab-colors", '100', '150') }}

## Zusätzliche Farbe-Funktions-Notationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit größeren Farb-{{Glossary("Gamut", "Spektren")}} zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB Spektrums liegt, können Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) At-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

```css
.vibrant {
  background-color: color(srgb 0 0 1);
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
    /* Equivalent to out-of-gamut color(srgb 0 0 1.042) */
  }
}
```

Das Verständnis von `color()` ist wichtig für relative Farben, die als nächstes besprochen werden. Die älteren sRGB-Farbnotierungen, die oben besprochen wurden — `hsl()`, `hwb()` und `rgb()`— drücken nicht das gesamte sichtbare Farbspektrum aus, während die `color()` Funktion einen viel größeren Farbraum unterstützt. Aus diesem Grund, wenn Sie die älteren Funktionstypen verwenden, um relative Farben zu definieren, wird die Ausgabefarbe, die durch die Abfrage der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode zurückgegeben wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Konvertierung der `hsl()`, `hwb()`, und `rgb()` Farb-Funktionen in `color()` im `srgb` Farbraum zu sehen, schauen Sie sich unser [Farbpicker-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede oben genannte Farb-Funktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, welche es ermöglicht, {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht es, Ergänzungen zu bestehenden Farben zu erstellen — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbänderungen. Siehe jede Farb-Funktionsseite, um mehr über ihre relative Syntax zu erfahren.

Wie oben bemerkt, wenn `rgb()`, `hsl()`, oder `hwb()` verwendet wird, um eine relative Farbe auszugeben, wird die Ausgabefarbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte einer der oben genannten Syntaxen, optional mit prozentualen Anteilen für jede Farbe, und gibt das Ergebnis des Mischens dieser in einem gegebenen Farbraum durch eine gegebene Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion erlaubt es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen und dunklen Farbschemata vorgesehen ist. Welche davon eingestellt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt oder der Benutzer ein solches angefordert hat. Dies ist eine Abkürzungsfunktion, die es ermöglicht, dieselben Ergebnisse wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage mit weniger Code zu erzielen.

## Siehe auch

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
