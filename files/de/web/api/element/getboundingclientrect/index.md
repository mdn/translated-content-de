---
title: "Element: Methode getBoundingClientRect()"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.getBoundingClientRect()`**-Methode gibt ein {{domxref("DOMRect")}}-Objekt zurück, das Informationen über die Größe eines Elements und dessen Position relativ zum [Viewport](/de/docs/Glossary/Viewport) bereitstellt.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist ein {{domxref("DOMRect")}}-Objekt, das das kleinste Rechteck ist, das das gesamte Element einschließlich seines Paddings und der Rahmenbreite enthält. Die Eigenschaften `left`, `top`, `right`, `bottom`, `x`, `y`, `width` und `height` beschreiben die Position und Größe des gesamten Rechtecks in Pixeln. Eigenschaften außer `width` und `height` sind relativ zur oberen linken Ecke des Viewports.

![DOMRect-Objekt, das das kleinste Rechteck ist, das das gesamte Element enthält.](element-box-diagram.png)

Die Eigenschaften `width` und `height` des {{domxref("DOMRect")}}-Objekts, das von der Methode zurückgegeben wird, umfassen das `padding` und die `border-width`, nicht nur die Inhaltsbreite/-höhe. Im Standard-Boxmodell wäre dies gleich der `width`- oder `height`-Eigenschaft des Elements + `padding` + `border-width`. Aber wenn [`box-sizing: border-box`](/de/docs/Web/CSS/box-sizing) für das Element gesetzt ist, wäre dies direkt gleich seiner `width` oder `height`.

Der zurückgegebene Wert kann als Vereinigung der von {{domxref("Element.getClientRects", "getClientRects()")}} für das Element zurückgegebenen Rechtecke betrachtet werden, d. h. die CSS-Rahmen-Boxen, die mit dem Element verbunden sind.

Leere Rahmen-Boxen werden vollständig ignoriert. Wenn alle Rahmen-Boxen des Elements leer sind, wird ein Rechteck mit einer `width` und `height` von null zurückgegeben, wobei `top` und `left` die obere linke Ecke der Rahmen-Box für die erste CSS-Box (nach Inhaltsreihenfolge) des Elements sind.

Beim Berechnen des Begrenzungsrechtecks wird die Menge des Scrollens berücksichtigt, die im Viewport-Bereich (oder einem anderen scrollbaren Element) erfolgt ist. Das bedeutet, dass sich die Grenzkanten des Rechtecks (`top`, `right`, `bottom`, `left`) jedes Mal ändern, wenn sich die Scrollposition ändert (weil ihre Werte relativ zum Viewport und nicht absolut sind).

Wenn Sie das Begrenzungsrechteck relativ zur oberen linken Ecke des Dokuments benötigen, fügen Sie einfach die aktuelle Scrollposition zu den Eigenschaften `top` und `left` hinzu (diese können mit {{domxref("window.scrollY")}} und {{domxref("window.scrollX")}} ermittelt werden), um ein Begrenzungsrechteck zu erhalten, das unabhängig von der aktuellen Scrollposition ist.

## Beispiele

### Grundlegend

Dieses einfache Beispiel ruft das `DOMRect`-Objekt ab, das das Begrenzungsrechteck eines einfachen `<div>`-Elements darstellt, und druckt seine Eigenschaften darunter aus.

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

Beachten Sie, wie die `width`/`height` gleich ihrer `width`/`height` + `padding` sind.

Beachten Sie auch, wie die Werte von `x`/`left`, `y`/`top`, `right` und `bottom` gleich dem absoluten Abstand von der entsprechenden Kante des Viewports zu dieser Seite des Elements sind, in jedem Fall.

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

- {{domxref("Element.getClientRects", "getClientRects()")}}
