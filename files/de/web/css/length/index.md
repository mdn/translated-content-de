---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften eingesetzt werden, wie etwa {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und dem Einheitensymbol. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) einer Länge (_spezifizierte Länge_) wird durch seine Quantität und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, die auf eine absolute Länge gelöst ist, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung in Bezug auf eine andere Distanz. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, die für ihre Eltern angegeben wurden; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftart

Schriftartenlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder eines Schriftattributs in der aktuell bei einem Element oder dessen Elternelement wirksamen Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "cap height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphs zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es in der Eigenschaft {{Cssxref("font-size")}} selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der {{Cssxref("font")}} des Elements. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des „水“-Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schriftart gefunden wird, die es rendert.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe eines idealen leeren Zeile. Allerdings kann die Größe tatsächlicher Zeilenboxen aufgrund ihres Inhalts unterschiedlich sein.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Relative Längeneinheiten für die Schrift des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "cap height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der Wurzelelement-{{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Ein gängiges Browser-Standardwert ist `16px`, Benutzerdefinierte Präferenzen können dies jedoch ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe eines idealen leeren Zeile. Allerdings kann die Größe der tatsächlichen Zeilenboxen je nach Inhalt unterschiedlich sein.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die Längeneinheiten der Ansichtsfenster-Prozentsätze basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und standard. Die Berücksichtigung der verschiedenen Ansichtsfenstergrößen erfolgt als Reaktion auf die dynamische Erweiterung und Verkleinerung der Browser-Oberflächen sowie das Ein- und Ausblenden von Inhalten darunter.

- **Klein**

  - : Wenn Sie die kleinste mögliche Ansicht in Reaktion auf die dynamische Erweiterung der Browser-Oberflächen wünschen, sollten Sie die kleine Ansicht verwenden. Die kleine Ansicht erlaubt es, dass das von Ihnen entworfene Inhalt den gesamten Ansichtsbereich ausfüllt, wenn die Browser-Oberflächen erweitert sind. Die Wahl dieser Größe könnte auch möglicherweise leere Flächen hinterlassen, wenn die Browser-Oberflächen verkleinert werden.

    Beispiel: Ein Element, das mit Einheiten von Ansichtsteil-Prozent basierend auf der kleinen Ansicht dimensioniert wird, füllt den Bildschirm perfekt aus, ohne dass einer seiner Inhalte verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Oberflächen verborgen werden, könnte jedoch zusätzlicher Platz um das Element sichtbar sein. Daher sind die Einheiten der kleinen Ansicht-Prozent in der Regel „sicherer“ zu verwenden, könnten jedoch nach einer Benutzerinteraktion mit der Seite möglicherweise nicht das attraktivste Layout bieten.

    Die Größe der kleinen Ansicht wird durch das `sv`-Präfix repräsentiert und resultiert in den `sv*` Ansichtsfenstereinheiten. Die Größen der kleinen Ansicht-Prozentsatzeinheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird verändert.

- **Groß**

  - : Wenn Sie die größtmögliche Ansicht in Reaktion auf die dynamische Verkleinerung der Browser-Oberflächen wünschen, sollten Sie die große Ansicht verwenden. Die große Ansicht erlaubt es, das von Ihnen entworfene Inhalt den gesamten Ansichtsbereich ausfüllt, wenn die Browser-Oberflächen verkleinert werden. Sie müssen sich bewusst sein, dass der Inhalt möglicherweise verdeckt wird, wenn die Browser-Oberflächen erweitert werden.

    Beispiel: Auf Mobiltelefonen, bei denen der Bildschirmplatz begrenzt ist, verbergen Browser oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer angefangen hat, die Seite zu scrollen. Wenn ein Element mit einer Ansichtsteil-Prozent-Einheit basierend auf der großen Ansicht dimensioniert wird, wird der Inhalt des Elements die gesamte sichtbare Seite ausfüllen, wenn diese zuschaltbaren Browser-Oberflächen verborgen sind. Wenn diese Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Ansichtsfenster-Prozentsatzeinheiten dimensioniert oder positioniert wurde.

    Die große Ansichtseinheit wird durch das `lv`-Präfix repräsentiert und resultiert in den `lv*` Ansichtsfenstereinheiten. Die Größen der großen Ansicht-Prozentsatzeinheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird verändert.

- **Dynamisch**

  - : Wenn Sie möchten, dass sich das Ansichtsfenster automatisch anpasst, als Reaktion auf die dynamische Erweiterung oder Verkleinerung der Browser-Oberflächen, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es, dass das von Ihnen entworfene Inhalt genau in das Ansichtsfenster passt, unabhängig davon, ob dynamische Browser-Oberflächen vorhanden sind.

    Die dynamische Ansichtsfenster-Einheit wird durch das `dv`-Präfix repräsentiert und resultiert in den `dv*` Ansichtsfenstereinheiten. Die Größen der dynamischen Ansichtsfenster-Prozentsatzeinheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität bieten kann, kann die Verwendung von Ansichtsteil-Prozentsatzeinheiten, die auf der dynamischen Ansicht basieren, dazu führen, dass sich der Inhalt während des Scrollens einer Seite ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard**

  - : Die Standard-Ansichtsfenstergröße wird durch den Browser definiert. Das Verhalten der resultierenden Ansichtsteil-Prozentsatz-Einheit kann der Ansichtsteil-Prozentsatz-Einheit basierend auf der kleinen Ansicht, der großen Ansicht, einer Zwischenstufe zwischen den beiden oder der dynamischen Ansicht entsprechen.

    > [!NOTE]
    > Beispielsweise kann ein Browser die Standard-Ansichtsteil-Prozentsatz-Einheit für Höhe (`vh`) implementieren, die der großen Ansichtsteil-Prozentsatz-Höhe-Einheit (`lvh`) entspricht. Wenn dies der Fall ist, könnte dies Inhalte in einer Vollbildanzeige verdecken, während die Browser-Oberfläche erweitert ist.

Ansichtsteil-Prozentsatz-Längen definieren `<length>`-Werte als Prozentsätze relativ zur Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder des Seitenbereichs basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des ursprünglichen enthaltenen Blocks geändert wird, werden die Elemente, die darauf basieren, entsprechend skaliert. Es gibt eine Ansichtsteil-Prozentsatz-Längeneinheit, die jeder der Ansichtsfenstergrößen entspricht, wie unten beschrieben.

> [!NOTE]
> Ansichtsfensterlängen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` entspricht 1% der Ansichtsfensterhöhe. Beispiel: Wenn die Ansichtsfensterhöhe `300px` beträgt, ist ein Wert von `70vh` bei einer Eigenschaft `210px`.

    Die entsprechenden Ansichtsteil-Prozentsatz-Einheiten für kleine, große und dynamische Ansichtsgrößen sind `svh`, `lvh` und `dvh`. `vh` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` entspricht 1% der Ansichtsfensterbreite. Beispiel: Wenn die Ansichtsfensterbreite `800px` beträgt, ist ein Wert von `50vw` bei einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsgrößen sind die entsprechenden Ansichtsteil-Prozentsatz-Einheiten `svw`, `lvw` und `dvw`.
    `vw` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

- `vmax`

  - : Repräsentiert in Prozent den größten von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsteil-Prozentsatz-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsteil-Prozentsatz-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsgrößen sind die entsprechenden Ansichtsteil-Prozentsatz-Einheiten `svb`, `lvb` und `dvb`.
    `vb` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsgrößen sind die entsprechenden Ansichtsteil-Prozentsatz-Einheiten `svi`, `lvi` und `dvi`.
    `vi` stellt die Ansichtsteil-Längeneinheit basierend auf der Standard-Ansichtsfenstergröße des Browsers dar.

### Containerabfragemängeneinheiten

Wenn Sie Stile auf einen Container mit Containerabfragen anwenden, können Sie Containerabfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.
Für weitere Informationen siehe [Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` entspricht 1% der Breite des Abfragecontainers. Beispiel: Wenn die Breite des Abfragecontainers `800px` beträgt, ist ein Wert von `50cqw` bei einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` entspricht 1% der Höhe des Abfragecontainers. Beispiel: Wenn die Höhe des Abfragecontainers `300px` beträgt, ist ein Wert von `10cqh` bei einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` entspricht 1% der Inline-Größe des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` beträgt, ist ein Wert von `50cqi` bei einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` entspricht 1% der Blockgröße des Abfragecontainers. Beispiel: Wenn die Blockgröße des Abfragecontainers `300px` beträgt, ist ein Wert von `10cqb` bei einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe des Abfragecontainers oder der Blockgröße. `1cqmin` entspricht 1% des kleineren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, ist ein Wert von `50cqmin` bei einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe des Abfragecontainers oder der Blockgröße. `1cqmax` entspricht 1% des größeren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, ist ein Wert von `50cqmax` bei einer Eigenschaft `400px`.

## Absolute Längeneinheiten

Absolute Längeneinheiten repräsentieren eine physische Maßeinheit, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, z. B. für den Drucklayout. Dies geschieht, indem eine der Einheiten an eine physische Einheit verankert wird und dann die anderen relativ dazu definiert werden. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, gegenüber Geräten mit hoher Auflösung, wie Drucker.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. So wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben werden, nicht notwendigerweise der Größe der physischen Einheit mit dem gleichen Namen entsprechen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) identisch mit ihren physischen Gegenstücken. Daher ist die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "User-Agent")}}, um Text besser lesbar zu machen. Absolute Längen können zu Barrierefreiheitsproblemen führen, da sie fest sind und sich nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund sollten bevorzugt relative Längen (wie `em` oder `rem`) verwendet werden, wenn `font-size` festgelegt wird.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen stellt es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt) dar. Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>` Datentyps als reale, Fließkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt am berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [easing function](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert eingeben können (z. B. `300px`, `50%`, `30vw` ), um die Breite einer Ergebnisleiste festzulegen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd>-oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht es Ihnen, die Auswirkungen verschiedener Längeneinheiten zu vergleichen.

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
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
