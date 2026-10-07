---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Um eine Farbe in CSS darzustellen, muss das analoge Konzept „Farbe“ in eine digitale Form übersetzt werden, die ein Computer verwenden kann. Dazu wird die Farbe üblicherweise in Komponenten zerlegt, etwa in die Anteile verschiedener Grundfarben, die gemischt werden, oder in Helligkeit und Farbton. Definierte Farbmodelle sorgen dafür, dass Farben unabhängig vom Ort ihrer Darstellung gleich aussehen.

Ein Farbmodell ist ein mathematisches Modell, das Farben durch numerische Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erzeugt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells – der standardisierte Rot-Grün-Blau-Farbraum – wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, das eine konsistente Beschreibung jeder Farbe ermöglicht. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen umwandeln, sollte sie in beiden gleich aussehen.

Ursprünglich konnten Monitore nur eine begrenzte Anzahl von Farben darstellen. CSS-Farben unterlagen denselben Einschränkungen, bis sich die technischen Möglichkeiten verbesserten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, stehen inzwischen auch Farbmodelle zur Verfügung, die auf der menschlichen Wahrnehmung beruhen und einen wesentlich größeren {{Glossary("gamut", "Farbumfang")}} bieten. Farben lassen sich in CSS heute auf verschiedene Weise beschreiben, und die Möglichkeiten werden stetig erweitert.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen vor. Ausführlichere Informationen finden Sie über die unten angegebenen Referenzlinks.

## Schlüsselwörter

Für das Web ist eine Reihe standardisierter Farbnamen definiert. Damit können Sie Farben mit Schlüsselwörtern statt mit Zahlenwerten beschreiben. Dieser Ansatz ist einfacher, aber auch eingeschränkter: Für genau die Farbe, die Sie verwenden möchten, gibt es möglicherweise kein Schlüsselwort.

Zu den Farbschlüsselwörtern gehören Grund- und Sekundärfarben wie `red`, `blue` und `orange`, Grautöne von `black` bis `white`, darunter `darkgray` und `lightgrey`, sowie viele weitere Mischfarben wie `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind dem sRGB-Farbraum (`srgb`) zugeordnet.

Es gibt über 160 benannte Farben. Einige davon sind besonders wichtig: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) legt einen transparenten Farbwert fest, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS-Eigenschaft {{cssxref("color")}} verwendet. Daneben gibt es benannte {{cssxref("system-color")}}-Farben wie `accentcolortext` und `buttonface`. Sie spiegeln die Standardfarben wider, die der Benutzer, der Browser oder das Betriebssystem festgelegt hat.

Bei allen Farbschlüsselwörtern wird die Groß- und Kleinschreibung nicht beachtet. Weitere Informationen finden Sie beim Datentyp {{cssxref("named-color")}}.

## RGB-Werte

In CSS gibt es zwei grundlegende Möglichkeiten, eine {{Glossary("RGB", "RGB")}}-Farbe über ihre Rot-, Grün- und Blaukomponenten zu definieren: Hexadezimalwerte und `rgb()`-Werte. Wie benannte Farben verwenden beide das {{Glossary("RGB", "RGB")}}-Modell und den sRGB-Farbraum (`srgb`). Mit ihnen lässt sich jedoch eine wesentlich größere Auswahl an Farben angeben.

### Hexadezimale Zeichenfolgen

Bei der hexadezimalen Schreibweise wird jede Komponente einer RGB-Farbe – Rot, Grün und Blau – durch einen Hexadezimalwert dargestellt. Eine vierte Komponente kann den Alphakanal beziehungsweise die Deckkraft angeben.

Eine Farbe in hexadezimaler Schreibweise beginnt immer mit dem Zeichen `"#"`. Darauf folgen die Hexadezimalziffern des Farbcodes. Bei der Zeichenfolge wird die Groß- und Kleinschreibung nicht beachtet.

- `"#rrggbb"`
  - : Gibt eine vollständig deckende Farbe an. Ihre Rotkomponente ist die Hexadezimalzahl `0xrr`, ihre Grünkomponente `0xgg` und ihre Blaukomponente `0xbb`.

- `"#rrggbbaa"`
  - : Gibt eine Farbe mit `0xrr` als Rotkomponente, `0xgg` als Grünkomponente und `0xbb` als Blaukomponente an. Der Alphakanal wird durch `0xaa` angegeben. Je kleiner dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an. Ihre Rotkomponente ist die Hexadezimalzahl `0xrr`, ihre Grünkomponente `0xgg` und ihre Blaukomponente `0xbb`.

- `"#rgba"`
  - : Gibt eine Farbe mit `0xrr` als Rotkomponente, `0xgg` als Grünkomponente und `0xbb` als Blaukomponente an. Der Alphakanal wird durch `0xaa` angegeben. Je kleiner dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten jeweils durch einen zweistelligen Hexadezimalwert zwischen 0 (`00`) und 255 (`FF`) oder durch einen einstelligen Hexadezimalwert zwischen 0 (`0`) und 15 (`F`) dargestellt werden.

> [!NOTE]
> Das vorangestellte `0x` in den obigen Werten kennzeichnet ein hexadezimales Ganzzahlliteral. Hexadezimale Ganzzahlen können die Ziffern `0` bis `9` sowie die Buchstaben `a` bis `f` und `A` bis `F` enthalten. Die Groß- und Kleinschreibung eines Buchstabens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hexadezimalangaben sind gleichwertig: Beide stehen für Rot.

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Bei der einstelligen Schreibweise wird der Farbwert berechnet, indem die Ziffer jeder Komponente verdoppelt wird. Beim Darstellen wird also aus `"#D"` der Wert `"#DD"`.

Um die Deckkraft auf 25 % zu setzen, fügen Sie wie folgt einen Alphakanalwert hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Schreibweise von Farben finden Sie beim Datentyp {{cssxref("hex-color")}}.

#### HTML-Input-Typ für Farben

Es gibt viele Situationen, in denen Benutzer auf Ihrer Website eine Farbe auswählen können sollen. Vielleicht bieten Sie eine anpassbare Benutzeroberfläche an oder entwickeln eine Zeichenanwendung. Möglicherweise können Benutzer Text bearbeiten und sollen dessen Farbe wählen. Oder Ihre Anwendung ermöglicht es, Ordnern oder Elementen Farben zuzuweisen. Für solche Anwendungsfälle bietet das Element {{HTMLElement("input")}} den [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"color"`, der ein Steuerelement zur Farbauswahl darstellt.

In diesem Beispiel können Sie eine Farbe auswählen. Nach der Auswahl wird {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt einen Bereich mit einem Steuerelement zur Farbauswahl, dessen Beschriftung mit dem Element {{HTMLElement("label")}} erstellt wird. Außerdem enthält es ein leeres Element {{HTMLElement("output")}}, in das wir den Farbwert mithilfe von JavaScript ausgeben. Der Wert des Farbeingabefelds ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript setzt zunächst die Rahmenfarbe auf den Anfangswert des Farbauswahlfelds. Anschließend fügt es dem Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) zwei Event-Handler hinzu, die auf Änderungen seines Werts reagieren.

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

Das Ereignis [`input`](/de/docs/Web/API/Element/input_event) wird jedes Mal ausgelöst, wenn sich der Wert des Elements ändert, also bei jeder Anpassung im Farbauswahlfeld. Bei jedem dieser Ereignisse setzen wir die Rahmenfarbe auf den aktuellen Wert des Farbauswahlfelds.

Das Ereignis [`change`](/de/docs/Web/API/HTMLElement/change_event) wird ausgelöst, wenn die Farbauswahl abgeschlossen ist. Daraufhin setzen wir den Inhalt von `<output>` auf den Zeichenfolgenwert der ausgewählten Farbe.

### Funktionale RGB-Schreibweise

Wie die hexadezimale Schreibweise stellt auch die funktionale RGB-Schreibweise (Rot/Grün/Blau) Farben anhand ihrer Rot-, Grün- und Blaukomponenten dar. Optional kommt eine Alphakanalkomponente für die Deckkraft hinzu. Statt einer Zeichenfolge wird die Farbe jedoch mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert drei oder vier Eingabeparameter: die Werte der Rot-, Grün- und Blaukomponente sowie optional einen Alphakanalwert.

Für diese Parameter sind folgende Werte zulässig:

- `red`, `green` und `blue`
  - : Jeder dieser Parameter muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}}-Wert zwischen 0 % und 100 % oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentwert zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Ein leuchtendes Rot mit 50 % Deckkraft lässt sich beispielsweise als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` darstellen.

Weitere Informationen zur funktionalen RGB-Schreibweise finden Sie bei der Farbfunktion {{cssxref("color_value/rgb", "rgb()")}}.

## Farbfunktionen mit einer Farbtonkomponente

Zu den Farbfunktionen mit einer {{cssxref("hue")}}-Komponente – einem {{cssxref("angle")}} auf dem {{Glossary("color_wheel", "Farbkreis")}} des jeweiligen Farbmodells – gehören die sRGB-Farbfunktionen `hsl()` und `hwb()`, die CIELAB-Funktion `lch()` und die Oklab-Farbfunktion `oklch()`. Diese Farbfunktionen sind intuitiver, weil sich anhand des Farbtons Unterschiede und Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün und Blau leichter erkennen lassen.

### Funktionale HSL-Schreibweise

Die CSS-Farbfunktion `hsl()` war die erste auf Farbtönen basierende Farbfunktion, die von Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()`: Die Auswirkungen von Änderungen an Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) lassen sich in der Regel leichter einschätzen, als Farben über konkrete Werte für den Rot-, Grün- und Blaukanal festzulegen. Zudem ähnelt HSL dem HSB-Farbauswahlfeld (Farbton, Sättigung und Helligkeit) in Photoshop. Dadurch war es vielen Menschen von Anfang an vertraut.

Die sRGB-Farbfunktionen `hsl()` und `hwb()` sind beide zylindrisch. Der Farbton definiert die Farbe als {{cssxref("angle")}} auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das folgende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung gibt als Prozentwert an, wo eine Farbe auf der Skala zwischen einem vollständig grauen Farbton und der maximal möglichen Sättigung des jeweiligen Farbtons liegt.
Mit zunehmender Helligkeit geht die Farbe vom dunkelsten zum hellsten möglichen Wert über – von Schwarz zu Weiß.

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild von [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), veröffentlicht unter der Lizenz [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

Der Wert der Farbtonkomponente (`H`) einer HSL- oder HWB-Farbe ist ein Winkel: Er beginnt bei 0° mit Rot, verläuft über Gelb, Grün, Cyan, Blau und Magenta und erreicht bei 360° wieder Rot. Der Wert kann in jeder von CSS unterstützten {{cssxref("angle")}}-Einheit angegeben werden, darunter Grad (`deg`), Radiant (`rad`), Neugrad (`grad`) und Umdrehungen (`turn`). Der Farbtonwert legt den Grundfarbton fest, steuert aber nicht, wie kräftig oder gedämpft beziehungsweise wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) gibt an, zu welchem Prozentsatz der angegebene Farbton in der endgültigen Farbe enthalten ist. Bei 100 % ist die Farbe vollständig gesättigt, bei 0 % ist sie farblos (Graustufen). Die Helligkeitskomponente (`L`) gibt auf einer Skala von vollständig schwarz (`0%`) bis vollständig weiß (`100%`) an, wie hell die Farbe ist. Optional können Sie einen Alphakanal hinzufügen, dem ein Schrägstrich (`/`) vorangestellt wird, um eine Deckkraft von weniger als 100 % festzulegen.

Hier sind einige Beispielfarben in HSL-Schreibweise:

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

Der letzte Wert ist teilweise deckend. Er enthält den optionalen Alphawert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird Grad (`deg`) angenommen.

### Funktionale HWB-Schreibweise

Die Farbfunktion [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` für Rot steht. Statt Helligkeit und Sättigung wie bei `hsl()` geben `hwb()`-Funktionen jedoch den Weißanteil (`W`) und den Schwarzanteil (`B`) an. Auch diese Funktion ist recht intuitiv: Sie wählen einen Farbton und mischen Weiß und/oder Schwarz hinzu, um die gewünschte Farbe zu erhalten.

Die Werte für `W` und `B` reichen von `0%` bis `100%` beziehungsweise von `0` bis `1`. Beträgt ihre Summe mindestens 100 % beziehungsweise `1`, ist die Farbe grau – ähnlich wie bei `hsl()` mit einem `s`-Wert von `0%`. Wie bei `hsl()` kann optional ein Alphawert angegeben werden, dem ein Schrägstrich `/` vorangestellt wird.

Hier sind einige Beispiele für die HWB-Schreibweise:

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

In den folgenden Beispielen verwenden wir dieselben Farbtöne wie in den `hsl()`-Beispielen. Statt Sättigung und Helligkeit geben wir mit `hwb()` jedoch für jeden Farbton einen Weiß- und einen Schwarzanteil an:

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

`hsl()` und `hwb()` sind zwar intuitiv, haben aber einen wesentlichen Nachteil: Bei diesen Funktionen hat jeder vollständig gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit. Das entspricht weder der menschlichen Wahrnehmung noch der Funktionsweise von Monitoren. Weißer Text auf vollständig gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar. Derselbe Text auf vollständig gesättigtem Gelb (`hsl(60deg 100% 50%)`) ist dagegen nicht nur unlesbar, sondern kann auch die Augen Ihrer Benutzer belasten. Bei diesen Farbfunktionen wird die Helligkeit einer Farbe im Verhältnis zu anderen Farben bestimmt, nicht anhand der menschlichen Wahrnehmung. Tatsächlich haben nicht alle Farbtöne dieselbe maximale Sättigung.

Wäre es nicht praktisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne dass Text dadurch unlesbar wird? Mit Farbfunktionen in den Farbräumen CIELAB und Oklab ist das möglich.

Die Farbräume CIELAB und Oklab stellen den gesamten für Menschen sichtbaren Farbbereich dar. Zu den CIE-Lab-Farbfunktionen gehören [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), zu den Oklab-Farbfunktionen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Das wichtigste Ziel dieser Modelle ist Wahrnehmungsgleichmäßigkeit: Gleiche Abstände zwischen beliebigen zwei Punkten im Farbraum sollen für Betrachter gleich große Farbunterschiede ergeben. Oklab basiert auf demselben Modelltyp wie CIELAB, wurde aber mit zusätzlichen numerischen Optimierungsschritten entwickelt. Seine Werte gelten deshalb als genauer als die von CIELAB. Durch diese Optimierung sind die Farbtöne auch wahrnehmungsmäßig gleichmäßiger verteilt.

Die Funktionen `lch()` und `oklch()` verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`). Sie werden in diesem Abschnitt näher erläutert. Die Funktionen [`lab()` und `oklab()`](#lab_und_oklab) funktionieren anders: Sie verwenden Helligkeit (`L`), einen Rot-Grün-Wert entlang der `a`-Achse und einen Gelb-Blau-Wert entlang der `b`-Achse. Diese Achsen werden als kartesische Koordinaten bezeichnet. Der wesentliche Vorteil dieser Farbfunktionen besteht darin, dass sich die „Helligkeit“ auf die wahrgenommene Helligkeit bezieht: Sie beschreibt, wie hell eine Farbe für das menschliche Auge erscheint, statt sie mit der Helligkeit anderer Farben zu vergleichen.

Ähnlich wie bei den sRGB-Farbfunktionen mit Farbtonkomponente ist der Farbtonwert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`). Er stellt den `<hue>`-Winkel der Farbe dar. Allerdings entsprechen dieselben Winkelwerte nicht denselben Farben. Die Winkel bestimmter Farbtöne unterscheiden sich zwischen den Farbräumen sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`).

Die folgenden Farbverläufe zeigen die Farbtöne bei jedem Winkel von `0deg` bis `360deg` in den Farbräumen sRGB, CIE Lab und OKlab:

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

Vielleicht fällt Ihnen auf, dass die Helligkeit der beiden letzten Farbverläufe über das Farbspektrum gleichmäßiger ist als beim sRGB-Farbverlauf. Aktivieren Sie im obigen Beispiel das Kontrollkästchen, um die Farbtonverläufe in Graustufen umzuwandeln und den Unterschied deutlicher zu sehen.

Beachten Sie auch, dass sich die Blautöne bei CIE Lab über einen größeren Bereich erstrecken als bei den beiden anderen Farbräumen. Das ist ein Unterschied zwischen `lch()` und `oklch()`. Der ausgedehnte Blaubereich bei `lch()` beruht auf einem Fehler, der Chroma und Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Im Oklab-Farbraum und damit bei der Farbschreibweise `oklch()` wurde dieser Fehler behoben.

Wie oben beschrieben, ist der Farbton (`H`) bei `lch()` und `oklch()` ein `<angle>`, ein `number` oder das Schlüsselwort `none`. `lightness` ist entweder ein {{cssxref("percentage")}}-Wert oder – bei `lch()` – eine Zahl zwischen `0` und `100` beziehungsweise – bei `oklch()` – eine Zahl zwischen `0` und `1`. `0` oder `0%` bedeutet, dass keine Helligkeit vorhanden ist; die Farbe ist dann schwarz.

`C` ist ein `<number>`, ein `<percentage>` oder das Schlüsselwort `none` (entspricht `0%`) und gibt das Chroma der Farbe an, also ihre „Farbigkeit“. Dies ähnelt dem Sättigungswert `S` der Farbfunktion `hsl()`. Der Wert `0` bedeutet, dass weder Chroma noch Sättigung vorhanden ist. Je nach Helligkeitswert ergibt sich daraus ein Grauton einschließlich Weiß oder Schwarz. Zahlenwerte sind theoretisch unbegrenzt; `100%` entspricht bei `lch()` dem Wert `150` und bei `oklch()` dem Wert `0.4`.

Wie bei den anderen Farbfunktionen kann optional ein Alphawert für die Transparenz angegeben werden, dem ein Schrägstrich (`/`) vorangestellt wird.

Das folgende Beispiel zeigt, wie sich eine Änderung des Helligkeitswerts in den Funktionen `lch()` und `oklch()` auswirkt.

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

Die funktionale Schreibweise [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) beschreibt eine Farbe im CIE-L\*a\*b\*-Farbraum. Die Funktion [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) definiert Farben im OKLab-Farbraum. Diese Funktionen stellen den gesamten für Menschen sichtbaren Farbbereich dar. Dazu geben sie die Helligkeit (`L`), einen Wert auf der Rot-Grün-Achse (`a`), einen Wert auf der Blau-Gelb-Achse (`b`) sowie optional einen Alphawert für die Transparenz an.

Wie bei `lch()` und `oklch()` ist `lightness` entweder:

- ein {{cssxref("percentage")}}-Wert, wobei `0%` vollständig schwarz und `100%` vollständig weiß bedeutet;
- eine Zahl zwischen `0` und `100` bei `lab()` beziehungsweise zwischen `0` und `1` bei `oklab()`, wobei `0` vollständig schwarz und `1` beziehungsweise `100` vollständig weiß bedeutet.

Der Wert `a` ist bei `lab()` ein `<number>` zwischen `-125` und `125`, bei `oklab()` zwischen `-0.4` und `0.4`. Er kann auch ein `<percentage>`-Wert zwischen `-100%` und `100%` oder das Schlüsselwort `none` sein, das hier `0%` entspricht. Dieser Wert gibt die Position der Farbe entlang der a-Achse im Farbraum an: In Richtung -100 % wird die Farbe grüner, in Richtung +100 % röter.

Diese Werte können ein positives oder negatives Vorzeichen haben und sind theoretisch unbegrenzt. Sie können also Werte außerhalb der Grenzen von ±125 beziehungsweise ±0,4 (±100 %) angeben. In der Praxis können die Werte jedoch ±160 beziehungsweise ±0,5 nicht überschreiten.

Für den Wert `b` gelten dieselben Einschränkungen. Er gibt die Position der Farbe entlang der b-Achse im Farbraum an: In Richtung -100 % wird die Farbe blauer, in Richtung +100 % gelber.

Das folgende Beispiel zeigt, wie sich Änderungen an der `a`-Achse mit einer `lab()`-Funktion und an der `b`-Achse mit einer `oklab()`-Funktion auswirken.

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

## Weitere funktionale Farbschreibweisen

### Die Funktion `color()`

Wenn Sie beim Definieren von Farben den Farbraum ausdrücklich festlegen möchten, können Sie die Funktion [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) verwenden.

Das ist nützlich, um Farben für hochauflösende Geräte mit größerem {{Glossary("Gamut", "Farbumfang")}} zu beschreiben.
Wenn Sie beispielsweise die Farbe `display-p3 0 0 1` darstellen möchten, die außerhalb des sRGB-Farbumfangs liegt, können Sie mit der `@media`-At-Regel [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) prüfen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie die Farbe verwenden:

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

Für die im nächsten Abschnitt beschriebenen relativen Farben ist es wichtig, `color()` zu verstehen. Die oben behandelten älteren sRGB-Farbschreibweisen – `hsl()`, `hwb()` und `rgb()` – können nicht das gesamte Spektrum sichtbarer Farben ausdrücken. Die Funktion `color()` unterstützt dagegen einen wesentlich größeren Farbumfang. Wenn Sie mit den älteren Funktionstypen relative Farben definieren, wird deshalb beim Abrufen über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) ein `color(srgb ...)`-Wert zurückgegeben.

Ein Beispiel für die Umwandlung von `rgb()`, `hsl()`, `hwb()` und anderen [Farbformaten](/de/docs/Web/CSS/Reference/Values/color_value) finden Sie in unserem [Konverter für Farbformate](/de/docs/Web/CSS/Guides/Colors/Color_format_converter).

### Relative Farben

Jede der oben aufgeführten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren. Damit lassen sich {{cssxref("&lt;color&gt;")}}-Werte ausgehend von vorhandenen Farben festlegen, statt jeden Farbwert von Grund auf neu zu definieren. Diese Funktion ermöglicht es, Varianten vorhandener Farben zu erstellen – etwa hellere, dunklere, stärker gesättigte, halbtransparente oder invertierte Varianten einer Ausgangsfarbe. Relative Farben bieten eine wirksame Möglichkeit, Farbpaletten zu erstellen und Farbanpassungen festzulegen. Weitere Informationen zur jeweiligen relativen Syntax finden Sie auf den Seiten der einzelnen Farbfunktionen.

Wie oben erwähnt, wird bei Verwendung von `rgb()`, `hsl()` oder `hwb()` zur Ausgabe einer relativen Farbe eine `color()`-Funktion im Farbraum `srgb` ausgegeben.

### Funktion color-mix()

Die Funktion {{cssxref("color_value/color-mix", "color-mix()")}} nimmt zwei Farbwerte in einer der oben genannten Schreibweisen entgegen. Optional können Sie für jede Farbe einen prozentualen Anteil angeben. Die Funktion gibt das Ergebnis der Mischung im angegebenen Farbraum und Verhältnis zurück.

### Funktion light-dark()

Mit der Funktion {{cssxref("color_value/light-dark", "light-dark()")}} können Sie für eine Eigenschaft zwei Farbwerte angeben: einen für ein helles und einen für ein dunkles Farbschema. Welcher Wert verwendet wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt oder der Benutzer eines davon angefordert hat. Die Funktion ist eine Kurzform, mit der Sie dasselbe Ergebnis wie mit einer Media-Feature-Abfrage über {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} erzielen, aber weniger Code benötigen.

## Siehe auch

- [Farben mit CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farben sinnvoll einsetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Farben und Luminanz verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
