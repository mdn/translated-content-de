---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendbar sind, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_angegebene Länge_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die angegebene Länge, die zu einer absoluten Länge aufgelöst ist, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabemedium zu einem anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte wie für deren Eltern angegeben; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftgröße, Containergröße oder Viewportgröße.

### Relative Längeneinheiten basierend auf Schriftgröße

Schriftgrößen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftattributgröße in der gerade wirksamen Schriftart eines Elements oder dessen Eltern.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelrelative `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "cap height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Advance Measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen die Bestimmung des Maßes des `0`-Glyphs unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [X-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der {{Cssxref("font")}} des Elements. In Schriften, die den Buchstaben `x` enthalten, ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0,5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Advance Measure")}} des "水"-Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schrift gefunden wird, die es rendert.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, konvertiert in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Relativ zur Schrift des Wurzelelements definieren die relativen Längeneinheiten den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "cap height" (nominale Höhe der Großbuchstaben) des Wurzelelements {{Cssxref("font")}}.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Advance Measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet wird, repräsentiert es dessen Anfangswert. Ein üblicher Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Viewport

Die **viewport-Prozentlängeneinheiten** basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und Standard. Die Berücksichtigung der verschiedenen Viewport-Größen erfolgt als Reaktion auf Browseroberflächen, die sich dynamisch erweitern und zurückziehen und den darunter liegenden Inhalt ein- und ausblenden.

- **Kleine Viewport-Einheiten**

  - : Wenn Sie die kleinste mögliche Viewport-Größe in Reaktion auf dynamisch erweiternde Browseroberflächen wünschen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe erlaubt es dem von Ihnen entworfenen Inhalt, den gesamten Viewport zu füllen, wenn die Browseroberflächen erweitert werden. Die Wahl dieser Größe könnte möglicherweise auch leere Flächen lassen, wenn die Browseroberflächen zurückgezogen werden.

    Beispiel: Ein Element, das mit viewport-Prozentlängeneinheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, füllt den Bildschirm perfekt aus, ohne dass Inhalt verdeckt wird, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen verborgen werden, könnte jedoch zusätzlicher sichtbarer Platz um das Element verbleiben. Daher sind kleine Viewport-Prozent-Längeneinheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout ergeben, nachdem ein Benutzer anfängt, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und führt zu den `sv*` Viewport-Prozentlängeneinheiten. Die Größen der kleinen Viewport-Prozentlängeneinheiten sind fest und damit stabil, es sei denn, der Viewport selbst wird angepasst.

- **Große Viewport-Einheiten**

  - : Wenn Sie die größte mögliche Viewport-Größe in Reaktion auf dynamisch zurückziehende Browseroberflächen wünschen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe erlaubt es dem von Ihnen entworfenen Inhalt, den gesamten Viewport zu füllen, wenn die Browseroberflächen zurückziehen. Sie müssen sich jedoch bewusst sein, dass der Inhalt eventuell verborgen wird, wenn die Browseroberflächen erweitert werden.

    Beispiel: Auf Mobiltelefonen, wo der Bildschirm Platz knapp ist, verbergen Browser oft den Titel- und Adressrahmen teilweise oder vollständig, nachdem ein Benutzer anfängt, die Seite zu scrollen. Wenn ein Element mit einer viewport-Prozenteinheit basierend auf der großen Viewport-Größe dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browseroberflächen versteckt sind. Wenn diese zurückziehbaren Browseroberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Viewport-Prozenteinheiten dimensioniert oder positioniert ist.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*` Viewport-Prozenteinheiten. Die Größen der großen Viewport-Prozenteinheiten sind fest und damit stabil, es sei denn, der Viewport selbst wird angepasst.

- **Dynamische Viewport-Einheiten**

  - : Wenn Sie möchten, dass der Viewport automatisch in Reaktion auf dynamisch erweiternde oder zurückziehende Browseroberflächen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe erlaubt es dem von Ihnen entworfenen Inhalt, genau innerhalb des Viewports zu passen, unabhängig von der Anwesenheit dynamischer Browseroberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*` Viewport-Prozenteinheiten. Die Größen der dynamischen Viewport-Prozenteinheiten sind nicht stabil, auch wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozenteinheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass der Inhalt während des Scrollens einer Seite skaliert wird. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und eine Leistungsbelastung darstellen.

- **Standard-Viewport-Einheiten**

  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozenteinheit könnte dem der Viewport-Prozenteinheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischen-Größe zwischen beiden oder der dynamischen Viewport-Größe entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Viewport-Prozenteinheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozente-Höhen-Einheit (`lvh`) entspricht. In diesem Fall könnte dies Inhalte auf einem Vollbilddisplay verdecken, während die Browseroberfläche erweitert ist. Aktuell sind alle Standard-Viewport-Einheiten (`vh`, `vw`, etc.) ihren großen Viewport-Gegenstücken (`lvh`, `lvw`, etc.) äquivalent.

Viewport-Prozente-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Containing Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), die entweder auf der Größe des {{Glossary("viewport", "Viewports")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn sich die Höhe oder Breite des initialen Containing Blocks ändert, werden die Elemente, die darauf basieren, entsprechend skaliert. Es gibt eine Variante der Viewport-Prozente-Längeneinheit, die jeder der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` ist 1% der Viewport-Höhe. Beispiel: Wenn die Viewport-Höhe `300px` beträgt, entspricht ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen Viewport-Prozenteinheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` ist äquivalent zu `lvh`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` ist 1% der Viewport-Breite. Beispiel: Wenn die Viewport-Breite `800px` beträgt, entspricht ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svw`, `lvw` und `dvw`.
    `vw` ist äquivalent zu `lvw`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

- `vmax`

  - : Repräsentiert in Prozent den größeren Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist äquivalent zu `lvmax`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

- `vmin`

  - : Repräsentiert in Prozent den kleineren Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist äquivalent zu `lvmin`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svb`, `lvb` und `dvb`.
    `vb` ist äquivalent zu `lvb`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svi`, `lvi` und `dvi`.
    `vi` ist äquivalent zu `lvi`, was die Viewport-Prozente-Längeneinheit basierend auf der großen Viewport-Größe darstellt.

### Container-Abfrage-Längeneinheiten

Beim Anwenden von Styles auf einen Container mithilfe von Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Einheiten von Längen im Verhältnis zu ihrem Container verwenden, sind flexibler in verschiedenen Containern zu verwenden, ohne dass konkrete Längenwerte neu berechnet werden müssen.
Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Beispiel: Wenn die Breite des Abfragecontainers `800px` beträgt, entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Beispiel: Wenn die Höhe des Abfragecontainers `300px` beträgt, entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` beträgt, entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Beispiel: Wenn die Blockgröße des Abfragecontainers `300px` beträgt, entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Beispiel: Wenn die Inline-Größe des Abfragecontainers `800px` und die Blockgröße `300px` beträgt, entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. beim Drucklayout. Dies erfolgt, indem eine der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkel-Einheit** verankert wird, und dann die anderen relativ dazu definiert werden. Physikalische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Niedrigauflösungsgeräte, wie Bildschirme, im Vergleich zu Hochauflösungsgeräten, wie Druckern.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physikalische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Somit ist `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten, Abmessungen, die in Zoll (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschrieben sind, nicht unbedingt der Größe der physikalischen Einheit mit demselben Namen entsprechen.

Für Hochauflösungsgeräte sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) das Gleiche wie ihre physikalischen Gegenstücke. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "User-Agents")}}, um Text besser lesbar zu machen. Absolute Längen können zu Barrierefreiheitsproblemen führen, da sie fest sind und sich nicht nach den Benutzereinstellungen skalieren. Aus diesem Grund sollten relative Längen (wie `em` oder `rem`) bevorzugt werden, wenn `font-size` festgelegt wird.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen entspricht es traditionell einem {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Für _Drucker_ und _Hochauflösungsbildschirme_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Bei der Animation werden Werte des `<length>`-Datentyps als reale, gleitkommagenaue Zahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste zu setzen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht es Ihnen, die Effekte verschiedener Längeneinheiten zu vergleichen.

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
