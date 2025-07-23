---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: 068bb0449377f73e358a92b1b26265aa30c02db1
---

Die **`box-shadow`**-Eigenschaft in [CSS](/de/docs/Web/CSS) fügt Schattierungseffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Boxschatten wird durch X- und Y-Versätze relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn eine {{cssxref("border-radius")}} auf das Element mit einem Boxschatten angewendet wird, übernimmt der Boxschatten die gleichen abgerundeten Ecken. Die Z-Anordnung mehrerer Boxschatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

Der [Box-shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das Ihnen ermöglicht, einen `box-shadow` zu generieren.

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

Geben Sie einen einzelnen Boxschatten an, indem Sie folgende Werte verwenden:

- Zwei, drei oder vier {{cssxref("length")}} Werte.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>`- und `<offset-y>`-Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird dieser als `<spread-radius>` interpretiert.

- Optional das `inset`-Schlüsselwort.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine kommaseparierte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe des Schattens an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft des übergeordneten Elements verwendet.

- `<length>`
  - : Gibt die Versetzungslänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe, somit wird der Schatten größer und heller. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Schattengrenze scharf ist). Die Spezifikation enthält keinen genauen Algorithmus, wie der Unschärferadius berechnet werden soll; jedoch beschreibt sie dies folgendermaßen:

      > …für eine lange, gerade Schattengrenze sollte dies einen Farbverlauf in der Länge der Unschärfedistanz erzeugen, der senkrecht zur und zentriert auf der Schattengrenze ist und der von der vollen Schattenfarbe an dem Endpunkt des Radius innerhalb des Schattens bis hin zu vollständig transparent am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte führen dazu, dass der Schatten sich ausdehnt und größer wird, negative Werte führen dazu, dass sich der Schatten verkleinert. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten wird die gleiche Größe wie das Element haben).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Boxschatten in einen inneren Boxschatten (als ob der Inhalt in die Box gedrückt wird). Einfügende Schatten werden innerhalb des Randes der Box gezeichnet (auch wenn der Rand transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, der den Eindruck vermittelt, dass die Box über ihrem Inhalt erhöht ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, wie wenn mehrere Schattenwerte auf einer Box bei Hover zu neuen Werten übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Unschärferadius, den Ausbreitungsradius und die Farbe, wenn Schatten übergehen. Für jeden Schatten in einer Liste von Schatten werden die Farbe, x, y, Unschärfe und Ausbreitung interpoliert; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value) und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei kommagetrennten Listen mehrerer Boxschatten werden die Schatten paarweise kombiniert, wobei die Interpolation zwischen gepaarten Schatten stattfindet. Wenn die Schattenlisten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten gefüllt, deren Farbe `transparent` ist, und X, Y und Unschärfe `0` sind, wobei das Einfügen oder Fehlen des Einfügens angepasst wird. Wenn in einem Paar von Schatten einer das `inset` gesetzt ist und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne Animierungseffekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von drei Schatten

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesteckten Schatten, einen normalen Schlagschatten und einen 2px-Schatten, der einen Randeffekt erzeugt (wir hätten stattdessen ein {{cssxref('outline')}} für diesen dritten Schatten verwenden können).

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

### Festlegen von Null für Versatz und Unschärfe

Wenn der `x-offset`, `y-offset` und die `Unschärfe` alle Null sind, wird der Boxschatten ein solide gefärbtes, gleichmäßig großes Umriss auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten auf den nachfolgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens scharf sein. Hätten wir einen `border-radius` von einem anderen Wert angegeben, wären die Ecken abgerundet gewesen.

Wir haben eine Marge in der Größe des breitesten Boxschattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder den Rand der enthaltenden Box überschreitet. Ein Boxschatten hat keine Auswirkungen auf die [Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Dimensionen.

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

<!-- diese Farben sind absichtlich pink und blau. Die WCAG erfordert einen Farbkontrast zwischen Text und Hintergrund, nicht zwischen Randfarben. -->

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
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
