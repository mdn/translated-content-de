---
title: <length>
slug: Web/CSS/length
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<length>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Distanzwert. Längen können in zahlreichen CSS-Eigenschaften verwendet werden, wie zum Beispiel {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} und {{Cssxref("text-shadow")}}.

> [!NOTE]
> Obwohl {{cssxref("&lt;percentage&gt;")}}-Werte in einigen der gleichen Eigenschaften verwendet werden können, die `<length>`-Werte akzeptieren, sind sie selbst keine `<length>`-Werte. Siehe {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

Der `<length>` Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Zahl und der Einheit. Die Angabe der Längeneinheit ist optional, wenn die Zahl `0` ist.

> [!NOTE]
> Einige Eigenschaften erlauben negative `<length>`-Werte, während andere dies nicht tun.

Der [spezifizierte Wert](/de/docs/Web/CSS/specified_value) einer Länge (_specified length_) wird durch seine Menge und Einheit dargestellt. Der [berechnete Wert](/de/docs/Web/CSS/computed_value) einer Länge (_computed length_) ist die spezifizierte Länge, die zu einer absoluten Länge aufgelöst wurde, und seine Einheit wird nicht unterschieden.

Die `<length>`-Einheiten können relativ oder absolut sein. Relative Längen repräsentieren eine Messung im Bezug auf eine andere Distanz. Abhängig von der Einheit kann diese Distanz die Größe eines bestimmten Zeichens, die [Zeilenhöhe](/de/docs/Web/CSS/line-height) oder die Größe des [Ansichtsfensters](/de/docs/Glossary/viewport) sein. Stylesheets, die relative Längeneinheiten verwenden, können leichter von einer Ausgabenumgebung zur anderen skaliert werden.

> [!NOTE]
> Kindelemente erben nicht die relativen Werte, wie sie für ihre Eltern festgelegt wurden; sie erben die berechneten Werte.

## Relative Längeneinheiten

CSS relative Längeneinheiten basieren auf Schriftarten, Containern oder Ansichtsfenstergrößen.

### Relative Längeneinheiten basierend auf Schriftarten

Schriftlängen definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributs in der momentan wirksamen Schriftart in einem Element oder seinem übergeordneten Element.

> [!NOTE]
> Diese Einheiten, insbesondere `em` und das root-relative `rem`, werden häufig verwendet, um skalierbare Layouts zu erstellen, die den vertikalen Rhythmus der Seite beibehalten, auch wenn der Benutzer die Schriftgröße ändert.

- `cap`
  - : Repräsentiert die "Cap Height" (nominale Höhe von Großbuchstaben) der Schriftart des Elements.
- `ch`
  - : Repräsentiert die Breite oder genauer gesagt das [Vortriebsmaß](/de/docs/Glossary/advance_measure) des Zeichens `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Elements.
    In Fällen, in denen die Bestimmung des Maßes des `0`-Zeichens unmöglich oder unpraktisch ist, muss angenommen werden, dass es `0.5em` breit und `1em` hoch ist.
- `em`
  - : Repräsentiert die berechnete {{Cssxref("font-size")}} des Elements. Wenn es bei der {{Cssxref("font-size")}}-Eigenschaft selbst verwendet wird, repräsentiert es die _geerbte_ Schriftgröße des Elements.
- `ex`
  - : Repräsentiert die [x-Höhe](https://en.wikipedia.org/wiki/X-height) der Schriftart des Elements. In Schriftarten mit dem Buchstaben `x` ist dies im Allgemeinen die Höhe von Kleinbuchstaben in der Schriftart; `1ex ≈ 0.5em` in vielen Schriftarten.
- `ic`
  - : Entspricht dem verwendeten [Vortriebsmaß](/de/docs/Glossary/advance_measure) des "水" Zeichens (CJK Wasserideogramm, U+6C34), das in der verwendeten Schriftart dargestellt wird.
- `lh`
  - : Entspricht dem berechneten Wert der {{Cssxref("line-height")}}-Eigenschaft des Elements, auf dem es verwendet wird, konvertiert in eine absolute Länge. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf der Schrift des Root-Elements

Root-Element-Schrift-relative Längeneinheiten definieren den `<length>`-Wert in Bezug auf die Größe eines bestimmten Zeichens oder Schriftattributes des [Root-Elements](/de/docs/Web/CSS/:root):

- `rcap`
  - : Entspricht der "Cap Height" (nominale Höhe von Großbuchstaben) der Schriftart des Root-Elements.
- `rch`
  - : Entspricht der Breite oder dem [Vortriebsmaß](/de/docs/Glossary/advance_measure) des Zeichens `0` (Null, das Unicode-Zeichen U+0030) in der Schriftart des Root-Elements.
- `rem`
  - : Repräsentiert die {{Cssxref("font-size")}} des Root-Elements (typischerweise {{HTMLElement("html")}}). Wenn es innerhalb des Root-Elements {{Cssxref("font-size")}} verwendet wird, repräsentiert es seinen Anfangswert. Ein üblicher Standardwert des Browsers ist `16px`, aber benutzerdefinierte Präferenzen können diesen Wert ändern.
- `rex`
  - : Repräsentiert die x-Höhe der Schriftart des Root-Elements.
- `ric`
  - : Entspricht dem Wert der [`ic`](#ic) Einheit auf der Schriftart des Root-Elements.
- `rlh`
  - : Entspricht dem Wert der [`lh`](#lh) Einheit auf der Schriftart des Root-Elements. Diese Einheit ermöglicht Längenberechnungen basierend auf der theoretischen Größe einer idealen leeren Zeile. Die Größe tatsächlicher Zeilenboxen kann jedoch je nach Inhalt variieren.

### Relative Längeneinheiten basierend auf dem Ansichtsfenster

Die Ansichtfenster-Prozentlängeneinheiten basieren auf vier verschiedenen Ansichtsfenstergrößen: klein, groß, dynamisch und standardmäßig. Die Berücksichtigung der unterschiedlichen Ansichtsfenstergrößen reagiert auf die dynamische Erweiterung und Einziehung von Browser-Schnittstellen und das Ein- und Ausblenden des Inhalts darunter.

- **Klein**

  - : Wenn Sie die kleinste mögliche Ansichtfenstergröße in Antwort auf dynamisch erweiternde Browser-Schnittstellen wünschen, sollten Sie die kleine Ansichtsfenstergröße verwenden. Die kleine Ansichtsfenstergröße ermöglicht, dass der designte Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Schnittstellen erweitert werden. Diese Wahl könnte möglicherweise auch leere Räume lassen, wenn die Browser-Schnittstellen einziehen.

    Zum Beispiel wird ein Element, das mit Ansichtfenster-Prozent-Einheiten basierend auf der kleinen Ansichtsfenstergröße dimensioniert wird, den Bildschirm perfekt ausfüllen, ohne dass ein Teil seines Inhalts verdeckt wird, wenn alle dynamischen Browser-Schnittstellen angezeigt werden. Wenn diese Browser-Schnittstellen jedoch verborgen werden, könnte zusätzlicher Raum um das Element sichtbar sein. Daher sind die kleinen Ansichtfenster-Prozent-Einheiten im Allgemeinen "sicherer" zu verwenden, könnten jedoch nicht das attraktivste Layout ergeben, nachdem ein Benutzer beginnt, mit der Seite zu interagieren.

    Die kleine Ansichtsfenstergröße wird durch das Präfix `sv` repräsentiert und resultiert in den `sv*` Ansichtfenster-Prozentlängeneinheiten. Die Größen der kleinen Ansichtfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Groß**

  - : Wenn Sie die größtmögliche Ansichtsfenstergröße in Antwort auf dynamisch einziehende Browser-Schnittstellen wünschen, sollten Sie die große Ansichtsfenstergröße verwenden. Die große Ansichtsfenstergröße ermöglicht, dass der designte Inhalt das gesamte Ansichtsfenster ausfüllt, wenn die Browser-Schnittstellen einziehen. Sie müssen sich darüber im Klaren sein, dass der Inhalt möglicherweise verdeckt wird, wenn die Browser-Schnittstellen erweitert werden.

    Zum Beispiel verstecken Browser auf Mobiltelefonen, wo der Bildschirmplatz begrenzt ist, häufig einen Teil oder die gesamte Titel- und Adressleiste, nachdem ein Benutzer begonnen hat, die Seite zu scrollen. Wenn ein Element mit einer Ansichtfenster-Prozent-Einheit basierend auf der großen Ansichtsfenstergröße dimensioniert wird, wird der Inhalt des Elements die gesamte sichtbare Seite ausfüllen, wenn diese Browser-Schnittstellen versteckt sind. Wenn diese einziehbaren Browser-Schnittstellen jedoch angezeigt werden, können sie den Inhalt verdecken, der mit den _großen_ Ansichtfenster-Prozent-Einheiten dimensioniert oder positioniert wurde.

    Die große Ansichtfenster-Einheit wird durch das Präfix `lv` repräsentiert und resultiert in den `lv*` Ansichtfenster-Prozent-Einheiten. Die Größen der großen Ansichtfenster-Prozent-Einheiten sind fest und daher stabil, es sei denn, das Ansichtsfenster selbst wird geändert.

- **Dynamisch**

  - : Wenn Sie möchten, dass das Ansichtsfenster automatisch in Antwort auf dynamisch erweiternde oder einziehende Browser-Schnittstellen dimensioniert wird, können Sie die dynamische Ansichtsfenstergröße verwenden. Die dynamische Ansichtsfenstergröße ermöglicht, dass der designte Inhalt genau innerhalb des Ansichtsfensters passt, unabhängig von der Präsenz dynamischer Browser-Schnittstellen.

    Die dynamische Ansichtfenster-Einheit wird durch das Präfix `dv` repräsentiert und resultiert in den `dv*` Ansichtsfenster-Prozent-Einheiten. Die Größen der dynamischen Ansichtfenster-Prozent-Einheiten sind nicht stabil, selbst wenn das Ansichtsfenster selbst unverändert bleibt.

    > [!NOTE]
    > Während die dynamische Ansichtsfenstergröße Ihnen mehr Kontrolle und Flexibilität geben kann, kann die Verwendung von Ansichtfenster-Prozent-Einheiten basierend auf der dynamischen Ansichtsfenstergröße dazu führen, dass der Inhalt während des Scrollens auf einer Seite die Größe ändert. Dies kann zu einer Beeinträchtigung der Benutzeroberfläche führen und zu einem Leistungseinbruch.

- **Standardmäßig**

  - : Die Standard-Ansichtsfenstergröße wird vom Browser definiert. Das Verhalten der resultierenden Ansichtfenster-Prozent-Einheit könnte dem einer auf der kleinen Ansichtsfenstergröße, der großen Ansichtsfenstergröße, einer Zwischengröße zwischen den beiden oder der dynamischen Ansichtsfenstergröße basierenden Einheit gleichkommen.

    > [!NOTE]
    > Beispielsweise könnte ein Browser die Standard-Ansichtsfenster-Prozent-Einheit für die Höhe (`vh`) so implementieren, dass sie der großen Ansichtfenster-Prozent-Höheneinheit (`lvh`) entspricht. Wenn dies so ist, könnte dies Inhalte auf einer Anzeige im Vollbildmodus verdecken, während die Browserschnittstelle erweitert ist.

Ansichtsfenster-Prozentlängen definieren `<length>`-Werte in Prozent relativ zur Größe des initialen [containende Blocks](/de/docs/Web/CSS/Containing_block), der wiederum entweder auf der Größe des [Ansichtsfensters](/de/docs/Glossary/viewport) oder des Seitenbereichs basiert, d.h. dem sichtbaren Abschnitt des Dokuments. Wenn die Höhe oder Breite des initialen containenden Blocks geändert wird, werden die Elemente, die darauf basieren, entsprechend skaliert. Zu den Ansichtsfenster-Prozentlängeneinheiten gehört eine Variante, die zu jeder der unter beschriebenen Ansichtsfenstergrößen passt.

> [!NOTE]
> Ansichtsfensterlängen sind in {{cssxref("@page")}}-Deklarationsblöcken ungültig.

- `vh`

  - : Repräsentiert einen Prozentsatz der Höhe des initialen [containenden Blocks](/de/docs/Web/CSS/Containing_block) des Ansichtsfensters. `1vh` ist 1% der Ansichtsfensterhöhe. Beispielsweise wird ein Wert von `70vh` auf einer Eigenschaft `210px` sein, wenn die Ansichtsfensterhöhe `300px` ist.

    Die entsprechenden Ansichtfenster-Prozent-Einheiten für kleine, große und dynamische Ansichtsfenstergrößen sind `svh`, `lvh` und `dvh`. `vh` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

- `vw`

  - : Repräsentiert einen Prozentsatz der Breite des initialen [containenden Blocks](/de/docs/Web/CSS/Containing_block) des Ansichtsfensters. `1vw` ist 1% der Ansichtsfensterbreite. Beispielsweise wird ein Wert von `50vw` auf einer Eigenschaft `400px` sein, wenn die Ansichtsfensterbreite `800px` ist.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svw`, `lvw` und `dvw`.
    `vw` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

- `vmax`

  - : Repräsentiert in Prozent den größten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svmax`, `lvmax` und `dvmax`.
    `vmax` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

- `vmin`

  - : Repräsentiert in Prozent den kleinsten Wert von `vw` und `vh`.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svmin`, `lvmin` und `dvmin`.
    `vmin` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

- `vb`

  - : Repräsentiert den Prozentsatz der Größe des initialen [containenden Blocks](/de/docs/Web/CSS/Containing_block), in Richtung der [Blockachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svb`, `lvb` und `dvb`.
    `vb` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

- `vi`

  - : Repräsentiert einen Prozentsatz der Größe des initialen [containenden Blocks](/de/docs/Web/CSS/Containing_block), in Richtung der [Inlineachse](/de/docs/Web/CSS/CSS_logical_properties_and_values) des Root-Elements.

    Für kleine, große und dynamische Ansichtsfenstergrößen sind die entsprechenden Ansichtsfenster-Prozent-Einheiten `svi`, `lvi` und `dvi`.
    `vi` repräsentiert die ansichtsfensterbezogene Längeneinheit basierend auf der standardmäßigen Ansichtsfenstergröße des Browsers.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mit Hilfe von Containerabfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden. Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfragecontainers. Komponenten, die Einheiten der Länge relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen. Weitere Informationen finden Sie unter [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

- `cqw`

  - : Repräsentiert einen Prozentsatz der Breite des Abfragecontainers. `1cqw` ist 1% der Breite des Abfragecontainers. Wenn beispielsweise die Breite des Abfragecontainers `800px` beträgt, entspricht ein Wert von `50cqw` auf einer Eigenschaft `400px`.

- `cqh`

  - : Repräsentiert einen Prozentsatz der Höhe des Abfragecontainers. `1cqh` ist 1% der Höhe des Abfragecontainers. Wenn die Höhe des Abfragecontainers beispielsweise `300px` ist, entspricht ein Wert von `10cqh` auf einer Eigenschaft `30px`.

- `cqi`

  - : Repräsentiert einen Prozentsatz der Inlinegröße des Abfragecontainers. `1cqi` ist 1% der Inlinegröße des Abfragecontainers. Wenn die Inlinegröße des Abfragecontainers beispielsweise `800px` ist, entspricht ein Wert von `50cqi` auf einer Eigenschaft `400px`.

- `cqb`

  - : Repräsentiert einen Prozentsatz der Blockgröße des Abfragecontainers. `1cqb` ist 1% der Blockgröße des Abfragecontainers. Wenn die Blockgröße des Abfragecontainers beispielsweise `300px` ist, entspricht ein Wert von `10cqb` auf einer Eigenschaft `30px`.

- `cqmin`

  - : Repräsentiert einen Prozentsatz des kleineren Wertes entweder der Inlinegröße oder der Blockgröße des Abfragecontainers. `1cqmin` ist 1% des kleineren Wertes entweder der Inlinegröße oder der Blockgröße des Abfragecontainers. Wenn die Inlinegröße des Abfragecontainers beispielsweise `800px` und seine Blockgröße `300px` beträgt, entspricht ein Wert von `50cqmin` auf einer Eigenschaft `150px`.

- `cqmax`

  - : Repräsentiert einen Prozentsatz des größeren Wertes entweder der Inlinegröße oder der Blockgröße des Abfragecontainers. `1cqmax` ist 1% des größeren Wertes entweder der Inlinegröße oder der Blockgröße des Abfragecontainers. Wenn die Inlinegröße des Abfragecontainers beispielsweise `800px` und seine Blockgröße `300px` beträgt, entspricht ein Wert von `50cqmax` auf einer Eigenschaft `400px`.

## Absolute Längeneinheiten

Absolute Längeneinheiten repräsentieren eine physische Messung, wenn die physikalischen Eigenschaften des Ausgabemediums bekannt sind, wie zum Beispiel für den Drucklayout. Dies wird erreicht, indem eine der Einheiten an eine physische Einheit gebunden wird und dann die anderen relativ dazu definiert werden. Die Ankerung erfolgt unterschiedlich für Geräte mit niedriger Auflösung, wie Bildschirmen, im Vergleich zu Geräten mit hoher Auflösung, wie Druckern.

Für Geräte mit niedriger dpi repräsentiert die Einheit `px` das physische _Referenzpixel_; andere Einheiten sind relativ dazu definiert. Somit ist `1in` als `96px` definiert, was `72pt` entspricht. Der folgende Effekt dieser Definition ist, dass auf solchen Geräten die in Inches (`in`), Zentimetern (`cm`) oder Millimetern (`mm`) beschriebenen Dimensionen nicht unbedingt der Größe der physischen Einheit mit demselben Namen entsprechen.

Für Geräte mit hoher dpi sind Inches (`in`), Zentimeter (`cm`) und Millimeter (`mm`) gleich wie ihre physischen Gegenstücke. Daher wird die `px`-Einheit relativ zu ihnen definiert (1/96 von `1in`).

> [!NOTE]
> Viele Benutzer erhöhen die Standard-Schriftgröße ihres [Benutzeragenten](/de/docs/Glossary/user_agent), um den Text besser lesbar zu machen. Absolute Längen können Zugänglichkeitsprobleme verursachen, da sie fest sind und nicht nach Benutzereinstellungen skalieren. Aus diesem Grund sollten Sie relative Längen (wie `em` oder `rem`) bevorzugen, wenn Sie `font-size` einstellen.

- `px`
  - : Ein Pixel. Für Bildschirmanzeigen repräsentiert es traditionell ein Gerät-Pixel (ein Punkt). Für _Drucker_ und _Bildschirme mit hoher Auflösung_ impliziert ein CSS-Pixel jedoch mehrere Gerät-Pixel. `1px` = `1in / 96`.
- `cm`
  - : Ein Zentimeter. `1cm` = `96px / 2.54`.
- `mm`
  - : Ein Millimeter. `1mm` = `1cm / 10`.
- `Q`
  - : Ein Viertel Millimeter. `1Q` = `1cm / 40`.
- `in`
  - : Ein Zoll (Inch). `1in` = `2.54cm` = `96px`.
- `pc`
  - : Eine Pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Ein Punkt. `1pt` = `1in / 72`.

## Interpolation

Wenn animiert, werden Werte des `<length>`-Datentyps als reale Gleitkommazahlen interpoliert. Die [Interpolation](/de/docs/Glossary/interpolation) erfolgt im berechneten Wert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verknüpft ist.

## Beispiele

### Vergleich verschiedener Längeneinheiten

Das folgende Beispiel liefert Ihnen ein Eingabefeld, in das Sie einen `<length>`-Wert eingeben können (z. B. `300px`, `50%`, `30vw`), um die Breite eines Ergebnisbalkens zu setzen, der unten erscheint, sobald Sie die <kbd>Enter</kbd>- oder die <kbd>Return</kbd>-Taste gedrückt haben.

Dies ermöglicht Ihnen den Vergleich und die Gegenüberstellung der Effekte verschiedener Längeneinheiten.

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

- [CSS-Werte & Einheiten Tutorial](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS-Werte & Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model)
