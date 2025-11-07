---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS)-Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Kastenschatten wird durch X- und Y-Verschiebungen relativ zum Element sowie Weichzeichnungs- und Ausbreitungsradius und Farbe beschrieben.

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

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} für das Element mit einem Kastenschatten angegeben ist, übernimmt der Kastenschatten die gleichen abgerundeten Ecken. Die Z-Anordnung mehrerer Kastenschatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das Ihnen ermöglicht, einen `box-shadow` zu generieren.

## Syntax

```css
/* Keyword values */
box-shadow: none;

/* A color and two length values */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* Three length values and a color */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* Four length values and a color */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, length values, and a color */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
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

Einzelnen Kastenschatten angeben mit:

- Zwei, drei oder vier {{cssxref("length")}}-Werten.

  - Wenn nur zwei Werte angegeben werden, werden sie als `<offset-x>` und `<offset-y>`-Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird er als `<spread-radius>` interpretiert.

- Optional das `inset`-Schlüsselwort.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}

  - : Spezifiziert die Farbe des Schattens. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen. Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft des übergeordneten Elements verwendet.

- `<length>`

  - : Spezifiziert die Offset-Länge des Schattens. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:

    - Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontales Offset) und `<offset-y>` (vertikales Offset) Werte interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und es kann ein Blur-Effekt entstehen, wenn `<blur-radius>` und/oder `<spread-radius>` festgelegt ist).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer der Blur, wodurch der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf sein wird). Die Spezifikation enthält keinen genauen Algorithmus für die Berechnung des Blur-Radius; sie erläutert jedoch:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbübergang der Länge des Blur-Abstands erzeugen, der senkrecht zur Schattenkante und darauf zentriert ist und der von der vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb davon reicht.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte lassen den Schatten expandieren und größer werden, negative Werte lassen den Schatten schrumpfen. Wenn nicht angegeben, wird er auf `0` gesetzt (d.h. der Schatten wird genauso groß wie das Element sein).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Kastenschatten in einen inneren Kastenschatten (als ob der Inhalt in das Kästchen gedrückt wird). Eingefügte Schatten werden innerhalb des Rahmens des Kästchens gezeichnet (auch wenn der Rahmen transparent ist), und sie erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, was den Anschein erweckt, dass das Kästchen über seinem Inhalt erhoben ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, beispielsweise wenn mehrere Schattenwerte auf einem Kästchen in neue Werte übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Blur-Radius, den Ausbreitungsradius und die Farbe, während Schatten übergehen. Für jeden Schatten in einer Liste von Schatten ändern sich Farbe, x, y, Blur und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value), und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei kommagetrennten Listen mehrerer Kastenschatten werden die Schatten gepaart, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen der Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent`, und X, Y, und Blur `0` sind, wobei das Einfügen oder Nicht-Einfügen übereinstimmt. Wenn in einem Schattenpaar ein Schatten `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von drei Schatten

In diesem Beispiel enthalten wir drei Schatten: einen eingefügten Schatten, einen normalen Schlagschatten und einen 2px-Schlag, der einen Randeffekt erzeugt (wir hätten dafür stattdessen einen {{cssxref('outline')}} verwenden können).

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

### Einstellung von null für Offset und Blur

Wenn `x-offset`, `y-offset` und `blur` alle null sind, wird der Kastenschatten ein einfarbiger Umriss gleicher Größe auf allen Seiten sein. Die Schatten werden von hinten nach vorne gezeichnet, sodass der erste Schatten auf den nachfolgenden Schatten sitzt. Wenn `border-radius` auf 0 gesetzt ist, was der Standard ist, werden die Ecken des Schattens, nun ja, Ecken sein. Hätten wir einen `border-radius` eines anderen Wertes gesetzt, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Kastenschattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand des beinhaltenden Kastens hinausgeht. Ein Kastenschatten beeinflusst nicht die [Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Abmessungen.

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

<!-- diese Farben sind absichtlich pink und blau. WCAG verlangt Farbkontrast zwischen Text und Hintergrund, nicht zwischen Randfarben. -->

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
- [Einführung in Textschatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Anwenden von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
