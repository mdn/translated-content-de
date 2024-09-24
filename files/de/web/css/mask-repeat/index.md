---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beider Achsen wiederholt oder gar nicht wiederholt werden.

Standardmäßig werden die wiederholten Bilder auf die Größe des Elements zugeschnitten, sie können jedoch skaliert werden, um zu passen (mittels `round`) oder gleichmäßig von Ende zu Ende verteilt werden (mittels `space`).

## Syntax

```css
/* Ein-Wert-Syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Zwei-Wert-Syntax: horizontal | vertikal */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Mehrere Werte */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Globale Werte */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

Ein oder mehrere `<repeat-style>` Werte, getrennt durch Kommas.

### Werte

- `<repeat-style>`

  - : Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

    <table class="standard-table">
      <thead>
        <tr>
          <th>Einzelwert</th>
          <th>Zwei-Wert-Äquivalent</th>
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

    In der Zwei-Wert-Syntax stellt der erste Wert das horizontale Wiederholungsverhalten dar und der zweite Wert das vertikale Verhalten. Hier ist eine Erklärung, wie jede Option in beide Richtungen funktioniert:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            Das Bild wird so oft wie nötig wiederholt, um den gesamten Maskenbereich
            abzudecken. Das letzte Bild wird abgeschnitten, wenn es nicht passt.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten
            und letzten Bilder werden an den jeweiligen Seiten des Elements fixiert, und
            der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die
            {{cssxref("mask-position")}} Eigenschaft wird ignoriert, es sei denn, es kann
            nur ein Bild ohne Zuschnitt angezeigt werden. Abschneiden erfolgt nur, wenn
            nicht genug Platz für ein einziges Bild vorhanden ist.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            Wenn der verfügbare Platz größer wird, strecken sich die wiederholten Bilder
            (ohne Lücken), bis Platz für ein weiteres Bild vorhanden ist. Wenn ein weiteres Bild
            hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen.
            Beispiel: Ein Bild mit einer Originalbreite von 260px, das dreimal
            wiederholt wird, kann sich dehnen, bis jede Wiederholung 300px breit ist, bevor ein weiteres
            Bild hinzugefügt wird. Sie komprimieren dann auf 225px.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Das Bild wird nicht wiederholt (und daher wird der Maskenbereich möglicherweise
            nicht vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes
            wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.
          </td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholung für eine einzelne Maske einstellen

{{EmbedGHLiveSample("css-examples/masking/mask-repeat.html", '100%', 700)}}

### Unterstützung für mehrere Maskenbilder

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.examplethree {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgestimmt, vom ersten bis zum letzten angegebenen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
