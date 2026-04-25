---
title: "`box-shadow` CSS property"
short-title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS)-Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte mit Kommas getrennt festlegen. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

{{InteractiveExample("CSS Demo: box-shadow")}}

```css interactive-example-choice
box-shadow: 10px 5px 5px red;
```

```css interactive-example-choice
box-shadow: 60px -16px teal;
```

```css interactive-example-choice
box-shadow: 12px 12px 2px 1px rgb(0 0 255 / 0.2);
```

```css interactive-example-choice
box-shadow: inset 5em 1em gold;
```

```css interactive-example-choice
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <p>This is a box with a box-shadow around it.</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  margin: 20px auto;
  padding: 0;
  border: 2px solid #333333;
  width: 80%;
  text-align: center;
}
```

## Syntax

```css
/* Keyword values */
box-shadow: none;

/* A color and two length values */
box-shadow: red 60px -16px;

/* Three length values and a color */
box-shadow: 10px 5px 5px black;

/* Four length values and a color */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, length values, and a color */
box-shadow: inset 5em 1em gold;

/* Multiple shadows, separated by commas */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* Global values */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

Geben Sie einen einzelnen Box-Schatten an mit:

- Zwei, drei oder vier {{cssxref("length")}}-Werten.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird er als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Schreibweisen. Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft des Elternelements verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter kann zwei, drei oder vier Werte annehmen. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element. Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` festgelegt sind).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe, so dass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf sein wird). Die Spezifikation enthält keinen genauen Algorithmus für die Berechnung des Unschärferadius; sie erläutert jedoch Folgendes:

      > …für eine lange, gerade Schattengrenze sollte dies einen Farbverlauf in der Länge des Unschärfabstandes erzeugen, der senkrecht zu und zentriert auf der Schattengrenze liegt und der von der vollen Schattenfarbe am Radienendpunkt innerhalb des Schattens bis vollständig transparent am Endpunkt außerhalb davon reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte werden dazu führen, dass der Schatten sich ausdehnt und größer wird, negative Werte werden dazu führen, dass der Schatten sich verkleinert. Wenn nicht angegeben, wird er auf `0` gesetzt (das bedeutet, der Schatten wird dieselbe Größe wie das Element haben).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Eingelassene Schatten werden innerhalb des Rahmens der Box gezeichnet (auch wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, jedoch unterhalb des Inhalts. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, was den Anschein erweckt, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Bei der Animation von Schatten, wie wenn mehrere Schattenwerte auf einer Box zu neuen Werten beim Hovern übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie dem Unschärferadius, dem Ausbreitungsradius und der Farbe, wenn Schatten übergehen. Für jeden Schatten in einer Liste von Schatten gehen die Farbe, x, y, Unschärfe und Ausbreitung über; die Farbe als {{cssxref("&lt;color&gt;")}}, und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei kommagetrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zugeordnet, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listenelemente unterschiedlich lang sind, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist und deren X, Y und Unschärfe `0` betragen, wobei das Vorhandensein oder Nichtvorhandensein von `inset` angepasst wird. Wenn in einem beliebigen Paar von Schatten eines gesetzt ist und das andere nicht, bleibt die gesamte Schattenliste uninterpoliert; die Schatten werden ohne einen Animationseffekt zu den neuen Werten geändert.

## Beschreibung

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten aus dem Rahmen fast eines beliebigen Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf dem Element mit einem Box-Schatten angegeben ist, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Anordnung mehrerer Box-Schatten ist dieselbe wie bei mehreren [Text-Schatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Werkzeug, das es Ihnen ermöglicht, einen `box-shadow` zu erzeugen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten ein: einen eingelassenen Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Rahmeneffekt erzeugt (wir könnten stattdessen einen {{cssxref('outline')}} für diesen dritten Schatten verwenden).

#### HTML

```html
<blockquote>
  <q>
    You may shoot me with your words,<br />
    You may cut me with your eyes,<br />
    You may kill me with your hatefulness,<br />
    But still, like air, I'll rise.
  </q>
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgb(0 200 0 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_three_shadows', '300', '300')}}

### Einstellung von null für Versatz und Unschärfe

Wenn der `x-offset`, `y-offset` und `blur` alle null sind, wird der Box-Schatten ein einheitlich gefärbter Umriss von gleicher Größe auf allen Seiten sein. Die Schatten werden von hinten nach vorne gezeichnet, so dass der erste Schatten auf den nachfolgenden Schatten sitzt. Wenn der `border-radius` auf 0 gesetzt ist, wie es der Standard ist, werden die Ecken des Schattens Ecken sein. Hätten wir einen `border-radius` eines anderen Wertes eingegeben, wären die Ecken abgerundet gewesen.

Wir haben eine Margin in der Größe des breitesten Box-Schattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über die Grenze der umgebenden Box hinausragt. Ein Box-Schatten hat keinen Einfluss auf die [Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Dimensionen.

#### HTML

```html
<div><p>Hello World</p></div>
```

#### CSS

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

<!-- diese Farben sind absichtlich pink und blau. WCAG fordert Farbkontrast zwischen Text und Hintergrund, nicht zwischen Rahmenfarben. -->

#### Ergebnis

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Einführung in Text-Schatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
