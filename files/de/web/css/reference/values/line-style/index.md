---
title: "`<line-style>` CSS-Typ"
short-title: <line-style>
slug: Web/CSS/Reference/Values/line-style
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<line-style>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzformen der [Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) und [Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) Eigenschaften verwendet:

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

Der `<line-style>` aufgezählte Typ wird mit einem der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Linienbreite ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Rahmenkollaps hat der `none` Wert die _niedrigste_ Priorität. Wenn ein anderer widersprüchlicher Rahmen gesetzt ist, wird er angezeigt. Der `none` Wert ist dem `hidden` ähnlich.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und Rahmenkollaps hat der `hidden` Wert die _höchste_ Priorität. Wenn ein anderer widersprüchlicher Rahmen gesetzt ist, wird er nicht angezeigt. Der `hidden` Wert ist dem `none` ähnlich, ist aber kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Serie von runden Punkten. Der Radius der Punkte beträgt die Hälfte des berechneten Werts der Linienbreite. Der Abstand der Punkte wird durch die Spezifikation nicht definiert und ist implementierungsspezifisch.
- `dashed`
  - : Zeigt eine Serie von kurzen, quadratisch endenden Strichen oder Liniensegmenten. Die genaue Größe und Länge der Segmente wird durch die Spezifikation nicht definiert und ist implementierungsspezifisch.
- `solid`
  - : Zeigt eine einzelne, gerade, durchgezogene Linie.
- `double`
  - : Zeigt zwei gerade Linien mit etwas Abstand dazwischen. Die Länge der Linien summiert sich auf die Pixelgröße, die durch die Breite der Linie definiert ist.
- `groove`
  - : Zeigt einen Rahmen mit einer eingekerbten Erscheinung. Dieser Wert ist das Gegenteil von `ridge`.
- `ridge`
  - : Zeigt einen Rahmen mit einer erhabenen Erscheinung. Dieser Wert ist das Gegenteil von `groove`.
- `inset`
  - : Zeigt einen Rahmen, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenteil von `outset`. Wenn auf einen Tabellenzellenrahmen angewendet und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt einen Rahmen, der das Element geprägt erscheinen lässt. Dieser Wert ist das Gegenteil von `inset`. Wenn auf eine Tabellenzelle angewendet und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die {{cssxref("outline")}} und {{cssxref("outline-style")}} Eigenschaften verwendet wird, ist er dem `<line-style>` ähnlich, unterstützt jedoch `hidden` nicht und umfasst den `auto` Wert. Wenn `auto` gesetzt ist, wird der vom User-Agent definierte `<line-style>` Wert verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Beispiele

Das erste Beispiel demonstriert alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Linienstile definieren

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS {{cssxref("border-style")}} und {{cssxref("column-rule-style")}} Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}} Elemente, jedes mit einer Klasse, die den demonstrierten `<line-style>` Wert repräsentiert.

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

Im CSS für dieses Beispiel sind der Rahmen und die Spaltenregel für alle `<p>` Elemente mit einer Breite von `7px` und dem Stilwert `double` definiert. Für jeden Absatz wird der `double` Wert dann durch Angabe eines anderen `<line-style>` Wertes für die `border-style` und `column-rule-style` Eigenschaften überschrieben.

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

Beachten Sie, dass der schwarze Rahmen nicht immer schwarz ist.

### Linienstile und Farben definieren

Dieses Beispiel zeigt Linienstile und Farbauswahl. Bei einigen `<line-style>` Schlüsselwortwerten ist die Farbe der Linie möglicherweise nicht wie erwartet. Um den erforderlichen "3D"-Effekt von `groove`, `ridge`, `inset` und `outset` Stilen zu erzeugen, verwenden User Agents bei der Anzeige dieser Werte in Schwarz oder Weiß andere Farbberechnungen als bei anderen Farb-Linien-Kombinationen.

#### CSS

Die vier Seiten jeder `<div>` haben einen anderen `<line-style>` Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}} Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Reference/Properties/content), um das inline deklarierte CSS anzuzeigen.

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

Das JavaScript erstellt dynamisch {{HTMLElement("div")}} Elemente, jedes mit einer anderen `border-color` Einstellung.

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

Beachten Sie, dass die fast schwarze Farbe von `#000001` sich von dem tatsächlichen Schwarz unterscheiden kann und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung von helleren Farben stärker sichtbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergrund und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS Basis-Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
