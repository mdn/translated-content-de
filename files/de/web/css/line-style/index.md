---
title: <line-style>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<line-style>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Langform- und Kurzform-Eigenschaften für [border](/de/docs/Web/CSS/CSS_backgrounds_and_borders) und [column](/de/docs/Web/CSS/CSS_multicol_layout) verwendet:

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

Der `<line-style>` enumerierte Typ wird mit einem der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Bei Tabellenzellen und Grenzkollaps hat der Wert `none` die _niedrigste_ Priorität. Wenn eine andere konfliktierende Grenze gesetzt ist, wird sie angezeigt. Der Wert `none` ähnelt `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, auch wenn ein Breitenwert angegeben ist. Bei Tabellenzellen und Grenzkollaps hat der Wert `hidden` die _höchste_ Priorität. Wenn eine andere konfliktierende Grenze gesetzt ist, wird sie nicht angezeigt. Der Wert `hidden` ähnelt `none`, aber `hidden` ist kein gültiger Wert für Outline-Stile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der Linienbreite. Der Abstand der Punkte wird nicht durch die Spezifikation definiert und ist implementierungsspezifisch.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch-endenden Strichen oder Liniensegmenten. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und sind implementierungsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, feste Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen. Die Länge der Linien summiert sich zur Pixelgröße, die durch die Breite der Linie definiert ist.
- `groove`
  - : Zeigt eine Grenze mit einem geschnitzten Erscheinungsbild. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt eine Grenze mit einem extrudierten Erscheinungsbild. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt eine Grenze, die das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzellen-Grenze angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt eine Grenze, die das Element erhaben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ähnelt es `<line-style>`, unterstützt jedoch nicht `hidden` und enthält den Wert `auto`. Wenn `auto` gesetzt ist, wird der vom Benutzeragent definierte `<line-style>`-Wert verwendet.

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>`-Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Linienstile definieren

Dieses Beispiel zeigt alle `<line-style>`-Werte als Werte für die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("column-rule-style")}}.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement( "div" )}}-Elemente, jedes mit einer Klasse, die den `<line-style>`-Wert repräsentiert, der demonstriert wird.

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

Im CSS dieses Beispiels wird die Grenze und die Spaltenregel für alle `<p>`-Elemente auf eine Breite von `7px` und den Stilwert `double` definiert. Für jeden Absatz wird der Wert `double` dann durch einen anderen `<line-style>`-Wert für die Eigenschaften `border-style` und `column-rule-style` überschrieben.

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

### Linienstile und Farben definieren

Dieses Beispiel demonstriert die Wahl von Linienstil und Farbe. Bei einigen `<line-style>`-Schlüsselwortwerten entspricht die Farbe der Linie möglicherweise nicht Ihren Erwartungen. Um den erforderlichen "3D"-Effekt der `groove,` `ridge`, `inset` und `outset`-Stile zu erzeugen, verwenden Benutzeragenten bei der Anzeige dieser Werte in Schwarz oder Weiß andere Farbberechnungen als bei allen anderen Farblinienkombinationen.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement( "div" )}}-Elemente, jedes mit einer unterschiedlichen `border-color`, die als Inline-`style`-Attribut gesetzt ist.

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

Die vier Seiten jedes `<div>` haben einen anderen `<line-style>`-Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}}-Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/content), um den inline deklarierten CSS-Code anzuzeigen.

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

Beachten Sie, dass die fast schwarze Farbe von `#000001` sich von dem tatsächlichen Schwarz unterscheiden kann, und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung von helleren Farben deutlicher wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Hintergründe und Grenzen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS Grundlegende Benutzerschnittstelle](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
