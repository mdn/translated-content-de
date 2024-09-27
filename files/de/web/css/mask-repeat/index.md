---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, auf beiden Achsen oder gar nicht wiederholt werden.

Standardmäßig werden die wiederholten Bilder auf die Größe des Elements zugeschnitten, können jedoch skaliert werden, um (mithilfe von `round`) zu passen oder gleichmäßig von einem Ende zum anderen verteilt werden (mithilfe von `space`).

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

Ein oder mehrere `<repeat-style>` Werte, durch Kommas getrennt.

### Werte

- `<repeat-style>`

  - : Die Syntax mit einem Wert ist eine Abkürzung für die vollständige Zwei-Wert-Syntax:

    <table class="standard-table">
      <thead>
        <tr>
          <th>Einzelwert</th>
          <th>Entsprechender Zwei-Wert</th>
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

    In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Hier ist eine Erklärung, wie jede Option in einer der beiden Richtungen funktioniert:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            Das Bild wird so oft wie nötig wiederholt, um den gesamten Bereich des Maskenmalens abzudecken. Das letzte Bild wird abgeschnitten, wenn es nicht passt.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            Das Bild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Das erste und letzte Bild werden an beiden Seiten des Elements fixiert, und Weißraum wird gleichmäßig zwischen den Bildern verteilt. Die
            {{cssxref("mask-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Die einzige Situation, in der es zu einem Zuschneiden bei der Verwendung von <code>space</code> kommt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            Wenn der verfügbare Platz wächst, werden die wiederholten Bilder gedehnt (ohne Lücken), bis Platz für ein weiteres Bild ist. Wenn ein weiteres Bild hinzugefügt wird, komprimieren sich alle aktuellen, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, könnte gedehnt werden, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimieren.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Das Bild wird nicht wiederholt (und daher wird der Maskenmalbereich nicht zwingend vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS Eigenschaft definiert.
          </td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wiederholung für eine einzelne Maske festlegen

{{EmbedGHLiveSample("css-examples/masking/mask-repeat.html", '100%', 700)}}

### Unterstützung mehrerer Maskenbilder

Sie können für jedes Maskenbild unterschiedliche `<repeat-style>` Werte angeben, getrennt durch Kommas:

```css
.examplethree {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgestimmt, von zuerst angegebenem bis zuletzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
