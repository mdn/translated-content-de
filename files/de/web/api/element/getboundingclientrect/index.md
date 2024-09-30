---
title: "Element: getBoundingClientRect() Methode"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.getBoundingClientRect()`** Methode gibt ein
[`DOMRect`](/de/docs/Web/API/DOMRect) Objekt zurück, das Informationen über die Größe eines Elements und seine
Position relativ zum [Viewport](/de/docs/Glossary/Viewport) bereitstellt.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt, das das kleinste Rechteck beschreibt,
das das gesamte Element einschließlich seines Paddings und der Rahmenbreite umfasst. Die
Eigenschaften `left`, `top`, `right`, `bottom`,
`x`, `y`, `width` und `height` beschreiben die Position und Größe des gesamten Rechtecks in Pixeln. Eigenschaften außer
`width` und `height` sind relativ zur oberen linken Ecke des Viewports.

![DOMRect Objekt, das das kleinste Rechteck beschreibt, das das gesamte Element umfasst.](element-box-diagram.png)

Die Eigenschaften `width` und `height` des zurückgegebenen [`DOMRect`](/de/docs/Web/API/DOMRect)
Objekts umfassen das `padding` und die
`border-width`, nicht nur die Breite/Höhe des Inhalts. Im Standard-Boxmodell
entspricht dies der `width`- oder `height`-Eigenschaft des
Elements + `padding` + `border-width`. Wenn jedoch
[`box-sizing: border-box`](/de/docs/Web/CSS/box-sizing) für das Element gesetzt ist, entspricht dies direkt der
`width` oder `height`.

Der zurückgegebene Wert kann als die Vereinigung der Rechtecke betrachtet werden, die durch
[`getClientRects()`](/de/docs/Web/API/Element/getClientRects) für das Element zurückgegeben werden, d.h. die CSS-
Rahmen-Boxen, die mit dem Element verbunden sind.

Leere Rahmen-Boxen werden vollständig ignoriert. Wenn alle Rahmen-Boxen des Elements leer sind,
dann wird ein Rechteck mit einer `width` und `height` von null
zurückgegeben, wobei `top` und `left` das obere linke der Rahmen-Box
der ersten CSS-Box (in Inhaltsreihenfolge) des Elements sind.

Die beim Berechnen des Begrenzungsrechtecks durchgeführte Scrollmenge der
Viewport-Fläche (oder eines anderen scrollbaren Elements) wird berücksichtigt. Dies
bedeutet, dass sich die Grenzwerte des Rechtecks (`top`, `right`,
`bottom`, `left`) jedes Mal ändern, wenn sich die Scroll-Position
ändert (da ihre Werte relativ zum Viewport sind und nicht absolut).

Wenn Sie das Begrenzungsrechteck relativ zur oberen linken Ecke des Dokuments benötigen,
addieren Sie einfach die aktuelle Scrollposition zu den Eigenschaften `top` und `left`
(diese können mittels [`window.scrollY`](/de/docs/Web/API/Window/scrollY) und
[`window.scrollX`](/de/docs/Web/API/Window/scrollX) abgerufen werden), um ein Begrenzungsrechteck zu erhalten,
das unabhängig von der aktuellen Scrollposition ist.

## Beispiele

### Einfach

Dieses einfache Beispiel ruft das `DOMRect` Objekt ab, das das begrenzende
Client-Rechteck eines einfachen `<div>` Elements darstellt und gibt seine Eigenschaften
unterhalb aus.

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Basic', '100%', 640)}}

Beachten Sie, wie `width`/`height` gleich ihren
`width`/`height` + `padding` sind.

Beachten Sie auch, wie die Werte von `x`/`left`,
`y`/`top`, `right` und `bottom` gleich
dem absoluten Abstand von der relevanten Kante des Viewports zu dieser Seite des
Elements in jedem Fall sind.

### Scrollen

Dieses Beispiel zeigt, wie sich das begrenzende Client-Rechteck beim Scrollen des Dokuments ändert.

```html
<div id="example"></div>
<div id="controls"></div>
```

```css
div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body {
  padding-bottom: 1000px;
}
p {
  margin: 0;
}
```

```js
function update() {
  const container = document.getElementById("controls");
  const elem = document.getElementById("example");
  const rect = elem.getBoundingClientRect();

  container.textContent = "";
  for (const key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      container.appendChild(para);
    }
  }
}

document.addEventListener("scroll", update);
update();
```

{{EmbedLiveSample('Scrolling', '100%', 640)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`getClientRects()`](/de/docs/Web/API/Element/getClientRects)
