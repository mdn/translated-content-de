---
title: "Path2D: Methode addPath()"
short-title: addPath()
slug: Web/API/Path2D/addPath
l10n:
  sourceCommit: bee00a5446184d5ef1cd338b980210c676186a30
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`Path2D.addPath()`** Methode der Canvas 2D API fügt ein [`Path2D`](/de/docs/Web/API/Path2D) Objekt zu einem anderen `Path2D` Objekt hinzu.

## Syntax

```js-nolint
addPath(path)
addPath(path, transform)
```

### Parameter

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D) Pfad, der hinzugefügt werden soll.
- `transform` {{optional_inline}}
  - : Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die als Transformationsmatrix für den hinzugefügten Pfad verwendet werden soll. (Technisch gesehen ein Objekt, das dieselben Eigenschaften wie ein `DOMMatrix` Objekt besitzt.)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Pfad zu einem vorhandenen Pfad hinzufügen

Dieses Beispiel fügt einen Pfad zu einem anderen hinzu.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Zuerst erstellen wir zwei separate [`Path2D`](/de/docs/Web/API/Path2D) Objekte, von denen jedes ein Rechteck enthält, das mit der [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect) Methode erstellt wurde. Dann erstellen wir eine Matrix mit [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix). Wir fügen dann den zweiten Pfad zum ersten mit `addPath()` hinzu und wenden außerdem die Matrix an, um den zweiten Pfad nach rechts zu verschieben. Schließlich zeichnen wir den ersten Pfad (der nun beide Rechtecke enthält) mit [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create first path and add a rectangle
let p1 = new Path2D();
p1.rect(0, 0, 100, 150);

// Create second path and add a rectangle
let p2 = new Path2D();
p2.rect(0, 0, 100, 75);

// Create transformation matrix that moves 200 points to the right
let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// Add second path to the first path
p1.addPath(p2, m);

// Draw the first path
ctx.fill(p1);
```

#### Ergebnis

{{ EmbedLiveSample('Adding_a_path_to_an_existing_path', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`Path2D`](/de/docs/Web/API/Path2D)
