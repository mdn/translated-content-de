---
title: <Linienstil>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<line-style>`** {{glossary("enumerated")}} Wertetyp stellt Schlüsselwortwerte dar, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform- [border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) und [column](/de/docs/Web/CSS/CSS_multicol_layout) Eigenschaften verwendet:

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

```css
<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

### Werte

Der `<line-style>` enumerierte Typ wird unter Verwendung eines der unten aufgeführten Werte spezifiziert:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Rahmenkollaps hat der `none` Wert die _niedrigste_ Priorität. Wenn eine andere, widersprüchliche Grenze festgelegt ist, wird sie angezeigt. Der `none` Wert ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Rahmenkollaps hat der `hidden` Wert die _höchste_ Priorität. Wenn eine andere, widersprüchliche Grenze festgelegt ist, wird sie nicht angezeigt. Der `hidden` Wert ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte beträgt die Hälfte des berechneten Werts der Linienbreite. Der Abstand zwischen den Punkten ist nicht in der Spezifikation definiert und ist implementationsspezifisch.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht in der Spezifikation definiert und ist implementationsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, durchgehende Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen an. Die Länge der Linien addiert sich zur Pixelgröße, die durch die Linienbreite definiert ist.
- `groove`
  - : Zeigt einen Rahmen mit eingraviertem Aussehen an. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rahmen mit herausstehendem Aussehen an. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rahmen, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wird er auf einen Tabellenzellenrahmen angewendet und ist {{cssxref("border-collapse")}} auf `collapsed` gesetzt, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rahmen, der das Element erhaben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wird er auf eine Tabellenzelle angewendet, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ist er ähnlich wie `<line-style>`, unterstützt jedoch nicht `hidden` und umfasst den Wert `auto`. Wenn `auto` gesetzt ist, wird ein vom Benutzeragent festgelegter `<line-style>` Wert verwendet.

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Definieren von Linienstilen

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("column-rule-style")}}.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, von denen jedes eine Klasse hat, die den `<line-style>` Wert darstellt, der demonstriert wird.

```html
<div class="<line-style>">
  <p><line-style></p>
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

Im CSS für dieses Beispiel werden die Rand- und die Spaltenregel für alle `<p>` Elemente definiert mit einer Breite von `7px` und dem Stilwert `double`. Für jeden Absatz wird der `double` Wert dann überschrieben, indem ein anderer `<line-style>` Wert für die `border-style` und `column-rule-style` Eigenschaften angegeben wird.

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

### Definieren von Linienstilen und Farben

Dieses Beispiel demonstriert die Wahl von Linienstil und Farbe. Bei einigen `<line-style>` Schlüsselwortwerten ist die Farbe der Linie möglicherweise nicht so, wie Sie es erwarten. Um den erforderlichen "3D"-Effekt von `groove,` `ridge`, `inset` und `outset` Stilen zu erzeugen, verwenden Benutzeragenten bei der Anzeige dieser Werte in Schwarz oder Weiß andere Farbberechnungen als bei allen anderen Farb-Linien-Kombinationen.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, wobei jede einen anderen `border-color` als Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style) gesetzt hat.

```html-nolint hidden
<section>
```

```html
<div style="border-color: #000000"></div>
```

```html hidden
<div style="border-color: #000001"></div>
<div style="border-color: #ffffff"></div>

<div style="border-color: #ff00ff"></div>
<div style="border-color: #ffff00"></div>
<div style="border-color: #00ffff"></div>

<div style="border-color: #cc33cc"></div>
<div style="border-color: #cccc33"></div>
<div style="border-color: #33cccc"></div>

<div style="border-color: #ff0000"></div>
<div style="border-color: #00ff00"></div>
<div style="border-color: #0000ff"></div>

<div style="border-color: #cc3333"></div>
<div style="border-color: #33cc33"></div>
<div style="border-color: #3333cc"></div>

<div style="border-color: #993333"></div>
<div style="border-color: #339933"></div>
<div style="border-color: #333399"></div>
</section>
```

#### CSS

Die vier Seiten jedes `<div>` haben einen anderen `<line-style>` Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/content), um die CSS inline anzuzeigen, die deklariert sind.

```css hidden
section {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  text-transform: uppercase;
  font-family: monospace;
}
```

```css
div {
  border-width: 10px;
  border-style: inset groove ridge outset;
  padding: 5px;
}
div::before {
  content: attr(style);
}
```

#### Ergebnis

{{EmbedLiveSample("Line_style_colors", "500", "400")}}

Beachten Sie, dass die fast schwarze Farbe von `#000001` unterschiedlich vom tatsächlichen Schwarz sein kann, und der Kontrast zwischen den dunklen und hellen Kanten ist auffälliger, wenn hellere Farben verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS multi-column layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
