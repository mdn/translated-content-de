---
title: CSS Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies erfolgt typischerweise durch die Aufspaltung der Farbe in Komponenten, zum Beispiel durch Mengen verschiedener Primärfarben zum Mischen oder durch Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, unabhängig davon, wo sie dargestellt werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben durch numerische Werte repräsentiert. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells – der Standardrot-, -grün- und -blaue Farbraum – wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass jede gegebene Farbe konsistent beschrieben wird. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden gleich aussehen.

Ursprünglich waren Monitore in der Anzahl der Farben, die sie darstellen konnten, begrenzt, und CSS-Farben waren durch diese Einschränkungen begrenzt, wobei sie sich mit verbesserten Fähigkeiten erweiterten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren, und bieten ein viel breiteres {{Glossary("gamut", "Spektrum")}} von Farben. Wir können nun Farbe in CSS auf verschiedene Weise beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen ein. Für eine detailliertere Diskussion sehen Sie sich die unten bereitgestellten Referenzlinks an.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, mit denen Sie Schlüsselwörter anstelle von numerischen Darstellungen verwenden können, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch begrenzter Ansatz – möglicherweise gibt es kein Schlüsselwort, das genau die gewünschte Farbe darstellt.

Farbschlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Graustufen (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbwahl des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht case-sensitiv. Siehe den {{cssxref("named-color")}}-Datentyp für weitere Informationen zu Farbschlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptweisen, eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale Werte und `rgb()`-Werte. Wie benannte Farben verwenden auch diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden. Sie erlauben jedoch, ein viel breiteres Spektrum von Farben zu spezifizieren.

### Hexadezimale Zeichenfolgennotation

Die hexadezimale (hex) Zeichenfolgennotation verwendet einen hexadezimalen Wert, um jede Komponente (rot, grün und blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente umfassen: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgennotation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig undurchsichtige Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blaukomponenten der Farbe jeweils durch einen zweistelligen hexadezimalen Wert repräsentiert werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) darstellt, oder durch einen einstelligen hexadezimalen Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`)).

> [!NOTE]
> Das vorausgehende `0x` in den obigen Werten zeigt ein hexadezimales Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind gleichwertige Farbmengen; beide sind rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente verdoppelt wird; das heißt `"#D"` wird zu `"#DD"`, wenn es gezeichnet wird.

Um die Werte 25% undurchsichtig zu machen, fügen Sie den Alphakanalwert hinzu, wie unten gezeigt:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}}-Datentyp für weitere Informationen zur hexadezimalen Zeichenfolgennotation von Farben.

#### HTML Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website es dem Benutzer ermöglichen muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer ermöglichen, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben für Ordner oder Elemente zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"`-[`type`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbpicker-Steuerelement darstellt.

In diesem Beispiel können Sie eine Farbe wählen. Sobald eine Wahl getroffen wird, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld mit einem Farbpicker-Steuerelement (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und einem leeren {{HTMLElement("output")}}-Element, in das wir den Wert der Farbe mithilfe von JavaScript ausgeben. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Farbe der Umrandung, damit sie zum aktuellen Wert des Farbpickers passt, und fügt zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbpicker anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Umrandungsfarbe des Feldes auf den aktuellen Wert des Farbpickers.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbpickers festgelegt wird. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den Zeichenfolgenwert der ausgewählten Farbe setzen.

### RGB-funktionale Notation

RGB (Rot/Grün/Blau)-funktionale Notation, ähnlich wie die hexadezimale Zeichenfolgennotation, repräsentiert Farben mithilfe ihrer Rot-, Grün- und Blaukomponenten (und optional einer Alphakanalkomponente für die Deckkraft). Anstelle einer Zeichenkette wird die Farbe jedoch unter Verwendung der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blaukomponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich) sein, ein {{cssxref("&lt;percentage&gt;")}} von 0 % bis 100 %, oder das Schlüsselwort `none`, was in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}}-Farbfunktion für weitere Informationen zur RGB-funktionalen Notation.

## Farbfunktionsmodellen mit einem Farbtonkomponenten

Die Farbfunktionsmodellen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue)-Komponente beinhalten — ein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) aus dem Farbmodell-Farbrad — umfassen die `srgb` Farbfunktionsmodellen `hsl()` und `hwb()`, CIElab's `lch()`-Funktion und OKLab's `oklch()`-Farbfunktionsmodelle. Diese Farbfunktionsmodellen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL funktionale Notation

Die `hsl()` CSS-Farbfunktion war die erste farbtonbasierte Farbfunktionsmodelle, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung des Variierens von Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen, als spezifische Farben über Rot-, Grün- und Blaukanalwerte zu deklarieren. Darüber hinaus ähnelt HSL dem HSB (Farbton, Sättigung und Helligkeit)-Farbwähler in Photoshop, was ihn für viele Leute sofort vertraut machte, als er zuerst unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farbfunktionsmodellen sind beide zylindrisch. Der Farbton definiert die Farbe als [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbrad")}}. Das untenstehende Diagramm zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe entlang einer Skala zwischen vollständig grau und der maximal möglichen Menge an gegebenem Farbton ist. Wenn der Wert der Helligkeit zunimmt, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von schwarz zu weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbtonkomponente (`H`) einer HSL- (oder HWB-)Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er wieder als Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Drehungen (`turn`). Der Farbwert identifiziert, welche Basisschattierung die Farbe hat, kontrolliert jedoch nicht, wie lebendig oder stumpf oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe spezifiziert den Prozentsatz am Endfarbton, der aus dem angegebenen Farbton besteht, wobei 100 % vollständig gesättigt und 0 % ein völliger Mangel an Farbe (Graustufen) ist. Die Helligkeitskomponente (`L`) spezifiziert, wie hell die Farbe entlang einer Skala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einschließen, dem ein Schrägstrich (`/`) voransteht, um die Farbe auf weniger als 100 % undurchsichtig zu machen.

Hier einige Farbbeispiele in HSL-Notation:

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

Der letzte Wert ist halb undurchsichtig; er enthält den optionalen Alpha-Wert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass er in Grad (`deg`) vorliegt.

### HWB funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` rot ist. Im Gegensatz zu `hsl()`-Helligkeit und Sättigung spezifizieren `hwb()`-Funktionsmodellen Weißheit (`W`) und Schwarzheit (`B`). Diese Funktion ist auch recht intuitiv — sie ermöglicht Ihnen, einen Farbton auszuwählen und dann Mengen an Weiß und/oder Schwarz hinzuzufügen, um die gewünschte Farbe zu erreichen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` `100%` (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie beim Setzen von `s` auf `0%` bei `hsl()`. Wie bei `hsl()` kann ein optionaler Alphakanalwert einbezogen werden, dem ein Schrägstrich `/` vorangestellt ist.

Hier einige Beispiele zur Verwendung der HWB-Notation:

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

In den untenstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen jedem Farbton Weißheit und Schwarzheit über `hwb()` hinzu statt Sättigung und Helligkeit:

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

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen wesentlichen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht die Art, wie das menschliche Sehen oder Monitore funktionieren. Weißer Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern könnte auch die Augen Ihrer Benutzer schmerzen lassen. In diesen Farbfunktionsmodellen ist die Helligkeit einer Farbe relativ zu anderen Farben und nicht zur menschlichen Wahrnehmung. Tatsächlich haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne Text unleserlich zu machen? Mit Farbfunktionsmodellen in den CIELAB- und Oklab-Farbräumen können Sie das.

Die CIELAB- und Oklab-Farbräume repräsentieren die gesamte Farbpalette, die Menschen sehen können. CIE-Lab-Farbfunktionsmodellen umfassen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab). Oklab-Farbfunktionsmodellen umfassen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Der Hauptzweck dieser Modelle ist es, dass sie gleichmäßig sind, sodass eine gegebene Distanz zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, jedoch unter Verwendung zusätzlicher numerischer Optimierungsschritte erstellt wurde, sodass die Werte genauer als CIELAB angesehen werden. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsgleicher.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter behandelt. Die [`lab()` und `oklab()`](#lab_und_oklab)-Funktionen arbeiten anders, indem sie Helligkeit (`L`), Rot/Grün-Neigung (entlang der `a`-Achse) und Gelb/Blau-Neigung (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionsmodellen besteht darin, dass die "Helligkeit" wahrnehmungsgemäße Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, und nicht die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbfunktionsmodellen mit Farbton ist der Farbton (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`), was den `<hue>`-Winkel der Farbe darstellt. Die Farben bei jedem Winkelwert sind jedoch nicht gleich. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich über die sRGB-, CIELAB- (von `lch()` verwendet) und Oklab- (von `oklch()` verwendet) Farbräume hinweg.

Die folgenden Gradienten veranschaulichen die Farbtöne bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE-Lab- und OKlab-Farbräumen:

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

Sie werden vielleicht bemerken, wie die Helligkeit bei den letzteren Gradienten gleichmäßiger über das Spektrum der Farbtöne verteilt ist als beim sRGB-Gradienten. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blautöne im CIE-Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blautonausbreitung ist aufgrund eines Fehlers, der Chroma und Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum gelöst und daher die `oklch()`-Farbfunktion.

Wie oben besprochen, ist der Farbton (`H`) in den `lch()`- und `oklch()`-Funktionen ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` den vollständigen Mangel an Helligkeit bedeutet, was schwarz ist.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder der "Farbanteil". Dies ist ähnlich wie der `S` Sättigungswert der `hsl()`-Funktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; was zu einem Grauton zwischen weiß und schwarz inklusive führt, je nach Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` für `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alpha-Transparenzwert, dem ein Schrägstrich (`/`) vorangestellt ist.

Das folgende Beispiel zeigt die Wirkung der Änderung des Helligkeitswertes in den `lch()`- und `oklch()`-Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Funktionalausdruck gibt eine gegebene Farbe im CIE L\*a\*b\*-Farbraum an. Die [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab)-Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren die gesamte Farbpalette, die Menschen sehen können, indem sie die Helligkeit (`L`) die rot/grün Achsenwert (`a`), den blau/gelb Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert spezifizieren.

Ähnlich wie `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` völlig schwarz ist und `100%` völlig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` völlig schwarz und `1`/`100` völlig weiß ist.

Der `a`-Wert ist eine `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der a-Achse im Farbraum, die definiert, wie grün (bewegend in Richtung -100%) oder rot (bewegend in Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (was sowohl positive als auch negative Werte zulässt) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der Grenzen ±125 oder ±0.4 (±100%) setzen können. In der Praxis können die Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert hat dieselben Einschränkungen. Er spezifiziert die Entfernung der Farbe entlang der b-Achse im Farbraum, die definiert, wie blau (bewegend in Richtung -100%) oder gelb (bewegend in Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Effekte des Variierens der `a`-Achse mittels einer `lab()`-Funktion und der `b`-Achse mittels einer `oklab()`-Funktion.

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

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren {{Glossary("Gamut", "Farbspektren")}} zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1`-Farbe anzeigen möchten, die außerhalb des sRGB-Spektrums liegt, könnten Sie eine `@media`-[`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut)-At-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als Nächstes besprochen werden. Die älteren sRGB-Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()` und `rgb()`— drücken nicht das volle Spektrum der sichtbaren Farben aus, während die `color()`-Funktion ein viel breiteres Farbspektrum unterstützt. Daher wird bei der Verwendung älterer Funktionstypen zur Definition relativer Farben, die Ausgabe der Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode zurückgegeben wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für die Umwandlung der Formate `rgb()`, `hsl()`, `hwb()` und anderer [Farbformate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, schauen Sie sich unser [Farbformat-Umwandlungstool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter) an.

### Relative Farben

Jede der oben aufgeführten Farbfunktionsmodellen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren, was es ermöglicht, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben anstatt einen Farbwert jedes Mal von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementärfarben zu bestehenden Farben — wie hellere, dunklere, gesättigtere, halbdurchsichtige oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbanpassungen. Siehe jede Farbfunktionsseite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()` oder `hwb()` zur Ausgabe einer relativen Farbe die Ausgabe der Farbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix()-Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte in beliebiger Syntax, die oben erwähnt wurde, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

### light-dark()-Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft zu spezifizieren, die für die Verwendung in hellen und dunklen Farbschemata vorgesehen ist. Welche eingestellt ist, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder ob der Benutzer eines angefordert hat. Dies ist eine Abkürzungsfunktion, die es Ihnen ermöglicht, dieselben Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage zu erzielen, aber mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe weisen anwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Das Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Kontrast von Farben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/Guides/Colors)
