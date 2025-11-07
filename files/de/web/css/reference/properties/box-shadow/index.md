---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Die `box-shadow` Eigenschaft ermöglicht es, einen Schatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf dem Element mit einem Box-Schatten angegeben ist, nimmt der Box-Schatten die gleichen abgerundeten Ecken an. Die Z-Anordnung mehrerer Box-Schatten entspricht der von mehreren [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu generieren.

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

Ein einzelner Box-Schatten wird wie folgt beschrieben:

- Zwei, drei oder vier {{cssxref("length")}} Werte.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird dieser als `<spread-radius>` interpretiert.

- Optional das `inset` Schlüsselwort.
- Optional ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wird keine Farbe angegeben, wird der Wert der {{cssxref("color")}} Eigenschaft des übergeordneten Elements verwendet.

- `<length>`
  - : Bestimmt die Versatzlänge des Schattens. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Sie werden folgendermaßen interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten oberhalb des Elements. Wird nicht angegeben, wird ein Wert von `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer ist die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wird nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus zur Berechnung des Unschärferadius, sie erläutert jedoch Folgendes:

      > …für eine lange, gerade Schattenkante soll dies einen Farbverlauf über die Länge der Unschärfendistanz erzeugen, die senkrecht zur und zentriert auf die Schattenkante ist, und die von der vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis zur völligen Transparenz am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte lassen den Schatten größer werden, negative Werte lassen den Schatten schrumpfen. Wird nicht angegeben, wird es auf `0` gesetzt (das heißt, der Schatten ist gleich groß wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten in einen inneren Box-Schatten (als ob der Inhalt in die Box gedrückt ist). Eingesetzte Schatten werden innerhalb der Rahmen der Box gezeichnet (auch wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, sodass es den Anschein hat, als sei die Box über ihrem Inhalt erhöht. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, wie z.B. wenn mehrere Schattenwerte auf einer Box übergehen, während sie beim Überfahren (Hover) neue Werte annehmen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Unschärferadius, den Ausbreitungsradius und die Farbe, wenn Schatten übergehen. Für jeden Schatten in einer Liste von Schatten werden die Farbe, x, y, Unschärfe und Ausbreitung überblendet; die Farbe als [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value), und die anderen Werte als {{cssxref("length")}}.

Bei der Interpolation mehrerer Schatten zwischen zwei durch Kommas getrennten Listen mehrerer Box-Schatten werden die Schatten gepaart, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen der Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist, und mit X, Y und Unschärfe von `0`, wobei die Innenseite oder das Fehlen der Innenseite angepasst wird. Wenn in einem Paar von Schatten einer `inset` gesetzt hat und der andere nicht, bleibt die gesamte Schattenliste uninterpoliert; die Schatten wechseln zu den neuen Werten ohne animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten festlegen

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Rahmeneffekt erzeugt (wir hätten stattdessen für diesen dritten Schatten auch ein {{cssxref('outline')}} verwenden können).

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

Wenn `x-offset`, `y-offset` und `blur` alle auf Null gesetzt sind, ist der Schlagschatten ein einfarbiger Rahmen gleicher Größe auf allen Seiten. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten über den darauf folgenden liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie standardmäßig, werden die Ecken des Schattens, na ja, Ecken sein. Hätten wir einen `border-radius` eines anderen Wertes gesetzt, wären die Ecken abgerundet gewesen.

Wir haben einen Rand in der Größe des breitesten Box-Schattens hinzugefügt, um sicherzustellen, dass der Schatten nicht angrenzende Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Box-Schatten beeinflusst nicht die [Box-Modell](/de/docs/Web/CSS/CSS_box_model) Dimensionen.

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

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Einführung in Textschatten](/de/docs/Web/CSS/CSS_text_decoration/Text_shadows)
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
