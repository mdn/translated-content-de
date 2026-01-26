---
title: \<length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: 81e6735431b50ded681b760b702e68b80000b58c
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften wie `<length>`-Werte verwendbar sind, sind sie keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgelisteten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und der Einheit. Das Angeben der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) einer Länge (_computed length_) ist die angegebene Länge, aufgelöst zu einer absoluten Länge, und seine Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können einfacher von einer Ausgabenumgebung auf eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Viewportgrößen.

### Relative Längeneinheiten basierend auf Schriftart

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schrifteigenschaft in der aktuell in einem Element oder seinem Elternelement geltenden Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelskalierende `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Entspricht der "Kapphöhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorwärtsmaß")}} des Zeichens `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphen zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn sie auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert sie die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Entspricht der [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Repräsentiert das verwendete {{Glossary("advance_measure", "Vorwärtsmaß")}} des „水“-Glyphen (CJK-Wasserideogramm, U+6C34), das in der Schriftart gefunden wird, die es rendert.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem sie verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schriftart des Root-Elements

Schriftartenverwandte relative Längeneinheiten des Root-Elements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schrifteigenschaft des [Root](/de/docs/Web/CSS/Reference/Selectors/:root)-Elements:

- `rcap`
  - : Entspricht der "Kapphöhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Root-Elements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorwärtsmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Root-Elements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Root-Elements (typischerweise {{HTMLElement("html")}}). Wenn sie innerhalb der {{Cssxref("font-size")}} des Root-Elements verwendet wird, repräsentiert sie ihren Anfangswert. Ein gängiger Browser-Standardwert ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Entspricht der x-Höhe der {{Cssxref("font")}} des Root-Elements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit in der Schriftart des Root-Elements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit in der Schriftart des Root-Elements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Viewport

Die **View-Port-Prozentsatz-Längeneinheiten** basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und Standard. Die Zulassung der verschiedenen Viewport-Größen ist eine Reaktion auf Browser-Schnittstellen, die sich dynamisch erweitern und zusammenziehen sowie Inhalte darunter verbergen und anzeigen.

- **Kleine Viewport-Einheiten**
  - : Wenn Sie die kleinste mögliche Viewport-Größe in Reaktion auf dynamisch expandierende Browserschnittstellen wollen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt den gesamten Viewport füllt, wenn die Browserschnittstellen erweitert werden. Diese Größe kann jedoch auch leeren Raum hinterlassen, wenn die Browserschnittstellen zurückgezogen werden.

    Zum Beispiel wird ein Element, das mit Viewport-Prozent-Einheiten basierend auf der kleinen Viewport-Größe dimensioniert wird, den Bildschirm perfekt füllen, ohne dass Inhalte verdeckt werden, wenn alle dynamischen Browserschnittstellen angezeigt werden. Wenn diese Browserschnittstellen jedoch verborgen werden, kann um das Element zusätzlich Platz sichtbar werden. Die kleinen Viewport-Prozent-Einheiten sind im Allgemeinen "sicherer" zu verwenden, könnten aber nicht das attraktivste Layout nach einer Benutzer-Interaktion mit der Seite erzeugen.

    Die kleine Viewport-Größe wird durch das `sv`-Präfix repräsentiert und resultiert in den `sv*`-Viewport-Prozent-Längeneinheiten. Die Größen der kleinen Viewport-Prozent-Einheiten sind fixiert und daher stabil, es sei denn, der Viewport wird selbst geändert.

- **Große Viewport-Einheiten**
  - : Wenn Sie die größte mögliche Viewport-Größe in Reaktion auf dynamisch zurückziehende Browserschnittstellen wollen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt den gesamten Viewport füllt, wenn die Browserschnittstellen zurückgezogen werden. Beachten Sie, dass Inhalte verborgen werden können, wenn die Browserschnittstellen expandieren.

    Zum Beispiel verstecken Browser auf Mobiltelefonen, bei denen der Platz auf dem Bildschirm sehr begrenzt ist, oft Teile oder die gesamte Titel- und Adressleiste, nachdem der Benutzer die Seite zu scrollen beginnt. Wenn ein Element mit einer Viewport-Prozent-Einheit basierend auf der großen Viewport-Größe dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browerschnittstellen verborgen sind. Wenn diese rückziehbaren Browserschnittstellen jedoch angezeigt werden, können sie den Inhalt verbergen, der mit den _großen_ Viewport-Prozent-Einheiten dimensioniert oder positioniert ist.

    Die große Viewport-Einheit wird durch das `lv`-Präfix repräsentiert und resultiert in den `lv*`-Viewport-Prozent-Einheiten. Die Größen der großen Viewport-Prozent-Einheiten sind fixiert und daher stabil, es sei denn, der Viewport wird selbst geändert.

- **Dynamische Viewport-Einheiten**
  - : Wenn Sie wollen, dass der Viewport automatisch in Reaktion auf dynamisch expandierende oder zurückziehende Browserschnittstellen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt genau in den Viewport passt, unabhängig von der Anwesenheit dynamischer Browserschnittstellen.

    Die dynamische Viewport-Einheit wird durch das `dv`-Präfix repräsentiert und resultiert in den `dv*`-Viewport-Prozent-Einheiten. Die Größen der dynamischen Viewport-Prozent-Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozent-Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass der Inhalt während des Scrollens auf einer Seite umdimensionalisiert wird. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard-Viewport-Einheiten**
  - : Die Standard-Viewport-Größe wird durch den Browser definiert. Das Verhalten der resultierenden Viewport-Prozent-Einheit könnte der Viewport-Prozent-Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Viewport-Prozent-Einheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozent-Höheneinheit (`lvh`) entspricht. In diesem Fall könnte dies Inhalte auf einem vollständigen Seiten-Display verdecken, während die Browserschnittstelle erweitert ist. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw`, etc.) ihren großen Viewport-Pendants (`lvh`, `lvw`, etc.) gleichwertig.

Viewport-Prozent-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block), welcher wiederum auf entweder der Größe des {{Glossary("viewport", "Viewports")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Umfassungsblocks geändert wird, werden die auf ihnen basierenden Elemente entsprechend skaliert. Es gibt eine Viewport-Prozent-Längeneinheit-Variante entsprechend jeder der Viewport-Größen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Umfassungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Viewports. `1vh` ist 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` beträgt, dann ist ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die entsprechenden Viewport-Prozent-Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` ist gleichwertig zu `lvh`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen [Umfassungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Viewports. `1vw` ist 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` beträgt, dann ist ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozent-Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist gleichwertig zu `lvw`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

- `vmax`
  - : Repräsentiert in Prozent die größere von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozent-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist gleichwertig zu `lvmax`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

- `vmin`
  - : Repräsentiert in Prozent die kleinere von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozent-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist gleichwertig zu `lvmin`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block), in der Richtung der [Blockachse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozent-Einheiten `svb`, `lvb` und `dvb`, jeweils.
    `vb` ist gleichwertig zu `lvb`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/Guides/Display/Containing_block), in der Richtung der [horizontalen Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozent-Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist gleichwertig zu `lvi`, repräsentiert die Viewport-Prozent-Längeneinheit basierend auf der großen Viewport-Größe.

### Container-Abfrage-Längeneinheiten

Wenn Sie Styles auf einen Container mithilfe von Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfrage-Containers an.
Komponenten, die Einheiten der Länge relativ zu ihrem Container verwenden, sind flexibler einsetzbar in verschiedenen Containern, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfrage-Längeneinheit auf die [kleine Viewport-Einheit](#small_viewport_units) für diese Achse (`sv*`) zurückgesetzt.

Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` ist 1% der Breite des Abfrage-Containers. Zum Beispiel, wenn die Breite des Abfrage-Containers `800px` beträgt, dann ist ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` ist 1% der Höhe des Abfrage-Containers. Zum Beispiel, wenn die Höhe des Abfrage-Containers `300px` beträgt, dann ist ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` ist 1% der Inline-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt, dann ist ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfrage-Containers. `1cqb` ist 1% der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Block-Größe des Abfrage-Containers `300px` beträgt, dann ist ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt und seine Block-Größe `300px`, dann ist ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` und seine Block-Größe `300px` beträgt, dann ist ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. für den Drucklayout. Dies wird durchgeführt, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkelgröße** verankert wird und dann die anderen relativ dazu definiert werden. Physische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung wird unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, versus Geräte mit hoher Auflösung, wie Drucker, durchgeführt.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Deshalb wird `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass auf solchen Geräten die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschriebenen Dimensionen nicht unbedingt mit der Größe der physischen Einheit mit dem gleichen Namen übereinstimmen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) die gleichen wie ihre physischen Gegenstücke. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Nutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um Text besser lesbar zu machen. Absolute Längen können zu Barrierefreiheitsproblemen führen, da sie fest sind und nicht an Benutzereinstellungen angepasst werden. Aus diesem Grund sollten Sie relative Längen (wie `em` oder `rem`) bevorzugen, wenn Sie `font-size` setzen.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Hingegen implizieren für _Drucker_ und _Bildschirme mit hoher Auflösung_ ein CSS-Pixel mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>`-Datentyps als reale, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) beausdruckt, die mit der Animation assoziiert ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnissleiste festzulegen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste gedrückt haben.

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
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Boxmodell](/de/docs/Web/CSS/Guides/Box_model)
