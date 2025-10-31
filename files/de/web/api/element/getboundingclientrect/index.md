---
title: "Element: getBoundingClientRect() Methode"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("DOM")}}

Die **`Element.getBoundingClientRect()`** Methode gibt ein
[`DOMRect`](/de/docs/Web/API/DOMRect) Objekt zurück, das Informationen über die Größe eines Elements und seine
Position relativ zum {{Glossary("Viewport", "Viewport")}} bereitstellt.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt, welches das kleinste Rechteck ist,
das das gesamte Element einschließlich seines Innenabstands (`padding`) und Randbreite (`border-width`) enthält. Die
Eigenschaften `left`, `top`, `right`, `bottom`,
`x`, `y`, `width` und `height` beschreiben die Position und Größe des gesamten Rechtecks in Pixeln. Andere Eigenschaften als
`width` und `height` sind relativ zur oberen linken Ecke des Viewports.

![DOMRect-Objekt, das das kleinste Rechteck darstellt, das das gesamte Element enthält.](element-box-diagram.png)

Die `width` und `height` Eigenschaften des [`DOMRect`](/de/docs/Web/API/DOMRect)
Objekts, das von der Methode zurückgegeben wird, beinhalten den `padding` und
`border-width`, nicht nur die Inhaltsbreite/-höhe. Im Standard-Box-Modell
entspräche dies der `width` oder `height` Eigenschaft des
Elements + `padding` + `border-width`. Aber wenn [`box-sizing: border-box`](/de/docs/Web/CSS/Reference/Properties/box-sizing) für das Element gesetzt ist, wäre dies direkt gleich seiner `width` oder
`height`.

Der zurückgegebene Wert kann als die Vereinigung der Rechtecke betrachtet werden, die durch
[`getClientRects()`](/de/docs/Web/API/Element/getClientRects) für das Element zurückgegeben werden, d.h. die CSS
Border-Boxen, die mit dem Element assoziiert sind.

Leere Border-Boxen werden komplett ignoriert. Wenn alle Border-Boxen des Elements leer sind,
wird ein Rechteck mit einer `width` und `height` von Null
zurückgegeben, wobei die `top` und `left` der oberen linken Ecke der Border-Box
für die erste CSS-Box (in Inhaltsreihenfolge) des Elements entspricht.

Der Scrollbetrag, der im Viewport-Bereich (oder einem anderen
scrollbaren Element) erfolgt ist, wird beim Berechnen des Begrenzungsrechtecks berücksichtigt. Das
bedeutet, dass sich die Begrenzungskanten des Rechtecks (`top`, `right`,
`bottom`, `left`) jedes Mal ändern, wenn sich die Scrollposition ändert (da ihre Werte relativ zum Viewport und nicht absolut sind).

Wenn Sie das Begrenzungsrechteck relativ zur oberen linken Ecke des Dokuments benötigen,
addieren Sie einfach die aktuelle Scrollposition zu den `top` und `left`
Eigenschaften (diese können mit [`window.scrollY`](/de/docs/Web/API/Window/scrollY) und
[`window.scrollX`](/de/docs/Web/API/Window/scrollX) ermittelt werden), um ein Begrenzungsrechteck zu erhalten, das unabhängig von der
aktuellen Scrollposition ist.

## Beispiele

### Grundlegend

Dieses einfache Beispiel ruft das `DOMRect` Objekt ab, das das Begrenzungsrechteck
eines einfachen `<div>` Elements darstellt, und gibt seine Eigenschaften
unterhalb davon aus.

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

Beachten Sie, wie die `width`/`height` gleich ihrer
`width`/`height` + `padding` sind.

Beachten Sie auch, wie die Werte von `x`/`left`,
`y`/`top`, `right` und `bottom` gleich dem absoluten Abstand vom relevanten Rand des Viewports zu
dieser Seite des Elements sind, in jedem Fall.

### Scrollen

Dieses Beispiel demonstriert, wie sich das Begrenzungsrechteck verändert, wenn das Dokument gescrollt wird.

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
