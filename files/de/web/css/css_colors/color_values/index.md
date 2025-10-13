---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies wird in der Regel dadurch erreicht, dass die Farbe in Komponenten zerlegt wird, wie beispielsweise die Mengen verschiedener Primärfarben zum Mischen oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, unabhängig davon, wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe von numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der standardmäßige Rot-, Grün- und Blauraum — wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System, um Farben zu gruppieren, sodass die Beschreibung jeder beliebigen Farbe konsistent ist. Wird eine Farbe zwischen zwei verschiedenen Farbräumen transformiert, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore darin beschränkt, wie viele Farben sie darstellen konnten, und CSS-Farben waren durch diese Beschränkungen begrenzt, wurden jedoch erweitert, als sich die Möglichkeiten verbesserten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, verfügen wir heutzutage auch über Farbmodelle, die auf der menschlichen Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Spektrum")}} an Farben bieten. Wir können Farbe in CSS jetzt auf verschiedene Arten beschreiben und die Optionen werden ständig erweitert.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Wertetypen ein. Eine ausführlichere Diskussion finden Sie in den unten angegebenen Referenzlinks.

## Schlüsselwörter

Das Web definiert einen Satz von Standardfarbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzter Ansatz — möglicherweise gibt es kein Schlüsselwort, das die genaue Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer gemischter Farben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden.

Es gibt über 160 benannte Farben. Von besonderem Interesse sind benannte Farben wie [`transparent`](/de/docs/Web/CSS/named-color#transparent), die einen transparenten Farbwert festlegen, während [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft festlegt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbenauswahl des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht auf die Groß- und Kleinschreibung angewiesen. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}}-Datentyp.

## RGB-Werte

Es gibt zwei primäre Möglichkeiten, eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden. Sie ermöglichen jedoch, eine viel größere Farbpalette anzugeben.

### Hexadezimale Zeichenfolgennotation

Die hexadezimale (Hex-) Zeichenfolgennotation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgennotation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht auf die Groß- und Kleinschreibung angewiesen.

- `"#rrggbb"`
  - : Gibt eine vollständig undurchsichtige Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten jeweils als zweistelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder als einstelliger Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`)).

> [!NOTE]
> Das führende `0x` in den obigen Werten gibt ein hexadezimales Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe dadurch berechnet, dass die Ziffer jeder Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte zu 25% undurchsichtig zu machen, fügen Sie den Alphakanal-Wert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenfolgennotation für Farben finden Sie im {{cssxref("hex-color")}}-Datentyp.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer die Auswahl einer Farbe ermöglichen muss. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichen-App. Möglicherweise haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder vielleicht ermöglicht Ihre App dem Benutzer, Farben zu Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbpicker-Steuerelement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbpicker-Steuerelement (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element enthält, in das wir den Wert der Farbe mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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
    sans-serif;
}
```

Das folgende JavaScript aktualisiert die Farbe des Rahmens, um den ursprünglichen Wert des Farbpickers wiederzugeben, und fügt dann zwei Ereignis-Handler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen des Werts zu reagieren.

```js
const colorPicker = document.querySelector("#colorPicker");
const box = document.querySelector("#box");
const output = document.querySelector("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", (event) => {
  box.style.borderColor = event.target.value;
});

colorPicker.addEventListener("change", (event) => {
  output.innerText = `${colorPicker.value}`;
});
```

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal ausgelöst, wenn sich der Wert des Elements ändert, das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbpicker einstellt. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Rahmenfarbe des Feldes so, dass sie mit dem aktuellen Wert des Farbpickers übereinstimmt.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbpickers endgültig festgelegt ist. Darauf reagieren wir, indem wir den Inhalt des `<output>` auf den Zeichenkettenwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

Die funktionale RGB-Notation (Rot/Grün/Blau), wie die hexadezimale Zeichenfolgennotation, stellt Farben durch ihre Rot-, Grün- und Blaukomponenten dar (und optional eine Alphakanalkomponente für Deckkraft). Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — die Rot-, Grün- und Blauwertkomponenten und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, was in diesem Fall gleichbedeutend mit `0` ist.

- `alpha`
  - : Der Alphakanal wird als ein Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% durchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten — ein [`<angle>`](/de/docs/Web/CSS/angle) aus jenem Farbmodells {{Glossary("color_wheel", "Farbrad")}} — umfassen die `srgb`-Farb-Funktionen `hsl()` und `hwb()`, die CIElab-Funktion `lch()` und die OKLab-Funktion `oklch()`. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie rot, orange, gelb, grün, blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()`-CSS-Farb-Funktion war die erste farbtonbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist leichter, die Wirkung zu bestimmen, die das Variieren der Werte für Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) hat, als bestimmte Farben über die Rot-, Grün- und Blaukanalwerte anzugeben. Außerdem ist HSL der HSB- (Farbton, Sättigung und Helligkeit) Farb-Picker in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()`- und `hwb()`-Farbfunktionen von sRGB sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbrad")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der bestimmt, wie weit die Farbe auf einer Skala zwischen völlig graustufig und der maximal möglichen Menge des angegebenen Farbtons liegt.
Wenn der Wert der Helligkeit zunimmt, geht die Farbe von der dunkelsten zur hellsten möglichen Farbe über (von schwarz zu weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verbreitet unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)-Lizenz.

Der Wert der Farbtonkomponente (`H`) einer HSL- (oder HWB-)Farbe ist ein Winkel, der bei 0° mit Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Graden (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, was der Grundton der Farbe ist, kontrolliert jedoch nicht, wie lebhaft oder matt, wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, die aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% vollständig farblos (graustufig) sind. Die Helligkeitskomponente (`L`) gibt an, wie hell die Farbe auf einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einschließen, gefolgt von einem Schrägstrich (`/`), um die Farbe weniger als 100% undurchsichtig zu machen.

Hier sind einige Beispiel-Farben in HSL-Notation:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
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

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden
const colors = [
  "hsl(90deg 0% 50%)",
  "hsl(90 100% 50%)",
  "hsl(0.15turn 50% 75%)",
  "hsl(0.15turn 90% 75%)",
  "hsl(0.15turn 90% 50%)",
  "hsl(270deg 90% 50% / 50%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("HSL_functional_notation", 300, 200)}}

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, gefolgt von einem Schrägstrich.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass er in Grad (`deg`) angegeben ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Jedoch spezifiziert `hwb()`-Funktionen anstelle von `hsl()`-Helligkeit und Sättigung die Weiße (`W`) und die Schwärze (`B`). Diese Funktion ist ebenfalls recht intuitiv — sie ermöglicht es Ihnen, einen Farbton auszuwählen und dann Weiß und Schwarz in der gewünschten Menge zu mischen, um die gewünschte Farbe zu erreichen.

Die Werte `W` und `B` reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr beträgt, wird die Farbe grau, ähnlich wie das Setzen der `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann auch ein optionaler Alphawert hinzugefügt werden, der mit einem Schrägstrich `/` angegeben wird.

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

In den folgenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, fügen jedoch Weiße und Schwärze für jeden Farbton über `hwb()` hinzu, anstatt Sättigung und Helligkeit:

```css hidden live-sample___hwb_functional_notation
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
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

```html hidden live-sample___hwb_functional_notation
<table>
  <thead>
    <tr>
      <th scope="col">Color in HWB notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden live-sample___hwb_functional_notation
const colors = [
  "hwb(90deg 50% 50%)",
  "hwb(90 0% 0%)",
  "hwb(0.15turn 25% 0%)",
  "hwb(0.15turn 10% 25%)",
  "hwb(1turn 10% 65%)",
  "hwb(270deg 75% 10%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("HWB_functional_notation", 300, 200)}}

### LCH und OkLCh: CIELAB- und Oklab-Farbräume

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen haben alle voll gesättigten Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das ist nicht die Art und Weise, wie das menschliche Sehen oder Monitore funktionieren. Wenn weißer Text auf vollständig gesättigtem Blau (`hsl(240deg 100% 50%)`) lesbar ist, wird dieser gleiche Text auf vollständig gesättigtem Gelb (`hsl(60deg 100% 50%)`) nicht nur unleserlich sein, sondern möglicherweise auch die Augen Ihres Benutzers belasten. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne dass der Text unleserlich wird? Das können Sie mit den Farb-Funktionen im CIELAB- und Oklab-Farbraum.

Die CIELAB- und Oklab-Farbräume stellen den gesamten Bereich der Farben dar, die Menschen sehen können. CIE-Lab-Farb-Funktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab-Farb-Funktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Das Hauptziel dieser Modelle ist es, dass sie einheitlich sind, sodass eine gegebene Entfernung zwischen zwei Punkten im Farbraum für einen Betrachter gleichermaßen unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch unter Verwendung zusätzlicher numerischer Optimierungsschritte erstellt wurde. Daher werden die Werte als genauer angesehen als diejenigen von CIELAB. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgerechter gleichmäßig verteilt.

Die `lch()`- und `oklch()`-Funktionen verwenden Lichtstärke (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt näher erläutert. Die [`lab()`- und `oklab()`](#lab_und_oklab)-Funktionen arbeiten anders, indem sie Lichtstärke (`L`), Rot/Grün-Wert (entlang der `a`-Achse) und Gelb/Blau-Wert (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen besteht darin, dass bei ihnen die "Lichtstärke" die wahrgenommene Helligkeit ist; sie ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbton-Farb-Funktionen ist der `h`-Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>`-Winkel der Farbe darstellt. Jedoch sind die Farben bei jedem Winkelwert nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbwelten sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`).

Die folgenden Gradienten zeigen die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIELAB- und OKLab-Farbräumen:

```html hidden live-sample___hues
<p>sRGB (<code>hsl()</code> and <code>hwb()</code>)</p>
<div id="srgb"></div>
<p>CIE Lab (<code>lch()</code>)</p>
<div id="lch"></div>
<p>OKLab (<code>oklch()</code>)</p>
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

Sie werden bemerken, dass die Helligkeit der letzteren Farbverläufe über das Spektrum der Farbtöne gleichmäßiger ist als der sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blauwerte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blauverteilung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab-Farbraum korrigiert und daher die `oklch()`-Farbnomenklatur.

Wie oben erwähnt, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, eine `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` ein vollständiger Mangel an Lichtstärke ist, was schwarz bedeutet.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`), das das Chroma der Farbe, also die "Farbmenge" angibt. Dies ist dem `S`-Sättigungswert der `hsl()`-Farb-Funktion ähnlich. Der Wert `0` ist ein vollständiger Mangel an Chroma oder Sättigung, was eine graue Farbe zwischen weiß und schwarz, einschließlich, abhängig vom Lichtstärkewert ergibt. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie die anderen Farb-Funktionen gibt es auch einen optionalen Alpha-Transparenz-Wert, dem ein Schrägstrich (`/`) vorangestellt ist.

Das folgende Beispiel zeigt die Auswirkung der Veränderung des Lichtstärkewerts in den `lch()`- und `oklch()`-Funktionen.

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

.dark-text {
  color: lch(1% 40 0deg);
}

.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```html hidden live-sample___lch-colors
<div class="container"></div>
```

```js hidden live-sample___lch-colors
const container = document.querySelector(".container");
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `lch(${usedL}% 40 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `oklch(${usedL}% 0.12 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
```

{{embedlivesample("lch-colors", '100', '200') }}

## Lab und OKLab

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktionalnotation drückt eine gegebene Farbe im CIE L\*a\*b\*-Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren den gesamten Bereich der Farben, die Menschen sehen können, indem sie die Lichtstärke (`L`) der Farbe, einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenz-Wert angeben.

Ähnlich wie bei `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist eine `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (dies entspricht in diesem Fall `0%`). Dieser Wert gibt den Abstand der Farbe entlang der a-Achse im Farbraum an, der bestimmt, wie grün (in Richtung -100%) oder rot (in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125- oder ±0.4- (±100%) Grenzen einstellen können. In der Praxis können Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert hat die gleichen Einschränkungen. Er gibt den Abstand der Farbe entlang der b-Achse im Farbraum an, der bestimmt, wie blau (in Richtung -100%) oder gelb (in Richtung +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen des Variierens der `a`-Achse durch eine `lab()`-Funktion und der `b`-Achse durch eine `oklab()`-Funktion.

```html hidden live-sample___lab-colors
<div class="container"></div>
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
```

```js hidden live-sample___lab-colors
const container = document.querySelector(".container");

for (let a = -100; a <= 100; a += 25) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `lab(50% ${a}% 0)`;
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let b = -4; b <= 4; b++) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `oklab(50% 0 ${b / 10})`;
  container.appendChild(div);
}
```

{{embedlivesample("lab-colors", '100', '150') }}

## Zusätzliche funktionale Farbnotationen

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben wollen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit weiterem Farbraum {{Glossary("Gamut", "Spektren")}} zu beschreiben.
Zum Beispiel, wenn Sie die Farbe `display-p3 0 0 1` anzeigen möchten, die außerhalb des sRGB-Spektrums liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut)-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor versucht wird, sie zu verwenden:

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

Das Verständnis der `color()`-Funktion ist wichtig, wenn es um relative Farben geht, die im nächsten Abschnitt behandelt werden. Die oben diskutierten älteren sRGB-Farbnotierungen — `hsl()`, `hwb()` und `rgb()` — drücken nicht das volle Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen viel breiteren Farbraum unterstützt. Infolgedessen wird beim Verwenden der älteren Funktionstypen zum Definieren relativer Farben die Ausgabefarbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode zurückgegeben wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel der Umwandlung von `rgb()`, `hsl()`, `hwb()` und anderen [Farbformaten](/de/docs/Web/CSS/color_value) zu betrachten, sehen Sie sich unser [Farbformat-Konverter-Tool](/de/docs/Web/CSS/CSS_colors/Color_format_converter) an.

### Relative Farben

Jede der oben aufgeführten Farb-Funktionen kann verwendet werden, um [**relativen Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht es, Komplementärfarben zu bestehenden Farben zu erstellen — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farb-Anpassungen. Siehe jede Farbfunktionsseite, um mehr über ihre relativen Syntaxen zu lernen.

Wie oben erwähnt, wird beim Verwenden von `rgb()`, `hsl()` oder `hwb()`, um eine relative Farbe auszugeben, die Ausgabefarbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix()-Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte jeglicher oben genannter Syntaxe auf, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihres Mischens in einem gegebenen Farbraum zu einem bestimmten Prozentsatz zurück.

### light-dark()-Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft zu spezifizieren, die für die Verwendung in hellen und dunklen Farbschemata gedacht ist. Welche gesetzt wird, hängt davon ab, ob der Entwickler gesetzt hat oder der Benutzer ein helles oder dunkles Farbschema angefordert hat. Dies ist eine Abkürzungsfunktion, die es ermöglicht, dieselben Ergebnisse wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Media-Feature-Abfrage zu erzielen, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
