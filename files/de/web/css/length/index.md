---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie zum Beispiel {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können wie `<length>`-Werte, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitensymbol. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_specified length_) wird durch ihre Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_computed length_) ist die angegebene Länge, die auf eine absolute Länge aufgelöst wird, wobei die Einheit nicht unterschieden wird.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Entfernung dar. Abhängig von der Einheit kann diese Entfernung die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabemenge auf eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-relative Längeneinheiten basieren auf Schriftgröße, Containergröße oder Viewportgröße.

### Relative Längeneinheiten basierend auf Schriftgröße

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der aktuell in einem Element oder dessen Elternteil geltenden Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelrelative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap Height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "advance measure")}} des Glyphens `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen es unmöglich oder unpraktikabel ist, das Maß des Glyphens `0` zu bestimmen, muss davon ausgegangen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es für die {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/x-H%C3%B6he) der {{Cssxref("font")}} des Elements. Bei Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des Schriftzeichens "水" (CJK-Wasserideograph, U+6C34), das in der Schriftart verwendet wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, konvertiert in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen, die auf der theoretischen Größe einer idealen leeren Zeile basieren. Die tatsächliche Größe der Zeilenrahmen kann jedoch je nach ihrem Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schriftgröße des Wurzelelements

Die auf der Schriftgröße des Wurzelelements basierenden relativen Längeneinheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap Height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphens `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements {{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Ein üblicher Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen, die auf der theoretischen Größe einer idealen leeren Zeile basieren. Die tatsächliche Größe der Zeilenrahmen kann jedoch je nach ihrem Inhalt variieren.

### Relative Längeneinheiten basierend auf der Viewportgröße

Die **viewport-abhängigen Längeneinheiten** basieren auf vier verschiedenen Viewportgrößen: klein, groß, dynamisch und Standard. Die Berücksichtigung der verschiedenen Viewportgrößen erfolgt als Antwort darauf, dass Browser-Oberflächen sich dynamisch erweitern und zurückziehen und Inhalte darunter ausblenden und anzeigen.

- **Kleine Viewport-Einheiten**
  - : Wenn Sie die kleinste mögliche Viewportgröße in Reaktion auf die dynamische Erweiterung von Browser-Oberflächen verwenden möchten, sollten Sie die kleine Viewportgröße verwenden. Die kleine Viewportgröße erlaubt es dem von Ihnen gestalteten Inhalt, den gesamten Viewport auszufüllen, wenn die Browser-Oberflächen erweitert werden. Diese Größe könnte auch, wenn die Browser-Oberflächen wieder eingefahren werden, zu leeren Räumen führen.

    Zum Beispiel wird ein Element, das mit Hilfe von viewport-abhängigen Einheiten basierend auf der kleinen Viewportgröße dimensioniert ist, den Bildschirm perfekt ausfüllen, ohne dass sein Inhalt verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen ausgeblendet werden, könnte jedoch zusätzlicher Leerraum um das Element sichtbar sein. Daher sind die kleinen Viewport-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nach der Interaktion eines Benutzers mit der Seite nicht das attraktivste Layout bieten.

    Die kleine Viewportgröße wird durch das Präfix `sv` dargestellt und führt zu den `sv*`-viewport-abhängigen Längeneinheiten. Die Größen der kleinen viewport-abhängigen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird geändert.

- **Große Viewport-Einheiten**
  - : Wenn Sie die größte mögliche Viewportgröße in Reaktion auf das dynamische Einfahren von Browser-Oberflächen verwenden möchten, sollten Sie die große Viewportgröße verwenden. Die große Viewportgröße erlaubt es dem von Ihnen gestalteten Inhalt, den gesamten Viewport auszufüllen, wenn die Browser-Oberflächen eingefahren werden. Sie müssen beachten, dass der Inhalt eventuell verdeckt wird, wenn Browser-Oberflächen erweitert werden.

    Zum Beispiel verbergen Browser auf Mobiltelefonen, wo der Platz auf dem Bildschirm knapp ist, oft einen Teil oder die gesamte Titelleiste und Adressleiste, nachdem ein Benutzer begonnen hat, die Seite zu scrollen. Wenn ein Element mit einer viewport-abhängigen Einheit basierend auf der großen Viewportgröße dimensioniert ist, wird der Inhalt des Elements die gesamte sichtbare Seite ausfüllen, wenn diese Browser-Oberflächen ausgeblendet sind. Wenn diese einziehbaren Browser-Oberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ viewport-abhängigen Einheiten dimensioniert oder positioniert ist.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*`-viewport-abhängigen Einheiten. Die Größen der großen viewport-abhängigen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird geändert.

- **Dynamische Viewport-Einheiten**
  - : Wenn Sie möchten, dass der Viewport automatisch in Reaktion auf die dynamische Erweiterung oder Einfahrt von Browser-Oberflächen dimensioniert wird, können Sie die dynamische Viewportgröße verwenden. Die dynamische Viewportgröße erlaubt es dem von Ihnen gestalteten Inhalt, genau innerhalb des Viewports zu passen, unabhängig vom Vorhandensein dynamischer Browser-Oberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*`-viewport-abhängigen Einheiten. Die Größen der dynamischen viewport-abhängigen Einheiten sind nicht stabil, auch wenn der Viewport selbst unverändert ist.

    > [!NOTE]
    > Während die dynamische Viewportgröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von viewport-abhängigen Einheiten basierend auf der dynamischen Viewportgröße dazu führen, dass der Inhalt beim Scrollen einer Seite durch den Benutzer neu dimensioniert wird. Dies kann die Benutzeroberfläche verschlechtern und zu Leistungseinbußen führen.

- **Standard-Viewport-Einheiten**
  - : Die Standard-Viewportgröße wird vom Browser definiert. Das Verhalten der resultierenden viewport-abhängigen Einheit könnte der viewport-abhängigen Einheit entsprechen, die auf der kleinen Viewportgröße, der großen Viewportgröße, einer Zwischengröße zwischen den beiden oder der dynamischen Viewportgröße basiert.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Viewport-Einheit für die Höhe (`vh`) implementieren, die der großen viewport-abhängigen Höhen Einheit (`lvh`) entspricht. Wenn dies der Fall ist, könnte dies den Inhalt auf einem Vollbild-Display verdecken, während die Browser-Oberfläche erweitert wird. Derzeit sind alle standardmäßigen Viewport-Einheiten (`vh`, `vw`, etc.) gleichwertig mit ihren großen Viewport-Gegenstücken (`lvh`, `lvw`, etc.).

Viewport-abhängige Längen definieren `<length>`-Werte in Prozentsätzen relativ zur Größe des anfänglichen [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der entweder auf der Größe des {{Glossary("viewport", "Viewports")}} oder dem Seitenbereich, d.h. dem sichtbaren Teil des Dokuments, basiert. Wenn sich die Höhe oder Breite des anfänglichen umfassenden Blocks ändert, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine viewport-abhängige Längeneinheit Variante entsprechend jeder der Viewportgrößen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des Viewports anfänglichem [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). `1vh` entspricht 1% der Höhe des Viewports. Zum Beispiel, wenn die Höhe des Viewports `300px` beträgt, dann ist ein Wert von `70vh` für eine Eigenschaft `210px`.

    Die jeweiligen viewport-abhängigen Einheiten für kleine, große und dynamische Viewportgrößen sind `svh`, `lvh` und `dvh`. `vh` ist gleichwertig mit `lvh` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des Viewports anfänglichem [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). `1vw` entspricht 1% der Breite des Viewports. Zum Beispiel, wenn die Breite des Viewports `800px` beträgt, dann ist ein Wert von `50vw` für eine Eigenschaft `400px`.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen viewport-abhängigen Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist gleichwertig mit `lvw` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

- `vmax`
  - : Stellt in Prozent den größten Wert von `vw` und `vh` dar.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen viewport-abhängigen Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist gleichwertig mit `lvmax` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

- `vmin`
  - : Stellt in Prozent den kleinsten Wert von `vw` und `vh` dar.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen viewport-abhängigen Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist gleichwertig mit `lvmin` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des anfänglichen [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Block-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen viewport-abhängigen Einheiten `svb`, `lvb` und `dvb` entsprechend.
    `vb` ist gleichwertig mit `lvb` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des anfänglichen [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen viewport-abhängigen Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist gleichwertig mit `lvi` und stellt die viewport-abhängige Längeneinheit basierend auf der großen Viewportgröße dar.

### Container-Query-Längeneinheiten

Bei der Anwendung von Stilen auf einen Container unter Verwendung von Container-Abfragen können Sie Container-Query-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Einheiten einer Länge relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern zu verwenden, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Query-Längeneinheit auf die [kleine Viewport-Einheit](#small_viewport_units) für diese Achse (`sv*`) zurückgesetzt.

Weitere Informationen finden Sie unter [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqw` für eine Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqh` für eine Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqi` für eine Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfragecontainers. `1cqb` ist 1% der Block-Größe des Abfragecontainers. Zum Beispiel, wenn die Block-Größe des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqb` für eine Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. `1cqmin` ist 1% des kleineren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Block-Größe `300px` beträgt, dann ist ein Wert von `50cqmin` für eine Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. `1cqmax` ist 1% des größeren Werts entweder der Inline-Größe oder der Block-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Block-Größe `300px` beträgt, dann ist ein Wert von `50cqmax` für eine Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie zum Beispiel beim Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkeleinheit** gebunden wird und dann die anderen relativ dazu definiert werden. Physikalische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich bei Geräten mit niedriger Auflösung, wie Bildschirmen, und bei Geräten mit hoher Auflösung, wie Druckern.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten sind relativ dazu definiert. Somit ist `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass auf solchen Geräten Abmessungen, die in Inch (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschrieben werden, nicht notwendigerweise mit der Größe der physikalischen Einheit mit demselben Namen übereinstimmen.

Für Geräte mit hoher DPI sind Inches (`in`), Zentimeter (`cm`) und Millimeter (`mm`) gleich ihren physikalischen Gegenstücken. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen ihre Standard-Schriftgröße {{Glossary("user_agent", "benutzeragenten")}}, um den Text besser lesbar zu machen. Absolute Längen können zu Zugänglichkeitsproblemen führen, da sie fest sind und nicht gemäß den Benutzereinstellungen skalieren. Deshalb sollten Sie vorzugsweise relative Längen (wie `em` oder `rem`) bei der Festlegung der `font-size` verwenden.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Geräte-Pixel")}} (Punkt). Für _Drucker_ und _Bildschirme mit hoher Auflösung_ bedeutet ein CSS-Pixel jedoch mehrere Geräte-Pixel. `1px = 1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm = 96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm = 1cm / 10`.
- `Q`
  - : Ein Viertel eines Millimeters. `1Q = 1cm / 40`.
- `in`
  - : Ein Inch. `1in = 2.54cm = 96px`.
- `pc`
  - : Ein Pica. `1pc = 12pt = 1in / 6`.
- `pt`
  - : Ein Punkt. `1pt = 1in / 72`.

## Interpolation

Wenn animiert, werden Werte des `<length>`-Datentyps als reale, gleitkommazahlige Zahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt am berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert eingeben können (z.B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste festzulegen, die unterhalb angezeigt wird, sobald Sie die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste gedrückt haben.

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

{{EmbedLiveSample('Vergleich verschiedener Längeneinheiten', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
