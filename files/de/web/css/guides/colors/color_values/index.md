---
title: CSS-Farbwerte
short-title: Color values
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Um eine Farbe in CSS zu repräsentieren, muss der analoge Begriff der "Farbe" in eine digitale Form übersetzt werden, die ein Computer verwenden kann. Dies wird typischerweise erreicht, indem die Farbe in Komponenten aufgebrochen wird, wie zum Beispiel in Mengen verschiedener Primärfarben, die miteinander gemischt werden, oder in Helligkeit und Farbton. Definierte Farbmodelle sorgen dafür, dass Farben überall gleich erscheinen, egal wo sie gerendert werden.

Ein Farbmodell ist ein mathematisches Modell, das Farben mit numerischen Werten darstellt. Farbmodelle beschreiben, wie die verfügbaren Farben innerhalb eines Farbraums erstellt werden. {{Glossary("RGB", "RGB")}} war das erste Farbmodell für das Web. Der Farbraum `sRGB` des RGB-Farbmodells — der Standard-Farbraum für Rot, Grün und Blau — wurde 1996 für Computermonitore und das Web erstellt. Ein {{Glossary("color_space", "Farbraum")}} ist ein System zur Gruppierung von Farben, sodass das Beschreiben einer beliebigen Farbe konsistent ist. Wenn Sie eine Farbe zwischen zwei verschiedenen Farbräumen transformieren, sollte sie in beiden identisch aussehen.

Ursprünglich waren Monitore in der Anzahl der darstellbaren Farben eingeschränkt, und CSS-Farben waren durch diese Einschränkungen begrenzt, die sich mit den verbesserten Fähigkeiten erweiterten. Da moderne Geräte nicht mehr auf RGB beschränkt sind, verfügen wir jetzt auch über Farbmodelle, die stattdessen auf menschlicher Wahrnehmung basieren und damit ein viel breiteres {{Glossary("gamut", "Spektrum")}} an Farben bieten. Wir können nun Farbe in CSS auf verschiedene Weisen beschreiben, und die Optionen werden ständig erweitert.

Dieser Leitfaden führt die verschiedenen {{cssxref("&lt;color&gt;")}} Wertetypen ein. Für eine ausführlichere Diskussion siehe die untenstehenden Referenzlinks.

## Schlüsselwörter

Das Web definiert eine Reihe von Standardfarbnamen, die es ermöglichen, Schlüsselwörter anstelle von numerischen Darstellungen zur Beschreibung von Farben zu verwenden. Dies ist ein einfacherer, wenn auch begrenzterer Ansatz — möglicherweise gibt es kein Schlüsselwort, das genau die Farbe darstellt, die Sie verwenden möchten.

Farb-Schlüsselwörter umfassen Standard-Primär- und Sekundärfarben (wie `red`, `blue` oder `orange`), Grautöne (von `black` bis `white`, einschließlich Farben wie `darkgray` und `lightgrey`) und eine Vielzahl anderer Mischfarben, einschließlich `lightseagreen`, `cornflowerblue` und `rebeccapurple`. Benannte Farben verwenden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden.

Es gibt über 160 benannte Farben. Es gibt benannte Farben von besonderem Interesse: [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) setzt einen transparenten Farbwert, während [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) den aktuellen Wert der CSS {{cssxref("color")}} Eigenschaft setzt. Es gibt auch benannte {{cssxref("system-color")}} Farben, wie `accentcolortext` und `buttonface`, die die Standardfarbauswahlen widerspiegeln, die von dem Benutzer, dem Browser oder dem Betriebssystem getroffen wurden.

Alle Farb-Schlüsselwörter sind nicht case-sensitiv. Siehe den {{cssxref("named-color")}} Datentyp für weitere Informationen zu Farbschlüsselwörtern.

## RGB-Werte

Es gibt zwei Hauptmethoden, um eine Farbe im {{Glossary("RGB", "RGB")}} Format anhand ihrer Rot-, Grün- und Blaukomponenten in CSS zu definieren — hexadezimale und `rgb()` Werte. Wie benannte Farben verwenden diese Methoden das {{Glossary("RGB", "RGB")}} Modell und sind mit dem sRGB (`srgb`) Farbraum verbunden. Sie ermöglichen jedoch eine viel breitere Palette an Farben.

### Hexadezimale Zeichenkettennotation

Die Hexadezimal- (hex) Zeichenkettennotation verwendet einen hexadezimalen Wert zur Darstellung jeder Komponente (Rot, Grün und Blau) einer RGB-Farbe. Es kann auch eine vierte Komponente beinhalten: den Alpha-Kanal (oder die Deckkraft).

Eine Farbe in hexadezimaler Zeichenkettenotation beginnt immer mit dem Zeichen `"#"`. Danach folgen die hexadezimalen Ziffern des Farbcode. Die Zeichenkette ist nicht case-sensitiv.

- `"#rrggbb"`
  - : Gibt eine vollständig undurchsichtige Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rrggbbaa"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

- `"#rgb"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist.

- `"#rgba"`
  - : Gibt eine Farbe an, deren Rotkomponente die hexadezimale Zahl `0xrr`, die Grünkomponente `0xgg` und die Blaukomponente `0xbb` ist. Der Alpha-Kanal wird durch `0xaa` angegeben; je niedriger dieser Wert ist, desto transparenter wird die Farbe.

Wie oben gezeigt, können die Rot-, Grün- und Blau-Komponenten jeweils als zweistelliger Hexwert darstellt werden, der eine Zahl zwischen 0 (`00`) und 255 (`FF`) oder ein einstelliger Hexwert (eine Zahl zwischen 0 (`0`) und 15 (`F`)) repräsentiert.

> [!NOTE]
> Das führende `0x` in den oben genannten Werten zeigt ein hexadezimales ganzzahliges Literal an. Hexadezimale Ganzzahlen können Ziffern (`0` - `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. Die Groß- und Kleinschreibung eines Zeichens ändert seinen Wert nicht. Deshalb: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.

Diese beiden Hexfarben sind gleichwertige Farbwerte; sie sind beide rot:

```css
color: #ff0000;
color: #f00;
```

Alle Komponenten _müssen_ mit der gleichen Anzahl von Ziffern angegeben werden. Wenn Sie die einstellige Notation verwenden, wird die endgültige Farbe berechnet, indem jede Komponente zweimal verwendet wird; das heißt, `"#D"` wird zu `"#DD"`, wenn sie gezeichnet wird.

Um die Werte 25% transparent zu machen, fügen Sie den Alpha-Kanal-Wert wie unten gezeigt hinzu:

```css
color: #ff000044;
color: #f004;
```

Siehe den {{cssxref("hex-color")}} Datentyp für weitere Informationen zur hexadezimalen Zeichenkettennotation für Farben.

#### HTML-Farb-Eingabetyp

Es gibt viele Situationen, in denen Ihre Website dem Benutzer erlauben muss, eine Farbe auszuwählen. Vielleicht haben Sie eine anpassbare Benutzeroberfläche, oder Sie implementieren eine Zeichnungs-App. Vielleicht haben Sie bearbeitbaren Text und müssen dem Benutzer erlauben, die Textfarbe auszuwählen. Oder vielleicht lässt Ihre App den Benutzer Farben für Ordner oder Elemente zuweisen. Für solche Anwendungsfälle hat das {{HTMLElement("input")}} Element einen `"color"` [`Typ`](/de/docs/Web/HTML/Reference/Elements/input#type), der ein Farbauswahlsteuerungselement rendert.

Dieses Beispiel erlaubt es Ihnen, eine Farbe auszuwählen. Sobald eine Auswahl getroffen wurde, wird die {{cssxref("border-color")}} auf diese Farbe gesetzt, und der Wert wird angezeigt.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

Das HTML erzeugt ein Kästchen, das ein Farbauswahlsteuerungselement (mit einem Label, das mit dem {{HTMLElement("label")}} Element erstellt wurde) und ein leeres {{HTMLElement("output")}} Element enthält, in das wir mit JavaScript den Wert der Farbe ausgeben. Der Wert des Farbeingabefelds ist immer eine hexadezimale Zeichenkette.

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

Das folgende JavaScript aktualisiert die Farbe des Rands, um dem ursprünglichen Wert des Farbwahlwertes zu entsprechen, und fügt dann zwei Ereignishandler zum [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element hinzu, um auf Änderungen des Wertes zu reagieren.

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

Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird jedes Mal gesendet, wenn sich der Wert des Elements ändert; das heißt, jedes Mal, wenn der Benutzer die Farbe im Farbwähler anpasst. Jedes Mal, wenn dieses Ereignis auftritt, setzen wir die Farbe des Rands des Kästchens so, dass sie dem aktuellen Wert des Farbwahlwertes entspricht.

Das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird empfangen, wenn der Wert des Farbwahlwertes finalisiert wird. Wir reagieren, indem wir den Inhalt des `<output>` auf den Zeichenfolgenwert der ausgewählten Farbe setzen.

### RGB-Funktionalnotation

RGB (Rot/Grün/Blau) Funktionalnotation, ähnlich wie die hexadezimale Zeichenkettennotation, stellt Farben mit ihren Rot-, Grün- und Blau-Komponenten dar (und optional mit einem Alpha-Kanal für Transparenz). Statt einer Zeichenkette wird die Farbe jedoch mithilfe der CSS-Funktion {{cssxref("color_value/rgb", "rgb()")}} definiert. Diese Funktion akzeptiert 3 oder 4 Eingabeparameter — Rot-, Grün- und Blaukomponentenwerte und einen optionalen Alphakanalwert.

Legale Werte für jeden dieser Parameter sind:

- `red`, `green`, und `blue`
  - : Jeder muss einen {{cssxref("&lt;number&gt;")}} Wert zwischen 0 und 255 (einschließlich) darstellen, einen {{cssxref("&lt;percentage&gt;")}} von 0% bis 100%, oder das Schlüsselwort `none`, das in diesem Fall gleichbedeutend mit `0` ist.

- `alpha`
  - : Der Alphakanal wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) angegeben oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`).

Zum Beispiel kann ein leuchtend Rot, das zu 50% transparent ist, als `rgb(255 0 0 / 50%)` oder `rgb(100% 0 0 / 0.5)` dargestellt werden.

Siehe die {{cssxref("color_value/rgb", "rgb()")}} Farbfunktion für weitere Informationen zur RGB-Funktionalnotation.

## Farb-Funktionen mit einem Farbtonkomponenten

Die Farbfunktionen, die eine {{cssxref("hue")}} Komponente — ein {{cssxref("angle")}} von diesem Farbmodell's {{Glossary("color_wheel", "Farbkreis")}} — beinhalten, sind die `srgb` Farbfunktionen `hsl()` und `hwb()`, CIElab's `lch()` Funktion und OKLab's `oklch()` Farbfunktion. Diese Farbfunktionen sind intuitiver, da der Farbton es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. wahrzunehmen.

### HSL-Funktionalnotation

Die `hsl()` CSS Farb-Funktion war die erste farbtonbasierte Farbfunktion, die in Browsern unterstützt wurde. `hsl()` ist intuitiver als `rgb()` — es ist im Allgemeinen einfacher, die Wirkung von variierendem Farbton (`h`), Sättigung (`s`) und Helligkeit (`l`) zu verstehen, als spezifische Farben über Rot-, Grün- und Blau-Kanalwerte zu deklarieren. Zudem ist HSL ähnlich wie der HSB (Hue, Sättigung und Helligkeit) Farbwähler in Photoshop, was es vielen Menschen sofort vertraut machte, als es erstmals unterstützt wurde.

Die `hsl()` und `hwb()` sRGB Farbfunktionen sind beide zylindrisch. Der Farbton definiert die Farbe als {{cssxref("angle")}} auf einem kreisförmigen {{Glossary("color_wheel", "Farbkreis")}}. Das untenstehende Diagramm zeigt einen HSL-Farbenzylinder. Die Sättigung ist ein Prozentsatz, der angibt, wie weit die Farbe auf einer Skala zwischen komplett graustufig und dem maximal möglichen Anteil des gegebenen Farbtons liegt.
Je weiter der Helligkeitswert zunimmt, desto mehr geht die Farbe vom dunkelsten zum hellsten möglichen Farbton über (von Schwarz zu Weiß).

![HSL-Farbenzylinder](640px-hsl_color_solid_cylinder.png)

Bild mit freundlicher Genehmigung des Benutzers [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) auf [Wikipedia](https://en.wikipedia.org/), verteilt unter der [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz.

Der Wert der Farbton-Komponente (`H`) einer HSL- (oder HWB-)Farbe ist ein Winkel, der bei 0° als Rot beginnt, dann durch Gelb, Grün, Cyan, Blau und Magenta wandert, bevor er wieder bei Rot bei 360° endet. Der Wert kann in jeder {{cssxref("angle")}} Einheit angegeben werden, die von CSS unterstützt wird, einschließlich Grad (`deg`), Radiant (`rad`), Gon (`grad`) oder Umdrehungen (`turn`). Der Farbtonwert identifiziert, welcher Grundton die Farbe hat, aber er kontrolliert nicht, wie lebendig oder düster, oder wie hell oder dunkel die Farbe ist.

Die Sättigungskomponente (`S`) gibt an, wie hoch der prozentuale Anteil des angegebenen Farbtons an der endgültigen Farbe ist, wobei 100% vollständig gesättigt und 0% ein komplett fehlender Farbanteil (graustufen) bedeutet. Die Helligkeits-Komponente (`L`) gibt, wie hell die Farbe auf einer Skala zwischen komplett Schwarz (`0%`) und komplett Weiß (`100%`) ist. Es kann auch optional ein Alphakanal inklusive Schrägstrich (`/`) hinzugefügt werden, um die Farbe weniger als 100% deckend zu machen.

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

Der letzte Wert ist halbtransparent; er enthält den optionalen Alphawert, der von einem Schrägstrich vorbereitet wird.

> [!NOTE]
> Wenn Sie die Einheit des Farbtons weglassen, wird angenommen, dass er in Grad (`deg`) angegeben wird.

### HWB-Funktionalnotation

Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farbfunktion verwendet dasselbe Farbton-Koordinatensystem wie `hsl()`, wobei `0deg` Rot ist. Anstatt aber die Helligkeit und Sättigung von `hsl()`, spezifiziert die `hwb()` Funktion Weißgrad (`W`) und Schwarzwert (`B`). Diese Funktion ist auch recht intuitiv — sie ermöglicht Ihnen, einen Farbton zu wählen und dann Mengen von Weiß oder Schwarz zu mischen, um die gewünschte Farbe zu erzielen.

`W`- und `B`-Werte reichen von `0%` bis `100%` (oder `0` bis `1`). Wenn der kombinierte Wert von `W` und `B` 100% (oder `1`) oder mehr beträgt, wird die Farbe grau, ähnlich wie bei der Einstellung auf `s` zu `0%` bei `hsl()`. Wie bei `hsl()`, kann auch ein optionaler Alphawert enthalten sein, dem ein Schrägstrich `/` vorausgeht.

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

In den untenstehenden Beispielen setzen wir dieselben Farbtöne wie in den `hsl()` Beispielen, aber wir fügen dem Farbton Weißgrad und Schwarzgrad mit `hwb()` hinzu, anstatt Sättigung und Helligkeit:

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

Obwohl `hsl()` und `hwb()` intuitiv sind, haben sie einen großen Nachteil. Bei diesen Funktionen hat jeder vollständig gesättigte Farbwinkel (`hsl(<angle> 100% 50%)` oder `hwb(<angle> 0% 0%)`) die gleiche Helligkeit, aber das ist nicht, wie menschliches Sehen oder Monitore funktionieren. Weißen Text auf vollgesättigtem Blau (`hsl(240deg 100% 50%)`) zu setzen ist lesbar, aber derselbe Text auf vollgesättigtem Gelb (`hsl(60deg 100% 50%)`) wird nicht nur unleserlich sein, sondern könnte die Augen Ihrer Benutzer verletzen. In diesen Farb-Funktionen ist die Helligkeit einer Farbe im Vergleich zu anderen Farben, nicht zur menschlichen Wahrnehmung. In der Realität haben nicht alle Farbtöne die gleiche maximale Sättigung.

Wäre es nicht fantastisch, wenn Sie einfach den Farbkanal einer Farbe auf einer Website ändern könnten, ohne den Text unleserlich zu machen? Das können Sie mit Farbfunktionen in den CIELAB- und Oklab-Farbräumen.

Die CIELAB- und Oklab-Farbräume repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können. CIE Lab Farbfunktionen umfassen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab). Oklab Farbfunktionen umfassen [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) und [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab). Der Hauptzweck dieser Modelle ist es, dass sie gleichmäßig sind, sodass ein gegebener Abstand zwischen zwei beliebigen Punkten im Farbraum dem Betrachter gleichermaßen unterschiedlich erscheinen sollte. Oklab ist ein Farbraum, der denselben Modelltyp wie CIELAB verwendet, aber mit zusätzlichen numerischen Optimierungsschritten erstellt wurde, sodass die Werte als genauer als CIELAB gelten. Aufgrund dieser Optimierung sind die Farbtöne wahrnehmungsstärker gleichmäßig.

Die `lch()` und `oklch()` Funktionen verwenden Helligkeit (`L`), Chroma (`C`) und Farbton (`H`) und werden in diesem Abschnitt weiter erörtert. Die [`lab()` und `oklab()`](#lab_und_oklab) Funktionen arbeiten anders, sie verwenden Helligkeit (`L`), Rot/Grün-Werte (entlang der `a`-Achse) und Blau/Gelb-Werte (entlang der `b`-Achse). Diese Achsen werden als rechtwinklige Koordinaten bezeichnet. Der Hauptvorteil dieser Farbfunktionen ist, dass die "Helligkeit" als wahrgenommene Helligkeit angezeigt wird; es ist die Helligkeit einer Farbe, wie vom menschlichen Auge wahrgenommen, anstatt die Helligkeit im Vergleich zu anderen Farben.

Ähnlich wie bei den farbtonbasierten sRGB-Funktion sind die Farbton-Werte (`h`) in `lch()` und `oklch()` eine Zahl, ein Winkel oder das Schlüsselwort `none` (gleichbedeutend mit `0deg`), das den `<hue>`-Winkel der Farbe darstellt. Die Farbwerte bei jedem Winkelwert sind jedoch nicht identisch. Die Winkel, die bestimmten Farben entsprechen, unterscheiden sich in den sRGB-, CIELAB- (verwendet von `lch()`) und Oklab- (verwendet von `oklch()`) Farbräumen.

Die folgenden Farbverläufe zeigen die Farbtöne bei jedem Winkel von `0deg` bis `360deg` in den sRGB-, CIE Lab und OKlab Farbenräumen:

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

Sie werden vielleicht bemerken, wie die Helligkeit der letztgenannten Farbübergänge gleichmäßiger über das Spektrum der Farbtöne ist als der sRGB-Verlauf. Wählen Sie die Checkbox im obigen Beispiel, um den Farbtonverlauf in Graustufen zu konvertieren, um dies deutlicher zu machen.

Beachten Sie auch, wie die Verteilung der Blauwerte in CIE Lab länger ist als in den anderen beiden. Dies ist der Unterschied zwischen `lch()` und `oklch()`. Die `lch()` Blauverteilung ist auf einen Fehler zurückzuführen, der die Chroma und Helligkeit der Farbwerte zwischen `270deg` und `330deg` verschiebt. Dies wurde im oklab-Farbraum und daher in der `oklch()` Farbnotation gelöst.

Wie oben diskutiert, ist der Farbton (`H`) in den `lch()` und `oklch()` eine `<angle>`, eine `number` oder das Schlüsselwort `none`. Die `lightness` ist entweder eine {{cssxref("percentage")}}, für `lch()` eine Zahl zwischen `0` und `100` und für `oklch()` eine Zahl zwischen `0` und `1`, wobei `0` oder `0%` der völlige Fehlen von Helligkeit ist, das Schwarz.

Das `C` ist eine `<number>`, `<percentage>`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%`) ist das Chroma der Farbe oder die "Menge an Farbe". Dies ist ähnlich dem `S`-Sättigungswert der `hsl()` Farb-Funktion. Der Wert `0` ist das völlige Fehlen von Chroma oder Sättigung; was zu einem Grauton zwischen Weiß und Schwarz, je nach Helligkeitswert, einschließlich führt. Die Zahlwerte sind theoretisch unbegrenzt, wobei `100%` gleich `150` für `lch()` und `0.4` für `oklch()` ist.

Wie bei den anderen Farbfunktionen gibt es auch einen optionalen alphatransparenzwert, der von einem Schrägstrich (`/`) folgt.

Das folgende Beispiel zeigt den Effekt der Änderung des Helligkeitswerts in den `lch()` und `oklch()` Funktionen.

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

Die [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\* Farbraum aus. Die [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab) Funktion definiert Farben im OKLab Farbraum. Diese Funktionen repräsentieren das gesamte Spektrum der Farben, die Menschen sehen können, indem die Farbe durch ihre Helligkeit (`L`), einen Rot/Grün-Achswert (`a`), einen Blau/Gelb-Achswert (`b`) und einen optionalen alphatransparenzwert spezifiziert wird.

Ähnlich wie bei `lch()` und `oklch()`, ist die `lightness` entweder:

- Ein {{cssxref("percentage")}}, wobei `0%` vollständig schwarz und `100%` vollständig weiß ist.
- Eine Zahl zwischen `0` und `100` für `lab()` und `0` und `1` für `oklab()`, wobei `0` vollständig schwarz und `1`/`100` vollständig weiß ist.

Der `a` Wert ist `<number>` zwischen `-125` und `125` für `lab()` oder `-0.4` und `0.4` für `oklab()`, ein `<percentage>` zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der a-Achse im Farbraum, die bestimmt, wie grün (in Richtung `-100%`) oder rot (in Richtung `+100%`) die Farbe ist.

Beachten Sie, dass diese Werte unterschrieben sind (was sowohl positive als auch negative Werte zulässt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der ±125 oder ±0.4 (±100%) Limits einstellen können. In der Praxis können Werte nicht ±160 oder ±0.5, jeweils überschreiten.

Der `b` Wert hat die gleichen Einschränkungen. Er spezifiziert die Entfernung der Farbe entlang der b-Achse im Farbraum, die bestimmt, wie blau (in Richtung `-100%`) oder gelb (in Richtung `+100%`) die Farbe ist.

Das folgende Beispiel demonstriert die Auswirkungen der Variierung der `a` Achse durch eine `lab()` Funktion und der `b` Achse durch eine `oklab()` Funktion.

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

## Zusätzliche Farb-Funktionalnotationen

### Die `color()` Funktion

Wenn Sie explizite Kontrolle über Farbräume bei der Definition von Farben haben möchten, können Sie die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion verwenden.

Dies ist nützlich, um eine Farbe für hochauflösende Geräte mit breiteren Farb{{Glossary("Gamut", "Gamuts")}} zu beschreiben.
Zum Beispiel, wenn Sie die `display-p3 0 0 1` Farbe zeigen möchten, die außerhalb des sRGB-Farbraums liegt, könnten Sie ein `@media` [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) at-rule verwenden, um zu erkennen, ob die Hardware des Kunden Farben in diesem Bereich unterstützt, bevor Sie versuchen, es zu verwenden:

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

`color()` zu verstehen ist wichtig, wenn es um relative Farben geht, die als nächstes besprochen werden. Die oben diskutierten älteren sRGB Farbnotationen — `hsl()`, `hwb()`, und `rgb()` — drücken das gesamte Spektrum sichtbarer Farben nicht aus, während die `color()` Funktion einen viel breiteren Farbraum unterstützt. Daher wird bei der Verwendung der älteren Funktionstypen zur Definition relativer Farben die resultierende Farbe, die durch Abfragen der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder der [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode zurückgegeben wird, ein `color(srgb ...)` Wert sein.

Um ein Beispiel für die Konvertierung der `rgb()`, `hsl()`, `hwb()` und anderer [Farb-Formate](/de/docs/Web/CSS/Reference/Values/color_value) zu sehen, schauen Sie sich unser [Farbformat-Konverter-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter) an.

### Relative Farben

Jede der oben aufgeführten Farbfunktionen kann zur Definition von [**relativen Farben**](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) verwendet werden, die es ermöglichen, {{cssxref("&lt;color&gt;")}} Werte relativ zu anderen bestehenden Farben zu definieren, anstatt jedes Mal einen Farbwert von Grund auf neu zu definieren. Diese leistungsstarke Funktion ermöglicht die Erstellung von Komplementärfarben zu bestehenden Farben — wie hellere, dunklere, gesättigte, halbtransparente oder invertierte Varianten einer Originalfarbe. Relative Farben bieten einen effektiven Mechanismus zur Erstellung von Paletten und zur Definition von Farbjustierungen. Siehe jede Farbfunktionsseite, um mehr über ihre relativen Syntaxen zu erfahren.

Wie oben erwähnt, wird bei der Verwendung von `rgb()`, `hsl()` oder `hwb()`, um eine relative Farbe auszugeben, die Ausgabefarbe eine `color()` Funktion im `srgb` Farbraum sein.

### color-mix() Funktion

Die {{cssxref("color_value/color-mix", "color-mix()")}} Funktion nimmt zwei Farbwerte in jeglicher der oben genannten Syntax, optional mit proportionalen Prozentwerten für jede Farbe, und gibt das Ergebnis der Mischung in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

### light-dark() Funktion

Die {{cssxref("color_value/light-dark", "light-dark()")}} Funktion ermöglicht es Ihnen, zwei Farbwerte für eine Eigenschaft zu spezifizieren, die für die Verwendung in hellen und dunklen Farbschemata vorgesehen ist. Welche gesetzt wird, hängt davon ab, ob der Entwickler gesetzt hat oder der Benutzer ein helles oder dunkles Farbschema angefordert hat. Dies ist eine Schnellfunktion, die es ermöglicht, dasselbe Ergebnis wie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage zu erzielen, jedoch mit weniger Code.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [Farbe weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS Farbmodul](/de/docs/Web/CSS/Guides/Colors)
