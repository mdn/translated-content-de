---
title: box-shadow
slug: Web/CSS/box-shadow
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`box-shadow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) fügt Schatteneffekte um den Rahmen eines Elements hinzu. Sie können mehrere Effekte festlegen, die durch Kommas getrennt sind. Ein Box-Schatten wird durch X- und Y-Offsets relativ zum Element, Unschärfe- und Verbreitungsradius sowie Farbe beschrieben.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

Die `box-shadow`-Eigenschaft ermöglicht es Ihnen, einen Schatten von fast jedem Elementrahmen zu werfen. Wenn auf einem Element mit einem Box-Schatten ein {{cssxref("border-radius")}} angegeben ist, übernimmt der Box-Schatten dieselben abgerundeten Ecken. Die Z-Anordnung mehrerer Box-Schatten entspricht der von mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst festgelegte Schatten befindet sich oben).

[Box-shadow-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) ist ein interaktives Werkzeug, das es Ihnen ermöglicht, einen `box-shadow` zu erzeugen.

## Syntax

```css
/* Schlüsselwortwerte */
box-shadow: none;

/* Eine Farbe und zwei Längenwerte */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* Drei Längenwerte und eine Farbe */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* Vier Längenwerte und eine Farbe */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, Längenwerte und eine Farbe */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* Beliebige Anzahl von Schatten, durch Kommas getrennt */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* Globale Werte */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

Geben Sie einen einzelnen Box-Schatten an mit:

- Zwei, drei oder vier {{cssxref("length")}} Werten.

  - Wenn nur zwei Werte angegeben sind, werden sie als `<offset-x>` und `<offset-y>` Werte interpretiert.
  - Wenn ein dritter Wert angegeben ist, wird er als `<blur-radius>` interpretiert.
  - Wenn ein vierter Wert angegeben ist, wird er als `<spread-radius>` interpretiert.

- Optional das Schlüsselwort `inset`.
- Optional ein [`<color>`](#color) Wert.

Um mehrere Schatten anzugeben, geben Sie eine durch Kommas getrennte Liste von Schatten an.

### Werte

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen. Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft verwendet, der im Elternelement definiert ist.

- `<length>`

  - : Gibt die Offset-Länge des Schattens an. Dieser Parameter akzeptiert zwei, drei oder vier Werte. Der dritte und vierte Wert sind optional. Sie werden wie folgt interpretiert:

    - Werden zwei Werte angegeben, werden sie als `<offset-x>` (horizontaler Offset) und `<offset-y>` (vertikaler Offset) interpretiert. Negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Negativer `<offset-y>`-Wert platziert den Schatten über dem Element.\
      Wenn nicht angegeben, wird der Wert von `0` für die fehlende Länge verwendet. Wenn sowohl `<offset-x>` als auch `<offset-y>` auf `0` gesetzt sind, wird der Schatten hinter dem Element platziert (und kann einen Unschärfeeffekt erzeugen, wenn `<blur-radius>` und/oder `<spread-radius>` gesetzt ist).
    - Werden drei Werte angegeben, wird der dritte Wert als `<blur-radius>` interpretiert. Je größer dieser Wert ist, desto größer ist die Unschärfe, so dass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt. Wenn nicht angegeben, wird er auf `0` gesetzt (was bedeutet, dass die Kante des Schattens scharf sein wird). Die Spezifikation enthält keinen genauen Algorithmus für die Berechnung des Unschärferadius, sondern beschreibt ihn wie folgt:

      > …für eine lange, gerade Schattenkante sollte dies einen Farbverlauf über die Länge der Unschärfedistanz erzeugen, der senkrecht zu und zentriert auf der Schattenkante liegt und von der vollständigen Schattenfarbe am Radiusendpunkt innerhalb des Schattens bis zur vollständigen Transparenz am Endpunkt außerhalb reicht.

    - Werden vier Werte angegeben, wird der vierte Wert als `<spread-radius>` interpretiert. Positive Werte bewirken, dass der Schatten sich ausdehnt und größer wird, negative Werte bewirken, dass der Schatten schrumpft. Wenn nicht angegeben, wird er auf `0` gesetzt (d.h. der Schatten ist genauso groß wie das Element).

- `inset` {{optional_inline}}
  - : Ändert den Schatten von einem äußeren Box-Schatten zu einem inneren Box-Schatten (als ob der Inhalt in die Box gedrückt wird). Eingesetzte Schatten werden innerhalb der Rahmenlinie der Box gezeichnet (selbst wenn der Rahmen transparent ist) und erscheinen über dem Hintergrund, aber unter dem Inhalt. Standardmäßig verhält sich der Schatten wie ein Schlagschatten und gibt den Eindruck, dass die Box über ihrem Inhalt schwebt. Dies ist das Standardverhalten, wenn `inset` nicht angegeben ist.

### Interpolation

Beim Animieren von Schatten, z. B. wenn mehrere Schattenwerte bei einem Element-Hover auf neue Werte übergehen, werden die Werte interpoliert. {{Glossary("Interpolation")}} bestimmt Zwischenwerte von Eigenschaften wie Unschärferadius, Verbreitungsradius und Farbe beim Übergang der Schatten. Für jeden Schatten in einer Liste von Schatten gehen die Farbe, x, y, Unschärfe und Verbreitung in den Übergang; die Farbe als [`<color>`](/de/docs/Web/CSS/color_value) und die anderen Werte als {{cssxref("length")}}s.

Beim Interpolieren mehrerer Schatten zwischen zwei kommagetrennten Listen mit mehreren Box-Schatten werden die Schatten paarweise zusammengeführt, wobei die Interpolation zwischen gepaarten Schatten stattfindet. Wenn die Listen mit Schatten unterschiedliche Längen haben, wird die kürzere Liste am Ende mit Schatten mit der Farbe `transparent` und X, Y und Unschärfe `0` aufgefüllt, wobei das `inset` oder Fehlen davon übereinstimmen muss. Wenn in irgendeinem Schattenpaar ein Schatten `inset` hat und der andere nicht, wird die gesamte Schattenliste nicht interpoliert; die Schatten ändern sich zu den neuen Werten ohne Animationseffekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei Schatten setzen

In diesem Beispiel fügen wir drei Schatten hinzu: einen eingesetzten Schatten, einen normalen Schlagschatten und einen 2px Schatten, der einen Randeffekt erzeugt (wir hätten stattdessen für diesen dritten Schatten einen {{cssxref('outline')}} verwenden können).

#### HTML

```html
<blockquote>
  <q>
    Sie können mich mit Ihren Worten erschießen,<br />
    Sie können mich mit Ihren Augen schneiden,<br />
    Sie können mich mit Ihrem Hass töten,<br />
    Aber trotzdem, wie Luft, werde ich steigen.
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

### Null für Offset und Unschärfe setzen

Wenn der `x-offset`, `y-offset` und die `blur` alle null sind, wird der Box-Schatten ein einfarbiger Umriss von gleicher Breite auf allen Seiten sein. Die Schatten werden von vorne nach hinten gezeichnet, sodass der erste Schatten oben auf nachfolgenden Schatten sitzt. Wenn die `border-radius` auf 0 gesetzt ist, wie es standardmäßig der Fall ist, werden die Ecken des Schattens Ecken sein. Hätten wir einen `border-radius` von einem anderen Wert gesetzt, wären die Ecken abgerundet gewesen.

Wir haben eine Marge in der Größe des breitesten Box-Schattens hinzugefügt, um sicherzustellen, dass der Schatten keine angrenzenden Elemente überlappt oder über den Rand der umgebenden Box hinausgeht. Ein Box-Schatten beeinflusst nicht die [Box-Modell](/de/docs/Web/CSS/CSS_box_model) Dimensionen.

#### HTML

```html
<div><p>Hallo Welt</p></div>
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

<!-- Diese Farben sind absichtlich pink und blau. WCAG erfordert einen Farbkontrast zwischen Text und Hintergrund, nicht zwischen Randfarben. -->

#### Ergebnis

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zum Festlegen der Schattenfarbe)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
