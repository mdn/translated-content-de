---
title: CSS-Farbwerte
short-title: Farbwerte
slug: Web/CSS/CSS_colors/Color_values
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Um eine Farbe in CSS darzustellen, müssen Sie einen Weg finden, das analoge Konzept der „Farbe“ in eine digitale Form zu übersetzen, die ein Computer verwenden kann. Dies geschieht typischerweise, indem die Farbe in Komponenten zerlegt wird, wie z.B. Mengen der verschiedenen Primärfarben, die miteinander vermischt werden, oder Helligkeit und Farbton. Definierte Farbmodelle stellen sicher, dass Farben überall gleich aussehen, egal wo sie dargestellt werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. Das {{glossary("RGB")}}-Modell war das erste Farbmodell für das Web. Der `sRGB` Farbraum des RGB-Farbmodells – der standardmäßige Rot-, Grün- und Blau-Farbraum – wurde 1996 für Computermonitore und das Web erstellt. Ein {{glossary("color space")}} ist ein System zur Gruppierung von Farben, sodass eine konsistente Beschreibung einer gegebenen Farbe möglich ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte diese in beiden identisch aussehen.

Ursprünglich waren Monitore begrenzt in der Anzahl der Farben, die sie darstellen konnten, und CSS-Farben waren durch diese Einschränkungen begrenzt, die sich mit verbesserten Möglichkeiten erweiterten. Mit modernen Geräten, die nicht mehr auf RGB beschränkt sind, haben wir jetzt auch auf der menschlichen Wahrnehmung basierende Farbmodelle zur Verfügung, die ein viel breiteres {{glossary("gamut")}} von Farben bieten. Wir können jetzt auf verschiedene Weise Farben in CSS beschreiben, und die Optionen erweitern sich ständig.

Diese Anleitung führt die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen ein. Für eine detailliertere Diskussion, siehe die unten bereitgestellten Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe standardmäßiger Farbnamen, die es Ihnen ermöglichen, Schlüsselwörter anstelle numerischer Darstellungen zu verwenden, um Farben zu beschreiben. Dies ist ein einfacherer, wenn auch begrenzter Ansatz – möglicherweise gibt es kein Schlüsselwort, das die genaue Farbe darstellt, die Sie verwenden möchten.

Farbschlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer gemischter Farben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das [RGB](/de/docs/Glossary/RGB)-Modell und sind mit dem sRGB (`srgb`)-Farbraum assoziiert.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/named-color#transparent) setzt einen transparenten Farbwert, während [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}}-Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbenauswahl des Benutzers, des Browsers oder des Betriebssystems widerspiegeln.

Alle Farbschlüsselwörter sind nicht unterscheidend hinsichtlich Groß- und Kleinschreibung. Weitere Informationen zu Farbschlüsselwörtern finden Sie im {{cssxref("named-color")}} Datentyp.

## RGB-Werte

Es gibt zwei Hauptmöglichkeiten, eine {{glossary("RGB")}}-Farbe anhand ihrer roten, grünen und blauen Komponenten in CSS zu definieren – hexadezimale und `rgb()`-Werte. Wie benannte Farben nutzen diese Methoden das [RGB](/de/docs/Glossary/RGB)-Modell und sind mit dem sRGB (`srgb`)-Farbraum verbunden. Sie ermöglichen jedoch die Angabe eines viel breiteren Farbangebots.

### Hexadezimale Zeichenfolgennotation

Hexadezimale (Hex) Zeichenfolgennotation verwendet einen Hexadezimalwert, um jede Komponente (Rot, Grün und Blau) einer RGB-Farbe darzustellen. Es kann auch eine vierte Komponente enthalten: den Alphakanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenfolgennotation beginnt immer mit dem Zeichen `"#"`. Danach kommen die hexadezimalen Ziffern des Farbcodes. Die Zeichenfolge ist nicht unterscheidend hinsichtlich Groß- und Kleinschreibung.

- `"#rrggbb"`

  - : Gibt eine vollständig undurchsichtige Farbe an, deren rote Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`.

- `"#rrggbbaa"`

  - : Gibt eine Farbe an, deren roten Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

- `"#rgb"`

  - : Gibt eine Farbe an, deren roten Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`.

- `"#rgba"`

  - : Gibt eine Farbe an, deren roten Komponente die hexadezimale Zahl `0xrr` ist, die grüne Komponente `0xgg` und die blaue Komponente `0xbb`. Der Alphakanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto durchscheinender wird die Farbe.

Wie oben gezeigt, können die roten, grünen und blauen Farbkomponenten jeweils als zweistelliger Hexwert dargestellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder als einstelliger Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`) darstellt.

> [!NOTE]
> Die führende `0x` in den obigen Werten zeigt ein hexadezimales Ganzzahl-Literal an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hex-Farben sind äquivalente Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Schreibweise verwenden, wird die finale Farbe berechnet, indem die Ziffer jeder Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"` beim Zeichnen.

Um die Werte 25% deckend zu machen, fügen Sie den Wert des Alphakanals wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Weitere Informationen zur hexadezimalen Zeichenfolgennotation für Farben finden Sie im {{cssxref("hex-color")}} Datentyp.

#### HTML Farbeingabetyp

Es gibt viele Situationen, in denen Ihre Website den Benutzer möglicherweise eine Farbe auswählen lassen muss. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichen-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe zu wählen. Oder vielleicht ermöglicht Ihre App dem Benutzer, Ordnern oder Elementen Farben zuzuteilen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}}-Element einen `"color"`-[`type`](/de/docs/Web/HTML/Element/input#type), der ein Farbwähler-Steuerelement rendert.

Dieses Beispiel ermöglicht die Auswahl einer Farbe. Sobald eine Wahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erstellt ein Feld, das ein Farbwähler-Steuerelement enthält (mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde) und ein leeres {{HTMLElement("output")}}-Element, in das wir den Farbwert mit JavaScript ausgeben. Der Wert der Farbeingabe ist immer eine hexadezimale Zeichenfolge.

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

Das folgende JavaScript aktualisiert die Rahmenfarbe, um den anfänglichen Wert des Farbwahlfelds zu entsprechen, und fügt dann dem [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) Element zwei Ereignis-Handler hinzu, um auf Änderungen zu reagieren, die an seinem Wert vorgenommen werden.

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

Das {{domxref("Element/input_event", "input")}}-Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis eintritt, setzen wir die Rahmenfarbe der Box, um dem aktuellen Wert des Farbwählers zu entsprechen.

Das {{domxref("HTMLElement/change_event", "change")}}-Ereignis wird empfangen, wenn der Wert des Farbwählers endgültig ist. Wir antworten, indem wir den Inhalt von `<output>` auf den stringwert der ausgewählten Farbe setzen.

### RGB funktionale Notation

RGB (Rot/Grün/Blau) funktionale Notation, wie die hexadezimale Zeichenfolgennotation, stellt Farben unter Verwendung ihrer roten, grünen und blauen Komponenten (und optional einer Alphakanalkomponente für die Deckkraft) dar. Anstatt jedoch eine Zeichenfolge zu verwenden, wird die Farbe mit der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabewerte – rote, grüne und blaue Komponentenwerte und einen optionalen Alphakanalwert.

Zulässige Werte für jeden dieser Parameter sind:

- `red`, `green` und `blue`

  - : Jeder muss ein {{cssxref("&lt;number&gt;")}}-Wert zwischen 0 und 255 (einschließlich), ein {{cssxref("&lt;percentage&gt;")}} von 0% bis 100% oder das Schlüsselwort `none` sein, welches in diesem Fall `0` entspricht.

- `alpha`

  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder eine Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

Zum Beispiel kann ein helles Rot, das zu 50% undurchsichtig ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Weitere Informationen zur RGB-funktionalen Notation finden Sie in der {{cssxref("color_value/rgb", "rgb()")}}-Funktion.

## Farb-Funktionen mit einem Farbton-Komponente

Die Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente haben — ein [`<angle>`](/de/docs/Web/CSS/angle) aus dem Farbkreis dieses Farbmodells — umfassen die `srgb`-Funktionen `hsl()` und `hwb()`, die CIElab-`lch()`-Funktion und die OKLab-`oklch()`-Farb-Funktion. Diese Farb-Funktionen sind intuitiver, da der Farbton uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu sehen.

### HSL funktionale Notation

Die `hsl()` CSS-Farb-Funktion war die erste farbtonbasierte Farb-Funktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist einfacher, die Wirkung von unterschiedlichen Farbton- (`h`), Sättigungs- (`s`) und Helligkeits- (`l`) Werten zu bestimmen, als spezielle Farben über rote, grüne und blaue Kanalwerte zu definieren. Zusätzlich ist HSL dem HSB (Farbton, Sättigung und Helligkeit) Farbenwähler in Photoshop ähnlich, was es bei vielen Leuten sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB-Farb-Funktionen sind beide zylindrisch. Der Farbton definiert die Farbe als einen [`<angle>`](/de/docs/Web/CSS/angle) auf einem kreisförmigen {{glossary("color wheel")}}. Das Diagramm unten zeigt einen HSL-Farbzylinder. Die Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe entlang einer Skala zwischen vollständig in Graustufen und der maximal möglichen Menge des gegebenen Farbtons liegt.
Mit zunehmendem Wert der Helligkeit wechselt die Farbe vom dunkelsten zum hellsten möglichen Farbton (von schwarz zu weiß).

![HSL-Farbzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung des Benutzers [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL-(oder HWB)-Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta fährt, bevor er wieder bei Rot bei 360° endet. Der Wert kann in jeder von CSS unterstützten {{cssxref("&lt;angle&gt;")}} Einheit angegeben werden, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Drehung (`turn`). Der Farbtonwert bestimmt, was der Grundton der Farbe ist, aber er kontrolliert nicht, wie lebhaft oder langweilig oder wie hell oder dunkel die Farbe ist.

Die Sättigung (`S`) der Farbe gibt den Prozentsatz der endgültigen Farbe an, der aus dem angegebenen Farbton besteht, wobei 100% vollständig gesättigt und 0% ein völliger Mangel an Farbe (Graustufen) ist. Die Helligkeit (`L`) gibt an, wie hell die Farbe entlang einer gleitenden Skala zwischen völligem Schwarz (`0%`) und völligem Weiß (`100%`) ist. Sie können auch optional einen Alphakanal einfügen, gefolgt von einem Schrägstrich (`/`), um die Farbe weniger als 100% deckend zu machen.

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
      <th scope="col">Farbe in HSL-Notation</th>
      <th scope="col">Beispiel</th>
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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, der einem Schrägstrich vorangestellt ist.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass er in Grad (`deg`) ist.

### HWB funktionale Notation

Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb-Funktion verwendet das gleiche Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt jedoch Helligkeit und Sättigung, gibt `hwb()` Weißheit (`W`) und Schwarzheit (`B`) an. Diese Funktion ist auch recht intuitiv – sie ermöglicht es Ihnen, einen Farbton zu wählen und dann Mengen an Weiß und/oder Schwarz hinzuzufügen, um die gewünschte Farbe zu erzielen.

`W` und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr ist, wird die Farbe grau, ähnlich wie bei der Einstellung der `s` auf `0%` mit `hsl()`. Wie bei `hsl()`, kann ein optionaler Alpha-Wert eingefügt werden, gefolgt von einem Schrägstrich (`/`).

Hier sind einige Beispiele für die Verwendung der HWB-Notation:

```css
/* Diese Beispiele spezifizieren alle verschiedene Grüntöne. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

{/* Gleiches Grün, aber mit einem Alpha-Wert */}
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

In den nachstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()`-Beispielen, aber wir fügen Weißheit und Schwarzheit zu jedem Farbton über `hwb()` hinzu, anstatt Sättigung und Helligkeit:

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
      <th scope="col">Farbe in HWB-Notation</th>
      <th scope="col">Beispiel</th>
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

### LCH und OKLCH: CIELAB- und Oklab-Farbräume

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Mit diesen Funktionen hat jeder voll gesättigte Farbtonwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber so funktioniert weder das menschliche Sehen noch Monitore. Weißen Text auf voll gesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen, ist lesbar, aber derselbe Text auf voll gesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unleserlich sein, sondern auch die Augen Ihrer Benutzer schmerzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe relativ zu anderen Farben, nicht zur menschlichen Wahrnehmung. In Wirklichkeit haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbtonkanal einer Farbe auf einer Website ändern könnten, ohne den Text unleserlich zu machen? Dies können Sie mit Farb-Funktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren die gesamte Palette der Farben, die der Mensch sehen kann. CIE lab Farb-Funktionen umfassen [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`lab()`](/de/docs/Web/CSS/color_value/lab). Oklab Farb-Funktionen umfassen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/color_value/oklab). Der Hauptzweck dieser Modelle ist, dass sie einheitlich sind, sodass ein gegebener Abstand zwischen zwei Punkten im Farbraum dem Betrachter gleich unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber mit zusätzlichen numerischen Optimierungsschritten gebaut wurde, sodass die Werte als genauer als CIELAB gelten. Aufgrund dieser Optimierung sind Farbtöne wahrnehmungsuniformer.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt genauer behandelt. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders und verwenden Helligkeit (`L`), Rot-/Grünheit (entlang der `a`-Achse) und Blau-/Gelbheit (entlang der `b`-Achse). Diese Achsen werden als kartesische Koordinaten bezeichnet. Der Hauptvorteil dieser Farb-Funktionen besteht darin, dass die „Helligkeit“ wahrgenommene Helligkeit ist; es ist die Helligkeit einer Farbe, wie sie vom menschlichen Auge wahrgenommen wird, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den sRGB-Farb-Funktionen gibt der Farbton-Wert (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (entspricht `0deg`) den `<hue>`-Winkel der Farbe an. Der Farbton in jedem Winkelwert ist jedoch nicht derselbe. Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Farbverläufe zeigen die Farbtonfarben bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab- und OKlab-Farbräumen:

```html hidden live-sample___hues
<p>sRGB (`hsl()` und `hwb()`)</p>
<div id="srgb"></div>
<p>CIE Lab (`lch()`)</p>
<div id="lch"></div>
<p>OKLab (`oklch()`)</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" /> In Graustufen umwandeln</label>
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

Vielleicht bemerken Sie, dass die Helligkeit der letzteren Farbverläufe gleichmäßiger über das Spektrum der Farbtöne ist als der sRGB-Verlauf. Wählen Sie das Kontrollkästchen im obigen Beispiel, um den Farbtonverlauf in Graustufen umzuwandeln, um dies deutlicher zu machen.

Beachten Sie auch, wie die Ausbreitung der blauen Werte in CIE Lab länger ist als in den beiden anderen. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blauspanne ist auf einen Fehler zurückzuführen, der das Chroma und die Helligkeit von Farbtonwerten zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab-Farbraum behoben und deshalb der `oklch()`-Farbnotation.

Wie oben besprochen, ist der Farbton (`H`) in den `lch()` und `oklch()` ein `<angle>`, `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder ein {{cssxref("percentage")}} oder für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` ein völliger Mangel an Helligkeit ist, was schwarz ist.

Das `C` ist ein `<number>`, `<percentage>` oder das Schlüsselwort `none` (entspricht `0%`) und steht für das Chroma der Farbe oder die „Farbmenge“. Dies ist dem `S` Sättigungswert der `hsl()`-Farb-Funktion ähnlich. Der Wert `0` ist der vollständige Mangel an Chroma oder Sättigung; das Ergebnis ist ein Grau zwischen weiß und schwarz inklusive, abhängig vom Helligkeitswert. Die Zahlenwerte sind theoretisch unbeschränkt, wobei `100%` gleich `150` für `lch()` und `0.4` mit `oklch()` ist.

> [!NOTE]
> Der `lch()` Fehler, der die chroma und lightness von Farbtönen zwischen `270deg` und `330deg` verzerrt, ist in `oklch()` behoben.

Wie die anderen Farb-Funktionen gibt es auch einen optionalen Alpha-Transparenzwert, gefolgt von einem Schrägstrich (`/`).

Das folgende Beispiel zeigt die Auswirkung von Änderungen des Helligkeitswertes in den `lch()` und `oklch()` Funktionen.

```css hidden live-sample___lch-colors
/* Verschiedene Schattierungen von Pink */
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

Die [`lab()`](/de/docs/Web/CSS/color_value/lab) funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren die gesamte Palette von Farben, die Menschen sehen können, indem sie die Helligkeit (`L`), einen Rot/Grün-Achsenwert (`a`), einen Blau/Gelb-Achsenwert (`b`) und einen optionalen Alpha-Transparenzwert angeben.

Ähnlich wie bei `lch()` und `oklch()` ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und zwischen `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a` Wert ist ein `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der a-Achse im Farbraum an, die definiert, wie grün (Richtung -100%) oder rot (Richtung +100%) die Farbe ist.

Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlauben) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Grenzen setzen können. In der Praxis können Werte ±160 oder ±0.5 nicht überschreiten.

Der `b` Wert hat die gleichen Einschränkungen. Er gibt die Entfernung der Farbe entlang der b-Achse im Farbraum an, die definiert, wie blau (Richtung -100%) oder gelb (Richtung +100%) die Farbe ist.

Das folgende Beispiel zeigt die Auswirkungen, die das Variieren der `a`-Achse über eine `lab()` Funktion und die `b`-Achse über eine `oklab()` Funktion hat.

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
/* Verschiedene Schattierungen von Pink */
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

## Zusätzliche Farb-Funktions-Notationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume beim Definieren von Farben wünschen, können Sie die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit größeren Farb[gamuts](/de/docs/Glossary/Gamut) zu beschreiben. Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe anzeigen möchten, die außerhalb des sRGB Gamuts liegt, könnten Sie die `@media` [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Regel verwenden, um zu erkennen, ob die Hardware des Clients Farben in diesem Bereich unterstützt, bevor Sie versuchen, sie zu verwenden:

```css
.vibrant {
  background-color: color(srgb 0 0 1);
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
    /* Entspricht der außerhalb des Gamuts liegenden color(srgb 0 0 1.042) */
  }
}
```

Das Verständnis von `color()` ist wichtig, wenn es um relationale Farben geht, die im nächsten Abschnitt behandelt werden. Die älteren sRGB-Farbnotierungen wie oben beschrieben – `hsl()`, `hwb()` und `rgb()` – drücken nicht das gesamte Spektrum sichtbarer Farben aus, während die `color()` Funktion einen viel breiteren Farbgamut unterstützt. Daher, wenn relationale Farben mit den älteren Funktionstypen definiert werden, wird die Ergebnisfarbe, die durch Abfragen der {{domxref("HTMLElement.style")}} Eigenschaft oder der {{domxref("CSSStyleDeclaration.getPropertyValue()")}} Methode zurückgegeben wird, ein `color(srgb...)` Wert sein.

Um ein Beispiel für die Konvertierung der `hsl()`, `hwb()` und `rgb()` Farb-Funktionen zu `color()` im `srgb` Farbraum zu sehen, probieren Sie unser [Farbpicker-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) aus.

### Relative Farben

Jede oben aufgelistete Farb-Funktion kann verwendet werden, um [**relationale Farben**](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu definieren, was erlaubt, {{cssxref("&lt;color&gt;")}}-Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Ergänzungen zu bestehenden Farben – wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbanpassungen. Siehe jede Farb-Funktionsseite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wenn `rgb()`, `hsl()`, oder `hwb()` verwendet wird, um eine relationale Farbe auszugeben, wird die Ausgabefarbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte einer beliebigen der oben erwähnten Syntaxen, optional mit proportionalen Prozentsätzen für jede Farbe, und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum in einer angegebenen Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es, für eine Eigenschaft zwei Farbwerte anzugeben, die in einem hellen und einem dunklen Farbschema verwendet werden sollen. Welcher eingestellt wird, hängt davon ab, ob der Entwickler oder der Benutzer ein helles oder dunkelens Farbschema angefordert haben. Dies ist eine Abkürzungsfunktion, mit der Sie die gleichen Ergebnisse wie mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature-Abfrage erzielen können, aber mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Farbe weise einsetzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
