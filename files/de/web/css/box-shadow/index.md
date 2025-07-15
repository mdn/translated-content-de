---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`box-shadow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte angeben, die durch Kommata getrennt sind. Ein Box-Schatten wird durch X- und Y-Versatz relativ zum Element, Weichzeichnungs- und Ausbreitungsradius und Farbe beschrieben.

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

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn auf einem Element mit einem Box-Schatten eine {{cssxref("border-radius")}} angegeben ist, übernimmt der Box-Schatten die gleichen abgerundeten Ecken. Die Z-Ordnung mehrerer Box-Schatten entspricht der von mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten liegt oben).

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

Geben Sie einen einzelnen Box-Schatten mit folgenden Optionen an:

- Zwei, drei oder vier {{cssxref("length")}}-Werte.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird er als `<spread-radius>` interpretiert.

- Optional das `inset`-Schlüsselwort.
- Optional ein [`<color>`](#color)-Wert.

Um mehrere Schatten zu spezifizieren, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft verwendet, die im übergeordneten Element definiert ist.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) Werte interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten oberhalb des Elements.\
      Wenn nicht angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer ist die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird es auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf ist). Die Spezifikation enthält keinen genauen Algorithmus, wie der Unschärfe-Radius berechnet werden sollte; es wird jedoch folgendermaßen ausgeführt:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf über die Unschärfe-Strecke erzeugen, der senkrecht zur und zentriert auf der Schattenkante verläuft und der von der vollen Schattenfarbe am Radienende innerhalb des Schattens bis zur vollständigen Transparenz am äußeren Endpunkt reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte lassen den Schatten expandieren und größer werden, negative Werte lassen den Schatten schrumpfen. Wenn nicht angegeben, wird es auf `0` gesetzt (das heißt, der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Innere Schatten werden innerhalb des Rands der Box gezeichnet (auch wenn der Rand transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, wodurch der Eindruck entsteht, dass die Box über ihrem Inhalt erhoben ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, z. B. wenn mehrere Schattenwerte auf einer Box zu neuen Werten beim Hover übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Weichzeichnungsradius, Ausbreitungsradius und die Farbe, während Schatten übergehen. Für jeden Schatten in einer Liste von Schatten ändern sich die Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value), und die anderen Werte als {{cssxref("length")}}s.

Bei der Interpolation mehrerer Schatten zwischen zwei durch Kommas getrennten Listen von mehreren Box-Schatten werden die Schatten paarweise zugeordnet, wobei die Interpolation zwischen den gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten ergänzt, deren Farbe `transparent` ist und deren X, Y und Unschärfe `0` sind, wobei das Vorhandensein oder Fehlen von `inset` übereinstimmt. Wenn in einem Schattenpaar einer der Schatten `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne einen Animationseffekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten hinzu: einen inneren Schatten, einen normalen Schlagschatten und einen 2px-Schatten, der einen Rahmen-Effekt erzeugt (wir hätten stattdessen für den dritten Schatten ein {{cssxref('outline')}} verwenden können).

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

Wenn der `x-offset`, `y-offset` und die `blur` alle auf null gesetzt sind, wird der Box-Schatten eine einfarbige Umrandung gleicher Größe auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, daher liegt der erste Schatten über den nachfolgenden Schatten. Wenn der `border-radius` auf 0 gesetzt ist, was der Standard ist, werden die Ecken des Schattens ebenfalls Ecken sein. Hätten wir einen `border-radius` mit einem anderen Wert angegeben, wären die Ecken abgerundet gewesen.

Wir haben einen Rand in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand der enthaltenen Box hinausgeht. Ein Box-Schatten wirkt sich nicht auf die Dimensionen des [Box-Modells](/de/docs/Web/CSS/CSS_box_model) aus.

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

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zum Angeben der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
