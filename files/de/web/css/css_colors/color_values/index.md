---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Um eine Farbe in CSS zu nutzen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem man die Farbe in Komponenten zerlegt, wie z.B. Mengen verschiedener Primärfarben, die miteinander gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, unabhängig davon, wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie man aus einem Farbraum verfügbare Farben erzeugt. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der Farbraum `sRGB` des RGB-Farbmodells — der standardmäßige Rot-, Grün- und Blauraum — wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System, das Farben gruppiert, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt in Bezug darauf, wie viele Farben sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt, die sich mit zunehmenden Fähigkeiten erweiterten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir nun auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Spektrum")}} von Farben bieten. Wir können Farben in CSS nun auf verschiedene Weise beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen vor. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Menge von Standardfarbnamen, die es Ihnen ermöglicht, Schlüsselwörter anstelle von numerischen Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein simplerer, wenn auch eingeschränkter Ansatz — es gibt möglicherweise kein Schlüsselwort, das genau die Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Graustufen (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) sowie eine Vielzahl anderer gemischter Farben, darunter `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind dem sRGB (`srgb`) Farbraum zugeordnet.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbenauswahl widerspiegeln, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wurde.

Alle Farb-Schlüsselwörter sind nicht case-sensitiv. Siehe den {{cssxref("named-color")}}-Datentyp für weitere Informationen zu Farb-Schlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptmöglichkeiten, eine {{Glossary("RGB", "RGB")}} Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind dem sRGB (`srgb`) Farbraum zugeordnet. Sie ermöglichen jedoch die Spezifizierung eines viel breiteren Farbbereichs.

### Hexadezimale Zeichenfolgennotation

Hexadezimale (hex) Zeichenfolgennotation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgennotation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine voll opake Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr` ist, die Grünkomponente `0xgg` und die Blaukomponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchsichtiger wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten jeweils als zweistellige hexadezimale Werte dargestellt werden, die eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder einen einstelligen hexadezimalen Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`) darstellen.

> [!NOTE]
> Das führende `0x` in den obigen Werten zeigt einen hexadezimalen Integer-Literal an. Hexadezimale Integer können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn gezeichnet.

Um die Werte auf 25% opak zu setzen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenfolgennotation für Farben finden Sie im {{cssxref("hex-color")}}-Datentyp.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website es dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichnungs-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer ermöglichen, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben Ordnern oder Elementen zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahlsteuerungselement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Wahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbauswahlsteuerungselement (mit einem Label, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element enthält, in dem wir den Farbwert mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Farbe des Rahmens, um mit dem anfänglichen Wert des Farbwählers übereinzustimmen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe des Feldes, um mit dem aktuellen Wert des Farbwählers übereinzustimmen.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwählers endgültig ist. Wir reagieren, indem wir den Inhalt des `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

Die RGB-Funktionsnotation (Red/Green/Blue), ähnlich der hexadezimalen Zeichenfolgennotation, stellt Farben durch ihre Rot-, Grün- und Blaukomponenten dar (und optional eine Alphakanalkomponente für Deckkraft). Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blaukomponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (inklusive), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, was in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) spezifiziert.

Zum Beispiel kann ein helles Rot, das zu 50% opak ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farb-Funktionen mit einer Farbkomponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbkreis des Farbmodells — beinhalten die `srgb`-Farbfunktionen `hsl()` und `hwb()`, die `lch()`-Funktion von CIElab und die `oklch()`-Funktion von OKLab. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farbe Funktion war die erste farbbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung der Variation von Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) Werten zu bestimmen, als spezifische Farben durch Rot-, Grün- und Blaukanalwerte zu deklarieren. Darüber hinaus ähnelt HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbwähler in Photoshop, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farbfunktionen sind zylindrisch. Der Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala zwischen vollständig Graustufen und dem maximal möglichen Anteil des gegebenen Farbtons liegt.
Da der Wert der Helligkeit zunimmt, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung des Benutzers [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta verläuft, bevor er wieder bei Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radianten (`rad`), Gon (`grad`) oder Turns (`turn`). Der Farbtonwert identifiziert, was der Grundton der Farbe ist, aber er steuert nicht, wie lebendig oder stumpf oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt ist und 0% ein vollständiger Mangel an Farbe (Graustufen) ist. Die Helligkeit (`L`) gibt an, wie hell die Farbe entlang einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können optional auch einen Alphakanal einschließen, der durch einen Schrägstrich (`/`) vorangestellt wird, um die Farbe weniger als 100% opak zu machen.

Hier sind einige Farb-Beispiele in HSL-Notation:

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

Der letzte Wert ist halb-opak; er enthält den optionalen Alphawert, der durch einen Vorwärts-Schrägstrich vorangestellt wird.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farbe Funktion verwendet dasselbe Farbtokoordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt jedoch `hsl()`s Helligkeit und Sättigung zu verwenden, spezifizieren `hwb()`-Funktionen Weißanteil (`W`) und Schwarzanteil (`B`). Diese Funktion ist ebenfalls recht intuitiv — sie ermöglicht es Ihnen, einen Farbton zu wählen und dann Mengen Weiß und/oder Schwarz zu mischen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr beträgt, ist die Farbe grau, ähnlich dem Setzen von `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann ein optionaler Alphawert eingefügt werden, der durch einen Vorwärts-Schrägstrich `/` vorangestellt wird.

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

In den untenstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()` Beispielen, aber wir fügen jedem Farbton mit `hwb()` Weiß- und Schwarzanteil hinzu, anstatt Sättigung und Helligkeit:

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

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber so funktioniert menschliche Sicht oder Monitore nicht. Weißer Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern könnte auch die Augen Ihrer Benutzer schmerzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben und nicht zur menschlichen Wahrnehmung. Tatsächlich haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne Text unlesbar zu machen? Sie können dies mit Farb-Funktionen in den CIELAB und Oklab Farbräumen tun.

Die CIELAB und Oklab Farbräume repräsentieren das gesamte Spektrum der Farben, die der Mensch sehen kann. CIE lab Farb-Funktionen beinhalten [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farb-Funktionen beinhalten [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle besteht darin, dass sie uniform sind, sodass eine gegebene Distanz zwischen zwei Punkten im Farbraum für den Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch unter Verwendung zusätzlicher numerischer Optimierungsschritte aufgebaut ist, sodass die Werte als genauer als CIELAB angesehen werden. Aufgrund dieser Optimierung sind Farbtöne wahrgenommener gleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter besprochen. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Wert (entlang der `a`-Achse) und Gelb/Blau-Wert (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen besteht darin, dass die "Helligkeit" die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie die sRGB-Farbton Farb-Funktionen, ist der Farbton (`h`) Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>` Winkel der Farbe darstellt. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB-, CIELAB- (genutzt von `lch()`)- und Oklab- (genutzt von `oklch()`) Farbräumen.

Die folgenden Gradienten demonstrieren die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab Farbräumen:

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

Sie werden vielleicht bemerken, dass die Helligkeit der letzteren Gradienten gleichmäßiger im gesamten Spektrum der Farbtöne als im sRGB-Gradienten ist. Wählen Sie das Kontrollkästchen im obigen Beispiel, um den Farbtongradienten in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, dass die Verteilung der Blautöne in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blauspanne ist aufgrund eines Fehlers, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab Farbraum behoben und daher auch in der `oklch()` Farbnotation.

Wie oben diskutiert, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, eine `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` der vollständige Mangel an Helligkeit ist, was Schwarz bedeutet.

Das `C` ist eine `<number>`, ein `<percentage>` oder das Schlüsselwort `none` (entspricht `0%`), das das Chroma der Farbe ist, oder die "Menge der Farbe". Dies ähnelt dem `S` Sättigungswert der `hsl()` Farb-Funktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; was in einem Grauton zwischen Weiß und Schwarz (inklusiv), je nach Helligkeitswert resultiert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie die anderen Farb-Funktionen gibt es auch einen optionalen Alpha-Transparenzwert, der durch einen Schrägstrich (`/`) vorangestellt wird.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktionalnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die der Mensch sehen kann, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert spezifizieren.

Ähnlich wie `lch()` und `oklch()`, ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist eine `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der a-Achse im Farbraum, die definiert, wie grün (sich Richtung -100% bewegend) oder rot (sich Richtung +100% bewegend) die Farbe ist.

Beachten Sie, dass diese Werte vorzeichenbehaftet (sowohl positive als auch negative Werte erlaubend) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Limits setzen können. In der Praxis können Werte jedoch nicht ±160 oder ±0.5 überschreiten.

Der `b`-Wert hat die gleichen Einschränkungen. Er spezifiziert die Entfernung der Farbe entlang der b-Achse im Farbraum, die definiert, wie blau (sich Richtung -100% bewegend) oder gelb (sich Richtung +100% bewegend) die Farbe ist.

Das folgende Beispiel zeigt die Auswirkungen der Var anzierenden der `a` Achse über eine `lab()`-Funktion und der `b` Achse über eine `oklab()`-Funktion.

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

## Zusätzliche Farbfunktions-Notationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit einem breiteren Farbspektrum ({{Glossary("Gamut", "gamuts")}}) zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe anzeigen wollten, die außerhalb des sRGB-Farbspektrums liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden.

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB Farbnotationen, die oben diskutiert wurden — `hsl()`, `hwb()`, und `rgb()` — drücken nicht das volle Spektrum der sichtbaren Farben aus, während die `color()` Funktion ein viel breiteres Farbspektrum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben, die Ausgabefarbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode zurückgegeben wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()`, und `rgb()` Farb-Funktionen in `color()` im `srgb`-Farbraum zu sehen, testen Sie unser [Farbwähler-Werkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool).

### Relativfarben

Jede der oben aufgeführten Farbfunktionsnotierungen kann zur Definition von [**Relativfarben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet werden, was es ermöglicht, dass {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben definiert werden, statt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Ergänzungen zu bestehenden Farben — wie z.B. hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten eine effektive Möglichkeit zur Erstellung von Paletten und zur Definition von Farbkorrekturen. Siehe die jeweilige Seite der Farbfunktionsseite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer Relativfarbe, die Ausgabefarbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte unabhängig von der oben genannten Syntax, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihres Mischens in einem gegebenen Farbraum in einer bestimmten Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft zu spezifizieren, die für die Verwendung in hellen und dunklen Farbdesigns bestimmt ist. Welcher gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein solches anfordert. Dies ist eine Kurzbefehlsfunktion, die Ihnen erlaubt, dieselben Ergebnisse zu erzielen wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medien-Abfrage, jedoch mit weniger Code.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung von Relativfarben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verstehen von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbemodul](/de/docs/Web/CSS/CSS_colors)
