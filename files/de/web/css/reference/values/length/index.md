---
title: \<length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Entfernungswert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheit-Literal. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_angegebene Länge_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die angegebene Länge, die auf eine absolute Länge aufgelöst ist, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen ein Maß in Bezug auf eine andere Distanz dar. Je nach Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Linienhöhe](/de/docs/Web/CSS/Reference/Properties/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabemedium zu einem anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement festgelegt sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-Relative Längeneinheiten basieren auf Schrift-, Container- oder Viewportgrößen.

### Relative Längeneinheiten basierend auf Schrift

Schrift-Längen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftattribut im aktuell in einem Element oder seinem Elternteil wirkenden Schrift.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und die Wurzel-relative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Kappenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorrückenmaß")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements. In Fällen, in denen das Bestimmen des Maßes des `0`-Glyphens unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf die {{Cssxref("font-size")}}-Eigenschaft selbst angewendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe kleiner Buchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Vorrückenmaß")}} des "水"-Glyphen (CJK Wasserideogramm, U+6C34), das in der zur Darstellung verwendeten Schrift gefunden wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem sie verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Linie. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Wurzelelement-Schrift-relative Längeneinheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements:

- `rcap`
  - : Entspricht der "Kappenhöhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorrückenmaß")}} des Glyphens `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet wird, repräsentiert es ihren anfänglichen Wert. Ein gängiger Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Linie. Die Größe der tatsächlichen Linienboxen kann jedoch je nach Inhalt unterschiedlich sein.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentsatz-Längeneinheiten** basieren auf vier verschiedenen Viewportgrößen: klein, groß, dynamisch und standardmäßig. Die Möglichkeit für die verschiedenen Viewportgrößen ergibt sich aus dem dynamischen Erweitern und Zurückziehen von Browser-Schnittstellen und dem Verbergen und Anzeigen des Inhalts darunter.

- **Kleine Viewport-Einheiten**
  - : Wenn Sie die kleinstmögliche Viewportgröße in Reaktion auf das dynamische Erweitern der Browser-Schnittstellen wünschen, sollten Sie die kleine Viewportgröße verwenden. Die kleine Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt den gesamten Viewport füllt, wenn die Browser-Schnittstellen erweitert sind. Die Wahl dieser Größe kann möglicherweise auch leere Räume hinterlassen, wenn die Browser-Schnittstellen zurückgezogen werden.
  
    Zum Beispiel wird ein Element, das mit Viewport-Prozentsatz-Einheiten basierend auf der kleinen Viewportgröße dimensioniert ist, den Bildschirm perfekt ausfüllen, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browser-Schnittstellen angezeigt werden. Wenn diese Browser-Schnittstellen jedoch ausgeblendet sind, könnte es sein, dass zusätzlicher Raum um das Element sichtbar wird. Daher sind die kleinen Viewport-Prozentsatz-Einheiten "sicherer" in der allgemeinen Verwendung, erzeugen jedoch möglicherweise nicht das attraktivste Layout, nachdem ein Benutzer begonnen hat, mit der Seite zu interagieren.

    Die kleine Viewportgröße wird mit dem Präfix `sv` dargestellt und führt zu den `sv*`-Viewport-Prozentsatz-Längeneinheiten. Die Größen der kleinen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Große Viewport-Einheiten**
  - : Wenn Sie die größtmögliche Viewportgröße in Reaktion auf das dynamische Zurückziehen der Browser-Schnittstellen wünschen, sollten Sie die große Viewportgröße verwenden. Die große Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt den gesamten Viewport füllt, wenn die Browser-Schnittstellen zurückgezogen werden. Sie müssen sich bewusst sein, dass der Inhalt verdeckt werden kann, wenn die Browser-Schnittstellen erweitert werden.

    Zum Beispiel verstecken Browser auf Mobiltelefonen, wo der Bildschirm-Platz begrenzt ist, nach dem Scrollen der Seite häufig einen Teil oder die gesamte Titel- und Adressleiste. Wenn ein Element mit einer Viewport-Prozentsatz-Einheit basierend auf der großen Viewportgröße dimensioniert ist, füllt der Inhalt des Elements die gesamte sichtbare Seite aus, wenn diese Browser-Schnittstellen ausgeblendet sind. Wenn diese zurückziehbaren Browser-Schnittstellen jedoch angezeigt werden, können sie den Inhalt verbergen, der mit den _großen_ Viewport-Prozentsatz-Einheiten dimensioniert oder positioniert ist.

    Die große Viewport-Einheit wird mit dem Präfix `lv` dargestellt und führt zu den `lv*`-Viewport-Prozentsatz-Einheiten. Die Größen der großen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Dynamische Viewport-Einheiten**
  - : Wenn Sie möchten, dass der Viewport automatisch dimensioniert wird, um auf das dynamische Erweitern oder Zurückziehen der Browser-Schnittstellen zu reagieren, können Sie die dynamische Viewportgröße verwenden. Die dynamische Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt genau innerhalb des Viewports passt, unabhängig vom Vorhandensein dynamischer Browser-Schnittstellen.

    Die dynamische Viewport-Einheit wird mit dem Präfix `dv` dargestellt und führt zu den `dv*`-Viewport-Prozentsatz-Einheiten. Die Größen der dynamischen Viewport-Prozentsatz-Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewportgröße Ihnen mehr Kontrolle und Flexibilität bieten kann, kann die Verwendung von Viewport-Prozentsatz-Einheiten, die auf der dynamischen Viewportgröße basieren, dazu führen, dass der Inhalt während des Scrollens auf einer Seite seine Größe ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche und einer Leistungseinbuße führen.

- **Standard-Viewport-Einheiten**
  - : Die standardmäßige Viewportgröße wird durch den Browser definiert. Das Verhalten der resultierenden Viewport-Prozentsatz-Einheit könnte der Viewport-Prozentsatz-Einheit basierend auf der kleinen Viewportgröße, der großen Viewportgröße, einer Zwischengröße zwischen den beiden oder der dynamischen Viewportgröße entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die standardmäßige Viewport-Prozentsatz-Einheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozentsatz-Höheinheit (`lvh`) entspricht. Ist dies der Fall, könnte dies den Inhalt auf einem Display im Vollbildmodus verdecken, während die Browser-Schnittstelle erweitert ist. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw`, usw.) ihren großen Viewport-Gegenstücken (`lvh`, `lvw`, usw.) gleichwertig.

Viewport-Prozentsatz-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), die wiederum auf der Größe des {{Glossary("viewport", "Viewports")}} oder des Seitenbereichs, d.h. des sichtbaren Teils des Dokuments, basiert. Wenn die Höhe oder Breite des initialen enthaltenden Blocks geändert wird, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine Viewport-Prozentsatz-Längeneinheit, die jeder der Viewportgrößen entspricht, wie im Folgenden beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` sind 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` beträgt, dann wird ein Wert von `70vh` auf einer Eigenschaft `210px` sein.

    Die jeweiligen Viewport-Prozentsatz-Einheiten für kleine, große und dynamische Viewportgrößen sind `svh`, `lvh`, und `dvh`. `vh` ist äquivalent zu `lvh`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` sind 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` beträgt, dann wird ein Wert von `50vw` auf einer Eigenschaft `400px` sein.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svw`, `lvw`, und `dvw`. `vw` ist äquivalent zu `lvw`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

- `vmax`
  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmax`, `lvmax`, und `dvmax`. `vmax` ist äquivalent zu `lvmax`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

- `vmin`
  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svmin`, `lvmin`, und `dvmin`. `vmin` ist äquivalent zu `lvmin`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svb`, `lvb`, und `dvb`. `vb` ist äquivalent zu `lvb`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die jeweiligen Viewport-Prozentsatz-Einheiten `svi`, `lvi`, und `dvi`. `vi` ist äquivalent zu `lvi`, was die Viewport-Prozentsatz-Längeneinheit basierend auf der großen Viewportgröße darstellt.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mittels Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfrage-Containers an.
Komponenten, die Einheiten von Länge relativ zu ihrem Container nutzen, sind flexibler in verschiedenen Containern zu verwenden, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, nimmt die Container-Abfrage-Längeneinheit standardmäßig die [kleine Viewport-Einheit](#small_viewport_units) für diese Achse (`sv*`) an.

Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfrage-Containers. `1cqw` sind 1% der Breite des Abfrage-Containers. Zum Beispiel, wenn die Breite des Abfrage-Containers `800px` beträgt, dann hat ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfrage-Containers. `1cqh` sind 1% der Höhe des Abfrage-Containers. Zum Beispiel, wenn die Höhe des Abfrage-Containers `300px` beträgt, dann hat ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfrage-Containers. `1cqi` sind 1% der Inline-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` beträgt, dann hat ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Block-Größe des Abfrage-Containers. `1cqb` sind 1% der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Block-Größe des Abfrage-Containers `300px` beträgt, dann hat ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmin` sind 1% des kleineren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` und seine Block-Größe `300px` beträgt, dann hat ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. `1cqmax` sind 1% des größeren Wertes entweder der Inline-Größe oder der Block-Größe des Abfrage-Containers. Zum Beispiel, wenn die Inline-Größe des Abfrage-Containers `800px` und seine Block-Größe `300px` beträgt, dann hat ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren ein physisches Maß, wenn die physischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. im Drucklayout. Dies geschieht, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkeleinheit** verankert wird und dann die anderen relativ dazu definiert werden. Physische Einheiten sind `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie z.B. Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie z.B. Druckern.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. So ist `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschriebenen Dimensionen nicht zwangsläufig der Größe der physischen Einheit mit dem gleichen Namen entsprechen.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) dasselbe wie ihre physischen Gegenstücke. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen ihre standardmäßige Schriftgröße des {{Glossary("user_agent", "User-Agent")}}, um den Text besser lesbar zu machen. Absolute Längen können Barrierefreiheit-Probleme verursachen, da sie festgelegt sind und nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie beim Setzen der `font-size` vorzugsweise relative Längen (wie `em` oder `rem`) verwenden.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen repräsentierte es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Für _Drucker_ und _Bildschirm mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>`-Datentyps als reale Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in dem Sie einen `<length>`-Wert eingeben können (z.B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste festzulegen, die unterhalb erscheint, sobald Sie die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> gedrückt haben.

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
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model)
