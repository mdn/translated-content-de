---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Um in CSS eine Farbe darzustellen, müssen Sie einen Weg finden, das analoge Konzept der "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies wird typischerweise dadurch erreicht, dass die Farbe in Komponenten zerlegt wird, wie z. B. Mengen von verschiedenen Primärfarben, die zusammen gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben unabhängig davon, wo sie gerendert werden, gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe numerischer Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden können. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der standardmäßige Rot-, Grün- und Blau-Farbraum — wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System, um Farben zu gruppieren, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen umwandeln, sollte sie in beiden gleich aussehen.

Ursprünglich waren Monitore in ihrer Fähigkeit, Farben darzustellen, begrenzt, und CSS-Farben waren durch diese Beschränkungen eingeschränkt, die sich mit verbesserten Fähigkeiten erweiterten. Moderne Geräte sind nun nicht mehr auf RGB beschränkt, und wir haben jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren, die ein viel breiteres {{Glossary("gamut", "Gamut")}} von Farben bieten. Wir können jetzt Farbe in CSS auf verschiedene Weise beschreiben, und die Optionen erweitern sich stetig.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen vor. Für eine detailliertere Diskussion siehe die unten angegebenen Referenzen.

## Schlüsselwörter

Das Web definiert eine Reihe von standardmäßigen Farbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch eingeschränkter Ansatz — möglicherweise gibt es kein Schlüsselwort, das die genaue Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbauswahl widerspiegeln, die vom Benutzer, dem Browser oder dem Betriebssystem vorgenommen wurden.

Alle Farb-Schlüsselwörter sind nicht groß-/kleinschreibungssensitiv. Weitere Informationen zu Farb-Schlüsselwörtern finden Sie im {{cssxref("named-color")}}-Datentyp.

## RGB-Werte

Es gibt zwei Hauptmethoden, um eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — hexadezimal und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden. Sie ermöglichen jedoch die Spezifizierung eines breiteren Bereichs von Farben.

### Hexadezimale Zeichenfolgen-Notation

Die hexadezimale (hex) Zeichenfolgen-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente enthalten: den Alpha-Kanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgen-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farb-Codes. Die Zeichenfolge ist nicht groß-/kleinschreibungssensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig deckende Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistellige Hex-Werte dargestellt werden, die eine Zahl zwischen 0 (`00`) und 255 (`FF`) repräsentieren, oder als einstelliges Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das führende `0x` in den obigen Werten zeigt ein hexadezimales Ganzzahl-Literal an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Der Groß-/Kleinschreibungsmodus eines Zeichens ändert dessen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbwerte; beide sind rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellig-Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente-Ziffer doppelt verwendet wird; das heißt, `"#D"` wird beim Zeichnen zu `"#DD"`.

Um die Werte 25% deckend zu machen, fügen Sie den Alpha-Kanal-Wert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Für weitere Informationen zur hexadezimalen Zeichenfolgen-Notation für Farben sehen Sie sich den {{cssxref("hex-color")}}-Datentyp an.

#### HTML Input-Typ für Farben

Es gibt viele Situationen, in denen Ihre Website dem Benutzer erlauben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichenanwendung. Vielleicht haben Sie bearbeitbaren Text und müssen den Benutzer die Textfarbe auswählen lassen. Oder vielleicht lässt Ihre App den Benutzer Farben zuordnen zu Ordnern oder Elementen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farb-Auswahl-Control rendert.

In diesem Beispiel können Sie eine Farbe auswählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Kästchen mit einem Farb-Auswahl-Control (mit einem Label, das mithilfe des {{HTMLElement("label")}}-Elements erstellt wurde) und einem leeren {{HTMLElement("output")}}-Element, in das wir den Wert der Farbe mithilfe von JavaScript ausgeben. Der Wert des Farbeingabefeldes ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Farbe der Umrandung, um sie dem Anfangswert des Farb-Auswahlfeldes anzupassen, und fügt dem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element zwei Ereignishandler hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farb-Auswahlfeld anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Umrandungsfarbe des Kästchens auf den aktuellen Wert des Farb-Auswahlfeldes.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farb-Auswahlfeldes festgelegt ist. Wir reagieren, indem wir den Inhalt des `<output>` auf den String-Wert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Rot/Grün/Blau) Funktionsnotation, ähnlich der hexadezimalen Zeichenfolgen-Notation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten (und optional einer Alpha-Kanal-Komponente für die Deckkraft) dar. Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentwerte sowie einen optionalen Alpha-Kanal-Wert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich) sein, ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100%, oder das Schlüsselwort `none`, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alpha-Kanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder als eine Zahl zwischen `0.0` (entsprechend `0%`) und `1.0` (entsprechend `100%`) angegeben.

Beispielsweise kann ein helles Rot, das zu 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farbfunktionsnotationen mit Farbtonkomponente

Die Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente aufweisen — ein [`<angle>`](/de/docs/Web/CSS/angle) von dem Farbmodell's {{Glossary("color_wheel", "Farbkreis")}} — umfassen die `srgb`-Farbfunktionen `hsl()` und `hwb()`, CIElab's `lch()`-Funktion und OKLab's `oklch()`-Farbfunktion. Diese Farbfunktionen sind intuitiver, da der Farbton es ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()`-CSS-Farb-Funktion war die erste auf Farbton basierende Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, den Effekt beim Variieren der Werte von Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen, als spezifische Farben über Rot-, Grün- und Blau-Kanal-Werte zu deklarieren. Darüber hinaus ist HSL ähnlich wie der HSB (Farbton, Sättigung und Helligkeit) Farb-Auswähler in Photoshop, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die HSL- und HWB-sRGB-Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala zwischen komplett graustufig und mit der maximal möglichen Menge des angegebenen Farbtons ist.
Mit zunehmendem Wert der Helligkeit wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von schwarz nach weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung vom Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL- (oder HWB-) Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er wieder bei Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Bogenmaß (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, was der Grundton der Farbe ist, aber es kontrolliert nicht, wie lebendig oder stumpf oder wie hell oder dunkel die Farbe ist.

Die Sättigung-Komponente (`S`) der Farbe gibt den Prozentsatz der Endfarbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% vollständig farblos (graustufig) sind. Die Helligkeitskomponente (`L`) gibt an, wie hell die Farbe auf einer gleitenden Skala zwischen komplett schwarz (`0%`) und komplett weiß (`100%`) ist. Sie können auch optional einen Alpha-Kanal einfügen, der durch einen Schrägstrich (`/`) vorangesetzt wird, um die Farbe weniger als 100% deckend zu machen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alpha-Wert, der durch einen Schrägstrich getrennt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) angegeben ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt jedoch von `hsl()` Helligkeit und Sättigung zu verwenden, spezifiziert `hwb()` weiße Komponente (`W`) und Schwarze Komponente (`B`). Diese Funktion ist auch ziemlich intuitiv — es ermöglicht Ihnen, einen Farbton auszuwählen und dann Mengen von Weiß und/oder Schwarz hinzuzufügen, um die gewünschte Farbe zu erreichen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr beträgt, wird die Farbe grau sein, ähnlich wie wenn man die Sättigung von `hsl()` auf 0% setzt. Wie bei `hsl()` kann ein optionaler Alphawert eingefügt werden, der durch einen Schrägstrich `/` getrennt ist.

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

In den untenstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen Weißanteile und Schwarzanteile zu jedem Farbton über `hwb()` statt Sättigung und Helligkeit hinzu:

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

### LCH und OKLCH: CIELAB und Oklab-Farbräume

Während `hsl()` und `hwb()` intuitive Funktionen sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder vollgesättigte Farbwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht so, wie die menschliche Sicht oder Monitore arbeiten. Weißen Text auf vollgesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf vollgesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern kann auch die Augen Ihrer Benutzer verletzen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne dass Text unlesbar wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Farbspektrum, das der Mensch sehen kann. CIE Lab-Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab-Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum dem Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber mit zusätzlichen numerischen Optimierungsschritten erstellt wurde, sodass die Werte als genauer angesehen werden als bei CIELAB. Aufgrund dieser Optimierung sind Farbtöne mehr wahrnehmungsunabhängig.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter besprochen. Die [`lab()`- und `oklab()`-Funktionen arbeiten anders und verwenden Helligkeit (`L`), Rot/Grün-ness (entlang der `a`-Achse) und Gelb/Blau-ness (entlang der `b`-Achse). Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen besteht darin, dass die "Helligkeit" als wahrgenommene Helligkeit definiert ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbton-Funktionen ist der Farbton (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entsprechend `0deg`), das den Farb-`<hue>`-Winkel angibt. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe zeigen die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

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

{{embedlivesample("hues", '100', '260')}}

Sie bemerken möglicherweise, dass die Helligkeit der letzteren Verläufe im gesamten Spektrum der Farbtöne gleichmäßiger ist als der sRGB-Verlauf. Wählen Sie das Kontrollkästchen im obigen Beispiel aus, um den Farbtonverlauf in Graustufen umzuwandeln, um dies zu verdeutlichen.

Beachten Sie auch, wie sich die Verteilung der Blauwerte in CIE Lab verlängert im Vergleich zu den anderen beiden Farbräumen. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blaustrecke ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum gelöst, wodurch die `oklch()`-Farbenotation verbessert wurde.

Wie oben besprochen, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die Helligkeit ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das vollständige Fehlen von Helligkeit ist, was Schwarz entspricht.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) und repräsentiert das Chroma der Farbe oder die "Menge an Farbe". Dies ist ähnlich wie der `S`-Sättigungswert der `hsl()`-Farb-Funktion. Der Wert `0` ist das vollständige Fehlen von Chroma oder Sättigung; was zu einem Grau zwischen Weiß und Schwarz führt, je nach Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0,4` für `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alpha-Transparenzwert, der durch einen Schrägstrich (`/`) getrennt wird.

Das folgende Beispiel zeigt die Wirkung der Änderung des Helligkeitswerts in den `lch()`- und `oklch()`-Funktionen.

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

{{embedlivesample("lch-colors", '100', '200')}}

## Lab und OKLab

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren das gesamte Farbspektrum, das der Mensch sehen kann, indem sie die Helligkeit der Farbe (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert angeben.

Ähnlich wie bei `lch()` und `oklch()` ist die Helligkeit entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die definiert, wie grün (Richtung -100%) oder rot (Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen behaftet (d.h. sowohl positive als auch negative Werte zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0,4 (±100%) Grenzen festlegen können. In der Praxis können die Werte ±160 bzw. ±0,5 nicht überschreiten.

Der `b`-Wert hat dieselben Einschränkungen. Er gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, die definiert, wie blau (Richtung -100%) oder gelb (Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Auswirkungen, wenn die `a`-Achse mittels einer `lab()`-Funktion und die `b`-Achse mittels einer `oklab()`-Funktion variiert wird.

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

{{embedlivesample("lab-colors", '100', '150')}}

## Weitere funktionale Farbnotationen

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farbgamuts zu beschreiben. Zum Beispiel, wenn Sie die `display-p3 0 0 1`-Farbe anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut)-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB-Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()` und `rgb()` — drücken nicht das volle Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen deutlich breiteren Farbraum unterstützt. Infolgedessen, wenn Sie die älteren Funktionstypen verwenden, um relative Farben zu definieren, wird die zurückgegebene Ausgabefarbe, wenn Sie die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode abfragen, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()` und `rgb()`-Farbfunktionen in `color()` im `srgb`-Farbraum zu sehen, sehen Sie sich unser [Farb-Auswahl-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) an.

### Relative Farben

Jede der oben aufgeführten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen vorhandenen Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementen zu vorhandenen Farben — wie hellere, dunklere, gesättigtere, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbanpassungen. Sehen Sie sich jede Farbfunktionsseite an, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()` oder `hwb()` verwenden, um eine relative Farbe auszugeben, wird die Ausgabefarbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte in einer der oben genannten Syntaxen an, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis der Mischung dieser in einem gegebenen Farbraum in einem bestimmten Maße zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für den Gebrauch in hellen und dunklen Farbschemata vorgesehen sind. Welche gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema eingestellt hat oder der Benutzer ein solches angefordert hat. Diese ist eine Abkürzungsfunktion, die es Ihnen erlaubt, dieselben Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage zu erzielen, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elementen unter Verwendung von CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
