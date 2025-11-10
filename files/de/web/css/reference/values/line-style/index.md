---
title: <line-style>
slug: Web/CSS/Reference/Values/line-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<line-style>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>`-Schlüsselwortwerte werden in den folgenden Lang- und Kurzform-[border](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) und [column](/de/docs/Web/CSS/Guides/Multicol_layout) Eigenschaften verwendet:

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

Der aufzählbare Typ `<line-style>` wird mit einem der unten aufgeführten Werte spezifiziert:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Randüberlagerungen hat der Wert `none` die _niedrigste_ Priorität. Wenn eine andere sich widersprechende Grenze gesetzt ist, wird sie angezeigt. Der Wert `none` ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Randüberlagerungen hat der Wert `hidden` die _höchste_ Priorität. Wenn eine andere sich widersprechende Grenze gesetzt ist, wird sie nicht angezeigt. Der Wert `hidden` ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der Linienbreite. Der Abstand zwischen den Punkten ist nicht durch die Spezifikation definiert und ist Implementierungen überlassen.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und sind Implementierungen überlassen.
- `solid`
  - : Zeigt eine einzelne, gerade und durchgehende Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen an. Die Länge der Linien ergibt zusammen die Pixelgröße, die durch die Linienbreite definiert ist.
- `groove`
  - : Zeigt einen Rand mit einem eingeschnittenen Aussehen an. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einem hervorgehobenen Aussehen an. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rand an, der das Element eingelassen erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf eine Tabellenzellenkante angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rand an, der das Element hervorgehoben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ist es ähnlich wie `<line-style>`, unterstützt jedoch `hidden` nicht und beinhaltet den Wert `auto`. Wenn `auto` festgelegt ist, wird der vom Benutzer-Agent definierte `<line-style>`-Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Linienstile definieren

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS {{cssxref("border-style")}} und {{cssxref("column-rule-style")}} Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement( "div" )}} Elemente, jedes mit einer Klasse, die den demonstrierten `<line-style>` Wert repräsentiert.

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

Im CSS für dieses Beispiel wird für alle `<p>`-Elemente die Randeinstellung und die Spaltenregel auf eine Breite von `7px` und den Stilwert `double` festgelegt. Für jeden Absatz wird der Wert `double` dann durch die Angabe eines anderen `<line-style>` Wertes für die `border-style` und `column-rule-style` Eigenschaften überschrieben.

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

### Linienstile und Farben definieren

Dieses Beispiel zeigt die Wahl des Linienstils und der Farbe. Bei einigen `<line-style>` Schlüsselwortwerten ist die Farbe der Linie möglicherweise nicht wie erwartet. Um den erforderlichen "3D"-Effekt der `groove`, `ridge`, `inset` und `outset` Stile zu erzeugen, wenn diese Werte in Schwarz oder Weiß angezeigt werden, verwenden Benutzer-Agenten andere Farb-Berechnungen als bei allen anderen Farben-Linien-Kombinationen.

#### CSS

Die vier Seiten jedes `<div>` haben einen unterschiedlichen `<line-style>` Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Reference/Properties/content), um die inline deklarierte CSS anzuzeigen.

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

Das JavaScript erstellt dynamisch {{HTMLElement( "div" )}} Elemente, jedes mit einer unterschiedlichen `border-color` Einstellung.

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

Beachten Sie, dass die fast schwarze Farbe `#000001` sich von dem tatsächlichen Schwarz unterscheiden kann und der Unterschied zwischen den dunklen und hellen Kanten bei der Verwendung hellerer Farben deutlicher ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
- [CSS Multi-Spalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
