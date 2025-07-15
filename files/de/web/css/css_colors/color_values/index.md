---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem die Farbe in Komponenten zerlegt wird, wie z. B. Mengen verschiedener Primärfarben zum Mischen oder Helligkeit und Farbton. Definierte Farbmodelle sorgen dafür, dass Farben unabhängig von ihrem Verwendungsort gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe numerischer Werte darstellt. Farbmodelle beschreiben, wie man die verfügbaren Farben innerhalb eines Farbraums erstellt. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der Standard-Farbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zum Gruppieren von Farben, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore hinsichtlich der Anzahl der darstellbaren Farben eingeschränkt, und CSS-Farben waren durch diese Einschränkungen begrenzt, die mit steigenden Fähigkeiten erweitert wurden. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren, was eine viel breitere {{Glossary("gamut", "Farbskala")}} bietet. Wir können nun Farbe in CSS auf verschiedene Arten beschreiben, und die Optionen werden ständig erweitert.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzen.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzter Ansatz — es kann sein, dass es kein Schlüsselwort gibt, das genau die Farbe repräsentiert, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Graustufen (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl von anderen Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl des Benutzers, Browsers oder Betriebssystems widerspiegeln.

Alle Farb-Schlüsselwörter sind nicht zwischen Groß- und Kleinschreibung unterscheidend. Siehe den {{cssxref("named-color")}}-Datentyp für weitere Informationen zu Farb-Schlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptmethoden, um eine {{Glossary("RGB", "RGB")}}-Farbe in ihren Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert. Sie erlauben jedoch eine viel breitere Palette von Farben.

### Hexadezimale String-Notation

Die hexadezimale (hex) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente umfassen: den Alphakanal (oder die Transparenz).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farb-Codes. Der String ist nicht zwischen Groß- und Kleinschreibung unterscheidend.

- `"#rrggbb"`
  - : Gibt eine vollständig deckende Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal ist durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal ist durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten als Doppelstellen-hexadezimalwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) repräsentiert oder als Einzelstellen-hexadezimalwert (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das führende `0x` in den oben genannten Werten zeigt ein hexadezimales Zahl-Literal an. Hexadezimale Zahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- bzw. Kleinschreibung eines Zeichens ändert nicht seinen Wert. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern spezifiziert werden. Wenn Sie die Einzelstellen-Notation verwenden, wird die endgültige Farbe berechnet, indem die Ziffer jeder Komponente verdoppelt wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25% deckend zu machen, geben Sie den Alphakanalwert wie unten gezeigt an:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}}-Datentyp für mehr Informationen zur hexadezimalen String-Notation für Farben.

#### Farbeingabetyp in HTML

Es gibt viele Situationen, in denen Ihre Website dem Benutzer erlauben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe zu wählen. Oder vielleicht erlaubt Ihre App dem Benutzer, Farben Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahl-Steuerelement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wird, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt eine Box, die ein Farbauswahl-Steuerelement enthält (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element, in das wir den Wert der Farbe mit JavaScript ausgeben. Der Farbwert des Eingabefeldes ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Farbe der Umrandung so, dass sie mit dem aktuellen Wert des Farbauswahlwerkzeugs übereinstimmt. Dann fügt es zwei Event-Handler dem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen des Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbauswahlwerkzeug anpasst. Jedes Mal, wenn dieses Ereignis eintritt, setzen wir die Umrandungsfarbe der Box so, dass sie dem aktuellen Wert des Farbauswahlwerkzeugs entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert im Farbauswahlwerkzeug endgültig festgelegt wurde. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB-funktionale Notation

Die RGB (Rot/Grün/Blau)-funktionale Notation, ähnlich der hexadezimalen String-Notation, stellt Farben durch ihre Rot-, Grün- und Blaukomponenten (und optional eine Alphakanal-Komponente für Transparenz) dar. Anstelle eines Strings wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blaukomponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (inklusive), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentwert zwischen `0%` (voll transparent) und `100%` (voll deckend) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% deckend ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}}-Funktion für mehr Informationen über die RGB-funktionale Notation.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbmodell auf einem {{Glossary("color_wheel", "Farbkreis")}} — haben, schließen die `srgb`-Farbfunktionen `hsl()` und `hwb()`, CIElabs `lch()`-Funktion und OKLabs `oklch()`-Farb-Funktion ein. Diese Farbfunktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-funktionale Notation

Die `hsl()`-CSS-Farb-Funktion war die erste farbtonbasierte Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von Variationen des Farbtons (`h`), der Sättigung (`s`) und der Helligkeit (`l`) zu bestimmen, als spezifische Farben durch rote, grüne und blaue Kanalwerte zu deklarieren. Darüber hinaus ähnelt HSL dem HSB-Farbpicker (Farbton, Sättigung und Helligkeit) in Photoshop, was es vielen Menschen sofort vertraut machte, als es zum ersten Mal unterstützt wurde.

Die `hsl()`- und `hwb()`-sRGB-Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe auf einer Skala zwischen vollständig graustufig und maximal möglichem Farbton ist.
Mit zunehmendem Helligkeitswert verändert sich die Farbe vom dunkelsten zum hellsten möglichen Farbton (von schwarz nach weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung des Nutzers [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbtonkomponente (`H`) einer HSL- (oder HWB-) Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta geht und schließlich wieder bei Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert bestimmt, welche Grundfarbe die Farbe hat, kontrolliert jedoch nicht, wie lebendig oder langweilig oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe spezifiziert den Prozentsatz der endgültigen Farbe, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% ein völliges Fehlen von Farbe (Graustufen) darstellt. Die Helligkeitskomponente (`L`) spezifiziert, wie hell die Farbe auf einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einschließen, der von einem Schrägstrich (`/`) gefolgt wird, um die Farbe weniger als 100% deckend zu machen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird `deg` angenommen.

### HWB-funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` rot ist. Anstelle von `hsl()`-Helligkeit und Sättigung geben `hwb()`-Funktionen den Weißanteil (`W`) und den Schwarzwert (`B`) an. Diese Funktion ist ebenfalls recht intuitiv — Sie können einen Farbton auswählen und dann Mengen von Weiß und/oder Schwarz hinzufügen, um die gewünschte Farbe zu erzielen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie bei `hsl()` mit der Einstellung `s` auf `0%`. Wie bei `hsl()` kann ein optionaler Alphawert aufgenommen werden, dem ein Schrägstrich `/` vorangestellt wird.

Hier sind einige Beispiele für die Verwendung von HWB-Notation:

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

In den untenstehenden Beispielen setzen wir die gleichen Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen Weiß- und Schwarzwert zu jedem Farbton über `hwb()` statt Sättigung und Helligkeit hinzu:

```css hidden live-sample___hwb_functional_notation
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

### LCH und OKLCH: CIELAB- und Oklab-Farbräume

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder vollgesättigte Farbton-Winkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das ist nicht so, wie menschliches Sehen oder Monitore funktionieren. Weißer Text auf vollgesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf vollgesättigtem Gelb (`hsl(60deg 100% 50%)`) ist nicht nur unlesbar, sondern kann die Augen des Benutzers schmerzen. Bei diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farben dieselbe maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Webseite ändern könnten, ohne den Text unlesbar zu machen? Sie können dies mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen tun.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Farbspektrum, das der Mensch sehen kann. CIE Lab-Farbfunktionen beinhalten [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab-Farbfunktionen beinhalten [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Das Hauptmerkmal dieser Modelle ist, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch mit zusätzlichen numerischen Optimierungsschritten erstellt wurde, sodass die Werte als genauer angesehen werden als CIELAB. Aufgrund dieser Optimierung sind Farben perceptual uniformer.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`), die in diesem Abschnitt weiter besprochen werden. Die [`lab()` und `oklab()`](#lab_und_oklab)-Funktionen funktionieren anders, indem sie die Helligkeit (`L`), die Rot/Grün-Wertigkeit (entlang der `a`-Achse) und die Gelb/Blau-Wertigkeit (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" die wahrgenommene Helligkeit ist; es handelt sich um die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht um die Helligkeit im Vergleich zu anderen Farben.

Ähnlich den sRGB-Farbfunktionen mit Farbton ist der Farbtonwert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>`-Winkel der Farbe repräsentiert. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbraum.

Die folgenden Verläufe demonstrieren die Farbtonfarben bei jedem Winkel vom `0deg` bis `360deg` in den sRGB-, CIE-Lab- und OKlab-Farbräumen:

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

Sie bemerken vielleicht, dass die Helligkeit der letzteren Verläufe gleichmäßiger über das gesamte Spektrum der Farbtöne verteilt ist als der sRGB-Gradient. Wählen Sie das Kontrollkästchen im obigen Beispiel aus, um den Farbton-Gradienten in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blautöne in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blautonverteilung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit der Farbtonwerte zwischen `270grad` und `330grad` verschiebt. Dies wurde im Oklab-Farbraum gelöst und daher die `oklch()`-Farbschreibweise.

Wie oben besprochen, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die Helligkeit ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` ein völliger Mangel an Helligkeit sind, was schwarz entspricht.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`), das das Chroma oder die "Menge an Farbe" der Farbe ist. Dies entspricht dem `S`-Sättigungswert der `hsl()`-Funktion. Der Wert `0` ist ein völliger Mangel an Chroma oder Sättigung; dies führt zu einem Grau zwischen Weiß und Schwarz inklusive, abhängig von dem Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` `150` für `lch()` und `0.4` für `oklch()` entsprechen.

Wie bei den anderen Farbfunktionen gibt es auch hier einen optionalen Alphatransparenzwert, dem ein Schrägstrich (`/`) vorangeht.

Das Beispiel unten zeigt die Auswirkungen der Änderung des Helligkeitswertes in den `lch()`- und `oklch()`-Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren das gesamte Farbspektrum, das Menschen sehen können, indem sie die Helligkeit (`L`) der Farbe, einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alphatransparenzwert angeben.

Ähnlich zu `lch()` und `oklch()`, sind die Helligkeiten entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig Schwarz und `100%` vollständig Weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig Schwarz ist und `1`/`100` vollständig Weiß.

Der `a`-Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert gibt an, wie weit die Farbe entlang der a-Achse im Farbraum ist, was bestimmt, wie grün (bewegend in Richtung -100%) oder rot (bewegend in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen haben (positive und negative Werte erlauben) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen angeben können. In der Praxis können die Werte ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert hat dieselben Einschränkungen. Er bestimmt den Abstand der Farbe entlang der b-Achse im Farbraum, was definiert, wie blau (bewegend in Richtung -100%) oder gelb (bewegend in Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Auswirkungen der Variation der `a`-Achse über eine `lab()`-Funktion und der `b`-Achse über eine `oklab()`-Funktion.

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

## Zusätzliche funktionale Farbnothationen

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farb{{Glossary("Gamut", "gamuts")}} zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1`-Farbe anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut)-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes behandelt werden. Die älteren sRGB-Farbnotationsmethoden, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum sichtbarer Farben aus, während die `color()`-Funktion einen viel breiteren Farbgamut unterstützt. Infolgedessen wird beim Verwenden der älteren Funktionstypen zum Definieren relativer Farben, die Ausgabefarbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode zurückgegeben wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()`, und `rgb()`-Farbfunktionen zu `color()` im `srgb`-Farbraum zu sehen, schauen Sie sich unser [Farbpicker-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede oben aufgeführte Farbfunktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben zu definieren, anstatt bei jedem Mal einen Farbwert von Grund auf zu definieren. Diese leistungsstarke Funktion ermöglicht es, Ergänzungen zu bestehenden Farben zu erstellen — wie leichtere, dunklere, gesättigte, halbtransparente oder umgekehrte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbveränderungen. Siehe jede Farbfunktion Seite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, beim Verwenden von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe, wird die Ausgabefarbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte einer der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihres Mischens in einem gegebenen Farbraum zu einem gegebenen Anteil zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion erlaubt Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen und dunklen Farbthemen gedacht ist. Welcher verwendet wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbthema festgelegt hat oder der Benutzer eines angefordert hat. Dies ist eine Abkürzungsfunktion, die es Ihnen ermöglicht, die gleichen Ergebnisse zu erzielen wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienmerkmalabfrage, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farb-Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
