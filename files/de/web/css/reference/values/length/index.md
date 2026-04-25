---
title: "`<length>` CSS-Typ"
short-title: <length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften verwendbar sind, die `<length>` Werte akzeptieren, sind sie nicht selbst `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) einer Länge (_specified length_) wird durch ihre Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) einer Länge (_computed length_) ist die angegebene Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit ist nicht unterschieden.

Die `<length>` Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternteil angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-relative Längeneinheiten basieren auf Schriftart, Container oder Ansichtsfenstergrößen.

### Relative Längeneinheiten, basierend auf der Schriftart

Schriftlängen definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der aktuell in einem Element oder dessen Elternteil verwendeten Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und die root relative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Entspricht der "Kap-Höhe" (nominale Höhe der Großbuchstaben) der Schrift eines Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Advance Measure")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der Schrift eines Elements.
    In Fällen, in denen die Bestimmung der Maße des `0` Glyphen unmöglich oder unpraktisch ist, muss es als `0,5em` breit und `1em` hoch angenommen werden.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Entspricht der [x-Höhe](https://de.wikipedia.org/wiki/X-Höhe) der Schrift eines Elements. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0,5em` in vielen Schriften.
- `ic`
  - : Repräsentiert die verwendete {{Glossary("advance_measure", "Advance Measure")}} des "水" Glyphen (CJK Wasser-Ideogramm, U+6C34), die in der Schrift verwendet wird, um es darzustellen.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, konvertiert zu einer absoluten Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe der tatsächlichen Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten, basierend auf der Schrift des Root-Elements

Root-Element-Schrift-relatie Längeneinheiten definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements:

- `rcap`
  - : Entspricht der "Kap-Höhe" (nominale Höhe der Großbuchstaben) der Schrift des Root-Elements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Advance Measure")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der Schrift des Root-Elements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Root-Elements (typischerweise {{HTMLElement("html")}}). Wenn innerhalb der root-Element {{Cssxref("font-size")}} verwendet, repräsentiert es den Initialwert. Ein üblicher Standardwert im Browser ist `16px`, Benutzerdefinierte Präferenzen können dies jedoch ändern.
- `rex`
  - : Entspricht der x-Höhe der Schrift des Root-Elements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Root-Elements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Root-Elements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die tatsächliche Größe der Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten, basierend auf dem Ansichtsfenster

Die **Viewport-Prozent-Längeneinheiten** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und Standard. Die Bereitstellung für die unterschiedlichen Ansichtsfenstergrößen erfolgt als Reaktion darauf, dass Browser-Schnittstellen dynamisch expandieren und sich zurückziehen sowie Inhalte darunter verbergen und zeigen.

- **Kleine Ansichtsfenster-Einheiten**
  - : Wenn Sie das kleinstmögliche Ansichtsfenster wünschen, als Reaktion auf dynamisch expandierende Browser-Oberflächen, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht es den von Ihnen gestalteten Inhalten, das gesamte Ansichtsfenster zu füllen, wenn Browser-Oberflächen expandieren. Die Wahl dieser Größe könnte auch möglicherweise leere Räume hinterlassen, wenn sich die Browser-Oberflächen zurückziehen.

    Zum Beispiel, wenn ein Element über Ansichtsfenster-Prozent-Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert ist, wird das Element den Bildschirm perfekt ausfüllen, ohne dass sein Inhalt verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen jedoch verborgen sind, könnte zusätzlicher Platz um das Element sichtbar werden. Daher sind die kleinen Ansichtsfenster-Prozent-Einheiten im Allgemeinen "sicherer" zu verwenden, möglicherweise führen sie jedoch nicht zum attraktivsten Layout, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das `sv`-Präfix dargestellt und ergibt die `sv*`-Ansichtsfenster-Prozent-Längeneinheiten. Die Größen der kleinen Ansichtsfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster wird selbst geändert.

- **Große Ansichtsfenster-Einheiten**
  - : Wenn Sie das größtmögliche Ansichtsfenster wünschen, als Reaktion auf Browser-Oberflächen, die sich dynamisch zurückziehen, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht es den von Ihnen gestalteten Inhalten, das gesamte Ansichtsfenster zu füllen, wenn Browser-Oberflächen sich zurückziehen. Sie müssen beachten, dass der Inhalt möglicherweise verborgen wird, wenn Browser-Oberflächen expandieren.

    Zum Beispiel verbergen Browser auf Mobiltelefonen, bei denen der Bildschirmplatz kostbar ist, oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer mit dem Scrollen der Seite begonnen hat. Wenn ein Element mit einer Ansichtsfenster-Prozent-Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert ist, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browser-Oberflächen verborgen sind. Wenn diese zurückziehbaren Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der für die _große_ Ansichtsfenster-Prozent-Einheiten dimensioniert oder positioniert ist.

    Die große Ansichtsfenster-Einheit wird durch das `lv`-Präfix dargestellt und ergibt die `lv*` Ansichtsfenster-Prozent-Einheiten. Die Größen der großen Ansichtsfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster wird selbst geändert.

- **Dynamische Ansichtsfenster-Einheiten**
  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch dimensioniert wird als Reaktion auf Browser-Schnittstellen, die dynamisch expandieren oder sich zurückziehen, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es den von Ihnen gestalteten Inhalten, genau in das Ansichtsfenster zu passen, unabhängig von der Anwesenheit dynamischer Browser-Oberflächen.

    Die dynamische Ansichtsfenster-Einheit wird durch das `dv`-Präfix dargestellt und ergibt die `dv*` Ansichtsfenster-Prozent-Einheiten. Die Größen der dynamischen Ansichtsfenster-Prozent-Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Ansichtsfenster-Prozent-Einheiten, die auf der dynamischen Ansichtsfenstergröße basieren, dazu führen, dass der Inhalt beim Scrollen einer Seite durch einen Benutzer seine Größe ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche und zu Leistungseinbußen führen.

- **Standard Ansichtsfenster-Einheiten**
  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden Ansichtsfenster-Prozent-Einheit könnte dem der Ansichtsfenster-Prozent-Einheit basierend auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischen-Größe zwischen den beiden oder der dynamischen Ansichtsfenstergröße entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Ansichtsfenster-Prozent-Einheit für die Höhe (`vh`) implementieren, die der großen Ansichtsfenster-Prozent-Höhen-Einheit (`lvh`) entspricht. Ist dies der Fall, könnte dies den Inhalt auf einer Vollbildanzeige verdecken, während die Browser-Oberfläche expandiert ist. Derzeit sind alle Standard-Ansichtsfenster-Einheiten (`vh`, `vw`, etc.) ihren großen Ansichtsfenster-Gegenstücken (`lvh`, `lvw`, etc.) gleichwertig.

Viewport-Prozent-Längen definieren `<length>` Werte in Prozent relativ zur Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder des Seitenbereichs basiert, d.h. dem sichtbaren Abschnitt des Dokuments. Wenn die Höhe oder Breite des initialen enthältlichen Blocks geändert wird, werden die Elemente, die darauf basieren, entsprechend skaliert. Es gibt eine Ansichtsfenster-Prozent-Längeneinheit-Variante, die jeder der Ansichtsfenstergrößen entspricht, wie unten beschrieben.

> [!NOTE]
> Ansichtsfenster-Längen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentanteil der Höhe des initialen enthältlichen Blocks des Ansichtsfensters. `1vh` ist 1% der Höhe des Ansichtsfensters. Wenn die Höhe des Ansichtsfensters zum Beispiel `300px` beträgt, dann ist ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen Ansichtsfenster-Prozent-Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` ist `lvh` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

- `vw`
  - : Repräsentiert einen Prozentanteil der Breite des initialen enthältlichen Blocks des Ansichtsfensters. `1vw` ist 1% der Breite des Ansichtsfensters. Wenn die Breite des Ansichtsfensters zum Beispiel `800px` beträgt, dann ist ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozent-Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist `lvw` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

- `vmax`
  - : Gibt in Prozent den größten der `vw` und `vh` Werte an.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozent-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist `lvmax` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

- `vmin`
  - : Gibt in Prozent den kleinsten der `vw` und `vh` Werte an.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozent-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist `lvmin` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), in Richtung der [Block-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozent-Einheiten `svb`, `lvb` und `dvb` entsprechend.
    `vb` ist `lvb` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), in Richtung der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozent-Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist `lvi` gleichwertig und repräsentiert die Ansichtsfenster-Prozent-Längeneinheit, basierend auf der großen Ansichtsfenstergröße.

### Container-Abfragen Längeneinheiten

Bei der Anwendung von Styles auf einen Container mit Containerabfragen können Sie Containerabfrage-Längeneinheiten verwenden.
Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfragecontainers.
Komponenten, die Einheiten der Länge relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne die konkreten Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Containerabfrage-Längeneinheit auf die [kleine Ansichtsfenster-Einheit](#small_viewport_units) für diese Achse (`sv*`) zurückgesetzt.

Weitere Informationen finden Sie unter [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Wenn die Breite des Abfragecontainers zum Beispiel `800px` beträgt, wird ein Wert von `50cqw` auf einer Eigenschaft `400px` sein.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Wenn die Höhe des Abfragecontainers zum Beispiel `300px` beträgt, wird ein Wert von `10cqh` auf einer Eigenschaft `30px` sein.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Wenn die Inline-Größe des Abfragecontainers zum Beispiel `800px` beträgt, wird ein Wert von `50cqi` auf einer Eigenschaft `400px` sein.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Wenn die Blockgröße des Abfragecontainers zum Beispiel `300px` beträgt, wird ein Wert von `10cqb` auf einer Eigenschaft `30px` sein.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Werts entweder der Inline-Größe oder Blockgröße des Abfragecontainers. Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmin` auf einer Eigenschaft `150px` sein.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Werts entweder der Inline-Größe oder Blockgröße des Abfragecontainers. Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmax` auf einer Eigenschaft `400px` sein.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie zum Beispiel bei Print-Layouts. Dies erfolgt durch Verankerung einer der Einheiten an eine **physikalische Einheit** oder der **visuellen Winkeleinheit** und dann der Definition der anderen relativ zu dieser. Physikalische Einheiten beinhalten `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt bei Geräten mit niedriger Auflösung, wie Bildschirmen, anders als bei Geräten mit hoher Auflösung, wie Druckern.

Bei Geräten mit niedriger DPI repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Somit wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben sind, nicht unbedingt mit der Größe der physischen Einheit mit dem gleichen Namen übereinstimmen.

Bei Geräten mit hoher DPI entsprechen Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) ihren physischen Gegenstücken. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihrer {{Glossary("user_agent", "User-Agenten")}}, um den Text besser lesbar zu machen. Absolute Längen können zu Zugänglichkeitsproblemen führen, da sie fest sind und sich nicht gemäß Benutzereinstellungen skalieren. Aus diesem Grund sind relative Längen (wie `em` oder `rem`) vorzuziehen, wenn `font-size` eingestellt wird.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Bei _Druckern_ und _Bildschirmen mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm` = `96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm` = `1cm / 10`.
- `Q`
  - : Ein Viertel eines Millimeters. `1Q` = `1cm / 40`.
- `in`
  - : Ein Zoll. `1in` = `2.54cm` = `96px`.
- `pc`
  - : Eine Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Werden `<length>` Werte animiert, erfolgt die Interpolation als reale Fließkommazahlen. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>` Wert (z. B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die unten angezeigt wird, sobald Sie die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste gedrückt haben.

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
  background-color: #eeeeee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999999;
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
- Modul [CSS-Werte & Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Boxmodell](/de/docs/Web/CSS/Guides/Box_model)
