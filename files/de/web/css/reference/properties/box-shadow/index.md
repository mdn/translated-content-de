---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 710429f3ae667556b60370b3d3d355cbdcc6ebf0
---

Die **`box-shadow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) fügt Schattierungseffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte getrennt durch Kommas festlegen. Ein Box-Schatten wird beschrieben durch X- und Y-Verschiebung relativ zum Element, Unschärferadius, Ausbreitungsradius und Farbe.

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

Spezifizieren Sie einen einzelnen Box-Schatten mit:

- Zwei, drei oder vier {{cssxref("length")}}-Werten.
  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird dieser als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional ein [`<color>`](#color) Wert.

Um mehrere Schatten zu spezifizieren, geben Sie eine kommagetrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Bestimmt die Farbe des Schattens. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.
    Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft des übergeordneten Elements verwendet.

- `<length>`
  - : Bestimmt die Versatzlänge des Schattens. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Dritte und vierte Werte sind optional. Sie werden wie folgt interpretiert:
    - Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten oberhalb des Elements.\
      Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe, wodurch der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass der Rand des Schattens scharf sein wird). Die Spezifikation beinhaltet keinen genauen Algorithmus, wie der Unschärferadius berechnet werden sollte; jedoch wird folgendermaßen ausgeführt:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf erzeugen, der die Länge der Unschärfedistanz beträgt und senkrecht zu und zentriert auf der Schattenkante verläuft und der Bereich von der vollen Schattenfarbe am Endpunkt innerhalb des Schattens bis vollständig transparent am Endpunkt außerhalb davon reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass der Schatten sich ausdehnt und größer wird, negative Werte bewirken, dass der Schatten sich verkleinert. Wenn nicht angegeben, wird der Wert auf `0` gesetzt (das heißt, der Schatten wird gleich groß wie das Element sein).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten in einen inneren Box-Schatten (als ob der Inhalt in die Box hineingedrückt wird). Eingesetzte Schatten werden innerhalb des Rahmens der Box gezeichnet (auch wenn der Rahmen transparent ist) und sie erscheinen über dem Hintergrund, aber unterhalb des Inhalts. Standardmäßig verhält sich der Schatten wie ein Drop-Schatten, der den Anschein erweckt, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, wie wenn mehrere Schattenwerte auf einer Box in neue Werte bei Hover übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie Unschärferadius, Ausbreitungsradius und Farbe, während Schatten übergehen. Für jeden Schatten in einer Liste von Schatten wechseln die Farbe, x, y, Unschärfe und Ausbreitung; die Farbe als {{cssxref("&lt;color&gt;")}}, und die anderen Werte als {{cssxref("length")}}.

Bei der Interpolation mehrerer Schatten zwischen zwei kommagetrennten Listen mehrerer Box-Schatten werden die Schatten paarweise angeordnet und die Interpolation erfolgt zwischen gepaarten Schatten. Wenn die Schattenlisten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten gepolstert, deren Farbe `transparent` ist und deren X, Y und Unschärfe `0` sind, wobei das Inset oder Fehlen des Inset übereinstimmt. Wenn in einem Schattenpaar einer `inset` gesetzt hat und der andere nicht, bleibt die gesamte Schattenliste uninterpoliert; die Schatten werden ohne animierenden Effekt auf die neuen Werte geändert.

## Beschreibung

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} am Element mit einem Box-Schatten spezifiziert ist, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Anordnung mehrerer Box-Schatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten befindet sich oben).

Der [Box-Schatten-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Werkzeug, mit dem Sie einen `box-shadow` erzeugen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px-Schatten, der einen Randeffekt erzeugt (wir hätten stattdessen auch eine {{cssxref('outline')}} für diesen dritten Schatten verwenden können).

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

Wenn `x-offset`, `y-offset` und `blur` alle auf null gesetzt sind, wird der Box-Schatten eine einfarbige Umrandung gleicher Größe auf allen Seiten. Die Schatten werden von hinten nach vorne gezeichnet, der erste Schatten sitzt also über den nachfolgenden Schatten. Wenn der `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens, nun ja, Ecken sein. Hätten wir einen `border-radius` eines anderen Wertes eingefügt, wären die Ecken abgerundet gewesen.

Wir haben einen Rand in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten nicht benachbarte Elemente überlappt oder über die Grenze des umschließenden Kastens hinausgeht. Ein Box-Schatten hat keinen Einfluss auf die [Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Dimensionen.

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

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Einführung in Textschatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
