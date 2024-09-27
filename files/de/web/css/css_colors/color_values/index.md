---
title: CSS-Farbwerte
short-title: Farbwerte
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, muss man eine Möglichkeit finden, das analoge Konzept der "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies wird typischerweise durch die Zerlegung der Farbe in Komponenten erreicht, z. B. durch die Mischung unterschiedlicher Grundfarben oder durch Helligkeit und Farbton. Definierte Farbmodelle sorgen dafür, dass Farben unabhängig davon, wo sie gerendert werden, gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe von Zahlenwerten darstellt. Farbmodelle beschreiben, wie man die verfügbaren Farben innerhalb eines Farbraums erzeugt. [RGB](/de/docs/Glossary/RGB) war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells – der standardmäßige Rot-, Grün- und Blau-Farbraum – wurde 1996 für Computermonitore und das Web erstellt. Ein [Farbraum](/de/docs/Glossary/color_space) ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer bestimmten Farbe konsistent bleibt. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore hinsichtlich der Anzahl der Farben, die sie darstellen konnten, begrenzt, und CSS-Farben waren durch diese Einschränkungen limitiert, wobei sie sich mit verbesserten Möglichkeiten erweiterten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und eine viel größere [Gamut](/de/docs/Glossary/gamut) an Farben bieten. Wir können Farben in CSS jetzt auf verschiedene Weise beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}}-Wertetypen ein. Für eine detailliertere Diskussion siehe die unten angegebenen Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es Ihnen erlauben, anstelle numerischer Darstellungen Schlüsselwörter zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, aber begrenzterer Ansatz – es gibt möglicherweise kein Schlüsselwort, das die exakte Farbe, die Sie verwenden möchten, repräsentiert.

Farbschlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` zu `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer gemischter Farben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das [RGB](/de/docs/Glossary/RGB)-Modell und sind dem sRGB (`srgb`) Farbraum zugeordnet.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbauswahlen des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht case-sensitive. Sehen Sie sich den {{cssxref("named-color")}} Datentyp für mehr Informationen über Farbschlüsselwörter an.

## RGB Werte

Es gibt zwei primäre Möglichkeiten, eine [RGB](/de/docs/Glossary/RGB)-Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS zu definieren – hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das [RGB](/de/docs/Glossary/RGB)-Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie erlauben jedoch, dass eine viel größere Palette von Farben spezifiziert werden kann.

### Hexadezimale Zeichenkettennotation

Hexadezimale (hex) Zeichenkettennotation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alpha-Kanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenkettennotation beginnt immer mit dem Zeichen `"#"`. Danach kommen die hexadezimalen Ziffern des Farbcodes. Die Zeichenkette ist nicht case-sensitive.

- `"#rrggbb"`

  - : Gibt eine vollständig undurchsichtige Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

Wie oben gezeigt, kann jede der roten, grünen und blauen Farbkomponenten als zweistelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliger Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`) angibt.

> [!NOTE]
> Das führende `0x` in den obigen Werten deutet auf ein hexadezimales ganzzahliges Literal hin. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden hexadezimalen Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jeder Digit der Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn gezeichnet wird.

Um die Werte 25 % durchsichtig zu machen, fügen Sie den Alpha-Kanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}} Datentyp für mehr Informationen zur hexadezimalen Zeichenkettennotation für Farben.

#### Eingabetyp für HTML-Farbe

Es gibt viele Situationen, in denen Ihre Website dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder implementieren eine Zeichen-App. Vielleicht haben Sie editierbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder Ihre App lässt den Benutzer möglicherweise Farben Ordnern oder Elementen zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Element/input#type), der ein Farbwahlelement rendert.

Dieses Beispiel erlaubt es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen ist, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbwahlelement enthält (mit einem Label, das mithilfe des {{HTMLElement("label")}} Elements erstellt wurde) und ein leeres {{HTMLElement("output")}} Element, in das wir den Wert der Farbe mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenkette.

{{EmbedLiveSample("HTML-Farbeingabetyp", 525, 120)}}

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

Der folgende JavaScript-Code aktualisiert die Farbe des Rahmens, um mit dem anfänglichen Wert des Farbwahlelements übereinzustimmen, und fügt dem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) Element zwei Event-Handler hinzu, um auf Änderungen an seinem Wert zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwahlelement anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Rahmenfarbe des Feldes so, dass sie mit dem aktuellen Wert des Farbwahlelements übereinstimmt.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbwahlelements endgültig festgelegt wird. Wir reagieren, indem wir den Inhalt des `<output>` auf den string-Wert der ausgewählten Farbe setzen.

### RGB-Funktionalnotation

Die RGB (Rot/Grün/Blau) Funktionalnotation repräsentiert, ähnlich wie die hexadezimale Zeichenkettennotation, Farben durch ihre Rot-, Grün- und Blaukomponenten (sowie optional eine Alpha-Kanal-Komponente für die Deckkraft). Anstatt jedoch eine Zeichenkette zu verwenden, wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter – Werte für die roten, grünen und blauen Komponenten und einen optionalen Alpha-Kanal-Wert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0 % bis 100 % sein oder das Schlüsselwort `none`, was in diesem Fall `0` entspricht.

- `alpha`

  - : Der Alpha-Kanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig), oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50 % undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}} Farbfunktionsreferenz für mehr Informationen zur RGB-Funktionalnotation.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbmodell-Farbrad — enthalten, beinhalten die `srgb` Farb-Funktionen `hsl()` und `hwb()`, die `lch()` Funktion von CIElab und die `oklch()` Farb-Funktion von OKLab. Diese Farb-Funktionen sind intuitiver, da uns der Farbton ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionalnotation

Die `hsl()` CSS-Farb-Funktion war die erste farbtonbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Auswirkung von Veränderungen in Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen, als bestimmte Farben über Rot-, Grün- und Blaukanal-Werte zu deklarieren. Darüber hinaus ähnelt HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbwähler in Photoshop, der für viele Menschen sofort vertraut war, als er erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farb-Funktionen sind beide zylindrisch. Der Farbton definiert die Farbe als [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen [Farbrad](/de/docs/Glossary/color_wheel). Das folgende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe entlang einer Skala zwischen komplett graustufig und der maximal möglichen Menge des gegebenen Farbtons liegt.
Je höher der Helligkeitswert, desto mehr wandelt sich die Farbe von der dunkelsten zur hellsten möglichen Farbe (von schwarz nach weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbtonkomponente (`H`) einer HSL- (oder HWB-) Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann über Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, was der Grundfarbton der Farbe ist, aber er bestimmt nicht, wie lebendig oder matt oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) Komponente der Farbe spezifiziert den Prozentsatz der endgültigen Farbe, die aus dem angegebenen Farbton besteht, wobei 100 % vollständig gesättigt und 0 % ein völliger Mangel an Farbe (Graustufen) sind. Die Helligkeit (`L`) Komponente spezifiziert, wie hell die Farbe auf einer gleitenden Skala zwischen komplett schwarz (`0%`) und komplett weiß (`100%`) ist. Sie können auch optional einen Alpha-Kanal einschließen, der durch einen Schrägstrich (`/`) vorangestellt ist, um die Farbe weniger als 100 % undurchsichtig zu machen.

Hier sind einige Beispiel-Farben in HSL Notation:

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

{{EmbedLiveSample("HSL-Funktionalnotation", 300, 200)}}

Der letzte Wert ist halbtransparent; er enthält den optionalen Alpha-Wert, dem ein Vorwärtsschrägstrich vorausgeht.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB-Funktionalnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb-Funktion verwendet das gleiche Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` rot ist. Anstatt jedoch `hsl()`'s Helligkeit und Sättigung zu verwenden, spezifizieren `hwb()`-Funktionen Weißheit (`W`) und Schwärze (`B`). Diese Funktion ist auch ziemlich intuitiv – sie erlaubt es Ihnen, einen Farbton auszuwählen und dann Mengen von Weiß und/oder Schwarz zu mischen, um die gewünschte Farbe zu erzielen.

Die `W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100 % (oder `1`) oder mehr erreicht, wird die Farbe grau, ähnlich wie bei der Einstellung von `s` auf `0%` mit `hsl()`. Wie bei `hsl()`, kann optional ein Alpha-Wert eingeschlossen werden, dem ein Schrägstrich `/` vorausgeht.

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

In den folgenden Beispielen setzen wir die gleichen Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen jedem Farbton Weißheit und Schwärze über `hwb()` statt Sättigung und Helligkeit hinzu:

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

{{EmbedLiveSample("HWB-Funktionalnotation", 300, 200)}}

### LCH und OKLCH: CIELAB- und Oklab-Farbräume

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen wesentlichen Nachteil. Mit diesen Funktionen hat jeder vollgesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber so funktioniert weder die menschliche Sicht noch Monitore. Weiße Schrift auf vollgesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber dieselbe Schrift auf vollgesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern könnte die Augen Ihres Benutzers schädigen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben und nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne dass der Text unlesbar wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können. CIE Lab Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch unter Verwendung zusätzlicher numerischer Optimierungsschritte aufgebaut ist, sodass die Werte als genauer angesehen werden als CIELAB. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgetreu gleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erläutert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Wert (entlang der `a`-Achse) und Gelb/Blau-Wert (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich zu den sRGB-Farbton-Farbfunktionen ist der Farbwert (`h`) bei `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>` Winkel der Farbe darstellt. Die Farben an jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

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

Sie können bemerken, wie die Helligkeit der letzteren Gradienten gleichmäßiger über das Spektrum der Farbtöne ist als der sRGB-Gradient. Wählen Sie das Kontrollkästchen im obigen Beispiel aus, um den Farbtongradienten in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blautöne in CIE Lab länger ist als in den beiden anderen. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blautöne-Verteilung ist aufgrund eines Fehlers, der das Chroma und die Helligkeit von Farbwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum behoben und daher in der `oklch()`-Farbnomenklatur.

Wie oben diskutiert, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `Helligkeit` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das völlige Fehlen von Helligkeit, was schwarz ist, darstellt.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder die "Menge an Farbe". Dies ähnelt dem `S` Sättigungswert der `hsl()` Farb-Funktion. Der Wert `0` ist das völlige Fehlen von Chroma oder Sättigung; das Ergebnis ist ein Grauton zwischen weiß und schwarz, je nach Helligkeitswert. Die Zahlwerte sind theoretisch unbeschränkt, wobei `100%` gleich `150` für `lch()` und `0.4` für `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alpha-Transparenzwert, dem ein Schrägstrich (`/`) vorausgeht.

Das folgende Beispiel zeigt den Effekt der Änderung des Helligkeitswerts in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) Funktionalnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsen-Wert (`a`), einen Blau/Gelb-Achsen-Wert (`b`) und einen optionalen Alpha-Transparenzwert angeben.

Ähnlich zu `lch()` und `oklch()`, ist die `Helligkeit` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` komplett schwarz und `100%` komplett weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` komplett schwarz und `1`/`100` komplett weiß ist.

Der `a`-Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die definiert, wie grün (bewegt sich Richtung -100%) oder rot (bewegt sich Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte zulassend) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Limits setzen können. In der Praxis können die Werte ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert unterliegt den gleichen Einschränkungen. Er bestimmt die Entfernung der Farbe entlang der b-Achse im Farbraum, die definiert, wie blau (bewegt sich Richtung -100%) oder gelb (bewegt sich Richtung +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Effekte des Variierens der `a`-Achse über eine `lab()`-Funktion und der `b`-Achse über eine `oklab()`-Funktion.

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

## Zusätzliche funktionale Notationen für Farben

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit größeren Farb-[Gamuts](/de/docs/Glossary/Gamut) zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB-Farbbeschreibungen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen viel breiteren Farb-Gamut unterstützt. Infolgedessen wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben die ausgegebene Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode zurückgegeben wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()`, und `rgb()` Farb-Funktionen in `color()` im `srgb` Farbraum zu sehen, schauen Sie sich unser [Farbauswahl-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede oben aufgeführte Farbfunktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementen zu bestehenden Farben — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbkorrekturen. Sehen Sie sich jede Farbfunktionsseite an, um mehr über ihre relativen Syntaxe zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe die ausgegebene Farbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte jeder der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum nach einem bestimmten Anteil zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die zur Verwendung in hellen und dunklen Farbschemata bestimmt sind. Welche eingestellt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer es angefordert hat. Dies ist eine Shortcut-Funktion, die es Ihnen ermöglicht, dieselben Ergebnisse zu erzielen wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
