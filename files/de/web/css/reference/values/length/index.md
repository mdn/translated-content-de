---
title: "`<length>` CSS-Typ"
short-title: <length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: b25b4a98b757fbd05ce1fb74b1b78f3fcf917729
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie zum Beispiel {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Auch wenn {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

### Angegebene vs. berechnete Werte

Der [angegebene Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) einer Länge (_computed length_) ist die angegebene Länge, die in eine absolute Länge umgerechnet wird, und ihre Einheit wird nicht unterschieden.

Für einige Eigenschaften, wie `border-width`, `outline-width`, `column-rule-width` und `outline-offset`, werden die berechneten `<length>`-Werte auf eine ganzzahlige Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} gerundet, um eine angemessene visuelle Anzeige zu gewährleisten:

- Ein ungleich nuller Wert, der kleiner als ein Gerätepixel ist, wird aufgerundet.
- Ein Wert, der größer als ein Gerätepixel ist, wird abgerundet auf das nächstgelegene ganze Gerätepixel.

Zum Beispiel berechnet sich auf einem Bildschirm mit einem [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) von 3 `border-width: 1.5px` auf ungefähr `1.33px` (abgerundet von 4,5 auf 4 Gerätepixel), und `outline-width: 0.2px` auf ungefähr `0.33px` (aufgerundet von 0,6 auf 1 Gerätepixel).

### Relative vs. absolute Längen

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausführungsumgebung auf eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für das übergeordnete Element angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-Relative-Längeneinheiten basieren auf Schriftarten, Container- oder Viewport-Größen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftartenlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftelements in der Schriftart, die aktuell in einem Element oder dessen Elternteil gilt.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelbasierte `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Entspricht der "Kapitalhöhe" (nominale Höhe der Großbuchstaben) der Schriftart des Elements, das {{Cssxref("font")}} verwendet.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorrückenmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Elements, das {{Cssxref("font")}} verwendet.
    In Fällen, in denen das Bestimmen des Maßes des `0`-Glyphen unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es für die {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Entspricht der [x-Höhe](https://en.wikipedia.org/wiki/X-height) der Schriftart des Elements, das {{Cssxref("font")}} verwendet. In Schriftarten mit dem Buchstaben `x` ist dies in der Regel die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Repräsentiert das verwendete {{Glossary("advance_measure", "Vorrückenmaß")}} des Glyphen "水" (CJK-Wasser-Ideogramm, U+6C34) in der Schriftart, die verwendet wird, um es darzustellen.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Schrifteinheiten, die relativ zum Wurzelelement sind, definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftelements des [Wurzelelements](/de/docs/Web/CSS/Reference/Selectors/:root):

- `rcap`
  - : Entspricht der "Kapitalhöhe" (nominale Höhe der Großbuchstaben) der Schriftart des Wurzelelements, das {{Cssxref("font")}} verwendet.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorrückenmaß")}} des Glyphens `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Wurzelelements, das {{Cssxref("font")}} verwendet.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet, repräsentiert es dessen Anfangswert. Ein üblicher Standardwert im Browser ist `16px`, Benutzervoreinstellungen können diesen jedoch ändern.
- `rex`
  - : Entspricht der x-Höhe der Schriftart des Wurzelelements, das {{Cssxref("font")}} verwendet.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit bei der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit bei der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentsatz-Längeneinheiten** basieren auf vier unterschiedlichen Viewport-Größen: klein, groß, dynamisch und standard. Die Berücksichtigung der unterschiedlichen Viewport-Größen erfolgt als Reaktion auf dynamische Expansion und Rückzug von Browser-Oberflächen und die Einblendung und Ausblendung des darunterliegenden Inhaltes.

- **Kleine Viewport-Einheiten**
  - : Wenn Sie die kleinstmögliche Viewport-Größe in Reaktion auf dynamische Expansion von Browser-Oberflächen verwenden möchten, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht, dass der von Ihnen entworfene Inhalt den gesamten Viewport ausfüllt, wenn die Browser-Oberflächen erweitert sind. Wenn Sie diese Größe wählen, können auch leere Räume verbleiben, wenn die Browser-Oberflächen sich zurückziehen.

    Beispielsweise wird ein Element, das mit Viewport-Prozentsatz-Einheiten basierend auf der kleinen Viewport-Größe bemessen wird, beim Einblenden aller dynamischen Browser-Oberflächen den Bildschirm perfekt ausfüllen, ohne dass Inhalte verdeckt werden. Wenn diese Browser-Oberflächen jedoch ausgeblendet werden, kann zusätzlicher Raum um das Element sichtbar werden. Daher sind die kleinen Viewport-Prozentsatz-Einheiten im Allgemeinen "sicherer" zu verwenden, produzieren jedoch möglicherweise nicht das attraktivste Layout, nachdem der Benutzer begonnen hat, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` repräsentiert und resultiert in den `sv*` Viewport-Prozentsatz-Längeneinheiten. Die Größen der kleinen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird verändert.

- **Große Viewport-Einheiten**
  - : Wenn Sie die größtmögliche Viewport-Größe in Reaktion auf dynamischen Rückzug von Browser-Oberflächen verwenden möchten, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht, dass der von Ihnen entworfene Inhalt den gesamten Viewport ausfüllt, wenn die Browser-Oberflächen sich zurückziehen. Sie sollten sich bewusst sein, dass der Inhalt möglicherweise verdeckt wird, wenn die Browser-Oberflächen erweitert werden.

    Beispielsweise verstecken Browser auf Mobiltelefonen, bei denen der Bildschirmplatz besonders wertvoll ist, oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem der Benutzer begonnen hat, die Seite zu scrollen. Wenn ein Element mit einer Viewport-Prozentsatz-Einheit basierend auf der großen Viewport-Größe bemessen wird, füllt der Inhalt des Elements die gesamte sichtbare Seite aus, wenn diese Browser-Oberflächen ausgeblendet sind. Werden diese einziehbaren Browser-Oberflächen jedoch angezeigt, können sie den Inhalt verdecken, der mit den _großen_ Viewport-Prozentsatz-Einheiten bemessen oder positioniert wurde.

    Die große Viewport-Einheit wird durch das Präfix `lv` repräsentiert und resultiert in den `lv*` Viewport-Prozentsatz-Einheiten. Die Größen der großen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird verändert.

- **Dynamische Viewport-Einheiten**
  - : Wenn Sie möchten, dass der Viewport automatisch in Antwort auf dynamische Expansion oder Rückzug von Browser-Oberflächen bemessen wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht, dass der von Ihnen entworfene Inhalt genau in den Viewport passt, unabhängig von der Präsenz dynamischer Browser-Oberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` repräsentiert und resultiert in den `dv*` Viewport-Prozentsatz-Einheiten. Die Größen der dynamischen Viewport-Prozentsatz-Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Obwohl die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozentsatz-Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass sich der Inhalt während des Scrollens einer Seite durch den Benutzer verändert. Dies kann zu einer Beeinträchtigung der Benutzeroberfläche führen und einen Performance-Einbruch verursachen.

- **Standard-Viewport-Einheiten**
  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozentsatz-Einheit könnte gleichbedeutend mit der Viewport-Prozentsatz-Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe sein.

    > [!NOTE]
    > Beispielsweise kann ein Browser die Standard-Viewport-Prozentsatz-Einheit für Höhe (`vh`) implementieren, welche äquivalent zur großen Viewport-Prozentsatz-Höheneinheit (`lvh`) ist. Wenn dies der Fall ist, könnte dies den Inhalt auf einer Vollbildanzeige verdecken, während die Browser-Oberfläche erweitert ist. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw` usw.) äquivalent zu ihren großen Viewport-Gegenstücken (`lvh`, `lvw` usw.).

Viewport-Prozentsatz-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Viewports")}} oder der Seitenfläche basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn sich die Höhe oder Breite des initialen beinhaltenden Blocks ändert, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine Viewport-Prozentsatz-Längeneinheit für jede der Viewport-Größen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen beinhaltenden Blocks des Viewports. `1vh` entspricht 1% der Höhe des Viewports. Wenn beispielsweise die Höhe des Viewports `300px` beträgt, ist ein Wert von `70vh` für eine Eigenschaft `210px`.

    Die jeweiligen Viewport-Prozentsatz-Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` ist gleichbedeutend mit `lvh` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen beinhaltenden Blocks des Viewports. `1vw` entspricht 1% der Breite des Viewports. Wenn beispielsweise die Breite des Viewports `800px` beträgt, ist ein Wert von `50vw` für eine Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svw`, `lvw` und `dvw`. `vw` ist gleichbedeutend mit `lvw` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

- `vmax`
  - : Repräsentiert in Prozent den größeren Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmax`, `lvmax` und `dvmax`. `vmax` ist gleichbedeutend mit `lvmax` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

- `vmin`
  - : Repräsentiert in Prozent den kleineren Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmin`, `lvmin` und `dvmin`. `vmin` ist gleichbedeutend mit `lvmin` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) in der Richtung der [Block-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svb`, `lvb` und `dvb`. `vb` ist gleichbedeutend mit `lvb` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) in der Richtung der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svi`, `lvi` und `dvi`. `vi` ist gleichbedeutend mit `lvi` und repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewport-Größe.

### Längeneinheiten für Container-Abfragen

Beim Anwenden von Stilen auf einen Container mit Containerabfragen können Sie Längeneinheiten für Containerabfragen verwenden. Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an. Komponenten, die Einheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, fällt die Containerabfrage-Längeneinheit auf die [kleine Viewport-Einheit](#small_viewport_units) für diese Achse zurück (`sv*`).

Für weitere Informationen siehe [Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` entspricht 1 % der Breite des Abfragecontainers. Wenn beispielsweise die Breite des Abfragecontainers `800px` beträgt, ist ein Wert von `50cqw` für eine Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` entspricht 1 % der Höhe des Abfragecontainers. Wenn beispielsweise der Abfragecontainer eine Höhe von `300px` hat, ist ein Wert von `10cqh` für eine Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` entspricht 1 % der Inline-Größe des Abfragecontainers. Wenn beispielsweise der Abfragecontainer eine Inline-Größe von `800px` hat, ist ein Wert von `50cqi` für eine Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` entspricht 1 % der Blockgröße des Abfragecontainers. Wenn beispielsweise der Abfragecontainer eine Blockgröße von `300px` hat, ist ein Wert von `10cqb` für eine Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts der Inline- oder Blockgröße des Abfragecontainers. `1cqmin` entspricht 1 % des kleineren Werts der Inline- oder Blockgröße des Abfragecontainers. Wenn beispielsweise die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px` ist, ist ein Wert von `50cqmin` für eine Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts der Inline- oder Blockgröße des Abfragecontainers. `1cqmax` entspricht 1 % des größeren Werts der Inline- oder Blockgröße des Abfragecontainers. Wenn beispielsweise die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px` ist, ist ein Wert von `50cqmax` für eine Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z. B. für Drucklayouts. Dies geschieht, indem eine dieser Einheiten an eine **physische Einheit** oder die **visuelle Winkel-Einheit** gekoppelt wird und dann die anderen relativ zu ihr definiert werden. Physikalische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, verglichen mit Geräten mit hoher Auflösung, wie Drucker.

Bei Geräten mit niedriger Auflösung stellt die Einheit `px` das physikalische _Referenzpixel_ dar; andere Einheiten werden relativ dazu definiert. So wird `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass bei solchen Geräten Abmessungen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben werden, nicht unbedingt der Größe der physikalischen Einheit mit demselben Namen entsprechen.

Bei Geräten mit hoher Auflösung entsprechen Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) den physischen Entsprechungen. Daher wird die `px`-Einheit relativ dazu definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um Text besser lesbar zu machen. Absolute Längen können Barrierefreiheitsprobleme verursachen, da sie fest sind und sich nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund sollte für die Festlegung der `font-size` relative Längen (wie `em` oder `rem`) bevorzugt werden.

- `px`
  - : Ein Pixel. Bei Bildschirmdarstellungen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Bei _Druckern_ und _Bildschirmen mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm` = `96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm` = `1cm / 10`.
- `Q`
  - : Ein Viertel Millimeter. `1Q` = `1cm / 40`.
- `in`
  - : Ein Zoll. `1in` = `2.54cm` = `96px`.
- `pc`
  - : Eine Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Bei Animationen werden die Werte des `<length>`-Datentyps als reelle Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt beim berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Vergleich unterschiedlicher Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in welches Sie einen `<length>`-Wert (z. B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste einzustellen, die darunter erscheint, sobald Sie die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> gedrückt haben.

Dies ermöglicht Ihnen den Vergleich und die Gegenüberstellung der Effekte verschiedener Längeneinheiten.

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

- [Learn: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Werte & Einheit](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Boxmodell](/de/docs/Web/CSS/Guides/Box_model)
