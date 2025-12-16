---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Kastenschatten wird durch X- und Y-Versätze relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Spezifizieren Sie einen einzelnen Kastenschatten mit:

- Zwei, drei oder vier {{cssxref("length")}} Werten.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird dieser als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine kommagetrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der in dem übergeordneten Element definierten {{cssxref("color")}} Eigenschaft verwendet.

- `<length>`
  - : Gibt die Versetzungslänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontale Versetzung) und `<offset-y>` (vertikale Versetzung) interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten oberhalb des Elements.\
      Wird kein Wert angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter das Element gesetzt (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer wird die Unschärfe, sodass der Schatten größer und leichter wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass der Rand des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus zur Berechnung des Unschärferadius; sie erläutert jedoch Folgendes:

      > …für eine lange gerade Schattenkante sollte dies einen Farbverlauf von der Länge des Unschärfebereichs erzeugen, der senkrecht zur Schattenkante und zentriert auf dieser liegt und der vom vollen Schattenfarbwert am Überlappungsende innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass sich der Schatten ausdehnt und größer wird, negative Werte bewirken, dass der Schatten schrumpft. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Kastenschatten zu einem inneren Kastenschatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden innerhalb des Rahmens der Box gezeichnet (selbst wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Abwurf-Schatten, was den Anschein erweckt, dass die Box über ihrem Inhalt erhöht ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, beispielsweise wenn mehrere Schattenwerte auf einer Box beim Hover über die neuen Werte übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt die Zwischenwerte von Eigenschaften, wie zum Beispiel den Unschärfe- und den Ausbreitungsradius sowie die Farbe, während die Schattenübergänge erfolgen. Für jeden Schatten in einer Liste von Schatten wechseln Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als {{cssxref("&lt;color&gt;")}}, und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei kommagetrennten Listen von mehreren Kastenschatten werden die Schatten paarweise gruppiert, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Schattenlisten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist, und x, y, und Unschärfe sind `0`, wobei das `inset` oder das Fehlen davon angepasst wird. Wenn in einem Paar von Schatten einer `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten wechseln ohne Animierungseffekt zu den neuen Werten.

## Beschreibung

Die `box-shadow` Eigenschaft ermöglicht es Ihnen, einen Abwurf-Schatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf das Element mit einem Kastenschatten angewendet wird, übernimmt der Kastenschatten die gleichen abgerundeten Ecken. Die z-Reihenfolge mehrerer Kastenschatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

[Box-shadow generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu generieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von drei Schatten

In diesem Beispiel fügen wir drei Schatten ein: einen eingesetzten Schatten, einen regulären Abwurf-Schatten und einen 2px Schatten, der einen Rahmen-Effekt erzeugt (wir hätten stattdessen ein {{cssxref('outline')}} für diesen dritten Schatten verwenden können).

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

### Setzen von Null für Versatz und Unschärfe

Wenn der `x-offset`, `y-offset` und `blur` alle null sind, ist der Kastenschatten ein einfarbiger Umriss gleicher Größe auf allen Seiten. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten über den nachfolgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, haben die Ecken des Schattens, na ja, Ecken. Hätten wir einen `border-radius` eines beliebigen anderen Wertes angegeben, wären die Ecken abgerundet gewesen.

Wir haben einen Rand in der Größe des breitesten Kastenschattens hinzugefügt, um sicherzustellen, dass der Schatten nicht benachbarte Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Kastenschatten beeinflusst keine [Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Dimensionen.

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

<!-- diese Farben sind absichtlich pink und blau. Die WCAG erfordert Farbkontrast zwischen Text und Hintergrund, nicht zwischen Rahmenfarben. -->

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
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
