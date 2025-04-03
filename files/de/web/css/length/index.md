---
title: \<length\>
slug: Web/CSS/length
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie zum Beispiel {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitsliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, andere nicht.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_computed length_) ist die zur absoluten Länge aufgelöste angegebene Länge, wobei ihre Einheit nicht unterschieden wird.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung in Bezug auf eine andere Distanz. Je nach Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können einfacher von einer Ausgabemedium-Umgebung auf eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihre Eltern angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-relative Längeneinheiten basieren auf Schriftarten, Containern oder Ansichtsfenstern.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der aktuellen Schriftart eines Elements oder seines Elternteils.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelrelative `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "cap height" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, die {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements. In Fällen, in denen es unmöglich oder unpraktisch ist, die Breite des `0`-Glyphen zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es in der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der {{Cssxref("font")}} des Elements. Bei Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe kleiner Buchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des Glyphs "水" (CJK-Wasserideogramm, U+6C34), das in der zur Wiedergabe verwendeten Schriftart gefunden wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die tatsächliche Größe von Zeilenboxen kann jedoch je nach Inhalt unterschiedlich sein.

### Relative Längeneinheiten basierend auf der Schrift der Wurzelelemente

Die relativen Längeneinheiten der Wurzelschrift definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "cap height" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder der {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) im Wurzelelement's {{Cssxref("font")}}.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements in der {{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Eine übliche Voreinstellung im Browser ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die tatsächliche Größe von Zeilenboxen kann jedoch je nach Inhalt unterschiedlich sein.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **viewport-percentage length units** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und standard. Die Möglichkeit für unterschiedliche Ansichtsfenstergrößen ist eine Reaktion auf Browser-Oberflächen, die sich dynamisch ausdehnen und zurückziehen und den darunter befindlichen Inhalt anzeigen oder verbergen.

- **Kleine Ansichtsfenstereinheiten**

  - : Wenn Sie das kleinstmögliche Ansichtsfenster in Reaktion auf sich dynamisch ausdehnende Browser-Oberflächen wünschen, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht es dem von Ihnen gestalteten Inhalt, das gesamte Ansichtsfenster zu füllen, wenn die Browser-Oberflächen erweitert werden. Diese Größe könnte möglicherweise auch leere Räume hinterlassen, wenn sich die Browser-Oberflächen zurückziehen.

    Zum Beispiel wird ein Element, das mit viewport-prozentualen Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert ist, den Bildschirm perfekt ausfüllen, ohne dass Inhalte verdeckt werden, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen jedoch ausgeblendet werden, könnte zusätzlicher Raum um das Element sichtbar sein. Daher sind die kleine viewport-prozentualen Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout erzeugen, sobald ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das Präfix `sv` repräsentiert und ergibt die `sv*` viewport-prozentualen Längeneinheiten. Die Größen der kleinen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird in der Größe geändert.

- **Große Ansichtsfenstereinheiten**

  - : Wenn Sie das größtmögliche Ansichtsfenster in Reaktion auf sich dynamisch zurückziehende Browser-Oberflächen wünschen, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht es dem von Ihnen gestalteten Inhalt, das gesamte Ansichtsfenster zu füllen, wenn sich die Browser-Oberflächen zurückziehen. Sie müssen sich bewusst sein, dass der Inhalt möglicherweise verborgen wird, wenn sich die Browser-Oberflächen ausdehnen.

    Zum Beispiel verbergen auf Mobiltelefonen, bei denen Bildschirmfläche knapp ist, Browser oft einen Teil der Titel- und Adressleiste, nachdem ein Benutzer begonnen hat, die Seite zu scrollen. Wenn ein Element mit einer viewport-prozentualen Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert ist, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browser-Oberflächen versteckt sind. Wenn diese zurückziehbaren Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt verbergen, der mit den _großen_ viewport-prozentualen Einheiten dimensioniert oder positioniert ist.

    Die große Ansichtsfenstereinheit wird durch das Präfix `lv` repräsentiert und ergibt die `lv*` viewport-prozentualen Einheiten. Die Größen der großen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird in der Größe geändert.

- **Dynamische Ansichtsfenstereinheiten**

  - : Wenn Sie das Ansichtsfenster automatisch in Reaktion auf sich dynamisch erweiternde oder zurückziehende Browser-Oberflächen dimensionieren möchten, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es dem von Ihnen gestalteten Inhalt, genau innerhalb des Ansichtsfensters zu passen, unabhängig von der Anwesenheit dynamischer Browser-Oberflächen.

    Die dynamische Ansichtsfenstereinheit wird durch das Präfix `dv` repräsentiert und ergibt die `dv*` viewport-prozentualen Einheiten. Die Größen der dynamischen viewport-prozentualen Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von viewport-prozentualen Einheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass sich der Inhalt während des Scrollens einer Seite neu dimensioniert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard-Ansichtsfenstereinheiten**

  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden viewport-prozentualen Einheit könnte dem der viewport-prozentualen Einheit basierend auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischenposition zwischen den beiden oder der dynamischen Ansichtsfenstergröße entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-viewport-prozentuale Einheit für Höhe (`vh`) implementieren, die der großen viewport-prozentualen Höheneinheit (`lvh`) entspricht. In diesem Fall könnte dies den Inhalt auf einer Vollbildanzeige verdecken, während die Browser-Oberfläche erweitert wird. Derzeit sind alle Standard-Ansichtsfenstereinheiten (`vh`, `vw`, etc.) äquivalent zu ihren großen Ansichtsfenster-Gegenstücken (`lvh`, `lvw`, etc.).

Viewport-prozentuale Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder des Seitenbereichs basiert, d.h. des sichtbaren Teils des Dokuments. Wenn die Höhe oder Breite des initialen enthaltenen Blocks geändert wird, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine viewport-prozentuale Längeneinheit, die jeder der Ansichtsfenstergrößen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Wenn zum Beispiel die Ansichtsfensterhöhe `300px` beträgt, ist ein Wert von `70vh` für eine Eigenschaft `210px`.

    Die jeweiligen viewport-prozentualen Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` entspricht `lvh`, was die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Auch hier beträgt bei einer Ansichtsfensterbreite von `800px` ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-prozentualen Einheiten `svw`, `lvw` und `dvw`.
    `vw` entspricht `lvw` und repräsentiert die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vmax`

  - : Repräsentiert prozentual die größte der Eigenschaften `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-prozentualen Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` entspricht `lvmax`, was die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vmin`

  - : Repräsentiert prozentual die kleinste der Eigenschaften `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-prozentualen Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` entspricht `lvmin` und repräsentiert die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-prozentualen Einheiten `svb`, `lvb` und `dvb`.
    `vb` entspricht `lvb` und repräsentiert die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Inlineachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-prozentualen Einheiten `svi`, `lvi` und `dvi`.
    `vi` entspricht `lvi` und repräsentiert die viewport-prozentuale Längeneinheit basierend auf der großen Ansichtsfenstergröße.

### Container-Abfrage Längeneinheiten

Bei der Anwendung von Stilen auf einen Container mit Container-Anfragen können Sie Container-Abfrage Längeneinheiten verwenden. Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfrage-Containers. Komponenten, die Einheiten von Längen relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern einsetzbar, ohne dass konkrete Längenwerte erneut berechnet werden müssen. Weitere Informationen finden Sie unter [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` beträgt 1% der Breite des Abfrage-Containers. Wenn z.B. die Breite des Abfrage-Containers `800px` beträgt, dann entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` beträgt 1% der Höhe des Abfrage-Containers. Wenn z.B. die Höhe des Abfrage-Containers `300px` beträgt, dann entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` beträgt 1% der Inline-Größe des Abfrage-Containers. Wenn z.B. die Inline-Größe des Abfrage-Containers `800px` beträgt, dann entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfrage-Containers. `1cqb` beträgt 1% der Block-Größe des Abfrage-Containers. Wenn z.B. die Block-Größe des Abfrage-Containers `300px` beträgt, dann entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmin` beträgt 1% des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Wenn z.B. die Inline-Größe des Abfrage-Containers `800px` und die Block-Größe `300px` beträgt, dann entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmax` beträgt 1% des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Wenn z.B. die Inline-Größe des Abfrage-Containers `800px` und die Block-Größe `300px` beträgt, dann entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, z. B. für den Druck-Layout. Dies erfolgt durch Ankern einer der Einheiten an eine **physische Einheit** oder die **visuelle Winkeleinheit** und anschließendem Definieren der anderen relativ dazu. Physische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Das Ankern unterscheidet sich für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie Drucker.

Für Geräte mit niedriger DPPI repräsentiert die Einheit `px` das physikalische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Somit ist `1in` definiert als `96px`, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben sind, nicht unbedingt mit der Größe der physischen Einheit mit demselben Namen übereinstimmen.

Für Geräte mit hoher DPPI sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) identisch mit ihren physischen Gegenstücken. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um Texte besser lesbar zu machen. Absolute Längen können Barrierefreiheitsprobleme verursachen, da sie fest sind und nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie relative Längen (wie `em` oder `rem`) bevorzugen, wenn Sie `font-size` festlegen.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerät-Pixel")}} (Punkt). Jedoch impliziert für _Drucker_ und _hochauflösende Bildschirme_ ein CSS-Pixel mehrere Geräte-Pixel. `1px` = `1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm` = `96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm` = `1cm / 10`.
- `Q`
  - : Ein Viertel eines Millimeters. `1Q` = `1cm / 40`.
- `in`
  - : Ein Zoll. `1in` = `2.54cm` = `96px`.
- `pc`
  - : Ein Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Wenn sie animiert werden, werden Werte des `<length>`-Datentyps als reale, Fließkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt basierend auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert eingeben können (z. B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste festzulegen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht Ihnen, die Effekte verschiedener Längeneinheiten zu vergleichen und gegenüberzustellen.

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">Enter width:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
}

.result {
  height: 20px;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  const code = document.createElement("code");
  code.textContent = `width: ${inputElem.value}`;
  result.appendChild(code);
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### Ergebnis

{{EmbedLiveSample('Comparing different length units', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box Modell](/de/docs/Web/CSS/CSS_box_model)
