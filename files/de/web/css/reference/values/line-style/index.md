---
title: "`<line-style>` CSS Type"
short-title: <line-style>
slug: Web/CSS/Reference/Values/line-style
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Der **`<line-style>`** {{Glossary("enumerated", "enumerierte")}} Werttyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>`-Schlüsselwortwerte werden in den folgenden lang- und kurzschriftlichen [Rand](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) und [Lücken-Dekorations­](/de/docs/Web/CSS/Guides/Gaps) Eigenschaften verwendet:

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
- {{cssxref("row-rule")}}, {{cssxref("row-rule-style")}}

## Syntax

### Werte

Der `<line-style>`-enumerierte Typ wird mit einem der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Im Fall von Tabellenzellen und Randzusammenfall hat der Wert `none` die _niedrigste_ Priorität. Wenn ein anderer widersprüchlicher Rand gesetzt ist, wird dieser angezeigt. Der Wert `none` ist ähnlich wie `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Linienbreite ist `0`, auch wenn ein Breitenwert angegeben ist. Im Fall von Tabellenzellen und Randzusammenfall hat der Wert `hidden` die _höchste_ Priorität. Wenn ein anderer widersprüchlicher Rand gesetzt ist, wird dieser nicht angezeigt. Der Wert `hidden` ist ähnlich wie `none`, aber `hidden` ist kein gültiger Wert für Outline-Stile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte entspricht der Hälfte des berechneten Wertes der Linienbreite. Der Abstand der Punkte ist in der Spezifikation nicht definiert und implementationsspezifisch.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Linienstücken an. Die genaue Größe und Länge der Segmente sind in der Spezifikation nicht definiert und implementationsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, feste Linie an.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand zwischen ihnen an. Die Länge der Linien summiert sich zur Pixelgröße, die durch die Linienbreite definiert ist.
- `groove`
  - : Zeigt einen Rand mit einem eingeschnittenen Aussehen an. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einem hervorstehenden Aussehen an. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rand an, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn er auf eine Tabellenzellen-Grenze angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rand an, der das Element erhaben erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn er auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` angewendet wird, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Werttyp für die Eigenschaften {{cssxref("outline")}} und {{cssxref("outline-style")}} verwendet wird, ist er ähnlich wie `<line-style>`, unterstützt jedoch nicht `hidden` und beinhaltet den Wert `auto`. Wenn `auto` gesetzt ist, wird der vom Benutzeragent definierte `<line-style>`-Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Linienstile definieren

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("column-rule-style")}}.

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

In dem CSS für dieses Beispiel wird der Rand und die Spaltenregel für alle `<p>`-Elemente auf eine Breite von `7px` und den Stilwert `double` definiert. Für jeden Absatz wird dann der Wert `double` überschrieben, indem ein anderer `<line-style>` Wert für die Eigenschaften `border-style` und `column-rule-style` angegeben wird.

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

Dieses Beispiel zeigt die Auswahl von Linienstil und Farbe. Bei einigen `<line-style>` Schlüsselwortwerten kann die Farbe der Linie nicht so sein, wie Sie es erwarten. Um den erforderlichen "3D"-Effekt der `groove`, `ridge`, `inset` und `outset` Stile beim Anzeigen dieser Werte in Schwarz oder Weiß zu erzeugen, verwenden Benutzeragenten andere Farb­berechnungen als jede andere Kombination von Farbe und Linie.

#### CSS

Die vier Seiten jedes `<div>` haben einen anderen `<line-style>` Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Reference/Properties/content), um das inline deklarierte CSS darzustellen.

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

Das JavaScript erstellt dynamisch {{HTMLElement( "div" )}} Elemente, jeweils mit einer anderen `border-color` gesetzt.

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

Beachten Sie, dass die fast schwarze Farbe `#000001` sich von dem tatsächlichen Schwarz unterscheiden kann und der Kontrast zwischen den dunklen und hellen Kanten bei helleren Farben stärker hervortritt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
- [CSS mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
