---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept von "Farbe" in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem die Farbe in Komponenten zerlegt wird, wie z.B. Mengen verschiedener Primärfarben, die gemischt werden müssen, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich dargestellt werden, unabhängig davon, wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben unter Verwendung numerischer Werte darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der `sRGB`-Farbraum des RGB-Farbmodells — der Standardfarbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web geschaffen. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass das Beschreiben jeder gegebenen Farbe konsistent erfolgt. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore darin begrenzt, wie viele Farben sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt und erweiterten sich mit verbesserten Fähigkeiten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch Farbmodelle, die auf menschlicher Wahrnehmung basieren und eine viel breitere {{Glossary("gamut", "Farbumfang")}} bieten. Wir können jetzt Farbe in CSS auf verschiedene Arten beschreiben und die Optionen erweitern sich ständig.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}}-Wertetypen ein. Für eine detailliertere Diskussion siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle numerischer Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz — es gibt möglicherweise kein Schlüsselwort, das die genaue Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen standardmäßige Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS-{{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}}-Farben wie `accentcolortext` und `buttonface`, die die Standardfarbwahl des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht unterscheidbar zwischen Groß- und Kleinschreibung. Siehe den {{cssxref("named-color")}}-Datentyp für weitere Informationen zu Farbschlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptmethoden zur Definition einer {{Glossary("RGB", "RGB")}}-Farbe durch ihre roten, grünen und blauen Komponenten in CSS — hexadezimale und `rgb()`-Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}}-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert. Sie ermöglichen jedoch eine viel breitere Bandbreite an Farben, die spezifiziert werden können.

### Hexadezimale Zeichenfolgennotation

Die hexadezimale (hex) Zeichenfolgennotation verwendet einen hexadezimalen Wert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Sie kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgennotation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht unterscheidbar zwischen Groß- und Kleinschreibung.

- `"#rrggbb"`

  - : Gibt eine vollständig opake Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hexwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliges Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`)).

> [!NOTE]
> Das führende `0x` in den oben genannten Werten gibt ein hexadezimales Ganzzahlenliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß-/Kleinschreibung einer Zeichen beeinflusst nicht seinen Wert. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden hexadezimalen Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit derselben Anzahl von Ziffern angegeben werden. Wenn Sie die einstellig Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25% undurchsichtig zu machen, fügen Sie den Alphakanalwert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}}-Datentyp für weitere Informationen zur hexadezimalen Zeichenfolgennotation für Farben.

#### HTML-Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer erlauben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche oder Sie implementieren eine Zeichnungs-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben Ordnern oder Elementen zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"`-[`Typ`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahlsteuerung anzeigt.

Dieses Beispiel erlaubt es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}}-Eigenschaft auf diese Farbe gesetzt und der Wert angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbauswahlsteuerung enthält (mit einem Etikett, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element, in dem wir den Farbwert mit JavaScript ausgeben werden. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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
    "sans-serif";
}
```

Das folgende JavaScript aktualisiert die Rahmenfarbe, sodass sie dem Anfangswert des Farbauswahlsteuerung entspricht, fügt dann zwei Ereignishandler dem [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen des Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbauswahler anpasst. Jedes Mal, wenn dieses Ereignis auftritt, setzen wir die Rahmenfarbe des Feldes auf den aktuellen Wert des Farbauswahlsteuerung.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbauswahlsteuerung endgültig wird. Wir reagieren darauf, indem wir den Inhalt des `<output>` auf den Zeichenfolgwert der ausgewählten Farbe setzen.

### RGB-funktionale Notation

Die RGB (Rot/Grün/Blau) funktionale Notation, wie die hexadezimale Zeichenfolgennotation, stellt Farben durch ihre roten, grünen und blauen Komponenten dar (und optional einen Alphakanal für die Deckkraft). Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — rote, grüne und blaue Komponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, das in diesem Fall gleich `0` ist.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein leuchtendes Rot, das zu 50% opak ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}}-Farb-Funktion für weitere Informationen zur RGB-funktionalen Notation.

## Farb-Funktionen mit einem Farbton-Komponenten

Die Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbmodell {{Glossary("color_wheel", "color wheel")}} — enthalten, umfassen die `srgb` Farbfunktionen `hsl()` und `hwb()`, CIElabs `lch()` Funktion und OKLabs `oklch()` Farbfunktion. Diese Farbfunktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.

### HSL-funktionale Notation

Die `hsl()` CSS-Farb-Funktion war die erste farbtonbasierte Farbfunktion, die in Browser unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, den Effekt der Variation von Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu bestimmen als bestimmte Farben über rote, grüne und blaue Kanalwerte zu deklarieren. Darüber hinaus ist HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbwähler in Photoshop ähnlich, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{Glossary("color_wheel", "Color Wheel")}}. Das Diagramm unten zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der definiert, wie weit die Farbe auf einer Skala zwischen vollständig grau und maximal möglichem Anteil des gegebenen Farbtons ist.
Mit zunehmendem Helligkeitswert, wechselt die Farbe von der dunkelsten zur hellsten möglichen Farbe (von Schwarz zu Weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung von Benutzer [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL- (oder HWB-)Farbe ist ein Winkel, der bei 0° als Rot beginnt und dann durch Gelb, Grün, Cyan, Blau und Magenta verläuft, bevor er bei Rot bei 360° endet. Der Wert kann in allen von CSS unterstützten {{cssxref("&lt;angle&gt;")}}-Einheiten angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Graden (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, welcher Basiston der Farbe ist, aber er bestimmt nicht, wie lebendig oder stumpf, oder wie hell oder dunkel die Farbe ist.

Die Sättigungs-Komponente (`S`) der Farbe gibt an, welcher Prozentsatz der endgültigen Farbe aus dem angegebenen Farbton besteht, wobei 100% voll gesättigt und 0% ein völliger Mangel an Farbe (grau) ist. Die Helligkeits-Komponente (`L`) gibt an, wie hell die Farbe auf einer Schiebeskala zwischen vollständig schwarz (`0%`) und vollständig weiß (`100%`) ist. Sie können auch optional einen Alphakanal einschließen, gefolgt von einem Schrägstrich (`/`), um die Farbe weniger als 100% opak zu machen.

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

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg 0% 50%)</code></td>
      <td style="background-color: hsl(90deg 0% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90 100% 50%)</code></td>
      <td style="background-color: hsl(90 100% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 50% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 50% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 50%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg 90% 50% / 50%)</code></td>
      <td style="background-color: hsl(270deg 90% 50% / 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HSL_functional_notation", 300, 200)}}

Der letzte Wert ist halb-opak; er enthält den optionalen Alpha-Wert, dem ein Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass sie in Grad (`deg`) ist.

### HWB-funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Farbfunktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt jedoch die Helligkeit und Sättigung von `hsl()` kann in `hwb()` die Farbton-Funktion Weißheit (`W`) und Schwärze (`B`) spezifizieren. Diese Funktion ist auch ziemlich intuitiv — so können Sie einen Farbton auswählen und dann Mengen von Weiß und oder Schwarz hinzufügen, um die gewünschte Farbe zu erreichen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder größer ist, wird die Farbe grau sein, ähnlich wie wenn man `s` auf `0%` mit `hsl()` setzt. Wie bei `hsl()` kann ein optionaler Alpha-Wert hinzugefügt werden, gefolgt von einem Schrägstrich `/`.

Hier sind einige Beispiele zur Verwendung der HWB-Notation:

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

In den untenstehenden Beispielen setzen wir denselben Farbton wie in den `hsl()`-Beispielen, aber wir fügen Weißheit und Schwärze zu jedem Farbton über `hwb()` hinzu, anstatt Sättigung und Helligkeit:

```css hidden
{/*end the bad selector*/}
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

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HWB notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hwb(90deg 50% 50%)</code></td>
      <td style="background-color: hwb(90deg 50% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(90 0% 0%)</code></td>
      <td style="background-color: hwb(90 0% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 25% 0%)</code></td>
      <td style="background-color: hwb(0.15turn 25% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 10% 25%)</code></td>
      <td style="background-color: hwb(0.15turn 10% 25%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(1turn 10% 65%)</code></td>
      <td style="background-color: hwb(1turn 10% 65%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(270deg 75% 10%)</code></td>
      <td style="background-color: hwb(270deg 75% 10%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HWB_functional_notation", 300, 200)}}

### LCH und OKLCH: CIELAB und Oklab-Farbräume

Während `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber so funktioniert die menschliche Sicht oder Monitore nicht. Weißen Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen, ist lesbar, aber demselben Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unlesbar sein, sondern auch die Augen des Benutzers verletzen. In diesen Farbfunktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wahrheit haben nicht alle Farbtöne die gleiche Maximal-Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne den Text unleserlich zu machen? Sie können dies mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Farbspektrum, das Menschen sehen können. CIE-Lab-Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab-Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum dem Betrachter gleich unterschiedlich erscheinen soll. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber durch zusätzliche numerische Optimierungsschritte aufgebaut ist, sodass die Werte als genauer angesehen werden als bei CIELAB. Aufgrund dieser Optimierung sind Farbtöne perceptual gleichmäßiger.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erläutert. Die Funktionen [`lab()` und `oklab()`](#lab_und_oklab) funktionieren anders, da sie Helligkeit (`L`), Rot/Grüne-Achse (entlang der `a`-Achse) und Gelb/Blaue-Achse (entlang der `b`-Achse) verwenden. Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" die wahrgenommene Helligkeit ist; dies ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, im Gegensatz zur Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den farbtonbasierten sRGB-Farbfunktionen ist der Farbton (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den `<hue>`-Winkel der Farbe. Jedoch sind die Farben bei jedem Winkelwert nicht die gleichen. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Verläufe demonstrieren die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE-Lab- und OKlab-Farbräumen:

```html hidden live-sample___hues
<p>sRGB (`hsl()` and `hwb()`)</p>
<div id="srgb"></div>
<p>CIE Lab (`lch()`)</p>
<div id="lch"></div>
<p>OKLab (`oklch()`)</p>
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

Sie werden vielleicht bemerken, dass die Helligkeit der letzteren Verläufe gleichmäßiger über das Spektrum der Farbtöne als der sRGB-Verlauf ist. Aktivieren Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, dass sich der Bereich der Blauwerte im CIE-Lab länger erstreckt als in den beiden anderen. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()`-Blaubereich ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab-Farbraum behoben und daher die `oklch()`-Farbdarstellung.

Wie oben erläutert, ist der Farbton (`H`) in den `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die Helligkeit ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` ein vollständiger Mangel an Helligkeit ist, was schwarz entspricht.

Das `C` ist ein `<number>`, `<percentage>`, oder das Schlüsselwort `none` (entspricht `0%`) ist das Chroma der Farbe oder die "Menge an Farbe". Dies ist ähnlich dem `S`-Sättigungswert der `hsl()`-Farb-Funktion. Der Wert `0` ist vollständiger Mangel an Chroma oder Sättigung; was zu einem Grau führt, das zwischen Weiß und Schwarz inklusiv liegt, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbeschränkt, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch hier einen optionalen Alpha-Transparenzwert, dem ein Schrägstrich (`/`) vorangestellt ist.

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
[id$="99"],
[id$="90"],
[id$="80"] {
  color: lch(1% 40 0deg);
}

.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
#lch-1 {
  background-color: lch(1% 40 0deg);
}
#lch-10 {
  background-color: lch(10% 40 0deg);
}
#lch-20 {
  background-color: lch(20% 40 0deg);
}
#lch-30 {
  background-color: lch(30% 40 0deg);
}
#lch-40 {
  background-color: lch(40% 40 0deg);
}
#lch-50 {
  background-color: lch(50% 40 0deg);
}
#lch-60 {
  background-color: lch(60% 40 0deg);
}
#lch-70 {
  background-color: lch(70% 40 0deg);
}
#lch-80 {
  background-color: lch(80% 40 0deg);
}
#lch-90 {
  background-color: lch(90% 40 0deg);
}
#lch-99 {
  background-color: lch(99% 40 0deg);
}

#oklch-1 {
  background-color: oklch(1% 0.12 0deg);
}
#oklch-10 {
  background-color: oklch(10% 0.12 0deg);
}
#oklch-20 {
  background-color: oklch(20% 0.12 0deg);
}
#oklch-30 {
  background-color: oklch(30% 0.12 0deg);
}
#oklch-40 {
  background-color: oklch(40% 0.12 0deg);
}
#oklch-50 {
  background-color: oklch(50% 0.12 0deg);
}
#oklch-60 {
  background-color: oklch(60% 0.12 0deg);
}
#oklch-70 {
  background-color: oklch(70% 0.12 0deg);
}
#oklch-80 {
  background-color: oklch(80% 0.12 0deg);
}
#oklch-90 {
  background-color: oklch(90% 0.12 0deg);
}
#oklch-99 {
  background-color: oklch(99% 0.12 0deg);
}
```

```html hidden live-sample___lch-colors
<div class="container">
  <div id="lch-1">lch(1 40 0)</div>
  <div id="lch-10">lch(10 40 0)</div>
  <div id="lch-20">lch(20 40 0)</div>
  <div id="lch-30">lch(30 40 0)</div>
  <div id="lch-40">lch(40 40 0)</div>
  <div id="lch-50">lch(50 40 0)</div>
  <div id="lch-60">lch(60 40 0)</div>
  <div id="lch-70">lch(70 40 0)</div>
  <div id="lch-80">lch(80 40 0)</div>
  <div id="lch-90">lch(90 40 0)</div>
  <div id="lch-99">lch(99 40 0)</div>
  <div></div>
  <div id="oklch-1">oklch(1 .12 0)</div>
  <div id="oklch-10">oklch(10 .12 0)</div>
  <div id="oklch-20">oklch(20 .12 0)</div>
  <div id="oklch-30">oklch(30 .12 0)</div>
  <div id="oklch-40">oklch(40 .12 0)</div>
  <div id="oklch-50">oklch(50 .12 0)</div>
  <div id="oklch-60">oklch(60 .12 0)</div>
  <div id="oklch-70">oklch(70 .12 0)</div>
  <div id="oklch-80">oklch(80 .12 0)</div>
  <div id="oklch-90">oklch(90 .12 0)</div>
  <div id="oklch-99">oklch(99 .12 0)</div>
</div>
```

{{embedlivesample("lch-colors", '100', '150') }}

## Lab und OKLab

Die [`lab()`](/de/docs/Web/CSS/color_value/lab)-funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab)-Funktion definiert Farben im OKLab-Farbraum. Diese Funktionen repräsentieren das gesamte Farbspektrum, das Menschen durch Spezifizierung der Helligkeit (`L`), einem Rot/Grün-Achsenwert (`a`), einem Blau/Gelb-Achsenwert (`b`) und einem optionalen Alpha-Transparenzwert sehen können.

Ähnlich wie bei `lch()` und `oklch()` ist die Helligkeit entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz ist und `1`/`100` vollständig weiß ist.

Der `a` Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die definiert, wie grün (nach -100% verschwindend) oder rot (nach +100% verschwindend) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen haben (sie können sowohl positive als auch negative Werte annehmen) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%)-Grenzen festlegen können. In der Praxis dürfen die Werte ±160 beziehungsweise ±0.5 nicht überschreiten.

Der `b` Wert hat dieselben Einschränkungen. Es gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, die definiert, wie blau (nach -100% verschwindend) oder gelb (nach +100% verschwindend) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen der Variation der `a`-Achse über eine `lab()`-Funktion und der `b`-Achse über eine `oklab()`-Funktion.

```html hidden live-sample___lab-colors
<div class="container">
  <div id="lab-100">lab(50% -100% 0)</div>
  <div id="lab-75">lab(50% -75% 0)</div>
  <div id="lab-50">lab(50% -50% 0)</div>
  <div id="lab-25">lab(50% -25% 0)</div>
  <div id="lab-0">lab(50% 0 0)</div>
  <div id="lab--25">lab(50% 25% 0)</div>
  <div id="lab--50">lab(50% 50% 0)</div>
  <div id="lab--75">lab(50% 75% 0)</div>
  <div id="lab--100">lab(50% 100% 0)</div>
  <div></div>
  <div id="oklab-4">oklab(50% 0 -0.4)</div>
  <div id="oklab-3">oklab(50% 0 -0.3)</div>
  <div id="oklab-2">oklab(50% 0 -0.2)</div>
  <div id="oklab-1">oklab(50% 0 -0.1)</div>
  <div id="oklab-0">oklab(50% 0 0)</div>
  <div id="oklab--1">oklab(50% 0 0.1)</div>
  <div id="oklab--2">oklab(50% 0 0.2)</div>
  <div id="oklab--3">oklab(50% 0 0.3)</div>
  <div id="oklab--4">oklab(50% 0 0.4)</div>
</div>
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
#lab-100 {
  background-color: lab(50% -100% 0);
}
#lab-75 {
  background-color: lab(50% -75% 0);
}
#lab-50 {
  background-color: lab(50% -50% 0);
}
#lab-25 {
  background-color: lab(50% -25% 0);
}
#lab-0 {
  background-color: lab(50% 0 0);
}
#lab--25 {
  background-color: lab(50% 25% 0);
}
#lab--50 {
  background-color: lab(50% 50% 0);
}
#lab--75 {
  background-color: lab(50% 75% 0);
}
#lab--100 {
  background-color: lab(50% 100% 0);
}

#oklab-4 {
  background-color: oklab(50% 0 -0.4);
}
#oklab-3 {
  background-color: oklab(50% 0 -0.3);
}
#oklab-2 {
  background-color: oklab(50% 0 -0.2);
}
#oklab-1 {
  background-color: oklab(50% 0 -0.1);
}
#oklab-0 {
  background-color: oklab(50% 0 0);
}
#oklab--1 {
  background-color: oklab(50% 0 0.1);
}
#oklab--2 {
  background-color: oklab(50% 0 0.2);
}
#oklab--3 {
  background-color: oklab(50% 0 0.3);
}
#oklab--4 {
  background-color: oklab(50% 0 0.4);
}
```

{{embedlivesample("lab-colors", '100', '150') }}

## Weitere Farb-Funktionalnotationen

### Die `color()`-Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit einem breiteren Farbumfang {{Glossary("Gamut", "Gamuts")}} zu beschreiben.
Wenn Sie zum Beispiel die `display-p3 0 0 1` Farbe anzeigen wollten, die außerhalb des sRGB-Gamuts liegt, könnten Sie eine `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) At-Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

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

Das Verständnis von `color()` ist wichtig, wenn es um relative Farben geht, die als nächstes behandelt werden. Die älteren sRGB-Farbnotationen, die oben besprochen wurden — `hsl()`, `hwb()`, und `rgb()`— drücken nicht das gesamte sichtbare Farbspektrum aus, während die `color()`-Funktion einen viel breiteren Farbumfang unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben die Ausgabefarbe, die durch Abfragen des [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder der Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) zurückgegeben wird, ein `color(srgb ...)`-Wert sein.

Um ein Beispiel für die Konvertierung der `hsl()`, `hwb()`, und `rgb()`-Farbfunktionen in `color()` im `srgb`-Farbraum zu sehen, werfen Sie einen Blick auf unser [Farbwähler-Werkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool).

### Relative Farben

Jede der oben genannten Farbfunktionen kann verwendet werden, um [**relative Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, die es ermöglichen, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen vorhandenen Farben anzugeben, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Dieses leistungsstarke Feature ermöglicht die Erstellung von Komplementen zu bestehenden Farben — wie z.B. hellere, dunklere, gesättigte, halbdurchsichtige oder invertierte Varianten einer originalen Farbe. Relative Farben bieten einen effektiven Mechanismus, um Paletten zu erstellen und Farbanpassungen zu definieren. Siehe jede Farbfunktion-Seite, um mehr über deren relative Syntaxen zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()`, oder `hwb()` zur Ausgabe einer relativen Farbe die Ausgabefarbe eine `color()`-Funktion im `srgb`-Farbraum sein.

### color-mix()-Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}}-Funktion nimmt zwei Farbwerte in jeder der oben genannten Syntaxen, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis ihres Mischens in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

### light-dark()-Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}}-Funktion lässt Sie zwei Farbwerte für eine Eigenschaft angeben, die für die Verwendung in hellen und dunklen Farbdesigns vorgesehen ist. Welche davon gesetzt wird, hängt davon ab, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder ob der Benutzer ein solches angefordert hat. Dies ist eine Abkürzung, mit der Sie die gleichen Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage erzielen können, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
