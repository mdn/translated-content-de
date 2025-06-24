---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z. B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{Cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{Cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{Cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Raum zwischen der Zahl und dem Einheitliteral. Die Längeneinheit ist optional anzugeben, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_spezifizierte Länge_) wird durch ihre Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren ein Maß in Bezug auf eine andere Entfernung. Abhängig von der Einheit kann diese Entfernung die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, die für ihr übergeordnetes Element spezifiziert sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftgröße

Schriftgrößen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftattribut in der momentan in einem Element oder dessen Eltern geltenden Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und die wurzelrelative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite auch dann beibehalten, wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Kapitälchenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, die {{Glossary("advance_measure", "Vorreiseweise")}} des Glyphens `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen es unmöglich oder unpraktisch ist, die Maßnahme des `0`-Glyphens zu bestimmen, muss davon ausgegangen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-Höhe) der {{Cssxref("font")}} des Elements. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht der verwendeten {{Glossary("advance_measure", "Vorreiseweise")}} des "水"-Glyphens (CJK Wasser-Ideograph, U+6C34), das in der zur Darstellung verwendeten Schrift gefunden wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, und wird in eine absolute Länge umgewandelt. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Schriftart-bezogene relative Längeneinheiten des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder eines Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Kapitälchenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder der {{Glossary("advance_measure", "Vorreiseweise")}} des Glyphens `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements {{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Ein üblicher Browser-Standard ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **Ansichtsfenster-Prozentsatz-Längeneinheiten** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und Standard. Die Erlaubnis für die unterschiedlichen Ansichtsfenstergrößen ist eine Reaktion darauf, dass Browseroberflächen sich dynamisch ausdehnen und zurückziehen und den darunter liegenden Inhalt ein- und ausblenden.

- **Kleine Ansichtsfenstereinheiten**

  - : Wenn Sie die kleinste mögliche Ansicht im Hinblick auf das dynamische Ausdehnen von Browseroberflächen wünschen, sollten Sie die kleine Ansicht verwenden. Die kleine Ansicht ermöglicht es, dass der von Ihnen gestaltete Inhalt das gesamte Ansichtsfenster füllt, wenn die Browseroberflächen erweitert sind. Die Wahl dieser Größe kann möglicherweise auch leere Räume hinterlassen, wenn sich die Browseroberflächen zurückziehen.

    Zum Beispiel, wenn ein Element mit Ansichtsfenster-Prozentsatz-Einheiten basierend auf der kleinen Ansicht dimensioniert wird, wird das Element den Bildschirm perfekt füllen, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen ausgeblendet werden, können jedoch möglicherweise zusätzliche Räume um das Element sichtbar sein. Daher sind die kleinen Ansichtsfenster-Prozentsatz-Einheiten im Allgemeinen "sicherer" zu verwenden, können jedoch möglicherweise nicht das attraktivste Layout bieten, nachdem ein Benutzer mit der Seite zu interagieren beginnt.

    Die kleine Ansicht wird durch das Präfix `sv` repräsentiert und resultiert in den `sv*`-Ansichtsfenster-Prozentsatz-Längen-Einheiten. Die Größen der kleinen Ansichtsfenster-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Große Ansichtsfenstereinheiten**

  - : Wenn Sie die größte mögliche Ansicht im Hinblick auf das dynamische Zurückziehen von Browseroberflächen wünschen, sollten Sie die große Ansicht verwenden. Die große Ansicht ermöglicht es, dass der von Ihnen gestaltete Inhalt das gesamte Ansichtsfenster füllt, wenn Browseroberflächen zurückgezogen werden. Sie müssen sich dessen bewusst sein, dass der Inhalt möglicherweise verborgen wird, wenn Browseroberflächen erweitert werden.

    Zum Beispiel verstecken Browser auf Mobiltelefonen, bei denen der Bildschirmplatz knapp ist, oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer begonnen hat, auf der Seite zu scrollen. Wenn ein Element mit einer Ansichtsfenster-Prozentsatz-Einheit basierend auf der großen Ansicht dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browseroberflächen ausgeblendet sind. Wenn die zurückziehbaren Browseroberflächen angezeigt werden, können sie jedoch den Inhalt verdecken, der mit den _großen_ Ansichtsfenster-Prozentsatz-Einheiten dimensioniert oder positioniert ist.

    Die große Ansichtsfenstereinheit wird durch das Präfix `lv` repräsentiert und resultiert in den `lv*`-Ansichtsfenster-Prozentsatz-Einheiten. Die Größen der großen Ansichtsfenster-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Dynamische Ansichtsfenstereinheiten**

  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch im Hinblick auf das dynamische Ausdehnen oder Zurückziehen von Browseroberflächen dimensioniert wird, können Sie die dynamische Ansicht verwenden. Die dynamische Ansichtsgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt genau in das Ansichtsfenster passt, unabhängig von der Anwesenheit von dynamischen Browseroberflächen.

    Die dynamische Ansichtsfenstereinheit wird durch das Präfix `dv` repräsentiert und resultiert in den `dv*`-Ansichtsfenster-Prozentsatz-Einheiten. Die Größen der dynamischen Ansichtsfenster-Prozentsatz-Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsgröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Ansichtsfenster-Prozentsatz-Einheiten, die auf der dynamischen Ansicht basieren, dazu führen, dass sich der Inhalt während des Scrollens einer Seite ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und sich auf die Leistung auswirken.

- **Standard-Ansichtsfenstereinheiten**

  - : Die Standard-Ansichtsgröße wird vom Browser definiert. Das Verhalten der resultierenden Ansichtsfenster-Prozentsatz-Einheit könnte dem der auf der kleinen Ansicht, der großen Ansicht, einer Zwischengröße oder der dynamischen Ansichtsgröße basierenden Einheit entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Ansichtsfenster-Prozentsatz-Einheit für die Höhe (`vh`) implementieren, die der großen Ansichtsfenster-Prozentsatz-Höhen-Einheit (`lvh`) entspricht. Wenn dies so ist, könnte dies den Inhalt einer einseitigen Anzeige verbergen, während die Browseroberfläche erweitert ist. Derzeit entsprechen alle Standard-Ansichtsfenstereinheiten (`vh`, `vw`, etc.) ihren großen Ansichtsfenster-Pendants (`lvh`, `lvw`, etc.).

Ansichtsfenster-Prozentsatz-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Containting Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), die wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder dem Seitenbereich, d.h. dem sichtbaren Teil des Dokuments, basiert. Wenn die Höhe oder Breite des initialen Containing Blocks geändert wird, werden die Elemente, die auf dieser Basis dimensioniert sind, entsprechend skaliert. Es gibt eine Ansichtsfenster-Prozentsatz-Längeneinheit für jede der Ansichtsfenstergrößen, wie unten beschrieben.

> [!NOTE]
> Ansichtsfensterlängen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Zum Beispiel, wenn die Ansichtsfensterhöhe `300px` beträgt, dann ist ein Wert von `70vh` für eine Eigenschaft `210px`.

    Die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten für kleine, große und dynamische Ansichtsgrößen sind `svh`, `lvh` und `dvh`. `vh` entspricht `lvh`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Zum Beispiel, wenn die Ansichtsfensterbreite `800px` beträgt, dann ist ein Wert von `50vw` für eine Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsgrößen sind die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten `svw`, `lvw` und `dvw`.
    `vw` entspricht `lvw`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

- `vmax`

  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsgrößen sind die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` entspricht `lvmax`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsgrößen sind die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` entspricht `lvmin`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsgrößen sind die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten `svb`, `lvb` und `dvb`.
    `vb` entspricht `lvb`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsgrößen sind die jeweiligen Ansichtsfenster-Prozentsatz-Einheiten `svi`, `lvi` und `dvi`.
    `vi` entspricht `lvi`, das die auf der großen Ansicht basierende Ansichtsfenster-Prozentsatz-Längeneinheit repräsentiert.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mit Containerabfragen anwenden, können Sie Containerabfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Einheiten von Längen verwenden, die relativ zu ihrem Container sind, sind flexibler in verschiedenen Containern zu verwenden, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Containerabfrage-Längeneinheit auf die [kleine Ansichtsfenstereinheit](#small_viewport_units) für diese Achse (`sv*`) gesetzt.

Für weitere Informationen siehe [Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqw` für eine Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqh` für eine Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqi` für eine Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqb` für eine Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` ist, dann ist ein Wert von `50cqmin` für eine Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` ist, dann ist ein Wert von `50cqmax` für eine Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, so wie für den Drucklayout. Dies geschieht, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkel-Einheit** verankert wird, und dann werden die anderen relativ dazu definiert. Physische Einheiten schließen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q` ein. Die Verankerung wird unterschiedlich für Niedrigauflösungsgeräte, wie Bildschirme, im Vergleich zu Hochauflösungsgeräten, wie Druckern, behandelt.

Für Niedrig-DPI-Geräte repräsentiert die Einheit `px` den physischen _Referenz-Pixel_; andere Einheiten werden relativ dazu definiert. Somit wird `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschrieben werden, nicht unbedingt mit der Größe der physischen Einheit mit demselben Namen übereinstimmen.

Für Hoch-DPI-Geräte sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) dieselben wie ihre physischen Gegenstücke. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "User-Agents")}}, um Text besser lesbar zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, weil sie fixiert sind und nicht gemäß Benutzereinstellungen skaliert werden. Aus diesem Grund wird empfohlen, relative Längen (wie `em` oder `rem`) zu bevorzugen, wenn die `font-size` festgelegt wird.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Für _Drucker_ und _Hochauflösungsbildschirme_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>`-Datentyps als reelle, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die der Animation zugeordnet ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z. B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die unterhalb angezeigt wird, sobald Sie die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste gedrückt haben.

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

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
