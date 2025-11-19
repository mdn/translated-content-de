---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht in der Regel, indem die Farbe in Komponenten zerlegt wird, wie z. B. Mengen verschiedener Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, egal wo sie angezeigt werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe numerischer Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB` Farbraum des RGB-Farbmodells — der Standardfarbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass das Beschreiben einer beliebigen Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore hinsichtlich der Anzahl der angezeigten Farben beschränkt und CSS-Farben waren durch diese Einschränkungen begrenzt, die sich mit verbesserten Möglichkeiten erweiterten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, gibt es nun auch Farbmodelle, die auf menschlicher Wahrnehmung basieren, und somit eine wesentlich breitere {{Glossary("gamut", "Farbpalette")}} von Farben bieten. Wir können Farbe in CSS jetzt auf verschiedene Arten beschreiben und die Möglichkeiten erweitern sich stetig.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen ein. Für eine detailliertere Diskussion werfen Sie einen Blick auf die unten angegebenen Referenzlinks.

## Stichwörter

Das Web definiert eine Reihe standardmäßiger Farbnamen, mit denen Sie Stichwörter anstelle numerischer Darstellungen verwenden können, um Farben zu beschreiben. Dies ist ein einfacher, wenn auch begrenzter Ansatz — möglicherweise gibt es kein Stichwort, das die exakte gewünschte Farbe repräsentiert.

Farbstichwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Unter diesen gibt es Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}} Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl widerspiegeln, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wurde.

Alle Farbstichwörter sind nicht case-sensitiv. Weitere Informationen zu Farbstichwörtern finden Sie im Datentyp {{cssxref("named-color")}}.

## RGB-Werte

Es gibt zwei primäre Möglichkeiten, eine {{Glossary("RGB", "RGB")}} Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie ermöglichen jedoch eine viel größere Auswahl an Farben.

### Hexadezimale String-Notation

Die hexadezimale (hex) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (rot, grün und blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente umfassen: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Der String ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig opake Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hexwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder als einstelliger Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`)) darstellt.

> [!NOTE]
> Die führende `0x` in den obigen Werten zeigt ein hexadezimales Integerliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Der Fall eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn gezeichnet.

Um die Werte zu 25 % opak zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen String-Notation für Farben finden Sie im Datentyp {{cssxref("hex-color")}}.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer die Auswahl einer Farbe ermöglichen muss. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer die Wahl der Textfarbe ermöglichen. Oder vielleicht lässt Ihre App den Benutzer Farben auf Ordner oder Elemente anwenden. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der eine Farbauswahlsteuerung anzeigt.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Entscheidung getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das eine Farbauswahlsteuerung enthält (mit einem Label, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element, in das wir den Wert der Farbe mithilfe von JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Randfarbe, um den Anfangswert der Farbauswahl zu entsprechen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe in der Farbauswahl anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe des Kastens auf den aktuellen Wert der Farbauswahl.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert der Farbauswahl fertiggestellt ist. Wir reagieren, indem wir den Inhalt des `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Red/Green/Blue) Funktionsnotation, wie hexadezimale String-Notation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten dar (und optional einer Alphakanalkomponente für die Deckkraft). Im Gegensatz zur Verwendung eines Strings wird die Farbe jedoch unter Verwendung der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0 % bis 100 % oder das Stichwort `none` sein, was in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) angegeben oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`).

Zum Beispiel kann ein helles Rot, das zu 50 % opak ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}} Farbfunktion.

## Farb-Funktionen mit einem Farbton-Komponenten

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) aus dem Farbmodell des Farbkreises — umfassen die `srgb` Farb-Funktionen `hsl()` und `hwb()`, `lch()` Funktion von CIElab und `oklch()` Farbfunktion von OKLab. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farbfunktion war die erste Farbton-basierte Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von variierenden Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) Werten zu bestimmen, als bestimmte Farben über rote, grüne und blaue Kanal-Werte zu deklarieren. Darüber hinaus ähnelt HSL dem HSB (Hue, Saturation und Brightness) Farbwähler in Photoshop, was es bei der ersten Unterstützung vielen Menschen sofort vertraut machte.

Die `hsl()` und `hwb()` sRGB Farbfunktionen sind beide zylindrisch. Hue definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das unten stehende Diagramm zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe entlang einer Skala zwischen komplett graustufig und der maximal möglichen Menge des gegebenen Farbtons liegt.
Wenn der Helligkeitswert zunimmt, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta bewegt, bevor er wieder bei 360° bei Rot endet. Der Wert kann in einer beliebigen {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, die von CSS unterstützt wird, einschließlich Grad (`deg`), Radiant (`rad`), Gradian (`grad`) oder Umdrehungen (`turn`). Der Farbton-Wert identifiziert, was der Basisschatten der Farbe ist, aber er kontrolliert nicht, wie lebhaft oder stumpf, oder wie hell oder dunkel die Farbe ist.

Der Sättigungs-Komponente (`S`) der Farbe gibt den Prozentsatz der Endfarbe an, die aus dem angegebenen Farbton besteht, wobei 100 % vollständig gesättigt und 0 % völlig ohne Farbe (Graustufen) sind. Der Helligkeits-Komponente (`L`) gibt an, wie hell die Farbe entlang einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einfügen, der durch einen Schrägstrich (`/`) vorangestellt wird, um die Farbe weniger als 100 % opak zu machen.

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

Der letzte Wert ist halb-opak; er enthält den optionalen Alpha-Wert, der durch einen Schrägstrich vorangestellt wird.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons auslassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farbfunktion verwendet das gleiche Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` rot ist. Statt `hsl()`'s Helligkeit und Sättigung spezifizieren `hwb()` Funktionen jedoch Weißheit (`W`) und Schwärze (`B`). Diese Funktion ist ebenfalls recht intuitiv — sie erlaubt es Ihnen, einen Farbton auszuwählen und dann Mengen von Weiß und/oder Schwarz zu mischen, um die gewünschte Farbe zu erreichen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100 % (oder `1`) oder mehr beträgt, ist die Farbe grau, ähnlich wie wenn man den `s` mit `0%` bei `hsl()` setzt. Wie bei `hsl()` kann auch hier optional ein Alphawert eingefügt werden, dem ein Schrägstrich `/` vorangestellt ist.

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

In den unten stehenden Beispielen setzen wir die gleichen Farbtöne wie in den `hsl()` Beispielen, aber wir fügen den Farbtönen Weißheit und Schwärze durch `hwb()` hinzu, anstatt durch Sättigung und Helligkeit:

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

### LCH und OkLCh: CIELAB und Oklab Farbräume

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das entspricht nicht der menschlichen Sehweise oder den Funktionsweisen von Monitoren. Weißen Text auf einem voll gesättigten Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf einem voll gesättigten Gelb (`hsl(60deg 100% 50%)`) ist nicht nur unlesbar, sondern kann sogar die Augen Ihrer Benutzer blenden. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben und nicht zur menschlichen Wahrnehmung. In der Realität haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht großartig, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Webseite ändern könnten, ohne den Text unleserlich zu machen? Das können Sie mit Farbfunktionen in den CIELAB und Oklab Farbräumen.

Die Farbräume CIELAB und Oklab stellen das gesamte Spektrum der Farben dar, die Menschen sehen können. CIE Lab Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab). Oklab Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Der Hauptzweck dieser Modelle ist es, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum gleich unterschiedlich für einen Zuschauer erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber zusätzliche numerische Optimierungsschritte nutzt, sodass die Werte als genauer als die von CIELAB betrachtet werden. Aufgrund dieser Optimierung sind Farbtöne wahrnehmbar einheitlicher.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt näher erläutert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, sie verwenden Helligkeit (`L`), Rot/Grün-Nähe (auf der `a`-Achse) und Gelb/Blau-Nähe (auf der `b`-Achse). Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbtonfarbfunktionen ist der Farbton (`h`) Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Stichwort `none` (entspricht `0deg`) und repräsentiert den `<hue>` Winkel der Farbe. Allerdings sind die Farben bei jedem Winkelwert nicht die gleichen. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`) Farbräumen.

Die folgenden Gradienten zeigen die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB, CIE Lab und OKlab Farbräumen:

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

Sie werden feststellen, dass die Helligkeit der letzteren Gradienten gleichmäßiger über das Spektrum der Farbtöne verteilt ist als der sRGB-Gradient. Wählen Sie das Kontrollkästchen im obigen Beispiel aus, um den Farbton-Gradienten auf Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blauwerte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blauverteilung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab Farbraum behoben und daher ist die `oklch()` Farbnomenklatur betroffen.

Wie oben erwähnt, ist der Farbton (`H`) in `lch()` und `oklch()` ein `<angle>`, `number` oder das Stichwort `none`. Die Helligkeit ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das völlige Fehlen von Helligkeit ist, also schwarz.

`C` ist ein `<number>`, `<percentage>`, oder das Stichwort `none` (entspricht `0%`) und ist das Chroma oder die "Menge an Farbe" der Farbe. Dies ist ähnlich wie der `S` Sättigungswert der `hsl()` Farbfunktion. Der Wert `0` ist das völlige Fehlen von Chroma oder Sättigung; resultierend in einem Grau zwischen Weiß und Schwarz inklusive, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbounded, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch hier einen optionalen Alpha-Transparenzwert, der mit einem Schrägstrich (`/`) angeben wird.

Das folgende Beispiel zeigt die Auswirkung der Änderung des Helligkeitswertes in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können, indem sie die Farbe durch Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert spezifizieren.

Ähnlich wie bei `lch()` und `oklch()`, ist die Helligkeit entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß sind.

Der `a` Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Stichwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die definiert, wie grün (von -100% ausgehend) oder rot (von +100% ausgehend) die Farbe ist.

Beachten Sie, dass diese Werte unterschrieben sind (sowohl positive als auch negative Werte erlaubt) und theoretisch unbounded sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen setzen können. In der Praxis können Werte jedoch die Grenzen von ±160 oder ±0.5 nicht überschreiten.

Der `b` Wert hat die gleichen Einschränkungen. Er gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, die definiert, wie blau (von -100% ausgehend) oder gelb (von +100% ausgehend) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen der Variation der `a` Achse mittels einer `lab()` Funktion und der `b` Achse mittels einer `oklab()` Funktion.

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

## Zusätzliche Farb-Funktionsnotationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume wünschen, wenn Sie Farben definieren, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farb-{{Glossary("Gamut", "Gamuten")}} zu beschreiben. Wenn Sie beispielsweise die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB Gamuts liegt, können Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) at-rule verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB Farbnotationsarten, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum sichtbarer Farben aus, während die `color()` Funktion einen viel breiteren Farbraum unterstützt. Somit wird bei der Definition relativer Farben mit den älteren Funktionstypen die ausgegebene Farbe durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `rgb()`, `hsl()`, `hwb()`, und andere [Farbformate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, schauen Sie sich unser [Farbformat-Umwandlungstool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter) an.

### Relative Farben

Jede oben aufgelistete Farbfunktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren, das heißt, {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen bestehenden Farben zu definieren statt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementärfarben zu bestehenden Farben — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer ursprünglichen Farbe. Relative Farben bieten einen effektiven Mechanismus zum Erstellen von Paletten und Definieren von Farbmodifikationen. Sehen Sie sich jede Farbfunktionsseite an, um mehr über ihre relativen Syntaxvarianten zu erfahren.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()`, oder `hwb()` verwenden, um eine relative Farbe auszugeben, ist die auszugebende Farbe eine `color()` Funktion im `srgb` Farbraum.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion akzeptiert zwei Farbwerte einer beliebigen der oben genannten Syntaxen, optional mit proportionalen Prozentsätzen für jede Farbe, und gibt das Ergebnis der Mischung in einem gegebenen Farbraum mit einer bestimmten Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion erlaubt es Ihnen, zwei Farbwerte für eine Eigenschaft zu spezifizieren, die für die Verwendung in hellen und dunklen Farbschemata vorgesehen ist. Welcher gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein solches angefordert hat. Dies ist eine Schnellfunktionalität, die es Ihnen ermöglicht, die gleichen Ergebnisse wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage-Funktionalität zu erzielen, jedoch mit weniger Code.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe klug verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/Guides/Colors)
