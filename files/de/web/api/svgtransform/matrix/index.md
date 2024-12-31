---
title: "SVGTransform: matrix-Eigenschaft"
short-title: matrix
slug: Web/API/SVGTransform/matrix
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die **`matrix`**-Eigenschaft der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle gibt die Transformationsmatrix an, die der Transformation `type` entspricht. Diese Eigenschaft ist schreibgeschützt.

Falls das `matrix`-Objekt direkt verändert wird (d.h. ohne die Methoden der `SVGTransform`-Schnittstelle selbst zu verwenden), ändert sich der `type` der `SVGTransform` zu `SVG_TRANSFORM_MATRIX`.

- Für `SVG_TRANSFORM_MATRIX` enthält die Matrix die a, b, c, d, e, f Werte, die vom Benutzer bereitgestellt werden.

- Für `SVG_TRANSFORM_TRANSLATE` repräsentieren e und f die Verschiebungswerte (a=1, b=0, c=0 und d=1).

- Für `SVG_TRANSFORM_SCALE` repräsentieren a und d die Skalierungswerte (b=0, c=0, e=0 und f=0).

- Für `SVG_TRANSFORM_SKEWX` und `SVG_TRANSFORM_SKEWY` repräsentieren a, b, c und d die Matrix, die die angegebene Scherung ergibt (e=0 und f=0).

- Für `SVG_TRANSFORM_ROTATE` repräsentieren a, b, c, d, e und f zusammen die Matrix, die die angegebene Drehung ergibt. Wenn die Drehung um den Mittelpunkt (0, 0) erfolgt, sind e und f gleich null.

## Wert

Ein dynamisches [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

## Beispiele

### Zugriff auf und Modifizierung der Matrix

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="red" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a rotation transform
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(30, 100, 100); // Rotate 30 degrees
transformList.appendItem(rotateTransform);

// Access the matrix
const matrix = transformList.getItem(0).matrix;
console.log(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);

// Modify the matrix directly
matrix.a = 2; // Double the horizontal scaling
console.log(transformList.getItem(0).type); // Output: 1 (SVG_TRANSFORM_MATRIX)
```

### Verständnis von Transformationstypen

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Apply a translation transform
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// Access the matrix
const matrix = transformList.getItem(0).matrix;
console.log(matrix.e, matrix.f); // Output: 20, 30
console.log(transformList.getItem(0).type); // Output: 2 (SVG_TRANSFORM_TRANSLATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform.type`](/de/docs/Web/API/SVGTransform/type)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
