---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommata getrennt werden. Ein Kastenschatten wird durch X- und Y-Versatz relativ zum Element beschrieben, sowie durch Unschärferadius, Ausbreitungsradius und Farbe.

{{InteractiveExample("CSS Demo: box-shadow")}}

```css interactive-example-choice
box-shadow: 10px 5px 5px red;
```

```css interactive-example-choice
box-shadow: 60px -16px teal;
```

```css interactive-example-choice
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
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
  border: 2px solid #333;
  width: 80%;
  text-align: center;
}
```

Die `box-shadow` Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf dem Element mit einem Kastenschatten angegeben wird, übernimmt der Kastenschatten die gleichen abgerundeten Ecken. Die Z-Reihenfolge mehrerer Kastenschatten ist dieselbe wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

Der [Box-shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu erstellen.

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

Geben Sie einen einzelnen Kastenschatten an, indem Sie:

- Zwei, drei oder vier {{cssxref("length")}} Werte angeben.

  - Wenn nur zwei Werte angegeben werden, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird dieser als `<spread-radius>` interpretiert.

- Optional das `inset` Schlüsselwort.
- Optional einen [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der im übergeordneten Element definierten {{cssxref("color")}} Eigenschaft verwendet.

- `<length>`

  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:

    - Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer ist die Unschärfe, sodass der Schatten größer und leichter wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Schattenkante scharf sein wird). Die Spezifikation enthält keinen genauen Algorithmus dafür, wie der Unschärferadius berechnet werden sollte; sie erläutert jedoch wie folgt:

      > …bei einer langen, geraden Schattenkante sollte dies einen Farbverlauf in der Länge des Unschärfeabstands erzeugen, der senkrecht zur Schattenkante liegt und von der vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis hin zu vollständig transparent am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte vergrößern und erweitern den Schatten, negative Werte verkleinern ihn. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten wird die gleiche Größe wie das Element haben).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Kastenschatten zu einem inneren Kastenschatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden innerhalb des Rahmens der Box gezeichnet (auch wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, der den Eindruck erweckt, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Wenn Schatten animiert werden, wie wenn mehrere Schattenwerte auf einer Box sich bei Hover-Effekten zu neuen Werten ändern, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie Unschärferadius, Ausbreitungsradius und Farbe, wenn Schatten übergehen. Für jeden Schatten in einer Liste von Schatten gehen die Farbe, x, y, Unschärfe und Ausbreitung über; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value), und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei durch Kommas getrennten Listen von mehreren Kastenschatten werden die Schatten paarweise angeordnet, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten ausgefüllt, deren Farbe `transparent` ist, und X, Y und Unschärfe sind `0`, wobei der Einsatz, oder das Fehlen von Einsatz, aufeinander abgestimmt ist. Wenn in einem Schattenpaar einer `inset` gesetzt hat und der andere nicht, bleibt die gesamte Schattenliste uninterpoliert; die Schatten ändern ihre Werte ohne einen animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Rahmen-Effekt erzeugt (wir hätten auch ein {{cssxref('outline')}} dafür nutzen können).

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

### Nullwert für Versatz und Unschärfe

Wenn `x-offset`, `y-offset` und `Unscharfe` alle null sind, wird der Kastenschatten ein einfarbiger Umriss gleicher Größe auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten oben auf den nachfolgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens, na ja, Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert eingesetzt, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Kastenschattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rahmen der beinhaltenden Box hinausragt. Ein Kastenschatten hat keinen Einfluss auf [Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Dimensionen.

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

<!-- diese Farben sind absichtlich pink und blau. WCAG erfordert Farbkontrast zwischen Text und Hintergrund, nicht zwischen Rahmenfarben. -->

#### Ergebnis

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zur Angabe der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
