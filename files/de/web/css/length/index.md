---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie z.B. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}} Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>` Werte akzeptieren, sind sie selbst keine `<length>` Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Abmessungen gibt es keinen Abstand zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>` Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified-value) einer Länge (_spezifizierte Länge_) wird durch seine Menge und Einheit repräsentiert. Der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) einer Länge (_berechnete Länge_) ist die spezifizierte Länge, aufgelöst zu einer absoluten Länge, wobei die Einheit nicht unterschieden wird.

Die `<length>` Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung in Bezug auf eine andere Distanz. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height), oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabewelt in eine andere skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, die für ihr übergeordnetes Element angegeben sind; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schrift-, Container- oder Viewportgrößen.

### Relative Längeneinheiten basierend auf Schriften

Schriftlängen definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder eines Schriftattributes in der aktuell in einem Element oder seinem Elternelement wirkenden Schriftart.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und der wurzelrelative `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, selbst wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap Height" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "Vorschubmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen die Bestimmung des Maßen des `0` Glyphen unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Bei Verwendung in der {{Cssxref("font-size")}} Eigenschaft selbst, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [X-Höhe](https://de.wikipedia.org/wiki/X-H%C3%B6he) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x` Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schrift; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "Vorschubmaß")}} des "水" Glyphen (CJK-Wasser-Ideograph, U+6C34), wie es in der Schrift gefunden wird, die zum Rendern verwendet wurde.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}} Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Wurzelelement-Schriften-relative Längeneinheiten definieren den `<length>` Wert in Bezug auf die Größe eines bestimmten Zeichens oder eines Schriftattributes des [Wurzelelements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap Height" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "Vorschubmaß")}} des Glyphen `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn innerhalb der {{Cssxref("font-size")}} des Wurzelelements verwendet, repräsentiert es dessen Anfangswert. Ein üblicher Browser-Standard ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die X-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schrift des Wurzelelements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schrift des Wurzelelements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt abweichen.

### Relative Längeneinheiten basierend auf dem Viewport

Die **Viewport-Prozentsatz Längeneinheiten** basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und standard. Die Zulassung für die verschiedenen Viewport-Größen erfolgt als Reaktion auf Browser-Schnittstellen, die sich dynamisch ausdehnen und zurückziehen, und die darunter liegenden Inhalte ausblenden und anzeigen.

- **Kleine Viewport-Einheiten**

  - : Wenn Sie die kleinste mögliche Viewport-Größe in Reaktion auf Browser-Schnittstellen verwenden möchten, die sich dynamisch ausdehnen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es den von Ihnen entworfenen Inhalten, den gesamten Viewport auszufüllen, wenn die Browser-Schnittstellen erweitert werden. Diese Auswahl kann auch möglicherweise leere Räume hinterlassen, wenn die Browser-Schnittstellen zurückgezogen werden.

    Zum Beispiel wird ein Element, dessen Größe mit Viewport-Prozentsatz-Einheiten basierend auf der kleinen Viewport-Größe definiert ist, den Bildschirm perfekt ausfüllen, ohne dass sein Inhalt verdeckt wird, wenn alle dynamischen Browser-Schnittstellen angezeigt werden. Wenn diese Browser-Schnittstellen jedoch verborgen sind, könnte zusätzlicher Raum um das Element sichtbar sein. Daher sind die kleinen Viewport-Prozentsatz-Einheiten im Allgemeinen "sicherer" zu verwenden, ergeben aber möglicherweise nicht das attraktivste Layout, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das `sv` Präfix dargestellt und ergibt die `sv*` Viewport-Prozentsatz Längeneinheiten. Die Größen der kleinen Viewport-Prozentsatz Einheiten sind fix und damit stabil, es sei denn, der Viewport wird selbst neu dimensioniert.

- **Große Viewport-Einheiten**

  - : Wenn Sie die größte mögliche Viewport-Größe in Reaktion auf dynamisch zurückziehende Browser-Schnittstellen verwenden möchten, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es den von Ihnen gestalteten Inhalten, den gesamten Viewport zu füllen, wenn die Browser-Schnittstellen zurückgezogen werden. Sie müssen sich bewusst sein, dass der Inhalt ausgeblendet werden könnte, wenn die Browser-Schnittstellen erweitert werden.

    Zum Beispiel verbergen Browser auf Mobiltelefonen, auf denen Bildschirmressourcen begrenzt sind, oft einen Teil oder die gesamte Titelzeile und Adressleiste, nachdem ein Benutzer angefangen hat, die Seite zu scrollen. Wenn ein Element mit einer Viewport-Prozentsatz Einheit basierend auf der großen Viewport-Größe dimensioniert wird, wird der Inhalt des Elements die gesamte sichtbare Seite füllen, wenn diese Browser-Schnittstellen versteckt sind. Wenn diese zurückziehbaren Browser-Schnittstellen jedoch angezeigt werden, können sie den Inhalt, der mit den _großen_ Viewport-Prozentsatz Einheiten dimensioniert oder positioniert ist, verbergen.

    Die große Viewport-Einheit wird durch das `lv` Präfix dargestellt und ergibt die `lv*` Viewport-Prozentsatz Einheiten. Die Größen der großen Viewport-Prozentsatz Einheiten sind fix und damit stabil, es sei denn, der Viewport wird selbst neu dimensioniert.

- **Dynamische Viewport-Einheiten**

  - : Wenn Sie möchten, dass der Viewport automatisch in Reaktion auf dynamisch ausdehnende oder zurückziehende Browser-Schnittstellen dimensioniert wird, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht den von Ihnen gestalteten Inhalten, genau innerhalb des Viewports zu passen, unabhängig von der Anwesenheit dynamiusernamecher Browser-Schnittstellen.

    Die dynamische Viewport-Einheit wird durch das `dv` Präfix dargestellt und ergibt die `dv*` Viewport-Prozentsatz-Einheiten. Die Größen der dynamischen Viewport-Prozentsatz Einheiten sind nicht stabil, selbst wenn der Viewport unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozentsatz Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass der Inhalt während des Scrollens einer Seite durch einen Benutzer die Größe ändert. Dies kann zu einer Verschlechterung der Benutzeroberfläche führen und die Leistung beeinträchtigen.

- **Standard-Viewport-Einheiten**

  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozentsatz Einheit könnte äquivalent zu der Viewport-Prozentsatz Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe sein.

    > [!NOTE]
    > Ein Beispiel könnte sein, dass ein Browser die Standard-Viewport-Prozentsatz Einheit für die Höhe (`vh`) implementiert, die der großen Viewport-Prozentsatz Höhe Einheit (`lvh`) entspricht. Dadurch könnte dies den Inhalt auf einer Vollbildanzeige verdecken, während die Browser-Schnittstellen erweitert sind. Derzeit sind alle Standard-Viewport-Einheiten (`vh`, `vw`, etc.) äquivalent zu ihren großen Viewport-Gegenstücken (`lvh`, `lvw`, etc.).

Viewport-Prozentsatz Längen definieren `<length>` Werte in Prozent relativ zur Größe des initialen [Einschlussblocks](/de/docs/Web/CSS/CSS_display/Containing_block), der wiederum auf entweder der Größe des {{Glossary("viewport", "Viewports")}} oder dem Seitenbereich basiert, d.h. dem sichtbaren Teil des Dokuments. Wenn die Höhe oder Breite des initialen Einschlussblocks geändert wird, werden die darauf basierenden Elementgrößen entsprechend skaliert. Es gibt eine Viewport-Prozentsatz Längeneinheit Variante entsprechend jeder der Viewport-Größen, wie unten beschrieben.

> [!NOTE]
> Viewport-Längen sind in {{cssxref("@page")}} Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [Einschlussblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vh` ist 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` beträgt, dann wird ein Wert von `70vh` auf einer Eigenschaft `210px` sein.

    Die entsprechenden Viewport-Prozentsatz Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` ist äquivalent zu `lvh` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [Einschlussblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Viewports. `1vw` ist 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` beträgt, dann wird ein Wert von `50vw` auf einer Eigenschaft `400px` sein.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentsatz Einheiten `svw`, `lvw` und `dvw`.
    `vw` ist äquivalent zu `lvw` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

- `vmax`

  - : Repräsentiert in Prozent den größten von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentsatz Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` ist äquivalent zu `lvmax` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten von `vw` und `vh`.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentsatz Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` ist äquivalent zu `lvmin` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [Einschlussblocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentsatz Einheiten `svb`, `lvb` und `dvb` respektive.
    `vb` ist äquivalent zu `lvb` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [Einschlussblocks](/de/docs/Web/CSS/CSS_display/Containing_block) in der Richtung der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Für kleine, große und dynamische Viewport-Größen sind die entsprechenden Viewport-Prozentsatz Einheiten `svi`, `lvi` und `dvi`.
    `vi` ist äquivalent zu `lvi` und repräsentiert die Viewport-Prozentsatz Längeneinheit basierend auf der großen Viewport-Größe.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile mithilfe von Container-Abfragen auf einen Container anwenden, können Sie Container-Abfrage Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längswerte neu berechnet werden müssen.
Weitere Informationen finden Sie unter [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` beträgt, dann wird ein Wert von `50cqw` auf einer Eigenschaft `400px` sein.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` beträgt, dann wird ein Wert von `10cqh` auf einer Eigenschaft `30px` sein.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` beträgt, dann wird ein Wert von `50cqi` auf einer Eigenschaft `400px` sein.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` beträgt, dann wird ein Wert von `10cqb` auf einer Eigenschaft `30px` sein.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes von entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes von entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmin` auf einer Eigenschaft `150px` sein.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes von entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes von entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` beträgt, dann wird ein Wert von `50cqmax` auf einer Eigenschaft `400px` sein.

## Absolute Längeneinheiten

**Absolute Längeneinheiten** repräsentieren eine physikalische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie z.B. beim Drucklayout. Dies geschieht durch Verankerung einer der Einheiten an eine **physikalische Einheit** oder die **visuelle Winkeleinheit**, und dann die anderen relativ dazu zu definieren. Physikalische Einheiten umfassen `cm`, `in`, `mm`, `pc`, `pt`, `px`, und `Q`. Die Verankerung wird unterschiedlich für Niedrig-Auflösung Geräte wie Bildschirme und Hoch-Auflösung Geräte wie Drucker durchgeführt.

Für Geräte mit niedriger DPI repräsentiert die Einheit `px` das physikalische _Referenzpixel_; andere Einheiten sind relativ dazu definiert. Somit ist `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Abmessungen, die in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschrieben werden, nicht notwendigerweise mit der Größe der physischen Einheit mit demselben Namen übereinstimmen.

Für Geräte mit hoher DPI entsprechen Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) ihren physikalischen Gegenstücken. Daher wird die `px`-Einheit relativ dazu definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer vergrößern die Standard-Schriftgröße ihres {{Glossary("user_agent", "Benutzeragenten")}}, um den Text leichter lesbar zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und sich nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie bei der Einstellung der `font-size` relative Längen (wie `em` oder `rem`) bevorzugen.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein {{Glossary("device_pixel", "Gerätepixel")}} (Punkt). Bei _Druckern_ und _Bildschirmen mit hoher Auflösung_ impliziert ein CSS-Pixel mehrere Gerätepixel. `1px` = `1in / 96`.
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

Wenn animiert, werden die Werte des `<length>` Datentyps als echte Fließkommazahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt auf dem berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verknüpfte [Abschwächungsfunktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Verschiedene Längeneinheiten vergleichen

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>` Wert eingeben können (z.B. `300px`, `50%`, `30vw`), um die Breite einer Ergebnisleiste festzulegen, die darunter angezeigt wird, sobald Sie die <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste gedrückt haben.

Dies ermöglicht Ihnen, die Auswirkungen verschiedener Längeneinheiten zu vergleichen und gegenüberzustellen.

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

{{EmbedLiveSample('Verschiedene Längeneinheiten vergleichen', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model)
