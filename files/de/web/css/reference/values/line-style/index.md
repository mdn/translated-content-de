---
title: "`<line-style>` CSS-Typ"
short-title: <line-style>
slug: Web/CSS/Reference/Values/line-style
l10n:
  sourceCommit: a06cf3dca37bb7da1d5e5ad98c5d15a10dde3e8c
---

Der **`<line-style>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform- [border](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) und [column](/de/docs/Web/CSS/Guides/Multicol_layout) Eigenschaften verwendet:

- {{cssxref("border")}}, {{cssxref("border-style")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-style")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-style")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-style")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-style")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-style")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-style")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-style")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-style")}}

## Syntax

### Werte

Der `<line-style>` enumerierte Typ wird mit einem der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Bei Tabellenzellen und Border-Collapse hat der `none` Wert die _niedrigste_ Priorität. Wenn eine andere, widersprüchliche Grenze gesetzt ist, wird diese angezeigt. Der `none` Wert ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Bei Tabellenzellen und Border-Collapse hat der `hidden` Wert die _höchste_ Priorität. Wenn eine andere, widersprüchliche Grenze gesetzt ist, wird diese nicht angezeigt. Der `hidden` Wert ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Outline-Stile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte ist die Hälfte des berechneten Werts der Linienbreite. Der Abstand der Punkte ist durch die Spezifikation nicht definiert und implementationsspezifisch.
- `dashed`
  - : Zeigt eine Serie von kurzen, mit einem Quadrat endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist durch die Spezifikation nicht definiert und implementationsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade durchgezogene Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen. Die Länge der Linien summiert sich auf die Pixelgröße, die durch die Breite der Linie definiert ist.
- `groove`
  - : Zeigt einen Rand mit einer eingeschnittenen Erscheinung an. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einer erhabenen Erscheinung an. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rand, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf eine Tabellenzellen-Rand angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rand, der das Element geprägt erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` angewendet wird, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ist es ähnlich wie `<line-style>`, unterstützt jedoch `hidden` nicht und beinhaltet den `auto` Wert. Wenn `auto` gesetzt ist, wird der vom Benutzeragent definierte `<line-style>` Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel zeigt alle `<line-style>` Schlüsselwertwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Definieren von Linienstilen

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS {{cssxref("border-style")}} und {{cssxref("column-rule-style")}} Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, die jeweils mit einer Klasse versehen sind, die den dargestellten `<line-style>` Wert repräsentiert.

```html
<div class="{line-style}">
  <p>{line-style}</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

```html hidden
<div class="none">
  <p>none</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="hidden">
  <p>hidden</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dotted">
  <p>dotted</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dashed">
  <p>dashed</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="solid">
  <p>solid</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="double">
  <p>double</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="groove">
  <p>groove</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="ridge">
  <p>ridge</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="inset">
  <p>inset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="outset">
  <p>outset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

#### CSS

Im CSS für dieses Beispiel ist der Rand und die Spaltenregel für alle `<p>` Elemente so definiert, dass sie eine Breite von `7px` und den Stilwert `double` haben. Für jeden Absatz wird der `double` Wert dann überschrieben, indem ein anderer `<line-style>` Wert für die `border-style` und `column-rule-style` Eigenschaften spezifiziert wird.

```css hidden
div {
  display: flex;
  gap: 1em;
  list-style: none;
  align-items: center;
}
div:first-of-type {
  display: none;
}

p:first-of-type {
  text-align: center;
  line-height: 5em;
}
p {
  width: 10em;
  height: 5em;
  background-color: palegoldenrod;
}
```

```css
p {
  padding: 5px;
  border: double 7px #bada55;
}
p + p {
  columns: 3;
  column-gap: 20px;
  column-rule: double 7px;
  border-color: black;
}
.none p {
  border-style: none;
  column-rule-style: none;
}
.hidden p {
  border-style: hidden;
  column-rule-style: hidden;
}
.dotted p {
  border-style: dotted;
  column-rule-style: dotted;
}
.dashed p {
  border-style: dashed;
  column-rule-style: dashed;
}
.solid p {
  border-style: solid;
  column-rule-style: solid;
}
.double p {
  border-style: double;
  column-rule-style: double;
}
.groove p {
  border-style: groove;
  column-rule-style: groove;
}
.ridge p {
  border-style: ridge;
  column-rule-style: ridge;
}
.inset p {
  border-style: inset;
  column-rule-style: inset;
}
.outset p {
  border-style: outset;
  column-rule-style: outset;
}
```

#### Ergebnis

{{EmbedLiveSample("Defining_line_styles", "500", "800")}}

Beachten Sie, dass der schwarze Rand nicht immer schwarz ist.

### Definieren von Linienstilen und Farben

Dieses Beispiel zeigt die Auswahl von Linienstil und Farbe. Bei einigen `<line-style>` Schlüsselwerten, kann die Farbe der Linie nicht so sein, wie Sie erwarten. Um den erforderlichen "3D"-Effekt von `groove`, `ridge`, `inset` und `outset` Stilen zu erzeugen, wenn diese Werte in Schwarz oder Weiß angezeigt werden, verwenden Benutzeragenten andere Farbberechnungen als bei allen anderen Farblinienkombinationen.

#### CSS

Die vier Seiten jedes `<div>` haben einen anderen `<line-style>` Wert, und jedes Listenelement hat einen unterschiedlichen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierte Inhalte](/de/docs/Web/CSS/Reference/Properties/content), um die inline deklarierten CSS anzuzeigen.

```css hidden live-sample___line_style_colors
body {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  text-transform: uppercase;
  font-family: monospace;
}
```

```css live-sample___line_style_colors
div {
  border-width: 10px;
  border-style: inset groove ridge outset;
  padding: 5px;
}
```

#### JavaScript

Das JavaScript erstellt dynamisch {{HTMLElement("div")}} Elemente, die jeweils mit einem anderen `border-color` gesetzt sind.

```js live-sample___line_style_colors
// prettier-ignore
const colors = [
  "#000000", "#000001", "#ffffff",
  "#ff00ff", "#ffff00", "#00ffff",
  "#cc33cc", "#cccc33", "#33cccc",
  "#ff0000", "#00ff00", "#0000ff",
  "#cc3333", "#33cc33", "#3333cc",
  "#993333", "#339933", "#333399",
];

for (const c of colors) {
  const div = document.createElement("div");
  div.style.borderColor = c;
  div.textContent = c;
  document.body.appendChild(div);
}
```

#### Ergebnis

{{EmbedLiveSample("line_style_colors", "500", "200")}}

Beachten Sie, dass die fast schwarze Farbe von `#000001` sich von tatsächlichem Schwarz unterscheiden kann und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung von helleren Farben mehr auffällt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
- [CSS Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
