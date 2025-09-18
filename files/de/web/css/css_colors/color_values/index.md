---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept der "Farbe" in eine digitale Form umzuwandeln, die ein Computer verwenden kann. Dies erfolgt typischerweise, indem die Farbe in Komponenten zerlegt wird, wie zum Beispiel die Menge der verschiedenen Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle gewährleisten, dass Farben unabhängig von der Wiedergabestelle gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB` Farbraum des RGB-Farbmodells — der Standard-Farbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer beliebigen Farbe konsistent erfolgt. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt in der Anzahl der Farben, die sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt und haben sich mit den verbesserten Möglichkeiten erweitert. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und eine viel breitere {{Glossary("gamut", "Gamut")}} von Farben bieten. Wir können jetzt Farbe in CSS auf verschiedene Weise beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen vor. Für eine ausführlichere Diskussion sehen Sie sich die unten bereitgestellten Referenzlinks an.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, mit denen Sie Schlüsselwörter anstelle von numerischen Darstellungen verwenden können, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz — möglicherweise gibt es kein Schlüsselwort, das genau die Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen Standardprimär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, darunter `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}} Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben wie `accentcolortext` und `buttonface`, die die Standardfarbauswahl widerspiegeln, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wird.

Alle Farbschlüsselwörter sind nicht auf Groß- oder Kleinschreibung angewiesen. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptwege, wie man eine {{Glossary("RGB", "RGB")}} Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS definieren kann — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie erlauben jedoch die Spezifikation eines viel breiteren Farbspektrums.

### Hexadezimale Zeichenfolgen-Notation

Hexadezimale (hex) Zeichenfolgen-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: der Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgen-Notation beginnt immer mit dem Zeichen `"#"`. Danach kommen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht auf Groß- oder Kleinschreibung angewiesen.

- `"#rrggbb"`
  - : Gibt eine vollständig blickdichte Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten jeweils als zweistelliger Hexwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) darstellt, oder als einstelliges Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das vorangestellte `0x` in den obigen Werten gibt einen hexadezimalen Ganzzahlenliteralen an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hexfarben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstelliges Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente doppelt verwendet wird; also wird `"#D"` zu `"#DD"` beim Zeichnen.

Um die Werte zu 25% undurchsichtig zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenfolgen-Notation für Farben finden Sie im {{cssxref("hex-color")}} Datentyp.

#### HTML Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website es dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichenanwendung. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer ermöglichen, die Textfarbe zu wählen. Oder vielleicht erlaubt Ihre App dem Benutzer, Ordnern oder Elementen Farben zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahlsteuerfeld rendert.

Dieses Beispiel erlaubt es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt eine Box, die ein Farbauswahlsteuerfeld (mit einer Beschriftung, die mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element enthält, in das wir den Farbwert mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Randfarbe, um der Anfangsfarbe des Farbwählers zu entsprechen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn der Wert des Elements geändert wird; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe der Box so, dass sie dem aktuellen Wert des Farbwählers entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbwählers abgeschlossen ist. Wir reagieren, indem wir die Inhalte von `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB Funktionsnotation

RGB (Rot/Grün/Blau) Funktionsnotation, wie die hexadezimale Zeichenfolgen-Notation, stellt Farben durch ihre Rot-, Grün- und Blaukomponenten (und optional eine Alphakanalkomponente für Deckkraft) dar. Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blaukomponenten und optional einen Alphawert.

Legale Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB Funktionsnotation finden Sie im {{cssxref("color_value/rgb", "rgb()")}} Farbfunktion.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten — ein [`<angle>`](/de/docs/Web/CSS/angle) vom Farbmodell des Farbkreises — beinhalten die `srgb` Farbfunktionen `hsl()` und `hwb()`, CIElabs `lch()` Funktion und OKLab's `oklch()` Farbfunktion. Diese Farbfunktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL Funktionsnotation

Die `hsl()` CSS Farbfunktion war die erste auf Farbton basierende Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von variierenden Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) Werten zu bestimmen, als bestimmte Farben über Rot-, Grün- und Blaukanalwerte zu deklarieren. Außerdem ähnelt HSL der HSB (Farbton, Sättigung und Helligkeit) Farbauswahl in Photoshop, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das unten stehende Diagramm zeigt einen HSL Farbzylinder. Die Sättigung ist ein Prozentsatz, der beschreibt, wie weit die Farbe auf einer Skala zwischen völlig graustufig und der maximal möglichen Menge des gegebenen Farbtons liegt. Wenn der Wert der Helligkeit zunimmt, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Hue-Komponente eines HSL (oder HWB) Farbtons ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radianten (`rad`), Graden (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, was der Grundton der Farbe ist, steuert jedoch nicht, wie lebendig oder stumpf oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) Komponente der Farbe gibt den Prozentsatz der endgültigen Farbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% völliger Mangel an Farbe (Graustufen) ist. Die Helligkeit (`L`) Komponente gibt an, wie hell die Farbe auf einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einschließen, der von einem Schrägstrich (`/`) vorausgeht, um die Farbe weniger als 100% undurchsichtig zu machen.

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

Der letzte Wert ist halbtransparent; es enthält den optionalen Alphawert, dem ein Schrägstrich vorausgeht.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbfunktion verwendet dasselbe Farbsystem wie `hsl()`, mit `0deg` als Rot. Anstatt jedoch `hsls` Helligkeit und Sättigung zu verwenden, gibt die `hwb()` Funktion Weißheit (`W`) und Schwarzheit (`B`) an. Diese Funktion ist ebenfalls recht intuitiv — Sie können einen Farbton auswählen und dann Mengen an Weiß und/oder Schwarz hinzufügen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie das Setzen des `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann ein optionaler Alphawert enthalten sein, dem ein Schrägstrich `/` vorausgeht.

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

In den unten stehenden Beispielen setzen wir die gleichen Farbtöne wie in den `hsl()` Beispielen, aber wir fügen jedem Farbton über `hwb()` Weißheit und Schwarzheit hinzu, anstatt Sättigung und Helligkeit:

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

### LCH und OKLCH: CIELAB und Oklab Farbräume

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das entspricht nicht der menschlichen Wahrnehmung oder der Funktionsweise von Monitoren. Weißen Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen, ist lesbar, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unleserlich sein, sondern möglicherweise auch die Augen Ihrer Benutzer schädigen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Hue-Kanal einer Farbe auf einer Website ändern könnten, ohne den Text unlesbar zu machen? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können. CIE Lab Farbfunktionen schließen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab) ein. Oklab Farbfunktionen schließen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab) ein. Der Hauptzweck dieser Modelle ist, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleichermaßen unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch mit zusätzlichen numerischen Optimierungsschritten aufgebaut ist, sodass die Werte als genauer als CIELAB gelten. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgemäß gleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erörtert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, verwenden Licht (`L`), Rot/Grünheit (entlang der `a`-Achse) und Gelb/Blauheit (entlang der `b`-Achse). Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen besteht darin, dass die "Helligkeit" wahrgenommen wird; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbfarbfunktionen ist der Farbwert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>` Winkel der Farbe darstellt. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (von `lch()` verwendet) und Oklab- (von `oklch()` verwendet) Farbräumen.

Die folgenden Verläufe zeigen die Farbton-Farben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

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

Sie werden möglicherweise feststellen, dass die Helligkeit der letzten Farbverläufe gleichmäßiger über das Spektrum der Farbtöne verteilt ist als der sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbverlaufsfarbton in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, dass die Verteilung der Blautöne im CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blautönen-Verteilung ist das Ergebnis eines Fehlers, der das Chroma und die Helligkeit der Farbton-Werte zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab Farbraum behoben und daher die `oklch()` Farbfunktion.

Wie oben erwähnt, ist der Farbton (`H`) in den `lch()` und `oklch()` als `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das völlige Fehlen von Licht, was Schwarz ist.

Der `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder die "Menge der Farbe". Dies ähnelt dem `S` Sättigungswert der `hsl()` Farbfunktion. Der Wert `0` ist der völlige Mangel an Chroma oder Sättigung; das Ergebnis ist ein Grau zwischen Weiß und Schwarz einschließlich, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbeschränkt, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alpha-Transparenzwert, dem ein Schrägstrich (`/`) vorausgeht.

Das untenstehende Beispiel zeigt die Auswirkung der Änderung des Helligkeitswerts in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können, indem sie die Farbe durch die Helligkeit (`L`), einem Rot/Grün-Achsenwert (`a`), einem Blau/Gelb-Achsenwert (`b`) und einem optionalen Alphatransparenzwert spezifiziert.

Ähnlich wie `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a` Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der a-Achse im Farbraum, die definiert, wie grün (bewegend in Richtung -100%) oder rot (bewegend in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte zulassend) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen setzen können. In der Praxis können die Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der `b` Wert hat die gleichen Einschränkungen. Er bestimmt die Entfernung der Farbe entlang der b-Achse im Farbraum, die definiert, wie blau (bewegend in Richtung -100%) oder gelb (bewegend in Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Effekte durch das Variieren der `a` Achse über eine `lab()` Funktion und der `b` Achse über eine `oklab()` Funktion.

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

## Zusätzliche Farbfunktionsnotationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farbgamuten zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe zeigen möchten, die außerhalb des sRGB Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die oben diskutierten älteren sRGB Farbnotationsarten — `hsl()`, `hwb()`, und `rgb()` — drücken nicht das vollständige Spektrum der sichtbaren Farben aus, während die `color()` Funktion ein viel breiteres Farbspektrum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition von relativen Farben die ausgegebene Farbe durch das Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()`, und `rgb()` Farbfunktionen zu `color()` im `srgb` Farbraum zu sehen, schauen Sie sich unser [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker) an.

### Relative Farben

Jede oben aufgeführte Farbfunktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen bestehenden Farben definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Dieses leistungsstarke Feature ermöglicht es, Ergänzungen zu bestehenden Farben zu erstellen — wie z. B. hellere, dunklere, gesättigte, semitransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus für die Erstellung von Paletten und die Definition von Farbjustierungen. Sehen Sie sich die Seite jeder Farbfunktion an, um mehr über ihre relativen Syntaxen zu lernen.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()`, oder `hwb()` verwenden, um eine relative Farbe auszugeben, wird die ausgegebene Farbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte aus einer der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis des Mischens dieser Farben in einem gegebenen Farbraum in einem gegebenen Verhältnis zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen und dunklen Farbschemata bestimmt ist. Welches gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer dies angefordert hat. Dies ist eine Abkürzungsfunktion, mit der Sie dieselben Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage erzielen können, jedoch mit weniger Code.

## Siehe auch

- [Anwendung von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Denken Sie sorgfältig nach, wie Sie Farbe einsetzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
