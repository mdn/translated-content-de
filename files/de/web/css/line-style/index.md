---
title: <line-style>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Der **`<line-style>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform [border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) und [column](/de/docs/Web/CSS/CSS_multicol_layout) Eigenschaften verwendet:

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

Der `<line-style>`-Wertetyp wird mit einem der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Kollabieren der Ränder hat der `none`-Wert die _niedrigste_ Priorität. Wenn ein anderer widersprüchlicher Rand gesetzt ist, wird er angezeigt. Der `none`-Wert ähnelt `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Kollabieren der Ränder hat der `hidden`-Wert die _höchste_ Priorität. Wenn ein anderer widersprüchlicher Rand gesetzt ist, wird er nicht angezeigt. Der `hidden`-Wert ähnelt `none`, aber `hidden` ist kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten. Der Radius der Punkte ist die Hälfte des berechneten Werts der Linienbreite. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementationsspezifisch.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch beendeten Strichen oder Linienstücken. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und implementationsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, durchgezogene Linie.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen. Die Länge der Linien summiert sich auf die Pixelgröße, die durch die Linienbreite definiert ist.
- `groove`
  - : Zeigt einen Rand mit einer geschnitzten Erscheinung. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einer hervorgehobenen Erscheinung. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rand, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf einen Tabellenzellenrand angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rand, der das Element erhaben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die {{cssxref("outline")}} und {{cssxref("outline-style")}} Eigenschaften verwendet wird, ist es ähnlich wie `<line-style>`, aber unterstützt `hidden` nicht und beinhaltet den `auto` Wert. Wenn `auto` gesetzt ist, wird der vom Benutzeragent definierte `<line-style>` Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel zeigt alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben möglicherweise auf unerwartete Weise angezeigt werden.

### Definition von Linienstilen

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS {{cssxref("border-style")}} und {{cssxref("column-rule-style")}} Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement( "div" )}} Elemente, jeweils mit einer Klasse, die den `<line-style>` Wert repräsentiert, der demonstriert wird.

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

Im CSS für dieses Beispiel sind der Rand und die Spaltenregel für alle `<p>` Elemente so definiert, dass sie eine Breite von `7px` und einen Stilwert von `double` haben. Für jeden Absatz wird der `double` Wert dann überschrieben, indem ein anderer `<line-style>` Wert für die `border-style` und `column-rule-style` Eigenschaften angegeben wird.

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
  border-color: #000000;
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

### Definition von Linienstilen und -farben

Dieses Beispiel zeigt die Wahl des Linienstils und der Farbe. Bei einigen `<line-style>` Schlüsselwortwerten ist die Farbe der Linie möglicherweise nicht wie erwartet. Um den erforderlichen "3D"-Effekt der `groove`, `ridge`, `inset` und `outset` Stile zu erzielen, wenn diese Werte in Schwarz oder Weiß angezeigt werden, verwenden Benutzeragenten unterschiedliche Farbberechnungen als bei allen anderen Farblinienkombinationen.

#### CSS

Die vier Seiten jedes `<div>` haben einen unterschiedlichen `<line-style>` Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/content), um die inline deklarierte CSS anzuzeigen.

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

Das JavaScript erstellt dynamisch {{HTMLElement("div")}} Elemente, jeweils mit einer anderen `border-color` gesetzt.

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

Beachten Sie, dass die fast schwarze Farbe von `#000001` möglicherweise anders ist als das tatsächliche Schwarz, und der Kontrast zwischen den dunklen und hellen Kanten ist auffälliger bei der Verwendung von helleren Farben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
