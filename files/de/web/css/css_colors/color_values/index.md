---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise durch das Aufteilen der Farbe in Komponenten, wie etwa Mengen verschiedener Primärfarben, die miteinander gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben unabhängig davon, wo sie gerendert werden, gleich erscheinen.

Ein Farbmodell ist ein mathematisches Modell, das Farben mithilfe von Zahlenwerten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der Standard-Farbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer beliebigen Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore darin beschränkt, wie viele Farben sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt, wurden jedoch erweitert, als sich die Möglichkeiten verbesserten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf der menschlichen Wahrnehmung basieren und somit ein viel größeres {{Glossary("gamut", "Spektrum")}} an Farben bieten. Wir können jetzt Farben in CSS auf mehrere Arten beschreiben, und die Optionen erweitern sich ständig.

Dieser Leitfaden führt in die verschiedenen {{cssxref("&lt;color&gt;")}}-Wertetypen ein. Für eine ausführlichere Diskussion siehe die unten angegebenen Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe standardmäßiger Farbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz – möglicherweise gibt es kein Schlüsselwort für die exakte Farbe, die Sie verwenden möchten.

Farb-Schlüsselwörter beinhalten standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) sowie eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben, wie `accentcolortext` und `buttonface`, die die standardmäßigen Farbwahlentscheidungen des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farb-Schlüsselwörter sind nicht case-sensitiv. Weitere Informationen zu Farb-Schlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptwege, um eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre Rot-, Grün- und Blau-Komponenten in CSS zu definieren — hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert. Allerdings erlauben sie es, ein viel breiteres Spektrum an Farben anzugeben.

### Hexadezimale Zeichenketten-Notation

Die hexadezimale (Hex-) Zeichenketten-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün, Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente enthalten: den Alpha-Kanal (oder die Deckkraft).

Eine Farbe in der hexadezimalen Zeichenketten-Notation beginnt immer mit dem Zeichen `"#"`. Darauf folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenkette ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig deckende Farbe an, deren Rot-Komponente die hexadezimale Zahl `0xrr`, Grün-Komponente `0xgg` und Blau-Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rot-Komponente die hexadezimale Zahl `0xrr`, Grün-Komponente `0xgg` und Blau-Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rot-Komponente die hexadezimale Zahl `0xrr`, Grün-Komponente `0xgg` und Blau-Komponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rot-Komponente die hexadezimale Zahl `0xrr`, Grün-Komponente `0xgg` und Blau-Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blau-Farbkomponenten jeweils als zweistelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder als einstelliger Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`)) repräsentiert.

> [!NOTE]
> Das führende `0x` in den obigen Werten bezeichnet ein hexadezimales Ganzzahlenliteral. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert nicht dessen Wert. Deshalb: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden hexadezimalen Farben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Zeichen angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe durch Verdoppeln des Zeichens jeder Komponente berechnet; das heißt, `"#D"` wird zu `"#DD"`, wenn zeichnend.

Um die Werte 25% deckend zu machen, fügen Sie den Alpha-Kanal-Wert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenketten-Notation für Farben finden Sie im {{cssxref("hex-color")}} Datentyp.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer die Möglichkeit bieten muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer ermöglichen, die Textfarbe auszuwählen. Oder vielleicht erlaubt Ihre App dem Benutzer, Farben Ordnern oder Gegenständen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`Typ`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbwahlauswahl-Steuerelement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Kästchen, das ein Farbwahlauswahl-Steuerelement (mit einer Beschriftung, erstellt mit dem {{HTMLElement("label")}}-Element) und ein leeres {{HTMLElement("output")}}-Element enthält, in das wir den Wert der Farbe mit JavaScript ausgeben. Der Wert der Farbeingabe ist stets eine hexadezimale Zeichenkette.

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

Das folgende JavaScript aktualisiert die Farbe der Umrandung, um mit dem Anfangswert des Farbwahlauswahl-Steuerelements zu übereinstimmen, und fügt dann zwei Ereignis-Handler dem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen seines Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwahlauswahl-Steuerelement anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Farben der Umrandung des Kastens, sodass sie mit dem aktuellen Wert des Farbwahlauswahl-Steuerelements übereinstimmt.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwahlauswahl-Steuerelements endgültig ist. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den Zeichenkettenwert der ausgewählten Farbe setzen.

### RGB-funktionale Notation

RGB (Rot/Grün/Blau) Funktionalnotation, ähnlich der hexadezimalen Zeichenketten-Notation, stellt Farben unter Verwendung ihrer Rot-, Grün- und Blau-Komponenten dar (und optional einer Alpha-Kanal-Komponente für die Deckkraft). Anstelle einer Zeichenkette wird die Farbe jedoch mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blau-Komponentenwerte und einen optionalen Alpha-Kanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall `0` entspricht.

- `alpha`
  - : Der Alpha-Kanal wird als Prozentwert zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Beispielsweise kann ein strahlendes Rot, das 50% deckend ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-funktionalen Notation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farb-Funktionen mit einem Farbton-Komponenten

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/angle) von diesem Farbmodell's {{Glossary("color_wheel", "Farbkreis")}} — beinhalten die `srgb`-Farb-Funktionen `hsl()` und `hwb()`, die CIElab's `lch()`-Funktion und OKLab's `oklch()`-Farb-Funktion. Diese Farbfunktionen sind intuitiver, da der Farbton es ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-funktionale Notation

Die `hsl()`-CSS-Funktion war die erste farbtonbasierte Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von Änderungen der Werte für Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen, als bestimmte Farben über Rot-, Grün- und Blau-Kanalwerte zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbselektor in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()`- und `hwb()`-sRGB-Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als ein [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Die untenstehende Abbildung zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentwert, der definiert, wie weit die Farbe auf einer Skala zwischen komplett grau und mit der maximal möglichen Menge des angegebenen Farbtons ist.
Mit zunehmendem Helligkeitswert wechselt die Farbe von der dunkelsten zu der hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL-(oder HWB)-Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder als Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gradient (`grad`) oder Umdrehungen (`turn`). Der Farbton-Wert identifiziert den Grundton der Farbe, kontrolliert jedoch nicht, wie leuchtend oder matt oder wie hell oder dunkel die Farbe ist.

Die Sättigungs-Komponente (`S`) der Farbe gibt an, welcher Prozentsatz der endgültigen Farbe aus dem angegebenen Farbton besteht, wobei 100% voll gesättigt und 0% ein völliger Mangel an Farbe (Graustufen) bedeutet. Die Helligkeits-Komponente (`L`) gibt an, wie hell die Farbe auf einer gleitenden Skala zwischen komplett schwarz (`0%`) und komplett weiß (`100%`) ist. Sie können auch optional einen Alpha-Kanal einschließen, der durch einen Schrägstrich (`/`) vorangestellt wird, um die Farbe weniger als 100% deckend zu machen.

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

Der letzte Wert ist halbdeckend; er enthält den optionalen Alpha-Wert, der durch einen Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass es sich um Grad (`deg`) handelt.

### HWB-funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farb-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstelle von `hsl()`-Lichtheit und -Sättigung spezifiziert `hwb()` Weißheit (`W`) und Schwärze (`B`). Diese Funktion ist ebenfalls recht intuitiv - Sie können einen Farbton wählen und dann Mengen an Weiß und/oder Schwarz hinzufügen, um die gewünschte Farbe zu erzielen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie das Setzen von `s` auf `0%` mit `hsl()`. Wie bei `hsl()` kann ein optionaler Alpha-Wert eingefügt werden, der durch einen Schrägstrich `/` vorangestellt wird.

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

In den folgenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, fügen jedoch Weißheit und Schwärze zu jedem Farbton durch `hwb()` anstelle von Sättigung und Helligkeit hinzu:

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

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen wesentlichen Nachteil. Mit diesen Funktionen hat jeder vollgesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das entspricht nicht der menschlichen Wahrnehmung oder der Funktionsweise von Monitoren. Weiße Schrift auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber dieselbe Schrift auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar, sondern könnte den Augen Ihrer Nutzer schaden. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. Tatsächlich haben nicht alle Farbtöne dieselbe maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne die Textlesbarkeit zu beeinträchtigen? Dies können Sie mit Farb-Funktionen im CIELAB- und Oklab-Farbraum erreichen.

Die CIELAB- und Oklab-Farbräume repräsentieren den gesamten Farbumfang, den Menschen sehen können. Funktionen für CIELAB-Farben beinhalten [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab-Farb-Funktionen beinhalten [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle besteht darin, dass sie einheitlich sind, sodass eine gegebene Entfernung zwischen zwei Punkten im Farbraum für einen Betrachter gleichermaßen unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Typ von Modell wie CIELAB verwendet, aber zusätzliche numerische Optimierungsschritte enthält, sodass die Werte als genauer angesehen werden als CIELAB. Aufgrund dieser Optimierung sind die Farbtöne wahrnehmbar gleichmäßiger.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbtöne (`H`) und werden in diesem Abschnitt weiter behandelt. Die [`lab()` und `oklab()`](#lab_und_oklab)-Funktionen funktionieren anders, indem sie Helligkeit (`L`), Rot/Grün (entlang der `a`-Achse) und Gelb/Blau (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen ist, dass die "Helligkeit" als die wahrgenommene Helligkeit gilt; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farbton-Funktionen ist der Farbton (`h`)-Wert bei `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den `<Farbton>` Winkel der Farbe. Die Farben bei jedem Winkelwert sind jedoch nicht dieselben. Die Winkel, die zu bestimmten Farbtönen gehören, unterscheiden sich in den sRGB-, CIELAB (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe demonstrieren die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIELAB- und Oklab-Farbräumen:

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

Sie werden bemerken, wie die Helligkeit der letzteren Verläufe gleichmäßiger über das Spektrum der Farbtöne ist als im sRGB-Verlauf. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blautöne im CIELAB länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die Verteilung der `lch()`-Blautöne ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im Oklab-Farbraum gelöst und daher in der `oklch()`-Farbenotation.

Wie oben besprochen, ist der Farbton (`H`) in der `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `Helligkeit` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` das vollständige Fehlen von Helligkeit ist, was schwarz ist.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`), welches das Chroma der Farbe ist, oder die "Menge der Farbe". Dies ist ähnlich zu dem `S`-Sättigungswert der `hsl()`-Farbfunktion. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; das Ergebnis ist ein Grauton zwischen Weiß und Schwarz, inklusive, abhängig von dem Helligkeitswert. Die Zahlenwerte sind theoretisch unendlich, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen Alpha-Transparenzwert, der durch einen Schrägstrich (`/`) vorangestellt wird.

Das folgende Beispiel zeigt den Effekt des Änderns des Helligkeitswerts in den `lch()`- und `oklch()`-Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-Funktional-Notation drückt eine bestimmte Farbe im CIE L\*a\*b\*-Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren den gesamten Farbumfang, den Menschen sehen können, indem sie die Helligkeit der Farbe (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert spezifizieren.

Ähnlich wie bei `lch()` und `oklch()` ist die `Helligkeit` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` komplett schwarz und `100%` komplett weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` komplett schwarz ist und `1`/`100` komplett weiß ist.

Der `a`-Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt an, wie weit die Farbe auf der a-Achse im Farbraum ist, die definiert, wie grün (Richtung -100%) oder rot (Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte signiert sind (positive und negative Werte erlaubt) und theoretisch unendlich, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Limits setzen können. In der Praxis können Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der `b`-Wert unterliegt denselben Einschränkungen. Er gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, die definiert, wie blau (Richtung -100%) oder gelb (Richtung +100%) die Farbe ist.

Das folgende Beispiel demonstriert die Effekte des Variierens der `a`-Achse via einer `lab()`-Funktion und der `b`-Achse über eine `oklab()`-Funktion.

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

## Zusätzliche farbfunktionale Notationen

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist hilfreich, um eine Farbe für hochauflösende Geräte mit weiter Farb-{{Glossary("Gamut", "Gamut")}} zu beschreiben.
Falls Sie beispielsweise die Farbe `display-p3 0 0 1` anzeigen möchten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) at-rule verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie sie verwenden:

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

Das Verstehen von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die älteren, oben besprochenen sRGB-Farbnotationen — `hsl()`, `hwb()` und `rgb()` — drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen viel weiteren Farbbereich unterstützt. Daher gibt die Verwendung der älteren Funktionstypen zur Definition relativer Farben die Ausgabe einer Farbe zurück, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode als `color(srgb ...)`-Wert dargestellt wird.

Um ein Beispiel für die Umwandlung der `hsl()`, `hwb()` und `rgb()`-Farbfunktionen zu `color()` im `srgb`-Farbraum zu sehen, schauen Sie sich unser [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker) an.

### Relative Farben

Jede der oben aufgeführten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, was es ermöglicht, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben anzugeben, anstatt jedes Mal einen neuen Farbwert von Grund auf neu zu definieren. Diese leistungsfähige Funktion ermöglicht das Erstellen von Ergänzungen zu bestehenden Farben – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farb-Anpassungen. Sehen Sie sich jede Seite der Farbfunktion an, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben angemerkt, wird bei der Verwendung von `rgb()`, `hsl()` oder `hwb()` zur Ausgabe einer relativen Farbe die ausgegebene Farbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte in einer der oben erwähnten Notationen, optional mit prozentualen Anteilswerten für jede Farbe, und gibt das Ergebnis des Mischens dieser Farben in einem gegebenen Farbraum in einem bestimmten Verhältnis zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft festzulegen, die für die Verwendung in hellen und dunklen Farbschemata vorgesehen sind. Welcher gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema eingestellt hat oder ob der Benutzer ein solches angefordert hat. Dies ist eine Abkürzungsfunktion, mit der Sie die gleichen Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage, aber mit weniger Code, erzielen können.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
