---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`box-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte angeben, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Weichzeichnungs- und Verbreitungsradius sowie Farbe beschrieben.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

Die Eigenschaft `box-shadow` ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} für das Element mit einem Box-Schatten angegeben ist, übernimmt der Box-Schatten die gleichen abgerundeten Ecken. Die Z-Reihenfolge mehrerer Box-Schatten ist dieselbe wie die mehrerer [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten befindet sich oben).

Der [Box-Shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Tool, das es Ihnen ermöglicht, einen `box-shadow` zu erstellen.

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

Geben Sie einen einzelnen Box-Schatten an mit:

- Zwei, drei oder vier {{cssxref("length")}} Werten.

  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird er als `<spread-radius>` interpretiert.

- Optional, das `inset` Schlüsselwort.
- Optional, ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine kommagetrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der im Elternelement definierten {{cssxref("color")}} Eigenschaft verwendet.

- `<length>`

  - : Gibt die Offset-Längen des Schattens an. Diese Parameter akzeptieren zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:

    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>` Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>` Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Weichzeichnungseffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` eingestellt sind).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer der Weichzeichnungsgrad, so dass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus zur Berechnung des Weichzeichnungsradius; jedoch wird er wie folgt erläutert:

      > ...für eine lange, gerade Schattenkante sollte dies einen Farbverlauf in der Länge der Weichzeichnungsentfernung erzeugen, der senkrecht zur Schattenkante zentriert ist und der von der vollen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass der Schatten sich ausdehnt und größer wird, negative Werte führen dazu, dass der Schatten kleiner wird. Wenn nicht angegeben, wird er auf `0` gesetzt (das heißt, der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten in einen inneren Box-Schatten (als ob der Inhalt in die Box hineingedrückt ist). Innere Schatten werden innerhalb des Randes der Box gezeichnet (selbst wenn der Rand transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, was den Anschein erweckt, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, z. B. wenn mehrere Schattenwerte auf einer Box beim Überfahren auf neue Werte wechseln, werden die Werte interpoliert. [Interpolation](/de/docs/Glossary/Interpolation) bestimmt Zwischenwerte von Eigenschaften, wie den Weichzeichnungsradius, Verbreitungsradius und die Farbe, während Schatten übergehen. Für jeden Schatten in einer Liste von Schatten werden die Farbe, x, y, Weichzeichnung und Verbreitung geändert; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value), und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei kommagetrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zugeordnet, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten ergänzt, deren Farbe `transparent` ist und deren X, Y und Weichzeichnung `0` sind, wobei das Vorhandensein oder Fehlen des `inset` angepasst wird. Wenn in einem Schattenpaar eines `inset` gesetzt hat und das andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich ohne Animation auf die neuen Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel verwenden wir drei Schatten: einen inneren Schatten, einen normalen Schlagschatten und einen 2px Schatten, der einen Randeffekt erzeugt (wir könnten für diesen dritten Schatten stattdessen einen {{cssxref('outline')}} verwenden).

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

### Null für Versatz und Weichzeichnung festlegen

Wenn `x-offset`, `y-offset` und `blur` alle null sind, wird der Box-Schatten eine einfarbige Umrandung gleicher Größe auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten über den nachfolgenden Schatten liegt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, haben die Ecken des Schattens – nun ja – Ecken. Hätten wir einen `border-radius` eines anderen Wertes angegeben, wären die Ecken abgerundet gewesen.

Wir haben einen Rand hinzugefügt, der der Größe des breitesten Box-Schattens entspricht, um sicherzustellen, dass der Schatten nicht an benachbarte Elemente stößt oder über den Rand der enthaltenen Box hinausgeht. Ein Box-Schatten beeinflusst nicht die [Box Modell](/de/docs/Web/CSS/CSS_box_model) Abmessungen.

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

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zum Festlegen der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
