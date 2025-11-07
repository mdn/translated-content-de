---
title: <line-style>
slug: Web/CSS/Reference/Values/line-style
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<line-style>`** {{Glossary("enumerated", "aufzählbare")}} Werttyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform-[border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) und [column](/de/docs/Web/CSS/CSS_multicol_layout) Eigenschaften verwendet:

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

Der `<line-style>` aufzählbare Typ wird mit einem der unten aufgeführten Werte spezifiziert:

- `none`
  - : Zeigt keine Linie. Der berechnete Wert der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben wird. Bei Tabellenelementen und Randkollaps hat der `none` Wert die _niedrigste_ Priorität. Wenn ein anderer widersprechender Rand gesetzt ist, wird er angezeigt. Der `none` Wert ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie. Die berechnete Breite der Linie ist `0`, auch wenn ein Breitenwert angegeben ist. Bei Tabellenelementen und Randkollaps hat der `hidden` Wert die _höchste_ Priorität. Wenn ein anderer widersprechender Rand gesetzt ist, wird er nicht angezeigt. Der `hidden` Wert ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Serie aus runden Punkten. Der Radius der Punkte beträgt die Hälfte des berechneten Werts der Linienbreite. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und Implementierungs-spezifisch.
- `dashed`
  - : Zeigt eine Serie aus kurzen, quadratisch endenden Strichen oder Liniensegmenten. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und Implementierungs-spezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, durchgehende Linie.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand zwischen ihnen. Die Länge der Linien addiert sich zu der durch die Linienbreite definierten Pixelgröße.
- `groove`
  - : Zeigt einen Rand mit einem eingekerbten Erscheinungsbild. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einem erhabenen Erscheinungsbild. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rand, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf einen Tabellenzellenrand angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rand, der das Element erhaben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Werttyp für die {{cssxref("outline")}} und {{cssxref("outline-style")}} Eigenschaften verwendet wird, ist er ähnlich wie `<line-style>`, unterstützt jedoch nicht `hidden` und schließt den `auto` Wert ein. Wenn `auto` gesetzt ist, wird der vom Benutzeragenten definierte `<line-style>` Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise dargestellt werden können.

### Linienstile definieren

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS {{cssxref("border-style")}} und {{cssxref("column-rule-style")}} Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement( "div" )}} Elemente, von denen jedes eine Klasse hat, die den dargestellten `<line-style>` Wert repräsentiert.

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

Im CSS für dieses Beispiel erhalten alle `<p>` Elemente die Vorgabe einer Rand- und Spaltregelbreite von `7px` sowie den Stilwert `double`. Für jeden Absatz wird der `double` Wert dann überschrieben, indem ein anderer `<line-style>` Wert für die `border-style` und `column-rule-style` Eigenschaften festgelegt wird.

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

Dieses Beispiel demonstriert die Auswahl von Linienstilen und Farben. Bei einigen `<line-style>` Schlüsselwortwerten ist die Farbe der Linie eventuell nicht wie erwartet. Um den erforderlichen "3D"-Effekt der `groove`, `ridge`, `inset` und `outset` Stile zu erzeugen, verwenden Benutzeragenten bei der Anzeige dieser Werte in Schwarz oder Weiß andere Farbberechnungen als bei allen anderen Farblinienkombinationen.

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

Das JavaScript erstellt dynamisch {{HTMLElement( "div" )}} Elemente, für die jeweils eine verschiedene `border-color` festgelegt ist.

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

Beachten Sie, dass die fast schwarze Farbe `#000001` möglicherweise von dem tatsächlichen Schwarz abweicht und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung von helleren Farben stärker hervorsticht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
