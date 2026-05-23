---
title: "`box-shadow` CSS property"
short-title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 2e4a849f599a666ea778b577d176529061e61efb
---

Die **`box-shadow`** [CSS](/de/docs/Web/CSS)-Eigenschaft fügt Schattierungseffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Versätze relativ zum Element, Unschärfe- und Ausbreitungsradius sowie Farbe beschrieben.

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

Legen Sie einen einzelnen Box-Schatten fest, indem Sie:

- Zwei, drei oder vier {{cssxref("length")}}-Werte angeben.
  - Wenn nur zwei Werte angegeben werden, werden diese als `<offset-x>`- und `<offset-y>`-Werte interpretiert.
  - Wenn ein dritter Wert angegeben wird, wird dieser als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben wird, wird dieser als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional einen [`<color>`](#color)-Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.
    Wird keine Farbe angegeben, wird der Wert der im Elternelement definierten {{cssxref("color")}}-Eigenschaft verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Die Interpretation erfolgt wie folgt:
    - Wenn zwei Werte angegeben sind, werden diese als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wird kein Wert angegeben, wird `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Wenn drei Werte angegeben sind, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert, desto größer die Unschärfe; somit wird der Schatten größer und heller. Negative Werte sind nicht erlaubt. Wird kein Wert angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Schattengrenze scharf ist). Die Spezifikation enthält keinen genauen Algorithmus zur Berechnung des Unschärferadius; jedoch wird wie folgt ausgeführt:

      > …bei einer langen, geraden Schattengrenze sollte dies einen Farbverlauf in der Länge der Unschärfedistanz erzeugen, der senkrecht zu und zentriert auf der Schattengrenze liegt und der vom vollständigen Schattenfarbwert an der Radiusendpunkt innerhalb des Schattens zu vollständig transparent am Endpunkt außerhalb reicht.

    - Wenn vier Werte angegeben sind, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass der Schatten sich ausdehnt und größer wird, negative Werte bewirken, dass der Schatten schrumpft. Wird kein Wert angegeben, wird er auf `0` gesetzt (das heißt, der Schatten hat die gleiche Größe wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden an der Padding-Box des Elements abgeschnitten und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten, der den Eindruck erweckt, dass die Box über ihrem Inhalt erhöht ist. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Bei der Animation von Schatten, zum Beispiel wenn mehrere Schattenwerte auf einer Box in neue Werte übergehen, werden die Werte interpoliert. {{Glossary("Interpolation", "Interpolation")}} bestimmt Zwischenwerte von Eigenschaften, wie den Unschärferadius, den Ausbreitungsradius und die Farbe, während die Schatten übergehen. Für jeden Schatten in einer Liste von Schatten geht die Farbe sowie die x-, y-, Unschärfe- und Ausbreitungswerte über; die Farbe als {{cssxref("&lt;color&gt;")}}, und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei durch Kommas getrennten Listen mit mehreren Box-Schatten werden die Schatten der Reihenfolge nach gepaart, wobei die Interpolation zwischen gepaarten Schatten erfolgt. Wenn die Listen von Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten gefüllt, deren Farbe `transparent` ist und deren X, Y und Unschärfe `0` sind, wobei `inset` oder dessen Fehlen übereinstimmen muss. Wenn in einem Schattenduo einer `inset` gesetzt hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten wechseln ohne einen animierten Effekt zu den neuen Werten.

## Beschreibung

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schlagschatten vom Rahmen fast jedes Elements zu werfen. Wenn ein {{cssxref("border-radius")}} auf dem Element mit einem Box-Schatten angegeben ist, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Ordnung von mehreren Box-Schatten ist dieselbe wie die mehrerer [Text-Schatten](/de/docs/Web/CSS/Reference/Properties/text-shadow) (der zuerst angegebene Schatten liegt oben).

Der [Box-Schatten-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Werkzeug, mit dem Sie einen `box-shadow` erzeugen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten festlegen

In diesem Beispiel schließen wir drei Schatten ein: einen eingesetzten Schatten, einen regulären Schlagschatten und einen 2px-Schatten, der einen Randeffekt erzeugt (wir könnten stattdessen für diesen dritten Schatten einen {{cssxref('outline')}} verwenden).

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

Wenn `x-offset`, `y-offset` und `blur` alle null sind, wird der Box-Schatten ein gleichmäßig gefärbter Umriss gleicher Größe auf allen Seiten sein. Die Schatten werden von hinten nach vorne gezeichnet, sodass der erste Schatten oberhalb der nachfolgenden Schatten liegt. Wenn `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert angegeben, wären die Ecken abgerundet.

Wir haben einen Rand in der Größe des breitesten Box-Schatten hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über die Grenze der Umfassungsbox hinausragt. Ein Box-Schatten beeinflusst nicht die [Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Dimensionen.

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

<!-- Diese Farben sind absichtlich pink und blau. WCAG erfordert Kontrast zwischen Text und Hintergrund, nicht zwischen Randfarben. -->

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
- [Einführung in Text-Schatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS Hintergrund und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
