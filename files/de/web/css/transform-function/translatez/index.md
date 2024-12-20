---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) versetzt ein Element entlang der z-Achse im 3D-Raum, d.h. näher zum oder weiter vom Betrachter entfernt. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

Diese Transformation wird durch eine {{cssxref("&lt;length&gt;")}} definiert, die angibt, wie weit das Element oder die Elemente nach innen oder außen bewegt werden.

In den obigen interaktiven Beispielen wurden [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style) (damit die Kinder, die 6 Seiten des Würfels, ebenfalls im 3D-Raum positioniert werden) auf den Würfel gesetzt.

> **Hinweis:** `translateZ(tz)` entspricht
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Ein {{cssxref("&lt;length&gt;")}} , das die z-Komponente des Übersetzungsvektors [0, 0, tz] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) repräsentiert es die Verschiebung entlang der z-Achse. Ein positiver Wert bewegt das
    Element zum Betrachter hin, und ein negativer weiter weg.

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
        Eine Übersetzung ist keine lineare Transformation in ℝ^3 und kann nicht mit einer kartesischen Matrix dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & t \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

In diesem Beispiel werden zwei Boxen erstellt. Eine wird normal auf der Seite positioniert, ohne überhaupt übersetzt zu werden. Die
zweite wird durch das Anwenden von Perspektive verändert, um einen 3D-Raum zu schaffen, und dann zum Benutzer hin bewegt.

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
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

Wirklich wichtig ist hier die Klasse "moved"; sehen wir uns an, was sie tut. Zuerst positioniert die
[`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion den
Betrachter relativ zur Ebene, die dort liegt, wo z=0 (im Wesentlichen die Oberfläche des Bildschirms). Ein Wert von
`500px` bedeutet, dass der Benutzer 500 Pixel "vor" der an z=0 gelegenen Darstellung ist.

Dann verschiebt die `translateZ()`-Funktion das Element 200 Pixel "nach außen" vom Bildschirm zum Benutzer hin.
Dies hat den Effekt, dass das Element auf einem 2D-Display größer erscheint oder bei Verwendung eines VR-Headsets oder eines anderen 3D-Displaygeräts näher wirkt.

Beachten Sie, dass wenn der `perspective()`-Wert kleiner als der `translateZ()`-Wert ist, wie z.B.
`transform: perspective(200px) translateZ(300px);` das transformierte Element nicht sichtbar sein wird, da es
weiter als der Benutzer-Blickwinkel entfernt ist. Je kleiner der Unterschied zwischen den Perspektiven- und translateZ-Werten ist, desto näher ist der Benutzer an dem Element und desto größer erscheint das übersetzte Element.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Im Allgemeinen sollten Sie `perspective()` vor `translateZ()` platzieren.

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
