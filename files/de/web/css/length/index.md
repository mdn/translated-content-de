---
title: \<length>
slug: Web/CSS/length
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendbar sind, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Raum zwischen der Nummer und dem Einheit-Literal. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) einer Länge (_spezifizierte Länge_) wird durch ihre Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, die zu einer absoluten Länge aufgelöst wird, und ihre Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung im Verhältnis zu einer anderen Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie für ihr übergeordnetes Element spezifiziert; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS-relative Längeneinheiten basieren auf Schrift-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schrift

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der aktuell in einem Element oder seinem übergeordneten Element geltenden Schrift.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelverwandte `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Kappenhöhe" (nominale Höhe der Großbuchstaben) der Schrift des Elements {{Cssxref("font")}}.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Voranschrittmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der Schrift des Elements {{Cssxref("font")}}.
    In Fällen, in denen die Bestimmung des Maßes des `0`-Glyphen unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit bei `1em` Höhe ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der Schrift des Elements {{Cssxref("font")}}. In Schriften mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Voranschrittmaß")}} des "水"-Glyphen (CJK Wasser-Ideograph, U+6C34), das in der Schrift verwendet wird, um es darzustellen.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, konvertiert in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Schriftgrad des Wurzelelements

Schriftzeichen-relativ zum Wurzelelement Längeneinheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzel-](/de/docs/Web/CSS/:root) Elements:

- `rcap`
  - : Entspricht der "Kappenhöhe" (nominale Höhe der Großbuchstaben) der Schrift des Wurzelelements {{Cssxref("font")}}.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Voranschrittmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der Schrift des Wurzelelements {{Cssxref("font")}}.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der Schriftgröße des Wurzelelements {{Cssxref("font-size")}} verwendet wird, stellt es den ursprünglichen Wert dar. Ein üblicher Standardwert der Browser ist `16px`, aber benutzerdefinierte Präferenzen können diese ändern.
- `rex`
  - : Repräsentiert die x-Höhe der Schrift des Wurzelelements {{Cssxref("font")}}.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit in der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit in der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenkästen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die **Ansichtsfenster-Prozentlängeneinheiten** basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und Standard. Die Berücksichtigung der unterschiedlichen Ansichtsfenstergrößen reagiert auf dynamisch erweiternde und einziehende Browser-Oberflächen sowie auf das Verbergen und Anzeigen des darunterliegenden Inhalts.

- **Kleine Ansichtsfenstereinheiten**
  - : Wenn Sie das kleinstmögliche Ansichtsfenster in Reaktion auf dynamisch erweiternde Browser-Oberflächen wünschen, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht, dass der von Ihnen gestaltete Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Oberflächen erweitert sind. Die Wahl dieser Größe kann möglicherweise auch leere Räume hinterlassen, wenn die Browser-Oberflächen wieder eingezogen werden.

    Zum Beispiel wird ein mit einem anhand der kleinen Ansichtsfenstergröße bemessenen Ansichtsfenster-Prozentwert bemessenes Element den Bildschirm perfekt ausfüllen, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browser-Oberflächen angezeigt werden. Wenn jedoch diese Browser-Oberflächen ausgeblendet sind, kann jedoch zusätzlicher Raum um das Element sichtbar werden. Die kleinen Ansichtsfenster-Prozent-Werte sind daher allgemein "sicherer" zu verwenden, erzeugen jedoch möglicherweise kein ansprechendstes Layout, nachdem ein Benutzer mit der Seite zu interagieren begonnen hat.

    Die kleine Ansichtsfenstergröße wird durch das `sv`-Präfix repräsentiert und resultiert in den `sv*` Ansichtsfenster-Prozentlängen-Einheiten. Die Größen der kleinen Ansichtsfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Große Ansichtsfenstereinheiten**
  - : Wenn Sie das größtmögliche Ansichtsfenster in Antwort auf dynamisch einziehende Browser-Oberflächen wünschen, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht, dass der von Ihnen gestaltete Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Oberflächen eingezogen sind. Sie müssen beachten, dass der Inhalt verborgen werden könnte, wenn die Browser-Oberflächen erweitert werden.

    Zum Beispiel auf Mobiltelefonen, bei denen Bildschirmplatz kostbar ist, verbergen Browser oft einen Teil oder das gesamte Titel- und Adressfeld, nachdem ein Benutzer begonnen hat, auf der Seite zu scrollen. Wenn ein Element mit einer auf der großen Ansichtsfenstergröße basierenden Ansichtsfenster-Prozent-Einheit bemessen wird, wird der Inhalt des Elements die gesamte sichtbare Seite ausfüllen, wenn diese wieder einziehbaren Browser-Oberflächen verborgen sind. Wenn diese jedoch angezeigt werden, können sie den Inhalt überdecken, der mit diesen _großen_ Ansichtsfenster-Prozent-Einheiten bemessen oder positioniert ist.

    Die große Ansichtsfenstereinheit wird durch das `lv`-Präfix repräsentiert und resultiert in den `lv*` Ansichtsfenster-Prozent-Einheiten. Die Größen der großen Ansichtsfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Dynamische Ansichtsfenstereinheiten**
  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch in Reaktion auf dynamisch erweiternde oder einziehende Browser-Oberflächen bemessen wird, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht es, dass der von Ihnen gestaltete Inhalt genau in das Ansichtsfenster passt, unabhängig vom Vorhandensein dynamischer Browser-Oberflächen.

    Die dynamische Ansichtsfenstereinheit wird durch das `dv`-Präfix repräsentiert und resultiert in den `dv*` Ansichtsfenster-Prozent-Einheiten. Die Größen der dynamischen Ansichtsfenster-Prozent-Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Ansichtsfenster-Prozent-Einheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass sich der Inhalt während des Scrollens einer Seite durch den Benutzer ändert. Dies kann die Benutzeroberfläche verschlechtern und zu einem Leistungseinbruch führen.

- **Standard-Ansichtsfenstereinheiten**
  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden Ansichtsfenster-Prozent-Einheit könnte äquivalent zur Ansichtsfenster-Prozent-Einheit basierend auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischengröße zwischen beiden oder der dynamischen Ansichtsfenstergröße sein.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Ansichtsfenster-Prozent-Einheit für die Höhe (`vh`) implementieren, die der großen Ansichtsfenster-Prozent-Höhen-Einheit (`lvh`) entspricht. Wenn dem so ist, könnte dies den Inhalt auf einer Vollseitenanzeige verdecken, während die Browser-Oberfläche erweitert ist. Derzeit sind alle Standard-Ansichtsfenstereinheiten (`vh`, `vw`, etc.) gleichwertig zu ihren großen Ansichtsfenster-Gegenstücken (`lvh`, `lvw`, etc.).

Ansichtsfenster-Prozentsätze definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf der Größe des {{Glossary("viewport", "Ansichtsfensters")}} oder des Seitenbereichs basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Umfassungsblocks geändert wird, werden die darauf basierten Elemente entsprechend skaliert. Es gibt für jede der Ansichtsfenstergrößen eine Ansichtsfenster-Prozentlängen-Einheitsvariante, wie nachfolgend beschrieben.

> [!NOTE]
> Ansichtsfenster-Längen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`
  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Wenn beispielsweise die Ansichtsfensterhöhe `300px` beträgt, dann ist ein Wert von `70vh` auf einer Eigenschaft `210px`.

    Die entsprechenden Ansichtsfenster-Prozent-Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` ist gleichwertig zu `lvh`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vw`
  - : Repräsentiert einen Prozentsatz der Breite des initialen [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Wenn beispielsweise die Ansichtsfensterbreite `800px` beträgt, dann ist ein Wert von `50vw` auf einer Eigenschaft `400px`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist gleichwertig zu `lvw`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vmax`
  - : Repräsentiert prozentual die größte von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist gleichwertig zu `lvmax`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vmin`
  - : Repräsentiert prozentual die kleinste von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist gleichwertig zu `lvmin`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vb`
  - : Repräsentiert den Prozentsatz der Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svb`, `lvb` und `dvb`.
    `vb` ist gleichwertig zu `lvb`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

- `vi`
  - : Repräsentiert einen Prozentsatz der Größe des initialen [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Inlineachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist gleichwertig zu `lvi`, was die Ansichtsfenster-Prozentlängeneinheit basierend auf der großen Ansichtsfenstergröße repräsentiert.

### Containerabfrage-Längeneinheiten

Bei der Anwendung von Stilen auf einen Container unter Verwendung von Containerabfragen können Containerabfrage-Längeneinheiten verwendet werden.
Diese Einheiten spezifizieren eine Länge relativ zu den Dimensionen eines Abfragecontainers.
Komponenten, die Einheiten einer Länge relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, fällt die Containerabfrage-Längeneinheit standardmäßig auf die [kleine Ansichtsfenstereinheit](#small_viewport_units) für diese Achse (`sv*`) zurück.

Weitere Informationen finden Sie unter [Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`
  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Wenn z.B. die Breite des Abfragecontainers `800px` beträgt, dann wird ein Wert von `50cqw` auf einer Eigenschaft `400px` sein.

- `cqh`
  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Wenn z.B. die Höhe des Abfragecontainers `300px` beträgt, dann wird ein Wert von `10cqh` auf einer Eigenschaft `30px` sein.

- `cqi`
  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Wenn z.B. die Inline-Größe des Abfragecontainers `800px` beträgt, dann wird ein Wert von `50cqi` auf einer Eigenschaft `400px` sein.

- `cqb`
  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Wenn z.B. die Blockgröße des Abfragecontainers `300px` beträgt, dann wird ein Wert von `10cqb` auf einer Eigenschaft `30px` sein.

- `cqmin`
  - : Repräsentiert einen Prozentsatz des kleineren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Wenn z.B. die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmin` auf einer Eigenschaft `150px` sein.

- `cqmax`
  - : Repräsentiert einen Prozentsatz des größeren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Werts entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Wenn z.B. die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmax` auf einer Eigenschaft `400px` sein.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, z.B. für Drucklayouts. Dies wird erreicht, indem eine der Einheiten an eine **physische Einheit** oder die **visuelle Winkelgröße** verankert und die anderen relativ dazu definiert werden. Physische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px` und `Q`. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, im Vergleich zu Geräten mit hoher Auflösung, wie Druckern.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten sind relativ dazu definiert. So wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten die in Zoll (`in`), Zentimeter (`cm`) oder Millimeter (`mm`) beschriebenen Dimensionen nicht unbedingt der Größe der physischen Einheit mit demselben Namen entsprechen.

Für Geräte mit hoher DPI sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) dieselben wie ihre physischen Gegenstücke. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die standardmäßige Schriftgröße ihrer {{Glossary("user_agent", "User-Agent")}}, um den Text lesbarer zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und sich nicht nach Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie relative Längen (wie `em` oder `rem`) bevorzugen, wenn Sie die `font-size` einstellen.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Allerdings bedeutet dies für _Drucker_ und _Bildschirme mit hoher Auflösung_, dass ein CSS-Pixel mehrere Gerätepixel impliziert. `1px` = `1in / 96`.
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

Bei Animationen werden Werte des `<length>`-Datentyps als reelle, gleitkommagenaue Zahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die der Animation zugeordnet ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in dem Sie einen `<length>`-Wert eingeben können (z.B. `300px`, `50%`, `30vw`), um die Breite eines Ergebnisbalkens festzulegen, der unterhalb erscheint, sobald Sie die <kbd>Enter</kbd> oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht es Ihnen, die Effekte unterschiedlicher Längeneinheiten zu vergleichen und gegenüberzustellen.

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
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
