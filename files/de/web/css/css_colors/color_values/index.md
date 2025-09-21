---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept der "Farbe" in eine digitale Form umzuwandeln, die ein Computer verwenden kann. Dies wird typischerweise dadurch erreicht, dass die Farbe in Komponenten zerlegt wird, z.B. in Mengen von verschiedenen Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, egal wo sie dargestellt werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe von numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells - der Standard-Farbraum in Rot, Grün und Blau - wurde 1996 für Computermonitore und das Web geschaffen. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass jede gegebene Farbe konsistent beschrieben werden kann. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore in ihrer Fähigkeit, viele Farben darzustellen, beschränkt, und CSS-Farben waren durch diese Einschränkungen begrenzt, die sich mit verbesserten Fähigkeiten erweiterten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir nun auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Gamut")}} an Farben bieten. Wir können jetzt Farben in CSS auf verschiedene Weisen beschreiben, und die Optionen erweitern sich stetig.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}} Werttypen ein. Für eine detailliertere Diskussion sehen Sie sich die unten angegebenen Referenzlinks an.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzter Ansatz – möglicherweise gibt es kein Schlüsselwort, das die exakte Farbe darstellt, die Sie verwenden möchten.

Farbschlüsselwörter umfassen Standardprimär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum assoziiert.

Es gibt über 160 benannte Farben. Einige benannte Farben sind von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbauswahl widerspiegeln, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wurde.

Alle Farbschlüsselwörter sind nicht case-sensitiv. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptmethoden, um eine {{Glossary("RGB", "RGB")}} Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — Hexadezimal- und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum assoziiert. Sie ermöglichen jedoch die Spezifikation eines viel größeren Farbspektrums.

### Hexadezimale String-Notation

Die hexadezimale (hex) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Transparenz).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Der String ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Spezifiziert eine vollständig deckende Farbe, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Spezifiziert eine Farbe, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Spezifiziert eine Farbe, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`
  - : Spezifiziert eine Farbe, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alphakanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistellige Hexadezimalwerte dargestellt werden, die eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder als einstellige Hexadezimalwerte (eine Zahl zwischen 0 (`0`) und 15 (`F`)) darstellen.

> [!NOTE]
> Das vorangestellte `0x` in den obigen Werten zeigt ein hexadezimales Ganzzahlenliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25 % undurchsichtig zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen String-Notation für Farben finden Sie im {{cssxref("hex-color")}} Datentyp.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben auf Ordner oder Elemente zuordnen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahl-Steuerelement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Wahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt, und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbauswahl-Steuerelement (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element enthält, in das wir den Wert der Farbe mithilfe von JavaScript ausgeben. Der Wert des Farbeingabefelds ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Farbe des Rahmens, um dem aktuellen Wert des Farbauswahl-Steuerelements zu entsprechen, und fügt dann zwei Ereignis-Handler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbauswahl-Steuerelement anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe des Feldes so, dass sie dem aktuellen Wert des Farbauswahl-Steuerelements entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbauswahl-Steuerelements endgültig festgelegt ist. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den string-Wert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Rot/Grün/Blau) Funktionsnotation, ähnlich wie die hexadezimale String-Notation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten (und optional einer Alphakanalkomponente für die Deckkraft) dar. Statt jedoch einen String zu verwenden, wird die Farbe mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentenwerte sowie einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als ein Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein leuchtend rot mit 50% Transparenz als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}} Farbfunktionsreferenz.

## Farb-Funktionen mit einem Farbton-Komponenten

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente — ein [`<angle>`](/de/docs/Web/CSS/angle) von diesem Farbrads {{Glossary("color_wheel", "color wheel")}} — haben, umfassen die `srgb` Farbfunktionen `hsl()` und `hwb()`, die CIElab's `lch()` Funktion und die OKLab's `oklch()` Farbfunktion. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau, usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farbfunktion war die erste farbtonbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung der Variierung der Werte für Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen, als spezifische Farben über rote, grüne und blaue Kanalwerte zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbwähler in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farb-Funktionen sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/angle) auf einem zirkularen {{Glossary("color_wheel", "color wheel")}}. Das Diagramm unten zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala zwischen komplett graustufig und dem maximal möglichen Grad des gegebenen Farbtons liegt.
Je höher der Helligkeitswert, desto mehr wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), veröffentlicht unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot startet, dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Graden (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, welche Basisfarbe die Farbe hat, beeinflusst jedoch nicht, wie lebendig oder blass oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) spezifiziert den Prozentsatz der endgültigen Farbe, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% das völlige Fehlen von Farbe (Graustufen) ist. Die Helligkeitskomponente (`L`) spezifiziert, wie hell die Farbe auf einer Skala zwischen völligem Schwarz (`0%`) und vollständig weißem (`100%`) ist. Sie können optional auch einen Alphakanal, dem ein Schrägstrich (`/`) vorangestellt wird, um die Farbe weniger als 100% undurchsichtig zu machen, hinzufügen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbfunktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstelle von `hsl()`'s Helligkeit und Sättigung spezifizieren `hwb()` Funktionen jedoch Weißanteil (`W`) und Schwarzanteil (`B`). Diese Funktion ist auch recht intuitiv — Sie können einen Farbton auswählen und dann Mengen von Weiß oder Schwarz mischen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr ist, wird die Farbe grau sein, ähnlich dem Setzen von `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann ein optionaler Alphawert, dem ein Schrägstrich `/` vorangestellt ist, hinzugefügt werden.

Hier sind einige Beispiele für die Nutzung der HWB-Notation:

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

In den untenstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()` Beispielen, aber wir fügen dem Farbton `hwb()` anstelle von Sättigung und Helligkeit Weiß und Schwarz hinzu:

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

### LCH und OkLCh: CIELAB und Oklab Farbräume

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder vollständig gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht, wie die menschliche Sicht oder Monitore arbeiten. Weißen Text auf vollständig gesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen, ist lesbar, aber derselbe Text auf vollständig gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern dem Benutzer auch die Augen schmerzen lassen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. Tatsächlich haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Seite ändern könnten, ohne dass der Text unleserlich wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Spektrum der von Menschen wahrnehmbaren Farben. CIE Lab Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, sodass eine bestimmte Entfernung zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch mit zusätzlichen numerischen Optimierungsschritten aufgebaut wurde, sodass die Werte als genauer als CIELAB angesehen werden. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erörtert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Achse (entlang der `a`-Achse) und Gelb/Blau-Achse (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen ist, dass die "Helligkeit" die wahrgenommen Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie von dem menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie die sRGB Farb-Funktionen für den Farbton ist der Farbton (`h`) Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), das den `<hue>` Winkel der Farbe darstellt. Allerdings sind die Farben bei jedem Winkelwert nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe zeigen die Farben der Farbtöne bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

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

Sie bemerken möglicherweise, dass die Helligkeit der späteren Verläufe über das gesamte Spektrum der Farbtöne gleichmäßiger ist als der sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbverlauf der Farbtöne in Graustufen zu konvertieren, um dies offensichtlicher zu machen.

Beachten Sie außerdem, dass die Verteilung der Blau-Werte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blau-Verteilung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit der Farbton-Werte zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum behoben und daher die `oklch()` Farbnotation.

Wie oben diskutiert, ist der Farbton (`H`) in der `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das völlige Fehlen von Licht ist, was schwarz ist.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma oder der "Farbanteil" der Farbe. Dies ist vergleichbar mit dem Sättigungswert `S` der `hsl()`-Farb-Funktion. Der Wert `0` stellt das völlige Fehlen von Chroma oder Sättigung dar; wodurch eine Grauschattierung zwischen weiß und schwarz einschließlich, abhängig vom Helligkeitswert, resultiert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` bei `oklch()` ist.

Wie die anderen Farb-Funktionen gibt es auch hier einen optionalen Alphatransparenzwert, dem ein Schrägstrich (`/`) vorangestellt ist.

Das folgende Beispiel zeigt die Wirkung der Änderung des Helligkeitswerts in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\*-Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der von Menschen wahrnehmbaren Farben, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alphatransparenzwert spezifizieren.

Ähnlich den `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` völlig schwarz ist und `100%` völlig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` völlig schwarz ist und `1`/`100` völlig weiß ist.

Der `a` Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert den Abstand der Farbe entlang der a-Achse im Farbraum, der definiert, wie grün (bewegend zu -100%) oder rot (bewegend zu +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (was sowohl positive als auch negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Limits setzen können. In der Praxis können Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der `b` Wert hat die gleichen Einschränkungen. Er spezifiziert den Abstand der Farbe entlang der b-Achse im Farbraum, der definiert, wie blau (bewegend zu -100%) oder gelb (bewegend zu +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Effekte der Variation der `a` Achse über eine `lab()` Funktion und der `b` Achse über eine `oklab()` Funktion.

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

## Zusätzliche funktionsbezogene Farben notationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume wünschen, wenn Sie Farben definieren, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farben {{Glossary("Gamut", "Gamuten")}} zu beschreiben.
Wenn Sie beispielsweise die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor sie versucht wird, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB Farben-Notationen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()`-Funktion ein viel breiteres Farbgamut unterstützt. Folglich, wenn man die älteren Funktionstypen verwendet, um relative Farben zu definieren, ist die ausgegebene Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode zurückgegeben wird, ein `color(srgb ...)` Wert.

Um ein Beispiel der Konvertierung der `rgb()`, `hsl()`, `hwb()`, und anderen [Farbformate](/de/docs/Web/CSS/color_value) zu sehen, sehen Sie sich unser [Farbsformat-Konverter Tool](/de/docs/Web/CSS/CSS_colors/Color_format_converter) an.

### Relative Farben

Jede der oben aufgeführten Farb-Funktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, was es ermöglicht, {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementärfarben zu vorhandenen Farben – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbänderungen. Sehen Sie sich die Seite für jede Farb-Funktion an, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()`, oder `hwb()` verwenden, um eine relative Farbe auszugeben, wird die ausgegebene Farbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte in einer der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und liefert das Ergebnis des Mischens dieser in einem gegebenen Farbraum zu einem gegebenen Verhältnis zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion erlaubt es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen bzw. dunklen Farbthemen vorgesehen sind. Welche festgelegt wird, hängt davon ab, ob der Entwickler oder der Benutzer ein helles oder dunkles Farbthema angefordert hat. Dies ist eine Abkürzungs-Funktion, mit der Sie mit weniger Code die gleichen Ergebnisse erzielen können wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
