---
title: "`box-shadow` CSS property"
short-title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`box-shadow`** fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere durch Kommas getrennte Effekte festlegen. Ein Box-Schatten wird durch X- und Y-Versätze relativ zum Element, den Unschärfe- und Ausbreitungsradius sowie die Farbe beschrieben.

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
/* Keyword value */
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

Legen Sie einen einzelnen Box-Schatten fest mit:

- Zwei, drei oder vier {{cssxref("length")}}-Werten.
  - Wenn nur zwei Werte angegeben werden, werden sie als Werte für `<offset-x>` und `<offset-y>` interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird er als `<spread-radius>` interpretiert.

- Optional dem Schlüsselwort `inset`.
- Optional einem [`<color>`](#color)-Wert.

Um mehrere Schatten festzulegen, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Legt die Farbe für den Schatten fest. Mögliche Schlüsselwörter und Notationen finden Sie unter den {{cssxref("&lt;color&gt;")}}-Werten.
    Wenn nicht angegeben, wird der Wert der im übergeordneten Element definierten {{cssxref("color")}}-Eigenschaft verwendet.

- `<length>`
  - : Legt die Versatzlänge des Schattens fest. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben werden, werden sie als `<offset-x>`-Wert (horizontaler Versatz) und `<offset-y>`-Wert (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto stärker ist die Unschärfe, wodurch der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen exakten Algorithmus dafür, wie der Unschärferadius berechnet werden soll; sie führt jedoch Folgendes aus:

      > …bei einer langen, geraden Schattenkante sollte dies einen Farbübergang mit der Länge der Unschärfedistanz erzeugen, der senkrecht zur Schattenkante verläuft und auf ihr zentriert ist und der von der vollständigen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis vollständig transparent am Endpunkt außerhalb davon reicht.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass sich der Schatten ausdehnt und größer wird, negative Werte bewirken, dass der Schatten schrumpft. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten hat dieselbe Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt würde). Innere Schatten werden auf die Padding-Box des Elements zugeschnitten und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten und erweckt den Eindruck, dass die Box über ihrem Inhalt angehoben ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, beispielsweise wenn mehrere Schattenwerte einer Box beim Überfahren mit der Maus in neue Werte übergehen, werden die Werte interpoliert. Die {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften wie Unschärferadius, Ausbreitungsradius und Farbe, während Schatten übergehen. Für jeden Schatten in einer Schattenliste gehen Farbe, x, y, Unschärfe und Ausbreitung über; die Farbe als {{cssxref("&lt;color&gt;")}} und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei durch Kommas getrennten Listen mehrerer Box-Schatten werden die Schatten der Reihe nach gepaart, wobei die Interpolation zwischen den gepaarten Schatten erfolgt. Wenn die Schattenlisten unterschiedlich lang sind, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` und deren X, Y und Unschärfe `0` sind; dabei wird `inset` beziehungsweise das Fehlen von `inset` passend gesetzt. Wenn in einem Schattenpaar bei einem Schatten `inset` gesetzt ist und beim anderen nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten wechseln ohne Animationseffekt zu den neuen Werten.

## Beschreibung

Die Eigenschaft `box-shadow` ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements auszuwerfen. Wenn für das Element mit einem Box-Schatten ein {{cssxref("border-radius")}} angegeben ist, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Reihenfolge mehrerer Box-Schatten entspricht der mehrerer [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Werkzeug, mit dem Sie einen `box-shadow` generieren können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten festlegen

In diesem Beispiel fügen wir drei Schatten ein: einen inneren Schatten, einen regulären Schlagschatten und einen 2px-Schatten, der einen Rahmeneffekt erzeugt (wir hätten für diesen dritten Schatten stattdessen auch ein {{cssxref('outline')}} verwenden können).

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

### Null für Versatz und Unschärfe festlegen

Wenn `x-offset`, `y-offset` und `blur` alle null sind, ist der Box-Schatten eine einfarbige Kontur gleicher Größe auf allen Seiten. Die Schatten werden von hinten nach vorne gezeichnet, sodass der erste Schatten über den nachfolgenden Schatten liegt. Wenn `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, sind die Ecken des Schattens nun einmal Ecken. Hätten wir einen `border-radius` mit einem anderen Wert angegeben, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Box-Schattens hinzugefügt, um sicherzustellen, dass der Schatten keine benachbarten Elemente überlappt und nicht über den Rahmen der enthaltenden Box hinausgeht. Ein Box-Schatten wirkt sich nicht auf die Dimensionen des [Box-Modells](/de/docs/Web/CSS/Guides/Box_model) aus.

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
- [Einführung in Textschatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
