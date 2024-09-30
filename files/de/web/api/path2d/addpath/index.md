---
title: "Path2D: Methode addPath()"
short-title: addPath()
slug: Web/API/Path2D/addPath
l10n:
  sourceCommit: bee00a5446184d5ef1cd338b980210c676186a30
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`Path2D.addPath()`**-Methode
der Canvas 2D API fügt ein [`Path2D`](/de/docs/Web/API/Path2D)-Objekt zu einem anderen
`Path2D`-Objekt hinzu.

## Syntax

```js-nolint
addPath(path)
addPath(path, transform)
```

### Parameter

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der hinzugefügt werden soll.
- `transform` {{optional_inline}}
  - : Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), das als Transformationsmatrix für den hinzuzufügenden Pfad verwendet wird. (Technisch gesehen ein Objekt, das dieselben Eigenschaften wie ein `DOMMatrix`-Objekt besitzt.)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Hinzufügen eines Pfades zu einem bestehenden Pfad

In diesem Beispiel wird ein Pfad zu einem anderen hinzugefügt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Zuerst erstellen wir zwei separate [`Path2D`](/de/docs/Web/API/Path2D)-Objekte, die jeweils ein
Rechteck enthalten, das mit der [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)-
Methode erstellt wurde. Dann erstellen wir eine Matrix mit [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix). Wir fügen dann den zweiten Pfad dem ersten mit `addPath()` hinzu und wenden auch die Matrix an, um den zweiten Pfad nach rechts zu verschieben.
Schließlich zeichnen wir den ersten Pfad (der nun beide Rechtecke enthält) mit
[`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill).

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
