---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendbar sind, die `<length>`-Werte akzeptieren, sind sie nicht selbst `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgelisteten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, andere wiederum nicht.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_angegebene Länge_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die angegebene Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung in Bezug auf eine andere Distanz. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können einfacher von einer Ausgabemedium zu einem anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, die für ihr Elternelement angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-Relative Längeneinheiten basieren auf Schriftart-, Container- oder Viewportgröße.

### Relative Längeneinheiten auf Basis von Schriftarten

Schriftlängen definieren den `<length>`-Wert anhand der Größe eines bestimmten Zeichens oder Schriftattributs in der momentan wirksamen Schriftart in einem Element oder seinem Elternelement.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und die wurzelverwandte `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap-Höhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder genau gesagt das {{Glossary("advance_measure", "Advance Measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements. In Fällen, in denen das Messen des `0`-Glyphen unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf die {{Cssxref("font-size")}}-Eigenschaft selbst angewendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriftarten mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Advance Measure")}} des "水"-Glyphen (CJK-Wasserideogramm, U+6C34), das in der zur Darstellung verwendeten Schriftart gefunden wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es angewendet wird, konvertiert zu einer absoluten Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Schriftartenrelativen Längeneinheiten des Wurzelelements definieren den `<length>`-Wert anhand der Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap-Höhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Advance Measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet wird, repräsentiert es seinen Anfangswert. Der Standardwert in Browsern ist häufig `16px`, aber benutzerdefinierte Einstellungen können diesen ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentualen Längeneinheiten** basieren auf vier verschiedenen Ansichten: klein, groß, dynamisch und Standard. Die Erlaubnis für unterschiedliche Viewport-Größen reagiert auf die dynamische Erweiterung und Rücknahme von Browseroberflächen und das Verbergen und Anzeigen des darunterliegenden Inhalts.

- **Kleine Viewport-Einheiten**
  - : Wenn die kleinste mögliche Ansicht als Reaktion auf die dynamische Erweiterung von Browseroberflächen erwünscht ist, sollte die kleine Viewport-Größe verwendet werden. Die kleine Viewport-Größe ermöglicht es, den Inhalt so zu gestalten, dass er den gesamten Viewport füllt, wenn die Browseroberflächen erweitert werden. Bei Auswahl dieser Größe kann es auch möglich sein, dass Leerflächen verbleiben, wenn die Browseroberflächen sich zusammenziehen.

    Zum Beispiel wird ein Element, das mit Viewport-Prozentualen Einheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, den Bildschirm perfekt ohne jeglichen Inhalt verdecken, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen jedoch ausgeblendet werden, kann zusätzlicher Platz um das Element sichtbar werden. Daher sind die kleinen Viewport-Prozentualen Einheiten im Allgemeinen "sicherer" zu verwenden, können jedoch nicht das attraktivste Layout erzeugen, nachdem ein Benutzer begonnen hat, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und führt zu den `sv*`-Viewport-Prozentualen Längeneinheiten. Die Größen der kleinen Viewport-Prozentualen Einheiten sind festgelegt und daher stabil, es sei denn, der Viewport selbst wird verändert.

- **Große Viewport-Einheiten**
  - : Wenn die größte mögliche Ansicht als Reaktion auf das dynamische Zurückziehen von Browseroberflächen gewünscht ist, sollte die große Viewport-Größe verwendet werden. Die große Viewport-Größe ermöglicht es, den Inhalt so zu gestalten, dass er den gesamten Viewport füllt, wenn sich die Browseroberflächen zurückziehen. Es muss jedoch beachtet werden, dass der Inhalt verdeckt werden kann, wenn die Browseroberflächen sich erweitern.

    Beispiel: Auf Mobiltelefonen, wo Bildschirmfläche von höchster Bedeutung ist, verbergen Browser häufig teilweise oder vollständig die Titel- und Adressleiste, nachdem ein Benutzer mit der Seite zu scrollen beginnt. Wenn ein Element mit einer Viewport-Prozentualen Einheit basierend auf der großen Viewport-Größe dimensioniert wird, wird der Inhalt des Elements die gesamte sichtbare Seite füllen, wenn diese Browseroberflächen verborgen sind. Wenn diese Rückziehbaren Browseroberflächen gezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Viewport-Prozentualen Einheiten dimensioniert oder positioniert ist.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*`-Viewport-Prozentualen Einheiten. Die Größen der großen Viewport-Prozentualen Einheiten sind festgelegt und daher stabil, es sei denn, der Viewport selbst wird verändert.

- **Dynamische Viewport-Einheiten**
  - : Wenn der Viewport automatisch als Reaktion auf die dynamische Erweiterung oder den Rückzug von Browseroberflächen dimensioniert werden soll, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es, den Inhalt so zu gestalten, dass er genau innerhalb des Viewports passt, unabhängig von der Anwesenheit dynamischer Browseroberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*`-Viewport-Prozentualen Einheiten. Die Größen der dynamischen Viewport-Prozentualen Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozentualen Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass der Inhalt während des Scrollens einer Seite neu dimensioniert wird. Das kann die Benutzeroberfläche beeinträchtigen und zu einem Leistungsverlust führen.

- **Standard-Viewport-Einheiten**
  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozentualen Einheit könnte gleichwertig mit der Viewport-Prozentualen Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe sein.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Viewport-Prozentualen Einheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozentualen Höheneinheit (`lvh`) entspricht. In diesem Fall könnte dies den Inhalt auf einer Vollbildanzeige verdecken, während die Browseroberfläche erweitert wird. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw` usw.) ihren großen Viewport-Gegenstücken (`lvh`, `lvw` usw.) gleichwertig.

Die Viewport-Prozentualen Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der seinerseits auf der Größe des {{Glossary("viewport", "Viewports")}} oder des Seitenbereiches basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen enthältlichen Blocks geändert wird, werden die davon basierenden Elemente entsprechend skaliert. Es gibt eine Viewport-Prozentuale Längeneinheit, die jedem der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` entspricht 1% der Viewporthöhe. Zum Beispiel, wenn die Viewporthöhe `300px` ist, dann hat ein Wert von `70vh` für eine Eigenschaft `210px`.

    Die entsprechenden Viewport-Prozentualen Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` entspricht `lvh` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` entspricht 1% der Viewportbreite. Zum Beispiel, wenn die Viewportbreite `800px` ist, dann hat ein Wert von `50vw` für eine Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentualen Einheiten `svw`, `lvw` und `dvw`. `vw` entspricht `lvw` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

- `vmax`
  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentualen Einheiten `svmax`, `lvmax` und `dvmax`. `vmax` entspricht `lvmax` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

- `vmin`
  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentualen Einheiten `svmin`, `lvmin` und `dvmin`. `vmin` entspricht `lvmin` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentualen Einheiten `svb`, `lvb` und `dvb`. `vb` entspricht `lvb` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthältlichen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentualen Einheiten `svi`, `lvi` und `dvi`. `vi` entspricht `lvi` und repräsentiert die Viewport-Prozentuale Längeneinheit basierend auf der großen Viewport-Größe.

### Container Query Längeneinheiten

Beim Anwenden von Styles auf einen Container über Container-Abfragen können Sie Container-Query-Längeneinheiten verwenden. Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Container-Querys an. Komponenten, die Einheiten der Länge relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, fällt die Container-Query-Längeneinheit auf die [kleine Viewport-Einheit](#small_viewport_units) für diese Achse (`sv*`) zurück.

Weitere Informationen finden Sie unter [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` entspricht 1% der Breite des Abfrage-Containers. Zum Beispiel, wenn die Breite des Abfrage-Containers `800px` ist, dann hat ein Wert von `50cqw` für eine Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` entspricht 1% der Höhe des Abfrage-Containers. Zum Beispiel, wenn die Höhe des Abfrage-Containers `300px` ist, dann hat ein Wert von `10cqh` für eine Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` entspricht 1% der Inline-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` ist, dann hat ein Wert von `50cqi` für eine Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfrage-Containers. `1cqb` entspricht 1% der Blockgröße des Abfrage-Containers. Zum Beispiel, wenn die Blockgröße des Abfrage-Containers `300px` ist, dann hat ein Wert von `10cqb` für eine Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder der Blockgröße des Abfrage-Containers. `1cqmin` entspricht 1% des kleineren Werts entweder der Inline-Größe oder der Blockgröße des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt und seine Blockgröße `300px`, dann hat ein Wert von `50cqmin` für eine Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder der Blockgröße des Abfrage-Containers. `1cqmax` entspricht 1% des größeren Werts entweder der Inline-Größe oder der Blockgröße des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt und seine Blockgröße `300px`, dann hat ein Wert von `50cqmax` für eine Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. für den Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkeleinheit** verankert und die anderen relativ zu ihr definiert werden. Physikalische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt auf unterschiedliche Weise für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu solchen mit hoher Auflösung, wie Drucker.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` den physischen _Referenzpixel_; andere Einheiten sind relativ dazu definiert. Somit ist `1in` definiert als `96px`, was `72pt` entspricht. Die Folge dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschrieben werden, nicht unbedingt der Größe der physischen Einheit mit demselben Namen entsprechen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) dasselbe wie ihre physischen Gegenstücke. Daher ist die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer vergrößern die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um den Text lesbarer zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fixiert und nicht entsprechend Benutzereinstellungen skalierbar sind. Aus diesem Grund sollten, wenn `font-size` festgelegt wird, relative Längen (wie `em` oder `rem`) bevorzugt werden.

- `px`
  - : Ein Pixel. Für Bildschirmdisplay repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Jedoch impliziert auf _Druckern_ und _Bildschirmen mit hoher Auflösung_ ein CSS-Pixel mehrere Gerätepixel. `1px` = `1in / 96`.
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

Bei Animationen werden Werte des `<length>`-Datentyps als reale, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in dem Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite eines Ergebnisbalkens festzulegen, der unterhalb erscheint, nachdem Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste gedrückt haben.

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
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
