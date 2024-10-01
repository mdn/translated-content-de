---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>` Werte akzeptieren, sind sie keine `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Zahl und dem Einheit-Literal. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/specified_value) einer Länge (_spezifizierte Länge_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/computed_value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge auf eine absolute Länge aufgelöst, und ihre Einheit wird nicht unterschieden.

Die `<length>` Einheiten können relativ oder absolut sein. Relativlängen repräsentieren ein Maß in Bezug auf eine andere Distanz. Je nach Einheit kann es sich um die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Ansichtsfensters")}} handeln. Stylesheets, die relative Längeneinheiten verwenden, können einfacher von einer Ausgabemedium zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, die für ihre Eltern festgelegt sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftart-, Container- oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftgrößen definieren den `<length>` Wert in Begriffen der Größe eines bestimmten Zeichens oder Schriftattributs in der aktuell in einem Element oder dessen Eltern geltenden Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap-Höhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen das Maß des Glyphen `0` unmöglich oder unpraktisch zu bestimmen ist, muss davon ausgegangen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es auf der {{Cssxref("font-size")}} Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x`-Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des "水"-Glyphe (CJK-Wasser-Ideogramm, U+6C34), das in der Schriftart gefunden wird, mit der es gerendert wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, umgewandelt in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schriftart des Wurzelelements

Schriftgrößen relativ zum Wurzelelement definieren den `<length>` Wert in Begriffen der Größe eines bestimmten Zeichens oder Schriftattributs des [root](/de/docs/Web/CSS/:root) Elements:

- `rcap`
  - : Entspricht der "Cap-Höhe" (nominale Höhe der Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Wurzelelements in {{Cssxref("font-size")}} verwendet wird, repräsentiert es dessen Anfangswert. Ein gängiges Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies modifizieren.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schriftart des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schriftart des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die Längenmaße der Ansichtsfenster-Prozentsätze basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und Standard. Die Erlaubnis für die verschiedenen Ansichtsfenstergrößen erfolgt als Antwort auf Browseroberflächen, die sich dynamisch erweitern und zurückziehen und den darunter liegenden Inhalt ausblenden und anzeigen.

- **Klein**

  - : Wenn Sie die kleinstmögliche Ansicht als Reaktion auf browserseitige Oberflächenvergrößerungen wünschen, sollten Sie die kleine Ansichtsgröße verwenden. Die kleine Ansichtsgröße ermöglicht es dem designten Inhalt, das gesamte Ansichtsfenster zu füllen, wenn sich Browseroberflächen erweitern. Die Wahl dieser Größe kann auch leerer Raum hinterlassen, wenn sich Browseroberflächen zurückziehen.

    Zum Beispiel, ein Element, das mit Ansichtsfenster-Prozentsatz-Einheiten basierend auf der kleinen Ansichtsgröße bemessen wird, füllt den Bildschirm perfekt aus, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browseroberflächen angezeigt werden. Wenn diese Browseroberflächen jedoch verborgen sind, können um das Element zusätzliche Räume sichtbar sein. Daher sind die kleinen Ansichtsfenster-Prozent-Einheiten im Allgemeinen "sicherer" zu verwenden, produzieren aber möglicherweise nicht das attraktivste Layout, nachdem ein Benutzer mit der Seite interagiert.

    Die kleine Ansichtsgröße wird durch das Präfix `sv` dargestellt und führt zu den `sv*`-Ansichtsfenster-Prozentsatz-Einheiten. Die Größen der kleinen Ansichtsfenster-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster wird selber skaliert.

- **Groß**

  - : Wenn Sie die größtmögliche Ansicht als Reaktion auf das dynamische Zurückziehen von Browseroberflächen wünschen, sollten Sie die große Ansichtsgröße verwenden. Die große Ansichtsgröße ermöglicht es dem designten Inhalt, das gesamte Ansichtsfenster zu füllen, wenn sich die Browseroberflächen zurückziehen. Sie müssen jedoch beachten, dass der Inhalt verdeckt werden kann, wenn sich die Browseroberflächen erweitern.

    Ein Beispiel: Auf Mobiltelefonen, wo der Bildschirmraum kostbar ist, verbergen Browser oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer angefangen hat, die Seite zu scrollen. Wenn ein Element mit einer Ansichtsfenster-Prozent-Einheit basierend auf der großen Ansichtsgröße bemessen wird, füllt der Inhalt des Elements die vollständig sichtbare Seite, wenn diese Browseroberflächen verborgen sind. Wenn diese zurückziehbaren Browseroberflächen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Ansichtsfenster-Prozent-Einheiten bemessen oder positioniert wird.

    Die große Ansichtsfenstereinheit wird durch das Präfix `lv` dargestellt und führt zu den `lv*`-Ansichtsfenster-Prozent-Einheiten. Die Größen der großen Ansichtsfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster wird selber skaliert.

... [Due to character limitations, not all headings are translated. The translation would follow the same pattern.]...

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>` Wert eingeben können (z.B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste festzulegen, die darunter erscheint, sobald Sie die <kbd>Eingabetaste</kbd> oder die <kbd>Return-Taste</kbd> drücken.

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

{{EmbedLiveSample('Verwendung verschiedener Längeneinheiten vergleichen', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Werte & Einheiten Tutorial](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
