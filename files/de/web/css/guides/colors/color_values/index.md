---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Um eine Farbe in CSS darzustellen, müssen Sie eine Möglichkeit finden, das analoge Konzept der "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem die Farbe in Bestandteile zerlegt wird, wie z.B. Mengen verschiedener Primärfarben zum Mischen oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben unabhängig von ihrem Darstellungskontext gleich erscheinen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit Hilfe von numerischen Werten darstellt. Farbmodelle beschreiben, wie man die verfügbaren Farben innerhalb eines Farbraums erstellt. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells – der standardisierte Rot-, Grün- und Blau-Farbraum – wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, so dass die Beschreibung einer gegebenen Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen umwandeln, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt, wie viele Farben sie anzeigen konnten, und CSS-Farben waren durch diese Beschränkungen begrenzt, die sich mit der Zeit erweiterten, als die Fähigkeiten verbessert wurden. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Spektrum")}} an Farben bieten. Wir können jetzt Farbe in CSS auf verschiedene Weisen beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}}-Wertetypen vor. Für eine detailliertere Diskussion siehe die unten angegebenen Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von standardisierten Farbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle numerischer Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch begrenzter Ansatz – möglicherweise gibt es kein Schlüsselwort, das exakt die Farbe repräsentiert, die Sie verwenden möchten.

Farbschlüsselwörter beinhalten Standard-Primär- und -Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem `sRGB` (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} wie `accentcolortext` und `buttonface`, die die Standardfarbauswahlen widerspiegeln, die vom Benutzer, Browser oder Betriebssystem getroffen werden.

Alle Farbschlüsselwörter sind nicht case-sensitiv. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei primäre Methoden, um eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre Rot-, Grün- und Blau-Komponenten in CSS zu definieren – hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden auch diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem `sRGB` (`srgb`) Farbraum verbunden. Allerdings erlauben sie es, ein viel breiteres Spektrum an Farben zu spezifizieren.

### Hexadezimale String-Notation

Die Hexadezimale (Hex)-String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alphakanal (oder Transparenz).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach kommen die hexadezimalen Ziffern des Farbcode. Der String ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig undurchsichtige Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`.

- `"#rgba"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

Wie oben gezeigt, kann jede der roten, grünen und blauen Farbkomponenten als zwei Ziffern umfassender Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) repräsentiert, oder als ein Ziffer umfassender Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das führende `0x` in den obigen Werten zeigt ein hexadezimales Integerliteral an. Hexadezimale Integer können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Der Fall eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; beide sind rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl an Ziffern angegeben werden. Wenn Sie die Einziffernnotation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente der Ziffer zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn gezeichnet wird.

Um die Werte 25% transparent zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}} Datentyp für weitere Informationen zur hexadezimalen String-Notation für Farben.

#### HTML-Eingabe vom Typ Farbe

Es gibt viele Situationen, in denen Ihre Website dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichenanwendung. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer die Auswahl der Textfarbe erlauben. Oder vielleicht ermöglicht Ihre Anwendung dem Benutzer, Farben Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahlelement rendert.

Dieses Beispiel erlaubt es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt eine Box, die ein Farbauswahlelement enthält (mit einem Label, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element, in das wir den Wert der Farbe mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Farbe des Rahmens, um dem Anfangswert des Farbauswahlers zu entsprechen, und fügt dann zwei Event-Handler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen seines Werts zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; d.h. jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis eintritt, setzen wir die Randfarbe der Box auf den aktuellen Wert des Farbwählers.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwählers endgültig ist. Wir antworten, indem wir den Inhalt des `<output>` auf den Stringwert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Rot/Grün/Blau) Funktionsnotation, ähnlich zur hexadezimalen String-Notation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten dar (und optional eine Alphakanalkomponente für Transparenz). Anstatt einen String zu verwenden, wird die Farbe jedoch mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter – rote, grüne und blaue Komponentenwerte sowie einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss einen {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (inklusive), einen {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% darstellen, oder das Schlüsselwort `none`, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal ist als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) spezifiziert.

Ein leuchtendes Rot, das zu 50 % transparent ist, kann beispielsweise als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}} Farbfunktion für weitere Informationen zur RGB-Funktionsnotation.

## Farb-Funktionen mit einem Farbtonkomponenten

Die Farbfunktionen, die eine {{cssxref("hue")}}-Komponente — ein {{cssxref("angle")}} aus dem Farbmodell-Farbrad — enthalten, sind die `srgb` Farbfunktionen `hsl()` und `hwb()`, CIElabs `lch()` Funktion und OKLabs `oklch()` Farbfunktion. Diese Farbfunktionen sind intuitiver, da der Farbton es uns ermöglicht, Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farbfunktion war die erste auf Farbton basierende Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` – es ist generell einfacher zu bestimmen, welchen Effekt das Variieren der Werte für Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) hat, als spezifische Farben über die Rot-, Grün- und Blau-Kanäle zu definieren. Darüber hinaus ist HSL ähnlich zum HSB-(Farbton, Sättigung, Helligkeit)-Farbwähler in Photoshop, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farbfunktionen sind beide zylindrisch. Farbton definiert die Farbe als ein {{cssxref("angle")}} auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala zwischen vollständig grau und mit der maximal möglichen Menge des gegebenen Farbtons gesättigt ist.
Mit zunehmendem Helligkeitswert wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von schwarz nach weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild bereitgestellt von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL- (oder HWB-) Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei Rot wieder auf 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("angle")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radianten (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, welche Grundfarbe die Farbe hat, kontrolliert aber nicht, wie lebendig oder gedämpft oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe gibt den Prozentsatz der Endfarbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% vollständig farblos (grauskaliert) ist. Die Helligkeitskomponente (`L`) gibt an, wie hell die Farbe ist, auf einer gleitenden Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`). Sie können auch optional einen Alphakanal einschließen, dem ein Schrägstrich (`/`) vorangeht, um die Farbe weniger als 100% undurchsichtig zu machen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphakanal, dem ein Schrägstrich vorangeht.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) angegeben ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farbfunktion verwendet dasselbe Farbkoordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Statt `hsl()`'s Helligkeit und Sättigung spezifizieren `hwb()`-Funktionen jedoch Weißgrad (`W`) und Schwarzgrad (`B`). Diese Funktion ist ebenfalls ziemlich intuitiv — sie ermöglicht es Ihnen, einen Farbton auszuwählen und dann Weiß oder Schwarz in gewünschtem Maß hinzuzumischen, um die gewünschte Farbe zu erzielen.

`W` und `B` Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` bei 100% (oder `1`) oder größer liegt, ist die Farbe grau, ähnlich wie das Setzen der `s` auf `0%` bei `hsl()`. Wie bei `hsl()` kann auch ein optionaler Alphakanalwert, dem ein Schrägstrich vorangeht (`/`), hinzugefügt werden.

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

In den unten stehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen jedem Farbton über `hwb()` Weißgrad und Schwarzgrad hinzu, anstatt Sättigung und Helligkeit:

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

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das entspricht nicht dem menschlichen Sehvermögen oder der Arbeitsweise von Monitoren. Weißen Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen ist lesbar, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unleserlich sein, sondern auch die Augen Ihrer Benutzer schmerzen. Bei diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, und nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne dass der Text unleserlich wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren den gesamten Bereich der Farben, die der Mensch sehen kann. CIE Lab Farbfunktionen schließen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) ein. Oklab-Farbfunktionen schließen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) ein. Das Hauptziel dieser Modelle ist, dass sie einheitlich sind, so dass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der dasselbe Modell wie CIELAB verwendet, aber zusätzliche numerische Optimierungsschritte einbezieht, so dass die Werte als genauer als die von CIELAB gelten. Aufgrund dieser Optimierung sind Farbtöne gleichmäßiger wahrnehmbar als bei anderen Modellen.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erörtert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, da sie Helligkeit (`L`), Rot/Grün-ness (entlang der `a`-Achse) und Gelb/Blau-ness (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die `lightness` die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie die sRGB-Farbton-Farbfunktionen ist der Farbton (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (gleichbedeutend mit `0deg`), das den `<hue>`-Winkel der Farbe darstellt. Dabei sind jedoch die Farben bei jedem Winkelwert nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich über die sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräume hinweg.

Die folgenden Verläufe zeigen die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIELAB- und Oklab-Farbräumen:

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

Vielleicht bemerken Sie, wie die Helligkeit der späteren Verläufe gleichmäßiger über das Spektrum der Farbtöne verteilt ist als der sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der blauen Werte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blaustrecke beruht auf einem Fehler, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab Farbraum behoben und daher die `oklch()` Farbnomenklatur.

Wie oben erwähnt, ist der Farbton (`H`) in den `lch()` und `oklch()` Funktionen ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` den völligen Mangel an Helligkeit, was schwarz bedeutet.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma oder die "Menge an Farbe". Dies ähnelt dem `S` Sättigungswert der `hsl()` Farbfunktion. Der Wert `0` bedeutet völligen Mangel an Chroma oder Sättigung; was zu einem Grau zwischen Weiß und Schwarz inklusive führt, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` für `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alphatransparenzwert, dem ein Schrägstrich (`/`) vorangeht.

Das untenstehende Beispiel zeigt die Auswirkungen der Änderung des Helligkeitswertes in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die[`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen enthalten den gesamten Bereich der Farben, die Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alphatransparenzwert verwenden.

Ähnlich wie bei `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, was definiert, wie grün (in Richtung -100%) oder rot (in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlauben) und theoretisch unbegrenzt sind, d.h. Sie können Werte außerhalb der ±125 oder ±0.4 (±100%)-Grenzen festlegen. In der Praxis können die Werte jedoch nicht die ±160 oder ±0.5-Grenzen überschreiten.

Der `b`-Wert unterliegt den gleichen Einschränkungen. Er gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, was definiert, wie blau (in Richtung -100%) oder gelb (in Richtung +100%) die Farbe ist.

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

## Zusätzliche Farbfunktions-Notationen

### Die `color()`-Funktion

Wenn Sie eine explizite Kontrolle über Farbräume bei der Definition von Farben möchten, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farbspektren zu beschreiben.
Zum Beispiel, wenn Sie die Farbe `display-p3 0 0 1` anzeigen möchten, die außerhalb des sRGB-Spektrums liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) At-Regel verwenden, um zu erkennen, ob die Hardware des Kunden Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Die Verwendung von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB-Farbnotationen, die oben diskutiert wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das volle Spektrum der sichtbaren Farben aus, während die `color()`-Funktion ein viel breiteres Farbspektrum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben die ausgegebene Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode zurückgegeben wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für die Umwandlung der `rgb()`, `hsl()`, `hwb()`, und andere [Farbformate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, schauen Sie in unser [Farbumrechnungs-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter).

### Relative Farben

Jede der oben aufgeführten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren, was die Definition von {{cssxref("&lt;color&gt;")}}-Werten relativ zu anderen bestehenden Farben erlaubt, anstatt einen Farbwert jedes Mal von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht das Erstellen von Komplementärfarben zu bestehenden Farben — wie helleren, dunkleren, gesättigten, halbdurchsichtigen oder invertierten Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbveränderungen. Weitere Informationen zu ihren relativen Syntaxen finden Sie auf jeder Farbfunktionsseite.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe die ausgegebene Farbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte beliebiger Syntax, die oben erwähnt wurde, zusammen mit optionalen prozentualen Anteilen für jede Farbe und gibt das Ergebnis ihres Mischens in einem bestimmten Farbraum mit einem bestimmten Anteil zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für die Verwendung in hellen bzw. dunklen Farbschemata vorgesehen ist. Welcher gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema gesetzt hat oder der Benutzer eines angefordert hat. Diese Funktion ist eine Abkürzung, mit der Sie dieselben Ergebnisse erzielen können wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage, aber mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Farbe und Luminanz verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
