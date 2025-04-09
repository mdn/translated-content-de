---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 8905094f4366d2e4d5876a3d75b88880d0aba60b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>` Werte akzeptieren, sind sie selbst keine `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und der Einheit. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_spezifizierte Länge_) wird durch ihre Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, die in eine absolute Länge aufgelöst ist, wobei ihre Einheit nicht unterschieden wird.

Die `<length>` Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Je nach Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können einfacher von einer Ausgabenumgebung auf eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement spezifiziert sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-Relativeinheiten basieren auf Schriftgröße, Container oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftgröße

Schriftlängen definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftschnitteigenschaft in der aktuell in einem Element oder seinem Elternelement verwendeten Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap Height" (nominale Höhe der Großbuchstaben) der Schriftart des Elements {{Cssxref("font")}}.
- `ch`
  - : Repräsentiert die Breite oder genauer die {{Glossary("advance_measure", "advance measure")}} des `0`-Zeichens (Null, das Unicode-Zeichen U+0030) in der Schrift des Elements {{Cssxref("font")}}.
    In Fällen, in denen es unmöglich oder unpraktisch ist, das Maß des `0`-Glyphen zu bestimmen, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es bei der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der Schriftart des Elements {{Cssxref("font")}}. In Schriften mit dem `x`-Zeichen handelt es sich in der Regel um die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des "水"-Zeichens (CJK-Wasser-Ideogramm, U+6C34) in der zum Rendern verwendeten Schriftart.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, in dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Linienboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Root-Elements

Root-Element-Schrift-verwandte Längeneinheiten definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder einer Schriftschnitteigenschaft des [Root-Elements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap Height" (nominale Höhe der Großbuchstaben) der Schriftart des Root-Elements {{Cssxref("font")}}.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des `0`-Zeichens (Null, das Unicode-Zeichen U+0030) in der Schrift des Root-Elements {{Cssxref("font")}}.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Root-Elements (typischerweise {{HTMLElement("html")}}). Wenn es im Root-Element innerhalb der {{Cssxref("font-size")}} verwendet wird, repräsentiert es dessen anfänglichen Wert. Ein gebräuchlicher Browser-Standardwert ist `16px`, doch benutzerdefinierte Präferenzen können diesen ändern.
- `rex`
  - : Repräsentiert die x-Höhe der Schriftart des Root-Elements {{Cssxref("font")}}.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit bei der Schrift des Root-Elements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit bei der Schrift des Root-Elements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Linienboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **viewport-Prozentlängeneinheiten** basieren auf vier verschiedenen Größen des Ansichtsfensters: klein, groß, dynamisch und standardmäßig. Die Zulassung der unterschiedlichen Ansichtsfenstergrößen ist eine Antwort auf dynamische Erweiterungen und Rückzüge von Browser-Oberflächen sowie das Ein- und Ausblenden des darunterliegenden Inhalts.

- **Kleine Ansichtsfenster-Einheiten**

  - : Wenn Sie die kleinstmögliche Ansichtsfenstergröße in Reaktion auf dynamisch erweiternde Browser-Oberflächen wünschen, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht es, dass der von Ihnen entworfene Inhalt das gesamte Ansichtsfenster füllt, wenn die Browser-Oberflächen erweitert sind. Bei Wahl dieser Größe kann auch Raum gelassen werden, wenn die Browser-Oberflächen zurückgezogen werden.

    Zum Beispiel wird ein Element, das mit viewport-Prozent-Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert ist, den Bildschirm perfekt füllen, ohne dass ein Teil des Inhalts verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn diese Browser-Oberflächen ausgeblendet werden, könnte jedoch zusätzlicher Raum um das Element sichtbar werden. Daher sind die kleinen viewport-Prozent-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout produzieren, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das `sv` Präfix dargestellt und resultiert in den `sv*` viewport-Prozent-Längeneinheiten. Die Größen der kleinen viewport-Prozent-Einheiten sind festgelegt und daher stabil, es sei denn, das Ansichtsfenster selbst wird in der Größe geändert.

- **Große Ansichtsfenster-Einheiten**

  - : Wenn Sie das größtmögliche Ansichtsfenster in Reaktion auf dynamisch zurückziehende Browser-Oberflächen wünschen, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht es, dass der von Ihnen entworfene Inhalt das gesamte Ansichtsfenster füllt, wenn die Browser-Oberflächen zurückziehen. Sie müssen sich bewusst sein, dass der Inhalt möglicherweise verborgen wird, wenn die Browser-Oberflächen expandieren.

    Zum Beispiel, auf Mobiltelefonen, bei denen der Bildschirmplatz ein knappes Gut ist, verbergen Browser oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem der Benutzer beginnt, die Seite zu scrollen. Wenn ein Element unter der Verwendung einer viewport-Prozent-Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert ist, wird der Inhalt des Elements die gesamte sichtbare Seite füllen, wenn diese Browser-Oberflächen verborgen sind. Wenn diese zurückziehbaren Browser-Oberflächen gezeigt werden, können sie jedoch den Inhalt verdecken, der mit den _großen_ viewport-Prozent-Einheiten dimensioniert oder positioniert wurde.

    Die große Ansichtsfenstereinheit wird durch das `lv` Präfix dargestellt und resultiert in den `lv*` viewport-Prozent-Einheiten. Die Größen der großen viewport-Prozent-Einheiten sind festgelegt und daher stabil, es sei denn, das Ansichtsfenster selbst wird in der Größe geändert.

- **Dynamische Ansichtsfenster-Einheiten**

  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch in Reaktion auf dynamisch erweiternde oder zurückziehende Browser-Oberflächen dimensioniert wird, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es, dass der von Ihnen entworfene Inhalt genau innerhalb des Ansichtsfensters passt, unabhängig von der Anwesenheit dynamischer Browser-Oberflächen.

    Die dynamische Ansichtsfenstereinheit wird durch das `dv` Präfix dargestellt und resultiert in den `dv*` viewport-Prozent-Einheiten. Die Größen der dynamischen viewport-Prozent-Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Obwohl die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von viewport-Prozent-Einheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass sich der Inhalt während des Scrollens einer Seite mit ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard-Ansichtsfenster-Einheiten**

  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden viewport-Prozent-Einheit könnte der viewport-Prozent-Einheit basierend auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischenstufe zwischen den beiden oder der dynamischen Ansichtsfenstergröße entsprechen.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-viewport-Prozent-Einheit für die Höhe (`vh`) implementieren, die der großen viewport-Prozent-Höheneinheit (`lvh`) entspricht. In diesem Fall könnte dies den Inhalt eines Vollbilds verdecken, während die Browser-Oberfläche erweitert wird. Derzeit sind alle Standard-viewport-Einheiten (`vh`, `vw`, etc.) äquivalent zu ihren großen Ansichtsfenster-Gegenstücken (`lvh`, `lvw`, etc.).

Viewport-Prozentlängen definieren `<length>` Werte in Prozent relativ zur Größe des initialen [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen umgebenden Blocks geändert wird, skalieren die Elemente, die auf ihnen basieren, entsprechend. Es gibt eine viewport-Prozentlängeneinheit-Variante, die jedem der Ansichtsfenstergrößen entspricht, wie unten beschrieben.

> [!NOTE]
> Ansichtsfensterlängen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` entspricht 1% der Ansichtsfenster-Höhe. Zum Beispiel, wenn die Ansichtsfenster-Höhe `300px` ist, dann ist ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die jeweiligen viewport-Prozent-Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` ist gleichwertig mit `lvh`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` entspricht 1% der Ansichtsfenster-Breite. Zum Beispiel, wenn die Ansichtsfenster-Breite `800px` ist, dann ist ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden viewport-Prozent-Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist gleichwertig mit `lvw`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

- `vmax`

  - : Repräsentiert in Prozent den größten der Werte `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden viewport-Prozent-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist gleichwertig mit `lvmax`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten der Werte `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden viewport-Prozent-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist gleichwertig mit `lvmin`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-Prozent-Einheiten `svb`, `lvb` und `dvb`.
    `vb` ist gleichwertig mit `lvb`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die jeweiligen viewport-Prozent-Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist gleichwertig mit `lvi`, was die viewport-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße darstellt.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mit Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden. Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragencontainers an. Komponenten, die Einheiten von Länge relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfrage-Längeneinheit standardmäßig auf die [kleine Ansichtsfenster-Einheit](#small_viewport_units) für diese Achse gesetzt (`sv*`).

Für weitere Informationen, siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragencontainers. `1cqw` entspricht 1% der Breite des Abfragencontainers. Zum Beispiel, wenn die Breite des Abfragencontainers `800px` ist, dann ist ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragencontainers. `1cqh` entspricht 1% der Höhe des Abfragencontainers. Zum Beispiel, wenn die Höhe des Abfragencontainers `300px` ist, dann ist ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragencontainers. `1cqi` entspricht 1% der Inline-Größe des Abfragencontainers. Zum Beispiel, wenn die Inline-Größe des Abfragencontainers `800px` ist, dann ist ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragencontainers. `1cqb` entspricht 1% der Blockgröße des Abfragencontainers. Zum Beispiel, wenn die Blockgröße des Abfragencontainers `300px` ist, dann ist ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder Blockgröße des Abfragencontainers. `1cqmin` entspricht 1% des kleineren Wertes entweder der Inline-Größe oder Blockgröße des Abfragencontainers. Zum Beispiel, wenn die Inline-Größe des Abfragencontainers `800px` ist und seine Blockgröße `300px`, dann ist ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder Blockgröße des Abfragencontainers. `1cqmax` entspricht 1% des größeren Wertes entweder der Inline-Größe oder Blockgröße des Abfragencontainers. Zum Beispiel, wenn die Inline-Größe des Abfragencontainers `800px` ist und seine Blockgröße `300px`, dann ist ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie etwa beim Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkel-Einheit** gebunden wird und dann die anderen relativ dazu definiert werden. Physische Einheiten sind `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung wird unterschiedlich bei Geräten mit niedriger Auflösung wie Bildschirmen und Geräten mit hoher Auflösung wie Druckern durchgeführt.

Bei Geräten mit niedriger dpi stellt die Einheit `px` das physische _Referenzpixel_ dar; andere Einheiten werden relativ dazu definiert. Daher ist `1in` als `96px` definiert, was `72pt` entspricht. Die Folge dieser Definition ist, dass bei solchen Geräten Abmessungen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben werden, nicht unbedingt der Größe der physischen Einheit mit dem gleichen Namen entsprechen.

Bei Geräten mit hoher dpi entsprechen Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) den physischen Gegenstücken. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres {{Glossary("user_agent", "User-Agents")}}, um den Text lesbarer zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und nicht gemäß Benutzereinstellungen skalieren. Aus diesem Grund sollten relative Längen (wie `em` oder `rem`) bei der Einstellung der `font-size` bevorzugt werden.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Doch für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden Werte des `<length>` Datentyps als reale, Gleitkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verknüpft ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel stellt ein Eingabefeld bereit, in das Sie einen `<length>` Wert (z.B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste zu setzen, die darunter erscheint, sobald Sie die <kbd>Enter</kbd> oder die <kbd>Return</kbd>-Taste gedrückt haben.

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
- [CSS: Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
