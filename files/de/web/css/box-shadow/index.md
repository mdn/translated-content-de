---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schattierungseffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte durch Kommata getrennt festlegen. Ein Kastenschatten wird durch X- und Y-Abstände relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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
  border: 2px solid #333;
  width: 80%;
  text-align: center;
}
```

Die `box-shadow`-Eigenschaft ermöglicht es, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}}-Attribut auf ein Element mit einem Kastenschatten angewendet wird, übernimmt der Kastenschatten die gleichen abgerundeten Ecken. Die z-Ordnung mehrerer Kastenschattierungen ist dieselbe wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das Ihnen ermöglicht, einen `box-shadow` zu erstellen.

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

Geben Sie einen einzelnen Kastenschatten an durch:

- Zwei, drei oder vier {{cssxref("length")}} Werte.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wird ein dritter Wert angegeben, wird dieser als `<blur-radius>` interpretiert.
  - Wird ein vierter Wert angegeben, wird dieser als `<spread-radius>` interpretiert.

- Optional das `inset` Schlüsselwort.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommata getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Falls nicht angegeben, wird der Wert der {{cssxref("color")}} Eigenschaft des Elternelements verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten oberhalb des Elements.\
      Falls nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Falls drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer wird die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Falls nicht angegeben, wird er auf `0` gesetzt (bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus, wie der Unschärferadius berechnet werden soll; sie erläutert jedoch Folgendes:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf in der Länge der Unschärfestrecke erzeugen, der senkrecht dazu verläuft und zentriert auf die Schattenkante ist, und der von der vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb davon reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte lassen den Schatten größer werden, negative Werte lassen den Schatten schrumpfen. Falls nicht angegeben, wird er auf `0` gesetzt (d.h. der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Kastenschatten zu einem inneren Kastenschatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden innerhalb der Box-Grenzen gezeichnet (selbst wenn der Rand transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, wodurch der Anschein entsteht, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, wie wenn mehrere Schattenwerte auf einer Box zu neuen Werten bei Hover übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie z. B. den Unschärferadius, den Streuradius und die Farbe, während sich Schatten ändern. Für jeden Schatten in einer Liste von Schatten übergehen Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value) und die anderen Werte als {{cssxref("length")}}.

Beim Interpolieren mehrerer Schatten zwischen zwei durch Komma getrennten Listen von mehreren Kastenschattierungen werden die Schatten paarweise zugeordnet und die Interpolation erfolgt zwischen gepaarten Schatten. Wenn die Listen unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist, und X, Y und Unschärfe sind `0`, wobei das Vorhandensein oder Fehlen von `inset` übereinstimmt. Wenn in einem Schattenpaar ein Schatten `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Rahmen-Effekt erzeugt (wir hätten dafür auch ein {{cssxref('outline')}} verwenden können).

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

Wenn der `x-Versatz`, `y-Versatz` und die `Unschärfe` alle auf Null gesetzt sind, ist der Kastenschatten eine einfarbige Umrandung in gleicher Größe auf allen Seiten. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten oberhalb der nachfolgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, was der Standard ist, werden die Ecken des Schattens Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert eingefügt, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Kastenschattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Kastenschatten beeinflusst nicht die [Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Dimensionen.

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

<!-- these colors are intentionally pink and blue. WCAG requires color contrast between text and background, not between border colors. -->

#### Ergebnis

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zum Festlegen der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
