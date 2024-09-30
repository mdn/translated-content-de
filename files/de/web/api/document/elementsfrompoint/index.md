---
title: "Document: elementsFromPoint()-Methode"
short-title: elementsFromPoint()
slug: Web/API/Document/elementsFromPoint
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}

Die **`elementsFromPoint()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein Array von allen Elementen an den angegebenen Koordinaten (relativ zum Viewport) zurück. Die Elemente sind vom obersten bis zum untersten Kasten des Viewports geordnet.

Sie funktioniert in ähnlicher Weise wie die [`elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)-Methode.

## Syntax

```js-nolint
elementsFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes.
- `y`
  - : Die vertikale Koordinate eines Punktes.

### Rückgabewert

Ein Array von [`Element`](/de/docs/Web/API/Element)-Objekten, geordnet vom obersten bis zum untersten Kasten des Viewports.

## Beispiele

### HTML

```html
<div>
  <p>Some text</p>
</div>
<p>Elements at point 30, 20:</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  elements.forEach((elt, i) => {
    output.textContent += elt.localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  });
} else {
  output.innerHTML = `<span style="color: red">
  Browser does not support
  <code>document.elementsFromPoint()</code>
</span>
`;
}
```

{{EmbedLiveSample('Examples', '420', '160')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
