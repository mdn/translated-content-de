---
title: <line-style>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{CSSRef}}

Der **`<line-style>`** {{Glossary("enumerated", "aufgezählte")}} Werttyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform [border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) und [column](/de/docs/Web/CSS/CSS_multicol_layout) Eigenschaften verwendet:

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

Der `<line-style>` aufgezählte Typ wird mithilfe eines der unten aufgelisteten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Im Fall von Tabellenzellen und Grenzüberlappungen hat der `none` Wert die _niedrigste_ Priorität. Wenn eine andere widersprüchliche Grenze gesetzt ist, wird sie angezeigt. Der `none` Wert ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, auch wenn ein Breitenwert angegeben ist. Im Fall von Tabellenzellen und Grenzüberlappungen hat der `hidden` Wert die _höchste_ Priorität. Wenn eine andere widersprüchliche Grenze gesetzt ist, wird sie nicht angezeigt. Der `hidden` Wert ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Konturstile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte ist die Hälfte des berechneten Werts der Linienbreite. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und hängt von der Implementierung ab.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und hängen von der Implementierung ab.
- `solid`
  - : Zeigt eine einzelne, gerade, durchgezogene Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit einem Abstand dazwischen an. Die Länge der Linien addiert sich zur Pixelgröße, die durch die Linienbreite definiert ist.
- `groove`
  - : Zeigt eine Grenze mit geschnitztem Aussehen an. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt eine Grenze mit hervorgehobenem Aussehen an. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt eine Grenze, die das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf eine Tabellenzellengrenze angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt eine Grenze, die das Element hervorgehoben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Werttyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ist es ähnlich wie `<line-style>`, unterstützt jedoch `hidden` nicht und enthält den Wert `auto`. Wenn `auto` gesetzt ist, wird der vom Benutzeragenten definierte `<line-style>` Wert verwendet.

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel demonstriert, wie einige Linienstilfarben möglicherweise auf unerwartete Weise angezeigt werden.

### Definition von Linienstilen

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("column-rule-style")}}.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, jedes mit einer Klasse, die den `<line-style>` Wert repräsentiert, der demonstriert wird.

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

Im CSS für dieses Beispiel wird die Grenze und die Spaltenregel für alle `<p>` Elemente definiert, eine Breite von `7px` und den Stilwert `double` zu haben. Bei jedem Absatz wird der `double` Wert dann überschrieben, indem ein anderer `<line-style>` Wert für die Eigenschaften `border-style` und `column-rule-style` angegeben wird.

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

Beachten Sie, dass die schwarze Grenze nicht immer schwarz ist.

### Definition von Linienstilen und Farben

Dieses Beispiel demonstriert die Auswahl von Linienstil und Farbe. Bei einigen `<line-style>` Schlüsselwerten entspricht die Farbe der Linie möglicherweise nicht Ihren Erwartungen. Um den erforderlichen "3D"-Effekt der `groove`, `ridge`, `inset` und `outset` Stile zu erzeugen, verwenden Benutzeragenten bei der Anzeige dieser Werte in Schwarz oder Weiß andere Farbberechnungen als bei allen anderen Farblinien-Kombinationen.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, jedes mit einer anderen `border-color` als inline [`style`](/de/docs/Web/HTML/Global_attributes/style) gesetzt.

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

Die vier Seiten jedes `<div>` haben einen anderen `<line-style>` Wert, und jedes Listenelement hat einen unterschiedlichen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/content), um den in CSS deklarierten Inline-Stil anzuzeigen.

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

Beachten Sie, dass die fast schwarze Farbe von `#000001` sich von dem eigentlichen Schwarz unterscheiden kann und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung heller Farben auffälliger ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
