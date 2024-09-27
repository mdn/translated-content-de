---
title: "Element: getBoundingClientRect()-Methode"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.getBoundingClientRect()`**-Methode gibt ein
[`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das Informationen über die Größe eines Elements und seine Position relativ zum [Viewport](/de/docs/Glossary/Viewport) bereitstellt.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, welches das kleinste Rechteck darstellt, das das gesamte Element einschließlich seines Abstands und seiner Rahmenbreite enthält. Die Eigenschaften `left`, `top`, `right`, `bottom`, `x`, `y`, `width` und `height` beschreiben die Position und Größe des gesamten Rechtecks in Pixeln. Andere Eigenschaften als `width` und `height` sind relativ zur oberen linken Ecke des Viewports.

![DOMRect-Objekt, das das kleinste Rechteck enthält, das das gesamte Element abdeckt.](element-box-diagram.png)

Die Eigenschaften `width` und `height` des [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts, das von der Methode zurückgegeben wird, beinhalten das `padding` und die `border-width`, nicht nur die Breite/Höhe des Inhalts. Im Standard-Box-Modell wäre dies gleich der `width`- oder `height`-Eigenschaft des Elements + `padding` + `border-width`. Wenn allerdings [`box-sizing: border-box`](/de/docs/Web/CSS/box-sizing) für das Element gesetzt ist, entspricht dies direkt seiner `width` oder `height`.

Der zurückgegebene Wert kann als Vereinigung der Rechtecke betrachtet werden, die von [`getClientRects()`](/de/docs/Web/API/Element/getClientRects) für das Element zurückgegeben werden, d.h. die CSS-Rahmen-Boxen, die mit dem Element verbunden sind.

Leere Rahmen-Boxen werden vollständig ignoriert. Wenn alle Rahmen-Boxen des Elements leer sind, wird ein Rechteck mit einer `width` und `height` von null zurückgegeben, wobei `top` und `left` die obere linke Ecke der Rahmen-Box für die erste CSS-Box (in Inhaltsreihenfolge) für das Element sind.

Die Menge des Scrollens, die im Viewport-Bereich (oder einem anderen scrollbaren Element) durchgeführt wurde, wird bei der Berechnung des Begrenzungsrechtecks berücksichtigt. Das bedeutet, dass die Begrenzungskanten des Rechtecks (`top`, `right`, `bottom`, `left`) ihre Werte jedes Mal ändern, wenn sich die Scrollposition ändert (weil ihre Werte relativ zum Viewport und nicht absolut sind).

Wenn Sie das Begrenzungsrechteck relativ zur oberen linken Ecke des Dokuments benötigen, addieren Sie einfach die aktuelle Scrollposition zu den Eigenschaften `top` und `left` (diese können mit [`window.scrollY`](/de/docs/Web/API/Window/scrollY) und [`window.scrollX`](/de/docs/Web/API/Window/scrollX) erhalten werden), um ein Begrenzungsrechteck zu erhalten, das unabhängig von der aktuellen Scrollposition ist.

## Beispiele

### Einfach

Dieses einfache Beispiel ruft das `DOMRect`-Objekt ab, das das Begrenzungsrechteck eines einfachen `<div>`-Elements darstellt, und gibt seine Eigenschaften darunter aus.

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

Beachten Sie, wie `width`/`height` gleich ihrem `width`/`height` + `padding` sind.

Beachten Sie auch, wie die Werte von `x`/`left`, `y`/`top`, `right` und `bottom` dem absoluten Abstand von der jeweiligen Kante des Viewports bis zu dieser Seite des Elements entsprechen.

### Scrollen

Dieses Beispiel zeigt, wie sich das Begrenzungsrechteck ändert, wenn das Dokument gescrollt wird.

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
