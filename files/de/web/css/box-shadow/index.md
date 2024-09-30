---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`box-shadow`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte setzen, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Offsets relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, von fast jedem Elementrahmen einen Schlagschatten zu werfen. Falls ein {{cssxref("border-radius")}} auf das Element mit einem Box-Schatten angewendet wird, übernimmt der Box-Schatten die gleichen abgerundeten Ecken. Die Reihenfolge von mehreren Box-Schatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

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

Einen einzelnen Box-Schatten angeben mit:

- Zwei, drei oder vier {{cssxref("length")}}-Werten.

  - Wenn nur zwei Werte angegeben werden, werden sie als `<offset-x>`- und `<offset-y>`-Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird er als `<spread-radius>` interpretiert.

- Optional das `inset`-Schlüsselwort.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen. Wenn nicht angegeben, wird der Wert der im Elternelement definierten {{cssxref("color")}}-Eigenschaft verwendet.

- `<length>`

  - : Gibt die Offset-Länge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:

    - Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontaler Offset) und `<offset-y>` (vertikaler Offset) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
    - Wenn drei Werte angegeben werden, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer wird die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Schattenkante scharf ist). Die Spezifikation enthält keinen genauen Algorithmus dafür, wie der Unschärferadius berechnet werden sollte; sie stellt jedoch Folgendes klar:

      > … für eine lange, gerade Schattenkante sollte dies einen Farbverlauf in der Länge des Unschärfeabstands erzeugen, der senkrecht zur und zentriert auf der Schattenkante ist, und der von der vollen Schattenfarbe am Endpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben werden, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte führen dazu, dass der Schatten sich ausdehnt und größer wird, negative Werte führen dazu, dass der Schatten sich verkleinert. Wenn nicht angegeben, wird er auf `0` gesetzt (d.h., der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Innere Schatten werden innerhalb der Rahmenlinie der Box gezeichnet (auch wenn der Rahmen transparent ist) und sie erscheinen oberhalb des Hintergrunds, aber unterhalb des Inhalts. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, was den Anschein erweckt, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben wird.

### Interpolation

Bei der Animation von Schatten, z. B. wenn mehrere Schattenwerte auf einer Box zu neuen Werten beim Überfahren wechseln, werden die Werte interpoliert. [Interpolation](/de/docs/Glossary/Interpolation) bestimmt Zwischenwerte von Eigenschaften, wie den Unschärferadius, Ausbreitungsradius und die Farbe, während Schatten wechseln. Für jeden Schatten in einer Liste von Schatten wechseln Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value), und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei durch Kommas getrennten Listen von Box-Schatten werden die Schatten paarweise zugeordnet, wobei eine Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten ergänzt, deren Farbe `transparent` ist und deren X-, Y- und Unschärfe-Werte auf `0` gesetzt sind, wobei die Einfügung oder das Fehlen derselben angepasst ist. Wenn bei einem Schattenpaar bei einem Schatten `inset` gesetzt ist und bei dem anderen nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten wechseln zu den neuen Werten ohne einen animierenden Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von drei Schatten

In diesem Beispiel fügen wir drei Schatten hinzu: einen innenseitigen Schatten, einen regulären Schlagschatten und einen 2px-Schatten, der einen Rahmen-Effekt erzeugt (wir hätten stattdessen `outline` für diesen dritten Schatten verwenden können).

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

### Setzen von null für Offset und Unschärfe

Wenn `x-offset`, `y-offset` und `blur` alle null sind, ist der Box-Schatten eine solide farbige Umrandung gleicher Größe auf allen Seiten. Die Schatten werden von hinten nach vorne gezeichnet, sodass der erste Schatten über den nachfolgenden Schatten sitzt. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens auch Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert gesetzt, wären die Ecken abgerundet gewesen.

Wir haben eine Marge in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten sich nicht mit angrenzenden Elementen überschneidet oder über die Grenze der umgebenden Box hinausgeht. Ein Box-Schatten beeinflusst nicht die [Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Dimensionen.

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

<!-- diese Farben sind absichtlich pink und blau. WCAG erfordert einen Farbkontrast zwischen Text und Hintergrund, nicht zwischen den Rahmenfarben. -->

#### Ergebnis

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp (für die Angabe der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
