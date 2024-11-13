---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, in beiden Richtungen oder gar nicht wiederholt werden.

Standardmäßig werden die wiederholten Bilder auf die Größe des Elements beschnitten, sie können jedoch skaliert werden, um zu passen (mit `round`) oder gleichmäßig von Anfang bis Ende verteilt werden (mit `space`).

## Syntax

```css
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

Einer oder mehrere `<repeat-style>`-Werte, getrennt durch Kommas.

### Werte

- `<repeat-style>`

  - : Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

    <table class="standard-table">
      <thead>
        <tr>
          <th>Einzelwert</th>
          <th>Äquivalent mit zwei Werten</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>repeat-x</code></td>
          <td><code>repeat no-repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat-y</code></td>
          <td><code>no-repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat</code></td>
          <td><code>repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td><code>round round</code></td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td><code>no-repeat no-repeat</code></td>
        </tr>
      </tbody>
    </table>

    In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Hier ist eine Erklärung, wie jede Option in beiden Richtungen funktioniert:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            Das Bild wird so oft wie nötig wiederholt, um den gesamten
            Maskenmalbereich abzudecken. Das letzte Bild wird beschnitten, wenn es
            nicht passt.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            Das Bild wird so oft wie möglich wiederholt, ohne beschnitten zu werden.
            Die ersten und letzten Bilder sind an beiden Seiten des Elements
            fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt.
            Die {{cssxref("mask-position")}}-Eigenschaft wird ignoriert, es sei denn,
            nur ein Bild kann ohne Beschnitt angezeigt werden. Der einzige Fall, in dem
            es bei der Verwendung von <code>space</code> zu einem Beschnitt kommt, ist,
            wenn nicht genug Platz vorhanden ist, um ein Bild darzustellen.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            Wenn der verfügbare Raum größer wird, dehnen sich die wiederholten Bilder
            aus (ohne Lücken zu hinterlassen), bis Platz für ein weiteres Bild
            vorhanden ist. Wenn das nächste Bild hinzugefügt wird, werden alle
            aktuellen Bilder komprimiert, um Platz zu schaffen. Beispiel: Ein Bild
            mit einer ursprünglichen Breite von 260px, das dreifach wiederholt wird,
            könnte sich dehnen, bis jede Wiederholung 300px breit ist, und dann
            wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px
            komprimiert.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Das Bild wird nicht wiederholt (und daher wird die
            Maskenmalfläche möglicherweise nicht vollständig abgedeckt). Die
            Position des nicht wiederholten Maskenbildes wird durch die
            {{cssxref("mask-position")}}-Eigenschaft definiert.
          </td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholung für eine einzige Maske einstellen

```html live-sample___mask-repeat-example
<div class="masked"></div>
```

```css live-sample___mask-repeat-example
.masked {
  width: 250px;
  height: 250px;
  background: blue linear-gradient(red, blue);
  margin-bottom: 10px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-repeat: repeat;
}
```

{{EmbedLiveSample("mask-repeat-example", "", "300px")}}

### Unterstützung für mehrere Maskenbilder

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommas:

```css
.example-three {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird dem entsprechend angegebenen Wiederholungsstil zugeordnet, vom zuerst spezifizierten bis zum zuletzt genannten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
