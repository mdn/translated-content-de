---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, entlang beider Achsen oder gar nicht wiederholt werden.

Standardmäßig werden die wiederholten Bilder auf die Größe des Elements zugeschnitten, sie können jedoch auch skaliert werden, um zu passen (mit `round`) oder gleichmäßig von Ende zu Ende verteilt werden (mit `space`).

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

Einer oder mehrere `<repeat-style>` Werte, getrennt durch Kommata.

### Werte

- `<repeat-style>`

  - : Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

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

    In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Hier ist eine Erklärung, wie jede Option in jeder Richtung funktioniert:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            Das Bild wird so oft wie nötig wiederholt, um das gesamte Maskenbemalungsgebiet zu bedecken. Das letzte Bild wird abgeschnitten, wenn es nicht passt.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            Das Bild wird so oft wie möglich ohne Beschneiden wiederholt. Die ersten und letzten Bilder werden an beiden Seiten des Elements fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die
            {{cssxref("mask-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschneiden angezeigt werden. Der einzige Fall, in dem mit <code>space</code> geschnitten wird, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            Wenn der verfügbare Platz größer wird, dehnen sich die wiederholten Bilder, um keine Lücken zu lassen, bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Das Bild wird nicht wiederholt (und daher wird das Maskenbemalungsgebiet nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.
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

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommata:

```css
.example-three {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird dem entsprechenden Wiederholungsstil zugeordnet, vom zuerst angegebenen bis zum zuletzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
