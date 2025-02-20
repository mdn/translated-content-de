---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen derselben Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, andere nicht.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) einer Länge (_spezifizierte Länge_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit ist nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen ein Maß in Bezug auf eine andere Entfernung dar. Je nach Einheit kann diese Entfernung die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabeumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihren Elternteil spezifiziert sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schrift-, Container- oder Viewportgrößen.

### Relative Längeneinheiten auf Basis der Schrift

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schrifteigenschaft in der aktuell wirksamen Schriftart eines Elements oder dessen Elternteils.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelbezogene `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Höhe der Großbuchstaben" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorrückmaß")}} der Glyphe `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen das Bestimmen des Maßes der `0`-Glyphe unmöglich oder unpraktisch ist, muss davon ausgegangen werden, dass sie `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x`-Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Vorrückmaß")}} der "水"-Glyphe (CJK-Wasser-Ideogramm, U+6C34), das in der Schrift gefunden wird, die es rendert.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, konvertiert zu einer absoluten Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Längenmaßeinheiten relativ zur Schrift des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schrifteigenschaft des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Höhe der Großbuchstaben" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorrückmaß")}} der Glyphe `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet wird, repräsentiert es dessen Anfangswert. Ein häufiger Standardwert des Browsers ist `16px`, aber benutzerdefinierte Einstellungen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentlängeneinheiten** basieren auf vier verschiedenen Viewportgrößen: klein, groß, dynamisch und Standard. Die Berücksichtigung der unterschiedlichen Viewportgrößen erfolgt als Reaktion auf Browseroberflächen, die sich dynamisch erweitern und zurückziehen sowie den darunterliegenden Inhalt ein- und ausblenden.

- **Kleine Viewport-Einheiten**

  - : Wenn Sie die kleinstmögliche Viewportgröße als Reaktion auf dynamisch expandierende Browseroberflächen verwenden möchten, sollten Sie die kleine Viewportgröße verwenden. Die kleine Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt den gesamten Viewport ausfüllt, wenn sich die Browseroberflächen erweitern. Die Auswahl dieser Größe könnte möglicherweise auch leere Räume hinterlassen, wenn sich die Browseroberflächen zurückziehen.

    Beispielsweise füllt ein Element, das mit Viewport-Prozent-Einheiten auf Basis der kleinen Viewportgröße dimensioniert ist, den Bildschirm perfekt aus, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen ausgeblendet werden, kann jedoch zusätzlicher Raum um das Element sichtbar werden. Daher sind die kleinen Viewport-Prozent-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout erzeugen, nachdem ein Nutzer beginnt, mit der Seite zu interagieren.

    Die kleine Viewportgröße wird durch das Präfix `sv` dargestellt und führt zu den `sv*` Viewport-Prozentlängeneinheiten. Die Größen der kleinen Viewport-Prozent-Einheiten sind fest und somit stabil, es sei denn, der Viewport selbst wird verändert.

- **Große Viewport-Einheiten**

  - : Wenn Sie die größtmögliche Viewportgröße als Reaktion auf dynamisch zurückziehende Browseroberflächen verwenden möchten, sollten Sie die große Viewportgröße verwenden. Die große Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt den gesamten Viewport ausfüllt, wenn sich die Browseroberflächen zurückziehen. Sie müssen sich dessen bewusst sein, dass der Inhalt verborgen werden kann, wenn sich die Browseroberflächen erweitern.

    Beispielsweise verbergen Browser auf Mobiltelefonen, bei denen der Bildschirmplatz knapp ist, oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Nutzer die Seite zu scrollen beginnt. Wenn ein Element mit einer Viewport-Prozent-Einheit basierend auf der großen Viewport-Größe dimensioniert wird, füllt der Inhalt des Elements die gesamte sichtbare Seite aus, wenn diese Browseroberflächen ausgeblendet werden. Werden diese zurückziehbaren Browseroberflächen jedoch angezeigt, können sie Inhalte verdecken, die mit den großen Viewport-Prozenteinheiten dimensioniert oder positioniert wurden.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*` Viewport-Prozenteinheiten. Die Größen der großen Viewport-Prozenteinheiten sind fest und somit stabil, es sei denn, der Viewport selbst wird verändert.

- **Dynamische Viewport-Einheiten**

  - : Wenn Sie möchten, dass der Viewport automatisch entsprechend den dynamisch expandierenden oder zurückziehenden Browseroberflächen dimensioniert wird, können Sie die dynamische Viewportgröße verwenden. Die dynamische Viewportgröße ermöglicht es, dass der von Ihnen gestaltete Inhalt genau innerhalb des Viewports passt, unabhängig vom Vorhandensein dynamischer Browseroberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*` Viewport-Prozenteinheiten. Die Größen der dynamischen Viewport-Prozenteinheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewportgröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozenteinheiten auf Basis der dynamischen Viewportgröße dazu führen, dass sich der Inhalt während des Scrollens einer Seite ändert. Dies kann zur Verschlechterung der Benutzeroberfläche führen und einen Leistungseinbruch verursachen.

- **Standard-Viewport-Einheiten**

  - : Die Standard-Viewportgröße wird durch den Browser definiert. Das Verhalten der resultierenden Viewport-Prozenteinheit könnte äquivalent zur Viewport-Prozenteinheit basierend auf der kleinen Viewportgröße, der großen Viewportgröße, einer Zwischenstufe zwischen den beiden oder der dynamischen Viewportgröße sein.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Viewport-Prozenteinheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozenteinheit in der Höhe (`lvh`) entspricht. Wenn ja, könnte dies Inhalte auf einem Vollbild-Display verdecken, während die Browseroberfläche erweitert wird.

Viewport-Prozenteinheiten definieren `<length>`-Werte als Prozentangaben relativ zur Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf entweder der Größe des {{Glossary("viewport", "Viewports")}} oder der Seitenfläche basiert, d.h. dem sichtbaren Abschnitt des Dokuments. Wenn die Höhe oder Breite des initialen enthältenden Blocks geändert wird, werden die darauf basierenden Elemente entsprechend skaliert. Es gibt eine Viewport-Prozenteinheitsvariante für jede der Viewportgrößen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` sind 1% der Viewporthöhe. Beispielsweise, wenn die Viewporthöhe `300px` beträgt, wird ein Wert von `70vh` auf eine Eigenschaft `210px` sein.

    Die entsprechenden Viewport-Prozenteinheiten für kleine, große und dynamische Viewportgrößen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die Viewport-Prozenteinheit basierend auf der Standard-Viewportgröße des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` ist 1% der Viewportbreite. Beispielsweise wird ein Wert von `50vw` auf eine Eigenschaft `400px` sein, wenn die Viewportbreite `800px` beträgt.

    Für kleine, große und dynamische Viewportgrößen sind die entsprechenden Viewport-Prozenteinheiten `svw`, `lvw` und `dvw`.
    `vw` repräsentiert die Viewport-Prozenteinheit basierend auf der Standard-Viewportgröße des Browsers.

- `vmax`

  - : Repräsentiert in Prozent den größeren von `vw` und `vh`.

    Für kleine, große und dynamische Viewportgrößen sind die entsprechenden Viewport-Prozenteinheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` repräsentiert die Viewport-Prozenteinheit basierend auf der Standard-Viewportgröße des Browsers.

- `vmin`

  - : Repräsentiert in Prozent den kleineren von `vw` und `vh`.

    Für kleine, große und dynamische Viewportgrößen sind die entsprechenden Viewport-Prozenteinheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` repräsentiert die Viewport-Prozenteinheit basierend auf der Standard-Viewportgröße des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die entsprechenden Viewport-Prozenteinheiten jeweils `svb`, `lvb` und `dvb`.
    `vb` repräsentiert die Viewport-Prozenteinheit basierend auf der Standard-Viewportgröße des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewportgrößen sind die entsprechenden Viewport-Prozenteinheiten `svi`, `lvi`, und `dvi`.
    `vi` repräsentiert die Verhältnislängeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mit Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.
Für weitere Informationen siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` beträgt, dann entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px`, dann entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt und seine Blockgröße `300px`, dann entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** vertreten eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie beispielsweise im Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkeleinheit** verankert wird und dann die anderen relativ dazu definiert werden. Physische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie Drucker.

Für Geräte mit niedrigem dpi repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten werden relativ dazu definiert. Somit wird `1in` als `96px` definiert, was gleich `72pt` ist. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Dimensionen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben werden, nicht unbedingt mit der physischen Einheit mit demselben Namen übereinstimmen.

Bei Geräten mit hohem dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) gleich ihren physischen Gegenstücken. Daher wird die Einheit `px` relativ dazu definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standardeinstellung der Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um den Text besser lesbar zu machen. Absolute Längen können zu Zugänglichkeitsproblemen führen, da sie fixiert sind und sich nicht an Benutzereinstellungen anpassen. Aus diesem Grund sollten relative Längen (wie `em` oder `rem`) bevorzugt werden, wenn `font-size` festgelegt wird.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen stellt es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt) dar. Für _Drucker_ und _hochauflösende Bildschirme_ impliziert ein CSS-Pixel jedoch mehrere Gerätepixel. `1px` = `1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm` = `96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm` = `1cm / 10`.
- `Q`
  - : Ein Viertel Millimeter. `1Q` = `1cm / 40`.
- `in`
  - : Ein Zoll. `1in` = `2.54cm` = `96px`.
- `pc`
  - : Ein Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Bei Animationen werden Werte des `<length>`-Datentyps als reale, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation assoziierte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die darunter erscheint, nachdem Sie die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> gedrückt haben.

Dies ermöglicht es Ihnen, die Effekte verschiedener Längeneinheiten zu vergleichen und zu kontrastieren.

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
