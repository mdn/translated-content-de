---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften wie `<length>`-Werte verwendbar sind, sind sie keine `<length>`-Werte an sich. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheitliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/computed_value) einer Länge (_computed length_) ist die angegebene Länge, die in eine absolute Länge aufgelöst ist, wobei ihre Einheit nicht unterschieden wird.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren ein Maß in Bezug auf eine andere Entfernung. Abhängig von der Einheit kann dies die Größe eines bestimmten Zeichens, die [Linienhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabebereichsumgebung zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihre Eltern festgelegt sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

Die relativen Längeneinheiten von CSS basieren auf Schriftart-, Container- oder Viewport-Größen.

### Relative Längeneinheiten basierend auf Schriftart

Schriftartabstände definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftdateigenerierungsattributs in der Schriftart, die aktuell in einem Element oder dessen Eltern verwendet wird.

> [!NOTE]
> Diese Einheiten, besonders `em` und das wurzelbezogene `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die das vertikale Rhythmus der Seite aufrechterhalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "cap height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen das Bestimmen des Maßes des `0`-Glyphen unmöglich oder nicht praktikabel ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-height](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x` Buchstaben ist dies generell die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des "水"-Glyphen (CJK-Wasserideogramm, U+6C34), das in der Schriftart verwendet wird, um es zu rendern.
- `lh`
  - : Entspricht dem berechneten Wert der Eigenschaft {{Cssxref("line-height")}} des Elements, auf dem es verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Linienboxen kann jedoch aufgrund ihres Inhalts abweichen.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Relative Längeneinheiten der Schriftart des Wurzelelements definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftdateigenerierungsattributs des [root](/de/docs/Web/CSS/:root) Elements:

- `rcap`
  - : Entspricht der "cap height" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements {{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Ein üblicher Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-height der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Linienboxen kann jedoch aufgrund ihres Inhalts abweichen.

### Relative Längeneinheiten basierend auf dem Viewport

Die viewport-prozentualen Längeneinheiten basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und standard. Die Zulassung unterschiedlicher Viewport-Größen ist eine Reaktion auf die dynamische Erweiterung und Retraktion der Browseroberflächen und das Ein- und Ausblenden des darunter liegenden Inhalts.

- **Klein**

  - : Wenn Sie die kleinstmögliche Viewport-Größe als Reaktion auf die dynamische Erweiterung der Browser-Oberflächen verwenden möchten, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es dem von Ihnen gestalteten Inhalt, den gesamten Viewport zu füllen, wenn Browser-Oberflächen erweitert werden. Die Auswahl dieser Größe kann auch leere Bereiche hinterlassen, wenn Browser-Oberflächen zurückgezogen werden.

    Beispielsweise wird ein Element, das unter Verwendung von viewport-prozentualen Einheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, den Bildschirm perfekt füllen, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen jedoch verborgen sind, kann der Bereich um das Element sichtbar werden. Daher sind die kleinen viewport-prozentualen Einheiten generell "sicherer" zu verwenden, produzieren jedoch unter Umständen nicht das attraktivste Layout, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und führt zu den `sv*` viewport-prozentualen Längeneinheiten. Die Größen der kleinen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Groß**

  - : Wenn Sie möchten, dass der größte mögliche Viewport als Reaktion auf die dynamische Retraktion der Browseroberflächen verwendet wird, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es dem von Ihnen gestalteten Inhalt, den gesamten Viewport zu füllen, wenn Browser-Oberflächen zurückgezogen werden. Sie sollten jedoch beachten, dass der Inhalt verdeckt werden kann, wenn Browser-Oberflächen erweitert werden.

    Beispielsweise verstecken Browser auf Mobiltelefonen, bei denen der Bildschirmplatz knapp ist, oft Teile oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer mit dem Scrollen der Seite beginnt. Wenn ein Element unter Verwendung einer viewport-prozentualen Einheit basierend auf der großen Viewport-Größe dimensioniert ist, wird der Inhalt des Elements die gesamte sichtbare Seite füllen, wenn diese Browser-Oberflächen verborgen sind. Wenn diese einziehbaren Browser-Oberflächen angezeigt werden, können sie den Inhalt verdecken, der unter Verwendung der _großen_ viewport-prozentualen Einheiten dimensioniert oder positioniert wurde.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*` viewport-prozentualen Einheiten. Die Größen der großen viewport-prozentualen Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird neu dimensioniert.

- **Dynamisch**

  - : Wenn Sie möchten, dass der Viewport automatisch in Antwort auf die dynamische Erweiterung oder Retraktion der Browser-Oberflächen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es dem von Ihnen gestalteten Inhalt, genau in den Viewport zu passen, unabhängig von der Anwesenheit dynamischer Browser-Oberflächen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und führt zu den `dv*` viewport-prozentualen Einheiten. Die Größen der dynamischen viewport-prozentualen Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von viewport-prozentualen Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass der Inhalt die Größe ändert, während ein Benutzer durch eine Seite scrollt. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und einen Leistungseinbruch verursachen.

- **Standard**

  - : Die Standard-Viewport-Größe wird durch den Browser definiert. Das Verhalten der resultierenden viewport-prozentualen Einheit könnte der viewport-prozentualen Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden, oder der dynamischen Viewport-Größe entsprechen.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Viewport-prozentuale Einheit für die Höhe (`vh`) implementieren, die der großen Viewport-prozentualen Höheneinheit (`lvh`) entspricht. Wenn dies der Fall ist, könnte dies Inhalte auf einem Full-Page-Display verdecken, während die Browser-Oberfläche erweitert wird.

Viewport-prozentuale Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [containing block](/de/docs/Web/CSS/Containing_block), der seinerseits auf entweder der Größe des {{Glossary("viewport", "Viewports")}} oder des Seitenbereichs basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Containing Blocks geändert wird, werden die Elemente, die darauf basierend dimensioniert sind, entsprechend skaliert. Es gibt eine Variante der viewport-prozentualen Längeneinheit, die jeder der Viewport-Größen entspricht, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [containing block](/de/docs/Web/CSS/Containing_block) des Viewports. `1vh` ist 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` beträgt, dann ist ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen viewport-prozentualen Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [containing block](/de/docs/Web/CSS/Containing_block) des Viewports. `1vw` ist 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` beträgt, dann ist ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen viewport-prozentualen Einheiten `svw`, `lvw` und `dvw`.
    `vw` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmax`

  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen viewport-prozentualen Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen viewport-prozentualen Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [containing block](/de/docs/Web/CSS/Containing_block), in Richtung der [block axis](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen viewport-prozentualen Einheiten `svb`, `lvb` und `dvb`, jeweils.
    `vb` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [containing block](/de/docs/Web/CSS/Containing_block), in Richtung der [inline axis](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die jeweiligen viewport-prozentualen Einheiten `svi`, `lvi` und `dvi`.
    `vi` repräsentiert die viewport-prozentuale Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

### Containerabfrage-Längeneinheiten

Beim Anwenden von Stilen auf einen Container mithilfe von Containerabfragen können Sie Containerabfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.
Weitere Informationen finden Sie in [Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann ist ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` beträgt, dann ist ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Werts der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Werts der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann ist ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Werts der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Werts der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann ist ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

Absolute Längeneinheiten repräsentieren eine physische Messung, wenn die physischen Eigenschaften des Ausgabemediums bekannt sind, beispielsweise für den Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine physische Einheit verankert wird und dann die anderen relativ dazu definiert werden. Die Verankerung erfolgt unterschiedlich für niedrigauflösende Geräte, wie Bildschirme, und hochauflösende Geräte, wie Drucker.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physische _Referenz-Pixel_; andere Einheiten werden relativ dazu definiert. Damit ist `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Abmessungen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben sind, nicht unbedingt der Größe der physischen Einheit mit dem gleichen Namen entsprechen.

Für hochauflösende Geräte sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) identisch mit ihren physischen Gegenstücken. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "User Agent")}}, um Texte besser lesbar zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und nicht gemäß den Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie, wenn Sie `font-size` festlegen, bevorzugt relative Längen (wie `em` oder `rem`) verwenden.

- `px`
  - : Ein Pixel. Für Bildschirmdarstellungen repräsentiert es traditionell ein Geräte-Pixel (Punkt). Bei _Druckern_ und _Hochauflösungsbildschirmen_ impliziert ein CSS-Pixel jedoch mehrere Geräte-Pixel. `1px` = `1in / 96`.
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

Bei Animationen werden die Werte des `<length>`-Datentyps als reale, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht Ihnen den Vergleich der Auswirkungen verschiedener Längeneinheiten.

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

- [CSS-Werte & -Einheiten Tutorial](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS-Werte & -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
