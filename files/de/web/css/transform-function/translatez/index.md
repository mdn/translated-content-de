---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) positioniert ein Element entlang der z-Achse im 3D-Raum, d.h., näher zum oder weiter vom Betrachter weg. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

Diese Transformation wird durch eine {{cssxref("&lt;length&gt;")}} definiert, die angibt, wie weit das Element oder die Elemente nach innen oder außen verschoben werden.

In den obigen interaktiven Beispielen wurden [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style) (damit die Kinder, die 6 Seiten des Würfels, ebenfalls im 3D-Raum positioniert werden) auf den Würfel angewendet.

> **Note:** `translateZ(tz)` ist äquivalent zu
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Ein {{cssxref("&lt;length&gt;")}}, das die z-Komponente des verschiebenden Vektors [0, 0, tz] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) repräsentiert es die Verschiebung entlang der z-Achse. Ein positiver Wert bewegt das Element zum Betrachter hin und ein negativer Wert weiter weg.

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
        Eine Translation ist keine lineare Transformation in ℝ^3 und kann nicht mit einer kartesischen Koordinatenmatrix dargestellt werden.
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

In diesem Beispiel werden zwei Boxen erstellt. Eine ist normal auf der Seite positioniert, ohne jegliche Übersetzung. Die zweite wird verändert, indem eine Perspektive angewendet wird, um einen 3D-Raum zu schaffen, und dann in Richtung des Nutzers verschoben.

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

Worauf es hier wirklich ankommt, ist die Klasse "moved"; schauen wir uns an, was sie macht. Zuerst positioniert die [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion den Betrachter relativ zur Ebene, die dort liegt, wo z=0 ist (im Wesentlichen die Oberfläche des Bildschirms). Ein Wert von `500px` bedeutet, dass der Nutzer sich 500 Pixel "vor" dem Bildmaterial befindet, das an z=0 liegt.

Dann bewegt die `translateZ()` Funktion das Element 200 Pixel "nach außen" vom Bildschirm, in Richtung des Nutzers. Dies hat den Effekt, das Element größer erscheinen zu lassen, wenn es auf einem 2D-Display betrachtet wird, oder näher, wenn es mit einem VR-Headset oder einem anderen 3D-Display-Gerät betrachtet wird.

Beachten Sie, dass, wenn der `perspective()` Wert kleiner als der `translateZ()` Wert ist, wie bei `transform: perspective(200px) translateZ(300px);`, das transformierte Element nicht sichtbar sein wird, da es weiter weg als der Blickbereich des Nutzers ist. Je kleiner der Unterschied zwischen den Werten der Perspective und der TranslateZ, desto näher ist der Nutzer am Element und desto größer erscheint das übersetzte Element.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Insbesondere möchten Sie im Allgemeinen, dass `perspective()` vor `translateZ()` platziert wird.

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
