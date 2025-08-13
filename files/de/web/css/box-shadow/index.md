---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte durch Kommata getrennt festlegen. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Die `box-shadow` Eigenschaft ermöglicht es Ihnen, einen Schlagschatten aus dem Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf das Element mit einem Box-Schatten angewendet wird, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Reihenfolge von mehreren Box-Schatten ist dieselbe wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

Der [Box-Shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu generieren.

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

Einzelnen Box-Schatten angeben mit:

- Zwei, drei oder vier {{cssxref("length")}} Werten.
  - Wenn nur zwei Werte angegeben werden, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird dieser als `<spread-radius>` interpretiert.

- Optional, das `inset` Schlüsselwort.
- Optional, ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe des Schattens an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der {{cssxref("color")}} Eigenschaft des übergeordneten Elements verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe, und der Schatten wird größer und heller. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf sein wird). Die Spezifikation enthält keinen exakten Algorithmus zur Berechnung des Unschärferadius; sie erläutert jedoch:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf über die Länge der Unschärfedistanz erzeugen, die senkrecht zur Schattenkante und darauf zentriert ist, und der Farbverlauf reicht vom vollständigen Schatten am Radius-Endpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass der Schatten sich ausdehnt und größer wird, negative Werte bewirken, dass der Schatten schrumpft. Wenn nicht angegeben, wird er auf `0` gesetzt (das bedeutet, der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden innerhalb des Rahmens des Kästchens gezeichnet (auch wenn der Rahmen transparent ist), und sie erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten und vermittelt den Eindruck, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, zum Beispiel wenn mehrere Schattenwerte auf einer Box auf neue Werte beim Hover übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften wie Unschärferadius, Ausbreitungsradius und Farbe, während Schatten übergehen. Für jeden Schatten in einer Liste von Schatten changiert die Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value) und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei durch Kommas getrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zugeordnet, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, dann wird die kürzere Liste am Ende mit Schatten aufgefüllt, deren Farbe `transparent` ist, und deren X, Y und Unschärfe `0` sind, wobei das `inset` oder dessen Fehlen übereinstimmt. Wenn in einem Schattenpaar einer `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich direkt zu den neuen Werten ohne einen Animationseffekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten ein: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px Schatten, der einen Randeffekt erzeugt (wir hätten stattdessen ein {{cssxref('outline')}} für diesen dritten Schatten verwenden können).

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

Wenn der `x-offset`, `y-offset` und die `blur` alle Null sind, wird der Box-Schatten eine solide, farbige Umrandung in gleicher Größe auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten über den folgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens, na ja, Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert eingesetzt, wären die Ecken abgerundet gewesen.

Wir haben eine Marge in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten nicht benachbarte Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Box-Schatten wirkt sich nicht auf die [Box-Modell](/de/docs/Web/CSS/CSS_box_model) Dimensionen aus.

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

<!-- diese Farben sind absichtlich pink und blau gewählt. WCAG erfordert Farbkontrast zwischen Text und Hintergrund, nicht zwischen den Rahmenfarben. -->

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
