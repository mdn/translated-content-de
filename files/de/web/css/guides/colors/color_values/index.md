---
title: CSS Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept einer "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise durch das Zerlegen der Farbe in Komponenten, wie zum Beispiel verschiedene Primärfarben, die gemischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, unabhängig davon, wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erzeugt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB` Farbraum des RGB-Farbmodells - der Standardfarbraum für Rot, Grün und Blau - wurde 1996 für Computermonitore und das Web entwickelt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass die Beschreibung einer bestimmten Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt, was die Anzahl der Farben angeht, die sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt, erweiterbar, wenn sich die Fähigkeiten verbesserten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die stattdessen auf menschlicher Wahrnehmung basieren und eine viel breitere {{Glossary("gamut", "Gamut")}} von Farben bieten. Wir können jetzt Farbe in CSS auf verschiedene Weise beschreiben, und die Optionen erweitern sich stetig.

Dieser Leitfaden stellt die verschiedenen {{cssxref("&lt;color&gt;")}}-Werttypen vor. Für eine ausführlichere Diskussion finden Sie unten die Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von standardmäßigen Farbennamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, aber auch eingeschränkter Ansatz — es gibt möglicherweise kein Schlüsselwort, das genau die Farbe darstellt, die Sie verwenden möchten.

Farbenschlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` zu `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer gemischter Farben, wie `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind dem sRGB (`srgb`) Farbraum zugeordnet.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbenauswahl darstellen, die vom Benutzer, dem Browser oder dem Betriebssystem getroffen wurde.

Alle Farbenschlüsselwörter sind nicht empfindlich gegenüber Groß- und Kleinschreibung. Weitere Informationen zu Farbenschlüsselwörtern finden Sie im {{cssxref("named-color")}}-Datentyp.

## RGB-Werte

Es gibt zwei primäre Möglichkeiten, eine {{Glossary("RGB", "RGB")}}-Farbe durch ihre roten, grünen und blauen Komponenten in CSS zu definieren — hexadezimal und `rgb()` Werte. Wie benannte Farben, verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind dem sRGB (`srgb`) Farbraum zugeordnet. Sie ermöglichen jedoch eine viel größere Farbvielfalt zu spezifizieren.

### Hexadezimale String-Notation

Die hexadezimale (Hex-)String-Notation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe zu repräsentieren. Es kann auch eine vierte Komponente enthalten: den Alpha-Kanal (oder Deckkraft).

Eine Farbe in der hexadezimalen String-Notation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Der String ist nicht empfindlich gegenüber Groß- und Kleinschreibung.

- `"#rrggbb"`
  - : Gibt eine vollständig opake Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert, desto durchscheinender wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr`, die grüne Komponente `0xgg` und die blaue Komponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` spezifiziert; je niedriger dieser Wert, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hex-Wert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliges Hex-Wert (eine Zahl zwischen 0 (`0`) und 15 (`F`) darstellt.

> [!NOTE]
> Das führende `0x` in den obigen Werten zeigt ein hexadezimales Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß-/Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellig Notation verwenden, wird die endgültige Farbe berechnet, indem die Ziffer jeder Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte zu 25% undurchsichtig zu machen, fügen Sie den Alpha-Kanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen String-Notation für Farben finden Sie im {{cssxref("hex-color")}}-Datentyp.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer erlauben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie einen editierbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder vielleicht ermöglicht Ihre App dem Benutzer, Farben Ordnern oder Elementen zuzuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"` [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), das ein Farbwähler-Steuerelement rendert.

Dieses Beispiel ermöglicht es Ihnen, eine Farbe auszuwählen. Sobald eine Wahl getroffen wird, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbwähler-Steuerelement (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element enthält, in das wir den Wert der Farbe mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer ein hexadezimaler String.

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

Das folgende JavaScript aktualisiert die Farbe der Umrandung, um dem Anfangswert des Farbwählers zu entsprechen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element hinzu, um auf Änderungen seines Werts zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis eintrifft, setzen wir die Umrandungsfarbe des Feldes auf den aktuellen Wert des Farbwählers.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird empfangen, wenn der Wert des Farbwählers finalisiert wurde. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den String-Wert der ausgewählten Farbe setzen.

### RGB-Funktionsnotation

Die RGB-(Red/Green/Blue)-Funktionsnotation repräsentiert, wie die hexadezimale String-Notation, Farben anhand ihrer roten, grünen und blauen Komponenten (und optional einer Alpha-Kanal-Komponente für Deckkraft). Statt eines Strings wird die Farbe jedoch mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter - rote, grüne und blaue Komponentenwerte sowie einen optionalen Alpha-Kanal-Wert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall gleich `0` ist.

- `alpha`
  - : Der Alpha-Kanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Ein helles Rot, das zu 50% opak ist, kann z.B. als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-Funktionsnotation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farbmethoden mit einem Farbtonkomponente

Die Farbmethoden, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) von dem Farbmodell's {{Glossary("color_wheel", "Farbkreis")}} — beinhalten die `srgb` Farbfunktionen `hsl()` und `hwb()`, CIElab's `lch()`-Funktion und OKLab's `oklch()`-Farbmethode. Diese Farbfunktionen sind intuitiver, da der Farbton es erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. festzustellen.

### HSL-Funktionsnotation

Die `hsl()`-CSS-Funktion war die erste auf Farbton basierende Farbmethode, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist im Allgemeinen einfacher, die Wirkung von variierenden Farbton- (`h`), Sättigungs- (`s`) und Helligkeitswerten (`l`) zu bestimmen, als spezifische Farben über rote, grüne und blaue Kanalwerte zu deklarieren. Darüber hinaus ist HSL dem HSB-Farbwähler (Farbton, Sättigung und Helligkeit) in Photoshop ähnlich, was vielen Menschen beim erstmaligen Support vertraut machte.

Die `hsl()` und `hwb()` sRGB-Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL Farbenzylinder. Die Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe entlang einer Skala zwischen völlig Graustufen bis hin zur maximal möglichen Menge des gegebenen Farbtons ist.
Bei steigender Helligkeit der Farbe geht der Übergang von der dunkelsten zu der hellsten möglichen Farbe (von schwarz zu weiß).

![HSL Farbenzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL (oder HWB) Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch die Farben Gelb, Grün, Cyan, Blau und Magenta geht, bevor er bei 360° wieder bei Rot endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gons (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert bestimmt, welche Grundfarbe die Farbe hat, beeinflusst jedoch nicht, wie lebendig oder stumpf oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) der Farbe gibt den Prozentsatz der Endfarbe an, der aus dem angegebenen Farbton besteht, wobei 100 % vollständig gesättigt und 0 % ein völliges Fehlen von Farbe (Graustufen) ist. Die Helligkeitskomponente (`L`) gibt an, wie hell die Farbe entlang einer gleitenden Skala zwischen vollständig Schwarz (`0 %`) und vollständig Weiß (`100 %`) ist. Sie können auch optional einen Alpha-Kanal einfügen, dem ein Schrägstrich (`/`) vorangestellt ist, um die Farbe weniger als 100 % opak zu machen.

Hier sind einige Beispielhsl() Farben in HSL-Notation:

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB-Funktionsnotation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Funktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` rot ist. Stattdessen spezifizieren `hwb()`-Funktionen jedoch Weißheit (`W`) und Schwarzheit (`B`). Diese Methode ist ebenfalls sehr intuitiv — sie erlaubt, mit einem Farbton zu beginnen und dann Weiß oder Schwarz hinzuzufügen, um die gewünschte Farbe zu erreichen.

`W` und `B`-Werte reichen von `0 %` bis `100 %` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100 % (oder `1`) oder größer ist, wird die Farbe grau, ähnlich wie bei `hsl()` mit der Sättigung `s` auf `0 %`. Wie bei `hsl()` kann auch ein optionaler Alphawert hinzugefügt werden, dem ein Schrägstrich `/` vorangestellt ist.

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

In den nachfolgenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, fügen jedoch Weißheit und Schwarzheit über `hwb()` hinzu anstelle von Sättigung und Helligkeit:

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

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder vollständig gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) dieselbe Helligkeit, aber das ist nicht so, wie menschliches Sehen oder Monitore funktionieren. Weißer Text auf vollständig gesättigtem Blau (`hsl(240deg 100% 50%)`) ist lesbar, aber derselbe Text auf vollständig gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern auch Ihre Augen verletzen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne dieselbe maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne dass der Text unlesbar wird? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren den gesamten Bereich an Farben, die Menschen sehen können. CIE Lab Farbfunktionen beinhalten [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab). Oklab Farbfunktionen beinhalten [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Das Hauptziel dieser Modelle ist, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum für einen Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber zusätzliche numerische Optimierungsschritte enthält, sodass die Werte als genauer angesehen werden als CIELAB. Aufgrund dieser Optimierung sind Farbnuancen wahrnehmungsgerechter.

Die `lch()`- und `oklch()`-Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter behandelt. Die [`lab()` und `oklab()`](#lab_und_oklab)-Funktionen funktionieren anders, indem sie Helligkeit (`L`), Rot/Grünheit (entlang der `a`-Achse) und Gelb/Blauheit (entlang der `b`-Achse) nutzen. Diese Achsen werden als rechteckige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" die wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie mit dem menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie die sRGB Farbton-Funktionen ist der Farbtonwert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (äquivalent zu `0deg`), das den Farbtyp `<hue>` repräsentiert. Allerdings sind die Farben bei jedem Winkelwert nicht gleich. Die Winkel, die bestimmten Farbnuancen entsprechen, unterscheiden sich je nach Farbraum: sRGB, CIELAB (verwendet von `lch()`) und Oklab (verwendet von `oklch()`).

Die folgenden Farbverläufe demonstrieren die Farbnuancen bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

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

Sie werden feststellen, dass die Helligkeit der letzteren Farbverläufe gleichmäßiger über das Spektrum der Farbnuancen ist als der sRGB-Farbverlauf. Wählen Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, damit dies deutlicher wird.

Beachten Sie auch, wie die Verbreitung der Blautöne im CIE Lab länger als in den anderen beiden ist. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blaustreuung ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab Farbraum gelöst und daher in der `oklch()`-Farbnotation.

Wie bereits erwähnt, ist der Farbtonwert (`H`) in `lch()` und `oklch()` ein `<angle>`, eine Zahl oder das Schlüsselwort `none`. Die Helligkeit ist entweder {{cssxref("percentage")}} oder bei `lch()` eine Zahl zwischen `0` und `100`, bei `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` die völlige Abwesenheit von Helligkeit ist, was schwarz bedeutet.

Das `C` ist ein `<number>`, `<percentage>` oder das Schlüsselwort `none` (entspricht `0%`) und beschreibt das Chroma oder die "Farbmenge" der Farbe. Dies entspricht dem Sättigungswert `S` der `hsl()`-Farbmethode. Der Wert `0` bedeutet völlige Farbabwesenheit oder Sättigung; das Ergebnis ist ein Grau zwischen Weiß und Schwarz inklusive, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbegrenzt, wobei `100%` für `lch()` gleich `150` und für `0.4` für `oklch()` ist.

Wie bei den anderen Farbmethoden gibt es auch einen optionalen Alphatransparenzwert, dem ein Schrägstrich (`/`) vorangestellt ist.

Das folgende Beispiel zeigt die Wirkung beim Ändern des Helligkeitswertes in den `lch()`- und `oklch()`-Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)-Funktionsnotation drückt die gegebene Farbe im CIE L\*a\*b\*-Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren den gesamten Bereich an Farben, die Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Gelb/Blau-Achsenwert (`b`) und einen optionalen Alphatransparenzwert angeben.

Ähnlich wie bei `lch()` und `oklch()`, ist die Helligkeit entweder:

- {{cssxref("percentage")}}, wobei `0%` vollständig schwarz ist und `100%` vollständig weiß.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a`-Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, was angibt, wie grün (gegen `-100%`) oder rot (gegen `+100%`) die Farbe ist.

Diese Werte sind unterschrieben (sie erlauben sowohl positive als auch negative Werte) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%)-Grenzen festlegen können. Praktisch können Werte jedoch ±160 oder ±0.5 nicht überschreiten.

Der b-Wert hat die gleichen Einschränkungen. Er spezifiziert die Entfernung der Farbe entlang der b-Achse im Farbraum, was beschreibt, wie blau (in Richtung `-100%`) oder gelb (in Richtung `+100%`) die Farbe ist.

Das folgende Beispiel veranschaulicht die Auswirkungen, die auf der `a`-Achse über eine `lab()`-Funktion und auf der `b`-Achse über eine `oklab()`-Funktion variieren.

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

Wenn Sie explizit Kontrolle über Farbräume bei der Definition von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farb{{Glossary("Gamut", "ubereichen")}} zu beschreiben.
Wenn Sie beispielsweise die `display-p3 0 0 1`-Farbe anzeigen möchten, die außerhalb des sRGB-Farbraums liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut)-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Die `color()`-Funktion zu verstehen ist wichtig, wenn es um relative Farben geht, die als nächstes diskutiert werden. Die älteren sRGB-Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()` und `rgb()` — drücken nicht das gesamte Spektrum der sichtbaren Farben aus, während die `color()`-Funktion einen viel breiteren Farbumfang unterstützt. Infolgedessen wird bei Verwendung der älteren Funktionstypen zur Definition relativer Farben die ausgegebene Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) erhalten wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für das Konvertieren der `rgb()`, `hsl()`, `hwb()` und andere [Farbformate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, werfen Sie einen Blick auf unser [Farbformat-Konverter-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter).

### Relative Farben

Jede oben gelistete Farbfunktion kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu definieren, die es {{cssxref("&lt;color&gt;")}} Werten ermöglichen, relativ zu anderen bestehenden Farben definiert zu werden, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht es, Ergänzungen zu bestehenden Farben zu erstellen — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbänderungen. Weitere Informationen zur relativen Syntax finden Sie auf jeder Seite zur Farbfunktion.

Wie oben erwähnt, wenn Sie `rgb()`, `hsl()` oder `hwb()` verwenden, um eine relative Farbe auszugeben, wird die ausgegebene Farbe ein `color()`-Funktion im `srgb` Farb-Raum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte in jeder der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum um eine gegebene Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft anzugeben, die für den Gebrauch in hellen und dunklen Farbschemata vorgesehen ist. Welches gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema eingestellt hat oder der Benutzer ein solches angefordert hat. Dies ist eine Abkürzungsfunktion, die es ermöglicht, dasselbe Ergebnis wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienmerkmal-Abfrage mit weniger Code zu erreichen.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe klug einsetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Verstehen von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
