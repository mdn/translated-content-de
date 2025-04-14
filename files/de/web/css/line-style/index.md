---
title: <line-style>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{CSSRef}}

Der **`<line-style>`** [Aufzählungs]-Wertetyp (/de/docs/Glossary/enumerated) repräsentiert Schlüsselwortwerte, die den Stil einer Linie oder das Fehlen einer Linie definieren. Die `<line-style>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform [border]-und ([Spalten](/de/docs/Web/CSS/CSS_multicol_layout)) Eigenschaften verwendet:

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

Der `<line-style>` Aufzählungswertetyp wird durch einen der unten aufgeführten Werte angegeben:

- `none`
  - : Zeigt keine Linie an. Der berechnete Wert der Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und dem Zusammenfall von Rändern hat der Wert `none` die _niedrigste_ Priorität. Wenn ein anderer, widersprüchlicher Rahmen gesetzt ist, wird dieser angezeigt. Der Wert `none` ähnelt `hidden`.
- `hidden`
  - : Zeigt keine Linie an. Die berechnete Breite der Linie ist `0`, selbst wenn ein Breitenwert angegeben ist. Im Falle von Tabellenzellen und dem Zusammenfallen von Rändern hat der Wert `hidden` die _höchste_ Priorität. Wenn ein anderer, widersprüchlicher Rahmen gesetzt ist, wird dieser nicht angezeigt. Der Wert `hidden` ähnelt `none`, aber `hidden` ist kein gültiger Wert für Umrissstile.
- `dotted`
  - : Zeigt eine Reihe von runden Punkten an. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der Breite der Linie. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementationsspezifisch.
- `dashed`
  - : Zeigt eine Reihe von kurzen, quadratisch beendeten Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und implementationsspezifisch.
- `solid`
  - : Zeigt eine einzige, durchgehende, solide Linie an.
- `double`
  - : Zeigt zwei durchgehende Linien mit etwas Abstand zwischen ihnen an. Die Länge der Linien summiert sich auf die durch die Breite der Linie definierte Pixelgröße.
- `groove`
  - : Zeigt einen Rand mit einem eingeschnittenen Aussehen an. Dieser Wert ist das Gegenstück zu `ridge`.
- `ridge`
  - : Zeigt einen Rand mit einem erhabenen Aussehen an. Dieser Wert ist das Gegenstück zu `groove`.
- `inset`
  - : Zeigt einen Rand an, der das Element eingebettet erscheinen lässt. Dieser Wert ist das Gegenstück zu `outset`. Wenn dieser Wert auf eine Tabellenzellen-Grenze angewendet wird und {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.
- `outset`
  - : Zeigt eine Umrandung an, die das Element geprägt erscheinen lässt. Dieser Wert ist das Gegenstück zu `inset`. Wenn er auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `ridge`.

> [!NOTE]
> Wenn `<outline-style>` als Wertetyp für die {{cssxref("outline")}}- und {{cssxref("outline-style")}}-Eigenschaften verwendet wird, ist es ähnlich wie `<line-style>`, unterstützt jedoch nicht `hidden` und enthält den Wert `auto`. Wenn `auto` festgelegt ist, wird der `user-agent`-definierte `<line-style>`-Wert verwendet.

## Beispiele

Das erste Beispiel zeigt alle `<line-style>` Schlüsselwortwerte. Das zweite Beispiel zeigt, wie einige Linienstilfarben auf unerwartete Weise angezeigt werden können.

### Festlegen von Linienstilen

Dieses Beispiel zeigt alle `<line-style>` Werte als Werte für die CSS-{{cssxref("border-style")}}- und {{cssxref("column-rule-style")}}-Eigenschaften.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}}-Elemente, von denen jedes eine Klasse hat, die den demonstrierten `<line-style>`-Wert darstellt.

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

Im CSS für dieses Beispiel ist die Umrandung und die Spaltenregel für alle `<p>`-Elemente mit einer Breite von `7px` und dem Stilwert `double` definiert. Für jeden Absatz wird der `double`-Wert dann überschrieben, indem ein anderer `<line-style>`-Wert für die `border-style` und `column-rule-style` Eigenschaften angegeben wird.

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

Beachten Sie, dass die schwarze Umrandung nicht immer schwarz ist.

### Festlegen von Linienstilen und Farben

Dieses Beispiel zeigt die Wahl des Linienstils und der Farbe. Bei einigen Schlüsselwortwerten `<line-style>` entspricht die Linienfarbe möglicherweise nicht den Erwartungen. Um den erforderlichen "3D"-Effekt der `groove`-, `ridge`-, `inset`- und `outset`-Stile zu erzeugen, verwenden Benutzeragenten beim Anzeigen dieser Werte in Schwarz oder Weiß andere Farb-Berechnungen als jede andere Farblinien-Kombination.

#### HTML

Dieses Beispiel verwendet mehrere {{HTMLElement("div")}}-Elemente, von denen jedes eine andere `border-color` als Inline- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) hat.

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

Die vier Seiten jedes `<div>`-Elements haben einen unterschiedlichen `<line-style>`-Wert, und jedes Listenelement hat einen anderen {{cssxref("color_value", "&lt;color>")}}-Wert. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/content), um den CSS-Inhalt anzuzeigen, der inline erklärt wird.

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

Beachten Sie, dass die fast schwarze Farbe von `#000001` sich von dem tatsächlichen Schwarz unterscheiden kann und der Kontrast zwischen den dunklen und hellen Kanten bei Verwendung von helleren Farben stärker auffällt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Hintergründe und Umrahmungen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS grundlegendes Benutzerinterface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
- [CSS Multi-Spalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
