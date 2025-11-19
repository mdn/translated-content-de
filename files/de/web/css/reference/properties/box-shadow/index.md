---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`box-shadow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Geben Sie einen einzelnen Box-Schatten an, indem Sie:

- Zwei, drei oder vier {{cssxref("length")}}-Werte angeben.
  - Wenn nur zwei Werte angegeben werden, werden diese als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird dieser als `<spread-radius>` interpretiert.

- Optional das `inset`-Schlüsselwort.
- Optional einen [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der im übergeordneten Element definierten {{cssxref("color")}}-Eigenschaft verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Diese werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben werden, werden diese als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten oberhalb des Elements.\
      Wird kein Wert angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe, wodurch der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf sein wird). Die Spezifikation enthält keinen genauen Algorithmus, wie der Unschärferadius berechnet werden sollte; sie erklärt jedoch wie folgt:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf in der Länge der Unschärfendistanz erzeugen, der senkrecht zur und zentriert auf der Kante des Schattens liegt, und der von der vollen Schattenfarbe an dem innerhalb des Schattens liegenden Endpunkt bis zur vollständigen Transparenz am außerhalb des Schattens liegenden Endpunkt reicht.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte führen dazu, dass sich der Schatten ausdehnt und größer wird, negative Werte lassen den Schatten schrumpfen. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten wird die gleiche Größe wie das Element haben).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box eingedrückt wäre). Inset Schatten werden innerhalb des Rahmens der Box gezeichnet (auch wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, wodurch die Box über ihrem Inhalt zu schweben scheint. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, z. B. wenn mehrere Schattenwerte auf einer Box zu neuen Werten beim Hover übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften wie Unschärferadius, Ausbreitungsradius und Farbe, während die Schatten übergehen. Für jeden Schatten in einer Liste von Schatten wechseln die Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value), und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei durch Kommas getrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zusammengefasst, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen der Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist, und X, Y und Unschärfe auf `0` stehen, wobei das Vorhandensein oder Nichtvorhandensein von `inset` so angepasst wird, dass es übereinstimmt. Wenn in einem Paar von Schatten einer `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne einen Animationseffekt.

## Beschreibung

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn auf dem Element mit einem Box-Schatten ein {{cssxref("border-radius")}} angegeben ist, nimmt der Box-Schatten die gleichen abgerundeten Ecken an. Das Z-Ordering mehrerer Box-Schatten entspricht dem mehrerer [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten befindet sich oben).

Der [Box-shadow-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu generieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von drei Schatten

In diesem Beispiel fügen wir drei Schatten hinzu: einen inneren Schatten, einen normalen Schlagschatten und einen 2px Schatten, der einen Rahmen-Effekt erzeugt (wir hätten stattdessen ein {{cssxref('outline')}} für diesen dritten Schatten verwenden können).

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

### Nullwerte für Versatz und Unschärfe festlegen

Wenn die `x-offset`, `y-offset` und `blur` alle auf null gesetzt sind, wird der Box-Schatten eine einfarbige Umrandung von gleicher Größe auf allen Seiten sein. Die Schatten werden von hinten nach vorne gezeichnet, sodass der erste Schatten über den nachfolgenden sitzt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens tatsächlich Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert eingesetzt, wären die Ecken abgerundet.

Wir haben eine Marge in der Größe des breitesten Box-Schattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Box-Schatten hat keinen Einfluss auf die Dimensionen des [Box-Modells](/de/docs/Web/CSS/Guides/Box_model).

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

<!-- diese Farben sind absichtlich pink und blau. WCAG erfordert Kontrast zwischen Text und Hintergrund, nicht zwischen Rahmenfarben. -->

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
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
