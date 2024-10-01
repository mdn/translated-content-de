---
title: CSS Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept der "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem die Farbe in Komponenten aufgeteilt wird, wie etwa Mengen verschiedener Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben unabhängig davon, wo sie dargestellt werden, gleich erscheinen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit Hilfe numerischer Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden können. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells – der Standard-rot, -grün und -blau-Farbraum – wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore in der Zahl der darstellbaren Farben eingeschränkt, und CSS-Farben waren durch diese Einschränkungen begrenzt, erweiterte sich jedoch mit der Verbesserung der Möglichkeiten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir nun auch Farbmodelle, die auf menschlicher Wahrnehmung basieren, und bieten ein viel breiteres {{Glossary("gamut", "Spektrum")}} an Farben. Wir können jetzt Farben in CSS auf verschiedene Weisen beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von standardmäßigen Farbnamen, die es ermöglichen, Schlüsselwörter anstatt numerischer Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, aber begrenzterer Ansatz – möglicherweise gibt es kein Schlüsselwort, das die exakte Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farb-Schlüsselwörter sind nicht zwischen Groß- und Kleinschreibung unterscheidend. Weitere Informationen zu Farb-Schlüsselwörtern finden Sie im {{cssxref("named-color")}}-Datentyp.

## RGB-Werte

Es gibt zwei Hauptwege, eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren – hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden. Sie ermöglichen jedoch eine viel größere Auswahl an Farben.

### Hexadezimale String-Notation

Hexadezimale (Hex-) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (rot, grün und blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Der String unterscheidet nicht zwischen Groß- und Kleinschreibung.

- `"#rrggbb"`

  - : Gibt eine vollständig deckende Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliger Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`)) repräsentiert.

> [!NOTE]
> Das führende `0x` in den obigen Werten kennzeichnet ein hexadezimales ganzzahliges Literal. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl an Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25% undurchsichtig zu machen, fügen Sie wie unten gezeigt den Alphakanalwert hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen String-Notation für Farben finden Sie im {{cssxref("hex-color")}}-Datentyp.

#### Eingabetyp für HTML-Farbe

Es gibt viele Situationen, in denen Ihre Website dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichenanwendung. Vielleicht haben Sie bearbeitenbaren Text und müssen dem Benutzer ermöglichen, die Textfarbe zu wählen. Oder vielleicht lässt Ihre Anwendung den Benutzer Farben für Ordner oder Elemente zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Element/input#type), der ein Farbauswahlsteuerungselement darstellt.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt einen Kasten, der ein Farbauswahlsteuerungselement enthält (mit einem über das {{HTMLElement("label")}}-Element erstellten Etikett) und ein leeres {{HTMLElement("output")}}-Element, in das wir den Wert der Farbe mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Rahmenfarbe, um mit dem aktuellen Wert des Farbwählers übereinzustimmen, und fügt dann zwei Ereignishandler an das [`<input type="color">`](/de/docs/Web/HTML/Element/input/color)-Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbauswahlfeld anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Rahmenfarbe der Box so, dass sie dem aktuellen Wert des Farbwählers entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwählers festgelegt ist. Wir reagieren, indem wir den Inhalt des `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB funktionale Notation

Die RGB (Rot/Grün/Blau) funktionale Notation, ähnlich der hexadezimalen String-Notation, stellt Farben mit ihren roten, grünen und blauen Komponenten (und optional einer Alphakanalkomponente für die Deckkraft) dar. Im Gegensatz zur Verwendung eines Strings wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Werte für die roten, grünen und blauen Komponenten und optional einen Wert für den Alphakanal.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100%, oder das Schlüsselwort `none`, welches in diesem Fall `0` entspricht, sein.

- `alpha`

  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB funktionalen Notation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Farb-Funktion.

## Farb-Funktionen mit einem Farbton-Komponenten

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbmodell-Farbrad des Farbmodells — umfassen die `srgb` Farb-Funktionen `hsl()` und `hwb()`, die CIElab-Funktion `lch()` und die OKLab-Funktion `oklch()`. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL funktionale Notation

Die `hsl()` CSS-Farb-Funktion war die erste farbtonbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` – es ist einfacher, die Wirkung von Variationen des Farbtons (`h`), der Sättigung (`s`) und der Helligkeit (`l`) zu bestimmen, als spezifische Farben über die Werte der roten, grünen und blauen Kanäle zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung und Helligkeit)-Farbwähler in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()`- und `hwb()`-sRGB-Farb-Funktionen sind beide zylindrisch. Der Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbrad")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der bestimmt, wie intensiv die Farbe auf einer Skala zwischen vollständig graustufig und der maximal möglichen Menge des angegebenen Farbtons ist.
Mit zunehmendem Helligkeitswert wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild freundlicherweise bereitgestellt von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)-Lizenz.

Der Wert der `H`-Komponente eines HSL (oder HWB) Farbtons ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder zum Rot zurückkehrt. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gradian (`grad`) oder Drehungen (`turn`). Der Hue-Wert identifiziert, welcher Basiston die Farbe ist, kontrolliert jedoch nicht, wie lebendig oder matt, oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% ein vollständiges Fehlen von Farbe (Graustufen) ist. Die Helligkeit (`L`) gibt an, wie hell die Farbe auf einer Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können optional auch einen Alphakanal einschließen, der mit einem Schrägstrich (`/`) vorangeht, um die Farbe weniger als 100% undurchsichtig zu machen.

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

Der letzte Wert ist halbdeckend; er enthält den optionalen Alpha-Wert, der durch einen Schrägstrich vorausgeht.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Im Gegensatz zu `hsl()`'s Helligkeit und Sättigung spezifiziert `hwb()` Weißanteil (`W`) und Schwarzanteil (`B`). Diese Funktion ist auch ziemlich intuitiv — sie ermöglicht Ihnen, einen Farbton zu wählen und dann weiße und/oder schwarze Anteile hinzuzufügen, um die gewünschte Farbe zu erreichen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr ist, wird die Farbe grau, ähnlich dem Setzen der `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann optional ein Alpha-Wert eingeschlossen werden, dem ein Schrägstrich `/` vorangestellt ist.

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

In den folgenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen jedem Farbton Weißanteil und Schwarzanteil über `hwb()` hinzu, anstatt Sättigung und Helligkeit:

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

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder voll gesättigte Farbton-Winkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das entspricht nicht der menschlichen Wahrnehmung oder der Funktionsweise von Monitoren. Wenn man weißen Text auf gesättigtem Blau (`hsl(240deg 100% 50%)`) setzt, ist er lesbar, aber derselbe Text auf gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern auch die Augen des Benutzers verletzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht aber zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal auf einer Website ändern könnten, ohne den Text unlesbar zu machen? Das können Sie mit Farb-Funktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Farbspektrum, das Menschen sehen können. CIE Lab Farb-Funktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farb-Funktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle besteht darin, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber zusätzliche numerische Optimierungsschritte durchläuft, sodass die Werte als genauer als CIELAB angesehen werden. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsmäßig einheitlicher.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`). Sie werden weiter unten in diesem Abschnitt ausführlicher behandelt. Die Funktionen [`lab()` und `oklab()`](#lab_und_oklab) arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Achsenwert (entlang der `a`-Achse) und Gelb/Blau-Achsenwert (entlang der `b`-Achse) verwenden. Diese Achsen werden als Rechteckskoordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen liegt in der "Helligkeit", die als wahrgenommene Helligkeit verstanden wird; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, im Gegensatz zur Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den auf sRGB-Farbton basierten Farb-Funktionen ist der Farbton (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den `<hue>`-Winkel der Farbe. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Gradienten demonstrieren die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

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

Sie werden feststellen, dass die Helligkeit der späteren Gradienten gleichmäßiger über das Spektrum der Farbtöne verteilt ist als der sRGB-Gradient. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies sichtbarer zu machen.

Beachten Sie auch, dass die Verteilung der Blautöne im CIE Lab länger ist als in den anderen beiden. Das ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Verteilung von Blau ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit der Farbtonwerte zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum behoben und daher die `oklch()`-Farbschreibweise.

Wie oben beschrieben, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, eine `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` der vollständige Mangel an Helligkeit ist, was Schwarz entspricht.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) und ist das Chroma der Farbe, oder die "Menge an Farbe". Dies ist vergleichbar mit dem `S`-Sättigungswert der `hsl()`-Farb-Funktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; das ergibt ein Grau zwischen Weiß und Schwarz inklusive, je nach Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` `150` für `lch()` und `0,4` mit `oklch()` entspricht.

Wie bei den anderen Farb-Funktionen gibt es auch einen optionalen Alphatransparenzwert, dem ein Schrägstrich (`/`) vorangestellt ist.

Das folgende Beispiel zeigt die Wirkung des Änderns des Helligkeitswerts in den `lch()`- und `oklch()`-Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\*-Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen stellen den gesamten Farbbereich dar, den Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsen-Wert (`a`), einen Blau/Gelb-Achsen-Wert (`b`) und einen optionalen Alphatransparenzwert spezifizieren.

Ähnlich wie `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die angibt, wie grün (Richtung -100%) oder rot (Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte zulässig) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Begrenzungen festlegen können. In der Praxis können die Werte jedoch ±160 bzw. ±0,5 nicht überschreiten.

Der `b`-Wert hat dieselben Einschränkungen. Er spezifiziert die Entfernung der Farbe entlang der b-Achse im Farbraum, die angibt, wie blau (Richtung -100%) oder gelb (Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Auswirkungen des Variierens der a-Achse über eine `lab()`-Funktion und der b-Achse über eine `oklab()`-Funktion.

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

## Zusätzliche Farb-Funktionale Notationen

### Die `color()`-Funktion

Wenn Sie die Kontrolle über die Farbräume beim Definieren von Farben explizit übernehmen möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farbgamuts zu beschreiben.
Wenn Sie zum Beispiel die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes behandelt werden. Die älteren sRGB-Farbnotierungen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen viel weiteren Farbraum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben die Ausgabefarbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode zurückgegeben wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()`, und `rgb()`-Farb-Funktionen in `color()` im `srgb`-Farbraum zu sehen, schauen Sie sich unser [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede oben aufgeführte Farb-Funktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben zu definieren, anstatt bei jeder Festlegung eines Farbwerts von Grund auf neu zu beginnen. Diese leistungsstarke Funktion ermöglicht es, Ergänzungen zu bestehenden Farben zu schaffen — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus, um Paletten zu erstellen und Farbanpassungen zu definieren. Siehe jede Farb-Funktionsseite, um mehr über deren relative Syntaxen zu erfahren.

Wie bereits erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe die ausgegebene Farbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte in beliebiger oben genannter Syntax, optional mit proportionale Prozentwerte für jede Farbe, und gibt das Ergebnis des Mischens in einem gegebenen Farbraum in einer bestimmten Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen und dunklen Farbschemata beabsichtigt ist. Welcher gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein solches angefordert hat. Dies ist eine Abkürzungsfunktion, die es Ihnen ermöglicht, dieselben Ergebnisse wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medien-Feature-Abfrage mit weniger Code zu erzielen.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Farbe und Leuchtkraft verstehen](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
