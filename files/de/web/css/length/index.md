---
title: "`<length>`"
slug: Web/CSS/length
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen derselben Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und dem Einheitenliteral. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [angegebene Wert](/de/docs/Web/CSS/specified_value) einer Länge (_angegebene Länge_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/computed_value) einer Länge (_berechnete Länge_) ist die angegebene Länge, auf eine absolute Länge aufgelöst, und seine Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen stellen eine Messung in Bezug auf eine andere Distanz dar. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des {{Glossary("viewport", "Viewports")}} sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabetumgebung zu einer anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihr Elternelement festgelegt wurden; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftartgrößen, Containergrößen oder Viewport-Größen.

### Relative Längeneinheiten basierend auf der Schriftart

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der aktuell wirksamen Schriftart in einem Element oder seinem Elternteil.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das wurzelrelativ `rem`, werden oft verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite auch dann beibehalten, wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap-Höhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Elements.
- `ch`
  - : Repräsentiert die Breite oder, genauer gesagt, das {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Elements.
    In Fällen, in denen die Bestimmung der Maßnahme des `0`-Glyphs unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es bei der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der {{Cssxref("font")}} des Elements. In Schriften mit dem `x`-Buchstaben ist dies im Allgemeinen die Höhe der Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriften.
- `ic`
  - : Entspricht dem verwendeten {{Glossary("advance_measure", "advance measure")}} des "水"-Glyphs (CJK-Wasser-Ideogramm, U+6C34), das in der Schriftart gefunden wird, die es rendert.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, umgerechnet auf eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Wurzelelements

Wurzelelement-Schrift-relativ Längeneinheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs des [root](/de/docs/Web/CSS/:root)-Elements:

- `rcap`
  - : Entspricht der "Cap-Höhe" (nominale Höhe von Großbuchstaben) der {{Cssxref("font")}} des Wurzelelements.
- `rch`
  - : Entspricht der Breite oder dem {{Glossary("advance_measure", "advance measure")}} des Glyphs `0` (Null, das Unicode-Zeichen U+0030) in der {{Cssxref("font")}} des Wurzelelements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Wurzelelements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb der Wurzelelement-{{Cssxref("font-size")}} verwendet wird, repräsentiert es dessen Anfangswert. Ein typischer Browser-Standardwert ist `16px`, aber benutzerdefinierte Präferenzen können dies ändern.
- `rex`
  - : Repräsentiert die x-Höhe der {{Cssxref("font")}} des Wurzelelements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic)-Einheit auf dem Wurzelelement.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh)-Einheit auf dem Wurzelelement. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Viewport

Die Viewport-Prozentsatz-Längeneinheiten basieren auf vier verschiedenen Viewport-Größen: klein, groß, dynamisch und Standard. Die Zulassung für die verschiedenen Viewport-Größen erfolgt als Reaktion auf dynamisch expandierende und zurückziehende Browser-Schnittstellen, die Inhalte darunter ein- und ausblenden.

- **Klein**

  - : Wenn Sie die kleinstmögliche Viewport-Größe in Reaktion auf dynamisch expandierende Browser-Schnittstellen wünschen, sollten Sie die kleine Viewport-Größe verwenden. Die kleine Viewport-Größe ermöglicht es den von Ihnen gestalteten Inhalten, den gesamten Viewport zu füllen, wenn die Browser-Schnittstellen erweitert werden. Die Wahl dieser Größe kann möglicherweise auch leere Räume lassen, wenn die Browser-Schnittstellen zurückgezogen werden.

    Zum Beispiel wird ein Element, das mit Viewport-Prozentsatz-Einheiten basierend auf der kleinen Viewport-Größe dimensioniert ist, den Bildschirm perfekt füllen, ohne dass einer seiner Inhalte verdeckt wird, wenn alle dynamischen Browser-Schnittstellen angezeigt werden. Wenn diese Browser-Schnittstellen jedoch versteckt sind, könnte zusätzlicher Platz um das Element sichtbar sein. Daher sind die kleinen Viewport-Prozentsatz-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout erzeugen, nachdem ein Benutzer angefangen hat, mit der Seite zu interagieren.

    Die kleine Viewport-Größe wird durch das Präfix `sv` dargestellt und resultiert in den `sv*` Viewport-Prozentsatz-Längeneinheiten. Die Größen der kleinen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird angepasst.

- **Groß**

  - : Wenn Sie die größtmögliche Viewport-Größe in Reaktion auf dynamisch zurückziehende Browser-Schnittstellen wünschen, sollten Sie die große Viewport-Größe verwenden. Die große Viewport-Größe ermöglicht es den von Ihnen gestalteten Inhalten, den gesamten Viewport zu füllen, wenn die Browser-Schnittstellen zurückgezogen werden. Sie müssen sich bewusst sein, dass Inhalte möglicherweise versteckt werden, wenn die Browser-Schnittstellen erweitert werden.

    Zum Beispiel auf Mobiltelefonen, wo der Bildschirmplatz begrenzt ist, verbergen Browser oft einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer angefangen hat, die Seite zu scrollen. Wenn ein Element mit einer Viewport-Prozentsatz-Einheit basierend auf der großen Viewport-Größe dimensioniert ist, werden die Inhalte des Elements die gesamte sichtbare Seite füllen, wenn diese Browser-Schnittstellen verborgen sind. Wenn diese einziehbaren Browser-Schnittstellen jedoch angezeigt werden, können sie den Inhalte verdecken, der mit den _großen_ Viewport-Prozentsatz-Einheiten dimensioniert oder positioniert wurde.

    Die große Viewport-Einheit wird durch das Präfix `lv` dargestellt und resultiert in den `lv*` Viewport-Prozentsatz-Einheiten. Die Größen der großen Viewport-Prozentsatz-Einheiten sind fest und daher stabil, es sei denn, der Viewport selbst wird angepasst.

- **Dynamisch**

  - : Wenn Sie möchten, dass der Viewport automatisch angepasst wird als Reaktion auf dynamisch erweiternde oder zurückziehende Browser-Schnittstellen, können Sie die dynamische Viewport-Größe verwenden. Die dynamische Viewport-Größe ermöglicht es den von Ihnen gestalteten Inhalten, genau innerhalb des Viewports zu passen, unabhängig von der Anwesenheit dynamischer Browser-Schnittstellen.

    Die dynamische Viewport-Einheit wird durch das Präfix `dv` dargestellt und resultiert in den `dv*` Viewport-Prozentsatz-Einheiten. Die Größen der dynamischen Viewport-Prozentsatz-Einheiten sind nicht stabil, selbst wenn der Viewport selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Viewport-Größe Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Viewport-Prozentsatz-Einheiten basierend auf der dynamischen Viewport-Größe dazu führen, dass sich die Inhalte in der Größe ändern, während ein Benutzer eine Seite scrollt. Dies kann die Benutzeroberfläche verschlechtern und zu Leistungseinbußen führen.

- **Standard**

  - : Die Standard-Viewport-Größe wird vom Browser definiert. Das Verhalten der resultierenden Viewport-Prozentsatz-Einheit könnte dem der Viewport-Prozentsatz-Einheit basierend auf der kleinen Viewport-Größe, der großen Viewport-Größe, einer Zwischengröße zwischen den beiden oder der dynamischen Viewport-Größe entsprechen.

    > [!NOTE]
    > Zum Beispiel könnte ein Browser die Standard-Viewport-Prozentsatz-Einheit für die Höhe (`vh`) implementieren, die der großen Viewport-Prozentsatz-Höhen-Einheit (`lvh`) entspricht. Wenn ja, könnte dies Inhalte bei einer Vollbildanzeige verdecken, während die Browser-Schnittstelle erweitert wird.

Viewport-Prozentsatz-Längen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/Containing_block), die ihrerseits auf die Größe des {{Glossary("viewport", "Viewports")}} oder den Seitenerstellungsbereich, d.h. den sichtbaren Teil des Dokuments, basieren. Wenn die Höhe oder Breite des initialen enthältenden Blocks geändert wird, werden die Elemente, die darauf basieren, entsprechend skaliert. Es gibt eine Viewport-Prozentsatz-Längeneinheit-Variante, die jeder der beschriebenen Viewports-Größen entspricht.

> [!NOTE]
> Viewport-Längen sind ungültig in {{cssxref("@page")}} Deklarationsblöcken.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des Viewports initialen [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). `1vh` entspricht 1% der Viewport-Höhe. Zum Beispiel, wenn die Viewport-Höhe `300px` ist, dann wird ein Wert von `70vh` bei einer Eigenschaft `210px` sein.

    Die entsprechenden Viewport-Prozentsatz-Einheiten für kleine, große und dynamische Viewport-Größen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des Viewports initialen [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). `1vw` ist 1% der Viewport-Breite. Zum Beispiel, wenn die Viewport-Breite `800px` ist, dann wird ein Wert von `50vw` bei einer Eigenschaft `400px` sein.

    Bei kleinen, großen und dynamischen Viewport-Größen sind die entsprechenden Viewport-Prozentsatz-Einheiten `svw`, `lvw` und `dvw`.
    `vw` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmax`

  - : Repräsentiert prozentual den größten von `vw` und `vh`.

    Bei kleinen, großen und dynamischen Viewport-Größen sind die entsprechenden Viewport-Prozentsatz-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vmin`

  - : Repräsentiert prozentual den kleinsten von `vw` und `vh`.

    Bei kleinen, großen und dynamischen Viewport-Größen sind die entsprechenden Viewport-Prozentsatz-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/Containing_block), in der Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Bei kleinen, großen und dynamischen Viewport-Größen sind die entsprechenden Viewport-Prozentsatz-Einheiten `svb`, `lvb` und `dvb`.
    `vb` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [enthältenden Blocks](/de/docs/Web/CSS/Containing_block), in der Richtung der [Inlineachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Wurzelelements.

    Bei kleinen, großen und dynamischen Viewport-Größen sind die entsprechenden Viewport-Prozentsatz-Einheiten `svi`, `lvi` und `dvi`.
    `vi` repräsentiert die Viewport-Prozentsatz-Längeneinheit basierend auf der Standard-Viewport-Größe des Browsers.

### Container Query Längeneinheiten

Beim Anwenden von Styles auf einen Container mit Container-Anfragen können Sie Container-Query-Längeneinheiten verwenden.
Diese Einheiten spezifizieren eine Länge relativ zu den Dimensionen eines Abfragecontainers.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern verwendbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.
Für mehr Informationen siehe [Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Zum Beispiel, wenn die Breite des Abfragecontainers `800px` ist, dann wird ein Wert von `50cqw` bei einer Eigenschaft `400px` sein.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Zum Beispiel, wenn die Höhe des Abfragecontainers `300px` ist, dann wird ein Wert von `10cqh` bei einer Eigenschaft `30px` sein.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inline-Größe des Abfragecontainers. `1cqi` ist 1% der Inline-Größe des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` ist, dann wird ein Wert von `50cqi` bei einer Eigenschaft `400px` sein.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Blockgröße des Abfragecontainers `300px` ist, dann wird ein Wert von `10cqb` bei einer Eigenschaft `30px` sein.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` ist, dann wird ein Wert von `50cqmin` bei einer Eigenschaft `150px` sein.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inline-Größe oder der Blockgröße des Abfragecontainers. Zum Beispiel, wenn die Inline-Größe des Abfragecontainers `800px` und seine Blockgröße `300px` ist, dann wird ein Wert von `50cqmax` bei einer Eigenschaft `400px` sein.

## Absolute Längeneinheiten

Absolute Längeneinheiten repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie beispielsweise beim Drucklayout. Dies geschieht, indem eine der Einheiten an eine physische Einheit gebunden wird und dann die anderen relativ dazu definiert werden. Die Verankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirme, gegenüber Geräten mit hoher Auflösung, wie Drucker.

Für Geräte mit niedriger dpi stellt die Einheit `px` den physischen _Referenzpixel_ dar; andere Einheiten sind relativ dazu definiert. Daher wird `1in` als `96px` definiert, was `72pt` entspricht. Die Konsequenz dieser Definition ist, dass auf solchen Geräten Maßeinheiten in Zoll (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) nicht unbedingt die gleiche Größe wie die physische Einheit mit demselben Namen haben.

Für Geräte mit hoher dpi sind Zoll (`in`), Zentimeter (`cm`) und Millimeter (`mm`) mit ihren physischen Gegenstücken identisch. Daher wird die Einheit `px` relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer vergrößern die Standard-Schriftgröße ihres {{Glossary("user_agent", "user agents")}}, um den Text besser lesbar zu machen. Absolute Längen können Barrierefreiheitsprobleme verursachen, da sie fest sind und sich nicht entsprechend den Benutzereinstellungen skalieren. Aus diesem Grund bevorzugen Sie relative Längen (wie `em` oder `rem`), wenn `font-size` eingestellt wird.

- `px`
  - : Ein Pixel. Für Bildschirme repräsentiert es traditionell ein Gerätepixel (Punkt). Jedoch impliziert bei _Druckern_ und _High-Resolution Screens_ ein CSS-Pixel mehrere Gerätepixel. `1px` = `1in / 96`.
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

Bei der Animation werden Werte des `<length>`-Datentyps als reale Gleitkomma-Zahlen interpoliert. Die {{Glossary("interpolation", "Interpolation")}} erfolgt am berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Vergleich verschiedener Längeeinheiten

Das folgende Beispiel bietet Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert (z. B. `300px`, `50%`, `30vw`) eingeben können, um die Breite einer Ergebnisleiste festzulegen, die unten erscheint, sobald Sie die <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste gedrückt haben.

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

{{EmbedLiveSample('Vergleich verschiedener Längeeinheiten', '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model)
