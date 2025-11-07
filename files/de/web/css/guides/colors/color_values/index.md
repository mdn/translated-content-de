---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies wird typischerweise dadurch erreicht, dass die Farbe in Komponenten aufgebrochen wird, z. B. Mengen verschiedener Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall dort gleich erscheinen, wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben durch numerische Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB` Farbraum des RGB-Farbmodells — der standardmäßige rote, grüne und blaue Farbraum — wurde 1996 für Computermonitore und das Web geschaffen. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore in der Anzahl der Farben, die sie darstellen konnten, beschränkt, und CSS-Farben waren durch diese Einschränkungen begrenzt, expandierten jedoch mit der Verbesserung der Möglichkeiten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und ein viel breiteres {{Glossary("gamut", "Gamut")}} von Farben bieten. Wir können nun in CSS auf verschiedene Arten Farbe beschreiben, und die Optionen werden ständig erweitert.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von standardmäßigen Farbnamen, die Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch eingeschränkterer Ansatz — möglicherweise gibt es kein Schlüsselwort, das genau den Farbton darstellt, den Sie verwenden möchten.

Farbschlüsselwörter umfassen standardmäßig Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer gemischter Farben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind dem sRGB (`srgb`)-Farbraum zugeordnet.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl des Nutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht case-sensitiv. Siehe den {{cssxref("named-color")}}-Datentyp für weitere Informationen zu Farbschlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptwege, um eine {{Glossary("RGB", "RGB")}} Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — Hexadezimal- und `rgb()`-Werte. Ähnlich wie bei benannten Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind dem sRGB (`srgb`)-Farbraum zugeordnet. Sie ermöglichen jedoch die Spezifikation eines viel breiteren Farbspektrums.

### Hexadezimale String-Notation

Die hexadezimale (Hex) String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (rot, grün und blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alpha-Kanal (oder Transparenz).

Eine Farbe in hexadezimaler String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcode. Der String ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig undurchsichtige Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hexwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) repräsentiert, oder als einstelliger Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`).

> [!NOTE]
> Das vorangestellte `0x` in den obigen Werten kennzeichnet ein hexadezimales Integer-Literal. Hexadezimale Integer können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- und Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn sie gezeichnet wird.

Um die Werte 25 % undurchsichtig zu machen, fügen Sie den Alpha-Kanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}} Datentyp für weitere Informationen zur hexadezimalen String-Notation für Farben.

#### HTML-Farbeingabefeld-Typ

Es gibt viele Situationen, in denen Ihre Website es dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe zu wählen. Oder vielleicht ermöglicht Ihre App es dem Benutzer, Farben Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle verfügt das {{HTMLElement("input")}}-Element über einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbwahlsteuerungs-Element rendert.

Dieses Beispiel ermöglicht Ihnen die Auswahl einer Farbe. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt, und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbwahlsteuerelement enthält (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element, in welches wir den Wert der Farbe mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Farbe des Rands, um mit dem anfänglichen Wert des Farbwahlwerkzeugs übereinzustimmen, und fügt dann zwei Ereignis-Handler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen seines Werts zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwahlwerkzeug ändert. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Randfarbe des Felds so, dass sie dem aktuellen Wert des Farbwahlwerkzeugs entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwahlwerkzeugs finalisiert wird. Wir reagieren, indem wir den Inhalt von `<output>` auf den string-Wert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

RGB (Red/Green/Blue) Funktionsnotation, ähnlich wie hexadezimale String-Notation, repräsentiert Farben, indem ihre roten, grünen und blauen Komponenten (und optional eine Alpha-Kanal-Komponente für Transparenz) verwendet werden. Anstatt jedoch einen String zu verwenden, wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion nimmt 3 oder 4 Eingabeparameter an — rote, grüne und blaue Komponentenwerte und einen optionalen Alpha-Kanal-Wert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich) sein, ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none`, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alpha-Kanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% opaque ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}} Farb-Funktion für mehr Informationen zur RGB-Funktionsnotation.

## Farb-Funktionen mit einem Farbton-Komponent

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente – einen [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) dieses Farbmodells {{Glossary("color_wheel", "color wheel")}} – beinhalten, umfassen die `srgb` Farb-Funktionen `hsl()` und `hwb()`, CIElab's `lch()` Funktion, und OKLab's `oklch()` Farb-Funktion. Diese Farb-Funktionen sind intuitiver, da der Farbton es uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-Funktionsnotation

Die `hsl()` CSS-Farb-Funktion war die erste hue-basierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Auswirkung von variierenden Hue (`h`), Saturation (`s`) und Lightness (`l`) Werten zu bestimmen, als spezifische Farben über die roten, grünen und blauen Kanalwerte zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung, Helligkeit) Farbpicker in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farb-Funktionen sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das folgende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe auf einer Skala zwischen vollständig Graustufen und der maximal möglichen Menge des gegebenen Farbtons liegt.
Wenn der Wert der Helligkeit zunimmt, wechselt die Farbe von der dunkelsten bis zur hellsten möglichen Farbe (von Schwarz bis Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verbreitet unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Hue (`H`) Komponente einer HSL- (oder HWB-)Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta bewegt, bevor er bei Rot wieder bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gradian (`grad`) oder Turns (`turn`). Der Hue-Wert identifiziert, welcher Grundton die Farbe hat, kontrolliert aber nicht, wie lebendig oder matt oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) Komponente der Farbe gibt den Prozentsatz der finalen Farbe an, die aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt ist und 0% den vollständigen Mangel an Farbe (Graustufen) darstellt. Die Helligkeit (`L`) Komponente gibt an, wie hell die Farbe auf einer Gleitachse zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alpha-Kanal hinzufügen, der von einem Schrägstrich (`/`) vorausgegangen wird, um die Farbe weniger als 100% opaque zu machen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alpha-Wert, dem ein Schrägstrich vorausgeht.

> [!NOTE]
> Wenn Sie die Einheit der Hue weglassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farb-Funktion verwendet das gleiche Hue-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt jedoch `hsl()`'s Helligkeit und Sättigung zu verwenden, gibt die `hwb()`-Funktion Weiß (`W`) und Schwarz (`B`) an. Diese Funktion ist auch ziemlich intuitiv — Sie können einen Farbton wählen und dann weiße oder schwarze Anteile hinzufügen, um die gewünschte Farbe zu erzielen.

`W` und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie die `s` auf `0%` mit `hsl()` zu setzen. Wie bei `hsl()` kann ein optionaler Alpha-Wert enthalten sein, dem ein Schrägstrich `/` vorausgeht.

Hier einige Beispiele für die Verwendung der HWB-Notation:

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

In den folgenden Beispielen setzen wir die gleichen Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen jedem Farbton über `hwb()` Weiß und Schwarz hinzu, anstatt Sättigung und Helligkeit:

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

### LCH und OkLCh: CIELAB und Oklab-Farbräume

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder vollständig gesättigte Hue-Winkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das entspricht nicht der menschlichen Wahrnehmung oder den Einstellungen der Monitore. Weißer Text auf vollständig gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf vollständig gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar, sondern kann Ihren Nutzern in den Augen schmerzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben und nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne dass der Text unlesbar wird? Dies ist mit Farb-Funktionen in den CIELAB- und Oklab-Farbräumen möglich.

Die CIELAB- und Oklab-Farbräume stellen das gesamte Spektrum der Farben dar, die Menschen sehen können. CIE Lab-Farb-Funktionen umfassen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab). Oklab-Farb-Funktionen umfassen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum einem Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber durch zusätzliche numerische Optimierungsschritte aufgebaut ist, sodass die Werte als genauer als CIELAB angesehen werden. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Hue (`H`), und werden in diesem Abschnitt weiter erläutert. Die Funktionen [`lab()` und `oklab()`](#lab_und_oklab) funktionieren unterschiedlich, indem sie Helligkeit (`L`), Rot/Grünton (entlang der `a`-Achse) und Gelb/Blau-Ton (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen ist, dass die "Helligkeit" die wahrgenommen Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie durch das menschliche Auge wahrgenommen wird, nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich den sRGB Hue Farb-Funktionen, ist der Hue (`h`) Wert in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), die den `<hue>` Winkel der Farbe repräsentiert. Jedoch, die Farben bei jedem Winkelwert sind nicht die gleichen. Die Winkel, die bestimmte Farbtöne darstellen, unterscheiden sich zwischen den sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`) Farbräumen.

Die folgenden Gradienten demonstrieren die Farbton-Farben bei jedem Winkelwert von `0deg` bis `360deg` in den sRGB, CIE Lab und OKlab Farbräumen:

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

Sie werden feststellen, dass die Helligkeit der letzteren Gradienten über das Spektrum der Farbtöne hinweg gleichmäßiger ist als der sRGB-Gradient. Wählen Sie das Kontrollkästchen im Beispiel oben aus, um den Farbton-Gradienten in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch die unterschiedliche Verteilung von Blauwerten im CIE Lab im Vergleich zu den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die unterschiedliche Verteilung von Blau im `lch()` ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit der Farbtonwerte zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum behoben und daher die `oklch()`-Farbnation.

Wie oben beschrieben, ist der Farbton (`H`) in den `lch()` und `oklch()` eine `<angle>`, `number` oder das Schlüsselwort `none`. Die `Helligkeit` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` für vollständigen Mangel an Helligkeit steht, was schwarz ist.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`), ist das "Farbmaß", oder "Quantität der Farbe". Dies ist ähnlich zum `S` Sättigungswert der `hsl()` Farb-Funktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; was zu einem Grauton zwischen Weiß und Schwarz einschließ

lich auf Basis des Helligkeitswertes führt. Die Zahlenwerte sind theoretisch unbeschränkt, wobei `100%` für `lch()` gleich `150` und für `oklch()` gleich `0.4` ist.

Wie die anderen Farb-Funktionen gibt es auch einen optionalen Alpha-Transparenzwert, dem ein Schrägstrich (`/`) vorausgegangen ist.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Farbspektrum, das Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert angeben.

Ähnlich wie bei `lch()` und `oklch()` ist die `Helligkeit` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert bestimmt die Farbe entlang der a-Achse im Farbraum, was definiert, wie grün (bewegend in Richtung -100%) oder wie rot (bewegend in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte zulassen) und theoretisch unbeschränkt, bedeutet das, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen setzen können. In der Praxis können Werte ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert unterliegt den gleichen Einschränkungen. Er gibt an, wie die Farbe entlang der b-Achse im Farbraum verteilt ist, was definiert, wie blau (bewegend in Richtung -100%) oder gelb (bewegend in Richtung +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen der Variation der `a`-Achse über eine `lab()` Funktion und der `b`-Achse über eine `oklab()` Funktion.

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

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion nutzen.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit erweiterten Farb{{Glossary("Gamut", "¸ParcelManager")}}en bereitzustellen.
Wenn Sie beispielsweise die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis der `color()`-Funktion ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren sRGB-Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()` Funktion einen viel breiteren Farb-Gamut unterstützt. Daher wird die Ausgabe der Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode erhalten wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Umwandlung der `rgb()`, `hsl()`, `hwb()`, und anderer [Farbsformate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, schauen Sie sich unser [Farbformat-Konvertierungstool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter) an.

### Relative Farben

Jede oben genannte Farb-Funktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte im Verhältnis zu anderen existierenden Farben anzugeben, anstatt jedes Mal einen Farbwert von Grund auf neu zu setzen. Dieses leistungsstarke Feature ermöglicht es, Komplementärfarben zu existierenden Farben zu erschaffen — wie leichtere, dunklere, gesättigtere, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus, um Paletten zu erstellen und Farb-Anpassungen zu definieren. Sehen Sie auf den Seiten zu jeder Farb-Funktion nach, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()`, oder `hwb()` verwenden, um eine relative Farbe auszugeben, wird die Ausgabe der Farbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte irgendeiner oben genannten Syntax, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis des Mischens im angegebenen Farbraum zu einem gegebenen Anteil zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion lässt Sie zwei Farbwerte für eine geplante Verwendung in hellen und dunklen Farbschemata angeben. Welche davon eingestellt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer eines von beiden angefordert hat. Dies ist eine Abkürzungsfunktion, die es Ihnen ermöglicht, die gleichen Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature-Abfrage zu erreichen, aber mit weniger Code.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
