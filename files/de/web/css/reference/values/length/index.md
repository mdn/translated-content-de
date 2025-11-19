---
title: \<length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften wie `<length>`-Werte verwendet werden können, sind sie keine `<length>`-Werte an sich. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitensymbol. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, andere wiederum nicht.

Der [spezifizierte Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value) einer Länge (_spezifizierte Länge_) wird durch ihre Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, aufgelöst zu einer absoluten Länge, wobei die Einheit nicht differenziert wird.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Je nach Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabeumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement spezifiziert sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-relative Längeneinheiten basieren auf Schriftarten-, Container- oder Viewport-Größen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftartenlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Font-Attributs in der aktuell in einem Element oder seinem Elternelement wirksamen Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Versalhöhe" (nominelle Höhe der Großbuchstaben) der Schriftart des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Elements.
    In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphs zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der Schriftart des Elements. In Schriftarten mit dem Buchstaben `x` ist dies allgemein die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des "水" Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schriftart verwendet wird, um es darzustellen.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer ideal leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch anhand ihres Inhalts variieren.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Schriftarten-relative Längeneinheiten des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder eines Schriftmerkmals des [Wurzelelements](/de/docs/Web/CSS/Reference/Selectors/:root):

- `rcap`
  - : Entspricht der "Versalhöhe" (nominelle Höhe der Großbuchstaben) der Schriftart des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn innerhalb der Wurzelelement {{Cssxref("font-size")}} verwendet, repräsentiert es dessen Anfangswert. Ein gängiges Browsers-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der Schriftart des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer ideal leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch anhand ihres Inhalts variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentlängen-Einheiten** basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und Standard. Die Berücksichtigung unterschiedlicher Viewport-Größen spiegelt wider, dass Browser-Oberflächen dynamisch expandieren und zurückziehen sowie den darunterliegenden Inhalt ausblenden und anzeigen können.

- **Kleine Viewport-Einheiten**
  - : Wenn Sie die kleinstmögliche Viewport-Größe in Reaktion auf dynamisch erweiternde Browser-Schnittstellen wünschen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht dem von Ihnen gestalteten Inhalt, den gesamten Viewport zu füllen, wenn die Browser-Oberflächen erweitert sind. Die Auswahl dieser Größe kann möglicherweise zu leeren Bereichen führen, wenn sich die Browser-Oberflächen zurückziehen.

    Beispielsweise wird ein Element, das mit Viewport-Prozentlängen-Einheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, den Bildschirm perfekt füllen, ohne dass irgendwelche Inhalte des Elements verdeckt sind, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen ausgeblendet werden, kann jedoch zusätzlicher Raum um das Element sichtbar sein. Daher sind die kleinen Viewport-Prozentlängen-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nachteilig auf das Layout wirken, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das `sv`-Präfix repräsentiert und führt zu den `sv*` Viewport-Prozentlängen-Einheiten. Die Größen der kleinen Viewport-Prozentlängen-Einheiten sind fest und damit stabil, es sei denn, der Viewport selbst wird geändert.

- **Große Viewport-Einheiten**
  - : Wenn Sie die größtmögliche Viewport-Größe in Reaktion auf dynamisch zurückziehende Browser-Schnittstellen wünschen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht dem von Ihnen gestalteten Inhalt, den gesamten Viewport zu füllen, wenn die Browser-Oberflächen zurückziehen. Sie müssen sich bewusst sein, dass Inhalte verborgen werden können, wenn Browser-Oberflächen expandieren.

    Beispielsweise verstecken Browser auf Mobiltelefonen oft Teile oder die gesamte Titel- und Adressleiste, wenn ein Benutzer zu scrollen beginnt. Wenn ein Element mit einer Viewport-Prozenteinheit basierend auf der großen Viewport-Größe dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite, wenn diese Browser-Oberflächen ausgeblendet sind. Wenn diese zurückziehbaren Browser-Oberflächen angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Viewport-Prozenteinheiten dimensioniert oder positioniert wird.

    Die große Viewport-Einheit wird durch das `lv`-Präfix repräsentiert und führt zu den `lv*` Viewport-Prozenteinheiten. Die Größen der großen Viewport-Prozenteinheiten sind fest und somit stabil, es sei denn, der Viewport selbst wird geändert.

- **Dynamische Viewport-Einheiten**
  - : Wenn Sie möchten, dass der Viewport automatisch dimensioniert wird, indem er auf dynamisch expandierende oder zurückziehende Browser-Schnittstellen reagiert, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe erlaubt es dem gestalteten Inhalt, genau innerhalb des Viewports zu passen, unabhängig von der Existenz dynamischer Browser-Schnittstellen.

    Die dynamische Viewport-Einheit wird durch das `dv`-Präfix repräsentiert und führt zu den `dv*` Viewport-Prozenteinheiten. Die Größen der dynamischen Viewport-Prozenteinheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität bietet, kann die Verwendung von Viewport-Prozenteinheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass sich der Inhalt während des Scrollens der Seite ändert. Dies kann eine Verschlechterung der Benutzeroberfläche verursachen und zu Leistungseinbußen führen.

- **Standard-Viewport-Einheiten**
  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozenteinheit könnte der Viewport-Prozenteinheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe entsprechen.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Viewport-Prozenteinheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozenteinheit für die Höhe (`lvh`) entspricht. In diesem Fall könnte dies Inhalte auf einem vollständigen Seiten-Display verbergen, während die Browser-Oberfläche expandiert ist. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw`, etc.) äquivalent zu ihren großen Viewport-Pendants (`lvh`, `lvw`, etc.).

Viewport-Prozenteinheiten definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block), welcher wiederum entweder auf der Größe des {{Glossary("viewport", "Viewports")}} oder des Seitenbereichs basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Containing Block geändert wird, werden die auf ihnen basierenden Elemente entsprechend skaliert. Es gibt eine Variante der Viewport-Prozenteinheit, die jedem der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind ungültig in {{cssxref("@page")}} Deklarationsblöcken.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen Containing Block des Viewports. `1vh` beträgt 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` beträgt, würde ein Wert von `70vh` auf einer Eigenschaft `210px` betragen.

    Die jeweiligen Viewport-Prozenteinheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` ist äquivalent zu `lvh`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen Containing Block des Viewports. `1vw` beträgt 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` beträgt, würde ein Wert von `50vw` auf einer Eigenschaft `400px` betragen.

    Für kleine, große und dynamische Viewport-Größen wären die jeweiligen Viewport-Prozenteinheiten `svw`, `lvw` und `dvw`.
    `vw` ist äquivalent zu `lvw`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

- `vmax`
  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist äquivalent zu `lvmax`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

- `vmin`
  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen Viewport-Prozenteinheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist äquivalent zu `lvmin`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block), in der Richtung der [Block-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen wären die jeweiligen Viewport-Prozenteinheiten `svb`, `lvb` und `dvb` entsprechend.
    `vb` ist äquivalent zu `lvb`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block), in der Richtung der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen wären die jeweiligen Viewport-Prozenteinheiten `svi`, `lvi` und `dvi`.
    `vi` ist äquivalent zu `lvi`, welche die Viewport-Prozenteinheit basierend auf der großen Viewport-Größe repräsentiert.

### Container-Abfrage-Längeneinheiten

Beim Anwenden von Stilen auf einen Container mithilfe von Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Einheiten von Längen relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einzusetzen, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, standardisiert die Container-Abfrage-Längeneinheit zur [kleinen Viewport-Einheit](#small_viewport_units) für jene Achse (`sv*`).

Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` ist, dann beträgt ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` ist, dann beträgt ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` ist, dann beträgt ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` ist, dann beträgt ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und dessen Blockgröße `300px` ist, beträgt ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und dessen Blockgröße `300px` ist, beträgt ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** stellen eine physische Messung dar, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. für den Druck. Dies erfolgt durch die Verankerung einer der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkel-Einheit** und anschließende Definition der anderen davon relativ. Physische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Niedrigauflösungsgeräte wie Bildschirme im Vergleich zu Hochauflösungsgeräten wie Druckern.

Für Geräte mit niedriger dpi (dots per inch) stellt die Einheit `px` das physische _Referenzpixel_ dar; andere Einheiten werden relativ dazu definiert. Somit entspricht `1in` `96px`, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Maße in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) nicht unbedingt der physischen Einheit mit demselben Namen entsprechen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) dieselben wie ihre physikalischen Gegenstücke. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um Text besser lesbar zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und sich nicht an Benutzereinstellungen anpassen. Daher sollten relative Längen (wie `em` oder `rem`) bevorzugt werden, wenn `font-size` festgelegt wird.

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
  - : Eine Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Bei Animationen werden Werte des `<length>`-Datentyps als reale Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die unterhalb angezeigt wird, sobald Sie die <kbd>Eingabetaste</kbd> oder die <kbd>Returntaste</kbd> drücken.

Dies ermöglicht Ihnen den Vergleich und das Gegenüberstellen der Auswirkungen verschiedener Längeneinheiten.

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
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Box Model](/de/docs/Web/CSS/Guides/Box_model)
