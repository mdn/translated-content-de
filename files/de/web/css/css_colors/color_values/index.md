---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, müssen Sie eine Möglichkeit finden, das analoge Konzept der "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies erfolgt typischerweise, indem die Farbe in Komponenten zerlegt wird, wie z.B. Mengen von verschiedenen Primärfarben, die zusammengemischt werden sollen, oder Helligkeit und Farbton. Definierte Farbmodelle sorgen dafür, dass Farben unabhängig davon, wo sie gerendert werden, gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der Standard-Farbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, damit die Beschreibung einer beliebigen Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore in Bezug darauf, wie viele Farben sie rendern konnten, begrenzt, und CSS-Farben waren durch diese Einschränkungen begrenzt, erweiterte sich jedoch mit der Verbesserung der Möglichkeiten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir nun auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel größeres {{Glossary("gamut", "Farbenspektrum")}} bieten. Wir können Farbe in CSS jetzt auf mehrere Arten beschreiben und die Optionen werden ständig erweitert.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von standardmäßigen Farbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz — es gibt möglicherweise kein Schlüsselwort, das die exakte Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}} Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben wie `accentcolortext` und `buttonface`, die die Standardfarbauswahlen wiedergeben, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wurden.

Alle Farb-Schlüsselwörter sind nicht empfindlich gegenüber Groß- und Kleinschreibung. Weitere Informationen zu Farb-Schlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptmethoden, um eine {{Glossary("RGB", "RGB")}} Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie ermöglichen jedoch eine viel größere Bandbreite an Farben.

### Hexadezimales String-Notation

Die hexadezimale (Hex) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente umfassen: den Alphakanal (oder die Transparenz).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht empfindlich gegenüber Groß- und Kleinschreibung.

- `"#rrggbb"`

  - : Gibt eine vollständig deckende Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transluzenter wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transluzenter wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweihex-Stellenwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) darstellt oder als einzelnes Hex-Zeichen (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das vorangestellte `0x` in den obigen Werten gibt ein hexadezimales Integer-Literal an. Hexadezimale Integer können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die Einzeldigit-Notation verwenden, wird die endgültige Farbe berechnet, indem jedes Komponenten-Digit zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25% transparent zu machen, fügen Sie den Alphakanalwert hinzu, wie unten gezeigt:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}} Datentyp für weitere Informationen zur hexadezimalen String-Notation für Farben.

#### HTML Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Webseite dem Benutzer die Möglichkeit geben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichenanwendung. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer die Möglichkeit geben, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben Ordnern oder Elementen zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Element/input#type), der ein Farbauswahlsteuerungselement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbauswahlsteuerungselement (mit einem Label, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element enthält, in das wir den Wert der Farbe mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Farbe des Rahmens, um dem Anfangswert des Farbauswahlwerkzeugs zu entsprechen, und fügt dem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) Element zwei Ereignishandler hinzu, um auf Änderungen des Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert, d.h. jedes Mal, wenn der Benutzer die Farbe im Farbauswahlwerkzeug anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Rahmenfarbe der Box so, dass sie dem aktuellen Wert des Farbauswahlwerkzeugs entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbauswahlwerkzeugs finalisiert wird. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den Zeichenkettenwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

Die RGB (Rot/Grün/Blau) Funktionsnotation, ähnlich der hexadezimalen String-Notation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten (und optional einer Alphakanal-Komponente für die Transparenz) dar. Anstelle einer Zeichenkette wird die Farbe jedoch mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentenvoraussetzungen und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100%, oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`

  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (voll transparent) und `100%` (voll deckend) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% transparent ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}} Farb-Funktion für weitere Informationen über die RGB-Funktionsnotation.

## Farbfunktionen mit einem Farbton-Komponenten

Die Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/angle) von dem Farbmodell's {{Glossary("color_wheel", "Farbkreis")}} — umfassen die `srgb` Farbfunktionen `hsl()` und `hwb()`, die `lch()` Funktion von CIElab sowie die `oklch()` Farbfunktion von OKLab. Diese Farbfunktionen sind eher intuitiv, da der Farbton uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farb-Funktion war die erste auf einem Farbton basierende Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Auswirkung von Variationen des Farbtons (`h`), der Sättigung (`s`) und der Helligkeit (`l`) zu bestimmen, als bestimmte Farben über die Rot-, Grün- und Blaukanal-Werte zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbwähler in Photoshop ähnlich, was es sofort für viele User vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farbfunktionen sind beide zylindrisch. Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Die untenstehende Abbildung zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala von vollständig graustufig bis zur größtmöglichen Menge des gegebenen Farbtons ist.
Wenn der Wert der Helligkeit zunimmt, verändert sich die Farbe von der dunkelsten bis zur hellsten möglichen Farbe (von Schwarz nach Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Nutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbtonkomponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er wieder bei Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit spezifiziert werden, einschließlich Grad (`deg`), Radianten (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, was die Grundfarbe ist, kontrolliert aber nicht, wie lebendig oder langweilig oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, die aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt sind und 0% einen völligen Mangel an Farbe (Graustufen) bedeutet. Die Helligkeitskomponente (`L`) gibt an, wie hell die Farbe auf einer Skala von vollständig schwarz (`0%`) bis vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einfügen, vorangestellt von einem Schrägstrich (`/`), um die Farbe weniger als 100% deckend zu machen.

Hier sind einige Beispiel-Farben in der HSL-Notation:

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

Das letzte Beispiel ist halbtransparent; es enthält den optionalen Alphawert, vorangestellt von einem Schrägstrich.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbfunktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Jedoch spezifizieren `hwb()` Funktionen, anstatt mit `hsl()` Helligkeit und Sättigung, den Weißwert (`W`) und Schwarzwert (`B`). Diese Funktion ist auch ziemlich intuitiv und erlaubt es Ihnen, einen Farbton auszuwählen und dann eine Menge Weiß und/oder Schwarz zu mischen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau, ähnlich dem Setzen von `s` auf `0%` mit `hsl()`. Wie bei `hsl()`, kann ein optionaler Alphawert inkludiert werden, vorangestellt von einem Schrägstrich `/`.

Hier sind einige Beispiele, die die HWB-Notation verwenden:

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

In den folgenden Beispielen stellen wir die gleichen Farbtöne wie in den `hsl()` Beispielen ein, aber wir fügen Weiß und Schwarz zu jedem Farbton über `hwb()` hinzu, anstatt Sättigung und Helligkeit:

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

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen wesentlichen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht, wie das menschliche Auge oder Monitore funktionieren. Weißer Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber dieser gleiche Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern kann auch die Augen Ihrer Nutzer schädigen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In der Realität haben nicht alle Farbtöne die gleiche max Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal auf einer Seite ändern könnten, ohne dass Text unleserlich wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Spektrum der Farben, die der Mensch sehen kann. CIE Lab Farbfunktionen beinhalten [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farbfunktionen beinhalten [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, so dass ein bestimmter Abstand zwischen zwei Punkten im Farbraum für den Betrachter gleichermaßen unterschiedlich erscheint. Oklab ist ein Farbraum, der denselben Modus verwendet wie CIELAB, aber durch zusätzliche numerische Optimierungsschritte erstellt wurde, daher werden die Werte als genauer betrachtet als CIELAB. Aufgrund dieser Optimierung sind Farbtöne gleichmäßiger wahrnehmbar.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter beschrieben. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Achsen-Wert (die `a`-Achse) und einen Blau/Gelb-Achsen-Wert (die `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die „Helligkeit“ die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB Farben-Farbfunktionen ist der Farbwert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>`-Winkel der Farbe darstellt. Die Farben an jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe demonstrieren die Farbwert bei jedem Winkel von `0deg` bis `360deg` in den sRGB, CIE Lab und OKlab Farbräumen:

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

Sie können bemerken, wie die Helligkeit der späteren Verläufe gleichmäßiger über das Spektrum der Farbwerte ist, verglichen mit dem sRGB-Verlauf. Wählen Sie das Kontrollkästchen im obigen Beispiel aus, um den Farbverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, wie die Ausbreitung der Blautöne in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die Ausbreitung der blauen Farbe in `lch()` ist auf einen Fehler zurückzuführen, der die Chroma und Helligkeit der Farbwert zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab Farbraum behoben und daher die `oklch()` Farbdarstellung.

Wie oben beschrieben, ist der Farbwert (`H`) in der `lch()` und `oklch()` Funktionen ein `<angle>`, `number` oder das Schlüsselwort `none`. Die Helligkeit ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das vollständige Fehlen von Helligkeit bedeutet, was schwarz ist.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder die "Menge an Farbe". Dies ist ähnlich dem `S` Sättigungswert der `hsl()` Farbfunktion. Der Wert `0` ist das vollständige Fehlen von Chroma oder Sättigung; was zu einem Grau zwischen Weiß und Schwarz einschließlich führt, abhängig von der Helligkeitswert. Die Zahlenwerte sind theoretisch unbeschränkt, wobei `100%` gleichbedeutend ist mit `150` für `lch()` und `0.4` für `oklch()`.

Wie die anderen Farbfunktionen gibt es auch hier einen optionalen Alpha-Transparenzwert, vorangestellt von einem Schrägstrich (`/`).

Das folgende Beispiel zeigt die Auswirkungen der Änderung des Helligkeitswerts in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die der Mensch sehen kann, indem sie die Lichtstatus (`L`), einen Rot/Grün-Achsen-Wert (`a`), einen Blau/Gelb-Achsen-Wert (`b`) und einen optionalen Alphatransparenzwert spezifizieren.

Ähnlich wie bei `lch()` und `oklch()` ist die `Helligkeit` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz ist und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz ist und `1`/`100` vollständig weiß ist.

Der `a` Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt an, wie weit die Farbe entlang der a-Achse im Farbraum ist, was definiert, wie grün (in Richtung -100%) oder rot (in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte erlaubend) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen einstellen können. In der Praxis dürfen die Werte nicht über ±160 oder ±0.5 hinausgehen.

Der `b` Wert hat dieselben Einschränkungen. Er gibt an, wie weit die Farbe entlang der b-Achse im Farbraum ist, was definiert, wie blau (in Richtung -100%) oder gelb (in Richtung +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen der Veränderung der `a` Achse über eine `lab()` Funktion und der `b` Achse über eine `oklab()` Funktion.

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

## Zusätzliche Farb-Funktionsnotationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit größeren Farbspektren zu beschreiben.
Wenn Sie zum Beispiel die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB Spektrums liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, es zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es zu relativen Farben kommt, die als nächstes besprochen werden. Die älteren sRGB Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()` Funktion ein viel breiteres Farbspektrum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition von relativen Farben die Ausgabefarbe durch die Abfrage von [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode ein `color(srgb ...)` Wert sein.

Um ein Beispiel zur Umwandlung der `hsl()`, `hwb()`, und `rgb()` Farbfunktionen in `color()` im `srgb` Farbraum zu sehen, schauen Sie sich unser [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede der oben gelisteten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, was es ermöglicht, {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen existierenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Ergänzungen zu bestehenden Farben – wie leichtere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbänderungen. Siehe jede Farbfunktionsseite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe die Ausgabefarbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte jeder Syntax, die oben erwähnt ist, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis des Mischens dieser in einem gegebenen Farbraum durch einen gegebenen Betrag zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion erlaubt es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die in hellen und dunklen Farbschemata genutzt werden sollen. Welche gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema gesetzt hat oder ob der Nutzer ein solches angefragt hat. Dies ist eine Abkürzungs-Funktion, mit der dieselben Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienspezifikation erreicht werden können, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise einsetzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
