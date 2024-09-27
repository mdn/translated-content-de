---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) versetzt ein Element entlang der z-Achse im 3D-Raum, d. h., näher zum oder weiter weg vom Betrachter. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

Diese Transformation wird durch ein {{cssxref("&lt;length&gt;")}} definiert, das angibt, wie weit das Element oder die Elemente nach innen oder außen verschoben werden.

In den obigen interaktiven Beispielen wurden [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style) (damit die Kinder, die 6 Seiten des Würfels, ebenfalls im 3D-Raum positioniert werden) auf den Würfel angewendet.

> **Note:** `translateZ(tz)` ist gleichbedeutend mit
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Ein {{cssxref("&lt;length&gt;")}}, das die z-Komponente des Verschiebungsvektors [0, 0, tz] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) repräsentiert es die Verschiebung entlang der z-Achse. Ein positiver Wert bewegt das Element in Richtung des Betrachters, ein negativer Wert weiter weg.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> in <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> in <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten in <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten in <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
      </td>
      <td>
        Eine Translation ist keine lineare Transformation in ℝ^3 und kann nicht durch eine kartesische Koordinatenmatrix dargestellt werden.
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

In diesem Beispiel werden zwei Kästen erstellt. Einer ist normal auf der Seite positioniert, ohne überhaupt übersetzt zu werden. Der zweite wird durch Anwenden von Perspektive modifiziert, um einen 3D-Raum zu schaffen, und dann auf den Benutzer zugemoved.

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

Wirklich wichtig ist hier die Klasse "moved"; schauen wir uns an, was sie bewirkt. Zunächst positioniert die [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion den Betrachter relativ zur Ebene, die dort liegt, wo z=0 ist (im Grunde die Oberfläche des Bildschirms). Ein Wert von `500px` bedeutet, dass der Benutzer 500 Pixel "vor" der bei z=0 befindlichen Imagery ist.

Dann verschiebt die `translateZ()` Funktion das Element um 200 Pixel "nach außen" von der Bildfläche, in Richtung des Benutzers. Dies hat den Effekt, dass das Element auf einem 2D-Display größer erscheint oder näher wirkt, wenn es mit einem VR-Headset oder einem anderen 3D-Display-Gerät betrachtet wird.

Beachten Sie, dass, wenn der `perspective()` Wert kleiner als der `translateZ()` Wert ist, wie z. B. `transform: perspective(200px) translateZ(300px);`, das transformierte Element nicht sichtbar sein wird, da es sich weiter entfernt als der Sichtbereich des Benutzers befindet. Je geringer der Unterschied zwischen den Perspektiv- und translateZ-Werten, desto näher ist der Benutzer am Element und desto größer erscheint das übersetzte Element.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Insbesondere möchten Sie im Allgemeinen, dass `perspective()` vor `translateZ()` steht.

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
