---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommata getrennt sind. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Unschärfe- und Spreizradius sowie Farbe beschrieben.

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

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf dem Element mit einem Box-Schatten angegeben ist, übernimmt der Box-Schatten die gleichen abgerundeten Ecken. Die Z-Reihenfolge mehrerer Box-Schatten ist die gleiche wie die mehrerer [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

Der [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu generieren.

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

Einzelne Box-Schatten werden folgendermaßen angegeben:

- Zwei, drei oder vier {{cssxref("length")}} Werte.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>`- und `<offset-y>`-Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird er als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Bestimmt die Farbe des Schattens. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der {{cssxref("color")}} Eigenschaft verwendet, die im übergeordneten Element definiert ist.

- `<length>`
  - : Bestimmt die Versatzlänge des Schattens. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>`- (horizontaler Versatz) und `<offset-y>`- (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>`-Wert positioniert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert positioniert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` festgelegt sind).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer wird die Unschärfe, daher wird der Schatten größer und heller. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus dafür, wie der Unschärferadius berechnet werden sollte; sie erläutert jedoch Folgendes:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf in der Länge der Unschärfedistanz erzeugen, der senkrecht zu und zentriert auf der Schattenkante verläuft und der vom vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis vollständig transparent am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte führen dazu, dass sich der Schatten ausdehnt und größer wird, negative Werte führen dazu, dass der Schatten schrumpft. Wenn nicht angegeben, wird er auf `0` gesetzt (das bedeutet, dass der Schatten die gleiche Größe wie das Element hat).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren box-shadow zu einem inneren Box-Schatten (als ob der Inhalt in die Box gepresst wird). Innere Schatten werden innerhalb des Rahmens der Box gezeichnet (auch wenn der Rahmen transparent ist), und sie erscheinen über dem Hintergrund, aber unterhalb des Inhalts. Standardmäßig verhält sich der Schatten wie ein Schlagschatten und vermittelt den Eindruck, dass die Box über ihrem Inhalt schwebt. Dies ist das standardmäßige Verhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, wie zum Beispiel, wenn mehrere Schattenwerte auf einer Box zu neuen Werten übergehen, wenn man mit der Maus darüber fährt, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Unschärferadius, den Spreizradius und die Farbe, während die Schatten wechseln. Für jeden Schatten in einer Liste von Schatten werden die Farbe, x, y, Unschärfe und Spreizung überblendet; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value), und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei kommagetrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zugeordnet, wobei die Interpolation zwischen den gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten gepolstert, deren Farbe `transparent` ist und deren X, Y und Unschärfe `0` sind, wobei `inset` oder das Fehlen von `inset` so eingestellt wird, dass sie übereinstimmen. Wenn in einem Paar von Schatten einer `inset` eingestellt und der andere nicht hat, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne einen animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten ein: einen inneren Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Rahmen-Effekt erzeugt (wir könnten stattdessen eine {{cssxref('outline')}} für diesen dritten Schatten verwenden).

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

### Null für Versatz und Unschärfe setzen

Wenn `x-offset`, `y-offset` und `blur` alle null sind, wird der Box-Schatten eine einfarbige Umrandung in gleicher Größe auf allen Seiten sein. Die Schatten werden rückwärts gezeichnet, sodass der erste Schatten über den folgenden Schatten liegt. Wenn `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens kantig sein. Hätten wir einen `border-radius` eines anderen Wertes festgelegt, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand des umgebenden Kastens hinausgeht. Ein Box-Schatten hat keinen Einfluss auf die [Box-Modell](/de/docs/Web/CSS/CSS_box_model) Dimensionen.

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

<!-- diese Farben sind absichtlich pink und blau. WCAG erfordert Farbkontrast zwischen Text und Hintergrund, nicht zwischen Randfarben. -->

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
- [Einführung in Textschatten](/de/docs/Web/CSS/CSS_text_decoration/Text_shadows)
- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
