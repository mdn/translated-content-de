---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, auf beiden Achsen oder gar nicht wiederholt werden.

Standardmäßig werden die wiederholten Bilder auf die Größe des Elements zugeschnitten, aber sie können so skaliert werden, dass sie passen (mit `round`) oder gleichmäßig von Anfang bis Ende verteilt werden (mit `space`).

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

Ein oder mehrere `<repeat-style>`-Werte, getrennt durch Kommata.

### Werte

- `<repeat-style>`

  - : Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

    <table class="standard-table">
      <thead>
        <tr>
          <th>Einzelwert</th>
          <th>Zweiwertige Entsprechung</th>
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

    In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Hier ist eine Erklärung, wie jede Option für jede Richtung funktioniert:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            Das Bild wird so oft wiederholt, wie nötig, um das gesamte Maskenmalbereich abzudecken. Das letzte Bild wird zugeschnitten, wenn es nicht passt.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten und letzten Bilder werden auf beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die 
            {{cssxref("mask-position")}} Eigenschaft wird ignoriert, es sei denn, es kann ohne Zuschnitt nur ein Bild angezeigt werden. Der einzige Fall, in dem bei Verwendung von <code>space</code> ein Zuschnitt erfolgt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            Wenn der erlaubte Raum größer wird, dehnen sich die wiederholten Bilder aus (ohne Lücken), bis Platz für ein weiteres Bild vorhanden ist. Wenn das nächste Bild hinzugefügt wird, komprimieren sich alle aktuellen Bilder, um Platz zu schaffen.
            Beispiel: Ein Bild mit einer Originalbreite von 260px, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300px breit ist, dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimiert.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Das Bild wird nicht wiederholt (und daher wird der Maskenmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.
          </td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Wiederholung für eine einzelne Maske

{{EmbedGHLiveSample("css-examples/masking/mask-repeat.html", '100%', 700)}}

### Unterstützung mehrerer Maskenbilder

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommata:

```css
.examplethree {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird dem entsprechenden Wiederholungsstil zugeordnet, von der zuerst angegebenen zur zuletzt genannten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
