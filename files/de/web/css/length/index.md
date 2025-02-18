---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen derselben Eigenschaften verwendbar sind, die `<length>` Werte akzeptieren, sind sie nicht selbst `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und dem Einheitliteral. Die Spezifizierung der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) einer Länge (_spezifizierte Länge_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, auf eine absolute Länge aufgelöst, und seine Einheit wird nicht unterschieden.

Die `<length>` Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung in Bezug auf eine andere Distanz. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement spezifiziert sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Viewport-Größen.

### Relative Längeneinheiten basierend auf der Schriftart

Schriftartlängen definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftart-Attributs in der Schriftart, die derzeit in einem Element oder dessen Elternelement wirksam ist.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und die wurzelrelative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die „cap height“ (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, präziser gesagt, das {{Glossary("advance_measure", "Fortschrittsmaß")}} des `0`-Glyphs (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements. In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphs zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x` Buchstaben ist dies im Allgemeinen die Höhe von Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Fortschrittsmaß")}} des „水“-Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schrift gefunden wird, die es darstellt.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, konvertiert in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Relative Längeneinheiten der Wurzelschrift definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der „cap height“ (nominalen Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Fortschrittsmaß")}} des `0`-Glyphs (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wird es innerhalb des Wurzelelements in der {{Cssxref("font-size")}} verwendet, repräsentiert es dessen Anfangswert. Ein standardmäßiger Browserwert ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die Viewport-Prozentsatz-Längeneinheiten basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und standard. Das Zulassen der verschiedenen Viewport-Größen ist eine Antwort auf Browser-Oberflächen, die sich dynamisch erweitern und zurückziehen und sich darunter liegenden Inhalt verbergen und anzeigen.

- **Klein**

  - : Wenn Sie die kleinstmögliche Viewport-Größe als Reaktion auf sich dynamisch erweiternde Browser-Oberflächen wünschen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt den gesamten Viewport ausfüllt, wenn die Browser-Oberflächen erweitert werden. Diese Größe zu wählen, kann möglicherweise auch leere Bereiche zurücklassen, wenn die Browser-Oberflächen zurückgezogen werden.

    Wenn beispielsweise ein Element mit Viewport-Prozentsatz-Einheiten basierend auf der kleinen Viewport-Größe dimensioniert wird, füllt das Element den Bildschirm perfekt aus, ohne dass sein Inhalt verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen jedoch verborgen werden, könnte zusätzlicher Platz um das Element sichtbar werden. Daher sind die kleinen Viewport-Prozentsatz-Einheiten im Allgemeinen „sicherer“ zu verwenden, ergeben jedoch möglicherweise nicht das ansprechendste Layout, nachdem ein Benutzer mit der Seite zu interagieren beginnt.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und ergibt die `sv*` Viewport-Prozentsatz-Längeneinheiten. Die Größen der kleinen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Groß**

  - : Wenn Sie die größtmögliche Viewport-Größe als Reaktion auf sich dynamisch zurückziehende Browser-Oberflächen wünschen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt den gesamten Viewport ausfüllt, wenn die Browser-Oberflächen sich zurückziehen. Sie müssen sich dessen bewusst sein, dass der Inhalt verdeckt werden kann, wenn die Browser-Oberflächen sich erweitern.

    Zum Beispiel, bei Mobiltelefonen, wo der verfügbare Bildschirmplatz äußerst wertvoll ist, blenden Browser häufig einen Teil oder die gesamte Titel- und Adressleiste aus, nachdem ein Benutzer beginnt, die Seite nach unten zu scrollen. Wenn ein Element mit einer Viewport-Prozentsatz-Einheit basierend auf der großen Viewport-Größe dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite aus, wenn diese Browser-Oberflächen verborgen sind. Wenn diese zurückziehbaren Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Viewport-Prozentsatz-Einheiten dimensioniert oder positioniert wird.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und ergibt die `lv*` Viewport-Prozentsatz-Einheiten. Die Größen der großen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Dynamisch**

  - : Wenn Sie möchten, dass der Viewport automatisch in Antwort auf sich dynamisch erweiternde oder zurückziehende Browser-Oberflächen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es, dass der von Ihnen entworfene Inhalt genau in den Viewport passt, unabhängig von den dynamischen Browser-Oberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und ergibt die `dv*` Viewport-Prozentsatz-Einheiten. Die Größen der dynamischen Viewport-Prozentsatz-Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozentsatz-Einheiten, die auf der dynamischen Viewport-Größe basieren, dazu führen, dass sich der Inhalt ändert, während ein Benutzer eine Seite scrollt. Dies kann zu einer Beeinträchtigung der Benutzeroberfläche und zu einem Leistungsabfall führen.

- **Standard**

  - : Die standardmäßige Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozentsatz-Einheit könnte äquivalent zur Viewport-Prozentsatz-Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischenform zwischen den beiden oder der dynamischen Viewport-Größe sein.

    > [!NOTE]
    > Ein Browser könnte beispielsweise die standardmäßige Viewport-Prozentsatz-Einheit für die Höhe (`vh`) implementieren, die dem großen Viewport-Prozentsatz-Höheneinheit (`lvh`) entspricht. Dadurch könnte Inhalt auf einer Vollbildanzeige verdeckt werden, während die Browser-Oberfläche erweitert ist.

Viewport-Prozentsatzlängen definieren `<length>` Werte in Prozent relativ zur Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), die wiederum auf entweder der Größe des {{Glossary("viewport", "Viewports")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen beinhaltenden Blocks geändert wird, werden die Elemente, die auf ihnen basieren, entsprechend skaliert. Es gibt eine Viewport-Prozentsatzlängeneinheitsvariante, die jedem der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` ist 1% der Höhe des Viewports. Zum Beispiel, wenn die Höhe des Viewports `300px` beträgt, dann entspricht ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen Viewport-Prozentsatz-Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` ist 1% der Breite des Viewports. Zum Beispiel, wenn die Breite des Viewports `800px` beträgt, dann entspricht ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svw`, `lvw` und `dvw`. `vw` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

- `vmax`

  - : Repräsentiert in Prozent den größten von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmax`, `lvmax` und `dvmax`. `vmax` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmin`, `lvmin` und `dvmin`. `vmin` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svb`, `lvb`, und `dvb`. `vb` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [beinhaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svi`, `lvi` und `dvi`. `vi` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der standardmäßigen Viewport-Größe des Browsers.

### Container-Abfrage-Längeneinheiten

Beim Anwenden von Styles auf einen Container mithilfe von Container-Abfragen, können Sie Container-Abfrage-Längeneinheiten verwenden. Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfrage-Containers an. Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind in verschiedenen Containern flexibler einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen. Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` ist 1% der Breite des Abfrage-Containers. Beispielsweise, wenn die Breite des Abfrage-Containers `800px` beträgt, entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` ist 1% der Höhe des Abfrage-Containers. Beispielsweise, wenn die Höhe des Abfrage-Containers `300px` beträgt, entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` ist 1% der Inline-Größe des Abfrage-Containers. Beispielsweise, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt, entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfrage-Containers. `1cqb` ist 1% der Block-Größe des Abfrage-Containers. Beispielsweise, wenn die Block-Größe des Abfrage-Containers `300px` beträgt, entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes der Inline-Größe oder Block-Größe des Abfrage-Containers. `1cqmin` ist 1% des kleineren Wertes der Inline-Größe oder Block-Größe des Abfrage-Containers. Beispielsweise, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt und ihre Block-Größe `300px`, entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes der Inline-Größe oder Block-Größe des Abfrage-Containers. `1cqmax` ist 1% des größeren Wertes der Inline-Größe oder Block-Größe des Abfrage-Containers. Beispielsweise, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt und seine Block-Größe `300px`, entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

Absolute Längeneinheiten repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. für den Drucklayout. Dies erfolgt durch das Verankern einer der Einheiten an einer physikalischen Einheit und dann das Definieren der anderen relativ dazu. Diese Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie Drucker.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. So wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten die in Zoll (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschriebenen Dimensionen nicht unbedingt mit der Größe der physischen Einheit mit demselben Namen übereinstimmen.

Für Geräte mit hoher DPI sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) gleich ihren physischen Gegenstücken. Daher wird die `px` Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer vergrößern die standardmäßige Schriftgröße ihres {{Glossary("user_agent", "User-Agents")}}, um den Text besser lesbar zu machen. Absolute Längen können zu Zugänglichkeitsproblemen führen, da sie fest sind und nicht an die Benutzereinstellungen angepasst werden. Aus diesem Grund sollten relative Längen (wie `em` oder `rem`) bevorzugt verwendet werden, wenn `font-size` gesetzt wird.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen stellt es traditionell ein Gerät-Pixel (Punkt) dar. Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel mehrere Geräte-Pixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>` Datentyps als echte, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet ein Eingabefeld, in das Sie einen `<length>` Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite eines Ergebnisbalken festzulegen, der darunter angezeigt wird, sobald Sie die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste gedrückt haben.

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
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box Model](/de/docs/Web/CSS/CSS_box_model)
