---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) stellt einen Distanzwert dar. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften wie `<length>`-Werte verwendet werden können, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitensliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_computed length_) ist die spezifizierte Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stehen für eine Messung in Bezug auf eine andere Strecke. Abhängig von der Einheit kann diese Strecke die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} darstellen. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabeumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihren Elternteil spezifiziert wurden; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftart

Schriftartenlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattribute in der aktuell in einem Element oder seinem Elternteil verwendeten Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Großbuchstabenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das {{Glossary("advance_measure", "Vorwärtmaß")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphs zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der {{Cssxref("font")}} des Elements. In Schriftarten mit dem Buchstaben `x` ist dies in der Regel die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Vorwärtsmaß")}} des "水" Glyphs (CJK Wassereideogramm, U+6C34), das in der für das Rendering verwendeten Schrift gefunden wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Relative Längeneinheiten der Schriftart des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Großbuchstabenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorwärtsmaß")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet, repräsentiert es seinen Anfangswert. Ein häufiger Standard des Browsers ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **viewport-percentage length units** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und standardmäßig. Die Berücksichtigung der verschiedenen Ansichtsfenstergrößen erfolgt in Reaktion darauf, dass Browseroberflächen sich dynamisch erweitern und zurückziehen und Inhalte darunter ein- und ausblenden.

- **Kleine Ansichtsfenstereinheiten**
  - : Wenn Sie das kleinste mögliche Ansichtsfenster anstreben, um auf das dynamische Erweitern der Browseroberflächen zu reagieren, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht es Ihnen, Inhalte so zu gestalten, dass sie das gesamte Ansichtsfenster füllen, wenn die Browseroberflächen erweitert sind. Durch die Wahl dieser Größe kann es jedoch auch vorkommen, dass bei zurückgezogenen Browseroberflächen leere Bereiche sichtbar werden.

    Beispielsweise füllt ein Element, das mit viewport-percentage Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert ist, den Bildschirm perfekt aus, ohne dass Inhalt verdeckt wird, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen jedoch ausgeblendet werden, kann extra Platz um das Element herum sichtbar werden. Aus diesem Grund sind die kleinen Ansichtsfenstereinheiten im Allgemeinen "sicherer" zu verwenden, führen jedoch möglicherweise nicht zum attraktivsten Layout, sobald ein Benutzer anfängt, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das Präfix `sv` dargestellt und führt zu den `sv*` viewport-percentage Längeneinheiten. Die Größen der kleinen viewport-percentage Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird neu dimensioniert.

- **Große Ansichtsfenstereinheiten**
  - : Wenn Sie das größtmögliche Ansichtsfenster anstreben, um auf das dynamische Zurückziehen der Browseroberflächen zu reagieren, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht es Ihnen, Inhalte so zu gestalten, dass sie das gesamte Ansichtsfenster füllen, wenn die Browseroberflächen zurückgezogen sind. Sie müssen jedoch beachten, dass Inhalte verdeckt werden können, wenn die Browseroberflächen wieder ausgeklappt werden.

    Zum Beispiel verbergen Browser auf Mobiltelefonen häufig Teile oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer anfängt, auf der Seite zu scrollen. Bei einem Element, das mit einer viewport-percentage Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert ist, füllen die Inhalte des Elements die gesamte sichtbare Seite aus, wenn diese Browseroberflächen ausgeblendet sind. Wenn diese zurückziehbaren Browseroberflächen jedoch angezeigt werden, können sie die Inhalte verdecken, die mit den großen Ansichtsfenster-percentage Einheiten dimensioniert oder positioniert sind.

    Die große Ansichtsfenstereinheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*` viewport-percentage Einheiten. Die Größen der großen viewport-percentage Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird neu dimensioniert.

- **Dynamische Ansichtsfenstereinheiten**
  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch dimensioniert wird, um auf das dynamische Erweitern oder Zurückziehen von Browseroberflächen zu reagieren, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es Ihnen, Inhalte genau innerhalb des Ansichtsfensters anzupassen, unabhängig von der Anwesenheit dynamischer Browseroberflächen.

    Die dynamische Ansichtsfenstereinheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*` viewport-percentage Einheiten. Die Größen der dynamischen viewport-percentage Einheiten sind nicht stabil, auch wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität ermöglicht, kann die Verwendung von viewport-percentage Einheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass die Inhalte während des Scrollens einer Seite neu dimensioniert werden. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standardeinheit des Ansichtsfensters**
  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden viewport-percentage Einheit könnte der viewport-percentage Einheit entsprechen, die auf die kleine Ansichtsfenstergröße, die große Ansichtsfenstergröße, eine Zwischengröße zwischen den beiden oder die dynamische Ansichtsfenstergröße basiert.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die standardmäßige viewport-percentage Einheit für Höhe (`vh`) implementieren, die der großen viewport-percentage Höheneinheit (`lvh`) entspricht. In diesem Fall könnte dies Inhalte auf einer ganzseitigen Darstellung verdecken, während die Browseroberfläche erweitert ist. Derzeit sind alle Standard-Ansichtsfenstereinheiten (`vh`, `vw` usw.) ihren Pendants in der großen Ansichtsfenstergröße (`lvh`, `lvw` usw.) gleichwertig.

Viewport-prozentuale Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder des Seitenbereichs basiert, d.h. auf dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen enthältenden Blocks geändert wird, werden die Elemente, die auf ihnen basieren, entsprechend skaliert. Es gibt eine Variante der viewport-percentage Länge für jede der Ansichtsfenstergrößen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen enthaltenden Blocks des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Zum Beispiel, wenn die Ansichtsfensterhöhe `300px` ist, hat ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen viewport-percentage Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` entspricht `lvh` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen enthaltenden Blocks des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Zum Beispiel, wenn die Ansichtsfensterbreite `800px` ist, hat ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-percentage Einheiten `svw`, `lvw` und `dvw`.
    `vw` entspricht `lvw` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vmax`
  - : Repräsentiert prozentual den größten der Werte von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-percentage Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` entspricht `lvmax` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vmin`
  - : Repräsentiert prozentual den kleinsten der Werte von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-percentage Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` entspricht `lvmin` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-percentage Einheiten `svb`, `lvb` und `dvb`.
    `vb` entspricht `lvb` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Inlineachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-percentage Einheiten `svi`, `lvi` und `dvi`.
    `vi` entspricht `lvi` und repräsentiert die viewport-percentage Längeneinheit basierend auf der großen Ansichtsfenstergröße.

### Längeneinheiten bei Container-Abfragen

Beim Anwenden von Stilen auf einen Container mit Container-Abfragen können Sie container-abfrage Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, standardisiert die container-abfrage Längeneinheit auf die [kleine Ansichtsfenstereinheit](#small_viewport_units) für diese Achse (`sv*`).

Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann hat ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann hat ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann hat ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` beträgt, dann hat ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. `1cqmin` ist 1% des kleineren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und seine Block-Größe `300px` beträgt, dann hat ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. `1cqmax` ist 1% des größeren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und seine Block-Größe `300px` beträgt, dann hat ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** stellen eine physische Messung dar, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, z. B. für einen Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkeleinheit** gekoppelt wird und dann die anderen relativ dazu definiert werden. Physikalische Einheiten beinhalten `cm`, `in`, `mm`, `pc`, `pt`, `px`, und `Q`. Das Einjustieren erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie Druckern.

Für Geräte mit geringer dpi (dots per inch) repräsentiert die Einheit `px` das physikalische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Somit wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten dimensionen in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) nicht unbedingt der physischen Einheit mit demselben Namen entsprechen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) die gleichen wie ihre physischen Gegenstücke. Daher wird die `px` Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "user agent")}}, um den Text besser lesbar zu machen. Absolute Längen können zu Zugänglichkeitsproblemen führen, da sie fest sind und nicht gemäß den Benutzereinstellungen skalieren. Aus diesem Grund sollte bevorzugt relative Längen (wie `em` oder `rem`) verwendet werden, wenn die `font-size` eingestellt wird.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>`-Datentyps als reale, Fließkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich unterschiedlicher Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in dem Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste zu setzen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht es Ihnen, die Effekte unterschiedlicher Längeneinheiten zu vergleichen und gegenüberzustellen.

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
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model)
