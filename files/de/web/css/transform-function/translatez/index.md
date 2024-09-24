---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) verschiebt ein Element entlang der z-Achse im 3D-Raum, d.h. näher oder weiter vom Betrachter entfernt. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

Diese Transformation wird durch eine {{cssxref("&lt;length&gt;")}} definiert, die angibt, wie weit das
Element oder die Elemente nach innen oder außen bewegt werden.

In den obigen interaktiven Beispielen wurde [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um
einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style)
(damit die Kinder, die 6 Seiten des Würfels, auch im 3D-Raum positioniert sind) auf den Würfel gesetzt.

> **Note:** `translateZ(tz)` entspricht
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Ein {{cssxref("&lt;length&gt;")}} die die z-Komponente des Übersetzungsvektors [0, 0, tz] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) repräsentiert es eine Verschiebung entlang der z-Achse. Ein positiver Wert bewegt das
    Element zum Betrachter hin, ein negativer Wert weiter weg.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
      </td>
      <td>
        Eine Übersetzung ist keine lineare Transformation in ℝ^3 und kann nicht mit einer kartesischen Koordinatenmatrix dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & t \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

In diesem Beispiel werden zwei Boxen erstellt. Eine ist normal auf der Seite positioniert, ohne jegliche Übersetzung. Die
zweite wird verändert, indem eine Perspektive angewendet wird, um einen 3D-Raum zu schaffen, und dann zum Benutzer hin verschoben.

### HTML

```html
<div>Statisch</div>
<div class="moved">Bewegt</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

Entscheidend ist hier die Klasse "moved"; schauen wir uns an, was sie tut. Zuerst positioniert die
[`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion den
Betrachter relativ zur Ebene, die sich dort befindet, wo z=0 liegt (im Wesentlichen die Oberfläche des Bildschirms). Ein Wert von
`500px` bedeutet, dass der Benutzer 500 Pixel "vor" dem Bildmaterial liegt, das sich bei z=0 befindet.

Dann verschiebt die `translateZ()` Funktion das Element 200 Pixel "nach außen" vom Bildschirm, in Richtung des Benutzers.
Dies hat den Effekt, dass das Element größer erscheint, wenn es auf einem 2D-Display betrachtet wird, oder näher erscheint, wenn es mit einem VR
Headset oder einem anderen 3D-Display-Gerät betrachtet wird.

Beachten Sie, dass, wenn der `perspective()` Wert kleiner ist als der `translateZ()` Wert, wie z.B.
`transform: perspective(200px) translateZ(300px);` das transformierte Element nicht sichtbar ist, da es
weiter weg als der Benutzeransichtspunkt ist. Je kleiner der Unterschied zwischen den Werten von Perspektive und translateZ ist, desto näher ist der Benutzer am Element und desto größer erscheint das übersetzte Element.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Im Allgemeinen möchten Sie, dass `perspective()` vor `translateZ()` steht.

### Ergebnis

{{EmbedLiveSample("Examples", 250, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
