---
title: <Länge>
slug: Web/CSS/length
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) stellt einen Distanzwert dar. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/specified_value) einer Länge (_spezifizierte Länge_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, auf eine absolute Länge aufgelöst, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung im Verhältnis zu einer anderen Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Linienhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die für ihre Eltern spezifizierten relativen Werte, sondern die berechneten Werte.

## Relative Längeneinheiten

CSS-Relative Längeneinheiten basieren auf Schriftarten, Containern oder Viewport-Größen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftattribute in der Schrift, die derzeit in einem Element oder dessen Elternteil wirksam ist.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das zugehörige `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap-Höhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das {{Glossary("advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen die Bestimmung des Maßes des `0`-Glyphs unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf die {{Cssxref("font-size")}}-Eigenschaft selbst angewendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x`-Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance measure")}} des "水"-Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schrift verwendet wird, um es darzustellen.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach ihrem Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Diese Einheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattribute des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap-Höhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet wird, repräsentiert es seinen Anfangswert. Ein häufiger Standardwert des Browsers ist `16px`, Benutzerdefinitionen können diesen jedoch ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach ihrem Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die viewport-prozentualen Längeneinheiten basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und Standard. Die Möglichkeit der verschiedenen Viewport-Größen ist eine Antwort auf die dynamische Erweiterung und Zurückziehung von Browser-Oberflächen und das Ein- und Ausblenden des Inhalts darunter.

- **Klein**

  - : Wenn Sie die kleinstmögliche Viewport-Größe als Antwort auf die dynamische Erweiterung der Browser-Oberflächen wünschen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es dem Inhalt, den Sie entwerfen, den gesamten Viewport zu füllen, wenn die Browser-Oberflächen erweitert sind. Diese Größe kann jedoch möglicherweise leere Räume hinterlassen, wenn die Browser-Oberflächen zurückgezogen werden.

    Zum Beispiel wird ein Element, das mit viewport-prozentualen Einheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, den Bildschirm perfekt füllen, ohne dass irgendein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen jedoch ausgeblendet werden, könnte zusätzlicher Raum um das Element sichtbar sein. Daher sind die kleinen viewport-prozentualen Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout erzeugen, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und resultiert in den `sv*` viewport-prozentualen Längeneinheiten. Die Größen der kleinen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird geändert.

- **Groß**

  - : Wenn Sie die größtmögliche Viewport-Größe als Antwort auf die dynamische Zurückziehung der Browser-Oberflächen wünschen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es dem Inhalt, den Sie entwerfen, den gesamten Viewport zu füllen, wenn die dynamischen Browser-Oberflächen zurückgezogen werden. Sie sollten sich bewusst sein, dass der Inhalt versteckt werden könnte, wenn die Browser-Oberflächen erweitert werden.

    Zum Beispiel verstecken Browser auf Mobiltelefonen, wo Bildschirme wertvollen Platz bieten, häufig Teile oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer beginnt, die Seite zu scrollen. Wenn ein Element mit einer viewport-prozentualen Einheit basierend auf der großen Viewport-Größe dimensioniert ist, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browser-Oberflächen ausgeblendet sind. Wenn diese zurückziehbaren Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt, der mit den großen viewport-prozentualen Einheiten dimensioniert oder positioniert ist, verdecken.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und resultiert in den `lv*` viewport-prozentualen Einheiten. Die Größen der großen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird geändert.

- **Dynamisch**

  - : Wenn Sie möchten, dass der Viewport automatisch in Antwort auf die dynamische Erweiterung oder Zurückziehung der Browser-Oberflächen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es dem Inhalt, den Sie entwerfen, genau in den Viewport zu passen, unabhängig von der Anwesenheit dynamischer Browser-Oberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und resultiert in den `dv*` viewport-prozentualen Einheiten. Die Größen der dynamischen viewport-prozentualen Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität bieten kann, kann die Verwendung von viewport-prozentualen Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass sich der Inhalt beim Scrollen der Seite durch einen Benutzer ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard**

  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden viewport-prozentualen Einheit könnte gleich sein mit der viewport-prozentualen Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischenstufe oder der dynamischen Viewport-Größe.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-viewport-prozentuale Einheit für die Höhe (`vh`) implementieren, die der großen viewport-prozentualen Höheneinheit (`lvh`) entspricht. Wenn dem so ist, könnte dies Inhalt auf einer kompletten Seite verdecken, während die Browser-Oberfläche erweitert ist.

Viewport-prozentuale Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Containing Block](/de/docs/Web/CSS/Containing_block), welche wiederum auf der Größe des {{Glossary("viewports")}} oder des Seitenbereichs, d.h. des sichtbaren Teils des Dokuments, basieren kann. Wenn sich die Höhe oder Breite des initialen Containing Blocks ändert, werden die Elemente, die auf dieser Basis dimensioniert sind, entsprechend skaliert. Es gibt eine viewport-prozentuale Längeneinheit, die jeder der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind ungültig in {{cssxref("@page")}}-Deklarationsblöcken.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Containing Blocks](/de/docs/Web/CSS/Containing_block) des Viewports. `1vh` ist 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` ist, dann beträgt ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die entsprechenden viewport-prozentualen Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Containing Blocks](/de/docs/Web/CSS/Containing_block) des Viewports. `1vw` ist 1% der Viewport-Breite. Wenn z. B. die Viewport-Breite `800px` ist, dann beträgt ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden viewport-prozentualen Einheiten `svw`, `lvw` und `dvw`.
    `vw` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmax`

  - : Repräsentiert prozentual den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden viewport-prozentualen Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmin`

  - : Repräsentiert prozentual den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden viewport-prozentualen Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Containing Blocks](/de/docs/Web/CSS/Containing_block) in der Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden viewport-prozentualen Einheiten `svb`, `lvb` und `dvb`.
    `vb` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Containing Blocks](/de/docs/Web/CSS/Containing_block) in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden viewport-prozentualen Einheiten `svi`, `lvi` und `dvi`.
    `vi` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

### Container-Abfrage-Längeneinheiten

Bei der Anwendung von Stilen auf einen Container mit Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfrage-Containers.
Komponenten, die Einheiten relativ zu ihrem Container verwenden, sind flexibler einsetzbar in verschiedenen Containern, ohne dass konkrete Längenwerte erneut berechnet werden müssen.
Weitere Informationen finden Sie in den [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` ist 1% der Breite des Abfrage-Containers. Wenn z. B. die Breite des Abfrage-Containers `800px` ist, beträgt ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` ist 1% der Höhe des Abfrage-Containers. Wenn z. B. die Höhe des Abfrage-Containers `300px` ist, dann beträgt ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` ist 1% der Inline-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt, dann ist ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfrage-Containers. `1cqb` ist 1% der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Block-Größe des Abfrage-Containers `300px` beträgt, dann ist ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder Block-Größe des Abfrage-Containers. `1cqmin` ist 1% des kleineren Werts entweder der Inline-Größe oder Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` ist und seine Block-Größe `300px` beträgt, dann ist ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder Block-Größe des Abfrage-Containers. `1cqmax` ist 1% des größeren Werts entweder der Inline-Größe oder Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` ist und seine Block-Größe `300px` beträgt, dann ist ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

Absolute Längeneinheiten stellen eine physikalische Messung dar, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z. B. für das Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine physikalische Einheit verankert und die anderen relativ zu dieser definiert werden. Die Verankerung erfolgt unterschiedlich bei Geräten mit niedriger Auflösung, wie Bildschirmen, im Vergleich zu Geräten mit hoher Auflösung, wie Druckern.

Für Geräte mit niedriger DPI stellt die Einheit `px` das physikalische _Referenzpixel_ dar; andere Einheiten werden relativ dazu definiert. So ist `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass auf solchen Geräten die Maße in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) nicht unbedingt mit der Größe der physikalischen Einheit mit demselben Namen übereinstimmen.

Für Geräte mit hoher DPI sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) gleich ihren physikalischen Gegenstücken. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Nutzer vergrößern die Standard-Schriftgröße ihres {{Glossary("Benutzeragenten")}}, um Text besser lesbar zu machen. Absolute Längen können zu Barrierefreiheitsproblemen führen, da sie fest sind und sich nicht an die Benutzereinstellungen anpassen. Aus diesem Grund sollten relative Längen (wie `em` oder `rem`) bevorzugt werden, wenn die `font-size` festgelegt wird.

- `px`
  - : Ein Pixel. Für Bildschirme bedeutet dies traditionell ein Geräte-Pixel (Punkt). Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Geräte-Pixel. `1px` = `1in / 96`.
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

Wenn Werte des `<length>`-Datentyps animiert werden, erfolgt die Interpolation als reale Gleitzahlen. Die {{glossary("interpolation")}} passiert auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert eingeben können (z. B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste zu setzen, die darunter erscheint, wenn Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste drücken.

Dies ermöglicht es Ihnen, die Auswirkungen verschiedener Längeneinheiten zu vergleichen und gegenüberzustellen.

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

- [CSS-Werte & Einheitenlernen](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS-Werte & Einheitenmodul](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Box Model](/de/docs/Web/CSS/CSS_box_model)
