---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: e96eb7bd42c247fa0d9af660c660944e05a585da
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Auch wenn {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften verwendbar sind, die `<length>` Werte akzeptieren, sind sie selbst keine `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) einer Länge (_angegebene Länge_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) einer Länge (_berechnete Länge_) ist die angegebene Länge, gelöst zu einer absoluten Länge, und seine Einheit wird nicht unterschieden.

Die `<length>` Einheiten können relativ oder absolut sein. Relative Längen stellen ein Maß in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines spezifischen Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabepunkte in eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftartlängen definieren den `<length>` Wert im Hinblick auf die Größe eines bestimmten Zeichens oder Schriftmerkmals in der aktuell in einem Element oder seinem Elternelement wirksamen Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelrelativ `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite aufrechterhalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Kapitalhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorausmaß")}} des Glyphs `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen das Maß des `0` Glyphs unmöglich oder unpraktikabel zu bestimmen ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es in der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x`-Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Vorausmaß")}} des "水" Glyphs (CJK Wasser-Ideogramm, U+6C34), das in der Schrift gefunden wird, mit der es gerendert wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Schriftartrelativ zum Wurzelelement definierte Längeneinheiten definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftmerkmals des [root](/de/docs/Web/CSS/:root) Elements:

- `rcap`
  - : Entspricht der "Kapitalhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorausmaß")}} des Glyphs `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements {{Cssxref("font-size")}} verwendet wird, repräsentiert es dessen ursprünglichen Wert. Ein üblicher Browser-Standardwert ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **Ansichtsfenster-Prozentlängeneinheiten** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und Standard. Die Berücksichtigung der verschiedenen Ansichtsfenstergrößen erfolgt als Reaktion auf dynamisches Hinzufügen und Entfernen von Browseroberflächen sowie das Offenlegen und Verbergen des darunter befindlichen Inhalts.

- **Kleine Ansichtsfenster-Einheiten**

  - : Wenn Sie die kleinstmögliche Ansichtsfenstergröße wünschen, um auf dynamisch expandierende Browser-Interfaces zu reagieren, sollten Sie die Größe des kleinen Ansichtsfensters verwenden. Die kleine Ansichtsfenstergröße ermöglicht, dass der von Ihnen entworfene Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Interfaces erweitert sind. Die Wahl dieser Größe könnte auch leere Räume hinterlassen, wenn die Browser-Interfaces zurückgezogen werden.

    Beispielsweise füllt ein Element, das mit viewport-bezogenen Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert ist, den Bildschirm perfekt aus, ohne dass einer seiner Inhalte verdeckt wird, wenn alle dynamischen Browser-Interfaces angezeigt werden. Wenn diese Browser-Interfaces jedoch ausgeblendet werden, kann um das Element herum zusätzlicher Platz sichtbar werden. Daher sind die kleinen Ansichtsfenster-Prozentlängeneinheiten im Allgemeinen „sicherer“ zu verwenden, ergeben aber möglicherweise nicht das attraktivste Layout, nachdem ein Benutzer begonnen hat, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das `sv` Präfix dargestellt und resultiert in den `sv*` Ansichtsfenster-Prozentlängeneinheiten. Die Größen der kleinen Ansichtsfenster-Prozentlängeneinheiten sind festgelegt und daher stabil, es sei denn, das Ansichtsfenster selbst wird manuell geändert.

- **Große Ansichtsfenster-Einheiten**

  - : Wenn Sie die größtmögliche Ansichtsfenstergröße wünschen, um auf dynamisches Zurückziehen von Browser-Interfaces zu reagieren, sollten Sie die Größe des großen Ansichtsfensters verwenden. Die große Ansichtsfenstergröße ermöglicht, dass der von Ihnen entworfene Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Interfaces zurückgezogen werden. Sie müssen beachten, dass der Inhalt verdeckt werden kann, wenn die Browser-Interfaces expandieren.

    Zum Beispiel verbergen Browser auf Mobiltelefonen, wo der Bildschirmplatz begrenzt ist, oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer angefangen hat, die Seite zu scrollen. Wenn ein Element mit einer viewport-bezogenen Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browser-Interfaces ausgeblendet werden. Wenn diese zurückziehbaren Browser-Interfaces jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Ansichtsfenster-Prozentlängeneinheiten dimensioniert oder positioniert ist.

    Die große Ansichtsfenster-Einheit wird durch das `lv` Präfix dargestellt und resultiert in den `lv*` Ansichtsfenster-Prozentlängeneinheiten. Die Größen der großen Ansichtsfenster-Prozentlängeneinheiten sind festgelegt und daher stabil, es sei denn, das Ansichtsfenster selbst wird manuell geändert.

- **Dynamische Ansichtsfenster-Einheiten**

  - : Wenn Sie wünschen, dass das Ansichtsfenster automatisch dimensioniert wird, um auf dynamisches Erweitern oder Zurückziehen von Browser-Interfaces zu reagieren, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht, dass der von Ihnen entworfene Inhalt genau innerhalb des Ansichtsfensters passt, unabhängig von der Anwesenheit dynamischer Browser-Interfaces.

    Die dynamische Ansichtsfenster-Einheit wird durch das `dv` Präfix dargestellt und resultiert in den `dv*` Ansichtsfenster-Prozentlängeneinheiten. Die Größen der dynamischen Ansichtsfenster-Prozentlängeneinheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Ansichtsfenster-Prozentlängeneinheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass der Inhalt sich ändert, während ein Benutzer eine Seite scrollt. Dies kann zu einer Verschlechterung der Benutzeroberfläche und einen Leistungseinbruch führen.

- **Standard-Ansichtsfenster-Einheiten**

  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden Ansichtsfenster-Prozentlängeneinheit könnte der Ansichtsfenster-Prozentlängeneinheit basierend auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischengröße zwischen diesen beiden oder der dynamischen Ansichtsfenstergröße entsprechen.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Ansichtsfenster-Prozentlängeneinheit für die Höhe (`vh`) implementieren, die der großen Ansichtsfenster-Prozentlängeneinheit für die Höhe (`lvh`) entspricht. Falls ja, könnte dies Inhalte in einer Ganzseitenansicht verdecken, während die Browseroberfläche erweitert ist. Derzeit sind alle Standard-Ansichtsfenstereinheiten (`vh`, `vw`, etc.) ihren großen Ansichtsfenstergegenstücken (`lvh`, `lvw`, etc.) gleichwertig.

Ansichtsfenster-Prozentlängen definieren `<length>` Werte in Prozent relativ zu der Größe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block), die wiederum entweder auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Containing Block geändert wird, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine Variante der Ansichtfenster-Prozentlängeneinheit, die jeder der Ansichtsfenstergrößen entspricht, wie unten beschrieben.

> [!NOTE]
> Ansichtsfensterlängen sind ungültig in {{cssxref("@page")}} Deklarationsblöcken.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Zum Beispiel: Wenn die Ansichtsfensterhöhe `300px` beträgt, dann beträgt ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen Ansichtsfenster-Prozentlängeneinheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` ist gleichwertig mit `lvh`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Zum Beispiel: Wenn die Ansichtsfensterbreite `800px` beträgt, dann beträgt ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozentlängeneinheiten `svw`, `lvw` und `dvw`.
    `vw` ist gleichwertig mit `lvw`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vmax`

  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozentlängeneinheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist gleichwertig mit `lvmax`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozentlängeneinheiten `svmin`, `lvmin`, und `dvmin`.
    `vmin` ist gleichwertig mit `lvmin`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozentlängeneinheiten `svb`, `lvb`, und `dvb`.
    `vb` ist gleichwertig mit `lvb`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen Ansichtsfenster-Prozentlängeneinheiten `svi`, `lvi`, und `dvi`.
    `vi` ist gleichwertig mit `lvi`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

### Container-Abfrage-Längeneinheiten

Beim Anwenden von Styles auf einen Container mithilfe von Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten spezifizieren eine Länge relativ zu den Dimensionen eines Abfrage-Containers.
Komponenten, die Einheiten von Längen relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.
Weitere Informationen finden Sie unter [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel: Wenn die Breite des Abfragecontainers `800px` beträgt, dann entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel: Wenn die Höhe des Abfragecontainers `300px` beträgt, dann entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` beträgt, entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel: Wenn die Blockgröße des Abfragecontainers `300px` beträgt, entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px` ist, entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px` ist, entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, z.B. für Drucklayouts. Dies erfolgt, indem eine der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkeleinheit** gebunden wird und dann die anderen relativen Einheiten definiert werden. Zu den physikalischen Einheiten gehören `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung wie Bildschirme im Vergleich zu Geräten mit hoher Auflösung wie Druckern.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` das physikalische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. So wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschriebenen Maße nicht unbedingt mit der gleichnamigen physikalischen Einheit übereinstimmen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) identisch mit ihren physischen Gegenstücken. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um Text besser lesbar zu machen. Absolute Längen können zu Barrierefreiheitsproblemen führen, da sie fest sind und nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund ist es vorzuziehen, relative Längen (wie `em` oder `rem`) beim Festlegen der `font-size` zu verwenden.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Beim Animieren werden Werte des `<length>` Datentyps als reale, Fließkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>` Wert eingeben können (z. B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisspalte festzulegen, die unten erscheint, sobald Sie die <kbd>Enter</kbd> oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht es Ihnen, die Effekte verschiedener Längeneinheiten zu vergleichen und gegenüberzustellen.

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

{{EmbedLiveSample('Vergleich verschiedener Längeneinheiten', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model)
